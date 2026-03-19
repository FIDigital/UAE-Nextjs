"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MessageCircle, Mail, Phone, ChevronDown, CheckCircle2,
  ArrowRight, MapPin, Send, Zap, Shield, BarChart2,
  TrendingUp, Users, Clock, Star, Globe2, Headphones,
  Building2, Rocket, Target, Award, DollarSign, Lock,
  RefreshCcw, Layers, AlertTriangle
} from "lucide-react";
import FAQItem from "@/components/FAQItem";
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
      val: to, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: el.current, start: "top 92%" },
      onUpdate: () => {
        if (el.current) el.current.textContent = Math.round(obj.val) + suffix;
      }
    });
  }, [to, suffix]);
  return <span ref={el}>0{suffix}</span>;
}

/* ─── Show More / Less ──────────────────────────────────────────────────────── */
function ShowMore({ children, collapsedHeight = 96 }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [fullH, setFullH] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setFullH(bodyRef.current.scrollHeight);
  }, [children]);

  return (
    <div>
      <div
        ref={bodyRef}
        style={{
          maxHeight: open ? fullH + "px" : collapsedHeight + "px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1)",
          position: "relative",
        }}
      >
        {children}
        {!open && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 52,
            background: "linear-gradient(to bottom, transparent, var(--card-bg))",
            pointerEvents: "none"
          }} />
        )}
      </div>
      <button
        onClick={() => { setOpen(!open); if (!bodyRef.current) return; setFullH(bodyRef.current.scrollHeight); }}
        style={{
          marginTop: "0.6rem", display: "flex", alignItems: "center", gap: "0.35rem",
          background: "none", border: "none", color: "var(--primary)", fontWeight: 700,
          fontSize: "0.82rem", cursor: "pointer", padding: 0, letterSpacing: "0.02em"
        }}
      >
        {open ? "Show Less" : "Show More"}
        <ChevronDown size={14} style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }} />
      </button>
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────────────────────── */
const engagementOptions = [
  {
    id: 0, badge: "Option 1",
    title: "Complimentary AI & Zoho Readiness Audit",
    subtitle: "45 minutes · AED 0",
    icon: <Star size={22} />, colorVar: "#10B981",
    bg: "rgba(16,185,129,0.10)", border: "rgba(16,185,129,0.25)",
    tagline: "For explorers. No commitment needed.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    imageAlt: "Team strategy session",
    short: "We interview your team, observe your processes, and deliver a 15–20 page diagnostic report. No pitch — just honest assessment.",
    details: [
      "20-min team interview (front-line staff, manager, finance)",
      "Observe workflow, pain points, existing tech stack",
      "AI & Zoho readiness analysis — is your data clean enough?",
      "Opportunities ranked by impact and effort",
      "Rough timeline & cost estimate included",
      "50% audit cost credited if you proceed to implementation",
    ],
    note: "Cost: AED 0  ·  1 week turnaround"
  },
  {
    id: 1, badge: "Option 2",
    title: "Strategy Session",
    subtitle: "60 minutes · AED 8,000",
    icon: <BarChart2 size={22} />, colorVar: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)", border: "rgba(29,78,216,0.22)",
    tagline: "For decision-makers ready to invest.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    imageAlt: "Executive strategy meeting",
    short: "Deep-dive into your ideal future state. Get a clear roadmap, realistic budget, and firm timeline — not vague estimates.",
    details: [
      "Walkthrough your 12-month success vision",
      "Full phase-by-phase roadmap (Phase 1, 2, downstream)",
      "Costed plan — not a range, an actual budget",
      "Critical path timeline — not 'TBD'",
      "Confidence check: should you proceed?",
      "AED 8,000 credited against implementation if you proceed",
    ],
    note: "Cost: AED 8,000  ·  1 week prep → session → 1 week turnaround"
  },
  {
    id: 2, badge: "Option 3",
    title: "WhatsApp Quick Connect",
    subtitle: "2-hour response · AED 0",
    icon: <MessageCircle size={22} />, colorVar: "#25D366",
    bg: "rgba(37,211,102,0.08)", border: "rgba(37,211,102,0.25)",
    tagline: "For tire-kickers. Just a quick chat.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    imageAlt: "WhatsApp quick connect on phone",
    short: "WhatsApp us informally. We respond within 2 hours with a brief initial assessment — timeline, cost range, and fit.",
    details: [
      "No obligation, no sales pitch",
      "Initial fit assessment within 2 hours",
      "Typical response: timeline estimate + cost range + process overview",
      "Perfect for validating the concept before committing time",
    ],
    note: "Response: within 2 hours during business hours"
  }
];

