"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Database, 
    Workflow, 
    BrainCircuit, 
    Code2, 
    BarChart3, 
    ChevronRight, 
    ArrowRight,
    Settings,
    Cpu,
    Network,
    ShieldCheck,
    Lock,
    CheckCircle2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// --- SUB-COMPONENTS ---

const TechMeshBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const dots = [];
        const dotCount = 80;
        const maxDist = 200;

        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4
            });
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(59, 130, 246, 0.4)";
            ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";

            dots.forEach((dot, i) => {
                dot.x += dot.vx;
                dot.y += dot.vy;

                if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
                if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const d2 = dots[j];
                    const dist = Math.sqrt((dot.x - d2.x) ** 2 + (dot.y - d2.y) ** 2);
                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                zIndex: 0,
                opacity: 0.4,
                pointerEvents: "none"
            }} 
        />
    );
};

const pillarData = [
    {
        title: "Zoho Agentic AI Integration",
        label: "CRM INTELLIGENCE",
        desc: "We transform Zoho from a static record-keeping tool into an active reasoning engine. Using custom functions, Deluge orchestration, and secure AI loops, we allow your CRM to proactively trigger workflows, analyze customer sentiment in real-time, and execute tasks without human oversight.",
        icon: <Database />,
        bullets: [
            "Real-time Deluge-driven AI reasoning loops",
            "Automatic data cleansing and lead scoring",
            "Native Zoho Desk & People integration"
        ],
        image: "/images/platform/zoho_integration.png",
        link: "/platform/zoho-agentic-ai",
        color: "#f43f5e"
    },
    {
        title: "Workflow Orchestration (n8n)",
        label: "CENTRAL NERVOUS SYSTEM",
        desc: "Fragmented systems are the primary blocker for enterprise AI. We use self-hosted, enterprise-grade n8n instances to serve as the connective tissue between your legacy systems and modern AI agents. This handles error states, multi-step logic, and mission-critical API data flows with deterministic accuracy.",
        icon: <Workflow />,
        bullets: [
            "Self-hosted orchestration for data sovereignty",
            "Complex error handling and retry logic",
            "Connectors for 200+ enterprise applications"
        ],
        image: "/images/platform/n8n_orchestration.png",
        link: "/platform/n8n-orchestration",
        color: "#f97316"
    },
    {
        title: "Multilingual LLMs (Gemini/Claude)",
        label: "BILINGUAL COGNITION",
        desc: "The UAE market requires more than simple translation. We leverage Claude 3.5 Sonnet for logical reasoning and Gemini 1.5 Pro for massive context analysis. Our agents are optimized to understand Levantine, Gulf, and Egyptian dialects, ensuring your AI communicates like a local professional.",
        icon: <BrainCircuit />,
        bullets: [
            "Advanced Arabic dialect awareness (Gulf/Egyptian)",
            "1M+ token context windows for deep research",
            "Safe-AI guardrails for enterprise compliance"
        ],
        image: "/images/platform/llm_intelligence.png",
        link: "/platform/multilingual-llm",
        color: "#3b82f6"
    },
    {
        title: "Custom AI Agent Development",
        label: "PROPRIETARY BRAIN",
        desc: "When off-the-shelf tools fail, we build. We develop custom LangChain frameworks and Python-based RAG (Retrieval-Augmented Generation) pipelines that allow your AI to 'read' your entire company documentation and policy set. This creates an AI that knows your business as well as your senior employees.",
        icon: <Code2 />,
        bullets: [
            "Custom LangChain and Python agent frameworks",
            "Private RAG pipelines for secure data retrieval",
            "Performance-optimized reasoning paths"
        ],
        image: "/images/platform/custom_development.png",
        link: "/platform/custom-ai-development",
        color: "#10b981"
    },
    {
        title: "Data & Analytics Platform",
        label: "ROI VISIBILITY",
        desc: "AI is only useful if it produces measurable results. Our platform includes high-fidelity tracking of agent accuracy, cycle time reduction, and cost-per-resolution. We provide CFO-level dashboards that visualize exactly how much human time is being saved in real-time.",
        icon: <BarChart3 />,
        bullets: [
            "Real-time ROI and accuracy dashboards",
            "Traceability for every AI decision",
            "Predictive intelligence on process bottlenecks"
        ],
        image: "/images/platform/data_analytics.png",
        link: "/platform/data-analytics",
        color: "#8b5cf6"
    }
];

