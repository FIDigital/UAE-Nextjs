"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Activity, 
    Shield, 
    Zap, 
    Clock, 
    Search,
    Database,
    LineChart,
    Settings,
    UserCheck,
    AlertCircle,
    ArrowRight,
    TrendingUp
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const capabilities = [
    {
        title: "Guaranteed Monthly Hours",
        desc: "A dedicated engineering squad with fixed monthly capacity for feature development and bug fixes.",
        icon: <UserCheck size={24} />,
        image: "/images/guaranteed-hours.png"
    },
    {
        title: "24/7 Uptime Monitoring",
        desc: "Proactive automated recovery systems and real-time alerts to ensure your product never goes dark.",
        icon: <Activity size={24} />,
        image: "/images/uptime-monitoring.png"
    },
    {
        title: "Performance Optimization",
        desc: "Regular database tuning, cache audits, and code refactoring to maintain lightning-fast response times.",
        icon: <Zap size={24} />,
        image: "/images/performance-optimization.png"
    },
    {
        title: "Security & Patching",
        desc: "Continuous dependency updates and security patching to protect your user data and platform integrity.",
        icon: <Shield size={24} />,
        image: "/images/security-patching.png"
    },
    {
        title: "Strategic Roadmap Reviews",
        desc: "Quarterly alignment sessions to ensure technical development matches your evolving business goals.",
        icon: <TrendingUp size={24} />,
        image: "/images/strategic-review.png"
    }
];

export default function ScalingMaintenanceClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-scaling");
        const cards = gsap.utils.toArray(".cap-card");

        gsap.set([reveals, cards], { opacity: 0, y: 40 });

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

        gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".cap-grid",
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
                        src="/images/scaling-maintenance-hero.png" 
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
                    <div className="section-label reveal-scaling">Product Scaling & Maintenance</div>
                    <h1 className="reveal-scaling" style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        maxWidth: "900px",
                        letterSpacing: "-0.03em"
                    }}>
                        Build Once. <span style={{ color: "var(--primary)" }}>Scale Forever.</span> <br />
                        We Keep It Running.
                    </h1>
                    <p className="reveal-scaling" style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                        color: "var(--text-muted)",
                        maxWidth: "700px",
                        marginBottom: "3rem",
                        lineHeight: 1.7
                    }}>
                        Dedicated engineering hours, proactive monitoring, performance optimization, feature development, and infrastructure management.
                    </p>
                    <div className="reveal-scaling" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
                        <Link href="/product-studio" className="btn-secondary">View Product Studio</Link>
                    </div>
                </div>
            </section>

            {/* Scale & Support Grid */}
            <section style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div style={{ marginBottom: "60px" }} className="reveal-scaling">
                        <div className="section-label">Our Solutions</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>Everything Your Product Needs to Thrive</h2>
                    </div>

                    <div className="cap-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem"
                    }}>
                        {capabilities.map((item, idx) => (
                            <div key={idx} className="cap-card group" style={{
                                position: "relative",
                                borderRadius: "24px",
                                overflow: "hidden",
                                minHeight: "440px",
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
                                    className="cap-img"
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    inset: 0, 
                                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.45) 55%, rgba(15, 23, 42, 0) 100%)", 
                                    zIndex: -1,
                                    transition: "background 0.4s ease"
                                }} className="cap-overlay" />
                                
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
                                }} className="cap-content">
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
                                        <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stability & Growth Stats */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    <div className="reveal-scaling">
                        <div className="section-label">Beyond Basic Support</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>Engineered for Reliability</h2>
                        <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
                            Maintenance isn't just about fixing what's broken; it's about optimizing for the future. We provide active engineering that evolves your product as your user base grows.
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {[
                                { title: "Elastic Infrastructure", desc: "Auto-scaling server configurations that handle traffic spikes without manual intervention." },
                                { title: "Technical Debt Audits", desc: "Twice-yearly deep cleans of your codebase to prevent legacy slow-downs." },
                                { title: "Disaster Recovery", desc: "Redundant backup systems with sub-10 minute recovery time objectives (RTO)." }
                            ].map((feat, idx) => (
                                <li key={idx} style={{ display: "flex", gap: "1.25rem" }}>
                                    <Clock size={28} style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{feat.title}</h4>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{feat.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="reveal-scaling" style={{ 
                        padding: "3.5rem", 
                        background: "var(--card-bg)", 
                        borderRadius: "32px", 
                        border: "1px solid var(--border)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}>
                        <h3 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "2.5rem" }}>Maintenance Impact</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                            {[
                                { label: "Average Uptime across Managed Apps", value: "99.98%" },
                                { label: "Reduction in Critical Bugs (Year 1)", value: "65%" },
                                { label: "Average Performance Gain after Audit", value: "40%" }
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                                        <span style={{ fontWeight: 600, color: "var(--text-muted)" }}>{stat.label}</span>
                                        <span style={{ fontWeight: 900, color: "var(--primary)" }}>{stat.value}</span>
                                    </div>
                                    <div style={{ width: "100%", height: "8px", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
                                        <div style={{ width: stat.value === "99.98%" ? "99.9%" : stat.value, height: "100%", background: "var(--primary)" }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-scaling" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>Never Worry About Servers Again.</h2>
                        <p style={{ color: "var(--text-muted)", marginBottom: "3rem", fontSize: "1.2rem" }}>
                            Focus on your business. We'll handle the scaling, the security, and the engineering.
                        </p>
                        <Link href="/contact" className="btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
                            Get a Maintenance Quote
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .cap-card:hover {
                    transform: translateY(-8px) !important;
                    box-shadow: 0 24px 48px rgba(0,0,0,0.15) !important;
                    border-color: rgba(255,255,255,0.1) !important;
                }
                [data-theme="light"] .cap-card:hover {
                    box-shadow: 0 24px 48px rgba(0,0,0,0.08) !important;
                }
                .cap-card:hover .cap-img {
                    transform: scale(1.08) !important;
                }
                .cap-card:hover .cap-overlay {
                    background: linear-gradient(to top, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.1) 100%) !important;
                }
                .cap-card:hover .cap-content {
                    transform: translateY(0) !important;
                }

                @media (max-width: 1024px) {
                    section { padding: 80px 1.5rem !important; }
                    .cap-grid { grid-template-columns: 1fr 1fr !important; }
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
                    .cap-grid { grid-template-columns: 1fr !important; }
                    h1 { font-size: 2.5rem !important; }
                    p { font-size: 1rem !important; margin-left: auto; margin-right: auto; }
                }
            `}</style>
        </div>
    );
}
