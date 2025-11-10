import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>That page doesn&apos;t exist (yet).</p>
      <Link className="btn" to="/">
        Return home
      </Link>
    </div>
  );
}

export default NotFoundPage;
