import Layout from '../components/Layout';

export default function Awards() {
  return (
    <Layout title="Awards — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/proj1.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Recognition</p>
          <h1 className="page-title">Awards &amp;<br /><em>Recognition</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">Awards</p>
          <h2 className="pi-title">Celebrated Globally</h2>
        </div>
        <p className="pi-body">Since 2018, Shokeen Design Group has been recognised by leading industry bodies in hospitality design, architecture and interiors across India and internationally. Our awards reflect our commitment to design excellence, cultural storytelling and the creation of truly transformative spaces.</p>
      </div>

      <section className="awards-section">
        <div className="pending-notice">
          <h3>Awards List Coming Soon</h3>
          <p>Client to provide &mdash; Award body &middot; Category &middot; Project name &middot; Year for each award</p>
        </div>

        <div className="award-year-block">
          <h2 className="award-year-heading">2026</h2>
          <ul className="award-list">
            <li className="award-item reveal-ready">
              <span className="award-org">Award Body</span>
              <div>
                <p className="award-name">Award Name &amp; Category &mdash; To Be Confirmed</p>
                <p className="award-project">Project Name &mdash; Location</p>
              </div>
            </li>
            <li className="award-item reveal-ready">
              <span className="award-org">Award Body</span>
              <div>
                <p className="award-name">Award Name &amp; Category &mdash; To Be Confirmed</p>
                <p className="award-project">Project Name &mdash; Location</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="award-year-block">
          <h2 className="award-year-heading">2025</h2>
          <ul className="award-list">
            <li className="award-item reveal-ready">
              <span className="award-org">Award Body</span>
              <div>
                <p className="award-name">Award Name &amp; Category &mdash; To Be Confirmed</p>
                <p className="award-project">Project Name &mdash; Location</p>
              </div>
            </li>
            <li className="award-item reveal-ready">
              <span className="award-org">Award Body</span>
              <div>
                <p className="award-name">Award Name &amp; Category &mdash; To Be Confirmed</p>
                <p className="award-project">Project Name &mdash; Location</p>
              </div>
            </li>
            <li className="award-item reveal-ready">
              <span className="award-org">Award Body</span>
              <div>
                <p className="award-name">Award Name &amp; Category &mdash; To Be Confirmed</p>
                <p className="award-project">Project Name &mdash; Location</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
