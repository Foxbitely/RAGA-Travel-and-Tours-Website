import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FormField from '../components/FormField';
import FormStatus from '../components/FormStatus';
import Button from '../components/Button';
import { packages, peso } from '../data/site';
import { sendBookingRequest } from '../lib/emailjs';
import './Book.css';

const EMPTY = {
  name: '',
  email: '',
  packageId: '',
  departure: '',
  travellers: '2',
  interest: '',
  notes: '',
  website: '',
};

export default function Book() {
  const [values, setValues] = useState(EMPTY);
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | error
  const [error, setError] = useState('');

  const update = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const chosen = packages.find((p) => p.id === values.packageId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    // Honeypot: real people never see this field, bots fill everything.
    if (values.website) {
      setConfirmed(true);
      return;
    }

    setStatus('sending');
    setError('');

    try {
      await sendBookingRequest({
        name: values.name,
        email: values.email,
        packageName: chosen ? chosen.name : 'Not chosen',
        packageRoute: chosen ? chosen.route : '—',
        duration: chosen ? chosen.duration : '—',
        price: chosen ? peso(chosen.price) : '—',
        departure: values.departure,
        travellers: values.travellers,
        interest: values.interest,
        notes: values.notes,
      });
      setStatus('idle');
      setConfirmed(true);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  const sending = status === 'sending';

  if (confirmed) {
    return (
      <>
        <PageHeader
          eyebrow="Booking"
          title="Request received"
          lead="Nothing has been charged yet. We will confirm availability first."
        />
        <section className="section">
          <div className="container book__done">
            <p className="book__done-body">
              Thanks {values.name || 'there'}. We have your request
              {chosen ? ` for ${chosen.name}` : ''} and will email you within one
              working day to confirm dates and take payment.
            </p>
            <div className="book__done-actions">
              <Button to="/catalogues">Back to the catalogue</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setValues(EMPTY);
                  setConfirmed(false);
                  setStatus('idle');
                }}
              >
                Make another request
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Hold a spot"
        lead="Send a request and we will confirm availability before anything is charged."
      />

      <section className="section">
        <div className="container book__layout">
          <div>
            {status === 'error' && <FormStatus tone="error">{error}</FormStatus>}

            <form className="book__form" onSubmit={handleSubmit}>
            <FormField
              label="Your name"
              name="name"
              value={values.name}
              onChange={update('name')}
              placeholder="Jane Reyes"
              disabled={sending}
              required
            />
            <FormField
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={update('email')}
              placeholder="jane@example.com"
              disabled={sending}
              required
            />

            <FormField
              className="field--wide"
              as="select"
              label="Package"
              name="packageId"
              value={values.packageId}
              onChange={update('packageId')}
              required
            >
              <option value="">Choose a package</option>
              {packages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — {p.route} ({p.duration})
                </option>
              ))}
            </FormField>

            <FormField
              label="Preferred departure"
              type="date"
              name="departure"
              value={values.departure}
              onChange={update('departure')}
              disabled={sending}
              required
            />
            <FormField
              label="Travellers"
              type="number"
              min="1"
              max="20"
              name="travellers"
              value={values.travellers}
              onChange={update('travellers')}
              hint="Minimum 2 pax on international packages."
              disabled={sending}
              required
            />

            <FormField
              className="field--wide"
              as="select"
              label="What are you most after?"
              name="interest"
              value={values.interest}
              onChange={update('interest')}
              disabled={sending}
            >
              <option value="">No preference</option>
              <option value="Local">Around the Philippines</option>
              <option value="International">International</option>
              <option value="Either">Either, surprise me</option>
            </FormField>

            <FormField
              className="field--wide"
              as="textarea"
              label="Anything we should know?"
              name="notes"
              value={values.notes}
              onChange={update('notes')}
              placeholder="Dietary needs, mobility, celebrating something."
              disabled={sending}
            />

            {/* Honeypot — hidden from people and from screen readers */}
            <div className="field--honeypot" aria-hidden="true">
              <label htmlFor="book-website">Leave this field empty</label>
              <input
                id="book-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={update('website')}
              />
            </div>

            <div className="book__submit">
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? 'Sending…' : 'Send booking request'}
              </Button>
              <p className="book__disclaimer">
                No payment is taken at this step.
              </p>
            </div>
            </form>
          </div>

          {/* Live summary of what has been selected so far */}
          <aside className="book__summary">
            <h2 className="book__summary-title">Your request</h2>
            <dl className="book__summary-list">
              <div className="book__summary-row">
                <dt>Package</dt>
                <dd>{chosen ? chosen.name : 'Not chosen yet'}</dd>
              </div>
              <div className="book__summary-row">
                <dt>Route</dt>
                <dd>{chosen ? chosen.route : '—'}</dd>
              </div>
              <div className="book__summary-row">
                <dt>Duration</dt>
                <dd>{chosen ? chosen.duration : '—'}</dd>
              </div>
              <div className="book__summary-row">
                <dt>Departure</dt>
                <dd>{values.departure || '—'}</dd>
              </div>
              <div className="book__summary-row">
                <dt>Travellers</dt>
                <dd>{values.travellers || '—'}</dd>
              </div>
            </dl>

            <div className="book__summary-total">
              <span>{chosen ? chosen.priceLabel : 'Per person'}</span>
              <strong>{chosen ? peso(chosen.price) : '—'}</strong>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
