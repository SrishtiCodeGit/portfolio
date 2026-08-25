import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './PixelRobot.css';

const ANTENNA = [[3, 0]];

const BODY = [
  [3, 1],
  [2, 2], [3, 2], [4, 2], [5, 2],
  [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
  [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
  [3, 5], [4, 5],
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6],
  [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7],
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8],
  [1, 9], [2, 9], [5, 9], [6, 9],
];

const EYES = [[2, 3], [5, 3]];

export default function PixelRobot() {
  const [path, setPath] = useState(null);

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
    }, 750);

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
      transition={{ duration: 1.3, times: [0, 0.3, 0.5, 0.8, 1], ease: 'easeInOut' }}
      style={{ position: 'fixed', top: 0, left: 0 }}
    >
      {BODY.map(([x, y]) => (
        <rect key={`b-${x}-${y}`} x={x} y={y} width="1" height="1" className="pixel-robot__px pixel-robot__px--body" />
      ))}
      {EYES.map(([x, y]) => (
        <rect key={`e-${x}-${y}`} x={x} y={y} width="1" height="1" className="pixel-robot__px pixel-robot__px--eye" />
      ))}
      {ANTENNA.map(([x, y]) => (
        <rect key={`a-${x}-${y}`} x={x} y={y} width="1" height="1" className="pixel-robot__px pixel-robot__px--antenna" />
      ))}
    </motion.svg>
  );
}
