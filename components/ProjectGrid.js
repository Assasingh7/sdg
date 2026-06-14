import { useState, useCallback, useEffect } from 'react';

const carouselSets = {
  ace: { images: [{ src: '/images/proj1.jpg', cap: 'Carlton Suite' }, { src: '/images/ace2.jpg', cap: 'Casa Nova Suite' }, { src: '/images/ace3.jpg', cap: 'Front Desk' }, { src: '/images/ace4.jpg', cap: 'Hotel Passage' }, { src: '/images/hero2.jpg', cap: 'Front Elevation' }] },
  oasis: { images: [{ src: '/images/proj2.jpg', cap: 'Reception Lobby' }, { src: '/images/oasis2.jpg', cap: 'Lounge Enclave' }, { src: '/images/journey2.jpg', cap: 'Front Desk Detail' }] },
  madman: { images: [{ src: '/images/proj3.jpg', cap: 'Suite Interior' }, { src: '/images/hero3.jpg', cap: 'Resort Overview' }, { src: '/images/madman3.jpg', cap: 'Himalayan View' }, { src: '/images/madman4.jpg', cap: 'Private Balcony' }] },
  madrest: { images: [{ src: '/images/proj9.jpg', cap: 'Alpine Dining Hall' }, { src: '/images/news2.jpg', cap: 'Restaurant Interior' }] },
  angaar: { images: [{ src: '/images/proj4.jpg', cap: 'Restaurant Interior' }, { src: '/images/insta6.jpg', cap: 'Bar Detail' }] },
  zola: { images: [{ src: '/images/proj5.jpg', cap: 'Lounge Interior' }, { src: '/images/zola2.jpg', cap: 'Bar Counter' }, { src: '/images/zola3.jpg', cap: 'Seating Area' }] },
  spice: { images: [{ src: '/images/proj6.jpg', cap: 'Main Dining Hall' }, { src: '/images/spice2.jpg', cap: 'Timber Arch' }, { src: '/images/spice3.jpg', cap: 'Valley View' }, { src: '/images/hero1.jpg', cap: 'Overview' }] },
  tulips: { images: [{ src: '/images/proj7.jpg', cap: 'Grand Banquet Hall' }, { src: '/images/tulips2.jpg', cap: 'Crystal Chandeliers' }, { src: '/images/tulips3.jpg', cap: 'Seating Alcoves' }] },
  supreme: { images: [{ src: '/images/proj8.jpg', cap: 'Co-working Floor' }, { src: '/images/supreme2.jpg', cap: 'Breakout Zone' }, { src: '/images/studio4.jpg', cap: 'Collaboration Area' }] },
  bois: { images: [{ src: '/images/proj10.jpg', cap: 'Tropical Speakeasy' }, { src: '/images/bois2.jpg', cap: 'Live-Edge Bar' }, { src: '/images/news1.jpg', cap: 'Botanical Ceiling' }] },
};

