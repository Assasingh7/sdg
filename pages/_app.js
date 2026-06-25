import '../styles/globals.css';
import Script from 'next/script';
import CookieBanner from '../components/CookieBanner';

// Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
const GA_ID = 'G-XXXXXXXXXX';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}
