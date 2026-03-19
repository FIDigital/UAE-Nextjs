"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Shield, Users, Briefcase, Award, ArrowRight,
  Linkedin, CheckCircle2, Globe2, Zap,
  Building2, Calendar, Phone, TrendingDown
} from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Animated counter ─────────────────────────────────────────────────────── */
function Counter({ to, suffix = "" }) {
  const el = useRef(null);
  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: to, duration: 2, ease: "power2.out",
      scrollTrigger: { trigger: el.current, start: "top 92%", once: true },
      onUpdate: () => { if (el.current) el.current.textContent = Math.round(obj.val) + suffix; }
    });
  }, [to, suffix]);
  return <span ref={el}>0{suffix}</span>;
}

/* ─── Data ──────────────────────────────────────────────────────────────────── */
const timeline = [
  { year: "2018", city: "Dubai 🇦🇪", title: "Born in the UAE", desc: "FI Digital founded in Dubai, building Zoho CRM implementations and digital solutions for growing enterprises." },
  { year: "2021", city: "Enterprise Shift", title: "Scaling Up Operations", desc: "Expanded our offerings to focus on process automation and AI enablement for mid-market and enterprise clients." },
  { year: "2023", city: "Business Bay 🏛️", title: "Fully Licensed", desc: "Obtained Dubai trade license in Business Bay. UAE VAT registered. Full local presence established." },
  { year: "2024", city: "Riyadh 🇸🇦", title: "KSA Expansion", desc: "Launched operations in Riyadh to drive AI innovation and enterprise automation across the Kingdom of Saudi Arabia." },
  { year: "Today", city: "Middle East 🌏", title: "We Are Builders", desc: "2 Regional Hubs. 15-person team. 80+ Zoho implementations. 40+ AI agents deployed. We stay with clients long after launch." },
];

const trustItems = [
  { icon: "🏛️", label: "Dubai Trade License", sub: "Active since 2023 · Business Bay", color: "#1D4ED8" },
  { icon: "💰", label: "UAE VAT Registered", sub: "Fully compliant with FTA requirements", color: "#10B981" },
  { icon: "🔒", label: "Data Sovereignty", sub: "UAE PDPL & KSA PDPL compliant — your data stays secure", color: "#6366F1" },
  { icon: "🇸🇦", label: "KSA Operations", sub: "Dedicated regional presence serving the Saudi market", color: "#F59E0B" },
];

const offices = [
  {
    city: "Dubai",
    country: "UAE 🇦🇪",
    color: "#1D4ED8",
    accent: "rgba(29,78,216,0.12)",
    role: "Headquarters • Strategy • Client Relationships",
    roleShort: "HQ",
    desc: "Client relationships, UAE market expertise, project strategy, and on-the-ground support.",
    img: "/images/dubai-office.png",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.984847269474!2d55.27!3d25.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI0LjAiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia 🇸🇦",
    color: "#10B981",
    accent: "rgba(16,185,129,0.12)",
    role: "Regional Office • Enterprise Transformation",
    roleShort: "KSA",
    desc: "Driving AI innovation and enterprise automation across the Kingdom of Saudi Arabia.",
    img: "/images/riyadh-office.png",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5681144070868!2d46.6710!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKingdom%20Centre!5e0!3m2!1sen!2sae!4v1",
  }
];

const teamMembers = [
  {
    name: "Pratik Modi",
    role: "CEO",
    location: "Dubai, UAE",
    bio: "Our visionary leader, dedicated to driving enterprise digital transformation and scaling FI Digital across the globe.",
    img: "/images/team/pratikmodi.webp",
    linkedin: "#",
  },
  {
    name: "Paras Shah",
    role: "CTO",
    location: "Dubai, UAE",
    bio: "Leading our engineering and architecture efforts with deep expertise in enterprise solutions and AI agent integrations.",
    img: "/images/team/paras.png",
    linkedin: "#",
  },
  {
    name: "Nishant Modi",
    role: "Operations Excellence",
    location: "Dubai, UAE",
    bio: "Ensuring flawless delivery, optimizing our standard operating procedures, and maintaining high-quality outputs across all projects.",
    img: "/images/team/nishant.webp",
    linkedin: "#",
  },
];

