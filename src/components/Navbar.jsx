import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { profile } from '../data/resumeData';
import './Navbar.css';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar__inner">
        <Link to="/#top" className="navbar__logo">
          SC<span>.</span>
        </Link>
        <nav className="navbar__links">
          {links.map((l) => (
            <Link key={l.href} to={l.href} className="navbar__link">{l.label}</Link>
          ))}
        </nav>
        <div className="navbar__socials">
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
        </div>
        <Link to="/#contact" className="navbar__cta">Let's talk</Link>
        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav className="navbar__mobile">
          {links.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
