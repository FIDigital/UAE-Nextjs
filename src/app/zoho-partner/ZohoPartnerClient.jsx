"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import ZohoFormEmbed from "@/components/ZohoFormEmbed";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ZohoPartnerClient() {
  const main = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".rv").forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
  }, { scope: main });

  return (
    <div ref={main}>
      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "clamp(6rem, 12vw, 10rem)" }}>
        <div className="container">
          <div className="rv" style={{ maxWidth: 720 }}>
            <h1 className="section-title">
              Your Trusted Zoho Partner in Dubai
            </h1>
            <p className="section-subtitle" style={{ marginTop: "1rem" }}>
              FI Digital brings a decade of Zoho expertise to Dubai and the UAE.
              From CRM implementation to AI-powered automation, we help
              businesses operate smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Why us bullets + Form */}
      <section className="section-padding">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 4vw, 4rem)", alignItems: "start" }}>

          <div className="rv">
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              Why Dubai Businesses Choose FI Digital
            </h2>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Authorized Zoho partner with 10+ years experience",
                "Arabic-ready, multi-currency, UAE-compliant setups",
                "AI agents and automation built on Zoho + Claude + n8n",
                "Sydney engineering, local Dubai support",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 2, color: "var(--accent)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rv" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
            <ZohoFormEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
