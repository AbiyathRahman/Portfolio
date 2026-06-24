import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import ProjectCard from '../components/ProjectCard';
import { usePortfolioData } from '../context/PortfolioContext';

function HomePage() {
  const { profile, projects, featuredProject, loading } = usePortfolioData();

  if (loading) {
    return <LoadingState message="Loading your personalized portfolio..." />;
  }

  return (
    <div className="page home-page">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.headline}</h1>
        <p className="hero__lead">{profile.subheadline}</p>
        <div className="hero__actions">
          <Link className="btn" to="/portfolio">
            View Projects
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Contact Me
          </Link>
        </div>
        <div className="hero__stats">
          <div>
            <p className="hero__stat-value">{profile.skills.length}+</p>
            <p className="hero__stat-label">Core skills</p>
          </div>
          <div>
            <p className="hero__stat-value">{projects.length}</p>
            <p className="hero__stat-label">Projects built</p>
          </div>
          <div>
            <p className="hero__stat-value">2026</p>
            <p className="hero__stat-label">Graduating</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <div>
            <p className="eyebrow">Featured Project</p>
            <h2>{featuredProject?.title}</h2>
          </div>
          <Link className="link" to={`/portfolio/${featuredProject?.id}`}>
            Explore case study {'->'}
          </Link>
        </div>
        {featuredProject && <ProjectCard project={featuredProject} />}
      </section>

      <section className="grid grid--two">
        <article className="card">
          <p className="eyebrow">About me</p>
          <h3>Backend-focused full-stack engineer</h3>
          <p>
            {profile.intro}
          </p>
          <Link className="link" to="/about">
            Read more {'->'}
          </Link>
        </article>
        <article className="card">
          <p className="eyebrow">Availability</p>
          <h3>Open to software engineering roles</h3>
          <p>
            I'm graduating in August 2026 and looking for backend or
            full-stack software engineering roles, internships, and
            new-grad opportunities.
          </p>
          <Link className="link" to="/contact">
            Start a conversation {'->'}
          </Link>
        </article>
      </section>
    </div>
  );
}

export default HomePage;
