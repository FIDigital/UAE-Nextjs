"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Mail, 
    MessageCircle, 
    MessageSquare, 
    Share2, 
    CheckCircle2, 
    XCircle, 
    ArrowRight,
    Headset,
    Languages,
    Zap,
    TrendingUp,
    Database,
    BarChart3,
    BrainCircuit,
    Clock,
    ShieldCheck
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SectionHeader = ({ title, label, color = "var(--primary)" }) => (
    <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div className="section-label" style={{ color }}>{label}</div>
        <h2 className="section-title">{title}</h2>
    </div>
);


export default function CustomerServiceAgentsClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Customer Service Agent Deployment",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Bilingual AI agents for customer support automation, ticket triage, and multi-channel resolution integrated with Zoho Desk in the UAE.",
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
                "name": "How many support tickets can an AI agent resolve autonomously?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI agents typically resolve 90% of common support inquiries (order status, billing, general FAQs) without human intervention."
                }
            },
            {
                "@type": "Question",
                "name": "Does the AI support Arabic for UAE customers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our agents are built with bilingual intelligence supporting Gulf, Levantine, and Egyptian dialects for seamless Arabic-English support."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal");
        reveals.forEach((el) => {
            gsap.from(el, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
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
                padding: "clamp(120px, 15vh, 180px) 1.5rem 80px",
                background: "var(--bg)",
                overflow: "hidden"
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
                        opacity: 0.3,
                        pointerEvents: "none",
                    }}
                >
                    <Image
                        src="/images/customer_service_hero_v2.png"
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
                
                <div className="container" style={{ maxWidth: "1250px", position: "relative", zIndex: 1 }}>
                    <div className="reveal" style={{ textAlign: "left", maxWidth: "900px" }}>
                        <div className="section-label" style={{ marginBottom: "1rem" }}>AI DIGITAL WORKFORCE</div>
                        <h1 style={{ 
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)", 
                            fontWeight: 900, 
                            marginBottom: "1.5rem", 
                            lineHeight: 1.1, 
                            letterSpacing: "-0.02em",
                            color: "var(--text)"
                        }}>
                            How Does AI Customer Service Scale for UAE Enterprises <span style={{ 
                                background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>Without Hiring?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital deploys AI customer service agents for Dubai businesses that resolve 90% of support tickets autonomously. By integrating Zoho Desk with bilingual LLMs (Claude/Gemini), our digital workers provide 24/7 multi-channel support in Arabic and English with sub-4 minute response times and Day 1 VAT compliance.
                        </p>
                        <h2 style={{ 
                            fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)", 
                            fontWeight: 500, 
                            color: "var(--text-muted)", 
                            maxWidth: "900px", 
                            lineHeight: 1.6, 
                            marginBottom: "2rem" 
                        }}>
                            AI Agents That Resolve, Route, and Follow Up in Arabic and English, Across Every Channel
                        </h2>
                        <div style={{ 
                            fontSize: "clamp(1rem, 1.2vw, 1.1rem)", 
                            lineHeight: 1.8, 
                            color: "var(--text-secondary)", 
                            maxWidth: "800px", 
                            marginBottom: "3rem",
                            opacity: 0.9 
                        }}>
                            Your customer service team is drowning. Tickets come in from email, WhatsApp, live chat, and social 
                            media often in Arabic and English interchangeably. Response times slip, customers get frustrated, and 
                            your best agents burn out on repetitive questions. Our Customer Service Agents handle the front line, 
                            resolving common issues autonomously using your knowledge base and Zoho Desk history.
                        </div>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 3rem", fontSize: "1.1rem" }}>
                                Deploy Your AI Team <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* KEY SOLUTIONS SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "rgba(255,255,255,0.01)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="What Key AI Capabilities Drive 24/7 Support for Dubai Businesses?" label="CORE FEATURES" />
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", 
                        gap: "2rem" 
                    }}>
                        {[
                            { title: "Ticket Triage", icon: Headset, desc: "Automated ticket triage and categorization across all channels." },
                            { title: "Instant Resolution", icon: Zap, desc: "Instant resolution for common queries: order status, billing, policies." },
                            { title: "Bilingual Intelligence", icon: Languages, desc: "Arabic-English support with Gulf, Levantine, and Egyptian dialect awareness." },
                            { title: "Smart Escalation", icon: Share2, desc: "Smart escalation with full context to human agents via Zoho Desk." },
                            { title: "CSAT Automation", icon: TrendingUp, desc: "Post-resolution follow-up: automated CSAT surveys and feedback collection." },
                            { title: "Continuous Learning", icon: BrainCircuit, desc: "Knowledge base learning: the agent gets smarter over time from resolved tickets." }
                        ].map((item, i) => (
                            <div key={i} className="reveal card-hover" style={{ 
                                padding: "2.5rem", 
                                background: "var(--bg-secondary)", 
                                borderRadius: "24px", 
                                border: "1px solid var(--border)", 
                                height: "100%",
                                transition: "all 0.4s ease",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left"
                            }}>
                                <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
                                    <item.icon size={32} />
                                </div>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1rem" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    .card-hover:hover {
                        transform: translateY(-5px);
                        border-color: var(--primary);
                        box-shadow: 0 15px 30px rgba(0,0,0,0.2);
                        background: rgba(255,255,255,0.03);
                    }
                `}</style>
            </section>



            {/* FINAL CTA SECTION */}
            <section style={{ padding: "100px 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
                    <div style={{ width: "1000px", height: "1000px", background: "var(--primary)", filter: "blur(200px)", borderRadius: "50%" }} />
                </div>
                
                <div className="container" style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
                    <div className="reveal">
                        <SectionHeader title="How Do I Scale My Support Operations in 6 Weeks?" label="DEPLOY IN 6 WEEKS" />
                        <p style={{ 
                            fontSize: "clamp(1rem, 1.2vw, 1.2rem)", 
                            lineHeight: 1.8, 
                            color: "var(--text-muted)", 
                            marginBottom: "3rem",
                            maxWidth: "700px",
                            margin: "0 auto 3rem"
                        }}>
                            Stop letting your team drown in repetitive tickets. Deploy an AI Customer Service team that resolves more, 
                            faster, and in the language your customers actually speak.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", width: "100%" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ 
                                padding: "1rem clamp(1.5rem, 4vw, 2.5rem)", 
                                fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                                textAlign: "center",
                                minWidth: "min(304px, 100%)"
                            }}>
                                Deploy Your AI Customer Service Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
