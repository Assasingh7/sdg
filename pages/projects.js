import Layout from '../components/Layout';
import ProjectGrid from '../components/ProjectGrid';

export default function Projects() {
  return (
    <Layout title="Projects — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/hero2.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Our Work</p>
          <h1 className="page-title">Selected <em>Projects</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">Architecture &amp; Interior Design</p>
          <h2 className="pi-title">Building &amp; Defining Landmark Spaces</h2>
        </div>
        <p className="pi-body">From grand city hotels in New Delhi to Himalayan resorts in Bhutan and sky lounges in Hyderabad — Shokeen Design Group delivers end-to-end architecture and interior design for hospitality, F&amp;B, commercial and residential projects across India and beyond. Every project is an exploration of function, culture and detail.</p>
      </div>

      <section>
        <div className="section-hdr">
          <div>
            <p className="sh-eyebrow">Portfolio</p>
            <h2 className="sh-title">All <em>Projects</em></h2>
          </div>
          <a href="/" className="sh-link">Back to Home &rarr;</a>
        </div>
        <ProjectGrid />
      </section>
    </Layout>
  );
}
