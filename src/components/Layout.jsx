import { NavLink, Outlet, Link } from 'react-router-dom';
import { usePortfolioData } from '../context/PortfolioContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

function Layout() {
  const { profile } = usePortfolioData();

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          <span className="brand__dot" aria-hidden="true" />
          <div>
            <p className="brand__name">{profile?.name ?? 'My Portfolio'}</p>
            <p className="brand__tagline">{profile?.headline}</p>
          </div>
        </Link>
        <nav>
          <ul className="nav">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="cta" to="/contact">
          Let&apos;s Talk
        </Link>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p>&copy; {new Date().getFullYear()} {profile?.name}. All rights reserved.</p>
          <p className="site-footer__meta">Built with React and React Router.</p>
        </div>
        <div className="site-footer__links">
          {profile?.links?.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {profile?.links?.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile?.links?.resume && (
            <a href={profile.links.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
        </div>
      </footer>
    </div>
  );
}

export default Layout;
