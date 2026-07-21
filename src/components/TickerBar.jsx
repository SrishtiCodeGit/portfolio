import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { tickerItems } from '../data/resumeData';
import './TickerBar.css';

export default function TickerBar() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span className={`ticker__item ticker__item--${item.trend}`} key={i}>
            {item.trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
