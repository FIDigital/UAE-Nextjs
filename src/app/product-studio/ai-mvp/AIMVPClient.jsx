"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Cpu, 
    Layers, 
    Zap, 
    Rocket, 
    CheckCircle2, 
    Search, 
    Code2, 
    Terminal,
    MessageSquare,
    Workflow,
    Database,
    LineChart
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const timeline = [
    {
        week: "Week 1–2",
        title: "Discovery",
        desc: "User research, wireframes, and defining the AI architecture.",
        icon: <Search size={24} />,
        details: ["User Persona Mapping", "AI Agent Logic Flow", "Tech Stack Selection"]
    },
    {
        week: "Week 3–4",
        title: "Core Build",
        desc: "Functional AI agents, basic UI, and core integrations.",
        icon: <Code2 size={24} />,
        details: ["LangChain Integration", "N8N Multi-step Logic", "Zoho Data Hookup"]
    },
    {
        week: "Week 5",
        title: "Testing",
        desc: "Real user feedback, AI model tuning, and bug fixes.",
        icon: <Terminal size={24} />,
        details: ["Prompt Engineering", "UAT Cycles", "Performance Benchmarking"]
    },
    {
        week: "Week 6",
        title: "Launch-ready",
        desc: "MVP deployed, monitored, and ready for your first users.",
        icon: <Rocket size={24} />,
        details: ["Cloud Provisioning", "Security Audits", "Monitoring Setup"]
    }
];

