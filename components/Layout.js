import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ConsultationButton from './ConsultationButton';

export default function Layout({ title, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      const backTop = document.getElementById('backTop');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-ready').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>{title || 'Shokeen Design Group'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Raleway:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <nav className="nav-wrap" id="mainNav">
        <div className="nav-logo">
          <a href="/"><img src="/images/logo.png" alt="Shokeen Design Group" /></a>
        </div>
        <ul className="nav-right">
          <li><a href="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</a></li>
          <li><a href="/studios" className={isActive('/studios') ? 'active' : ''}>Our Studios</a></li>
          <li><a href="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</a></li>
        </ul>
        <button className={`nav-toggle${mobileOpen ? ' open' : ''}`} aria-label="Menu" onClick={() => setMobileOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <a href="/projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="/studios" onClick={() => setMobileOpen(false)}>Our Studios</a>
        <a href="/careers" onClick={() => setMobileOpen(false)}>Careers</a>
        <a href="/brands" onClick={() => setMobileOpen(false)}>Brands</a>
        <a href="/clients" onClick={() => setMobileOpen(false)}>Our Clients</a>
        <a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </div>

      <main>{children}</main>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Shokeen Design Group" style={{ height: '40px', width: 'auto', display: 'block', marginBottom: '16px' }} />
            <p>Architecture &amp; Interior Design services for hospitality, residential, and commercial projects across India since 2018.</p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/shokeen-design-group/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://instagram.com/shokeendesigngroup/" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Facebook">fb</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="/studios">Our Studio</a>
            <a href="/brands">Brands</a>
            <a href="/clients">Our Clients</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="/projects">Projects</a>
            <a href="/careers">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="/#contact">Get in Touch</a>
            <a href="/studios">Our Studio</a>
            <a href="https://instagram.com/shokeendesigngroup/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com/company/shokeen-design-group/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Shokeen Design Group. All Rights Reserved.</span>
          <span>Najafgarh, New Delhi &middot; India</span>
        </div>
      </footer>

      <ConsultationButton />
    </>
  );
}