const pricingModels = [
  {
    title: "Discovery Sprint", range: "AED 15–25K", duration: "2–3 weeks",
    icon: <Rocket size={20} />, color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=75",
    desc: "You want to do a real proof-of-concept before full implementation. We take one workflow (WhatsApp lead qualification, or AP invoice processing, or expense management), automate it end-to-end with real data from your business, and show you the results.",
    deliverables: [
      "50-100 actual transactions processed by AI",
      "Quality report & accuracy metrics",
      "Time saved & exceptions encountered",
      "Go/no-go recommendation",
      "50% sprint cost credited to full implementation",
    ]
  },
  {
    title: "Project-Based Implementation", range: "AED 50–500K", duration: "8–24 weeks",
    icon: <Layers size={20} />, color: "#1D4ED8",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=75",
    desc: "Full implementation: architecture, build, UAT, go-live, optimization. Cost varies enormously based on scope: modules, agents, integrations, data complexity, and team size.",
    deliverables: [
      "Light (Zoho CRM setup + WhatsApp agent): AED 50-80K",
      "Standard (CRM + Books + WhatsApp + Email agents): AED 100-200K",
      "Enterprise (Full Zoho stack + 5+ agents + integrations): AED 250-500K+",
      "Milestone payment: 30% upfront / 40% build / 30% go-live",
      "De-risks for you (you only pay for what's delivered)",
    ]
  },
  {
    title: "Ongoing Managed Services", range: "AED 15–75K/mo", duration: "Ongoing",
    icon: <Headphones size={20} />, color: "#6366F1",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=75",
    desc: "After implementation, we manage Zoho and agents for you. We monitor uptime, make configuration changes, train your team, optimize based on metrics, and provide 24/5 support.",
    deliverables: [
      "SMB (under 50 users, 1-2 modules): AED 15-25K/month",
      "Mid-market (50-200 users, 3-4 modules): AED 30-50K/month",
      "Enterprise (200+ users, full stack): AED 50-75K+/month",
      "Cheaper than hiring an internal resource",
      "Bench strength and experience across many companies",
    ]
  }
];

const process48h = [
  { step: "01", icon: <MessageCircle size={18} />, title: "You reach out", desc: "WhatsApp, email, or book a call. Any channel works.", color: "#1D4ED8" },
  { step: "02", icon: <Send size={18} />, title: "5-minute questionnaire", desc: "Company size, industry, pain points, timeline expectations.", color: "#6366F1" },
  { step: "03", icon: <Phone size={18} />, title: "Initial call (15–20 min)", desc: "No pressure. We just listen and understand your situation.", color: "#10B981" },
  { step: "04", icon: <Target size={18} />, title: "Proposal sent", desc: "AED estimate, timeline, deliverables — clear and specific.", color: "#F59E0B" },
  { step: "05", icon: <Award size={18} />, title: "You decide", desc: "Review with your team. No pressure, no aggressive follow-up.", color: "#EC4899" },
];

const pricingComparison = [
  { option: "Big Consulting Firm", impl: "AED 500K → 750K (change orders)", support: "AED 80K/month (5 FTEs)", yearOne: "AED 1.43M", verdict: "Expensive & unpredictable", tag: "bad" },
  { option: "Cheap Outsourcer", impl: "AED 100K → +150K rework", support: "AED 30K/mo (internal FTE)", yearOne: "AED 510K (broken)", verdict: "Cheap then costly", tag: "bad" },
  { option: "FI Digital", impl: "AED 200K (all-in, fixed)", support: "AED 40K/month managed", yearOne: "AED 680K", verdict: "Best value + quality", tag: "best" },
];

