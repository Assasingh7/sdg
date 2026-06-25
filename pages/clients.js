import Layout from '../components/Layout';

export default function Clients() {
  return (
    <Layout
      title="Our Clients — Shokeen Design Group | Hospitality & Commercial Design India"
      description="Shokeen Design Group has designed spaces for leading hospitality groups, restaurant brands and commercial developers across India. Explore our client portfolio of 300+ completed projects."
      canonical="https://www.shokeendesigngroup.com/clients"
    >
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/proj7.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Who We Work With</p>
          <h1 className="page-title">Our <em>Clients</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">Clients</p>
          <h2 className="pi-title">Trusted by the Best</h2>
        </div>
        <p className="pi-body">Since 2018, Shokeen Design Group has built enduring relationships with some of India's most respected hospitality operators, developers and entrepreneurs. Our clients trust us to bring their vision to life with precision, creativity and cultural intelligence — delivering spaces that exceed expectations and stand the test of time.</p>
      </div>

      <div className="pending-notice">
        <h3>Client List Coming Soon</h3>
        <p>Client to provide &mdash; Client names &middot; Logos &middot; Testimonials &middot; Case study references</p>
      </div>
    </Layout>
  );
}
