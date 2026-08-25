import { motion } from 'framer-motion';
import { riskColor } from '../utils/riskColor';
import './RiskMatrixBg.css';

const ROWS = 6;
const COLS = 9;

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
