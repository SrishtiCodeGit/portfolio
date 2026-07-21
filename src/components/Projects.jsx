import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import BrowserFrame from './BrowserFrame';
import ProjectGraphic from './ProjectGraphic';
import { projects } from '../data/resumeData';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've <em>Built</em></h2>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const hasLink = p.link && p.link !== '#';
            return (
              <Reveal delay={i * 0.1} key={p.title}>
                <TiltCard className="project-card" maxTilt={5}>
                  <Link to={`/projects/${p.slug}`} className="project-card__graphic-link">
                    <BrowserFrame domain={p.domain} image={p.image}>
                      <ProjectGraphic type={p.graphic} />
                    </BrowserFrame>
                  </Link>

                  <div className="project-card__body">
                    <div className="project-card__head">
                      <span className="pill">{p.period}</span>
                    </div>
                    <Link to={`/projects/${p.slug}`} className="project-card__title-link">
                      <h3>{p.title}</h3>
                    </Link>
                    {p.tagline && <p className="project-card__tagline">{p.tagline}</p>}
                    <div className="project-card__tech">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                      {p.tech.length > 4 && <span>+{p.tech.length - 4}</span>}
                    </div>

                    <div className="project-card__footer">
                      <Link to={`/projects/${p.slug}`} className="btn btn--ghost btn--sm">
                        View Details <FiArrowRight />
                      </Link>
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
                          Link coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
