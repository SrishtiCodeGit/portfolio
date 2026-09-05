import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profile } from '../data/resumeData';
import profilePhoto from '../assets/profile.jpg';
import columbiaLogo from '../assets/logos/columbia.png';
import TerminalIntro from './TerminalIntro';
import RiskMatrixBg from './RiskMatrixBg';
import './Hero.css';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <RiskMatrixBg />
      <div className="container hero__inner">
        <motion.div variants={container} initial="hidden" animate="show" className="hero__text">
          <motion.div variants={item}>
            <TerminalIntro />
          </motion.div>
          <motion.h1 variants={item} className="hero__name">
            {profile.name}
          </motion.h1>
          <motion.h2 variants={item} className="hero__title">
            {profile.title}
          </motion.h2>
          <motion.a
            variants={item}
            href="https://www.columbia.edu"
            target="_blank"
            rel="noreferrer"
            className="hero__edu-badge"
          >
            <img src={columbiaLogo} alt="Columbia University" />
            <span>Columbia University · M.S. Enterprise Risk Management</span>
          </motion.a>
          <motion.p variants={item} className="hero__tagline">
            {profile.tagline}
          </motion.p>
          <motion.div variants={item} className="hero__actions">
            <Link to="/#projects" className="btn btn--primary">
              View Projects
            </Link>
            <Link to="/#contact" className="btn btn--ghost">
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__photo-wrap"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero__photo-ring"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={profilePhoto} alt={profile.name} className="hero__photo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
