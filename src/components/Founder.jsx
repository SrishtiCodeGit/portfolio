import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import BrowserFrame from './BrowserFrame';
import ProjectGraphic from './ProjectGraphic';
import { founderships } from '../data/resumeData';
import './Founder.css';

export default function Founder() {
  return (
    <section id="founder" className="section founder">
      <div className="container">
        <Reveal>
          <p className="section-label">Founder</p>
          <h2 className="section-title">Things I'm <em>Founding</em></h2>
          <p className="founder__intro">
            The vision behind what I'm building. Each one is also in Projects, where you can see how it works.
          </p>
        </Reveal>

        <div className="founder__grid">
          {founderships.map((f, i) => (
            <Reveal delay={i * 0.08} key={f.name}>
              <div className="founder__card">
                <Link to={`/projects/${f.slug}`} className="founder__visual" aria-label={`${f.name} project`}>
                  <BrowserFrame domain={f.name} image={f.image} imageAlt={f.imageAlt}>
                    <ProjectGraphic type={f.graphic} />
                  </BrowserFrame>
                </Link>
                <div className="founder__top">
                  <span className="pill">{f.role}</span>
                  {f.status && <span className="pill pill--status">{f.status}</span>}
                </div>
                <h3>{f.name}</h3>
                <p>{f.vision}</p>
                <Link to={`/projects/${f.slug}`} className="founder__cta">
                  {f.cta} <FiArrowRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
