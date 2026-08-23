import { Link } from 'react-router-dom';
import { nav, contact } from '../data/site';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Logo size="lg" />
          <p className="footer__tagline">
            Your journey to a great adventure starts here.
          </p>
          <a
            className="footer__facebook"
            href={contact.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Follow us on Facebook
          </a>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__list">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Contact</h2>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${contact.email}`} className="footer__link">
                {contact.email}
              </a>
            </li>
            {contact.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="footer__link">
                  {phone}
                </a>
              </li>
            ))}
            <li className="footer__muted">{contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>&copy; {year} RAGA Travel and Tours. All rights reserved.</p>
          <p>Built by Kultura Tech</p>
        </div>
      </div>
    </footer>
  );
}
