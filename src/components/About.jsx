import { FiMapPin } from 'react-icons/fi';
import Reveal from './Reveal';
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
              <div className="edu-card">
                <div className="edu-card__head">
                  <h3>{edu.school}</h3>
                  <span className="edu-card__period">{edu.period}</span>
                </div>
                <p className="edu-card__loc"><FiMapPin /> {edu.location}</p>
                <p className="edu-card__degree">{edu.degree}</p>
                {edu.note && <span className="pill">{edu.note}</span>}
                {edu.details.map((d) => (
                  <p className="edu-card__detail" key={d}>{d}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