const generalFaqs = [
  { q: "What if we're not ready now?", a: "We'd recommend doing a free audit now, then revisiting in 6–12 months. The world changes fast; your tech stack will only get more outdated. No obligation to commit immediately." },
  { q: "What if the implementation goes over budget?", a: "Won't happen. We fix scope before starting and estimate change-orders upfront. If scope changes mid-project, we estimate the delta and you approve it before we proceed. No surprises." },
  { q: "What if we're unhappy with the result?", a: "90-day adjustment period post-go-live. If unhappy, we refine at no additional cost. After 90 days, if it's genuinely not working, we offer a partial refund. We haven't had to do this — we pick good-fit clients." },
  { q: "Can we start small and expand later?", a: "Absolutely. Many customers start with Zoho CRM + WhatsApp agent (AED 80–120K), go live, prove value, then add Books + Finance agents. We architect from day 1 with expansion in mind." },
  { q: "What if we need to scale to 500 users later?", a: "Zoho scales. Our architecture scales. Scaling is just licensing expansion — not architecture rework. You're not locked in, and expansion won't require re-implementation." },
  { q: "Do you do implementations outside UAE?", a: "We're UAE-based but also serve APAC: Australia, Singapore, India. If you're outside APAC, we'd recommend a local partner but can advise on the right approach." },
  { q: "How is your support different from offshore centers?", a: "You get the same engineer each month — continuity, relationship, deep understanding of your system. We're proactively in your Zoho instance, not waiting for you to report problems." },
  { q: "Can you help us migrate from Salesforce / HubSpot / Dynamics?", a: "Yes. Migration cost: AED 30–80K depending on system size. Timeline: 6–12 weeks. We've done 20+ migrations and we handle the risk so you don't have to." },
];

const pricingFaqs = [
  { q: "Do you offer discounts for multi-year contracts?", a: "Yes. Annual contract on managed services gets 15% discount. 3-year contract gets 25% discount. Why? Because it gives us predictability and lets us plan resources." },
  { q: "What if we only want to fix one problem (e.g., just automate AP)?", a: "That's fine. You might do a Discovery Sprint on AP automation (AED 20K), validate it works, then expand to other areas later. You don't have to boil the ocean upfront." },
  { q: "Can we negotiate on pricing?", a: "We price fairly and leave room for negotiation. If you're a large enterprise (500+ users, multi-year commitment), there's room to negotiate. If you're SMB or startup, our pricing is already optimized. We're not running a bidding war; we're charging what the work is worth." },
  { q: "Do you offer ROI guarantees?", a: "We don't guarantee ROI (too many variables outside our control). But we design implementations to maximize ROI and we'll show you projections (if you process 5,000 invoices/month, automating 80% saves X hours = Y AED value). If the ROI doesn't pencil out, we'll tell you not to proceed." },
  { q: "What happens if you go out of business?", a: "We've been around since 2013 and we're profitable. But if something happened: 1) your Zoho instance keeps running (we don't own it); 2) your n8n workflows keep running (you own them); 3) you can hire someone to maintain them (they're standard tools). You're not locked in to us forever. Your system is portable." },
];

const offices = [
  { city: "Dubai", flag: "🇦🇪", img: "/images/dubai-office.png", addr: "DSV Information Technology LLC. 412-582, Arjumand Offices and Retail, Dubai Investment Park, Dubai", phone: "+971 58 589 5292", tag: "HQ · Client-facing", color: "#1D4ED8" },
  { city: "Riyadh", flag: "🇸🇦", img: "/images/riyadh-office.png", addr: "King Fahd Road, Olaya District, KSA", phone: "+971 58 589 5292", tag: "Regional Office", color: "#10B981" },
];

