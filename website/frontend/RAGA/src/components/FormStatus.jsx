import { forwardRef } from 'react';
import './FormStatus.css';

/**
 * Message shown after a form is submitted.
 * tone:  'success' (green, tick) | 'error' (red, exclamation)
 * title: optional bold first line
 *
 * Colour is never the only signal — each tone has its own icon, so the
 * message reads correctly for colour-blind visitors too.
 * role="status" lets screen readers announce it without stealing focus.
 */
const FormStatus = forwardRef(function FormStatus(
  { tone = 'success', title, children, className = '' },
  ref
) {
  return (
    <div
      ref={ref}
      tabIndex={-1}
      className={`formstatus formstatus--${tone} ${className}`}
      role="status"
    >
      <span className="formstatus__icon" aria-hidden="true">
        {tone === 'success' ? '✓' : '!'}
      </span>
      <div className="formstatus__body">
        {title && <p className="formstatus__title">{title}</p>}
        <div className="formstatus__text">{children}</div>
      </div>
    </div>
  );
});

export default FormStatus;
