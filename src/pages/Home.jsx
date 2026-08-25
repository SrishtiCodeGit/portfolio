import { useEffect } from 'react';
import Hero from '../components/Hero';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('lock-scroll');
    document.body.classList.add('lock-scroll');
    return () => {
      document.documentElement.classList.remove('lock-scroll');
      document.body.classList.remove('lock-scroll');
    };
  }, []);

  return <Hero />;
}
