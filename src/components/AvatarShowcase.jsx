import { motion } from 'framer-motion';
import Reveal from './Reveal';
import avatar3d from '../assets/avatar-3d.png';
import { profile, hackathon, projects, blog } from '../data/resumeData';
import './AvatarShowcase.css';

const achievements = [
  { label: 'hackathon', value: hackathon.award, color: '#f5b942' },
  { label: 'education', value: 'M.S. ERM · Columbia', color: '#3b82f6' },
  { label: 'founder', value: 'Circle', color: '#a855f7' },
  { label: 'writer', value: blog.name, color: '#ec4899' },
  { label: 'impact', value: '-30% operational risk', color: '#22c55e' },
  { label: 'shipped', value: `${projects.length} projects`, color: '#f97316' },
];

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function AvatarShowcase() {
  return (
    <section id="avatar" className="section avatar-showcase">
      <div className="container">
        <Reveal>
          <p className="section-label">profile</p>
          <h2 className="section-title">
            Who I Am, What I've <em>Built</em>
          </h2>
        </Reveal>

        <div className="avatar-showcase__grid">
          <Reveal delay={0.1}>
            <div className="avatar-showcase__stage">
              <motion.div
                className="avatar-showcase__ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="avatar-showcase__ring avatar-showcase__ring--reverse"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.img
                src={avatar3d}
                alt={`3D avatar of ${profile.name}`}
                className="avatar-showcase__img"
                animate={{ scaleX: [1, 0.08, -1, -0.08, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] }}
              />
              <span className="avatar-showcase__caption">Generated with Meshy AI</span>
            </div>
          </Reveal>

          <div className="avatar-showcase__panel">
            <Reveal delay={0.15}>
              <div className="avatar-showcase__stat-line">
                <span className="avatar-showcase__key">class</span>
                <span className="avatar-showcase__value">"Risk Analyst × AI Builder"</span>
              </div>
              <div className="avatar-showcase__stat-line">
                <span className="avatar-showcase__key">focus</span>
                <span className="avatar-showcase__value">["Enterprise Risk", "Machine Learning", "Full-Stack Dev"]</span>
              </div>
              <div className="avatar-showcase__stat-line">
                <span className="avatar-showcase__key">based_in</span>
                <span className="avatar-showcase__value">"{profile.location}"</span>
              </div>
            </Reveal>

            <p className="avatar-showcase__unlock-label">achievements.unlocked()</p>
            <motion.div
              className="avatar-showcase__badges"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {achievements.map((a) => (
                <motion.span
                  key={a.label}
                  className="gh-badge"
                  variants={listItem}
                  style={{ '--badge-color': a.color }}
                >
                  <span className="gh-badge__label">{a.label}</span>
                  <span className="gh-badge__value">{a.value}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
