import { Link } from 'react-router-dom';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import CrestBadge from './CrestBadge';
import LogoBadge from './LogoBadge';
import { education, profile } from '../data/resumeData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="about__intro">{profile.intro}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="about__subheading">Education</h3>
        </Reveal>

        <div className="about__grid">
          {education.map((edu, i) => (
            <Reveal delay={0.15 + i * 0.1} key={edu.school}>
              <Link to={`/education/${edu.slug}`} className="edu-card-link">
                <TiltCard
                  className={`edu-card ${edu.isAlmaMater ? 'edu-card--alma' : ''}`}
                  maxTilt={6}
                >
                  <div className="edu-card__top">
                    {edu.isAlmaMater ? (
                      <CrestBadge size={52} />
                    ) : (
                      <LogoBadge name={edu.school} size={48} shape="rounded" />
                    )}
                    <div className="edu-card__head">
                      <h3>{edu.school}</h3>
                      <span className="edu-card__period">{edu.period}</span>
                    </div>
                  </div>
                  {edu.isAlmaMater && (
                    <span className="edu-card__mascot">🦁 Go Lions — my alma mater</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
