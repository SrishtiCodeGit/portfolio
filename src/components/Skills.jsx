import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { skills } from '../data/resumeData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I Work <em>With</em></h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, gi) => (
            <Reveal delay={gi * 0.1} key={group.category}>
              <div className="skills__group">
                <h3>{group.category}</h3>
                <div className="skills__chips">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      className="skill-chip"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: gi * 0.1 + i * 0.02 }}
                      whileHover={{ y: -3, borderColor: 'var(--accent)' }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
