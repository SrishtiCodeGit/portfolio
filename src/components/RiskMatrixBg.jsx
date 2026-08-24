import { motion } from 'framer-motion';
import './RiskMatrixBg.css';

const ROWS = 6;
const COLS = 9;

function riskColor(t) {
  const low = [34, 197, 94];
  const mid = [234, 179, 8];
  const high = [239, 68, 68];
  let a, b, localT;
  if (t < 0.5) {
    a = low; b = mid; localT = t / 0.5;
  } else {
    a = mid; b = high; localT = (t - 0.5) / 0.5;
  }
  const r = Math.round(a[0] + (b[0] - a[0]) * localT);
  const g = Math.round(a[1] + (b[1] - a[1]) * localT);
  const bch = Math.round(a[2] + (b[2] - a[2]) * localT);
  return `rgb(${r}, ${g}, ${bch})`;
}

const cells = [];
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const t = (r + c) / (ROWS + COLS - 2);
    cells.push({ key: `${r}-${c}`, t, delay: (r * COLS + c) * 0.04 });
  }
}

export default function RiskMatrixBg() {
  return (
    <div className="risk-matrix-bg" aria-hidden="true">
      <div className="risk-matrix-bg__grid">
        {cells.map((cell) => (
          <motion.span
            key={cell.key}
            style={{ backgroundColor: riskColor(cell.t) }}
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 4, repeat: Infinity, delay: cell.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
}
