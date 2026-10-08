import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import teamPhoto from '../assets/hackathon/team.webp';
import prizePhoto from '../assets/hackathon/prize.jpg';
import demoPhoto from '../assets/hackathon/demo.jpg';
import silhouettePhoto from '../assets/hackathon/silhouette.jpg';
import crowdPhoto from '../assets/hackathon/crowd.webp';
import unWomenPair from '../assets/community/un-women-pair.jpg';
import unWomenGroup from '../assets/community/un-women-group.jpg';
import columbiaPhoto from '../assets/education/columbia-campus.webp';
import srmPhoto from '../assets/education/srm-graduation.jpg';
import leadsquaredPhoto from '../assets/experience/leadsquared-post.jpg';
import isroPhoto from '../assets/experience/isro-irnss-launch.jpg';
import './HeroBackdrop.css';

const photos = [
  { src: columbiaPhoto, position: '50% 35%' },
  { src: teamPhoto, position: '50% 40%' },
  { src: unWomenPair, position: '50% 45%' },
  { src: srmPhoto, position: '50% 30%' },
  { src: prizePhoto, position: '50% 50%' },
  { src: leadsquaredPhoto, position: '50% 35%' },
  { src: unWomenGroup, position: '50% 55%' },
  { src: isroPhoto, position: '50% 50%' },
  { src: silhouettePhoto, position: '50% 50%' },
  { src: demoPhoto, position: '50% 40%' },
  { src: crowdPhoto, position: '50% 55%' },
];

const SHOW_MS = 6500;
const FADE_S = 2.6;

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
