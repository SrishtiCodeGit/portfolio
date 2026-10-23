import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import { riskColor } from '../utils/riskColor';
import { founderships } from '../data/resumeData';
import './Founder.css';

export default function Founder() {
  return (
    <section id="founder" className="section founder">
      <div className="container">
        <Reveal>
          <p className="section-label">Founder</p>
          <h2 className="section-title">Things I'm <em>Founding</em></h2>
        </Reveal>

        <div className="founder__grid">
          {founderships.map((f, i) => (
            <Reveal delay={i * 0.08} key={f.name}>
              <Link
                to={`/projects/${f.slug}`}
                className="founder__card"
                style={{ '--founder-color': riskColor(founderships.length > 1 ? i / (founderships.length - 1) : 0) }}
              >
                <div className="founder__top">
                  <span className="pill founder__role">{f.role}</span>
                  {f.status && <span className="pill pill--status">{f.status}</span>}
                </div>
                <h3>{f.name}</h3>
                <p>{f.blurb}</p>
                <span className="founder__cta">
                  View project <FiArrowRight />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
