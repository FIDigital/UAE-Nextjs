"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen, FileText, Video, Users, ArrowRight,
  Download, ExternalLink, Calendar, Globe, Clock,
  ChevronRight, Star, CheckCircle, Tag,
  Building2, Settings2, MessageCircle, ListChecks,
  Newspaper, Handshake, FileDown, MapPin
} from "lucide-react";

/* ─── Blog data ─────────────────────────────────────────────────────────────── */
const blogPosts = [
  {
    id: 1,
    category: "AI Agents 101",
    categoryColor: "#1D4ED8",
    lang: "EN",
    langLabel: "English",
    title: "What Are AI Agents? A Plain-English Guide for UAE Businesses",
    excerpt: "Forget the hype. Here's what AI agents actually do, how they work inside your Zoho stack, and why they'll reshape your operations in 2025.",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "/images/resources/blog-ai-agents.png",
    featured: true,
    href: "/resources/blog/what-are-ai-agents",
  },
  {
    id: 2,
    category: "Zoho Tips",
    categoryColor: "#6366F1",
    lang: "EN",
    langLabel: "English",
    title: "5 Zoho CRM Automations Every UAE Sales Team Should Have Running",
    excerpt: "From lead assignment to WhatsApp follow-ups — the five workflows that cut manual effort by 60% in our client deployments across Dubai.",
    date: "March 3, 2026",
    readTime: "6 min read",
    image: "/images/resources/blog-zoho-tips.png",
    featured: false,
    href: "/resources/blog/zoho-crm-automations",
  },
  {
    id: 3,
    category: "UAE Industry Spotlight",
    categoryColor: "#10B981",
    lang: "AR",
    langLabel: "عربي",
    title: "كيف تحوّل الشركات الإماراتية وكلاء الذكاء الاصطناعي إلى ميزة تنافسية",
    excerpt: "نستعرض في هذا المقال كيف تستفيد المؤسسات الرائدة في الإمارات من وكلاء الذكاء الاصطناعي لتحقيق التحول الرقمي وتعزيز الكفاءة التشغيلية.",
    date: "فبراير ٢٤، ٢٠٢٦",
    readTime: "٧ دقائق للقراءة",
    image: "/images/resources/blog-uae-spotlight.png",
    featured: false,
    href: "/resources/blog/uae-ai-competitive-advantage",
    rtl: true,
  },
  {
    id: 4,
    category: "Tech Deep Dive",
    categoryColor: "#F59E0B",
    lang: "EN",
    langLabel: "English",
    title: "n8n + Zoho + LangChain: How We Wire AI Agent Pipelines for Enterprise",
    excerpt: "A technical walkthrough of our multi-tool orchestration stack — from webhook triggers to LLM reasoning layers to Zoho CRM write-backs.",
    date: "February 17, 2026",
    readTime: "12 min read",
    image: "/images/resources/blog-tech-dive.png",
    featured: false,
    href: "/resources/blog/n8n-zoho-langchain-architecture",
  },
];

/* ─── Whitepapers ────────────────────────────────────────────────────────────── */
const whitepapers = [
  {
    id: 1,
    Icon: Building2,
    color: "#1D4ED8",
    bg: "rgba(29,78,216,0.10)",
    title: "The UAE Enterprise Guide to AI Agents",
    desc: "A comprehensive 40-page guide covering AI agent architecture, UAE compliance considerations, ROI frameworks, and implementation roadmaps for enterprise buyers.",
    pages: "40 pages",
    level: "Executive",
    href: "/resources/whitepaper/uae-enterprise-ai-agents",
  },
  {
    id: 2,
    Icon: Settings2,
    color: "#6366F1",
    bg: "rgba(99,102,241,0.10)",
    title: "Zoho + AI: The Architecture Guide",
    desc: "Technical deep-dive into the Zoho ecosystem's AI capabilities — Zia, Zoho Flow, custom AI integrations, n8n orchestration, and LangChain-powered agent deployment.",
    pages: "28 pages",
    level: "Technical",
    href: "/resources/whitepaper/zoho-ai-architecture",
  },
  {
    id: 3,
    Icon: MessageCircle,
    color: "#10B981",
    bg: "rgba(16,185,129,0.10)",
    title: "WhatsApp Business Automation Playbook for the Gulf",
    desc: "Everything you need to deploy AI-powered WhatsApp sales and support agents in the GCC — from Meta API setup to bilingual LLM prompting and handoff flows.",
    pages: "32 pages",
    level: "Practical",
    href: "/resources/whitepaper/whatsapp-automation-gulf",
  },
  {
    id: 4,
    Icon: ListChecks,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.10)",
    title: "AI Readiness Checklist for UAE Businesses",
    desc: "A 60-point self-assessment covering data infrastructure, process maturity, compliance posture, and team readiness — before you invest in AI agents.",
    pages: "16 pages",
    level: "All Levels",
    href: "/resources/whitepaper/ai-readiness-checklist",
  },
];

