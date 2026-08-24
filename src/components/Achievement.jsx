import { Link } from 'react-router-dom';
import { FiAward, FiArrowUpRight, FiArrowRight, FiGithub } from 'react-icons/fi';
import Reveal from './Reveal';
import LogoBadge from './LogoBadge';
import YouTubeEmbed from './YouTubeEmbed';
import { hackathon } from '../data/resumeData';
import './Achievement.css';

export default function Achievement() {
  return (
    <section id="achievement" className="section achievement">
      <div className="container">
        <Reveal>
          <div className="achievement__card">
            <div className="achievement__grid">
              <div className="achievement__info">
                <span className="achievement__trophy">
                  <FiAward /> Hackathon Winner
                </span>
                <h2 className="achievement__title">{hackathon.projectName}</h2>
                <p className="achievement__award">
                  {hackathon.award} <span className="achievement__prize">· {hackathon.prize}</span>
                </p>
                <p className="achievement__event">
                  {hackathon.event} · {hackathon.eventLocation}
                </p>
                <p className="achievement__tagline">{hackathon.tagline}</p>

                <div className="achievement__team">
                  <span className="achievement__team-label">Team</span>
                  <div className="achievement__team-list">
                    {hackathon.team.map((name) => (
                      <div className="achievement__teammate" key={name}>
                        <LogoBadge name={name} size={34} shape="circle" />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="achievement__actions">
                  <Link to={`/projects/${hackathon.slug}`} className="btn btn--primary">
                    View Full Project <FiArrowRight />
                  </Link>
                  <a href={hackathon.githubUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
                    <FiGithub /> GitHub
                  </a>
                  <a href={hackathon.eventUrl} target="_blank" rel="noreferrer" className="achievement__event-link">
                    View Event <FiArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="achievement__video">
                <YouTubeEmbed
                  videoId={hackathon.videoId}
                  thumbnail={hackathon.videoThumb}
                  title={`${hackathon.projectName} demo video`}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
