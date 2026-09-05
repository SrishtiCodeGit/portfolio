import Hero from '../components/Hero';
import Achievement from '../components/Achievement';
import AvatarShowcase from '../components/AvatarShowcase';
import RunningAvatar from '../components/RunningAvatar';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Skills from '../components/Skills';
import Leadership from '../components/Leadership';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Achievement />
      <AvatarShowcase />
      <RunningAvatar />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Skills />
      <Leadership />
      <Contact />
    </>
  );
}
