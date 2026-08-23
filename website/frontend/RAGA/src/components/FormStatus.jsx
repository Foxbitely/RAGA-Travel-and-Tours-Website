import './FormStatus.css';

/**
 * Message shown above a form after a submit attempt.
 * tone: 'success' | 'error'
 * Uses role="status" so screen readers announce it without stealing focus.
 */
export default function FormStatus({ tone = 'success', children }) {
  return (
    <p className={`formstatus formstatus--${tone}`} role="status">
      {children}
    </p>
  );
}
