import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {
  HomeIcon,
  UserIcon,
  LayersIcon,
  BriefcaseIcon,
  MailIcon,
  MenuIcon,
  CloseIcon,
} from './Icons';
import './Navigation.css';

const navItems = [
  { path: '/', label: 'Home', Icon: HomeIcon, end: true },
  { path: '/about', label: 'About', Icon: UserIcon },
  { path: '/services', label: 'Services', Icon: LayersIcon },
  { path: '/portfolio', label: 'Portfolio', Icon: BriefcaseIcon },
  { path: '/contact', label: 'Contact', Icon: MailIcon },
];

const linkClass = ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`;

const Navigation = ({ isMenuOpen, onOpenMenu, onCloseMenu }) => {
  const location = useLocation();
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  // Closes when the route changes. Clicking the *current* route does not
  // change pathname, so the links also close the menu on click.
  useEffect(() => {
    onCloseMenu();
  }, [location.pathname, onCloseMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onCloseMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen, onCloseMenu]);

  // Resizing up to the desktop bar must not leave a stuck overlay.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const onChange = (e) => {
      if (e.matches) onCloseMenu();
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [onCloseMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;
    // Restore the previous value rather than '' so StrictMode's double
    // mount cannot corrupt it.
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  // Focus moves into the panel on open and back to the trigger on close.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (isMenuOpen) {
      panelRef.current?.focus();
    } else if (wasOpen.current) {
      triggerRef.current?.focus();
    }
    wasOpen.current = isMenuOpen;
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link to="/" className="brand">
          Northbound
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.end} className={linkClass}>
                  <item.Icon size={17} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            ref={triggerRef}
            className="icon-btn nav-trigger"
            onClick={isMenuOpen ? onCloseMenu : onOpenMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Menu'}
          >
            {isMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="menu-backdrop"
            aria-hidden="true"
            onClick={onCloseMenu}
          />
          <div
            id="mobile-menu"
            className="mobile-menu"
            ref={panelRef}
            tabIndex={-1}
          >
            <nav aria-label="Mobile">
              <ul className="mobile-menu-list">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.end}
                      className={linkClass}
                      onClick={onCloseMenu}
                    >
                      <item.Icon size={19} />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              to="/contact"
              className="btn btn--primary mobile-menu-cta"
              onClick={onCloseMenu}
            >
              Get in touch
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
