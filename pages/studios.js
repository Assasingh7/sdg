import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const TEAM = [
  { name: 'Inderjeet Shokeen (Victor)', role: 'Founder & Principal' },
  { name: 'Ankit Shokeen', role: 'CEO' },
  { name: 'Managing Partner', role: 'Creative Direction' },
  { name: 'Managing Partner', role: 'Operations' },
  { name: 'Design Director', role: 'Studio Lead — New Delhi' },
  { name: 'FF&E Director', role: 'Partner' },
  { name: 'Financial Director', role: 'CFO' },
  { name: 'Senior Design Director', role: 'Partner' },
];

export default function Studios() {
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    const sel = document.getElementById('studioSel');
    if (!sel) return;
    const handler = () => sel.classList.toggle('has-value', sel.value !== '');
    sel.addEventListener('change', handler);
    return () => sel.removeEventListener('change', handler);
  }, []);

  return (
    <Layout title="Our Studio — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/studio1.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Our Presence</p>
          <h1 className="page-title">Our <em>Studio</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">New Delhi, India</p>
          <h2 className="pi-title">Where Design Happens</h2>
        </div>
        <p className="pi-body">Based in Najafgarh, New Delhi, the Shokeen Design Group studio is the creative and operational heartbeat of everything we do. Founded in 2018 by Inderjeet Shokeen (Victor) and led by CEO Ankit Shokeen, our team of 25 architects, interior designers and project managers works from one unified space — sharing ideas, culture and an unwavering commitment to excellence.</p>
      </div>

      <section style={{ background: 'var(--white)' }}>
        <div className="studio-detail-grid">
          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio1.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">New Delhi</div>
              <div className="studio-detail-sub">India &mdash; Headquarters &mdash; Est. 2018</div>
              <p className="studio-detail-desc">Our studio in Najafgarh, New Delhi is the creative and operational heartbeat of Shokeen Design Group, delivering landmark hospitality and commercial projects across India and internationally since 2018.</p>
              <p className="studio-detail-addr">Mahesh Garden<br />Najafgarh, New Delhi 110043<br />India</p>
            </div>
          </div>
          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio2.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">Our Reach</div>
              <div className="studio-detail-sub">India &amp; Beyond</div>
              <p className="studio-detail-desc">From our New Delhi base, Shokeen Design Group delivers projects across India and internationally — from Himalayan resorts in Bhutan to tropical speakeasies in Madagascar.</p>
              <p className="studio-detail-addr">Projects delivered across<br />India, Bhutan &amp; beyond</p>
            </div>
          </div>
          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio3.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">Services</div>
              <div className="studio-detail-sub">Architecture &amp; Interiors</div>
              <p className="studio-detail-desc">Full-service design under one roof — architectural design, space planning, interior design, FF&amp;E specification and project management. Everything your project needs, delivered with precision.</p>
              <p className="studio-detail-addr">Full-service design studio<br />Najafgarh, New Delhi</p>
            </div>
          </div>
          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio4.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">The Team</div>
              <div className="studio-detail-sub">25 Design Professionals</div>
              <p className="studio-detail-desc">25 architects, interior designers, FF&amp;E specialists and project managers bringing diverse expertise to every project. We believe collaborative design produces the most extraordinary spaces.</p>
              <p className="studio-detail-addr">25 professionals<br />One unified studio</p>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat-item reveal-ready"><div className="stat-num">1</div><div className="stat-lbl">Design Studio</div></div>
        <div className="stat-item reveal-ready"><div className="stat-num">25</div><div className="stat-lbl">Team Members</div></div>
        <div className="stat-item reveal-ready"><div className="stat-num">300<span>+</span></div><div className="stat-lbl">Projects Delivered</div></div>
        <div className="stat-item reveal-ready"><div className="stat-num">9</div><div className="stat-lbl">Years of Excellence</div></div>
      </div>

      {/* THE PEOPLE */}
      <section className="team-section">
        <div className="section-hdr" style={{ padding: '80px 80px 0' }}>
          <div>
            <p className="sh-eyebrow">Leadership</p>
            <h2 className="sh-title">The <em>People</em></h2>
          </div>
        </div>
        <div style={{ padding: '24px 80px 0' }}>
          <p style={{ fontSize: '13px', color: 'var(--darkgrey)', lineHeight: 1.9, fontWeight: 300, maxWidth: '620px' }}>
            Shokeen Design Group was founded on the belief that exceptional design requires exceptional people. Our team brings diverse cultural perspectives and a shared passion for hospitality design.
          </p>
        </div>
        <div className="pending-notice" style={{ margin: '32px 80px' }}>
          <h3>Team Profiles Coming Soon</h3>
          <p>Client to provide &mdash; Names &middot; Roles &middot; Headshot photos &middot; Short bios for all team members</p>
        </div>
        <div className="team-grid" style={{ padding: '0 80px 100px' }}>
          {TEAM.map((member, i) => (
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

      {/* CONTACT */}
      <section className="connect" id="contact">
        <div className="conn-left">
          <h2>Connect<br />With Us</h2>
          <p>We would love to hear about your project. Complete the form and one of our team will be in touch shortly.</p>
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
              <select
                id="studioSel"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className={selectValue ? 'has-value' : ''}
              >
                <option value="" disabled></option>
                <option>Connect with New Delhi, India</option>
              </select>
              <label htmlFor="studioSel" style={{ pointerEvents: 'none', top: '20px' }}>Studio</label>
            </div>
            <div className="form-group" style={{ borderRight: 'none' }}>
              <textarea id="message" placeholder=" " rows="4"></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="form-submit-row">
              <button className="btn-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="conn-right">
          <h3>Our Office</h3>
          <div className="office-addresses">
            <div className="oa-item">
              <p className="oa-city">New Delhi, India</p>
              <p className="oa-detail">Shokeen Design Group<br />Mahesh Garden<br />Najafgarh, New Delhi 110043<br />India</p>
            </div>
            <div className="oa-item">
              <p className="oa-city">LinkedIn</p>
              <p className="oa-detail"><a href="https://linkedin.com/company/shokeen-design-group/" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>linkedin.com/company/<br />shokeen-design-group</a></p>
            </div>
            <div className="oa-item">
              <p className="oa-city">Instagram</p>
              <p className="oa-detail"><a href="https://instagram.com/shokeendesigngroup/" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>@shokeendesigngroup</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
