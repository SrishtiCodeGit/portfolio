import Reveal from './Reveal';
import pairPhoto from '../assets/community/un-women-pair.webp';
import groupPhoto from '../assets/community/un-women-group.webp';
import './Community.css';

const photos = [
  { src: pairPhoto, alt: 'Two women smiling in front of a UN Women backdrop' },
  { src: groupPhoto, alt: 'A group of women entrepreneurs and leaders posing at a UN Women event' },
];

export default function Community() {
  return (
    <section id="community" className="section community">
      <div className="container">
        <Reveal>
          <p className="section-label">Community</p>
          <h2 className="section-title">Learning from women who <em>build</em></h2>
        </Reveal>

        <div className="community__grid">
          <Reveal delay={0.1}>
            <div className="community__text">
              <p>
                I love being around women who make a social impact in the world. Spending
                time with entrepreneurs motivates me more than almost anything else.
              </p>
              <p>
                I show up to learn: how they frame a problem, how they pitch it, and how
                they get a room to believe in an idea.
              </p>
            </div>
          </Reveal>

          <div className="community__photos">
            {photos.map((photo, i) => (
              <Reveal delay={0.15 + i * 0.1} key={photo.src}>
                <figure className="community__photo">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
