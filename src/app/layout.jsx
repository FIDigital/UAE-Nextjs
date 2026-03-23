import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import ZohoSalesIQ from "@/components/ZohoSalesIQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  metadataBase: new URL("https://fidigital.ae"),
  title: {
    default: "FI Digital UAE | AI Agent Architects & Zoho Experts",
    template: "%s | FI Digital UAE",
  },
  description:
    "Leading Australian Zoho partner in Dubai. We architect intelligent AI agents and automated enterprise workflows for UAE businesses.",
  keywords: [
    "AI agents UAE",
    "WhatsApp business automation",
    "Zoho Partner Dubai",
    "Digital Transformation UAE",
    "Enterprise AI Dubai",
  ],
  authors: [{ name: "FI Digital" }],
  creator: "FI Digital",
  publisher: "FI Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://fidigital.ae",
    siteName: "FI Digital UAE",
    title: "FI Digital UAE | AI Agent Architects & Zoho Experts",
    description: "Leading Australian Zoho partner in Dubai. We architect intelligent AI agents and automated enterprise workflows.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FI Digital UAE – AI Agent Architects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FI Digital UAE | AI Agent Architects",
    description: "Leading Australian Zoho partner in Dubai. AI agent architects and Zoho experts.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://fidigital.ae",
    types: {
      "text/plain": [
        {
          url: "/llms.txt",
          title: "LLM Info",
        },
      ],
    },
  },
};

export default function RootLayout({
  children,
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ITService"],
    "@id": "https://fidigital.ae/#organization",
    "name": "FI Digital",
    "legalName": "FI Digital UAE",
    "alternateName": ["FI Digital Dubai", "FI Digital UAE"],
    "description": "AI Agent Architects & Zoho Ecosystem Experts. We build bilingual AI agents and enterprise Zoho implementations for UAE businesses.",
    "url": "https://fidigital.ae",
    "logo": "https://fidigital.ae/images/logo.png",
    "foundingDate": "2020",
    "foundingLocation": "Sydney, Australia",
    "slogan": "Intelligent Automation & Zoho Architecture for the UAE",
    "knowsAbout": [
      "Artificial Intelligence", "Zoho CRM",
      "WhatsApp Business API", "n8n Automation",
      "Enterprise Software", "Arabic AI",
      "Business Process Automation"
    ],
    "serviceType": [
      "AI Agent Development",
      "Zoho Implementation",
      "Enterprise Automation",
      "WhatsApp Business Integration",
      "Custom Software Development"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Bay",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@fidigital.ae",
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/fidigital",
      "https://fidigital.com.au"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FI Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "AI & Zoho Readiness Audit",
          "description": "Complimentary 45-minute diagnostic with 15-20 page report",
          "price": "0",
          "priceCurrency": "AED"
        },
        {
          "@type": "Offer",
          "name": "Discovery Sprint",
          "description": "2-week diagnostic and implementation roadmap",
          "priceRange": "AED 15,000 - 25,000",
          "priceCurrency": "AED"
        },
        {
          "@type": "Offer",
          "name": "Project-Based Implementation",
          "description": "Full Zoho + AI implementation (6-16 weeks)",
          "priceRange": "AED 50,000 - 500,000+",
          "priceCurrency": "AED"
        }
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1D4ED8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <div className="page-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1 }}>
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScrolling>
        </ThemeProvider>
        <ZohoSalesIQ />
        <FloatingContactButton />
      </body>
    </html>
  );
}
