import Link from "next/link";
import { siteConfig } from "@/lib/siteData";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";

const footerLinks = {
  "Digital Workers": [
    { label: "WhatsApp Sales Agents", href: "/digital-workers/whatsapp-sales-agents" },
    { label: "Real Estate Agents", href: "/digital-workers/real-estate-agents" },
    { label: "Finance & Procurement", href: "/digital-workers/finance-procurement-agents" },
    { label: "Customer Service", href: "/digital-workers/customer-service-agents" },
    { label: "HR & Onboarding", href: "/digital-workers/hr-onboarding-agents" },
  ],
  Platform: [
    { label: "Zoho Agentic AI", href: "/platform/zoho-agentic-ai" },
    { label: "n8n Orchestration", href: "/platform/n8n-orchestration" },
    { label: "Multilingual LLM", href: "/platform/multilingual-llm" },
    { label: "Custom AI Development", href: "/platform/custom-ai-development" },
    { label: "Data & Analytics", href: "/platform/data-analytics" },
  ],
  Industries: [
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "F&B & Hospitality", href: "/industries/fnb-hospitality" },
    { label: "Logistics", href: "/industries/logistics" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Resources", href: "/resources" },
    { label: "Contact & Pricing", href: "/contact" },
  ],
};

// Simple SVG icons inlined to avoid extra dependencies
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.131.559 4.13 1.535 5.863L.057 23.386a.75.75 0 00.919.919l5.523-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="fi-footer">
      {/* Top gradient accent line */}
      <div className="fi-footer-accent-line" />

      <div className="fi-footer-inner">
        {/* Main grid */}
        <div className="fi-footer-grid">

          {/* ── Brand Column ── */}
          <div className="fi-footer-brand">
            {/* Logo mark */}
            <Link href="/" aria-label="FI Digital – Home" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginBottom: "1.1rem" }}>
                <Logo variant="white" width="180px" height="54px" />
            </Link>

            <p className="fi-footer-tagline">
              Australian Zoho expertise meets Middle Eastern ambition. AI agent architects for enterprise transformation.
            </p>

            {/* Contact details */}
            <div className="fi-footer-contact">
              <a href={`tel:${siteConfig.phone}`} className="fi-footer-contact-row">
                <span className="fi-footer-contact-icon"><PhoneIcon /></span>
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, "")}`}
                className="fi-footer-contact-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fi-footer-contact-icon"><WhatsAppIcon /></span>
                {siteConfig.whatsapp}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="fi-footer-contact-row">
                <span className="fi-footer-contact-icon"><MailIcon /></span>
                {siteConfig.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="fi-footer-socials">
              <a href="#" target="_blank" rel="noopener noreferrer" className="fi-footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/FiDigitalSevices" target="_blank" rel="noopener noreferrer" className="fi-footer-social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="fi-footer-social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/showcase/fidigital-mea/" target="_blank" rel="noopener noreferrer" className="fi-footer-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* ── Link Columns ── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="fi-footer-col">
              <h3 className="fi-footer-col-title">{title}</h3>
              <ul className="fi-footer-col-list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="fi-footer-col-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Offices ── */}
        <div className="fi-footer-offices">
          {Object.values(siteConfig.offices).map((office) => (
            <div key={office.city} className="fi-footer-office-card">
              <div className="fi-footer-office-header">
                <span className="fi-footer-office-dot" />
                <h4 className="fi-footer-office-city">{office.city}</h4>
              </div>
              <p className="fi-footer-office-detail">
                <MapPinIcon /> {office.address}
              </p>
              <p className="fi-footer-office-detail">
                <PhoneIcon /> {office.phone}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="fi-footer-bottom">
          <p className="fi-footer-copy">
            &copy; {new Date().getFullYear()} FI Digital UAE. All rights reserved.
          </p>
          <div className="fi-footer-legal">
            <Link href="/privacy" className="fi-footer-legal-link">Privacy Policy</Link>
            <span className="fi-footer-legal-dot">·</span>
            <Link href="/terms" className="fi-footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Root ── */
        .fi-footer {
          background: var(--footer-bg);
          color: var(--footer-text);
          position: relative;
          overflow: hidden;
        }

        /* Subtle background glow blobs */
        .fi-footer::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(29,78,216,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .fi-footer::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -60px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Gradient accent line at top ── */
        .fi-footer-accent-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(29,78,216,0.6) 30%, rgba(99,102,241,0.6) 70%, transparent);
        }

        /* ── Inner wrapper ── */
        .fi-footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
        }

        /* ── Main grid ── */
        .fi-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--footer-border);
        }

        /* ── Brand ── */
        .fi-footer-tagline {
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--footer-text);
          max-width: 260px;
          margin-bottom: 1.5rem;
        }

        /* ── Contact ── */
        .fi-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .fi-footer-contact-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.82rem;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .fi-footer-contact-row:hover {
          color: var(--footer-hover);
        }
        .fi-footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 7px;
          background: rgba(29,78,216,0.15);
          color: #6366F1;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .fi-footer-contact-row:hover .fi-footer-contact-icon {
          background: rgba(29,78,216,0.28);
        }

        /* ── Social Links ── */
        .fi-footer-socials {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }
        .fi-footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          color: var(--footer-text);
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          border: 1px solid var(--footer-border);
          text-decoration: none;
        }
        .fi-footer-social-link:hover {
          background: rgba(29, 78, 216, 0.15);
          color: #6366F1;
          border-color: rgba(29, 78, 216, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(29, 78, 216, 0.2);
        }

        /* ── Link columns ── */
        .fi-footer-col {}
        .fi-footer-col-title {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--footer-heading);
          margin-bottom: 1.1rem;
          position: relative;
          padding-bottom: 0.6rem;
        }
        .fi-footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 24px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #1D4ED8, #6366F1);
        }
        .fi-footer-col-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .fi-footer-col-link {
          font-size: 0.84rem;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: inline-block;
        }
        .fi-footer-col-link:hover {
          color: var(--footer-hover);
          padding-left: 4px;
        }

        /* ── Offices ── */
        .fi-footer-offices {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          padding: 2rem 0;
          border-bottom: 1px solid var(--footer-border);
        }
        .fi-footer-office-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--footer-border);
          border-radius: 12px;
          padding: 1.1rem 1.25rem;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .fi-footer-office-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(29,78,216,0.35);
        }
        .fi-footer-office-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .fi-footer-office-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1D4ED8, #6366F1);
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(99,102,241,0.5);
        }
        .fi-footer-office-city {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--footer-heading);
          letter-spacing: 0.02em;
        }
        .fi-footer-office-detail {
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: var(--footer-text);
          line-height: 1.5;
          margin-top: 0.35rem;
        }
        .fi-footer-office-detail svg {
          flex-shrink: 0;
          margin-top: 2px;
          opacity: 0.6;
        }

        /* ── Bottom bar ── */
        .fi-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .fi-footer-copy {
          font-size: 0.8rem;
          color: var(--footer-text);
          opacity: 0.7;
        }
        .fi-footer-legal {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .fi-footer-legal-link {
          font-size: 0.8rem;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.2s ease;
          opacity: 0.7;
        }
        .fi-footer-legal-link:hover {
          color: var(--footer-hover);
          opacity: 1;
        }
        .fi-footer-legal-dot {
          color: var(--footer-text);
          opacity: 0.3;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .fi-footer-grid {
            grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr;
            gap: 1.75rem;
          }
        }

        @media (max-width: 900px) {
          .fi-footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;
          }
          .fi-footer-brand {
            grid-column: 1 / -1;
          }
          .fi-footer-tagline {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .fi-footer-inner {
            padding: 3rem 1.25rem 1.5rem;
          }
          .fi-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .fi-footer-brand {
            grid-column: 1 / -1;
          }
          .fi-footer-offices {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .fi-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }

        @media (max-width: 400px) {
          .fi-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
