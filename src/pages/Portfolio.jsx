import {
  ShoppingBagIcon,
  ClipboardIcon,
  CloudIcon,
  ChartIcon,
} from '../components/Icons';
import './Portfolio.css';

const projects = [
  {
    title: 'E-commerce platform',
    description:
      'A full-featured online shopping experience with a headless storefront and a custom checkout.',
    Icon: ShoppingBagIcon,
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task management app',
    description:
      'A collaborative project tool with real-time updates and offline-first sync.',
    Icon: ClipboardIcon,
    tags: ['React', 'Firebase', 'Material UI'],
  },
  {
    title: 'Weather dashboard',
    description:
      'Location-aware forecasts with hourly charts and severe-weather alerts.',
    Icon: CloudIcon,
    tags: ['React', 'API integration', 'Charts'],
  },
  {
    title: 'Social analytics',
    description:
      'A reporting dashboard unifying engagement metrics across five networks.',
    Icon: ChartIcon,
    tags: ['React', 'D3.js', 'REST API'],
  },
];

const Portfolio = () => (
  <div className="page container">
    <header className="page-header">
      <span className="eyebrow">Portfolio</span>
      <h1>Selected work</h1>
      <p className="lead">
        A few recent projects, and the stacks we reached for to build them.
      </p>
    </header>

    <ul className="portfolio-grid">
      {projects.map((project) => (
        <li key={project.title} className="card card--interactive">
          <span className="card-icon">
            <project.Icon />
          </span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tag-row portfolio-tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Portfolio;
