import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import ConsultationButton from '../components/ConsultationButton';

const carouselSets = {
  interior: {
    title: 'Interior Design',
    images: [
      { src: '/images/hero1.jpg', cap: 'The Spice Route — Nainital' },
      { src: '/images/proj4.jpg', cap: 'Angaar — Ambala, Haryana' },
      { src: '/images/proj5.jpg', cap: 'ZOLA Sky Lounge — Hyderabad' },
      { src: '/images/proj6.jpg', cap: 'The Spice Route — Nainital' },
      { src: '/images/proj2.jpg', cap: 'Oasis — New Delhi' },
      { src: '/images/proj9.jpg', cap: 'Madman Restaurant — Bhutan' },
      { src: '/images/proj10.jpg', cap: 'Bois Blanc — Madagascar' },
    ],
  },
  architecture: {
    title: 'Architecture',
    images: [
      { src: '/images/hero2.jpg', cap: 'The Ace Hotel — New Delhi' },
      { src: '/images/proj1.jpg', cap: 'The Ace Hotel — Carlton Suite' },
      { src: '/images/ace2.jpg', cap: 'The Ace Hotel — Casa Nova Suite' },
      { src: '/images/ace3.jpg', cap: 'The Ace Hotel — Front Desk' },
      { src: '/images/ace4.jpg', cap: 'The Ace Hotel — Passage' },
      { src: '/images/proj7.jpg', cap: 'Red Tulips Banquet — Kundli' },
      { src: '/images/proj8.jpg', cap: 'Supreme Workspace — Gurgaon' },
    ],
  },
  company: {
    title: 'The Company',
    images: [
      { src: '/images/hero3.jpg', cap: 'Madman Resort — Punakha, Bhutan' },
      { src: '/images/proj3.jpg', cap: 'Madman Resort Suite' },
      { src: '/images/madman3.jpg', cap: 'Madman Resort — Himalayan View' },
      { src: '/images/madman4.jpg', cap: 'Madman Resort — Private Balcony' },
      { src: '/images/proj9.jpg', cap: 'Madman Restaurant — Alpine Dining' },
      { src: '/images/studio3.jpg', cap: 'SDG — Bangalore Studio' },
      { src: '/images/studio4.jpg', cap: 'SDG — Supreme Workspace' },
    ],
  },
  ace: {
    title: 'The Ace Hotel — New Delhi',
    images: [
      { src: '/images/proj1.jpg', cap: 'Carlton Suite' },
      { src: '/images/ace2.jpg', cap: 'Casa Nova Suite' },
      { src: '/images/ace3.jpg', cap: 'Front Desk' },
      { src: '/images/ace4.jpg', cap: 'Hotel Passage' },
      { src: '/images/hero2.jpg', cap: 'Front Elevation' },
    ],
  },
  oasis: {
    title: 'Oasis — New Delhi',
    images: [
      { src: '/images/proj2.jpg', cap: 'Reception Lobby' },
      { src: '/images/oasis2.jpg', cap: 'Lounge Enclave' },
      { src: '/images/journey2.jpg', cap: 'Front Desk Detail' },
    ],
  },
  madman: {
    title: 'Madman Lounge & Resort — Punakha, Bhutan',
    images: [
      { src: '/images/proj3.jpg', cap: 'Suite Interior' },
      { src: '/images/hero3.jpg', cap: 'Resort Overview' },
      { src: '/images/madman3.jpg', cap: 'Himalayan View' },
      { src: '/images/madman4.jpg', cap: 'Private Balcony' },
      { src: '/images/insta4.jpg', cap: 'Resort Detail' },
    ],
  },
  madrest: {
    title: 'Madman Restaurant — Punakha, Bhutan',
    images: [
      { src: '/images/proj9.jpg', cap: 'Alpine Dining Hall' },
      { src: '/images/news2.jpg', cap: 'Restaurant Interior' },
    ],
  },
  angaar: {
    title: 'Angaar — Ambala, Haryana',
    images: [
      { src: '/images/proj4.jpg', cap: 'Restaurant Interior' },
      { src: '/images/insta6.jpg', cap: 'Bar Detail' },
    ],
  },
  zola: {
    title: 'ZOLA Sky Lounge — Hyderabad',
    images: [
      { src: '/images/proj5.jpg', cap: 'Lounge Interior' },
      { src: '/images/zola2.jpg', cap: 'Bar Counter' },
      { src: '/images/zola3.jpg', cap: 'Seating Area' },
      { src: '/images/insta1.jpg', cap: 'Lounge Detail' },
    ],
  },
  spice: {
    title: 'The Spice Route — Nainital, Uttrakhand',
    images: [
      { src: '/images/proj6.jpg', cap: 'Main Dining Hall' },
      { src: '/images/spice2.jpg', cap: 'Timber Arch Detail' },
      { src: '/images/spice3.jpg', cap: 'Valley View' },
      { src: '/images/insta3.jpg', cap: 'Pendant Lighting' },
      { src: '/images/hero1.jpg', cap: 'Restaurant Overview' },
    ],
  },
  tulips: {
    title: 'Red Tulips — GT Road, Kundli',
    images: [
      { src: '/images/proj7.jpg', cap: 'Grand Banquet Hall' },
      { src: '/images/tulips2.jpg', cap: 'Crystal Chandeliers' },
      { src: '/images/tulips3.jpg', cap: 'Seating Alcoves' },
      { src: '/images/insta2.jpg', cap: 'Marble Flooring' },
    ],
  },
  supreme: {
    title: 'Supreme Workspace — Gurgaon',
    images: [
      { src: '/images/proj8.jpg', cap: 'Main Co-working Floor' },
      { src: '/images/supreme2.jpg', cap: 'Breakout Zone' },
      { src: '/images/insta5.jpg', cap: 'Pod Sanctuaries' },
      { src: '/images/studio4.jpg', cap: 'Collaboration Area' },
    ],
  },
  bois: {
    title: 'Bois Blanc — Mahajanga, Madagascar',
    images: [
      { src: '/images/proj10.jpg', cap: 'Tropical Speakeasy' },
      { src: '/images/bois2.jpg', cap: 'Live-Edge Bar Counter' },
      { src: '/images/news1.jpg', cap: 'Botanical Ceiling' },
    ],
  },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCat, setFilterCat] = useState('all');
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselSet, setCarouselSet] = useState([]);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [carouselFading, setCarouselFading] = useState(false);
  const [autoKey, setAutoKey] = useState(0);

  const openCarousel = useCallback((key) => {
    const set = carouselSets[key];
    if (!set) return;
    setCarouselSet(set.images);
    setCarouselIdx(0);
    setCarouselFading(false);
    setAutoKey(0);
    setCarouselOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeCarousel = useCallback(() => {
    setCarouselOpen(false);
    document.body.style.overflow = '';
  }, []);

  const shiftSlide = useCallback((dir) => {
    setCarouselFading(true);
    setAutoKey((k) => k + 1);
    setTimeout(() => {
      setCarouselIdx((prev) => {
        const len = carouselSet.length;
        return ((prev + dir) + len) % len;
      });
    }, 200);
  }, [carouselSet.length]);

  const goToSlide = useCallback((idx) => {
    setCarouselFading(true);
    setAutoKey((k) => k + 1);
    setTimeout(() => setCarouselIdx(idx), 200);
  }, []);

  /* Nav scroll + back-to-top */
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

  /* Keyboard nav for carousel */
  useEffect(() => {
    const handleKeydown = (e) => {
      if (!carouselOpen) return;
      if (e.key === 'Escape') closeCarousel();
      if (e.key === 'ArrowLeft') shiftSlide(-1);
      if (e.key === 'ArrowRight') shiftSlide(1);
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [carouselOpen, closeCarousel, shiftSlide]);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(
      '.stat-item,.news-item,.studio-item,.j-photo,.office-item,.news-list-item,.client-chip'
    ).forEach((el) => {
      el.classList.add('reveal-ready');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Auto-play carousel */
  useEffect(() => {
    if (!carouselOpen || carouselSet.length <= 1) return;
    const len = carouselSet.length;
    const t = setInterval(() => {
      setCarouselFading(true);
      setTimeout(() => setCarouselIdx((p) => (p + 1) % len), 200);
    }, 4500);
    return () => clearInterval(t);
  }, [carouselOpen, carouselSet.length, autoKey]);

  /* Form select label */
  useEffect(() => {
    document.querySelectorAll('.form-group select').forEach((sel) => {
      const handler = () => sel.classList.toggle('has-value', sel.value !== '');
      sel.addEventListener('change', handler);
    });
  }, []);

  const currentSlide = carouselSet[carouselIdx];

  return (
    <>
      <Head>
        <title>Shokeen Design Group - Architecture &amp; Interior Design Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Raleway:wght@200;300;400;500;600&family=Raleway+Dots&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NAV */}
      <nav className="nav-wrap" id="mainNav">
        <div className="nav-logo">
          <a href="#">
            <img src="/images/logo.png" alt="Shokeen Design Group" />
          </a>
        </div>
        <ul className="nav-right">
          <li><a href="/projects">Projects</a></li>
          <li><a href="/studios">Our Studios</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
        <button
          className={`nav-toggle${mobileMenuOpen ? ' open' : ''}`}
          aria-label="Menu"
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
        <a href="/studios" onClick={() => setMobileMenuOpen(false)}>Our Studios</a>
        <a href="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</a>
        <a href="/brands" onClick={() => setMobileMenuOpen(false)}>Brands</a>
        <a href="/clients" onClick={() => setMobileMenuOpen(false)}>Our Clients</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-panel hp1" id="interior" onClick={() => openCarousel('interior')}>
          <div className="hero-panel-bg"></div>
          <div className="hero-panel-overlay"></div>
          <div className="hero-panel-content">
            <p className="hero-panel-label">Interior Design</p>
            <h2 className="hero-panel-title">Crafting<br />Immersive Spaces</h2>
            <a href="#" className="hero-panel-link" onClick={(e) => { e.preventDefault(); openCarousel('interior'); }}>Know More &rarr;</a>
          </div>
        </div>
        <div className="hero-panel hp2" id="architecture" onClick={() => openCarousel('architecture')}>
          <div className="hero-panel-bg"></div>
          <div className="hero-panel-overlay"></div>
          <div className="hero-panel-content">
            <p className="hero-panel-label">Architecture</p>
            <h2 className="hero-panel-title">Building<br />Landmark Visions</h2>
            <a href="#" className="hero-panel-link" onClick={(e) => { e.preventDefault(); openCarousel('architecture'); }}>Know More &rarr;</a>
          </div>
        </div>
        <div className="hero-panel hp3" onClick={() => openCarousel('company')}>
          <div className="hero-panel-bg"></div>
          <div className="hero-panel-overlay"></div>
          <div className="hero-panel-content">
            <p className="hero-panel-label">The Company</p>
            <h2 className="hero-panel-title">9 Years of<br />Design Excellence</h2>
            <a href="#" className="hero-panel-link" onClick={(e) => { e.preventDefault(); openCarousel('company'); }}>Know More &rarr;</a>
          </div>
        </div>
        <div className="hero-badge">
          <div className="hero-badge-ring">
            <div className="hero-badge-inner">
              <div className="yr">9</div>
              <div className="yr-lbl">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="journey">
        <div className="journey-left">
          <div className="j-photo jp1"><div className="j-photo-inner"></div></div>
          <div className="j-photo jp2"><div className="j-photo-inner"></div></div>
          <div className="j-photo jp3"><div className="j-photo-inner"></div></div>
          <div className="j-photo jp4"><div className="j-photo-inner"></div></div>
          <div className="j-photo jp5"><div className="j-photo-inner"></div></div>
        </div>
        <div className="journey-right">
          <p className="j-eyebrow">Our Story</p>
          <h2 className="j-title">The Journey</h2>
          <div className="j-body">
            <p>Since 2018, Shokeen Design Group has grown from a passionate vision into one of Delhi&apos;s most trusted design studios, completing 300+ projects spanning over 2.5 lakh square feet of thoughtfully crafted spaces.</p>
            <p>Founded by Inderjeet Shokeen (Victor) and led by CEO Ankit Shokeen, SDG&apos;s design philosophy is rooted in the belief that great spaces should not just look beautiful — they must feel right. Every project is an exploration of function, culture, and detail.</p>
            <p>Our team of Architects and Interior Designers share one guiding ideology: that extraordinary design is never a coincidence — it is the result of conviction, collaboration, and an unwavering attention to the details that matter most.</p>
          </div>
          <a href="#" className="j-cta">Know More About Us &rarr;</a>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-num">300<span>+</span></div>
          <div className="stat-lbl">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">9</div>
          <div className="stat-lbl">Years of Excellence</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">25</div>
          <div className="stat-lbl">Team Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2.5<span>L</span></div>
          <div className="stat-lbl">Sq. Ft. Designed</div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <section>
        <div className="section-hdr">
          <div className="section-hdr-left">
            <p className="sh-eyebrow">Our Work</p>
            <h2 className="sh-title">Selected <em>Projects</em></h2>
          </div>
          <a href="#" className="sh-link">View All Projects</a>
        </div>
        <div className="proj-filters">
          {[
            { cat: 'all', label: 'Show All' },
            { cat: 'hotel', label: 'Hotels & City' },
            { cat: 'resort', label: 'Resorts' },
            { cat: 'fnb', label: 'Bars & Restaurants' },
            { cat: 'commercial', label: 'Banquet & Commercial' },
          ].map(({ cat, label }) => (
            <button
              key={cat}
              className={`pf-btn${filterCat === cat ? ' active' : ''}`}
              onClick={() => setFilterCat(cat)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="proj-grid" id="projGrid">
          {[
            { key: 'ace', cat: 'hotel', featured: true, loc: 'City Hotel — New Delhi', title: 'The Ace Hotel', sub: 'City Hotel · Interior Design', imgCls: 'pci1' },
            { key: 'oasis', cat: 'hotel', featured: false, loc: 'City Hotel — New Delhi', title: 'Oasis', sub: 'City Hotel · Interior Design', imgCls: 'pci2' },
            { key: 'angaar', cat: 'fnb', featured: false, loc: 'Restaurant — Ambala, Haryana', title: 'Angaar', sub: 'Restaurant · Interior Design', imgCls: 'pci4' },
            { key: 'madman', cat: 'resort', featured: true, loc: 'Resort — Punakha, Bhutan', title: 'Madman Lounge & Resort', sub: 'Resort · Interior Design', imgCls: 'pci3' },
            { key: 'zola', cat: 'fnb', featured: false, loc: 'Bar & Lounge — Hyderabad', title: 'ZOLA', sub: 'Bar & Lounge · Interior Design', imgCls: 'pci5' },
            { key: 'spice', cat: 'fnb', featured: false, loc: 'Restaurant — Nainital', title: 'The Spice Route', sub: 'Restaurant · Interior Design', imgCls: 'pci6' },
            { key: 'tulips', cat: 'commercial', featured: false, loc: 'Banquet — GT Road, Kundli', title: 'Red Tulips', sub: 'Banquet Hall · Interior Design', imgCls: 'pci7' },
            { key: 'supreme', cat: 'commercial', featured: false, loc: 'Co-working — Gurgaon', title: 'Supreme Workspace', sub: 'Co-working · Interior Design', imgCls: 'pci8' },
            { key: 'madrest', cat: 'resort', featured: false, loc: 'Resort Restaurant — Bhutan', title: 'Madman Restaurant', sub: 'Resort · Interior Design', imgCls: 'pci9' },
            { key: 'bois', cat: 'fnb', featured: false, loc: 'Bar & Lounge — Madagascar', title: 'Bois Blanc', sub: 'Bar & Lounge · Interior Design', imgCls: 'pci10' },
          ]
            .filter((p) => filterCat === 'all' || p.cat === filterCat)
            .map((p) => (
              <div
                key={p.key}
                className={`proj-card${p.featured ? ' featured' : ''}`}
                data-cat={p.cat}
                onClick={() => openCarousel(p.key)}
              >
                <div className="pc-img">
                  <div className={`pc-img-bg ${p.imgCls}`}></div>
                  <div className="pc-overlay">
                    <p className="pc-overlay-cat">{p.loc}</p>
                    <h3 className="pc-overlay-title">{p.title}</h3>
                    <a href="#" className="pc-overlay-link" onClick={(e) => { e.preventDefault(); openCarousel(p.key); }}>View Project</a>
                  </div>
                </div>
                <div className="pc-label">
                  <p className="pc-label-cat">{p.sub}</p>
                  <h3 className="pc-label-name">{p.title}</h3>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* EXCELLENCE */}
      <section className="excellence">
        <div className="exc-left">
          <p className="j-eyebrow">About Us</p>
          <h2>9 Years of<br />Design Excellence</h2>
          <p>Shokeen Design Group has established a distinctive presence across India, with award-winning projects spanning luxury city hotels, mountain resorts, destination restaurants, sky lounges, banquet halls, and innovative co-working spaces.</p>
          <p>Key to our success is the manner in which our Architects and Interior Designers work alongside each other and partner closely with clients to fully embrace their vision. Every project delivers an immersive experience that incorporates the best of both disciplines.</p>
          <p>Under the passionate leadership of our Founder Inderjeet Shokeen (Victor) and CEO Ankit Shokeen, SDG&apos;s 25-strong team brings each concept to life with cultural sensitivity, design integrity, and uncompromising detail.</p>
          <div className="clients-strip">
            {['ace','oasis','madman','zola','angaar','spice','tulips','supreme','bois','madrest'].map((key) => (
              <div key={key} className="client-chip" onClick={() => openCarousel(key)} style={{ cursor: 'pointer' }}>
                {{ ace:'The Ace Hotel', oasis:'Oasis', madman:'Madman Resort', zola:'ZOLA', angaar:'Angaar', spice:'The Spice Route', tulips:'Red Tulips', supreme:'Supreme Workspace', bois:'Bois Blanc', madrest:'Madman Restaurant' }[key]}
              </div>
            ))}
          </div>
        </div>
        <div className="exc-right">
          <h3>Our Studios</h3>
          <ul className="office-list" id="studios">
            <li className="office-item">
              <div>
                <div className="office-city">New Delhi</div>
                <div className="office-country">India</div>
              </div>
              <span className="office-arrow">&rarr;</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="connect" id="contact">
        <div className="conn-left">
          <h2>Connect<br />With Us</h2>
          <p>We would love to hear about your project. Please complete the form and one of our team members will be in touch shortly.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="fname" placeholder=" " />
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="form-group">
                <input type="text" id="lname" placeholder=" " />
                <label htmlFor="lname">Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="email" id="email" placeholder=" " />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input type="tel" id="phone" placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>
            <div className="form-group" style={{ borderRight: 'none' }}>
              <select id="studio">
                <option value="" disabled defaultValue="">‌</option>
                <option>Connect with New Delhi, India</option>
              </select>
              <label htmlFor="studio" style={{ pointerEvents: 'none', top: '20px' }}>Studio</label>
            </div>
            <div className="form-group" style={{ borderRight: 'none' }}>
              <textarea id="message" placeholder=" " rows={4}></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="form-submit-row">
              <button className="btn-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="conn-right">
          <h3>Our Offices</h3>
          <div className="office-addresses">
            <div className="oa-item">
              <p className="oa-city">New Delhi, India</p>
              <p className="oa-detail">Shokeen Design Group<br />Main Najafgarh Bahadurgarh Road<br />Mahesh Garden, Najafgarh<br />New Delhi &mdash; 110043</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <div>
            <p className="nl-eyebrow">Stay Inspired</p>
            <h3 className="nl-title">Design Insights &amp; Project Updates</h3>
          </div>
          <form
            className="nl-form"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.nlemail.value;
              window.open(`mailto:info@shokeendesigngroup.com?subject=Newsletter Subscription&body=Please add me to your mailing list.%0A%0AEmail: ${email}`, '_blank');
            }}
          >
            <input type="email" name="nlemail" className="nl-input" placeholder="Your email address" required />
            <button type="submit" className="nl-btn">Subscribe</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Shokeen Design Group" style={{ height: '40px', width: 'auto', display: 'block', marginBottom: '16px', objectFit: 'contain' }} />
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
            <a href="#contact">Get in Touch</a>
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

      {/* BACK TO TOP */}
      <button
        className="back-top"
        id="backTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        &#8593;
      </button>

      <ConsultationButton />

      {/* CAROUSEL MODAL */}
      {carouselOpen && (
        <div
          className="carousel-modal open"
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) closeCarousel(); }}
        >
          <button className="carousel-close" onClick={closeCarousel} aria-label="Close">&times;</button>
          <button className="carousel-prev" onClick={() => shiftSlide(-1)} aria-label="Previous">&#8249;</button>
          <div className="carousel-img-wrap">
            <img
              src={currentSlide?.src || ''}
              alt="Project image"
              className={carouselFading ? 'fading' : ''}
              onLoad={() => setCarouselFading(false)}
            />
          </div>
          <button className="carousel-next" onClick={() => shiftSlide(1)} aria-label="Next">&#8250;</button>
          <div className="carousel-caption">{currentSlide?.cap || ''}</div>
          <div className="carousel-counter">
            <span>{carouselIdx + 1}</span> / <span>{carouselSet.length}</span>
          </div>
          <div className="carousel-dots">
            {carouselSet.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === carouselIdx ? ' active' : ''}`}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
