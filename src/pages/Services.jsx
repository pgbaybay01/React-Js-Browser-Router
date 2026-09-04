import { Link } from 'react-router-dom';
import {
  CodeIcon,
  PaletteIcon,
  DeviceIcon,
  UsersIcon,
  ArrowRightIcon,
} from '../components/Icons';
import './Services.css';

const services = [
  {
    title: 'Web development',
    description:
      'Custom web applications built on a modern, well-tested front-end stack.',
    Icon: CodeIcon,
  },
  {
    title: 'UI/UX design',
    description:
      'Interfaces that are intuitive on first use and hold up under daily use.',
    Icon: PaletteIcon,
  },
  {
    title: 'Mobile apps',
    description:
      'Cross-platform applications that feel native on every device.',
    Icon: DeviceIcon,
  },
  {
    title: 'Consulting',
    description:
      'Architecture reviews and technical guidance for teams that are scaling.',
    Icon: UsersIcon,
  },
];

const Services = () => (
  <div className="page container">
    <header className="page-header">
      <span className="eyebrow">Services</span>
      <h1>What we do</h1>
      <p className="lead">
        Four ways we help teams get a product from idea to production.
      </p>
    </header>

    <ul className="services-grid">
      {services.map((service) => (
        <li key={service.title} className="card card--interactive service-card">
          <span className="card-icon">
            <service.Icon />
          </span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <Link to="/contact" className="btn btn--quiet service-link">
            Learn more
            <ArrowRightIcon size={16} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
