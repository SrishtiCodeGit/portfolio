import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import ProjectGraphic from '../components/ProjectGraphic';
import BrowserFrame from '../components/BrowserFrame';
import { projects } from '../data/resumeData';
import './DetailPage.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const hasLink = project.link && project.link !== '#';

  return (
    <div className="detail-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/#projects" className="detail-back">
            <FiArrowLeft /> Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="detail-eyebrow-row">
            <p className="detail-eyebrow">{project.period}</p>
            {project.companyLogo && (
              <img src={project.companyLogo} alt={project.company} className="detail-company-logo" />
            )}
          </div>
          <h1 className="detail-project-title">{project.title}</h1>
          {project.tagline && <p className="detail-summary detail-tagline">{project.tagline}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="detail-graphic-wrap"
        >
          <BrowserFrame domain={project.domain} image={project.image}>
            <ProjectGraphic type={project.graphic} />
          </BrowserFrame>
        </motion.div>

        <motion.div
          className="detail-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <h3>About this project</h3>
          {(project.longDescription || project.bullets).map((p) => (
            <p className="detail-paragraph" key={p}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          className="detail-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <h3>Built with</h3>
          <div className="detail-chips">
            {project.tech.map((t) => (
              <span className="detail-chip" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.34 }}
          className="detail-actions"
        >
          {hasLink ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn--primary">
              {project.isCircle ? 'View Website' : project.linkLabel} <FiArrowUpRight />
            </a>
          ) : (
            <span className="detail-link--pending">
              {project.noLinkReason || `${project.linkLabel} link coming soon`}
            </span>
          )}
          <Link to="/#projects" className="btn btn--ghost">Back to Projects</Link>
        </motion.div>
      </div>
    </div>
  );
}
