import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import StatsStrip from '../components/StatsStrip';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Leadership from '../components/Leadership';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TickerBar />
      <StatsStrip />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Contact />
    </>
  );
}
