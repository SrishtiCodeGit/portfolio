import { motion } from 'framer-motion';
import Reveal from './Reveal';
import LogoBadge from './LogoBadge';
import { experience } from '../data/resumeData';
import './Experience.css';

function ExperienceCard({ exp }) {
  const photo = exp.photo && (
    <figure className={`timeline__photo ${exp.photoPortrait ? 'timeline__photo--portrait' : ''}`}>
      <img src={exp.photo} alt={exp.photoAlt} loading="lazy" />
    </figure>
  );

  const details = (
    <>
      {exp.promotion && (
        <div className="promo">
          <p className="promo__headline"><strong>{exp.promotion.headline}</strong></p>
          <ol className="promo__steps">
            {exp.promotion.steps.map((step) => (
              <li className="promo__step" key={step.title}>
                <span className="promo__dot" />
                <span className="promo__label">{step.label}</span>
                <span className="promo__title">{step.title}</span>
                <span className="promo__detail">{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <ul className="timeline__bullets">
        {exp.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="timeline__card">
      <div className="timeline__head">
        <LogoBadge name={exp.company} src={exp.logo} size={48} shape="rounded" />
        <div className="timeline__headtext">
          <h3>{exp.role}</h3>
          <p className="timeline__company">{exp.company} · {exp.location}</p>
        </div>
        <span className="pill timeline__period">{exp.period}</span>
      </div>

      {exp.photoPortrait ? (
        <div className="timeline__split">
          {photo}
          <div className="timeline__main">{details}</div>
        </div>
      ) : (
        <>
          {photo}
          {details}
        </>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've <em>Worked</em></h2>
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