/* ─── Events ─────────────────────────────────────────────────────────────────── */
const events = [
  {
    type: "Webinar",
    typeColor: "#1D4ED8",
    title: "AI Agents for Real Estate: Live Demo & Q&A",
    date: "April 8, 2026",
    time: "3:00 PM GST",
    location: "Virtual · Zoom",
    seats: "Limited to 100",
    href: "/resources/events/ai-agents-real-estate-webinar",
  },
  {
    type: "Dubai Meetup",
    typeColor: "#10B981",
    title: "FI Digital Community Meetup — Business Bay",
    date: "April 24, 2026",
    time: "6:30 PM GST",
    location: "Business Bay, Dubai 🇦🇪",
    seats: "Limited to 50",
    href: "/resources/events/dubai-meetup-april",
  },
  {
    type: "Webinar",
    typeColor: "#1D4ED8",
    title: "Zoho x AI: Automating Your Sales Pipeline in 90 Days",
    date: "May 13, 2026",
    time: "2:00 PM GST",
    location: "Virtual · Zoom",
    seats: "Open Registration",
    href: "/resources/events/zoho-ai-pipeline-webinar",
  },
  {
    type: "Workshop",
    typeColor: "#6366F1",
    title: "WhatsApp Agent Builder: Hands-On Workshop",
    date: "May 27, 2026",
    time: "10:00 AM GST",
    location: "Virtual · Interactive",
    seats: "Limited to 30",
    href: "/resources/events/whatsapp-agent-workshop",
  },
];

/* ─── Partners ───────────────────────────────────────────────────────────────── */
const partners = [
  {
    name: "Zoho",
    badge: "Authorized Partner",
    badgeColor: "#10B981",
    description: "We are an officially authorized Zoho partner with 13+ years of implementation experience across 80+ enterprise clients. The only UAE partner offering full AI agent integration.",
    logo: "/images/new-zoho-logo.png",
    invertDark: false,
    href: "https://www.zoho.com/",
  },
  {
    name: "Anthropic",
    badge: "Technology Partner",
    badgeColor: "#6366F1",
    description: "We build enterprise Claude agent implementations — leveraging Claude 3 for enterprise reasoning, document analysis, and bilingual Arabic/English workflows.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    invertDark: true,
    href: "https://www.anthropic.com/",
  },
  {
    name: "Google Cloud",
    badge: "AI Partner",
    badgeColor: "#F59E0B",
    description: "Gemini-powered agents, Vertex AI pipelines, and Google Workspace automation — deeply integrated across our UAE enterprise deployments.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    invertDark: false,
    href: "https://cloud.google.com/",
  },
  {
    name: "n8n",
    badge: "Integration Specialist",
    badgeColor: "#1D4ED8",
    description: "Our primary orchestration layer for multi-agent workflows. We are one of the few partners in the GCC specializing in n8n enterprise deployments for complex automation.",
    logo: "https://n8n.io/favicon.ico",
    invertDark: false,
    href: "https://n8n.io/",
  },
  {
    name: "LangChain",
    badge: "LLM Orchestration",
    badgeColor: "#10B981",
    description: "We leverage LangChain for advanced LLM pipeline construction, vector store integrations, and retrieval-augmented generation in enterprise deployments.",
    logo: "https://avatars.githubusercontent.com/u/126733545",
    invertDark: false,
    href: "https://www.langchain.com/",
  },
];

/* ─── Pillar tags data ───────────────────────────────────────────────────────── */
const blogPillars = [
  { label: "All", value: "all" },
  { label: "AI Agents 101", value: "AI Agents 101" },
  { label: "Zoho Tips", value: "Zoho Tips" },
  { label: "UAE Industry Spotlight", value: "UAE Industry Spotlight" },
  { label: "Tech Deep Dive", value: "Tech Deep Dive" },
  { label: "Case Study", value: "Case Study" },
];

