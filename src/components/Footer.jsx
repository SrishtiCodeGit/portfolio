import { Link } from 'react-router-dom';
import { profile } from '../data/resumeData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <Link to="/#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
