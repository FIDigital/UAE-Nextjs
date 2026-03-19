import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import ZohoSalesIQ from "@/components/ZohoSalesIQ";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export const metadata = {
  metadataBase: new URL("https://fristine-uae.com"),
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
    url: "https://fristine-uae.com",
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
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
