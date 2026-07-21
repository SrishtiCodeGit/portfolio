import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Reveal from './Reveal';
import LogoBadge from './LogoBadge';
import { experience } from '../data/resumeData';
import './Experience.css';

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="timeline__card">
      <button
        type="button"
        className="timeline__head"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <LogoBadge name={exp.company} src={exp.logo} size={48} shape="rounded" />
        <div className="timeline__headtext">
          <h3>{exp.role}</h3>
          <p className="timeline__company">{exp.company} · {exp.location}</p>
        </div>
        <span className="pill timeline__period">{exp.period}</span>
        <motion.span
          className="timeline__chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <FiChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="timeline__collapse"
          >
            <ul className="timeline__bullets">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="experience__hint">Click a company to see what I worked on.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((exp, i) => (
            <div className="timeline__row" key={exp.company}>
              <Reveal delay={i * 0.08} className="timeline__marker-wrap">
                <div className="timeline__marker">
                  <motion.span
                    className="timeline__dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  />
                  {i !== experience.length - 1 && <span className="timeline__line" />}
                </div>
              </Reveal>
              <Reveal delay={i * 0.08 + 0.05} className="timeline__content-wrap">
                <ExperienceCard exp={exp} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
