// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "AA Zaura | Official Website",
  description = "Official website of Abdussalam Abdulkarim Zaura, businessman, philanthropist, and political leader from Kano, Nigeria.",
  canonical = "/",
  image = "/og-image.jpg",
  type = "website",
}) {
  const fullTitle = `${title}`;
  const siteUrl = "https://aazaura.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="charset" content="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={`${siteUrl}${canonical}`} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Search Engines */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
