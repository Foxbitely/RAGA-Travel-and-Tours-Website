import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/site';
import Button from './Button';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  /* The mobile menu remembers the page it was opened on, so it closes
     by itself whenever the route changes. */
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Add a hairline + shadow to the header once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Escape closes the mobile menu */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenOn(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Logo />

        <nav className="nav__links" aria-label="Main">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__cta">
          <Button to="/book">Book Now</Button>
        </div>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span className={`nav__burger-box ${open ? 'is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}
        hidden={!open}
      >
        <ul className="nav__mobile-list container">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav__mobile-link ${isActive ? 'nav__mobile-link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav__mobile-cta">
            <Button to="/book" size="lg" full>
              Book Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
