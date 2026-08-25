import { useEffect, useRef } from 'react';
import './CursorArrow.css';

const OUTLINE = [
  [0, 0], [1, 0],
  [0, 1], [1, 1], [2, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3], [4, 3],
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4],
  [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6],
  [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7],
  [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8],
  [0, 9], [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9],
  [0, 10], [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10],
  [0, 11], [1, 11], [2, 11], [3, 11], [4, 11], [5, 11], [6, 11], [7, 11],
  [0, 12], [1, 12], [2, 12], [5, 12], [6, 12], [7, 12],
  [0, 13], [1, 13], [2, 13], [6, 13], [7, 13],
  [0, 14], [1, 14], [7, 14], [8, 14],
  [0, 15], [1, 15], [8, 15], [9, 15],
];

const FILL = [
  [1, 1],
  [1, 2], [2, 2],
  [1, 3], [2, 3], [3, 3],
  [1, 4], [2, 4], [3, 4], [4, 4],
  [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
  [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6],
  [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7],
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8],
  [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9],
  [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10],
  [1, 11], [2, 11], [3, 11], [4, 11], [5, 11], [6, 11],
  [1, 12], [2, 12], [6, 12],
  [1, 13],
];

export default function CursorArrow() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('cursor-arrow-active');
    const el = ref.current;
    let raf = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px, ${y}px)`;
        raf = null;
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      document.body.classList.remove('cursor-arrow-active');
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      ref={ref}
      className="cursor-arrow"
      viewBox="0 0 11 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {OUTLINE.map(([x, y]) => (
        <rect key={`o-${x}-${y}`} x={x} y={y} width="1" height="1" className="cursor-arrow__px cursor-arrow__px--outline" />
      ))}
      {FILL.map(([x, y]) => (
        <rect key={`f-${x}-${y}`} x={x} y={y} width="1" height="1" className="cursor-arrow__px cursor-arrow__px--fill" />
      ))}
    </svg>
  );
}
