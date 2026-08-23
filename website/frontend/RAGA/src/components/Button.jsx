import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Shared call-to-action.
 * Renders a <Link> when `to` is passed, an <a> when `href` is passed,
 * and a <button> otherwise — so styling stays identical across all three.
 *
 * variant: 'solid' | 'outline' | 'ghost'
 * size:    'md' | 'lg'
 */
export default function Button({
  to,
  href,
  variant = 'solid',
  size = 'md',
  full = false,
  children,
  ...rest
}) {
  const className = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    full ? 'btn--full' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
