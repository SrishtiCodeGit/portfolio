import { motion } from 'framer-motion';
import Reveal from './Reveal';
import avatar3d from '../assets/avatar-3d.png';
import './AvatarShowcase.css';

export default function AvatarShowcase() {
  return (
    <section id="avatar" className="section avatar-showcase">
      <div className="container avatar-showcase__inner">
        <Reveal>
          <p className="section-label">bonus</p>
          <h2 className="section-title">Me, Rendered in <em>3D</em></h2>
          <p className="avatar-showcase__caption">
            A little something extra, my 3D self, generated with Meshy AI.
          </p>
        </Reveal>

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
              alt="3D avatar of Srishti Chauhan"
              className="avatar-showcase__img"
              animate={{ scaleX: [1, 0.08, -1, -0.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
