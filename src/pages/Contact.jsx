import ContactForm from '../components/ContactForm';
import { usePortfolioData } from '../context/PortfolioContext';

function ContactPage() {
  const { profile } = usePortfolioData();

  return (
    <div className="page contact-page">
      <header className="section">
        <p className="eyebrow">Contact</p>
        <h1>Let's build something memorable.</h1>
        <p>
          Whether you want to collaborate, discuss an open role, or just say hi,
          drop a message. I typically respond within two business days.
        </p>
        <div className="contact-links">
          {profile.links?.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {profile.links?.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.links?.resume && (
            <a href={profile.links.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
        </div>
      </header>

      <ContactForm />
    </div>
  );
}

export default ContactPage;
