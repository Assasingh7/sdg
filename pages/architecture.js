import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

export default function Architecture() {
  return (
    <Layout title="Architecture — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/hero2.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Our Discipline</p>
          <h1 className="page-title"><em>Architecture</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">The Discipline</p>
          <h2 className="pi-title">Building Landmark Visions</h2>
        </div>
        <p className="pi-body">Shokeen Design Group's architectural practice operates at the intersection of cultural sensitivity, structural ambition and spatial poetry. From grand city hotels in New Delhi to serene Himalayan retreats in Bhutan and dynamic commercial environments across India, our architects shape spaces that endure — buildings that anchor communities and inspire every person who walks through their doors.</p>
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
