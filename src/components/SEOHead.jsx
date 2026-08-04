import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_DETAILS } from '../data/constants';

export default function SEOHead({
  title = `${COMPANY_DETAILS.shortName} | Heating, Plumbing & AC Engineers Basildon`,
  description = "Basildon's modern heating, plumbing, and air conditioning engineers. Upfront transparent pricing, certified workmanship, and emergency callouts in South Essex.",
  customSchema = null
}) {
  const location = useLocation();
  const currentUrl = `${COMPANY_DETAILS.baseUrl}${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Update Dynamic Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 4. Update OpenGraph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl);
    }

    // 5. Inject JSON-LD Schema
    const schemaId = 'seo-schema-jsonld';
    let existingScript = document.getElementById(schemaId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';

    const defaultLocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HeatingAndAirConditioningContractor",
      "name": COMPANY_DETAILS.name,
      "image": `${COMPANY_DETAILS.baseUrl}/images/company-logo.svg`,
      "telephone": COMPANY_DETAILS.phone,
      "email": COMPANY_DETAILS.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_DETAILS.street,
        "addressLocality": COMPANY_DETAILS.city,
        "addressRegion": COMPANY_DETAILS.county,
        "postalCode": COMPANY_DETAILS.postcode,
        "addressCountry": COMPANY_DETAILS.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.5761,
        "longitude": 0.4687
      },
      "url": currentUrl,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:30",
          "closes": "18:00"
        }
      ],
      "areaServed": ["United Kingdom", "Greater London", "Essex", "Basildon", "Wickford", "Billericay", "Pitsea", "Laindon", "Rayleigh", "Benfleet", "Southend-on-Sea"],
      "priceRange": "££",
      "founder": {
        "@type": "Person",
        "name": COMPANY_DETAILS.director
      }
    };

    script.text = JSON.stringify(customSchema || defaultLocalBusinessSchema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [title, description, currentUrl, customSchema]);

  return null;
}
