import { useState, useEffect } from 'react';

export default function Preloader() {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    if (!sessionStorage.getItem('sdg_seen')) {
      sessionStorage.setItem('sdg_seen', '1');
      document.body.style.overflow = 'hidden';
      setPhase('in');
      const t1 = setTimeout(() => setPhase('out'), 1800);
      const t2 = setTimeout(() => { setPhase('gone'); document.body.style.overflow = ''; }, 2600);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setPhase('gone');
    }
  }, []);

  if (phase === 'idle' || phase === 'gone') return null;

  return (
    <div className={`preloader${phase === 'out' ? ' preloader-out' : ''}`}>
      <img src="/images/logo.png" className="preloader-logo" alt="" />
      <div className="preloader-bar" />
    </div>
  );
}
