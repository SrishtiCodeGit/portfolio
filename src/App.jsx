import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorArrow from './components/CursorArrow';
import HeatmapSidebar from './components/HeatmapSidebar';
import PixelRobot from './components/PixelRobot';
import PageTransition from './components/PageTransition';
import SectionPage from './pages/SectionPage';
import Home from './pages/Home';
import EducationDetail from './pages/EducationDetail';
import ProjectDetail from './pages/ProjectDetail';
import Achievement from './components/Achievement';
import AvatarShowcase from './components/AvatarShowcase';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <CursorArrow />
      <ScrollToTop />
      <Navbar />
      <HeatmapSidebar />
      <PixelRobot />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/achievements" element={<PageTransition><SectionPage><Achievement /><AvatarShowcase /></SectionPage></PageTransition>} />
          <Route path="/education" element={<PageTransition><SectionPage><About /></SectionPage></PageTransition>} />
          <Route path="/education/:slug" element={<PageTransition><EducationDetail /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><SectionPage><Experience /></SectionPage></PageTransition>} />
          <Route path="/projects" element={<PageTransition><SectionPage><Projects /></SectionPage></PageTransition>} />
          <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/leadership" element={<PageTransition><SectionPage><Leadership /></SectionPage></PageTransition>} />
          <Route path="/blog" element={<PageTransition><SectionPage><Blog /></SectionPage></PageTransition>} />
          <Route path="/skills" element={<PageTransition><SectionPage><Skills /></SectionPage></PageTransition>} />
          <Route path="/contact" element={<PageTransition><SectionPage><Contact /></SectionPage></PageTransition>} />
        </Routes>
      </AnimatePresence>
      {!isHome && <Footer />}
    </>
  );
}

export default App;
