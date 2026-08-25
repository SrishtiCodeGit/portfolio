import { FiAward } from 'react-icons/fi';
import Reveal from './Reveal';
import { riskColor } from '../utils/riskColor';
import { leadership } from '../data/resumeData';
import './Leadership.css';

function splitLeadership(item) {
  const idx = item.indexOf(':');
  if (idx === -1) return { title: item, desc: null };
  return { title: item.slice(0, idx).trim(), desc: item.slice(idx + 1).trim() };
}

export default function Leadership() {
  return (
    <section id="leadership" className="section leadership">
      <div className="container">
        <Reveal>
          <p className="section-label">Leadership & Awards</p>
          <h2 className="section-title">Beyond the <em>Resume</em></h2>
        </Reveal>

        <div className="leadership__grid">
          {leadership.map((item, i) => {
            const { title, desc } = splitLeadership(item);
            const color = riskColor(leadership.length > 1 ? i / (leadership.length - 1) : 0);
            return (
              <Reveal delay={i * 0.06} key={item}>
                <div className="leadership__tile" style={{ '--tile-color': color }}>
                  <FiAward className="leadership__icon" />
                  <p className="leadership__title">{title}</p>
                  {desc && <p className="leadership__desc">{desc}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