const values = [
  { icon: <Shield size={22} />, color: "#1D4ED8", bg: "rgba(29,78,216,0.1)", title: "Governance First", desc: "AI without governance is a liability. Every agent we deploy is transparent, auditable, and built to compliance standards." },
  { icon: <Users size={22} />, color: "#6366F1", bg: "rgba(99,102,241,0.1)", title: "Human Amplification", desc: "Our goal isn't replacement but the radical expansion of human potential. Technology works for people, not instead of them." },
  { icon: <Briefcase size={22} />, color: "#10B981", bg: "rgba(16,185,129,0.1)", title: "Engineering Discipline", desc: "We bring enterprise-grade engineering standards to every deployment. No shortcuts, no scope creep." },
  { icon: <Award size={22} />, color: "#F59E0B", bg: "rgba(245,158,11,0.1)", title: "Long-term Commitment", desc: "We stay with clients long after launch. Our local regional presence signals partnership, not a one-time project." },
];

/* ─── Three-continent interactive section ───────────────────────────────────── */
function ThreeContinents() {
  const [active, setActive] = useState(0);
  const o = offices[active];

  return (
    <div className="ab-continent-grid">
      {/* Left — switcher tabs + detail */}
      <div>
        {/* Tab switcher */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
          {offices.map((off, i) => (
            <button
              key={off.city}
              onClick={() => setActive(i)}
              style={{
                width: "100%", textAlign: "left", padding: "1.1rem 1.5rem",
                borderRadius: 14, border: `2px solid ${active === i ? off.color : "var(--border)"}`,
                background: active === i ? `${off.accent}` : "var(--card-bg)",
                cursor: "pointer", transition: "all 0.22s ease",
                display: "flex", alignItems: "center", gap: "1rem"
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: active === i ? off.color : "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", transition: "all 0.22s" }}>
                {active === i ? <span style={{ color: "white", fontWeight: 800, fontSize: "0.7rem" }}>{off.roleShort}</span> : ["🇦🇪","🇸🇦"][i]}
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: active === i ? off.color : "var(--text)" }}>{off.city} · {off.country}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{off.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Description */}
        <div style={{ padding: "1.5rem", borderRadius: 14, background: o.accent, border: `1px solid ${o.color}30` }}>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>{o.desc}</p>
        </div>
      </div>

      {/* Right — city image + map */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* City photo */}
        <div style={{ borderRadius: 16, overflow: "hidden", height: 220, position: "relative" }}>
          <Image
            key={o.city}
            src={o.img}
            alt={o.city}
            fill
            style={{ objectFit: "cover", transition: "opacity 0.4s" }}
          />
          {/* Minimal bottom label only */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.85rem 1.25rem", background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }}>
            <div style={{ color: "white", fontWeight: 800, fontSize: "1.1rem" }}>{o.city}</div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem" }}>{o.role}</div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div style={{ borderRadius: 16, overflow: "hidden", height: 200, border: "1px solid var(--border)" }}>
          <iframe
            key={o.city}
            src={o.mapEmbed}
            width="100%"
            height="200"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────────── */
export default function AboutClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".ah-badge",  { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".ah-h1",     { y: 36,  autoAlpha: 0, duration: 0.6,  delay: 0.1, ease: "power3.out" });
    gsap.from(".ah-sub",    { y: 20,  autoAlpha: 0, duration: 0.5,  delay: 0.22, ease: "power2.out" });
    gsap.from(".ah-stats-row", { y: 24, autoAlpha: 0, duration: 0.5, delay: 0.35, ease: "power2.out" });

    gsap.utils.toArray(".rv").forEach((el) => {
      gsap.fromTo(el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 95%", once: true, invalidateOnRefresh: true }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <style>{`
        /* ── About page — full responsive system ── */

        /* Grid layouts */
        .ab-stats-band   { display: flex; flex-wrap: wrap; }
        .ab-stat-cell    { flex: 1 1 140px; padding: 1.5rem 1rem; text-align: center; border-right: 1px solid var(--border); }
        .ab-stat-cell:last-child { border-right: none; }
        .ab-timeline     { position: relative; padding-left: 2.5rem; }
        .ab-tl-line      { position: absolute; left: 0.65rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--primary), rgba(99,102,241,0.2)); }
        .ab-continent-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; }
        .ab-trust-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .ab-team-grid    { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        .ab-values-grid  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.75rem; }

        /* Team Animation Styles */
        .ab-team-card {
          position: relative;
          background: var(--card-bg);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(0);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .ab-team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          border-color: var(--primary);
        }
        .ab-team-img-container {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          background: var(--card-bg);
          /* Force hardware isolation for the container */
          transform: translate3d(0, 0, 0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .ab-team-img {
          position: absolute;
          /* Bleed slightly to kill sub-pixel gap */
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          object-fit: cover;
          object-position: center top;
          /* Anchor to bottom so line never tears */
          transform-origin: center bottom;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .ab-team-card:hover .ab-team-img {
          transform: scale(1.05) translateZ(0);
        }
        .ab-team-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          transition: opacity 0.4s ease;
        }
        .ab-team-card:hover .ab-team-overlay {
          opacity: 1;
        }
        .ab-team-role {
          color: white;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
        }
        .ab-team-card:hover .ab-team-role {
          transform: translateY(0);
        }
        .ab-team-name-area {
          padding: 1.25rem 1.5rem;
          text-align: center;
          border-top: 1px solid var(--border);
        }
        .ab-team-name {
          color: var(--text);
          font-weight: 900;
          font-size: 1.15rem;
          font-family: 'Plus Jakarta Sans',sans-serif;
          margin: 0;
        }

        /* Section padding helper */
        .ab-section      { padding: 90px 1.5rem; }

        /* Tab buttons inside ThreeContinents */
        .ab-tab-btn { width: 100%; text-align: left; padding: 1rem 1.25rem; border-radius: 14px; cursor: pointer; transition: all 0.22s ease; display: flex; align-items: center; gap: 0.85rem; }
        .ab-tab-icon { width: 40px; height: 40px; min-width: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1rem; transition: all 0.22s; flex-shrink: 0; }
        .ab-tab-label { font-weight: 800; font-size: 0.95rem; }
        .ab-tab-sub   { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.1rem; line-height: 1.3; }

        /* Equation row */
        .ab-eq-row { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.75rem; align-items: center; }

        /* ── 1200px: 2-col for team & values ── */
        @media (max-width: 1200px) {
          .ab-team-grid   { grid-template-columns: repeat(2, 1fr); }
          .ab-values-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── 900px: collapse trust & continent to 1-col ── */
        @media (max-width: 900px) {
          .ab-trust-grid     { grid-template-columns: 1fr; gap: 2.5rem; }
          .ab-continent-grid { grid-template-columns: 1fr; gap: 1.5rem; }
        }

        /* ── 640px: full mobile ── */
        @media (max-width: 640px) {
          .ab-section { padding: 52px 1rem; }
          .ab-stat-cell { border-right: none; border-bottom: 1px solid var(--border); flex: 1 1 50%; }
          .ab-stat-cell:last-child { border-bottom: none; }
          .ab-continent-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .ab-trust-grid  { grid-template-columns: 1fr; gap: 1.75rem; }
          .ab-team-grid   { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .ab-values-grid { grid-template-columns: 1fr; gap: 1rem; }
          .ab-timeline    { padding-left: 1.85rem; }
          .ab-tl-line     { left: 0.5rem; }
          .ab-eq-row      { justify-content: flex-start; }
          .ab-tab-btn     { padding: 0.8rem 1rem; }
          .ab-tab-sub     { display: none; }
        }

        /* ── 420px: single column for team ── */
        @media (max-width: 420px) {
          .ab-team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <main style={{ paddingTop: "var(--header-h)" }}>

        {/* ══ HERO ═════════════════════════════════════════════════════════ */}
        <section className="hero-section" style={{
            position: "relative",
            minHeight: "65vh",
            display: "flex",
            alignItems: "center",
            padding: "clamp(100px, 12vh, 120px) 1.5rem 80px",
            background: "var(--bg)",
            overflow: "hidden"
        }}>
            {/* Background Visual */}
            <div className="hero-background" style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "60%",
                height: "100%",
                zIndex: 0,
                opacity: 0.4,
                pointerEvents: "none"
            }}>
                <Image 
                    src="/images/about-hero.png" 
                    alt="Background" 
                    fill
                    style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                />
            </div>

            <div className="container hero-container" style={{ 
                position: "relative", 
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left"
            }}>
              <div className="ah-badge" style={{ display: "inline-block", marginBottom: "1.25rem", padding: "0.4rem 1.1rem", borderRadius: 100, background: "rgba(29, 78, 216, 0.1)", border: "1px solid rgba(29, 78, 216, 0.25)", color: "var(--primary)", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                About FI Digital
              </div>
              <h1 className="ah-h1" style={{ fontSize: "clamp(2.4rem,6vw,4rem)", fontWeight: 900, lineHeight: 1.1, color: "var(--text)", letterSpacing: "-0.025em" }}>
                Enterprise Engineering.{" "}
                <br />
                <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Middle East Ambition.</span>{" "}
                <br />
                Flawless Delivery.
              </h1>
              <p className="ah-sub" style={{ marginTop: "1.25rem", fontSize: "clamp(1.05rem,2vw,1.15rem)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640 }}>
                Headquartered in Dubai with a strong presence in Riyadh, we are dedicated to driving AI innovation and enterprise automation across the Middle East.
              </p>
            </div>
        </section>

        <section style={{ background: "var(--bg-secondary)" }}>
          {/* Stats band below image */}
          <div className="ab-stats-band" style={{ borderTop: "1px solid var(--border)" }}>
            {[
              { n: 80, suf: "+", label: "Zoho Implementations", color: "#1D4ED8" },
              { n: 40, suf: "+", label: "AI Agents Deployed", color: "#6366F1" },
              { n: 13, suf: "yr", label: "Years Experience", color: "#10B981" },
              { n: 2,  suf: "",  label: "Regional Hubs", color: "#F59E0B" },
            ].map((s, i) => (
              <div key={s.label} className="ab-stat-cell">
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "2.25rem", fontWeight: 900, color: s.color }}>
                  <Counter to={s.n} suffix={s.suf} />
                </div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginTop: "0.2rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ OUR STORY — TIMELINE ════════════════════════════════════════ */}
        <section className="ab-section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Driving Innovation in the Middle East</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                We are builders. We write code, deploy agents, configure systems — and stay with our clients long after launch.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="ab-timeline rv">
              {/* Vertical line */}
              <div className="ab-tl-line" />

              {timeline.map((item, i) => (
                <div key={item.year} className="rv" style={{ position: "relative", marginBottom: i < timeline.length - 1 ? "3rem" : 0, display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  {/* Dot on line */}
                  <div style={{ position: "absolute", left: "-2.5rem", top: "0.15rem", width: 28, height: 28, borderRadius: "50%", background: ["#1D4ED8","#10B981","#6366F1","#F59E0B","#1D4ED8"][i], border: "3px solid var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, flexShrink: 0 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingTop: "0.1rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 900, fontSize: "1.1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", color: ["#1D4ED8","#10B981","#6366F1","#F59E0B","#1D4ED8"][i] }}>{item.year}</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, padding: "0.2rem 0.7rem", borderRadius: 100, background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{item.city}</span>
                      <span style={{ fontWeight: 800, fontSize: "1rem" }}>{item.title}</span>
                    </div>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ REGIONAL PRESENCE ══════════════════════════════ */}
        <section className="ab-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="section-label">Regional Presence</div>
              <h2 className="section-title">Dedicated to the Middle East.</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Dubai Headquarters · Riyadh Regional Hub<br />
                <strong style={{ color: "var(--primary)" }}>Enterprise-grade engineering for the region&apos;s fastest-growing businesses.</strong>
              </p>
            </div>

            <div className="rv">
              <ThreeContinents />
            </div>

            {/* Bottom value equation */}
            <div className="rv ab-eq-row" style={{ marginTop: "3rem" }}>
              {[
                { flag: "🇦🇪", label: "Dubai Innovation", color: "#1D4ED8" },
                { flag: "+", label: "", color: "var(--text-muted)", plain: true },
                { flag: "🇸🇦", label: "Saudi Vision", color: "#10B981" },
                { flag: "=", label: "", color: "var(--text-muted)", plain: true },
                { flag: <Briefcase size={18} />, label: "Enterprise Excellence", color: "#F59E0B", plus: true },
              ].map((item, i) =>
                item.plain ? (
                  <span key={i} style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-muted)" }}>{item.flag}</span>
                ) : (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.2rem", borderRadius: 100, background: `${item.color}12`, border: `1.5px solid ${item.color}30`, fontWeight: 700, fontSize: "0.9rem", color: item.color }}>
                    <span style={{ fontSize: "1.1rem" }}>{item.flag}</span> {item.label}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ══ TRUST & LICENSING ═══════════════════════════════════════════ */}
        <section className="ab-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="ab-trust-grid">

              {/* Left — big license highlight */}
              <div className="rv">
                <div className="section-label">Legal & Compliance</div>
                <h2 style={{ fontSize: "clamp(2rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1.25rem" }}>
                  Licensed.<br />Registered.<br />Trusted.
                </h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "0.97rem", marginBottom: "2rem" }}>
                  We are a fully licensed entity with a deep commitment to the region — not a pop-up vendor. Our established presence in Dubai and Riyadh demonstrates our multi-year dedication to the Middle East market.
                </p>

                {/* 3-year badge — prominent */}
                <div style={{ padding: "1.5rem 2rem", background: "linear-gradient(135deg,#1D4ED8,#6366f1)", borderRadius: 18, color: "white", display: "flex", gap: "1.25rem", alignItems: "center", boxShadow: "0 12px 32px rgba(29,78,216,0.3)", marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>3yr</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>UAE Trade License</div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.85, marginTop: "0.2rem" }}>Business Bay, Dubai · Active since 2023</div>
                    <div style={{ fontSize: "0.78rem", opacity: 0.7, marginTop: "0.15rem" }}>Not a fly-in-fly-out vendor.</div>
                  </div>
                </div>
              </div>

              {/* Right — compliance items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {trustItems.map(t => (
                  <div key={t.label} className="rv" style={{ display: "flex", gap: "1.25rem", alignItems: "center", padding: "1.25rem 1.5rem", borderRadius: 14, background: "var(--card-bg)", border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: "1.75rem", flexShrink: 0 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.97rem", color: t.color }}>{t.label}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.83rem", marginTop: "0.15rem" }}>{t.sub}</div>
                    </div>
                    <CheckCircle2 size={18} style={{ color: t.color, marginLeft: "auto", flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ LEADERSHIP TEAM ═════════════════════════════════════════════ */}
        <section className="ab-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Leadership Team</div>
              <h2 className="section-title">The People Behind the Work</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>Engineers, architects, strategists. We write code, deploy agents, configure systems.</p>
            </div>
            <div className="ab-team-grid">
              {teamMembers.map((m, i) => (
                <div key={m.name} className="rv ab-team-card" style={{ transitionDelay: `${i * 0.1}s` }}>
                  {/* Top Image + Overlay */}
                  <div className="ab-team-img-container">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      className="ab-team-img"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="ab-team-overlay">
                      <div className="ab-team-role">{m.role}</div>
                    </div>
                  </div>
                  
                  {/* Bottom Name Title always visible */}
                  <div className="ab-team-name-area">
                    <h3 className="ab-team-name">{m.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CORE VALUES ════════════════════════════════════════════════ */}
        <section className="ab-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">What We Stand For</div>
              <h2 className="section-title">Our Core Values</h2>
            </div>
            <div className="ab-values-grid">
              {values.map(v => (
                <div key={v.title} className="rv" style={{ padding: "2rem", borderRadius: 18, background: "var(--card-bg)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: v.bg, display: "flex", alignItems: "center", justifyContent: "center", color: v.color }}>
                    {v.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{v.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ════════════════════════════════════════════════════════ */}
        <section className="ab-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container" style={{ maxWidth: 780, textAlign: "center" }}>
            <div className="rv">
              <div className="section-label" style={{ marginBottom: "1rem" }}>Ready to Start?</div>
              <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem,4vw,2.6rem)", marginBottom: "1rem", lineHeight: 1.15 }}>
                Ready to architect your future?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 2.5rem" }}>
                Let&apos;s map your journey from operational silos to intelligent agent systems. Book your complimentary 45-minute readiness audit — AED 0, no pitch.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                  Book Free Audit <ArrowRight size={17} />
                </a>
                <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0 1.75rem", height: 50, borderRadius: 12, border: "2px solid var(--border)", color: "var(--text)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                  <Phone size={17} /> Talk to Dubai Hub
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
