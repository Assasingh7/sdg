import { useState } from 'react';

const WA = '919136207289';
const MAIL = 'info@shokeendesigngroup.com';

export default function ConsultationButton() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const openModal = () => { setOpen(true); setDone(false); };
  const closeModal = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const email = fd.get('email') || '';
    const type = fd.get('type') || '';
    const msg = fd.get('message') || '';

    const waText = encodeURIComponent(
      `Hi Shokeen Design Group!\n\nI'd like to book a consultation.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${type}\n\nMessage: ${msg || 'N/A'}`
    );
    window.open(`https://wa.me/${WA}?text=${waText}`, '_blank');

    const subject = encodeURIComponent(`Consultation Request — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${msg || 'N/A'}`);
    setTimeout(() => {
      window.open(`mailto:${MAIL}?subject=${subject}&body=${body}`, '_blank');
    }, 600);

    setDone(true);
  };

  return (
    <>
      <button className="consult-fab" onClick={openModal} aria-label="Book Consultation">
        Book Consultation
      </button>

      {open && (
        <div
          className="consult-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="consult-box">
            <button className="consult-close" onClick={closeModal} aria-label="Close">&times;</button>

            {done ? (
              <div className="consult-success">
                <div className="consult-check">&#10003;</div>
                <h3>Request Sent!</h3>
                <p>Your consultation request has been forwarded via WhatsApp and email. We&apos;ll be in touch within 24 hours.</p>
                <button className="consult-done" onClick={closeModal}>Close</button>
              </div>
            ) : (
              <>
                <p className="consult-eyebrow">Get in Touch</p>
                <h3 className="consult-title">Book a <em>Consultation</em></h3>
                <p className="consult-sub">Tell us about your project — we&apos;ll respond within 24 hours via WhatsApp and email.</p>
                <form className="consult-form" onSubmit={handleSubmit}>
                  <div className="consult-row">
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" required />
                  <select name="type" required defaultValue="">
                    <option value="" disabled>Project Type</option>
                    <option>Hotel &amp; Resort Design</option>
                    <option>Restaurant &amp; F&amp;B Design</option>
                    <option>Commercial Interior Design</option>
                    <option>Architecture</option>
                    <option>Residential Interior Design</option>
                    <option>Other</option>
                  </select>
                  <textarea name="message" rows="3" placeholder="Brief project description (optional)"></textarea>
                  <button type="submit" className="consult-submit">
                    Send via WhatsApp &amp; Email &rarr;
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
