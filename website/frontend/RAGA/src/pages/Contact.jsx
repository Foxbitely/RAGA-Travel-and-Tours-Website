import { useEffect, useRef, useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormField from '../components/FormField';
import FormStatus from '../components/FormStatus';
import Button from '../components/Button';
import { contact } from '../data/site';
import { sendContactMessage } from '../lib/emailjs';
import './Contact.css';

const EMPTY = { name: '', email: '', phone: '', message: '', website: '' };

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const statusRef = useRef(null);

  const update = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  // The message appears above the form, but the visitor has just pressed
  // a button at the bottom of it. Bring the message into view so they
  // see it, especially on a phone.
  useEffect(() => {
    if ((status === 'sent' || status === 'error') && statusRef.current) {
      statusRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      statusRef.current.focus({ preventScroll: true });
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    // Honeypot: real people never see this field, bots fill everything.
    if (values.website) {
      setStatus('sent');
      setValues(EMPTY);
      return;
    }

    setStatus('sending');
    setError('');

    try {
      await sendContactMessage(values);
      setStatus('sent');
      setValues(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  const sending = status === 'sending';

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in touch with us"
        lead="Ready to start planning your dream vacation? We are here to help make it happen."
      />

      <section className="section">
        <div className="container contact__layout">
          <div>
            <h2 className="contact__h2">Send us a message</h2>

            {status === 'sent' && (
              <FormStatus ref={statusRef} tone="success" title="Message sent">
                Thank you. We will reply to your email within one working day.
              </FormStatus>
            )}
            {status === 'error' && (
              <FormStatus ref={statusRef} tone="error" title="Message not sent">
                {error}
              </FormStatus>
            )}

            <form className="contact__form" onSubmit={handleSubmit}>
              <FormField
                label="Full name"
                name="name"
                value={values.name}
                onChange={update('name')}
                placeholder="Juan Dela Cruz"
                autoComplete="name"
                disabled={sending}
                required
              />
              <FormField
                label="Email address"
                type="email"
                name="email"
                value={values.email}
                onChange={update('email')}
                placeholder="juan@example.com"
                autoComplete="email"
                disabled={sending}
                required
              />
              <FormField
                className="field--wide"
                label="Phone number"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={update('phone')}
                placeholder="0912 345 6789"
                autoComplete="tel"
                disabled={sending}
              />
              <FormField
                className="field--wide"
                as="textarea"
                label="Message"
                name="message"
                value={values.message}
                onChange={update('message')}
                placeholder="Tell us where you would like to go and roughly when."
                disabled={sending}
                required
              />

              {/* Honeypot — hidden from people and from screen readers */}
              <div className="field--honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={update('website')}
                />
              </div>

              <div className="contact__submit">
                <Button type="submit" size="lg" full disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>

          <aside className="contact__side">
            <div className="contact__panel">
              <h2 className="contact__h3">Office hours</h2>
              <dl className="contact__hours">
                {contact.hours.map((row) => (
                  <div key={row.days} className="contact__hours-row">
                    <dt>{row.days}</dt>
                    <dd>{row.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="contact__note">
                Messages sent outside these hours are answered on the next working day.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
