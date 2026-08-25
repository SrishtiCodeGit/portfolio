import { Link } from 'react-router-dom';
import { riskColor } from '../utils/riskColor';
import './HeatmapSidebar.css';

const tiles = [
  { label: 'Achievements', href: '/#achievement' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#about' },
  { label: 'Leadership', href: '/#leadership' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog', href: '/#blog' },
];

export default function HeatmapSidebar() {
  return (
    <nav className="heatmap-sidebar" aria-label="Section shortcuts">
      {tiles.map((tile, i) => {
        const t = i / (tiles.length - 1);
        const color = riskColor(t);
        return (
          <Link key={tile.label} to={tile.href} className="heatmap-sidebar__tile" style={{ '--tile-color': color }}>
            <span className="heatmap-sidebar__label">{tile.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
