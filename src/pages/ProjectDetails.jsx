import { Link, useParams } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import { usePortfolioData } from '../context/PortfolioContext';
import { getProjectById } from '../hooks/usePortfolioData';

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const { projects, loading } = usePortfolioData();

  if (loading) {
    return <LoadingState message="Loading project details..." />;
  }

  const project = getProjectById(projects, projectId);

  if (!project) {
    return (
      <div className="page">
        <h1>Project not found</h1>
        <p>The project you&apos;re looking for wasn&apos;t found.</p>
        <Link className="btn" to="/portfolio">
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="page project-detail">
      <header className="section">
        <p className="eyebrow">Case study</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="project-detail__meta">
          <div>
            <p className="eyebrow">Role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="eyebrow">Stack</p>
            <p>{project.stack?.join(', ')}</p>
          </div>
        </div>
      </header>

      {(project.problem || project.solution || project.outcome) && (
        <section className="section project-detail__story">
          {project.problem && (
            <>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </>
          )}
          {project.solution && (
            <>
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </>
          )}
          {project.outcome && (
            <>
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </>
          )}
        </section>
      )}

      {project.highlights?.length ? (
        <section className="section">
          <h2>Highlights</h2>
          <ul className="project-detail__list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.links && (
        <section className="section project-detail__links">
          {project.links.demo && (
            <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">
              View Live
            </a>
          )}
          {project.links.repo && (
            <a
              className="btn btn--outline"
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          )}
          <Link className="btn btn--ghost" to="/portfolio">
            Back to list
          </Link>
        </section>
      )}
    </article>
  );
}

export default ProjectDetailsPage;