const PROJECTS = [
  { key: 'ace',     cat: 'hotel',      featured: true,  loc: 'City Hotel — New Delhi',            title: 'The Ace Hotel',           sub: 'City Hotel · Interior Design',    imgCls: 'pci1', desc: 'Luxurious architectural jewel reinterpreting classical European elegance. Prussian blue tones, cream-and-gold wainscoting, tufted velvet accents and grand coffered ceilings.' },
  { key: 'oasis',   cat: 'hotel',      featured: false, loc: 'City Hotel — New Delhi',            title: 'Oasis',                   sub: 'City Hotel · Interior Design',    imgCls: 'pci2', desc: 'Egyptian narrative meets modern luxury. Backlit sandstone reliefs, pharaonic iconography, golden metallics and a grand mirrored ceiling.' },
  { key: 'angaar',  cat: 'fnb',        featured: false, loc: 'Restaurant — Ambala, Haryana',      title: 'Angaar',                  sub: 'Restaurant · Interior Design',    imgCls: 'pci4', desc: 'Bold, avant-garde dining. Deep charcoals, fiery reds and rattan lanterns casting a warm glow over red leather banquettes.' },
  { key: 'madman',  cat: 'resort',     featured: true,  loc: 'Resort — Punakha, Bhutan',          title: 'Madman Lounge & Resort',  sub: 'Resort · Interior Design',        imgCls: 'pci3', desc: 'Serene Himalayan sanctuary merging raw organic textures with refined modern luxury. Hand-carved Bhutanese motifs and panoramic valley views.' },
  { key: 'zola',    cat: 'fnb',        featured: false, loc: 'Bar & Lounge — Hyderabad',          title: 'ZOLA',                    sub: 'Bar & Lounge · Interior Design',  imgCls: 'pci5', desc: 'Sky lounge merging mid-century eclecticism with ultra-luxurious sophistication. Terrazzo bar island, fluted panels and breathtaking city views.' },
  { key: 'spice',   cat: 'fnb',        featured: false, loc: 'Restaurant — Nainital, Uttrakhand', title: 'The Spice Route',         sub: 'Restaurant · Interior Design',    imgCls: 'pci6', desc: 'Elegant culinary haven in the hills with sweeping timber arches, woven cane seating and panoramic valley views.' },
  { key: 'tulips',  cat: 'commercial', featured: false, loc: 'Banquet — GT Road, Kundli',         title: 'Red Tulips',              sub: 'Banquet Hall · Interior Design',  imgCls: 'pci7', desc: 'Grand banquet hall with sweeping crystal chandeliers, intricate geometric marble flooring and a sophisticated curved emerald bar.' },
  { key: 'supreme', cat: 'commercial', featured: false, loc: 'Co-working — Gurgaon',              title: 'Supreme Workspace',       sub: 'Co-working · Interior Design',    imgCls: 'pci8', desc: 'Vibrant transformation of the modern office. Primary colour accents, curved glass architecture and integrated biophilia.' },
  { key: 'madrest', cat: 'resort',     featured: false, loc: 'Resort Restaurant — Bhutan',        title: 'Madman Restaurant',       sub: 'Resort · Interior Design',        imgCls: 'pci9', desc: 'Immersive culinary destination celebrating Bhutanese craftsmanship. Hand-painted pillars, thangka tapestries and Himalayan peak views.' },
  { key: 'bois',    cat: 'fnb',        featured: false, loc: 'Bar & Lounge — Madagascar',         title: 'Bois Blanc',              sub: 'Bar & Lounge · Interior Design',  imgCls: 'pci10', desc: 'Enchanted tropical speakeasy. Live-edge solid timber bar, botanical ceiling with cascading vines and woven basket pendants.' },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState('all');
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselSet, setCarouselSet] = useState([]);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const openCarousel = useCallback((key) => {
    const set = carouselSets[key];
    if (!set) return;
    setCarouselSet(set.images);
    setCarouselIdx(0);
    setFading(false);
    setCarouselOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeCarousel = useCallback(() => {
    setCarouselOpen(false);
    document.body.style.overflow = '';
  }, []);

  const shiftSlide = useCallback((dir) => {
    setFading(true);
    setTimeout(() => setCarouselIdx((p) => ((p + dir) + carouselSet.length) % carouselSet.length), 200);
  }, [carouselSet]);

  useEffect(() => {
    const handler = (e) => {
      if (!carouselOpen) return;
      if (e.key === 'Escape') closeCarousel();
      if (e.key === 'ArrowLeft') shiftSlide(-1);
      if (e.key === 'ArrowRight') shiftSlide(1);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [carouselOpen, closeCarousel, shiftSlide]);

  const visible = PROJECTS.filter((p) => filter === 'all' || p.cat === filter);
  const current = carouselSet[carouselIdx];

  return (
    <>
      <div className="proj-filters">
        {[['all','Show All'],['hotel','Hotels & City'],['resort','Resorts'],['fnb','Bars & Restaurants'],['commercial','Banquet & Commercial']].map(([cat, label]) => (
          <button key={cat} className={`pf-btn${filter === cat ? ' active' : ''}`} onClick={() => setFilter(cat)}>{label}</button>
        ))}
      </div>

      <div className="proj-grid">
        {visible.map((p) => (
          <div key={p.key} className={`proj-card${p.featured ? ' featured' : ''} reveal-ready`} data-cat={p.cat} onClick={() => openCarousel(p.key)}>
            <div className="pc-img">
              <div className={`pc-img-bg ${p.imgCls}`}></div>
              <div className="pc-overlay">
                <p className="pc-overlay-cat">{p.loc}</p>
                <h3 className="pc-overlay-title">{p.title}</h3>
                <p className="pc-overlay-desc">{p.desc}</p>
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

      {carouselOpen && (
        <div className="carousel-modal open" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) closeCarousel(); }}>
          <button className="carousel-close" onClick={closeCarousel} aria-label="Close">&times;</button>
          <button className="carousel-prev" onClick={() => shiftSlide(-1)} aria-label="Previous">&#8249;</button>
          <div className="carousel-img-wrap">
            <img src={current?.src || ''} alt="Project" className={fading ? 'fading' : ''} onLoad={() => setFading(false)} />
          </div>
          <button className="carousel-next" onClick={() => shiftSlide(1)} aria-label="Next">&#8250;</button>
          <div className="carousel-caption">{current?.cap || ''}</div>
          <div className="carousel-counter"><span>{carouselIdx + 1}</span> / <span>{carouselSet.length}</span></div>
          <div className="carousel-dots">
            {carouselSet.map((_, i) => (
              <button key={i} className={`carousel-dot${i === carouselIdx ? ' active' : ''}`} onClick={() => { setFading(true); setTimeout(() => setCarouselIdx(i), 200); }} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
