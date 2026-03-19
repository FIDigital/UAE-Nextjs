"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    RefreshCcw, 
    ShieldCheck, 
    Database, 
    Zap, 
    Cloud, 
    Layers, 
    CheckCircle2, 
    Search, 
    Code2, 
    ArrowRight,
    Cpu,
    Workflow
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
    {
        title: "Full Infrastructure Audit",
        desc: "Deep dive into your current COBOL, legacy Java, or legacy .NET systems and their hidden dependencies.",
        icon: <Search size={24} />,
        image: "/images/legacy-infrastructure-audit.png"
    },
    {
        title: "Phased Migration Strategy",
        desc: "We prioritize 'quick wins' that deliver immediate business value without the risk of a 'big bang' migration.",
        icon: <Workflow size={24} />,
        image: "/images/phased-migration-strategy.png"
    },
    {
        title: "Modern API Wrapping",
        desc: "Unlock legacy data by building a high-performance REST/GraphQL layer around your existing core.",
        icon: <Layers size={24} />,
        image: "/images/modern-api-wrapping.png"
    },
    {
        title: "Incremental Cloud Shift",
        desc: "Component-by-component migration to AWS or Azure with rigorous testing at every transition point.",
        icon: <Cloud size={24} />,
        image: "/images/incremental-cloud-shift.png"
    },
    {
        title: "AI Overlay Implementation",
        desc: "Apply LangChain and custom LLM agents to your historical data without replacing source systems.",
        icon: <Cpu size={24} />,
        image: "/images/ai-overlay-implementation.png"
    }
];

export default function LegacyModernizationClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-legacy");
        const listItems = gsap.utils.toArray(".sol-card");

        gsap.set([reveals, listItems], { opacity: 0, y: 40 });

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

        gsap.to(listItems, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".sol-grid",
                start: "top 85%"
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)" }}>
            {/* Hero Section */}
            <section className="hero-section" style={{
                position: "relative",
                minHeight: "65vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "clamp(100px, 12vh, 120px) 1.5rem 80px",
                background: "var(--bg)",
                overflow: "hidden",
                textAlign: "left"
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
                        src="/images/legacy-modernization-hero.png" 
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
                    <div className="section-label reveal-legacy">Legacy System Modernization</div>
                    <h1 className="reveal-legacy" style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        maxWidth: "900px",
                        letterSpacing: "-0.03em"
                    }}>
                        Modernize Without Disruption. <br />
                        <span style={{ color: "var(--primary)" }}>Add AI to What Already Works.</span>
                    </h1>
                    <p className="reveal-legacy" style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                        color: "var(--text-muted)",
                        maxWidth: "700px",
                        marginBottom: "3rem",
                        lineHeight: 1.7
                    }}>
                        We wrap existing systems in modern interfaces, connect them to AI through n8n, and migrate components to cloud incrementally.
                    </p>
                    <div className="reveal-legacy" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div style={{ marginBottom: "60px" }} className="reveal-legacy">
                        <div className="section-label">Capabilities</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>Key Solutions & Capabilities</h2>
                    </div>

                    <div className="sol-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="sol-card group" style={{
                                position: "relative",
                                borderRadius: "24px",
                                overflow: "hidden",
                                minHeight: "420px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                border: "1px solid var(--border)",
                                isolation: "isolate",
                                cursor: "pointer",
                                transition: "transform 0.4s ease, box-shadow 0.4s ease"
                            }}>
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill
                                    style={{ 
                                        objectFit: "cover", 
                                        zIndex: -2,
                                        transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                    }}
                                    className="sol-img"
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    inset: 0, 
                                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0) 100%)", 
                                    zIndex: -1,
                                    transition: "background 0.4s ease"
                                }} className="sol-overlay" />
                                
                                <div style={{ 
                                    padding: "2.5rem 2.2rem", 
                                    position: "relative", 
                                    zIndex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.25rem",
                                    transform: "translateY(12px)",
                                    transition: "transform 0.4s ease",
                                    color: "white"
                                }} className="sol-content">
                                    <div style={{ 
                                        width: "56px", 
                                        height: "56px", 
                                        background: "var(--primary)", 
                                        borderRadius: "16px", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center",
                                        color: "white",
                                        boxShadow: "0 8px 16px rgba(59, 130, 246, 0.4)"
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: "1.45rem", fontWeight: 800, margin: "0 0 0.5rem 0", letterSpacing: "-0.01em", color: "white" }}>{item.title}</h3>
                                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    <div className="reveal-legacy">
                        <div className="section-label">Our Approach</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>Risk-Free Evolution</h2>
                        <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {[
                                { title: "Incremental Value", desc: "No multi-year wait times. We deploy functional components every 2-4 weeks." },
                                { title: "Preserved Integrity", desc: "Your core business logic remains untouched while we build modern layers on top." },
                                { title: "AI-Ready Core", desc: "Transform static databases into dynamic knowledge bases for generative AI." }
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: "flex", gap: "1.25rem" }}>
                                    <ShieldCheck size={28} style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h4>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="reveal-legacy" style={{ 
                        padding: "3.5rem", 
                        background: "var(--card-bg)", 
                        borderRadius: "32px", 
                        border: "1px solid var(--border)",
                        position: "relative"
                    }}>
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem" }}>Status Report</div>
                            <h3 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "2rem" }}>Technical Debt Reduction</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {[
                                    { label: "Maintenance Cost Reduction", value: "45%" },
                                    { label: "Deployment Velocity Increase", value: "3.5x" },
                                    { label: "System Uptime Improvement", value: "99.9%" }
                                ].map((stat, idx) => (
                                    <div key={idx}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                            <span style={{ fontWeight: 600, color: "var(--text-muted)" }}>{stat.label}</span>
                                            <span style={{ fontWeight: 900, color: "var(--primary)" }}>{stat.value}</span>
                                        </div>
                                        <div style={{ width: "100%", height: "6px", background: "var(--border)", borderRadius: "3px", overflow: "hidden" }}>
                                            <div style={{ width: stat.value, height: "100%", background: "var(--primary)" }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--hover-bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                                    "We successfully migrated our 15-year old ERP to a cloud-native architecture without a single hour of downtime."
                                </p>
                                <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "0.85rem" }}>— CTO, Dubai Finance Group</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Links */}
            <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="reveal-legacy" style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2.5rem" }}>Ready to Modernize?</h2>
                    <div className="reveal-legacy" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                        <Link href="/product-studio" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 700 }}>Product Studio</Link>
                        <Link href="/platform" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 700 }}>Our Platform</Link>
                        <Link href="/contact" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 800 }}>Contact Us</Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .sol-card:hover {
                    transform: translateY(-8px) !important;
                    box-shadow: 0 24px 48px rgba(0,0,0,0.15) !important;
                    border-color: rgba(255,255,255,0.1) !important;
                }
                [data-theme="light"] .sol-card:hover {
                    box-shadow: 0 24px 48px rgba(0,0,0,0.08) !important;
                }
                .sol-card:hover .sol-img {
                    transform: scale(1.08) !important;
                }
                .sol-card:hover .sol-overlay {
                    background: linear-gradient(to top, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.1) 100%) !important;
                }
                .sol-card:hover .sol-content {
                    transform: translateY(0) !important;
                }

                @media (max-width: 1024px) {
                    section { padding: 80px 1.5rem !important; }
                    .sol-grid { grid-template-columns: 1fr !important; }
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
                }
            `}</style>
        </div>
    );
}
