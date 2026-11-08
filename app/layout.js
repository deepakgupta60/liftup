import "./globals.css";

export const metadata = {
  title: "LiftUp Agency | AI Search, AEO & GEO Growth Agency",
  description:
    "We position your brand as the #1 verified answer in Google AI Overviews and ChatGPT. High-performance search systems built for modern discovery.",
  keywords: [
    "AEO Agency",
    "Generative Engine Optimization",
    "GEO Marketing",
    "AI Search SEO",
    "Google AI Overviews Citations",
    "ChatGPT Brand Citations",
    "LiftUp Agency"
  ],
  openGraph: {
    title: "LiftUp Agency — The Answer Engine Optimization Agency",
    description: "Get your business recommended as the definitive answer by Google AI and ChatGPT.",
    url: "https://liftupagency.com",
    siteName: "LiftUp Agency",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://liftupagency.com/#organization",
        "name": "LiftUp Agency",
        "url": "https://liftupagency.com",
        "description": "Next-generation search marketing agency specializing in Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and technical entity SEO.",
        "knowsAbout": [
          "Answer Engine Optimization",
          "Generative Engine Optimization",
          "Google AI Overviews Optimization",
          "ChatGPT Brand Authority"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes LiftUp Agency different from traditional SEO agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SEO focuses strictly on 10 blue links. LiftUp Agency optimizes for modern AI answer engines—crafting entity schemas, prompt-aligned content, and trusted citations so Google AI and ChatGPT name your business as the authoritative choice."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 90-Day Traffic Growth Commitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For active Growth and Scale clients, we benchmark your baseline Google and AI search traffic. If we don't deliver a 30% qualified traffic lift within 90 days, we continue optimizing at zero management fee until that milestone is reached."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
