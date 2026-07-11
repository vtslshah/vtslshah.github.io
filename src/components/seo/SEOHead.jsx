import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../data/seo';

export default function SEOHead() {
  return (
    <Helmet>
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta name="author" content={seoConfig.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <link rel="canonical" href={seoConfig.url} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content={seoConfig.ogType} />
      <meta property="og:url" content={seoConfig.url} />
      <meta property="og:title" content={seoConfig.title} />
      <meta property="og:description" content={seoConfig.description} />
      <meta property="og:image" content={seoConfig.image} />

      {/* Twitter */}
      <meta name="twitter:card" content={seoConfig.twitterCard} />
      <meta name="twitter:url" content={seoConfig.url} />
      <meta name="twitter:title" content={seoConfig.title} />
      <meta name="twitter:description" content={seoConfig.description} />
      <meta name="twitter:image" content={seoConfig.image} />

      {/* Google Verification */}
      <meta name="google-site-verification" content={seoConfig.googleVerification} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.structuredData)}
      </script>
    </Helmet>
  );
}
