import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal';
import ProjectGraphic from './ProjectGraphic';
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
          {projects.map((p, i) => {
            const hasLink = p.link && p.link !== '#';
            return (
              <Reveal delay={i * 0.1} key={p.title}>
                <motion.div
                  className="project-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectGraphic type={p.graphic} />

                  <div className="project-card__body">
                    <div className="project-card__head">
                      <span className="pill">{p.period}</span>
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

                    <div className="project-card__footer">
                      {hasLink ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className={p.isCircle ? 'btn btn--primary btn--sm' : 'project-card__link'}
                        >
                          {p.isCircle ? 'View Website' : p.linkLabel} <FiArrowUpRight />
                        </a>
                      ) : (
                        <span className="project-card__link project-card__link--pending">
                          {p.isCircle ? 'Website link coming soon' : `${p.linkLabel} link coming soon`}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
