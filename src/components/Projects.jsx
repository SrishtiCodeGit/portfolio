import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal';
import { projects } from '../data/resumeData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal delay={i * 0.1} key={p.title}>
              <motion.a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="project-card__head">
                  <span className="pill">{p.period}</span>
                  <span className="project-card__link">
                    {p.linkLabel} <FiArrowUpRight />
                  </span>
                </div>
                <h3>{p.title}</h3>
                <ul className="project-card__bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="project-card__tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
