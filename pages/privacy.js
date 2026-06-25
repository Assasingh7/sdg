import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy — Shokeen Design Group"
      description="Privacy Policy for Shokeen Design Group. Learn how we collect, use and protect your personal information."
      canonical="https://www.shokeendesigngroup.com/privacy"
    >
      <section className="legal-page">
        <div className="legal-inner">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: June 2026</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly — such as your name, email address, phone number and project details — when you submit our contact or consultation forms.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information solely to respond to your enquiries, provide design services, and send relevant project updates. We do not sell or share your data with third parties for marketing purposes.</p>

          <h2>3. Cookies</h2>
          <p>Our website uses cookies to understand how visitors interact with our site and to improve user experience. You may disable cookies through your browser settings; however, some site features may not function correctly as a result.</p>

          <h2>4. Google Analytics</h2>
          <p>We use Google Analytics 4 to collect anonymised data about site usage (pages visited, session duration, device type). This data helps us improve the website. No personally identifiable information is sent to Google Analytics.</p>

          <h2>5. Data Security</h2>
          <p>We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss or misuse.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct or request deletion of any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:info@shokeendesigngroup.com">info@shokeendesigngroup.com</a>.</p>

          <h2>7. Contact</h2>
          <p>Shokeen Design Group<br />Main Najafgarh Bahadurgarh Road, Mahesh Garden<br />Najafgarh, New Delhi — 110043<br />India<br /><a href="mailto:info@shokeendesigngroup.com">info@shokeendesigngroup.com</a></p>
        </div>
      </section>
    </Layout>
  );
}
