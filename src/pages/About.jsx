import LoadingState from '../components/LoadingState';
import { usePortfolioData } from '../context/PortfolioContext';

function AboutPage() {
  const { profile, loading } = usePortfolioData();

  if (loading) {
    return <LoadingState message="Collecting your story..." />;
  }

  return (
    <div className="page about-page">
      <header className="section">
        <p className="eyebrow">About</p>
        <h1>Crafting thoughtful, performant web experiences.</h1>
        <p>{profile.intro}</p>
      </header>

      <section className="section">
        <h2>Skills & tools</h2>
        <ul className="skill-tags">
          {profile.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section grid grid--two">
        <div>
          <h2>Education</h2>
          <ul className="timeline">
            {profile.education.map((item) => (
              <li key={item.program}>
                <p className="timeline__title">{item.program}</p>
                <p className="timeline__subtitle">{item.school}</p>
                <p className="timeline__meta">{item.year}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Experience</h2>
          <ul className="timeline">
            {profile.experience.map((item) => (
              <li key={item.role}>
                <p className="timeline__title">{item.role}</p>
                <p className="timeline__subtitle">{item.company}</p>
                <p className="timeline__meta">{item.period}</p>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
