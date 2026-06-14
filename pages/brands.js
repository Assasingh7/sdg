import Layout from '../components/Layout';

export default function Brands() {
  return (
    <Layout title="Brands — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/insta1.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Portfolio</p>
          <h1 className="page-title">Our <em>Brands</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">Brands</p>
          <h2 className="pi-title">A Portfolio of Design Identities</h2>
        </div>
        <p className="pi-body">Shokeen Design Group has cultivated a portfolio of distinctive design brands and concepts, each reflecting a unique philosophy and serving a specific segment of the hospitality and commercial landscape. Our brands represent our deepest design convictions — spaces that define categories and set new standards.</p>
      </div>

      <div className="pending-notice">
        <h3>Brand Content Coming Soon</h3>
        <p>Client to provide &mdash; Brand names &middot; Descriptions &middot; Logos &middot; Associated projects</p>
      </div>
    </Layout>
  );
}