const ArchitectureDiagram = () => {
    const blocks = [
        { id: "zoho", label: "Zoho Ecosystem", x: 10, y: 40, color: "#f43f5e", link: "/platform/zoho-agentic-ai", icon: <Database /> },
        { id: "n8n", label: "n8n Orchestration", x: 35, y: 40, color: "#f97316", link: "/platform/n8n-orchestration", icon: <Workflow /> },
        { id: "llm", label: "Multilingual LLMs", x: 60, y: 25, color: "#3b82f6", link: "/platform/multilingual-llm", icon: <BrainCircuit /> },
        { id: "python", label: "Custom AI Dev", x: 60, y: 55, color: "#10b981", link: "/platform/custom-ai-development", icon: <Code2 /> },
        { id: "data", label: "Data & Analytics", x: 85, y: 40, color: "#8b5cf6", link: "/platform/data-analytics", icon: <BarChart3 /> },
    ];

    return (
        <div style={{ 
            position: "relative", 
            width: "100%", 
            aspectRatio: "2/1", 
            background: "rgba(255,255,255,0.02)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            padding: "2rem",
            marginTop: "4rem",
            overflow: "hidden"
        }}>
            <svg viewBox="0 0 100 80" width="100%" height="100%" style={{ position: "relative", zIndex: 1, overflow: "visible" }}>
                <path d="M 22 40 L 35 40" stroke="var(--border)" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
                <path d="M 47 40 L 60 25" stroke="var(--border)" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
                <path d="M 47 40 L 60 55" stroke="var(--border)" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
                <path d="M 72 25 L 85 40" stroke="var(--border)" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
                <path d="M 72 55 L 85 40" stroke="var(--border)" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />

                {blocks.map((b) => (
                    <foreignObject key={b.id} x={b.x} y={b.y - 10} width="16" height="20">
                        <Link href={b.link}>
                            <div className="diag-block" style={{
                                width: "100%",
                                height: "80%",
                                background: "var(--bg-secondary)",
                                border: `1px solid ${b.color}`,
                                borderRadius: "12px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                color: "white",
                                boxShadow: `0 0 15px ${b.color}20`
                            }}>
                                <div style={{ color: b.color, marginBottom: "4px" }}>{React.cloneElement(b.icon, { size: 14 })}</div>
                                <span style={{ fontSize: "2.8px", fontWeight: 800, textAlign: "center", lineHeight: 1.2, padding: "0 4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{b.label}</span>
                            </div>
                        </Link>
                    </foreignObject>
                ))}
            </svg>
            <div style={{ position: "absolute", top: "2rem", left: "2.5rem", opacity: 0.3, fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "3px" }}>Autonomous Mesh v2.0</div>
            <style jsx>{`
                .diag-block:hover {
                    background: rgba(255,255,255,0.05);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.4), 0 0 20px rgba(59, 130, 246, 0.2);
                }
            `}</style>
        </div>
    );
};

export default function PlatformClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "FI Digital Agentic AI Platform",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Unified Agentic AI architecture for UAE enterprises. Integrates Zoho CRM, n8n orchestration, and bilingual LLMs (Claude/Gemini) with localized Arabic processing.",
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
                "name": "What is the FI Digital AI Platform?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The FI Digital AI Platform is a technical framework or 'Agent Mesh' that combines Zoho's data backbone, n8n orchestration, and frontier LLMs to create autonomous business agents. It is designed specifically for UAE data residency and Arabic-language requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Does the platform support Arabic dialects?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our platform uses a combination of Gemini 1.5 Pro and custom fine-tuning to understand and respond in Gulf, Levantine, and Egyptian dialects, ensuring seamless localized customer and employee interactions."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-item");
        reveals.forEach((el, i) => {
            gsap.from(el, {
                y: 50,
                x: i % 2 === 0 ? -30 : 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        gsap.from(".hero-content", {
            x: -30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out"
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflow: "hidden" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            
            {/* HERO SECTION */}
            <section style={{ 
                minHeight: "90vh", 
                display: "flex", 
                alignItems: "center", 
                position: "relative",
                padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
                background: "var(--bg)"
            }}>
                {/* Background Visual — right-side image with radial fade */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "60%",
                        height: "100%",
                        zIndex: 0,
                        opacity: 0.35,
                        pointerEvents: "none",
                    }}
                >
                    <Image
                        src="/images/platform_hero_professional.png"
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

                {/* Subtle gradient overlay behind text */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background: "linear-gradient(to right, var(--bg) 45%, transparent 80%)",
                        pointerEvents: "none",
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
                    <div style={{ maxWidth: "1000px" }}>
                        <div className="section-label hero-content">PLATFORM ARCHITECTURE</div>
                        <h1 className="hero-content" style={{ 
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "clamp(2.5rem, 6vw, 4rem)", 
                            fontWeight: 900, 
                            lineHeight: 1.1, 
                            marginBottom: "2rem",
                            letterSpacing: "-0.02em",
                            color: "var(--text)"
                        }}>
                            The Technology Behind <span style={{ 
                                background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Autonomous</span> Enterprise Operations
                        </h1>
                        <p className="hero-content" style={{ 
                            fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", 
                            color: "var(--primary)", 
                            fontWeight: 800,
                            lineHeight: 1.6, 
                            maxWidth: "850px",
                            marginBottom: "1.5rem"
                        }}>
                            FI Digital's Agentic AI platform is a unified technical architecture that connects your Zoho data backbone with advanced reasoning layers to automate end-to-step business processes with 99.1% precision in both English and Arabic.
                        </p>
                        <p className="hero-content" style={{ 
                            fontSize: "clamp(1rem, 1.5vw, 1.15rem)", 
                            color: "var(--text-muted)", 
                            lineHeight: 1.7, 
                            maxWidth: "750px",
                            marginBottom: "3rem"
                        }}>
                            Our platform is not a single product. It is an integrated technology mesh that connects your 
                            existing business systems to the most advanced AI capabilities available today. Engineered 
                            for reliability, compliance, and multi-agent reasoning.
                        </p>
                    </div>
                </div>
            </section>

            {/* ZIGZAG CAPABILITIES SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "clamp(4rem, 8vh, 8rem)" }}>
                        <div className="section-label">Engineering Pillars</div>
                        <h2 className="section-title">How does our AI technology stack drive ROI?</h2>
                        <p className="section-desc" style={{ margin: "0 auto", fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}>
                            We build on proven enterprise architecture, ensuring every agent is secure, scalable, and bilingual.
                        </p>
                    </div>

                    <div className="solutions-stack" style={{ display: "flex", flexDirection: "column", gap: "10rem" }}>
                        {pillarData.map((pillar, idx) => (
                            <div
                                key={idx}
                                className={`reveal-item solution-row ${idx % 2 === 0 ? "row-normal" : "row-reverse"}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "clamp(2rem, 5vw, 6rem)"
                                }}
                            >
                                {/* Content Side */}
                                <div className="content-side" style={{ flex: "1 1 450px", minWidth: "280px" }}>
                                    <div style={{
                                        width: "60px",
                                        height: "60px",
                                        background: `${pillar.color}15`,
                                        borderRadius: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: pillar.color,
                                        marginBottom: "2rem",
                                        border: `1px solid ${pillar.color}30`
                                    }}>
                                        {React.cloneElement(pillar.icon, { size: 30 })}
                                    </div>
                                    <div className="section-label" style={{ color: pillar.color, fontSize: "0.8rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>{pillar.label}</div>
                                    <h3 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.02em", color: "var(--text)" }}>{pillar.title}</h3>
                                    <p style={{
                                        fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                                        lineHeight: 1.7,
                                        color: "var(--text-muted)",
                                        marginBottom: "2.5rem"
                                    }}>
                                        {pillar.desc}
                                    </p>

                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                                        {pillar.bullets.map((bullet, i) => (
                                            <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.95rem", fontWeight: 600, color: "var(--text)", alignItems: "center" }}>
                                                <CheckCircle2 size={18} style={{ color: pillar.color, flexShrink: 0 }} />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={pillar.link}
                                        className="btn-link"
                                        style={{
                                            color: pillar.color,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            fontSize: "0.9rem",
                                            fontWeight: 800,
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            textDecoration: "none"
                                        }}
                                    >
                                        Technical Specs <ChevronRight size={16} />
                                    </Link>
                                </div>

                                {/* Image Side */}
                                <div className="visual-side" style={{
                                    flex: "1 1 500px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative"
                                }}>
                                    <div style={{
                                        width: "100%",
                                        borderRadius: "32px",
                                        overflow: "hidden",
                                        border: "1px solid var(--border)",
                                        boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                                        background: "var(--card-bg)"
                                    }}>
                                        <Image 
                                            src={pillar.image} 
                                            alt={pillar.title} 
                                            width={800}
                                            height={600}
                                            style={{ width: "100%", height: "auto", display: "block" }} 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* INFRASTRUCTURE & SOVEREIGNTY SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">BEYOND COMPLIANCE</div>
                        <h2 className="section-title">Designed for the UAE Enterprise</h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
                            Our infrastructure is engineered locally to meet the highest standards of data residency, 
                            UAE cyber-security regulations, and Arabic-first processing.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "3rem" }}>
                        <div className="reveal-item" style={{ 
                            background: "var(--bg-secondary)", 
                            borderRadius: "32px", 
                            overflow: "hidden", 
                            border: "1px solid var(--border)",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                                <Image 
                                    src="/images/platform/security_infrastructure.png" 
                                    alt="UAE Security Infrastructure" 
                                    fill
                                    style={{ objectFit: "cover" }} 
                                />
                            </div>
                            <div style={{ padding: "2.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                                    <div style={{ color: "var(--primary)" }}><ShieldCheck size={24} /></div>
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Data Sovereignty First</h3>
                                </div>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                                    All AI reasoning loops and database interactions are hosted on UAE-shored infrastructure. We ensure zero data leakage to public LLM models through enterprise VPC tunnels and localized vector databases.
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                    <span style={{ padding: "4px 12px", background: "rgba(59,130,246,0.1)", color: "var(--primary)", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>UAE DATA RESIDENCY</span>
                                    <span style={{ padding: "4px 12px", background: "rgba(59,130,246,0.1)", color: "var(--primary)", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>GDPR & DESC COMPLIANT</span>
                                </div>
                            </div>
                        </div>

                        <div className="reveal-item" style={{ 
                            background: "var(--bg-secondary)", 
                            borderRadius: "32px", 
                            overflow: "hidden", 
                            border: "1px solid var(--border)",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                                <Image 
                                    src="/images/platform/global_hub.png" 
                                    alt="Dubai Global AI Hub" 
                                    fill
                                    style={{ objectFit: "cover" }} 
                                />
                            </div>
                            <div style={{ padding: "2.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                                    <div style={{ color: "var(--primary)" }}><Network size={24} /></div>
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Global Hub Connectivity</h3>
                                </div>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                                    Built in Dubai for the world. Our platform bridges local Gulf business logic with global AI intelligence, serving as the central hub for omnichannel enterprise operations across the Middle East.
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                                    <span style={{ padding: "4px 12px", background: "rgba(59,130,246,0.1)", color: "var(--primary)", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>DXB TECH HUB</span>
                                    <span style={{ padding: "4px 12px", background: "rgba(59,130,246,0.1)", color: "var(--primary)", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700 }}>OMNICHANNEL READY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 1.5rem", position: "relative" }}>
                 <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(59, 130, 246, 0.03), transparent)", pointerEvents: "none" }} />
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div className="reveal-item" style={{ 
                        background: "var(--bg-secondary)", 
                        padding: "5rem 3rem", 
                        borderRadius: "48px", 
                        border: "1px solid var(--border)",
                        textAlign: "center",
                        maxWidth: "1100px",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 1
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>Ready to Architect Your AI Future?</h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem", lineHeight: 1.6 }}>
                            Download our technical whitepaper or book a consultation with our architecture team to 
                            map your current tech stack against autonomous capabilities.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem" }}>
                                Request Technical Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
            <style jsx>{`
                .solutions-stack {
                    gap: 10rem;
                }
                .row-normal { flex-direction: row; }
                .row-reverse { flex-direction: row-reverse; }

                @media (max-width: 1024px) {
                    .solutions-stack {
                        gap: 6rem;
                    }
                    .solution-row {
                        flex-direction: column !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    .content-side {
                        flex: 1 1 auto !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .visual-side {
                        flex: 1 1 auto !important;
                        width: 100%;
                    }
                    .content-side ul {
                        align-items: center;
                        text-align: left;
                    }
                }
            `}</style>
        </div>
    );
}
