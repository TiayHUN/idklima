// Structured-data (JSON-LD) helpers for SEO/AEO.
// Rendered inline so search engines and AI answer engines can parse NAP,
// services, areas served, and FAQ Q&A pairs.

const HERO_IMG =
  "https://vibe.filesafe.space/1793360822455392081/assets/15c1b2fe-4ce9-4cc8-b521-c3ca73639b08.png";

const AREAS_SERVED = [
  "Székesfehérvár",
  "Velence",
  "Mór",
  "Bicske",
  "Dunaújváros",
  "Martonvásár",
  "Polgárdi",
  "Gárdony",
  "Sárbogárd",
  "Enying",
];

// LocalBusiness / HVACBusiness schema — consistent NAP across every page.
export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://id-klima.hu/#business",
  name: "ID Klíma",
  logo: "https://vibe.filesafe.space/1793360822455392081/attachments/a69ad1bc-0262-4f43-9e8b-518018d2a2ef.jpg",
  description:
    "Klímatelepítés, klímakarbantartás és klímatisztítás lakossági ügyfeleknek Székesfehérváron és 50 km-es körzetében. 100% elégedettségi garancia, gyors kiszállás.",
  image:
    "https://vibe.filesafe.space/1793360822455392081/attachments/a69ad1bc-0262-4f43-9e8b-518018d2a2ef.jpg",
  url: "https://id-klima.hu",
  telephone: "+36208051772",
  email: "ivanska012@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "HUF",
  areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Polgárdi",
    addressLocality: "Polgárdi",
    postalCode: "8154",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.0933,
    longitude: 18.1833,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "50",
  },
  sameAs: ["https://share.google/rXRiO6bfqteLT4cq3"],
};

// FAQPage schema — lets AI answer engines lift Q&A pairs directly.
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

// Service schema for individual service pages.
export function serviceJsonLd(opts: { name: string; description: string; areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@type": "HVACBusiness", name: "ID Klíma" },
    areaServed: (opts.areaServed ?? AREAS_SERVED).map((name) => ({
      "@type": "City",
      name,
    })),
    url: "https://id-klima.hu",
  };
}
