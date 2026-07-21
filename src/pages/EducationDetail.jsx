import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiCheck } from 'react-icons/fi';
import LogoBadge from '../components/LogoBadge';
import { education } from '../data/resumeData';
import './DetailPage.css';

export default function EducationDetail() {
  const { slug } = useParams();
  const edu = education.find((e) => e.slug === slug);

  if (!edu) return <Navigate to="/" replace />;

  return (
    <div className="detail-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/#about" className="detail-back">
            <FiArrowLeft /> Back to home
          </Link>
        </motion.div>

        <motion.div
          className="detail-head"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LogoBadge name={edu.school} src={edu.logo} size={72} shape="rounded" />
          <div>
            <p className="detail-eyebrow">{edu.period}</p>
            <h1>{edu.school}</h1>
            <p className="detail-loc"><FiMapPin /> {edu.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <h2 className="detail-degree">{edu.degree}</h2>
          {edu.note && <span className="pill">{edu.note}</span>}
          <p className="detail-summary">{edu.summary}</p>
        </motion.div>

        <div className="detail-grid">
          <motion.div
            className="detail-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <h3>Coursework</h3>
            <div className="detail-chips">
              {edu.coursework.map((c, i) => (
                <motion.span
                  key={c}
                  className="detail-chip"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.03 }}
                  whileHover={{ y: -3, borderColor: 'var(--accent)' }}
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {edu.certifications.length > 0 && (
            <motion.div
              className="detail-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Certifications</h3>
              <ul className="detail-list">
                {edu.certifications.map((c) => (
                  <li key={c}><FiCheck /> {c}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
