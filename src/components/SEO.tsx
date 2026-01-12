import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({
  title = 'Joshua Franklyn | Consultant General & Colorectal Surgeon',
  description = 'Expert consultant surgeon specializing in robotic colorectal surgery, hernia repair, and advanced bowel treatments. Precision. Innovation. Compassion.',
  keywords = 'colorectal surgeon, robotic surgery, hernia repair, bowel cancer, IBD treatment, colonoscopy, London surgeon, consultant surgeon',
  canonical,
  ogImage = 'https://drjoshuafranklyn.com/og-image.jpg',
}: SEOProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://drjoshuafranklyn.com',
    name: 'Dr. Joshua Franklyn',
    description: description,
    url: 'https://drjoshuafranklyn.com',
    telephone: 'Available upon consultation',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    medicalSpecialty: [
      'General Surgery',
      'Colorectal Surgery',
      'Robotic Surgery',
    ],
    founder: {
      '@type': 'Physician',
      name: 'Dr. Joshua Franklyn',
      jobTitle: 'Consultant General and Colorectal Surgeon',
      alumniOf: 'Christian Medical College Vellore',
      medicalSpecialty: [
        'General Surgery',
        'Colorectal Surgery',
        'Robotic Surgery',
      ],
    },
    priceRange: '££',
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
