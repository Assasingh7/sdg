import Layout from '../components/Layout';

export default function About() {
  const teamCards = [
    { name: 'Inderjeet Shokeen (Victor)', role: 'Founder & Principal' },
    { name: 'Ankit Shokeen', role: 'CEO' },
    { name: 'Managing Partner', role: 'Creative Direction' },
    { name: 'Managing Partner', role: 'Operations' },
    { name: 'Design Director', role: 'Studio Lead — New Delhi' },
    { name: 'FF&E Director', role: 'Partner' },
    { name: 'Financial Director', role: 'CFO' },
    { name: 'Senior Design Director', role: 'Partner' },
  ];

  return (
    <Layout title="The People — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/journey3.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">About SDG</p>
          <h1 className="page-title">The <em>People</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">Our Team</p>
          <h2 className="pi-title">Architects &amp; Designers Who Care</h2>
        </div>
        <p className="pi-body">Shokeen Design Group was founded on the belief that exceptional design requires exceptional people. Our team of architects, interior designers, FF&amp;E specialists and project managers bring diverse perspectives to every project. We are united by a shared passion for hospitality design and an unwavering commitment to craftsmanship and cultural storytelling.</p>
      </div>

      <section className="team-section">
        <div className="section-hdr" style={{ padding: '0 0 16px' }}>
          <div>
            <p className="sh-eyebrow">Leadership</p>
            <h2 className="sh-title">Partners &amp; <em>Directors</em></h2>
          </div>
        </div>
        <div className="pending-notice">
          <h3>Team Profiles Coming Soon</h3>
          <p>Client to provide &mdash; Names &middot; Roles &middot; Headshot photos &middot; Short bios for all team members</p>
        </div>
        <div className="team-grid">
          {teamCards.map((member, i) => (
            <div key={i} className="team-card reveal-ready">
              <div className="team-img">
                <p className="team-img-placeholder">Headshot Photo<br />Awaiting Client</p>
              </div>
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <div className="team-divider"></div>
                <p className="team-bio">Biography to be provided by client.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
