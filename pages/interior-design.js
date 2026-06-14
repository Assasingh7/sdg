import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

export default function InteriorDesign() {
  return (
    <Layout title="Interior Design — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/hero1.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Our Discipline</p>
          <h1 className="page-title">Interior <em>Design</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">The Discipline</p>
          <h2 className="pi-title">Defining Hospitality Interiors</h2>
        </div>
        <p className="pi-body">At Shokeen Design Group, interior design is the art of transforming space into experience. We create immersive environments for hotels, resorts, restaurants and commercial spaces that tell stories, celebrate culture and deliver lasting impressions. Every material, every light source, every detail is considered in service of the guest experience — spaces that move people, not just impress them.</p>
      </div>

      <section>
        <div className="section-hdr">
          <div>
            <p className="sh-eyebrow">Our Work</p>
            <h2 className="sh-title">Selected <em>Projects</em></h2>
          </div>
          <a href="/" className="sh-link">Back to Home &rarr;</a>
        </div>
        <ProjectGrid />
      </section>
    </Layout>
  );
}
