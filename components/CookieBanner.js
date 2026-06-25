import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('sdg_cookies')) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem('sdg_cookies', '1'); setVisible(false); };
  const decline = () => { localStorage.setItem('sdg_cookies', '0'); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        We use cookies to improve your experience and analyse site traffic.
        By continuing, you agree to our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>
      <div className="cookie-actions">
        <button className="cookie-decline" onClick={decline}>Decline</button>
        <button className="cookie-accept" onClick={accept}>Accept All</button>
      </div>
    </div>
  );
}
