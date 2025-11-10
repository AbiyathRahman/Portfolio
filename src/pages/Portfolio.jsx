import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import ProjectCard from '../components/ProjectCard';
import { usePortfolioData } from '../context/PortfolioContext';

function PortfolioPage() {
  const { projects, loading, error, source } = usePortfolioData();

  if (loading) {
    return <LoadingState message="Gathering case studies..." />;
  }

  return (
    <div className="page portfolio-page">
      <header className="section">
        <p className="eyebrow">Portfolio</p>
        <h1>Selected work</h1>
        {source === 'fallback' && (
          <div className="alert">
            <p>
              Showing sample data. Add your Firebase configuration to display live
              projects.
            </p>
          </div>
        )}
        {error && <p className="alert alert--error">{error}</p>}
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <section className="section">
        <h2>Want more details?</h2>
        <p>
          Each project includes a deeper dive into the challenge, process, and
          outcome. Choose a project to learn more.
        </p>
        <div className="portfolio-links">
          {projects.map((project) => (
            <Link key={project.id} className="link" to={`/portfolio/${project.id}`}>
              {project.title} {'->'}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
