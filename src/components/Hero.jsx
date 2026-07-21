import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { profile } from '../data/resumeData';
import profilePhoto from '../assets/profile.jpg';
import './Hero.css';

const MotionLink = motion.create(Link);

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
      <svg className="hero__chart" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,220 80,200 160,240 240,160 320,190 400,110 480,150 560,80 640,120 720,50 800,90"
          className="hero__chart-line"
        />
      </svg>
      <div className="container hero__inner">
        <motion.div variants={container} initial="hidden" animate="show" className="hero__text">
          <motion.p variants={item} className="hero__eyebrow">
            Hi, I'm
          </motion.p>
          <motion.h1 variants={item} className="hero__name">
            {profile.name}
          </motion.h1>
          <motion.h2 variants={item} className="hero__title">
            {profile.title}
          </motion.h2>
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
          <motion.div variants={item} className="hero__socials">
            <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
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
      <MotionLink
        to="/#about"
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </MotionLink>
    </section>
  );
}
