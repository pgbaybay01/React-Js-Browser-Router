import './About.css';

const technologies = [
  'React 19',
  'Vite',
  'React Router',
  'CSS Grid & Flexbox',
  'Design tokens',
  'WCAG AA',
];

const About = () => (
  <div className="page container">
    <header className="page-header">
      <span className="eyebrow">About</span>
      <h1>A small team, deliberately</h1>
      <p className="lead">
        We build web products end to end — research, design, and the code that
        ships.
      </p>
    </header>

    <div className="prose">
      <section>
        <h2>Our mission</h2>
        <p>
          Most software is slower and harder to use than it needs to be. We
          take the time to get the fundamentals right: fast loads, clear
          hierarchy, and interfaces that work for everyone regardless of how
          they browse.
        </p>
      </section>

      <section>
        <h2>Our team</h2>
        <p>
          Designers and engineers who would rather ship one considered thing
          than five rushed ones. Everyone here writes code, and everyone here
          talks to users.
        </p>
      </section>

      <section>
        <h2>How we build</h2>
        <p>
          A deliberately small stack, chosen so it stays fast and stays
          maintainable.
        </p>
        <ul className="tag-row tech-list">
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export default About;
