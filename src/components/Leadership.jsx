import { FiAward } from 'react-icons/fi';
import Reveal from './Reveal';
import { leadership } from '../data/resumeData';
import './Leadership.css';

export default function Leadership() {
  return (
    <section id="leadership" className="section leadership">
      <div className="container">
        <Reveal>
          <p className="section-label">Leadership & Awards</p>
          <h2 className="section-title">Beyond the <em>Resume</em></h2>
        </Reveal>

        <div className="leadership__list">
          {leadership.map((item, i) => (
            <Reveal delay={i * 0.06} key={item}>
              <div className="leadership__item">
                <FiAward className="leadership__icon" />
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
