import { useId } from 'react';
import './FormField.css';

/**
 * Label + control pair used by the Contact and Book forms.
 * `as` selects the control: 'input' (default), 'textarea' or 'select'.
 * Children are only used for 'select' options.
 */
export default function FormField({
  as = 'input',
  label,
  hint,
  children,
  className = '',
  ...rest
}) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;

  const controlProps = {
    id,
    className: 'field__control',
    'aria-describedby': hintId,
    ...rest,
  };

  return (
    <div className={`field ${className}`}>
      <label htmlFor={id} className="field__label">
        {label}
      </label>

      {as === 'textarea' && <textarea rows={5} {...controlProps} />}
      {as === 'select' && <select {...controlProps}>{children}</select>}
      {as === 'input' && <input {...controlProps} />}

      {hint && (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      )}
    </div>
  );
}