const contactMethods = [
  { icon: <MessageCircle size={20} />, label: "WhatsApp Quick Connect", value: "+971 58 589 5292", sub: "Respond within 2 hours", color: "#25D366", bg: "rgba(37,211,102,0.1)", href: "https://wa.me/971585895292" },
  { icon: <Mail size={20} />, label: "Email", value: "info@fidigital.ae", sub: "We respond within 4 hours", color: "#1D4ED8", bg: "rgba(29,78,216,0.1)", href: "mailto:info@fidigital.ae" },
  { icon: <Phone size={20} />, label: "Phone Call", value: "+971 58 589 5292", sub: "Schedule 15 min, no obligation", color: "#6366F1", bg: "rgba(99,102,241,0.1)", href: "tel:+971585895292" },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function ContactClient() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useGSAP(() => {
    // Hero — runs immediately on mount
    gsap.from(".ch-badge", { y: -16, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    gsap.from(".ch-title", { y: 36, autoAlpha: 0, duration: 0.6, delay: 0.1, ease: "power3.out" });
    gsap.from(".ch-desc", { y: 24, autoAlpha: 0, duration: 0.5, delay: 0.22, ease: "power2.out" });
    gsap.from(".ch-stat", { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08, delay: 0.32, ease: "power2.out" });
    gsap.from(".ch-method", { y: 20, autoAlpha: 0, duration: 0.45, stagger: 0.07, delay: 0.4, ease: "power2.out" });

    
    // Scroll-triggered per-element — safe, each element has its own trigger
    // clearProps ensures visibility is restored even if trigger misfires
    gsap.utils.toArray(".rv").forEach((el) => {
      gsap.fromTo(el,
        { y: 28, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: el, start: "top 95%",
            once: true, invalidateOnRefresh: true
          }
        }
      );
    });
  }, { scope: containerRef });

  const active = engagementOptions[activeTab];

  return (
    <div ref={containerRef}>
      <style>{`
        /* ── Contact page — full responsive system ── */

        /* Section padding */
        .cc-section { padding: 80px 1.5rem; }

        /* Hero stats strip */
        .cc-stats { display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; margin-bottom: 3rem; }

        /* Engagement option card — image left, content right */
        .cc-engagement-grid { display: grid; grid-template-columns: 1fr 1fr; }

        /* Investment factors — 3 col */
        .cc-factors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }

        /* Comparison cards — 3 col */
        .cc-compare-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        /* 48h process — 2 col */
        .cc-process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

        /* Contact form + CTA — 2 col */
        .cc-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: flex-start; }

        /* Form name+company row */
        .cc-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; }

        /* ── 1024px ── */
        @media (max-width: 1024px) {
          .cc-factors-grid  { grid-template-columns: 1fr 1fr; }
          .cc-compare-grid  { grid-template-columns: 1fr; gap: 1.25rem; }
        }

        /* ── 768px ── */
        @media (max-width: 768px) {
          .cc-section         { padding: 60px 1.25rem; }
          .cc-engagement-grid { grid-template-columns: 1fr; }
          .cc-process-grid    { grid-template-columns: 1fr; gap: 2rem; }
          .cc-form-grid       { grid-template-columns: 1fr; gap: 2rem; }
          .cc-factors-grid    { grid-template-columns: 1fr; }
          .cc-stats           { gap: 1.5rem; }
        }

        /* ── 640px: full mobile ── */
        @media (max-width: 640px) {
          .cc-section         { padding: 48px 1rem; }
          .cc-engagement-grid { grid-template-columns: 1fr; }
          .cc-compare-grid    { grid-template-columns: 1fr; }
          .cc-form-row        { grid-template-columns: 1fr; }
          .cc-stats           { gap: 1rem; }
        }
      `}</style>
      <main style={{ paddingTop: "var(--header-h)" }}>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-section" style={{
            position: "relative",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            padding: "clamp(100px, 12vh, 100px) 1.5rem 60px",
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
                    src="/images/contact-hero.png" 
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
            <div className="ch-badge hero-badge">Contact & Pricing</div>
            <h1 className="ch-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.4rem,6vw,4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
              Let&apos;s Talk:{" "}
              <br />
              <span style={{ background: "linear-gradient(135deg,#1D4ED8 0%,#6366f1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Three Ways to Engage
              </span>
            </h1>
            <p className="ch-desc" style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: "680px", margin: "0 0 2rem 0" }}>
              No surprise costs, no hidden overruns. You&apos;ll know exactly what you&apos;re paying and what you&apos;re getting. We&apos;re honest about fit — and we&apos;ll tell you if you should wait.
            </p>

            {/* Stats strip */}
            <div className="ch-stat cc-stats rv-stagger" style={{ justifyContent: "flex-start", textAlign: "left", gap: "2rem", marginBottom: "2rem" }}>
              {[
                { n: 80, suf: "+", label: "Zoho Implementations" },
                { n: 40, suf: "+", label: "AI Agents Deployed" },
                { n: 2, suf: "hr", label: "WhatsApp Response" },
                { n: 13, suf: "yr", label: "Years Experience" },
              ].map(s => (
                <div key={s.label} className="rv-child" style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--primary)", lineHeight: 1.1 }}>
                    <Counter to={s.n} suffix={s.suf} />
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-muted)", marginTop: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact method quick links */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {contactMethods.map(m => (
                <a key={m.label} href={m.href} className="ch-method card" style={{ textDecoration: "none", flex: "1 1 200px", maxWidth: "260px", padding: "1.25rem 1.5rem", display: "flex", gap: "0.85rem", alignItems: "center" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, flexShrink: 0 }}>
                    {m.icon}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 800, fontSize: "0.88rem", color: m.color }}>{m.value}</div>
                    <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{m.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── THREE ENGAGEMENT OPTIONS ──────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="section-label">Three Engagement Options</div>
              <h2 className="section-title">Pick Whatever Feels Right</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>A complimentary readiness audit if you&apos;re exploring, a strategy session if you&apos;re serious, or a WhatsApp quick connect if you want to kick tires.</p>
            </div>

            {/* Tabs */}
            <div className="rv" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {engagementOptions.map(opt => (
                <button key={opt.id} onClick={() => setActiveTab(opt.id)} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.65rem 1.5rem", borderRadius: 100,
                  border: `2px solid ${activeTab === opt.id ? opt.colorVar : "var(--border)"}`,
                  background: activeTab === opt.id ? opt.bg : "transparent",
                  color: activeTab === opt.id ? opt.colorVar : "var(--text-muted)",
                  fontWeight: 700, fontSize: "0.88rem", cursor: "pointer",
                  transition: "all 0.22s ease"
                }}>
                  <span style={{ color: activeTab === opt.id ? opt.colorVar : "var(--text-muted)" }}>{opt.icon}</span>
                  {opt.badge}
                </button>
              ))}
            </div>

            {/* Active option card */}
            <div className="card" style={{ padding: 0, overflow: "hidden", border: `2px solid ${active.border}` }}>
              <div className="cc-engagement-grid">
                {/* Image panel */}
                <div style={{ position: "relative", minHeight: 280, overflow: "hidden" }}>
                  <Image src={active.image} alt={active.imageAlt} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.2) 100%)" }} />
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: active.bg, border: `1px solid ${active.border}`, borderRadius: 100, padding: "0.35rem 1rem", color: active.colorVar, fontWeight: 800, fontSize: "0.82rem", backdropFilter: "blur(8px)" }}>
                      {active.icon} {active.badge}
                    </div>
                    <div style={{ color: "white", fontWeight: 900, fontSize: "1.5rem", lineHeight: 1.2, marginTop: "0.5rem", textShadow: "0 2px 8px rgba(0,0,0,0.4)", maxWidth: 280 }}>{active.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", marginTop: "0.4rem" }}>{active.subtitle}</div>
                  </div>
                </div>

                {/* Content panel */}
                <div style={{ padding: "2.5rem" }}>
                  <p style={{ color: "var(--text-muted)", fontStyle: "italic", marginBottom: "0.85rem", fontSize: "0.95rem" }}>{active.tagline}</p>
                  <p style={{ lineHeight: 1.75, marginBottom: "1.75rem" }}>{active.short}</p>
                  <div style={{ fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: "0.85rem" }}>What&apos;s Included</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                    {active.details.map(d => (
                      <li key={d} style={{ display: "flex", gap: "0.65rem", fontSize: "0.9rem", alignItems: "flex-start" }}>
                        <CheckCircle2 size={16} style={{ color: active.colorVar, flexShrink: 0, marginTop: 2 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "1.75rem", padding: "0.8rem 1.1rem", background: active.bg, borderRadius: 10, border: `1px solid ${active.border}`, fontSize: "0.85rem", fontWeight: 700, color: active.colorVar }}>{active.note}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING MODELS ────────────────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Engagement Models & Pricing</div>
              <h2 className="section-title">Transparent Pricing</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>Fixed price per phase. No hidden change orders. You know total cost upfront.</p>
            </div>
            <div className="card-grid">
              {pricingModels.map(m => (
                <div key={m.title} className="card rv" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                    <Image src={m.image} alt={m.title} fill style={{ objectFit: "cover" }} />
                    {/* Light bottom gradient only — keeps image clearly visible */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)" }} />
                    <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.5rem" }}>
                      <span style={{ background: "rgba(255,255,255,0.22)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.35)", color: "white", padding: "0.3rem 0.9rem", borderRadius: 100, fontSize: "0.85rem", fontWeight: 800 }}>{m.range}</span>
                      <span style={{ background: "rgba(0,0,0,0.28)", backdropFilter: "blur(8px)", color: "white", padding: "0.3rem 0.9rem", borderRadius: 100, fontSize: "0.82rem", fontWeight: 600 }}>{m.duration}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: "1rem", left: "1rem", width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                      {m.icon}
                    </div>
                  </div>
                  {/* Card body */}
                  <div style={{ padding: "1.75rem" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.65rem" }}>{m.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{m.desc}</p>
                    <ShowMore collapsedHeight={90}>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {m.deliverables.map(d => (
                          <li key={d} style={{ display: "flex", gap: "0.6rem", fontSize: "0.87rem", color: "var(--text-muted)", alignItems: "flex-start" }}>
                            <CheckCircle2 size={14} style={{ color: m.color, flexShrink: 0, marginTop: 2 }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </ShowMore>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INVESTMENT FACTORS ────────────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">What Determines Your Investment</div>
              <h2 className="section-title">Size, Scope & Complexity</h2>
            </div>
            <div className="cc-factors-grid">

              {/* Company size */}
              <div className="card rv" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(29,78,216,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8" }}><Users size={20} /></div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>Company Size</h3>
                </div>
                <ShowMore collapsedHeight={200}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[
                      { label: "Startup (1–20 people)", cost: "AED 30–50K + AED 3–5K/mo", note: "Airtable may suffice first." },
                      { label: "SMB (20–100 people)", cost: "AED 80–150K + AED 15–25K/mo", note: "You need Zoho for data org." },
                      { label: "Mid-market (100–500)", cost: "AED 150–300K + AED 30–50K/mo", note: "Zoho + AI together." },
                      { label: "Enterprise (500+)", cost: "AED 250K–1M+ + AED 50–100K+/mo", note: "Custom pricing." },
                    ].map(t => (
                      <div key={t.label} style={{ padding: "0.85rem 1rem", borderRadius: 10, background: "var(--bg)", border: "1px solid var(--border)" }}>
                        <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{t.label}</div>
                        <div style={{ color: "#1D4ED8", fontWeight: 700, fontSize: "0.83rem", marginTop: "0.15rem" }}>{t.cost}</div>
                        {t.note && <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "0.15rem", fontStyle: "italic" }}>{t.note}</div>}
                      </div>
                    ))}
                  </div>
                </ShowMore>
              </div>

              {/* AI Agent scope */}
              <div className="card rv" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366F1" }}><Zap size={20} /></div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>AI Agent Scope</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "1 agent (WhatsApp qualification)", cost: "AED 18K/month" },
                    { label: "3–4 agents (WhatsApp + email + finance + support)", cost: "AED 40–50K/month" },
                    { label: "5+ agents (full suite)", cost: "AED 60–80K+/month" },
                  ].map(t => (
                    <div key={t.label} style={{ padding: "0.85rem 1rem", borderRadius: 10, background: "var(--bg)", border: "1px solid var(--border)" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{t.label}</div>
                      <div style={{ color: "#6366F1", fontWeight: 700, fontSize: "0.83rem", marginTop: "0.15rem" }}>{t.cost}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing philosophy */}
              <div className="card rv" style={{ padding: "2rem", background: "linear-gradient(135deg,rgba(29,78,216,0.06) 0%,rgba(99,102,241,0.06) 100%)", border: "1px solid rgba(29,78,216,0.18)" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(29,78,216,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8" }}><DollarSign size={20} /></div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.1rem" }}>Pricing Philosophy</h3>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: "1rem" }}>We price based on value, not effort. Transparent means you understand what you&apos;re paying, why, and what value to expect in return.</p>
                <ShowMore collapsedHeight={0}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {[
                      { icon: <Lock size={15} />, t: "No hidden change orders mid-project" },
                      { icon: <RefreshCcw size={15} />, t: "Scope changes estimated & approved upfront" },
                      { icon: <TrendingUp size={15} />, t: "Pay more than cheapest, far less than big firms" },
                      { icon: <Shield size={15} />, t: "Fixed price per phase — total cost is always clear" },
                    ].map(item => (
                      <div key={item.t} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.88rem" }}>
                        <span style={{ color: "#1D4ED8", flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                        <span>{item.t}</span>
                      </div>
                    ))}
                  </div>
                </ShowMore>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON CARDS ─────────────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Pricing Comparison</div>
              <h2 className="section-title">Why FI Digital?</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>Same scenario: 120-person mid-market company, Zoho CRM + Books + WhatsApp + finance agents. Year-one total cost.</p>
            </div>

            <div className="rv cc-compare-grid">
              {/* Big Consulting */}
              <div className="card" style={{ padding: "2rem", border: "1.5px solid rgba(239,68,68,0.2)", background: "rgba(239,68,68,0.02)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: "0.25rem" }}>Big Consulting Firm</div>
                    <span style={{ padding: "0.25rem 0.7rem", borderRadius: 100, fontSize: "0.75rem", fontWeight: 700, background: "rgba(239,68,68,0.1)", color: "#ef4444" }}>Expensive &amp; Unpredictable</span>
                  </div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,68,68,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Building2 size={24} color="#ef4444" />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { label: "Implementation", val: "AED 500K – 750K", note: "(change orders included)" },
                    { label: "Annual Support", val: "AED 80K/month", note: "5 FTEs allocated" },
                    { label: "Year-One Total", val: "AED 1.43M", highlight: true, bad: true },
                  ].map(r => (
                    <div key={r.label} style={{ padding: "0.75rem 1rem", borderRadius: 10, background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{r.label}</div>
                      <div style={{ fontWeight: 800, fontSize: r.highlight ? "1.2rem" : "0.97rem", color: r.bad ? "#ef4444" : "var(--text)" }}>{r.val}</div>
                      {r.note && <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{r.note}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cheap Outsourcer */}
              <div className="card" style={{ padding: "2rem", border: "1.5px solid rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.02)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: "0.25rem" }}>Cheap Outsourcer</div>
                    <span style={{ padding: "0.25rem 0.7rem", borderRadius: 100, fontSize: "0.75rem", fontWeight: 700, background: "rgba(245,158,11,0.12)", color: "#d97706" }}>Cheap then Costly</span>
                  </div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,158,11,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <AlertTriangle size={24} color="#d97706" />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { label: "Implementation", val: "AED 100K + rework", note: "~AED 150K rework likely" },
                    { label: "Annual Support", val: "AED 30K/month", note: "Internal FTE cost" },
                    { label: "Year-One Total", val: "AED 510K", highlight: true, bad: true, note: "(often broken)" },
                  ].map(r => (
                    <div key={r.label} style={{ padding: "0.75rem 1rem", borderRadius: 10, background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{r.label}</div>
                      <div style={{ fontWeight: 800, fontSize: r.highlight ? "1.2rem" : "0.97rem", color: r.bad ? "#d97706" : "var(--text)" }}>{r.val}</div>
                      {r.note && <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{r.note}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* FI Digital — Best */}
              <div className="card" style={{ padding: "2rem", border: "2px solid rgba(16,185,129,0.35)", background: "rgba(16,185,129,0.03)", position: "relative", overflow: "visible" }}>
                {/* Best value badge */}
                <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#10B981,#059669)", color: "white", fontWeight: 800, fontSize: "0.78rem", padding: "0.3rem 1.1rem", borderRadius: 100, whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(16,185,129,0.35)" }}>★ Best Value &amp; Quality</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "1.15rem", marginBottom: "0.25rem" }}>FI Digital</div>
                    <span style={{ padding: "0.25rem 0.7rem", borderRadius: 100, fontSize: "0.75rem", fontWeight: 700, background: "rgba(16,185,129,0.12)", color: "#10B981" }}>Transparent &amp; Fixed-Price</span>
                  </div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 size={24} color="#10B981" />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { label: "Implementation", val: "AED 200K", note: "All-in, fixed price" },
                    { label: "Annual Support", val: "AED 40K/month", note: "Dedicated managed services" },
                    { label: "Year-One Total", val: "AED 680K", highlight: true },
                  ].map(r => (
                    <div key={r.label} style={{ padding: "0.75rem 1rem", borderRadius: 10, background: "var(--bg-secondary)", border: "1px solid rgba(16,185,129,0.2)" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{r.label}</div>
                      <div style={{ fontWeight: 800, fontSize: r.highlight ? "1.2rem" : "0.97rem", color: r.highlight ? "#10B981" : "var(--text)" }}>{r.val}</div>
                      {r.note && <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{r.note}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 48H PROCESS ──────────────────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="cc-process-grid">
              <div className="rv">
                <div className="section-label">Next 48 Hours</div>
                <h2 className="section-title">From First Touch to Proposal</h2>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "1rem" }}>Once you reach out, here&apos;s exactly what happens next. Total time: 48 hours from first contact to a concrete proposal in your inbox.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {process48h.map((step, i) => (
                  <div key={step.step} className="rv" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: step.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 4px 14px ${step.color}55` }}>
                        {step.icon}
                      </div>
                      {i < process48h.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 32, background: `linear-gradient(to bottom, ${step.color}60, transparent)`, margin: "0.2rem 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < process48h.length - 1 ? "1.5rem" : 0, paddingTop: "0.6rem" }}>
                      <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.25rem" }}>{step.title}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: 1000 }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Frequently Asked Questions</div>
              <h2 className="section-title">Questions We Hear Often</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "start" }}>
              {/* General FAQs Column */}
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>General Questions</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {generalFaqs.map((faq, i) => (
                    <FAQItem
                      key={`general-${i}`}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFaq === `general-${i}`}
                      onClick={() => setOpenFaq(openFaq === `general-${i}` ? null : `general-${i}`)}
                    />
                  ))}
                </div>
              </div>

              {/* Pricing FAQs Column */}
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Pricing & Engagement</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {pricingFaqs.map((faq, i) => (
                    <FAQItem
                      key={`pricing-${i}`}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={openFaq === `pricing-${i}`}
                      onClick={() => setOpenFaq(openFaq === `pricing-${i}` ? null : `pricing-${i}`)}
                    />
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* ── OFFICES ──────────────────────────────────────────────────── */}
        <section className="cc-section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Our Team & Offices</div>
              <h2 className="section-title">Local Presence, Global Delivery</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>A team of 15: engineers, architects, trainers, project managers. Australian-founded (2013), UAE-based since 2019.</p>
            </div>
            <div className="card-grid">
              {offices.map(o => (
                <div key={o.city} className="card rv" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                    <Image src={o.img} alt={o.city + " office"} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                      <span style={{ fontSize: "1.75rem" }}>{o.flag}</span>
                      <span style={{ color: "white", fontWeight: 900, fontSize: "1.4rem" }}>{o.city}</span>
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.65rem", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                      <MapPin size={14} style={{ color: o.color, flexShrink: 0, marginTop: 2 }} />
                      {o.addr}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                      <Phone size={14} style={{ color: o.color, flexShrink: 0 }} />
                      {o.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM ────────────────────────────────────────── */}
        <section id="contact-form" className="cc-section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div className="reveal-item" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">READY TO START?</div>
              <h2 className="section-title">Request a Free Readiness Audit</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>AED 0 · 45-minute session · 1-week report turnaround</p>
            </div>
            
            <div className="card rv" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
              <style dangerouslySetInnerHTML={{__html: `
                .zoho-iframe-container { width: 100%; min-height: 750px; overflow: hidden; }
                .zoho-iframe-container iframe { width: 100%; height: 750px; border: none; }
                @media (max-width: 650px) {
                  .zoho-iframe-container { min-height: 1100px; }
                  .zoho-iframe-container iframe { height: 1100px; }
                }
                @media (max-width: 480px) {
                  .zoho-iframe-container { min-height: 1200px; }
                  .zoho-iframe-container iframe { height: 1200px; }
                }
              `}} />
              <div className="zoho-iframe-container">
                <iframe src="/zoho-form.html" title="Contact Us Form" scrolling="no"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEFT SIDE CONTENT + NEW CTA SECTION MOVED BELOW ───────── */}
        <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "950px", textAlign: "center" }}>
            <div className="reveal-item">
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: 900, marginBottom: "1rem", lineHeight: 1.15 }}>
                Let&apos;s Build Something Great
              </h2>
              <p style={{ color: "var(--text)", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.6, marginBottom: "0.75rem" }}>
                Whether you&apos;re a startup or an enterprise
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "3.5rem" }}>
                We&apos;ll be honest about what&apos;s possible, realistic about timeline and cost, and committed to delivering value. Let&apos;s talk.
              </p>

              {/* Feature pills (centered) */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center", marginBottom: "4rem" }}>
                {["No surprise costs", "Fixed-price phases", "90-day adjustment guarantee", "2-hour WhatsApp response"].map(f => (
                  <span key={f} style={{ display: "flex", alignItems: "center", gap: "0.45rem", padding: "0.6rem 1.25rem", borderRadius: 100, background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#10B981", fontSize: "0.9rem", fontWeight: 700 }}>
                    <CheckCircle2 size={15} /> {f}
                  </span>
                ))}
              </div>

              {/* Contact links grid (moved from left side) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", textAlign: "left" }}>
                {contactMethods.map(m => (
                  <a key={m.label} href={m.href} style={{ display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none", padding: "1.5rem", borderRadius: 16, border: "1.5px solid var(--border)", background: "var(--card-bg)", transition: "all 0.25s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = m.color; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 10px 30px ${m.color}15`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", color: m.color, flexShrink: 0 }}>{m.icon}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "1.05rem", color: m.color, marginBottom: "0.2rem" }}>{m.value}</div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{m.sub}</div>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
