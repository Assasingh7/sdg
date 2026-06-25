import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ConsultationButton from './ConsultationButton';
import Cursor from './Cursor';

const SITE = 'https://www.shokeendesigngroup.com';
const DEFAULT_DESC = 'Shokeen Design Group — Architecture & Interior Design firm in New Delhi, India. 300+ hospitality, F&B, commercial and residential projects since 2018.';
const DEFAULT_IMG = `${SITE}/images/hero1.jpg`;

export default function Layout({ title, description, canonical, ogImage, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const isActive = (href) => router.pathname === href;
  const pageTitle = title || 'Shokeen Design Group — Architecture & Interior Design';
  const pageDesc = description || DEFAULT_DESC;
  const pageUrl = canonical || `${SITE}${router.asPath}`;
  const pageImg = ogImage || DEFAULT_IMG;

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = parseFloat(e.target.dataset.delay || 0) * 1000;
          setTimeout(() => e.target.classList.add('revealed'), delay);
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal-ready,.reveal-left,.reveal-scale').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shokeen Design Group" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImg} />

      </Head>

      <nav className="nav-wrap" id="mainNav" aria-label="Main navigation">
        <div className="nav-logo">
          <a href="/"><img src="/images/logo.png" alt="Shokeen Design Group" /></a>
        </div>
        <ul className="nav-right">
          <li><a href="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</a></li>
          <li><a href="/studios" className={isActive('/studios') ? 'active' : ''}>Our Studios</a></li>
          <li><a href="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</a></li>
        </ul>
        <button className={`nav-toggle${mobileOpen ? ' open' : ''}`} aria-label="Open menu" onClick={() => setMobileOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <a href="/projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="/studios" onClick={() => setMobileOpen(false)}>Our Studios</a>
        <a href="/careers" onClick={() => setMobileOpen(false)}>Careers</a>
        <a href="/brands" onClick={() => setMobileOpen(false)}>Brands</a>
        <a href="/clients" onClick={() => setMobileOpen(false)}>Our Clients</a>
        <a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </div>

      <main>{children}</main>

      <footer itemScope itemType="https://schema.org/Organization">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Shokeen Design Group" itemProp="logo" loading="lazy" decoding="async" style={{ height: '40px', width: 'auto', display: 'block', marginBottom: '16px' }} />
            <p itemProp="description">Architecture &amp; Interior Design services for hospitality, residential, and commercial projects across India since 2018.</p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/shokeen-design-group/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" itemProp="sameAs">in</a>
              <a href="https://instagram.com/shokeendesigngroup/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" itemProp="sameAs">ig</a>
              <a href="https://facebook.com/shokeendesigngroup" target="_blank" rel="noreferrer noopener" aria-label="Facebook">fb</a>
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
            <a href="https://instagram.com/shokeendesigngroup/" target="_blank" rel="noreferrer noopener">Instagram</a>
            <a href="https://linkedin.com/company/shokeen-design-group/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Shokeen Design Group. All Rights Reserved.</span>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Najafgarh</span>, <span itemProp="addressRegion">New Delhi</span> &middot; India
          </span>
        </div>
      </footer>

      <ConsultationButton />
    </>
  );
}
