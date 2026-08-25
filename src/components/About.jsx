import { Link } from 'react-router-dom';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import LogoBadge from './LogoBadge';
import { riskColor } from '../utils/riskColor';
import { education, profile } from '../data/resumeData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="section-label">Education</p>
          <h2 className="section-title">Where I <em>Studied</em></h2>
        </Reveal>

        <div className="about__grid">
          {education.map((edu, i) => {
            const color = riskColor(education.length > 1 ? i / (education.length - 1) : 0);
            return (
              <Reveal delay={i * 0.1} key={edu.school}>
                <Link to={`/education/${edu.slug}`} className="edu-card-link">
                  <TiltCard
                    className={`edu-card ${edu.isAlmaMater ? 'edu-card--alma' : ''}`}
                    maxTilt={6}
                    style={{ '--edu-color': color }}
                  >
                    <div className="edu-card__top">
                      <LogoBadge name={edu.school} src={edu.logo} size={52} shape="rounded" />
                      <div className="edu-card__head">
                        <h3>{edu.school}</h3>
                        <span className="edu-card__period">{edu.period}</span>
                      </div>
                    </div>
                    {edu.isAlmaMater && (
                      <span className="edu-card__mascot">🦁 Go Lions · my alma mater</span>
                    )}
                    <p className="edu-card__loc"><FiMapPin /> {edu.location}</p>
                    <p className="edu-card__degree">{edu.degree}</p>
                    {edu.note && <span className="pill">{edu.note}</span>}
                    <span className="edu-card__cta">
                      View coursework <FiArrowRight />
                    </span>
                  </TiltCard>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="section-label about__label-spaced">About</p>
          <h3 className="about__subheading about__subheading--large">About <em>Me</em></h3>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="about__intro">{profile.intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
