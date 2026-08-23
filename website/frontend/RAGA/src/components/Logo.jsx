import { Link } from 'react-router-dom';
import './Logo.css';

/** The RAGA wordmark. `size` is 'sm' (navbar) or 'lg' (footer). */
export default function Logo({ size = 'sm' }) {
  return (
    <Link to="/" className={`logo logo--${size}`} aria-label="RAGA Travel and Tours, home">
      <img src="/logo.png" alt="RAGA Travel and Tours" />
    </Link>
  );
}
