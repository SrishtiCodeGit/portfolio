import { Link } from 'react-router-dom';
import { FiAward, FiCode, FiBookOpen, FiUsers, FiBriefcase, FiEdit3 } from 'react-icons/fi';
import { riskColor } from '../utils/riskColor';
import './HeatmapSidebar.css';

const tiles = [
  { label: 'Achievements', href: '/#achievement', icon: FiAward },
  { label: 'Projects', href: '/#projects', icon: FiCode },
  { label: 'Education', href: '/#about', icon: FiBookOpen },
  { label: 'Leadership', href: '/#leadership', icon: FiUsers },
  { label: 'Experience', href: '/#experience', icon: FiBriefcase },
  { label: 'Blog', href: '/#blog', icon: FiEdit3 },
];

export default function HeatmapSidebar() {
  return (
    <nav className="heatmap-sidebar" aria-label="Section shortcuts">
      {tiles.map((tile, i) => {
        const Icon = tile.icon;
        const t = i / (tiles.length - 1);
        const color = riskColor(t);
        return (
          <Link key={tile.label} to={tile.href} className="heatmap-sidebar__tile" style={{ '--tile-color': color }}>
            <span className="heatmap-sidebar__icon">
              <Icon />
            </span>
            <span className="heatmap-sidebar__label">{tile.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
