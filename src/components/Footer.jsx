import { Link } from 'react-router-dom';
import './Footer.css';

const links = [
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p className="footer-brand">
        Northbound
        <span className="footer-note">
          Building fast, accessible web products.
        </span>
      </p>

      <nav aria-label="Footer">
        <ul className="footer-links">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="footer-copy">
        © {new Date().getFullYear()} Northbound. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
