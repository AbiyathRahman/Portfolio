import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <header>
        <p className="project-card__stack">{project.stack?.join(' | ')}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </header>

      <ul className="project-card__highlights">
        {project.highlights?.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project-card__actions">
        <Link className="btn btn--ghost" to={`/portfolio/${project.id}`}>
          Case Study
        </Link>
        {project.links?.demo && (
          <a className="btn" href={project.links.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {project.links?.repo && (
          <a className="btn btn--outline" href={project.links.repo} target="_blank" rel="noreferrer">
            Repository
          </a>
        )}
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      demo: PropTypes.string,
      repo: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectCard;