export default function AIMVPClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Product MVP Builds",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Rapid AI MVP development for the UAE market. Launch functional AI products in 6 weeks using our pre-built library of LangChain agents and n8n orchestration.",
        "areaServed": {
            "@type": "Country",
            "name": "United Arab Emirates"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How fast can you build an AI MVP?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our accelerated development cycle allows us to go from AI concept to working prototype in as little as 6 weeks, leveraging pre-built components for orchestration and data."
                }
            },
            {
                "@type": "Question",
                "name": "What tech stack do you use for AI products?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We utilize a robust stack including LangChain for agent logic, n8n for multi-step orchestration, and Zoho for a secure data layer."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-mvp");
        const steps = gsap.utils.toArray(".timeline-step");

        gsap.set([reveals, steps], { opacity: 0, y: 40 });

        reveals.forEach((item) => {
            gsap.to(item, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });

        gsap.to(steps, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".timeline-container",
                start: "top 80%"
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {/* Hero Section */}
            <section className="hero-section" style={{
                position: "relative",
                minHeight: "65vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(100px, 12vh, 120px) 1.5rem 80px",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                {/* Background Visual - Positioned Right */}
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
                        src="/images/ai-mvp-hero.png" 
                        alt="Background" 
                        fill
                        style={{ 
                            objectFit: "cover", 
                            maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                            WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)"
                        }}
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
                    <div className="section-label reveal-mvp">AI Product MVP Builds</div>
                    <h1 className="reveal-mvp" style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        maxWidth: "900px",
                        letterSpacing: "-0.03em"
                    }}>
                        How Does our 6-Week AI MVP Build <br />
                        <span style={{ color: "var(--primary)" }}>Process Solve UAE Business Needs?</span>
                    </h1>
                    <p className="hero-text" style={{ 
                        fontSize: "1.1rem", 
                        fontWeight: 700,
                        color: "var(--primary)",
                        maxWidth: "850px",
                        marginBottom: "1.5rem",
                        lineHeight: 1.6
                    }}>
                        FI Digital provides an accelerated 6-week AI MVP development program for Dubai-based startups and enterprises, bridging raw concepts with production-grade reality through our proprietary component library. By integrating LangChain agents and n8n orchestration layers with Zoho data environments, our rapid builds resolve the high-cost and slow-time-to-market barriers for new AI products, delivering functional prototypes with 99.1% accuracy.
                    </p>
                    <p className="reveal-mvp" style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                        color: "var(--text-muted)",
                        maxWidth: "700px",
                        marginBottom: "3rem",
                        lineHeight: 1.7
                    }}>
                        Using our pre-built AI component library (LangChain agents, n8n orchestration, Zoho data layer), we assemble functional MVPs faster than building from scratch.
                    </p>
                    <div className="reveal-mvp" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary">Launch Your MVP</Link>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "80px" }} className="reveal-mvp">
                        <div className="section-label">The Journey</div>
                        <h2 className="section-title">What is the Most Effective AI MVP Launch Strategy for Dubai Startups?</h2>
                        <p className="section-desc" style={{ margin: "0 auto" }}>
                            Our accelerated methodology focuses on the critical features that prove value and gather user feedback.
                        </p>
                    </div>

                    <div className="timeline-container" style={{ 
                        maxWidth: "1000px", 
                        margin: "0 auto",
                        position: "relative",
                        padding: "20px 0"
                    }}>
                        {/* Center Path Background */}
                        <div style={{
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            background: "linear-gradient(to bottom, transparent, var(--primary), transparent)",
                            opacity: 0.2,
                            display: "none"
                        }} className="desktop-path" />

                        {timeline.map((item, idx) => (
                            <div key={idx} className="timeline-step" style={{
                                display: "flex",
                                gap: "4rem",
                                marginBottom: "4rem",
                                alignItems: "center",
                                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                                textAlign: idx % 2 === 0 ? "right" : "left"
                            }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ 
                                        color: "var(--primary)", 
                                        fontWeight: 800, 
                                        fontSize: "0.9rem", 
                                        marginBottom: "0.5rem", 
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em"
                                    }}>
                                        {item.week}
                                    </div>
                                    <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>{item.title}</h3>
                                    <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", maxWidth: "400px", marginLeft: idx % 2 === 0 ? "auto" : "0", marginRight: idx % 2 === 0 ? "0" : "auto" }}>
                                        {item.desc}
                                    </p>
                                    <div style={{ 
                                        display: "flex", 
                                        gap: "0.75rem", 
                                        flexWrap: "wrap",
                                        justifyContent: idx % 2 === 0 ? "flex-end" : "flex-start"
                                    }}>
                                        {item.details.map((detail, dIdx) => (
                                            <span key={dIdx} style={{
                                                padding: "0.4rem 0.8rem",
                                                background: "var(--hover-bg)",
                                                borderRadius: "6px",
                                                fontSize: "0.8rem",
                                                fontWeight: 600,
                                                border: "1px solid var(--border)"
                                            }}>
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{
                                    width: "80px",
                                    height: "80px",
                                    background: "var(--primary)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                                    flexShrink: 0,
                                    position: "relative",
                                    zIndex: 2
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{ flex: 1 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Libraries */}
            <section style={{ padding: "100px 0" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
                        <div className="reveal-mvp">
                            <div className="section-label">Our Advantage</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>The Pre-Built Advantage</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
                                Why build from zero? We've already solved the hardest parts of AI orchestration, data security, and multi-tenant management.
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                {[
                                    { image: "https://avatars.githubusercontent.com/u/126733545", title: "LangChain", desc: "Complex agent chains" },
                                    { image: "https://n8n.io/favicon.ico", title: "n8n", desc: "Workflow orchestration" },
                                    { image: "/images/new-zoho-logo.png", title: "Zoho", desc: "Secure data layer" },
                                    { icon: <LineChart size={32} />, title: "Analytics", desc: "Real-time AI monitoring" }
                                ].map((lib, idx) => (
                                    <div key={idx}>
                                        <div style={{ color: "var(--primary)", marginBottom: "1rem", height: "32px", display: "flex", alignItems: "center" }}>
                                            {lib.image ? (
                                                <Image 
                                                    src={lib.image} 
                                                    alt={lib.title} 
                                                    width={100}
                                                    height={32}
                                                    style={{ height: "32px", width: "auto", objectFit: "contain", borderRadius: lib.title === "LangChain" ? "6px" : "0" }} 
                                                />
                                            ) : (
                                                lib.icon
                                            )}
                                        </div>
                                        <h4 style={{ fontWeight: 800, marginBottom: "0.25rem" }}>{lib.title}</h4>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{lib.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-mvp" style={{ 
                            padding: "3rem", 
                            background: "var(--card-bg)", 
                            borderRadius: "32px", 
                            border: "1px solid var(--border)",
                            position: "relative"
                        }}>
                             <div style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <Terminal size={24} style={{ color: "var(--primary)" }} />
                                Rapid Deployment Protocol
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {["Zero-downtime deployments", "Automated security scanning", "Prompt version control", "Cost-tracking dashboards"].map((feat, idx) => (
                                    <div key={idx} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={18} style={{ color: "#22c55e" }} />
                                        <span style={{ fontWeight: 600 }}>{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--hover-bg)", borderRadius: "16px" }}>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                                    "FI Digital delivered our AI portal in 5 weeks. The n8n integration alone saved us months of custom backend work."
                                </p>
                                <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "0.85rem" }}>— Tech Lead, UAE Logistics Hub</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Links */}
            <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="reveal-mvp" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem" }}>How Can I Launch my AI MVP in the UAE Within 6 Weeks?</h2>
                    <div className="reveal-mvp" style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                        <Link href="/product-studio" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 700 }}>Product Studio</Link>
                        <Link href="/platform" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 700 }}>Our Platform</Link>
                        <Link href="/contact" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 800 }}>Contact Us</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media (min-width: 1024px) {
                    .desktop-path { display: block !important; }
                }

                @media (max-width: 1024px) {
                    section { padding: 80px 1.5rem !important; }
                    .timeline-container { padding: 0 !important; }
                }

                @media (max-width: 768px) {
                    .hero-section { 
                        text-align: center !important; 
                        padding-top: 100px !important;
                        min-height: auto !important;
                    }
                    .hero-background {
                        width: 100% !important;
                        opacity: 0.25 !important;
                        mask-image: radial-gradient(circle at center, black, transparent 80%) !important;
                        -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%) !important;
                    }
                    .hero-container {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    h1 { font-size: 2.5rem !important; }
                    p { font-size: 1rem !important; margin-left: auto; margin-right: auto; }

                    .timeline-step {
                        flex-direction: column !important;
                        text-align: center !important;
                        gap: 2rem !important;
                    }
                    .timeline-step div p {
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .timeline-step div div {
                        justify-content: center !important;
                    }
                }
            `}</style>
            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
