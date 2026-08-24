import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import BrowserFrame from './BrowserFrame';
import ProjectGraphic from './ProjectGraphic';
import { projects } from '../data/resumeData';
import './Projects.css';

function ProjectLink({ p }) {
  const hasLink = p.link && p.link !== '#';
  if (hasLink) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className={p.isCircle ? 'btn btn--primary btn--sm' : 'project-row__link'}
      >
        {p.isCircle ? 'View Website' : p.linkLabel} <FiArrowUpRight />
      </a>
    );
  }
  return (
    <span className="project-row__link project-row__link--pending">
      {p.noLinkReason || 'Link coming soon'}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've <em>Built</em></h2>
        </Reveal>

        <div className="project-rows">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal delay={0.05} key={p.title}>
                <div className={`project-row${reversed ? ' project-row--reverse' : ''}`}>
                  <div className="project-row__visual">
                    <Link to={`/projects/${p.slug}`} className="project-row__graphic-link">
                      <TiltCard maxTilt={4}>
                        <BrowserFrame domain={p.domain} image={p.image}>
                          <ProjectGraphic type={p.graphic} />
                        </BrowserFrame>
                      </TiltCard>
                    </Link>
                  </div>

                  <div className="project-row__text">
                    <div className="project-row__head">
                      <span className="pill">{p.period}</span>
                      {p.companyLogo && (
                        <img src={p.companyLogo} alt={p.company} className="project-row__company-logo" />
                      )}
                    </div>
                    <Link to={`/projects/${p.slug}`} className="project-row__title-link">
                      <h3>{p.title}</h3>
                    </Link>
                    {p.tagline && <p className="project-row__tagline">{p.tagline}</p>}
                    <ul className="project-row__bullets">
                      {p.bullets.slice(0, 3).map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <div className="project-row__tech">
                      {p.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="project-row__footer">
                      <Link to={`/projects/${p.slug}`} className="btn btn--ghost btn--sm">
                        View Details <FiArrowRight />
                      </Link>
                      <ProjectLink p={p} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
