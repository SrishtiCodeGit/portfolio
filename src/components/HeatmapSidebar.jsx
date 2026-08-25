import { Link, useLocation } from 'react-router-dom';
import { riskColor } from '../utils/riskColor';
import './HeatmapSidebar.css';

const tiles = [
  { label: 'Achievements', href: '/achievements' },
  { label: 'Projects', href: '/projects' },
  { label: 'Education', href: '/education' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
];

export default function HeatmapSidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="heatmap-sidebar" aria-label="Section shortcuts">
      {tiles.map((tile, i) => {
        const t = i / (tiles.length - 1);
        const color = riskColor(t);
        const isActive = pathname === tile.href;
        return (
          <Link
            key={tile.label}
            to={tile.href}
            className={`heatmap-sidebar__tile ${isActive ? 'is-active' : ''}`}
            style={{ '--tile-color': color }}
          >
            <span className="heatmap-sidebar__label">{tile.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
