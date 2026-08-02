import { FiArrowUpRight, FiEdit3 } from 'react-icons/fi';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import BrowserFrame from './BrowserFrame';
import { blog } from '../data/resumeData';
import './Blog.css';

export default function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <Reveal>
          <p className="section-label">Writing</p>
          <h2 className="section-title">
            Latest from <em>{blog.name}</em>
          </h2>
        </Reveal>

        <div className="blog__grid">
          <Reveal>
            <div className="blog__info">
              <span className="blog__badge">
                <FiEdit3 /> Personal blog
              </span>
              <p className="blog__tagline">{blog.tagline}</p>
              <p className="blog__description">{blog.description}</p>

              <div className="blog__topics">
                {blog.topics.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="blog__featured">
                <span className="pill">{blog.featured.tag}</span>
                <h3>{blog.featured.title}</h3>
                <p>{blog.featured.excerpt}</p>
              </div>

              <a
                href={blog.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Read the Blog <FiArrowUpRight />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a href={blog.url} target="_blank" rel="noreferrer" className="blog__shot-link">
              <TiltCard className="blog__shot" maxTilt={4}>
                <BrowserFrame domain={blog.domain} image={blog.image} />
              </TiltCard>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
