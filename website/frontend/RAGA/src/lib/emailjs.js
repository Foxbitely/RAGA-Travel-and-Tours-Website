import emailjs from '@emailjs/browser';

/* ==========================================================================
   EmailJS
   One place for the SDK setup and the two send calls. Components import
   sendContactMessage / sendBookingRequest and never touch emailjs directly,
   so swapping the provider later means editing this file only.

   IDs come from environment variables — see .env.example.
   ========================================================================== */

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  bookingTemplateId: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

/** True when every required variable is present. */
export const isEmailConfigured = Boolean(
  config.serviceId && config.publicKey
);

let ready = false;

function init() {
  if (ready || !isEmailConfigured) return;

  emailjs.init({
    publicKey: config.publicKey,
    // Refuse sends from headless browsers — cheap bot filter.
    blockHeadless: true,
    // One send per 10 seconds per visitor. EmailJS returns a rejected
    // promise with a 429-style error if they try more often.
    limitRate: { throttle: 10000 },
  });

  ready = true;
}

/**
 * Thrown when the send fails. `message` is safe to show a visitor.
 */
export class EmailError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = 'EmailError';
    this.cause = cause;
  }
}

async function send(templateId, params) {
  if (!isEmailConfigured || !templateId) {
    throw new EmailError(
      'Email is not configured yet. Please use the email address below instead.'
    );
  }

  init();

  try {
    return await emailjs.send(config.serviceId, templateId, params);
  } catch (error) {
    // EmailJS rejects with { status, text }
    const status = error?.status;

    if (status === 429) {
      throw new EmailError(
        'That was sent a moment ago. Please wait a few seconds before trying again.',
        error
      );
    }

    throw new EmailError(
      'We could not send that message. Please try again, or email us directly.',
      error
    );
  }
}

/** Contact page form. */
export function sendContactMessage({ name, email, phone, message }) {
  return send(config.contactTemplateId, {
    form_type: 'Contact enquiry',
    from_name: name,
    reply_to: email,
    phone: phone || 'Not provided',
    message,
  });
}

/** Booking page form. */
export function sendBookingRequest({
  name,
  email,
  packageName,
  packageRoute,
  duration,
  price,
  departure,
  travellers,
  interest,
  notes,
}) {
  return send(config.bookingTemplateId, {
    form_type: 'Booking request',
    from_name: name,
    reply_to: email,
    package_name: packageName,
    package_route: packageRoute,
    duration,
    price,
    departure,
    travellers,
    interest: interest || 'No preference',
    notes: notes || 'None',
  });
}
