import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PixelRobotSprite from './PixelRobotSprite';
import './PixelRobot.css';

export default function PixelRobot() {
  const [path, setPath] = useState(null);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!window.matchMedia('(min-width: 1440px)').matches) return;

    let cancelled = false;
    const timer = setTimeout(() => {
      if (cancelled) return;
      const logo = document.querySelector('.navbar__logo');
      const tile = document.querySelector('.heatmap-sidebar__tile');
      if (!logo || !tile) return;
      const logoRect = logo.getBoundingClientRect();
      const tileRect = tile.getBoundingClientRect();
      setPath({
        startX: logoRect.left,
        startY: logoRect.top,
        endX: tileRect.left + 6,
        endY: tileRect.top - 36,
      });
    }, 900);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  if (!path) return null;

  const { startX, startY, endX, endY } = path;
  const midX = startX + (endX - startX) * 0.5;
  const midY = startY + (endY - startY) * 0.55;
  const apex1 = Math.min(startY, midY) - 46;
  const apex2 = Math.min(midY, endY) - 46;

  return (
    <motion.svg
      className="pixel-robot"
      viewBox="0 0 8 10"
      aria-hidden="true"
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, midX, midX, endX, endX],
        y: [startY, apex1, midY, apex2, endY],
        opacity: [0, 1, 1, 1, 1],
      }}
      transition={{ duration: 2.1, times: [0, 0.3, 0.5, 0.8, 1], ease: 'easeInOut' }}
      onAnimationComplete={() => setLanded(true)}
      style={{ position: 'fixed', top: 0, left: 0 }}
    >
      <motion.g
        animate={landed ? { y: [0, -0.9, 0] } : { y: 0 }}
        transition={landed ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } : undefined}
      >
        <PixelRobotSprite />
      </motion.g>
    </motion.svg>
  );
}
