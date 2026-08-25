import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PixelRobotSprite from './PixelRobotSprite';
import './RunningAvatar.css';

export default function RunningAvatar() {
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const measure = () => setWidth(trackRef.current?.offsetWidth || 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <div className="running-avatar-track" ref={trackRef} aria-hidden="true">
      <div className="running-avatar-track__line" />
      {width > 0 && (
        <motion.svg
          className="running-avatar"
          viewBox="0 0 8 10"
          initial={{ x: -40 }}
          animate={{
            x: width + 40,
            y: [0, -3, 0, -3, 0],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            x: { duration: 7, repeat: Infinity, ease: 'linear' },
            y: { duration: 0.45, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 0.45, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <PixelRobotSprite />
        </motion.svg>
      )}
    </div>
  );
}
