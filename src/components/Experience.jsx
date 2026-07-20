import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { experience } from '../data/resumeData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
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
                <div className="timeline__card">
                  <div className="timeline__head">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="timeline__company">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="pill">{exp.period}</span>
                  </div>
                  <ul className="timeline__bullets">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
