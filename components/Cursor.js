import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setActive(true);
    document.body.classList.add('custom-cursor');

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const loop = () => {
      if (dot.current) dot.current.style.transform = `translate(${mx}px,${my}px)`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    const expand = () => ring.current?.classList.add('cursor-expand');
    const shrink = () => ring.current?.classList.remove('cursor-expand');
    const addListeners = () => {
      document.querySelectorAll('a,button,[role="button"],.proj-card,.hero-panel').forEach(el => {
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', shrink);
      });
    };
    addListeners();

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
