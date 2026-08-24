import { useEffect, useState } from 'react';
import './TerminalIntro.css';

export default function TerminalIntro({ command = 'whoami', prompt = 'visitor@portfolio ~ %' }) {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 75);
    return () => clearInterval(timer);
  }, [command]);

  return (
    <div className="terminal-intro">
      <span className="terminal-intro__prompt">{prompt}</span>
      <span className="terminal-intro__cmd">&nbsp;{typed}</span>
      <span className={`terminal-intro__cursor${done ? ' terminal-intro__cursor--blink' : ''}`}>▍</span>
    </div>
  );
}
