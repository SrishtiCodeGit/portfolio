import './CrestBadge.css';

export default function CrestBadge({ size = 56 }) {
  return (
    <div className="crest-badge" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 116" className="crest-badge__svg">
        <defs>
          <linearGradient id="crest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-strong)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        <path
          d="M50 2 L96 18 V58 C96 88 76 104 50 114 C24 104 4 88 4 58 V18 Z"
          className="crest-badge__shield"
        />
        <text x="50" y="68" textAnchor="middle" className="crest-badge__text">CU</text>
      </svg>
    </div>
  );
}
