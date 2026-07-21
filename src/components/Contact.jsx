import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import Reveal from './Reveal';
import { profile } from '../data/resumeData';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's <em>Connect</em></h2>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <div className="contact__info">
              <p className="contact__lead">
                I'm always open to conversations about risk analytics, AI, and product — reach out directly or send a message.
              </p>
              <div className="contact__links">
                <a href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              </div>
              <p className="contact__meta">{profile.location} · {profile.phone}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'sending'}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'sending' ? 'Sending...' : (<>Send Message <FiSend /></>)}
              </motion.button>

              {status === 'success' && (
                <p className="contact__status contact__status--ok"><FiCheck /> Message sent — I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--err"><FiAlertCircle /> {errorMsg}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
