"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Zap,
  MessageCircleMore,
  ArrowRight,
  Database,
  Network,
  Code,
  Cpu,
  Bot,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- SUB-COMPONENTS (IN-FILE) ---

function HomeHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
<section
  className="hero-section"
  ref={containerRef}
  style={{
    position: "relative",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
    background: "var(--bg)",
  }}
>
  {/* Background Visual — right-side image with gradient mask */}
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "60%",
      height: "100%",
      zIndex: 0,
      opacity: 0.45,
      pointerEvents: "none",
    }}
  >
    <Image
      src="/images/home_hero_professional.png"
      alt=""
      aria-hidden="true"
      fill
      style={{
        objectFit: "cover",
        maskImage: "radial-gradient(circle at right, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
      }}
    />
  </div>

  <div
    className="container"
    style={{
      position: "relative",
      zIndex: 3,
      textAlign: "left",
    }}
  >
    <div
      style={{
        maxWidth: "1000px",
        textAlign: "left",
      }}
    >
      <h1
        className="hero-title hero-reveal"
        style={{
          fontSize: "clamp(2rem, 5.5vw, 4rem)",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "2rem",
          maxWidth: "1000px",
          margin: "0 0 2rem",
          textWrap: "balance",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        FI Digital UAE: AI Agent Architects <br />
        <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          for Enterprise Transformation
        </span>
      </h1>

      <p
        className="hero-description hero-reveal"
        style={{
          fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
          color: "var(--text-muted)",
          maxWidth: "800px",
          margin: "0 0 3rem",
          lineHeight: 1.7,
          textWrap: "balance",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        Welcome to FI Digital UAE, where Australian Zoho expertise meets Middle
        Eastern ambition. We&apos;ve spent a decade implementing Zoho CRM across
        Asia Pacific. Now we&apos;re bringing that experience to the UAE,
        reimagined for the AI era. Our mission: architect intelligent agent
        systems that automate enterprise operations while keeping human insight
        at the center. We combine Zoho&apos;s enterprise reliability with
        Claude&apos;s reasoning, n8n&apos;s orchestration, and LangChain&apos;s
        context awareness to build agents that actually work in Arabic, across
        multiple currencies, and within UAE regulatory frameworks.
      </p>

      <div
        className="hero-actions hero-reveal"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem" }}>
          Start Strategy Session <ArrowRight size={18} />
        </Link>

        <Link href="#pillars" className="btn-secondary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem" }}>
          Explore Pillars
        </Link>
      </div>

      {/* Quick stats row */}
      <div
        className="hero-reveal"
        style={{
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
          textAlign: "left",
          opacity: 0,
          transform: "translateY(10px)",
        }}
      >
        {[
          { num: "80+", label: "Enterprise Clients" },
          { num: "13+", label: "Years in Market" },
          { num: "AED 2M+", label: "Client Value Created" },
          { num: "99.1%", label: "Avg Automation Accuracy" },
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", background: "linear-gradient(135deg, #1D4ED8, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.num}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}


function EcosystemSection() {
  return (
    <section id="ecosystem" style={{ background: 'var(--bg-secondary)', padding: '40px 1.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">Our Technology Ecosystem</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>The Foundation of Modern Transformation</h2>
            <p className="section-desc" style={{ marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              The foundation of modern enterprise transformation is orchestration across best of breed tools. Zoho
              provides the operational backbone CRM, Finance, HR, Customer Support all GDPR and ISO certified.
              We bridge it to Claude and Gemini through n8n, creating an &apos;AI Agent Mesh&apos;
              that handles complex reasoning and maintains data sovereignty within UAE boundaries.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '130px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div style={{ height: '44px', width: '100%', position: 'relative', marginBottom: '0.75rem' }}>
                  <Image
                    src="/images/new-zoho-logo.png"
                    alt="Zoho Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Zoho</h3>
              </div>
              <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '130px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div style={{ height: '44px', width: '100%', position: 'relative', marginBottom: '0.75rem' }}>
                  <Image
                    src="/images/claude.png"
                    alt="Claude AI Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Claude</h3>
              </div>
              <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '130px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div style={{ height: '44px', width: '100%', position: 'relative', marginBottom: '0.75rem' }}>
                  <Image
                    src="/images/n8n.png"
                    alt="n8n Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>n8n.io</h3>
              </div>
              <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '130px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '20px', transition: 'all 0.3s ease' }}>
                <div style={{ height: '44px', width: '100%', position: 'relative', marginBottom: '0.75rem' }}>
                  <Image
                    src="https://avatars.githubusercontent.com/u/126733545"
                    alt="LangChain Logo"
                    fill
                    style={{ objectFit: 'contain', borderRadius: '6px' }}
                  />
                </div>
                <h3 style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>LangChain</h3>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '1px solid var(--border)' }}>
            <Image
              src="/img/ecosystem_mockup.png"
              alt="Technology Ecosystem Mesh"
              width={800}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarRow({ pillar, index }) {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    gsap.from(cardRef.current, {
      x: isEven ? -50 : 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className={`pillar-row ${isEven ? 'row' : 'row-reverse'}`}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        gap: '4rem',
        alignItems: 'center'
      }}
    >
      {/* Visual Side */}
      <div style={{ flex: '1.2', position: 'relative', height: '450px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border)', background: pillar.isLogo ? 'radial-gradient(circle at center, rgba(29, 78, 216, 0.08) 0%, var(--bg-secondary) 70%)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
        {pillar.isLogo ? (
          <div style={{ width: '70%', height: '70%', position: 'relative', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.06))' }}>
            <Image src={pillar.image} alt={pillar.title} fill style={{ objectFit: 'contain' }} />
          </div>
        ) : (
          <>
            <Image src={pillar.image} alt={pillar.title} fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
          </>
        )}
      </div>

      {/* Content Side */}
      <div style={{ flex: '1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="icon-box" style={{ width: '56px', height: '56px', background: 'var(--hover-bg)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>{pillar.icon}</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.1 }}>{pillar.title}</h3>
        </div>
        <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>{pillar.subtitle}</p>
        <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, fontSize: '1.05rem', color: 'var(--text)' }}>{pillar.content}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>{pillar.details}</p>
        
        <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.6 }}>Quick Stats</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.85rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {pillar.stats.map(s => (
              <li key={s} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, alignItems: 'center' }}>
                <CheckCircle2 size={16} className="text-primary" style={{ flexShrink: 0 }} /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .pillar-row {
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          .pillar-row > div:first-child {
            width: 100% !important;
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}

function PillarsSection() {
  const pillars = [
    {
      id: "pillar-1",
      title: "Pillar 1: AI Agent Architecture",
      subtitle: "Transparent, Governance First AI",
      icon: <Bot className="text-primary" />,
      content: "We architect transparent, governance first AI agents that reason through business logic, manage approvals, and integrate seamlessly with Zoho. No black box risks.",
      details: "Built on Claude for reasoning and Gemini for volume. Fully compliant with ISO and UAE regulations with explicit audit trails. Cycle time reduction from hours to minutes.",
      stats: ["40+ Deployed Workflows", "87% Qualification Accuracy", "Arabic Support: Gulf, Levantine, Egyptian"],
      image: "/img/pillar_ai.png"
    },
    {
      id: "pillar-2",
      title: "Pillar 2: Zoho Architecture & Governance",
      subtitle: "Clean, Scalable, AI Ready Instances",
      icon: <Shield className="text-success" />,
      content: "Zoho implementations fail from customization chaos. We architect clean, governed instances designed for scale and AI integration.",
      details: "Handling VAT, labor law compliance, and data sovereignty in the architecture phase. Assistance across 80+ Zoho instances with a 94% retention rate.",
      stats: ["80+ Implementations", "Single Source of Truth", "VAT & Labor Law Built in"],
      image: "/images/new-zoho-logo.png",
      isLogo: true
    },
    {
      id: "pillar-3",
      title: "Pillar 3: Enterprise Automation",
      subtitle: "Engineering Discipline for Workflow",
      icon: <Settings className="text-secondary" />,
      content: "Automation in the enterprise means engineering discipline: process mapping, transparent decision trees, and error handling.",
      details: "Using n8n as the orchestration spine. Organizations see payback in 3-4 months through freed capacity and reduced risk. Team of 6 operates like 8.5.",
      stats: ["200+ Hours/Month Saved", "n8n Orchestration Spine", "Payback in 3-4 Months"],
      image: "/img/pillar_automation_v2.png"
    }
  ];

  return (
    <section id="pillars" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Core Expertise</div>
          <h2 className="section-title">Our Three Core Pillars</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {pillars.map((pillar, idx) => (
            <PillarRow key={pillar.id} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ResultsSection removed and ported to NextStepsSection banner

function IndustryCard({ ind, index }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    // Reveal animation
    gsap.from(cardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });

    // Expansion animation
    if (expanded) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 120,
        opacity: 0.7,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }, { dependencies: [expanded], scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className={`industry-card-wrapper ${isEven ? 'row' : 'row-reverse'}`}
      style={{ 
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        gap: '4rem',
        alignItems: 'center',
        marginBottom: '6rem',
        width: '100%'
      }}
    >
      {/* Image Column */}
      <div style={{ flex: '1', position: 'relative', height: '400px', borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--card-shadow)', border: '1px solid var(--border)' }}>
        <Image
          src={ind.image}
          alt={ind.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
        }} />
      </div>

      {/* Content Column */}
      <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h3 style={{ 
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
          fontWeight: 900, 
          color: 'var(--text)', 
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          {ind.title}
        </h3>
        
        <div 
          ref={contentRef}
          style={{ 
            height: 120, 
            overflow: 'hidden', 
            opacity: 0.7,
            fontSize: '1.1rem', 
            color: 'var(--text-muted)', 
            lineHeight: 1.8, 
            marginBottom: '2rem',
            position: 'relative',
            width: '100%'
          }}
        >
          {ind.desc}
          {!expanded && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: `linear-gradient(to bottom, transparent, var(--bg-secondary))`,
              pointerEvents: 'none'
            }} />
          )}
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="btn-secondary"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            fontWeight: 800,
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '12px'
          }}
        >
          {expanded ? 'Show Less' : 'Explore Case Study'}
          <ChevronDown size={20} style={{ 
            transform: expanded ? 'rotate(180deg)' : 'none', 
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
          }} />
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .industry-card-wrapper {
            flex-direction: column !important;
            gap: 2rem !important;
            margin-bottom: 4rem !important;
          }
          .industry-card-wrapper > div {
            width: 100% !important;
            flex: none !important;
          }
          .industry-card-wrapper > div:first-child {
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}

function IndustrySection() {
  const industries = [
    {
      title: "Real Estate & Property Management",
      image: "/img/real-estate.png",
      desc: "Dubai real estate moves at WhatsApp speed. Agents drown in 50+ lead messages daily, many completely unqualified. We deploy AI agents that qualify in Arabic and English within 4 minutes, score by budget, timeline, nationality, and visa status, and sync qualified leads directly into Zoho CRM for automatic assignment. Response time improves from 6 hours (manual) to 12 minutes (agent assisted). Conversion rate improves 43% simply because responses are faster and better informed. We've implemented this across 12 real estate firms, managing 80,000+ inbound leads annually."
    },
    {
      title: "Retail & E-Commerce",
      image: "/img/retail.png",
      desc: "Retail WhatsApp inquiry volume is staggering—inventory questions, returns, order tracking, all hitting personal phones. We automate inventory lookups, order status, return processing, and product recommendations. A luxury retail group automated 90% of order related inquiries, reducing customer service cost by 35% while improving satisfaction (faster, 24/7). An e-commerce firm used AI agents for cross sell recommendations, increasing average order value by 12%. We handle Arabic language nuance (understanding casual inquiries, colloquial product references) and multi currency pricing."
    },
    {
      title: "Professional Services & Consulting",
      image: "/img/professional-services.png",
      desc: "Consulting firms live on proposal cycles and time tracking. We automate intake (capturing project requirements, scope, budget), proposal generation (templated but customized per client), and resource scheduling. A 40 person firm reduced proposal turnaround from 5 days to 2 days. An accounting practice automated 70% of initial client questionnaires, freeing senior staff for actual advisory work. These agents understand complex business logic not just form filling, but judgment calls about resource allocation and risk assessment."
    },
    {
      title: "Finance & Accounting",
      image: "/img/finance.png",
      desc: "Month end close is universally painful. We automate reconciliation (bank rec, GL account reconciliation), accruals (revenue recognition, expense accrual), and reporting prep. A manufacturing firm reduced month end from 10 days to 3 days. A holding company automated multi entity consolidation. A fintech firm achieved zero revenue recognition errors across 200 clients. We handle UAE VAT specifics tracking, quarterly return preparation, audit trail maintenance. Multi currency operations (AED, USD, INR) are configured for automatic daily revaluation."
    },
    {
      title: "Hospitality & Food & Beverage",
      image: "/img/hospitality.png",
      desc: "Hospitality operates in service moments a guest needs something now, or the moment is lost. We deploy agents handling check in escalations, dining reservations, maintenance requests, and local recommendations. A 5 star hotel automated 60% of guest service requests, improving guest satisfaction while reducing front desk overhead. A restaurant group automated reservation management and special request handling across 8 locations. These agents understand service context and can escalate appropriately when human judgment is needed."
    },
    {
      title: "Logistics & Supply Chain",
      image: "/img/logistics.png",
      desc: "Supply chain is exception driven. Normal orders process fine; exceptions (wrong delivery address, customs hold, damaged shipment) require immediate attention. We build agents that detect exceptions (using real time tracking data), initiate communications with customers and vendors, and coordinate resolution. A logistics provider reduced exception resolution time from 90 minutes to 2 minutes per shipment, improving on time delivery from 87% to 94%. We handle multi leg shipments, customs documentation, and Arabic communication with suppliers."
    }
  ];

  return (
    <section id="industries" style={{ padding: '100px 1.5rem', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Industry Impact</div>
          <h2 className="section-title">Vertical Excellence</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {industries.map((ind, idx) => (
            <IndustryCard key={ind.title} ind={ind} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  const phases = [
    {
      num: "01",
      title: "Discover & Diagnose",
      duration: "Weeks 1-3",
      price: "AED 18,000",
      desc: "We don't start with a blank whiteboard. We interview your team, observe actual processes, and identify pain points with impact. Discovery finds the real problems, not the symptoms. We deliver a diagnostic report with automation opportunities and Zoho readiness assessment."
    },
    {
      num: "02",
      title: "Design & Architecture",
      duration: "Weeks 3-8",
      price: "AED 28,000 - 35,000",
      desc: "Once we understand your reality, we design the solution: process redesign, Zoho data models, n8n workflows, and AI agent specifications. We present options and architecture diagrams, ensuring your team can maintain these systems long-term."
    },
    {
      num: "03",
      title: "Deploy & Test",
      duration: "Weeks 8-16",
      price: "AED 80,000 - 150,000",
      desc: "Implementation is orchestrated, not rushed. We set up n8n instances, Zoho environments, and manage the coding of automation. We run parallel periods where human and AI processes are validated side by side for 100% accuracy before the full switch."
    },
    {
      num: "04",
      title: "Optimize & Govern",
      duration: "Weeks 16+, Ongoing",
      price: "AED 15,000 - 25,000/mo",
      desc: "Launch is the beginning. We monitor agent accuracy and user adoption, refining behavior based on real-world feedback. After 90 days, we establish clear governance, escalation paths, and provide dashboards for full visibility into agent performance and ROI."
    }
  ];

  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    gsap.from(itemsRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
      }
    });

    // Path animation
    gsap.from(".timeline-path-active", {
      height: 0,
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="methodology" ref={sectionRef} style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Execution Strategy</div>
          <h2 className="section-title">4-Phase Methodology</h2>
        </div>

        <div className="timeline-container" style={{ position: 'relative', paddingLeft: '3rem' }}>
          {/* Timeline Path */}
          <div className="timeline-path-bg" style={{ 
            position: 'absolute', 
            left: 'calc(3rem / 2)', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: 'var(--border)',
            opacity: 0.5
          }} />
          <div className="timeline-path-active" style={{ 
            position: 'absolute', 
            left: 'calc(3rem / 2)', 
            top: 0, 
            width: '2px', 
            background: 'var(--primary)',
            zIndex: 1
          }} />

          {phases.map((p, i) => (
            <div 
              key={p.num} 
              ref={el => itemsRef.current[i] = el}
              style={{ position: 'relative', marginBottom: '4rem' }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: 'calc(-3rem / 2 - 8px)',
                top: '0',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'white',
                border: '3px solid var(--primary)',
                zIndex: 2,
                boxShadow: '0 0 0 5px var(--bg)'
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>PHASE {p.num}</span>
                  <div style={{ height: '1px', flex: 1, background: 'var(--border)', opacity: 0.5, minWidth: '20px' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.6 }}>{p.duration}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0 }}>{p.title}</h3>
                  <span style={{
                    background: 'rgba(29, 78, 216, 0.08)',
                    color: 'var(--primary)',
                    padding: '0.4rem 1.2rem',
                    borderRadius: '100px',
                    fontSize: '0.95rem',
                    fontWeight: 800
                  }}>
                    {p.price}
                  </span>
                </div>

                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-muted)', 
                  lineHeight: 1.7, 
                  margin: 0,
                  maxWidth: '850px'
                }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyDubaiCard({ reason, index }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    // Reveal animation
    gsap.from(cardRef.current, {
      x: isEven ? -50 : 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none none"
      }
    });

    // Expansion animation
    if (expanded) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    } else {
      gsap.to(contentRef.current, {
        height: 100,
        opacity: 0.8,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }, { dependencies: [expanded], scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className={`why-dubai-wrapper ${isEven ? 'row' : 'row-reverse'}`}
      style={{ 
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        gap: '4rem',
        alignItems: 'flex-start',
        marginBottom: '5rem',
        width: '100%',
        padding: '2.5rem',
        borderRadius: '32px',
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        boxShadow: expanded ? '0 30px 60px rgba(0,0,0,0.1)' : 'var(--card-shadow)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Visual Numbering Backdrop */}
      <span style={{
        position: 'absolute',
        top: '-10px',
        right: isEven ? '20px' : 'auto',
        left: isEven ? 'auto' : '20px',
        fontSize: '10rem',
        fontWeight: 950,
        color: 'var(--primary)',
        opacity: 0.04,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        {index + 1}
      </span>

      {/* Title Column */}
      <div style={{ flex: '1', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '16px',
          background: 'rgba(29, 78, 216, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          fontSize: '1.5rem',
          fontWeight: 900,
          marginBottom: '1.5rem'
        }}>
          0{index + 1}
        </div>
        <h3 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', 
          fontWeight: 900, 
          color: 'var(--text)', 
          lineHeight: 1.1,
          margin: 0
        }}>
          {reason.title}
        </h3>
      </div>

      {/* Description Column */}
      <div style={{ flex: '1.5', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div 
          ref={contentRef}
          style={{ 
            height: 100, 
            overflow: 'hidden', 
            fontSize: '1.1rem', 
            color: 'var(--text-muted)', 
            lineHeight: 1.8, 
            marginBottom: '1.5rem',
            position: 'relative',
            width: '100%'
          }}
        >
          {reason.desc}
          {!expanded && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50px',
              background: `linear-gradient(to bottom, transparent, var(--card-bg))`,
              pointerEvents: 'none'
            }} />
          )}
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontWeight: 800,
            padding: '0.5rem 0',
            fontSize: '0.95rem',
            color: 'var(--primary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {expanded ? 'Read Less' : 'Learn Why This Matters'}
          <ChevronDown size={18} style={{ 
            transform: expanded ? 'rotate(180deg)' : 'none', 
            transition: 'transform 0.4s ease' 
          }} />
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .why-dubai-wrapper {
            flex-direction: column !important;
            gap: 1.5rem !important;
            padding: 2rem !important;
          }
          .why-dubai-wrapper > div {
            flex: none !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

function WhyDubaiSection() {
  const reasons = [
    {
      title: "The 3-Year Zoho License We Help Secure",
      desc: "In the UAE, a 3-year business trade license is the local gold standard. We help you secure this in Dubai Business Bay. Why? Because it signals commitment. A fly by night consulting firm can't maintain 3-year licensing; we can and do. This matters for your enterprise relationships they want to work with partners who'll be around in 3 years. Most Zoho partners are UK-based or US-based; we're here. Your problems are our problems. We're invested in the UAE market, not treating it as an overseas project."
    },
    {
      title: "Bilingual, Bicultural Expertise",
      desc: "Your business operates in English and Arabic. Your CRM needs to work in both. Most Zoho implementations are English-only because the partner doesn't speak Arabic and doesn't understand Emirati or UAE Expat business culture. We do both. We've configured Zoho for Gulf Arabic speakers, Levantine expatriates, and Egyptian staff. We understand the regulatory context VAT compliance, labor law, and data sovereignty expectations. We build agents that understand casual Arabic service context, not just formal text."
    },
    {
      title: "Three-Office Model: Responsiveness & Value",
      desc: "We operate from Dubai (client facing, on ground presence), Sydney (engineering and architecture), and India (delivery and training). This means your call gets answered in Dubai time, your solution is architected by experienced engineers in Sydney, and your implementation is delivered by trained specialists in India at a sustainable cost. You get responsiveness and high-level architecture without paying Silicon Valley rates for 24/7 coverage. We're optimized for AU, APAC, and the UAE."
    },
    {
      title: "Zoho + Modern AI, Not Replacing Zoho",
      desc: "The market is full of 'AI disruption' stories claims that AI will replace Zoho or your entire CRM. We take the opposite view. Zoho is the operational spine that will outlast this AI cycle. What's changing is how we augment it. We're positioning AI as the multiplier. Your Zoho CRM gets better with AI agents; your Zoho Finance gets smarter with automation. We're not selling you a 'rip and replace'—we're selling you Zoho elevation. That's more conservative, more realistic, and more likely to create lasting value."
    },
    {
      title: "Transparent, Incentive-Aligned Pricing",
      desc: "We don't hide costs in 'implementation overruns.' You'll know what you're paying for upfront. A basic Zoho setup is AED 50-100K; advanced setups with multi company workflows are AED 150-300K. AI agents add 40-60K per agent depending on complexity. We also price ongoing support clearly: AED 15-25K/mo for SMB, AED 40-75K/mo for enterprise. Whether you're a startup starting with discovery (AED 18K) or an enterprise with board approved ROI metrics, your investment is clear and approved by your CFO."
    }
  ];

  return (
    <section id="why-us" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div className="section-label">Why FI Digital?</div>
          <h2 className="section-title">Why Dubai Businesses Choose FI Digital</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {reasons.map((r, idx) => (
            <WhyDubaiCard key={r.title} reason={r} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NextStepsSection() {
  const steps = [
    {
      title: "Complimentary AI & Zoho Audit",
      duration: "45 Minutes",
      desc: "A 15-20 page readiness report with no sales pitch. Perfect if you are genuinely exploring what's possible.",
      action: "Get Audit",
      link: "/contact",
      icon: <Search size={40} />,
      badge: "Discovery"
    },
    {
      title: "Strategy Session",
      duration: "60 Minutes",
      desc: "A deep dive where we map your full technical roadmap. Best if you are serious about moving forward.",
      action: "Book Session",
      link: "/contact",
      icon: <Zap size={40} />,
      badge: "Planning"
    },
    {
      title: "WhatsApp Quick Connect",
      duration: "< 2 Hours",
      desc: "Quick assessment and initial answers. Ideal if you just want to kick the tires and ask a few questions.",
      action: "Connect Now",
      link: "/contact",
      icon: <MessageCircleMore size={40} />,
      badge: "Urgent"
    }
  ];

  return (
    <section id="next-steps" style={{ padding: '100px 1.5rem', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Direct Access</div>
          <h2 className="section-title">Your Next Steps</h2>
          <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Choose whichever feels right. We don&apos;t believe in high-pressure sales—we believe in architecting the right decision once.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {steps.map((step) => (
            <div key={step.title} className="card next-step-card" style={{ 
              padding: '3rem 2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-start',
              textAlign: 'left',
              height: '100%',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '32px',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                color: 'var(--primary)', 
                fontWeight: 800, 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1rem',
                padding: '0.4rem 0.8rem',
                background: 'rgba(29, 78, 216, 0.08)',
                borderRadius: '100px',
                display: 'inline-block'
              }}>
                {step.badge}
              </div>
              
              <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1, color: 'var(--text)' }}>
                {step.title}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', flex: 1 }}>
                {step.desc}
              </p>

              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.6 }}>{step.duration}</span>
                <Link
                  href={step.link}
                  className="btn-primary"
                  style={{ 
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    padding: '0.75rem 1.5rem',
                    height: 'auto'
                  }}
                >
                  {step.action}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="card shadow-hover" style={{
          padding: '80px 40px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)',
          borderRadius: '48px',
          color: 'white',
          boxShadow: '0 40px 100px rgba(0, 82, 212, 0.25)',
          position: 'relative',
          overflow: 'hidden',
          border: 'none'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label" style={{ 
              background: 'rgba(255,255,255,0.15)', 
              color: 'white', 
              border: '1px solid rgba(255,255,255,0.2)',
              marginBottom: '2rem',
              display: 'inline-block'
            }}>CREDIT OFFER</div>

            <h3 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: 900, 
              marginBottom: '1.5rem', 
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              We also offer this
            </h3>
            <p style={{ maxWidth: '850px', margin: '0 auto', color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', lineHeight: 1.8 }}>
              If you work with us for implementation, we will credit the full cost of discovery and strategy <strong style={{ color: 'white', textDecoration: 'underline' }}>(AED 45K+)</strong> against your implementation contract. You&apos;re not paying for these conversations twice you&apos;re investing in the right decision once.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .next-step-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .next-step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .shadow-hover {
          transition: all 0.5s ease;
        }
        .shadow-hover:hover {
          box-shadow: 0 40px 80px rgba(0,0,0,0.12);
        }
      `}</style>
    </section>
  );
}

// --- MAIN PAGE ---

export default function HomeClient() {
  return (
    <>
      <HomeHero />
      <EcosystemSection />
      <PillarsSection />
      <IndustrySection />
      <MethodologySection />
      <WhyDubaiSection />
      <NextStepsSection />
    </>
  );
}
