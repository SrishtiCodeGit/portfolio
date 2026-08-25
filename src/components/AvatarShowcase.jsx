import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import Reveal from './Reveal';
import { profile, hackathon, projects, blog } from '../data/resumeData';
import './AvatarShowcase.css';

const achievements = [
  { key: 'hackathon', value: `"${hackathon.award}"` },
  { key: 'education', value: '"M.S. ERM · Columbia"' },
  { key: 'founder', value: '"Circle"' },
  { key: 'writer', value: `"${blog.name}"` },
  { key: 'impact', value: '"-30% operational risk"' },
  { key: 'shipped', value: `"${projects.length} projects shipped"` },
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

        <div className="avatar-showcase__panel">
          <Reveal delay={0.1}>
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
          <motion.ul
            className="avatar-showcase__achievements"
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {achievements.map((a) => (
              <motion.li key={a.key} className="avatar-showcase__achievement-line" variants={listItem}>
                <FiCheck className="avatar-showcase__check" />
                <span className="avatar-showcase__key">{a.key}</span>
                <span className="avatar-showcase__value">{a.value}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
