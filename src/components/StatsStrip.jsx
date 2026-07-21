import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { stats } from '../data/resumeData';
import './StatsStrip.css';

function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const start = () => {
    if (started.current) return;
    started.current = true;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return [count, start];
}

function Stat({ value, suffix, label, delay }) {
  const [count, start] = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      onViewportEnter={start}
    >
      <TiltCard className="stat" maxTilt={8}>
        <span className="stat__value">{count}{suffix}</span>
        <span className="stat__label">{label}</span>
      </TiltCard>
    </motion.div>
  );
}

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="container stats-strip__grid">
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}
