import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import teamPhoto from '../assets/hackathon/team.webp';
import prizePhoto from '../assets/hackathon/prize.webp';
import unWomenPair from '../assets/community/un-women-pair.webp';
import columbiaPhoto from '../assets/education/columbia-campus.webp';
import srmPhoto from '../assets/education/srm-graduation.webp';
import leadsquaredPhoto from '../assets/experience/leadsquared-post.webp';
import './HeroBackdrop.css';

const photos = [
  { src: columbiaPhoto, position: '50% 35%' },
  { src: teamPhoto, position: '50% 40%' },
  { src: unWomenPair, position: '50% 45%' },
  { src: srmPhoto, position: '50% 30%' },
  { src: prizePhoto, position: '50% 50%' },
  { src: leadsquaredPhoto, position: '50% 35%' },
];

const SHOW_MS = 3800;
const FADE_S = 1.5;

export default function HeroBackdrop() {
  const [index, setIndex] = useState(0);
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), SHOW_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const next = new Image();
    next.src = photos[(index + 1) % photos.length].src;
  }, [index]);

  const current = photos[index];

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <AnimatePresence>
        <motion.img
          key={current.src}
          src={current.src}
          alt=""
          className="hero-backdrop__img"
          style={{ objectPosition: current.position }}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
          animate={{ opacity: 0.4, scale: reduceMotion ? 1 : 1.12 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: FADE_S, ease: 'easeInOut' },
            scale: { duration: (SHOW_MS / 1000) * 1.6, ease: 'linear' },
          }}
        />
      </AnimatePresence>
    </div>
  );
}
