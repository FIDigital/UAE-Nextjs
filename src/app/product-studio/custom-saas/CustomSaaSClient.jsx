"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Cloud, 
    Shield, 
    Users, 
    Monitor, 
    Smartphone, 
    CheckCircle2, 
    ArrowRight,
    Search,
    Code2,
    Database,
    Zap,
    Layout
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const capabilities = [
    {
        title: "Customer Portals",
        desc: "Dashboards for client self-service, order tracking, and account management.",
        icon: <Users size={24} />,
        image: "/images/customer-portal.png"
    },
    {
        title: "Internal Operations",
        desc: "Platforms replacing spreadsheets with automated workflows and data centralized.",
        icon: <Shield size={24} />,
        image: "/images/internal-operations.png"
    },
    {
        title: "Marketplace Platforms",
        desc: "Booking and transaction systems built for UAE business models.",
        icon: <Monitor size={24} />,
        image: "/images/marketplace-platform.png"
    },
    {
        title: "Multi-tenant SaaS",
        desc: "Software-as-a-business products with isolated data and scalable architecture.",
        icon: <Cloud size={24} />,
        image: "/images/multi-tenant-saas-light.png"
    },
    {
        title: "Mobile-Responsive Web Apps",
        desc: "Progressive web apps with offline capability and native-like performance.",
        icon: <Smartphone size={24} />,
        image: "/images/mobile-web-apps.png"
    }
];

export default function CustomSaaSClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom SaaS Development",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Cloud-native Custom SaaS development in Dubai. We build multi-tenant architectures, API-first designs, and responsive interfaces integrated with Zoho and AI ecosystems.",
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
                "name": "What is custom SaaS development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom SaaS development involves building cloud-native, multi-tenant software tailored to your specific business logic, allowing for complete ownership and scalability without subscription lock-ins."
                }
            },
            {
                "@type": "Question",
                "name": "How does FI Digital integrate AI into SaaS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We integrate LLMs and autonomous agents directly into the SaaS architecture to automate reasoning, data processing, and user interactions."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-saas");
        const gridItems = gsap.utils.toArray(".cap-card");

        // Initial setup to prevent "empty space" glitch
        gsap.set([reveals, gridItems], { opacity: 0, y: 40 });

        // Header and general reveals
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

        // Capabilities grid animation
        gsap.to(gridItems, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".caps-grid",
                start: "top 85%"
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
            {/* Page Header / Hero */}
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
                        src="/images/custom-saas-hero-v2.png" 
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
                    <div className="section-label reveal-saas">Custom SaaS Development</div>
                    <h1 className="reveal-saas" style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        maxWidth: "900px",
                        letterSpacing: "-0.03em"
                    }}>
                        How Does Custom SaaS Development <br />
                        <span style={{ color: "var(--primary)" }}>Drive Scaling for UAE Businesses?</span>
                    </h1>
                    <p className="hero-text" style={{ 
                        fontSize: "1.1rem", 
                        fontWeight: 700,
                        color: "var(--primary)",
                        maxWidth: "850px",
                        marginBottom: "1.5rem",
                        lineHeight: 1.6
                    }}>
                        FI Digital builds cloud-native, multi-tenant SaaS applications for the UAE market, designed to bridge complex business logic with scalable AI-first architectures. By utilizing API-first design and native Zoho integrations, our custom software solutions resolve the limitations of off-the-shelf platforms, enabling Dubai firms to own their intellectual property and automate enterprise-wide operations with 99.1% reliability.
                    </p>
                    <p className="reveal-saas" style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                        color: "var(--text-muted)",
                        maxWidth: "700px",
                        marginBottom: "3rem",
                        lineHeight: 1.7
                    }}>
                        We build cloud-native SaaS applications: multi-tenant architectures, API-first design, responsive interfaces, integrated with your Zoho and AI ecosystem.
                    </p>
                    <div className="reveal-saas" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary">Discuss Your Project</Link>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section style={{ padding: "100px 0" }}>
                <div className="container">
                    <div style={{ marginBottom: "60px" }} className="reveal-saas">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>What are the Essential Features of Modern Custom SaaS in the UAE?</h2>
                    </div>

                    <div className="caps-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.5rem"
                    }}>
                        {capabilities.map((item, idx) => (
                            <div key={idx} className="cap-card group" style={{
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
                                    className="cap-img"
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    inset: 0, 
                                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0) 100%)", 
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
                                        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    <div className="reveal-saas">
                        <div className="section-label">Engineering Excellence</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>What is the Best Architecture for High-Performance UAE SaaS Platforms?</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2.5rem" }}>
                            {[
                                { icon: <Database />, title: "Isolated Data Architecture", desc: "Enterprise-grade multi-tenancy ensures complete data separation for every client." },
                                { icon: <Zap />, title: "API-First Implementation", desc: "Easily connect your SaaS to any 3rd-party tool or build mobile apps on the same core." },
                                { icon: <Layout />, title: "Optimized User Experience", desc: "Lightning-fast interfaces designed for high throughput and user retention." }
                            ].map((feature, idx) => (
                                <div key={idx} style={{ display: "flex", gap: "1.5rem" }}>
                                    <div style={{ color: "var(--primary)", flexShrink: 0 }}>{feature.icon}</div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{feature.title}</h4>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal-saas" style={{ 
                        padding: "3rem", 
                        background: "var(--bg)", 
                        borderRadius: "32px", 
                        border: "1px solid var(--border)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <Image 
                            src="/images/saas-architecture.png" 
                            alt="SaaS Architecture" 
                            fill
                            style={{ objectFit: "cover", opacity: 0.15, zIndex: 0 }}
                        />
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Technology Stack</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                {["React / Next.js", "Node.js", "PostgreSQL", "Redis", "AWS / Azure", "Docker", "Zoho SDK", "OpenAI / Claude"].map((tech, idx) => (
                                    <span key={idx} style={{
                                        padding: "0.5rem 1rem",
                                        background: "var(--hover-bg)",
                                        borderRadius: "100px",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        border: "1px solid var(--border)"
                                    }}>{tech}</span>
                                ))}
                            </div>
                            <div style={{ marginTop: "3rem", padding: "1.5rem", background: "var(--hover-bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                                    <CheckCircle2 size={20} style={{ color: "#22c55e" }} />
                                    <span style={{ fontWeight: 700 }}>Security First</span>
                                </div>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                                    SOC2 compliant coding practices, automated vulnerability scanning, and encrypted data-at-rest as standard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-saas" style={{ 
                        maxWidth: "900px", 
                        margin: "0 auto", 
                        padding: "4rem 2rem", 
                        background: "var(--primary)", 
                        borderRadius: "40px",
                        color: "white",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", filter: "blur(40px)" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>How Can I Start My Custom SaaS Journey in Dubai Today?</h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Join forward-thinking companies in the UAE who have scaled their operations with our custom solutions.
                        </p>
                        <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)" }}>Start a Conversation</Link>
                    </div>
                </div>
            </section>

            {/* SEO / Bottom Links */}
            <section style={{ padding: "60px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/product-studio" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Product Studio</Link>
                    <Link href="/platform" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Our Platform</Link>
                    <Link href="/contact" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700 }}>Contact Us</Link>
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
                    .caps-grid { grid-template-columns: 1fr !important; }
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
            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
