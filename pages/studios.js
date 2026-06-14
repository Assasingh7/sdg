import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Studios() {
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    const selects = document.querySelectorAll('.form-group select');
    selects.forEach((sel) => {
      sel.addEventListener('change', () => sel.classList.toggle('has-value', sel.value !== ''));
    });
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
        <p className="pi-body">Based in Najafgarh, New Delhi, the Shokeen Design Group studio is the creative and operational heartbeat of everything we do. Our team of architects, interior designers and project managers works from a single unified space — sharing ideas, culture and an unwavering commitment to design excellence across every project we deliver.</p>
      </div>

      <section style={{ background: 'var(--white)' }}>
        <div className="studio-detail-grid">
          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio1.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">New Delhi</div>
              <div className="studio-detail-sub">India &mdash; Headquarters &mdash; Est. 2018</div>
              <p className="studio-detail-desc">Our studio in Najafgarh, New Delhi is the creative and operational heartbeat of Shokeen Design Group. Home to our principal leadership and full design team, the Delhi studio has delivered landmark hospitality and commercial projects across India and internationally since 2018.</p>
              <p className="studio-detail-addr">Mahesh Garden<br />Najafgarh, New Delhi 110043<br />India</p>
            </div>
          </div>

          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio2.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">Our Work</div>
              <div className="studio-detail-sub">India &mdash; Beyond Borders</div>
              <p className="studio-detail-desc">From our New Delhi base, Shokeen Design Group delivers projects across India and internationally — from Himalayan resorts in Bhutan to tropical speakeasies in Madagascar. Every project carries the same commitment to design excellence and cultural storytelling.</p>
              <p className="studio-detail-addr">Projects delivered across<br />India, Bhutan &amp; beyond</p>
            </div>
          </div>

          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio3.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">Design</div>
              <div className="studio-detail-sub">Architecture &amp; Interiors</div>
              <p className="studio-detail-desc">Our multidisciplinary studio offers a complete range of design services under one roof — from architectural design and space planning to interior design, FF&amp;E specification and project management. Everything your project needs, delivered with precision.</p>
              <p className="studio-detail-addr">Full-service design studio<br />Najafgarh, New Delhi</p>
            </div>
          </div>

          <div className="studio-detail-item">
            <div className="studio-detail-img" style={{ backgroundImage: "url('/images/studio4.jpg')" }}></div>
            <div className="studio-detail-overlay"></div>
            <div className="studio-detail-content">
              <div className="studio-detail-city">Team</div>
              <div className="studio-detail-sub">25 Design Professionals</div>
              <p className="studio-detail-desc">Our team of 25 architects, interior designers, FF&amp;E specialists and project managers brings together diverse expertise to deliver transformative spaces. We believe in collaborative design — every voice in the studio contributes to the final result.</p>
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
                id="studio"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className={selectValue ? 'has-value' : ''}
              >
                <option value="" disabled></option>
                <option>Connect with New Delhi, India</option>
              </select>
              <label htmlFor="studio" style={{ pointerEvents: 'none', top: '20px' }}>Studio</label>
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