/* ─── Main Component ─────────────────────────────────────────────────────────── */
export default function ResourcesClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts = activeFilter === "all"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeFilter);

  return (
    <div>
      <style>{`
        /* ── Resources page scoped styles ── */

        .rh-section { padding: 90px 1.5rem; }
        .rh-section-alt { padding: 90px 1.5rem; background: var(--bg-secondary); }

        /* ── Pill filter bar ── */
        .rh-filter-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }
        .rh-filter-pill {
          padding: 0.4rem 1.1rem;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--card-bg);
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          line-height: 1.4;
        }
        .rh-filter-pill:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .rh-filter-pill.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        /* ── Blog grid ── */
        .rh-blog-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 1.75rem;
        }
        .rh-blog-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          color: var(--text);
        }
        .rh-blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.15);
          border-color: var(--primary);
        }
        [data-theme='dark'] .rh-blog-card:hover {
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.5);
        }
        .rh-blog-img {
          width: 100%;
          object-fit: cover;
          display: block;
        }
        .rh-blog-img-featured { height: 280px; }
        .rh-blog-img-normal   { height: 180px; }
        .rh-blog-body { padding: 1.4rem 1.5rem 1.6rem; flex: 1; display: flex; flex-direction: column; }
        .rh-blog-meta { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.85rem; flex-wrap: wrap; }
        .rh-cat-badge {
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .rh-lang-badge {
          font-size: 0.69rem;
          font-weight: 700;
          padding: 0.18rem 0.55rem;
          border-radius: 6px;
          border: 1.5px solid var(--border);
          color: var(--text-muted);
          background: var(--bg);
        }
        .rh-blog-title { font-family: 'Plus Jakarta Sans',sans-serif; font-weight: 800; line-height: 1.35; color: var(--text); margin-bottom: 0.7rem; }
        .rh-blog-title-featured { font-size: 1.25rem; }
        .rh-blog-title-normal   { font-size: 1rem; }
        .rh-blog-excerpt { font-size: 0.875rem; color: var(--text-muted); line-height: 1.7; flex: 1; }
        .rh-blog-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border); }
        .rh-blog-date { font-size: 0.76rem; color: var(--text-muted); }
        .rh-blog-read { font-size: 0.76rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem; }
        .rh-read-more { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.82rem; font-weight: 700; color: var(--primary); margin-top: 0.9rem; transition: gap 0.2s; }
        .rh-blog-card:hover .rh-read-more { gap: 0.6rem; }
        .rh-featured-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #1D4ED8, #6366F1);
          color: white;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.25rem 0.7rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ── Whitepaper cards ── */
        .rh-wp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .rh-wp-card {
          display: flex;
          align-items: flex-start;
          gap: 1.4rem;
          padding: 1.8rem 2rem;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          text-decoration: none;
          color: var(--text);
        }
        .rh-wp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.12);
          border-color: var(--primary);
        }
        [data-theme='dark'] .rh-wp-card:hover { box-shadow: 0 20px 40px -10px rgba(0,0,0,0.45); }
        .rh-wp-icon {
          width: 56px;
          height: 56px;
          min-width: 56px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .rh-wp-level {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding: 0.15rem 0.5rem;
          border-radius: 5px;
          background: var(--hover-bg);
          color: var(--text-muted);
          display: inline-block;
          margin-bottom: 0.55rem;
        }
        .rh-wp-title { font-weight: 800; font-size: 1.05rem; line-height: 1.35; margin-bottom: 0.6rem; font-family: 'Plus Jakarta Sans',sans-serif; }
        .rh-wp-desc { font-size: 0.865rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.1rem; }
        .rh-wp-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, var(--primary) 0%, #6366F1 100%);
          padding: 0.55rem 1.25rem;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 4px 14px rgba(29,78,216,0.28);
          letter-spacing: 0.01em;
        }
        .rh-wp-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(29,78,216,0.4);
          filter: brightness(1.08);
        }
        .rh-wp-pages { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.45rem; display: flex; align-items: center; gap: 0.3rem; }

        /* ── Events ── */
        .rh-events-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .rh-event-card {
          display: flex;
          gap: 1.2rem;
          padding: 1.4rem 1.6rem;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          text-decoration: none;
          color: var(--text);
          transition: all 0.28s ease;
          margin-bottom: 1rem;
          align-items: flex-start;
        }
        .rh-event-card:last-child { margin-bottom: 0; }
        .rh-event-card:hover { transform: translateX(4px); border-color: var(--primary); }
        .rh-event-type-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
        .rh-event-title { font-weight: 800; font-size: 0.97rem; margin-bottom: 0.4rem; line-height: 1.3; }
        .rh-event-meta { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .rh-event-meta-item { display: flex; align-items: center; gap: 0.3rem; font-size: 0.78rem; color: var(--text-muted); }
        .rh-event-type-badge { font-size: 0.68rem; font-weight: 800; padding: 0.15rem 0.55rem; border-radius: 100px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.45rem; display: inline-block; }
        .rh-seats-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: rgba(16,185,129,0.12);
          color: #10B981;
          display: inline-block;
          margin-top: 0.5rem;
        }

        /* ── Partner logos ── */
        .rh-partner-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .rh-partner-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          text-decoration: none;
          color: var(--text);
        }
        .rh-partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.12);
          border-color: var(--primary);
        }
        [data-theme='dark'] .rh-partner-card:hover { box-shadow: 0 20px 40px -10px rgba(0,0,0,0.45); }
        .rh-partner-logo-area {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          background: var(--bg-secondary);
        }
        .rh-partner-logo {
          max-height: 52px;
          max-width: 140px;
          object-fit: contain;
          opacity: 0.9;
          transition: filter 0.3s;
        }
        [data-theme='dark'] .rh-partner-logo.invert-dark {
          filter: brightness(0) invert(1);
        }
        .rh-partner-body { padding: 1.2rem 1.5rem 1.5rem; border-top: 1px solid var(--border); }
        .rh-partner-badge {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding: 0.18rem 0.6rem;
          border-radius: 100px;
          display: inline-block;
          margin-bottom: 0.55rem;
        }
        .rh-partner-name { font-weight: 900; font-size: 1.1rem; margin-bottom: 0.5rem; font-family: 'Plus Jakarta Sans',sans-serif; }
        .rh-partner-desc { font-size: 0.84rem; color: var(--text-muted); line-height: 1.65; }

        /* ── Subscribe banner ── */
        .rh-subscribe-card {
          background: linear-gradient(135deg, #1D4ED8 0%, #6366F1 100%);
          border-radius: 24px;
          padding: 3.5rem 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .rh-subscribe-card::before {
          content: '';
          position: absolute;
          top: -60px; right: -40px;
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .rh-subscribe-form { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .rh-subscribe-input {
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          border: none;
          background: rgba(255,255,255,0.18);
          color: white;
          font-size: 0.95rem;
          min-width: 240px;
          outline: none;
          backdrop-filter: blur(4px);
        }
        .rh-subscribe-input::placeholder { color: rgba(255,255,255,0.6); }
        .rh-subscribe-btn {
          padding: 0.75rem 1.75rem;
          border-radius: 10px;
          border: none;
          background: white;
          color: #1D4ED8;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .rh-subscribe-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .rh-blog-grid { grid-template-columns: 1fr 1fr; }
          .rh-partner-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .rh-events-layout { grid-template-columns: 1fr; gap: 2rem; }
          .rh-wp-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .rh-section, .rh-section-alt { padding: 60px 1.25rem; }
          .rh-blog-grid { grid-template-columns: 1fr; }
          .rh-partner-grid { grid-template-columns: 1fr 1fr; }
          .rh-subscribe-card { padding: 2.5rem 1.75rem; }
          .rh-subscribe-input { min-width: 100%; }
          .rh-subscribe-form { width: 100%; }
          .rh-wp-card { flex-direction: column; }
        }
        @media (max-width: 480px) {
          .rh-partner-grid { grid-template-columns: 1fr; }
          .rh-blog-img-featured { height: 200px; }
          .rh-subscribe-card { padding: 2rem 1.25rem; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
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
                    src="/images/resources-hero.png" 
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
            <div className="section-label">Resource Hub</div>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(2.4rem,6vw,4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem",
              color: "var(--text)"
            }}>
              Learn.{" "}
              <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Explore.
              </span>{" "}
              Stay Ahead.
            </h1>
            <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "var(--text-muted)", maxWidth: 620, margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
              Bilingual guides, technical deep-dives, whitepapers, and events — everything a UAE enterprise needs to navigate AI-first transformation.
            </p>
            {/* Quick-jump pills */}
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Blog", Icon: Newspaper, href: "#blog" },
                { label: "Whitepapers", Icon: FileDown, href: "#whitepapers" },
                { label: "Webinars", Icon: Video, href: "#events" },
                { label: "Partners", Icon: Handshake, href: "#partners" },
              ].map(({ label, Icon: PillIcon, href }) => (
                <a key={href} href={href} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.55rem 1.25rem",
                  borderRadius: 100,
                  border: "1.5px solid var(--border)",
                  background: "var(--card-bg)",
                  color: "var(--text)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  backdropFilter: "blur(8px)",
                }}>
                  <PillIcon size={15} strokeWidth={2} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BLOG ══════════════════════════════════════════════════════════════ */}
        <section id="blog" className="rh-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
              <div>
                <div className="section-label">Blog · EN + AR</div>
                <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>Insights in Two Languages</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65, maxWidth: 600, marginBottom: "1.75rem" }}>
                  Practical reads on AI Agents, Zoho, UAE industry spotlights, and tech deep-dives — published in English and Arabic.
                </p>
              </div>
              <a href="/resources/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", fontWeight: 700, color: "var(--primary)", textDecoration: "none", flexShrink: 0, marginTop: "0.5rem" }}>
                All Articles <ArrowRight size={15} />
              </a>
            </div>

            {/* Filter pills */}
            <div className="rh-filter-bar">
              {blogPillars.map(p => (
                <button
                  key={p.value}
                  className={`rh-filter-pill${activeFilter === p.value ? " active" : ""}`}
                  onClick={() => setActiveFilter(p.value)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Blog grid */}
            <div className="rh-blog-grid">
              {filteredPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  href={post.href}
                  className="rh-blog-card"
                  style={idx === 0 && activeFilter === "all" ? { gridRow: "span 2" } : {}}
                  dir={post.rtl ? "rtl" : "ltr"}
                >
                  {/* Image */}
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={idx === 0 && activeFilter === "all" ? 800 : 400}
                      height={idx === 0 && activeFilter === "all" ? 600 : 300}
                      className={`rh-blog-img ${idx === 0 && activeFilter === "all" ? "rh-blog-img-featured" : "rh-blog-img-normal"}`}
                    />
                    {post.featured && activeFilter === "all" && (
                      <span className="rh-featured-badge">⚡ Featured</span>
                    )}
                  </div>
                  {/* Body */}
                  <div className="rh-blog-body">
                    <div className="rh-blog-meta">
                      <span className="rh-cat-badge" style={{ background: `${post.categoryColor}18`, color: post.categoryColor }}>
                        {post.category}
                      </span>
                      <span className="rh-lang-badge">{post.langLabel}</span>
                    </div>
                    <div className={`rh-blog-title ${idx === 0 && activeFilter === "all" ? "rh-blog-title-featured" : "rh-blog-title-normal"}`}>
                      {post.title}
                    </div>
                    <p className="rh-blog-excerpt">{post.excerpt}</p>
                    <div className="rh-blog-footer">
                      <span className="rh-blog-date">{post.date}</span>
                      <span className="rh-blog-read"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <span className="rh-read-more">
                      Read Article <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHITEPAPERS ═══════════════════════════════════════════════════════ */}
        <section id="whitepapers" className="rh-section-alt">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Whitepapers & Guides</div>
              <h2 className="section-title">Deep Knowledge, Ready to Download</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Form-gated guides for UAE enterprise buyers and technical teams — available via Zoho Forms. No fluff, just frameworks.
              </p>
            </div>

            <div className="rh-wp-grid">
              {whitepapers.map(wp => (
                <Link key={wp.id} href={wp.href} className="rh-wp-card">
                  <div className="rh-wp-icon" style={{ background: wp.bg, color: wp.color }}>
                    <wp.Icon size={26} strokeWidth={1.75} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="rh-wp-level">{wp.level}</span>
                    <div className="rh-wp-title" style={{ color: wp.color }}>{wp.title}</div>
                    <p className="rh-wp-desc">{wp.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      <span className="rh-wp-cta">
                        <FileDown size={14} /> Free Download
                      </span>
                      <span className="rh-wp-pages">
                        <FileText size={12} /> {wp.pages}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WEBINARS & EVENTS ═════════════════════════════════════════════════ */}
        <section id="events" className="rh-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div className="rh-events-layout">
              {/* Left: image + text */}
              <div>
                <div className="section-label">Webinars & Events</div>
                <h2 className="section-title">Monthly Virtual · Quarterly Dubai</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Join our virtual workshops to learn live from our AI architects — or meet us in person at our quarterly Business Bay meetups. All events are bilingual.
                </p>
                <div style={{ borderRadius: 20, overflow: "hidden", position: "relative" }}>
                  <Image
                    src="/images/resources/webinar-hero.png"
                    alt="FI Digital Webinars"
                    width={800}
                    height={400}
                    style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.82) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "1.75rem", color: "white" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.25rem" }}>Monthly Virtual Events</div>
                    <div style={{ fontSize: "0.82rem", opacity: 0.8 }}>+ Quarterly Dubai Meetups at Business Bay</div>
                  </div>
                </div>
              </div>

              {/* Right: upcoming list */}
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                  Upcoming Events
                </div>
                {events.map(ev => (
                  <Link key={ev.title} href={ev.href} className="rh-event-card">
                    <div className="rh-event-type-dot" style={{ background: ev.typeColor }} />
                    <div style={{ flex: 1 }}>
                      <span className="rh-event-type-badge" style={{ background: `${ev.typeColor}18`, color: ev.typeColor }}>
                        {ev.type}
                      </span>
                      <div className="rh-event-title">{ev.title}</div>
                      <div className="rh-event-meta">
                        <span className="rh-event-meta-item"><Calendar size={12} /> {ev.date}</span>
                        <span className="rh-event-meta-item"><Clock size={12} /> {ev.time}</span>
                        <span className="rh-event-meta-item"><Globe size={12} /> {ev.location}</span>
                      </div>
                      <span className="rh-seats-badge"><MapPin size={11} style={{ display:'inline', marginRight: 3, verticalAlign: 'middle' }} />{ev.seats}</span>
                    </div>
                    <ChevronRight size={16} style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 4 }} />
                  </Link>
                ))}
                <a href="/resources/events" className="btn-secondary" style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", height: 44 }}>
                  View All Events <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PARTNER ECOSYSTEM ═════════════════════════════════════════════════ */}
        <section id="partners" className="rh-section-alt">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">Partner Ecosystem</div>
              <h2 className="section-title">Built on the World's Best AI Stack</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                We partner with the most trusted names in enterprise AI — bringing certified expertise and deep integrations to every UAE deployment.
              </p>
            </div>

            <div className="rh-partner-grid">
              {partners.map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="rh-partner-card">
                  <div className="rh-partner-logo-area">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      width={140}
                      height={52}
                      className={`rh-partner-logo ${p.invertDark ? "invert-dark" : ""}`}
                    />
                  </div>
                  <div className="rh-partner-body">
                    <span className="rh-partner-badge" style={{ background: `${p.badgeColor}18`, color: p.badgeColor }}>
                      {p.badge}
                    </span>
                    <div className="rh-partner-name">{p.name}</div>
                    <p className="rh-partner-desc">{p.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ NEWSLETTER CTA ════════════════════════════════════════════════════ */}
        <section className="rh-section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: 960 }}>
            <div className="rh-subscribe-card">
              <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>
                  Stay Informed
                </div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2rem)", color: "white", lineHeight: 1.2, marginBottom: "0.6rem" }}>
                  Get New Resources in Your Inbox
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 380 }}>
                  Bilingual newsletter — AI insights, new whitepapers, upcoming webinars, delivered twice a month.
                </p>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="rh-subscribe-form">
                  <input type="email" placeholder="your@email.com" className="rh-subscribe-input" />
                  <button className="rh-subscribe-btn">Subscribe →</button>
                </div>
                <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.5)", marginTop: "0.6rem" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═════════════════════════════════════════════════════════ */}
        <section className="rh-section-alt">
          <div className="container" style={{ maxWidth: 780, textAlign: "center" }}>
            <div className="section-label">Ready to Start?</div>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem,4vw,2.6rem)", marginBottom: "1rem", lineHeight: 1.15 }}>
              Turn knowledge into action.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 2.5rem" }}>
              Book a complimentary 45-minute AI readiness audit with our Dubai team — no cost, no pitch, just expert guidance.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                Book Free Audit <ArrowRight size={17} />
              </Link>
              <Link href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0 1.75rem", height: 50, borderRadius: 12, border: "2px solid var(--border)", color: "var(--text)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", alignItems: "center" }}>
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
