import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found — Shokeen Design Group</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="not-found">
        <div className="nf-inner">
          <img src="/images/logo.png" alt="Shokeen Design Group" className="nf-logo" />
          <p className="nf-code">404</p>
          <h1 className="nf-title">Page Not Found</h1>
          <p className="nf-body">The page you are looking for has moved or does not exist.</p>
          <Link href="/" className="nf-btn">Return to Homepage</Link>
        </div>
      </div>
    </>
  );
}
