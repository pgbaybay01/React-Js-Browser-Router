import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="page container not-found">
    <span className="eyebrow">Error 404</span>
    <h1>This page doesn&rsquo;t exist</h1>
    <p className="lead">
      The link may be out of date, or the address might have a typo in it.
    </p>
    <Link to="/" className="btn btn--primary">
      Back to home
    </Link>
  </div>
);

export default NotFound;
