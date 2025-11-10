import { Link } from 'react-router-dom';
import LoadingState from '../components/LoadingState';
import ProjectCard from '../components/ProjectCard';
import { usePortfolioData } from '../context/PortfolioContext';

function HomePage() {
  const { profile, featuredProject, loading } = usePortfolioData();

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
            <p className="hero__stat-value">20+</p>
            <p className="hero__stat-label">Projects shipped</p>
          </div>
          <div>
            <p className="hero__stat-value">2w</p>
            <p className="hero__stat-label">Avg turnaround</p>
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
          <h3>A designer-friendly developer</h3>
          <p>
            {profile.intro}{' '}
            I collaborate closely with designers, ensuring the final build feels
            as good as the original concept. Accessibility, performance, and clear
            communication guide my process.
          </p>
          <Link className="link" to="/about">
            Read more {'->'}
          </Link>
        </article>
        <article className="card">
          <p className="eyebrow">Availability</p>
          <h3>Accepting new work</h3>
          <p>
            I'm currently open for freelance engagements, internships, and
            in-house product roles that combine UI engineering and product
            strategy.
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
