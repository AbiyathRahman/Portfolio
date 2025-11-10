import { useState } from 'react';
import PropTypes from 'prop-types';
import { submitContactMessage } from '../services/contactService';

const initialFormState = { name: '', email: '', message: '' };

function ContactForm({ headline = "Let's collaborate on something great." }) {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback('Please complete all fields.');
      return;
    }

    try {
      setStatus('submitting');
      const messagePayload = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        submittedAt: new Date().toISOString(),
        status: 'new',
        source: 'portfolio-site',
      };

      const result = await submitContactMessage(messagePayload);
      setStatus('success');
      setFeedback(
        result.stored
          ? 'Thanks! Your message is on its way.'
          : 'Message logged locally. Configure Firebase to persist messages.',
      );
      setForm(initialFormState);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="contact-form">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>{headline}</h2>
        <p>
          Share a bit about your project, timeline, or questions and I'll respond
          within two business days.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <button className="btn" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
        {feedback && (
          <p
            className={`contact-form__feedback contact-form__feedback--${status}`}
            role={status === 'error' ? 'alert' : undefined}
          >
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
}

ContactForm.propTypes = {
  headline: PropTypes.string,
};

export default ContactForm;
