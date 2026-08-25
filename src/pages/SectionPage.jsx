import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './DetailPage.css';
import './SectionPage.css';

export default function SectionPage({ children }) {
  return (
    <div className="section-page">
      <div className="container">
        <Link to="/" className="detail-back">
          <FiArrowLeft /> Back to dashboard
        </Link>
      </div>
      {children}
    </div>
  );
}
