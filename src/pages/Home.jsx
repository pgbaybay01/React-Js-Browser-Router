import { Link } from 'react-router-dom';
import { ZapIcon, LayersIcon, ArrowRightIcon } from '../components/Icons';
import './Home.css';

const features = [
  {
    title: 'Fast performance',
    description:
      'Built on Vite, so the dev server starts instantly and production bundles stay lean.',
    Icon: ZapIcon,
  },
  {
    title: 'Considered design',
    description:
      'A restrained type scale, generous whitespace and a palette that works in either theme.',
    Icon: LayersIcon,
  },
  {
    title: 'Effortless navigation',
    description:
      'Client-side routing that keeps every transition instant and every URL shareable.',
    Icon: ArrowRightIcon,
  },
];

const Home = () => (
  <div className="page">
    <section className="container hero">
      <span className="eyebrow">React · Vite · Router</span>
      <h1 className="hero-title">
        Build faster with modern React.
      </h1>
      <p className="hero-sub">
        A small studio shipping fast, accessible web products — from first
        wireframe to production deploy.
      </p>
      <div className="hero-actions">
        <Link to="/contact" className="btn btn--primary">
          Get started
        </Link>
        <Link to="/portfolio" className="btn btn--ghost">
          View our work
        </Link>
      </div>
    </section>

    <section className="container home-features">
      <h2 className="visually-hidden">What sets us apart</h2>
      <ul className="feature-grid">
        {features.map((feature) => (
          <li key={feature.title} className="card card--interactive">
            <span className="card-icon">
              <feature.Icon />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Home;
