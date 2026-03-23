"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Workflow, CheckCircle2, Repeat, Server, ShieldCheck, Zap } from 'lucide-react';

export default function N8nOrchestrationClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Enterprise Workflow Orchestration",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Enterprise-grade workflow orchestration with n8n for UAE businesses. Connect 400+ apps and build intelligent AI-driven workflows.",
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
                "name": "What is n8n orchestration used for in AI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "n8n serves as the nervous system for AI agents, connecting them to 400+ applications, CRMs, and databases to automate complex multi-step business processes."
                }
            },
            {
                "@type": "Question",
                "name": "How does FI Digital use n8n for UAE clients?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use n8n as the backbone for every AI solution, enabling intelligent routing, data synchronization, and event-driven automation across the enterprise ecosystem."
                }
            }
        ]
    };

    return (
        <main style={{ background: "var(--bg)", color: "var(--text)", paddingBottom: "100px" }}>
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
                position: "relative",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
                overflow: "hidden"
            }}>
                <div className="hero-img-container" style={{
                    position: "absolute",
                    top: 0, right: 0, width: "60%", height: "100%",
                    zIndex: 0, opacity: 0.4, pointerEvents: "none"
                }}>
                    <Image 
                        src="/images/platform/n8n_orchestration.png" 
                        alt="n8n Enterprise Workflow Automation" 
                        fill
                        style={{ 
                            objectFit: "cover",
                            maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                            WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)"
                        }}
                    />
                </div>

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
                    <div style={{ maxWidth: "850px" }}>
                        <div className="section-label hero-text">ENTERPRISE ORCHESTRATION</div>
                        <h1 className="hero-text" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             How Does n8n Orchestration <br />
                             <span className="text-gradient">Power AI Workflows in the UAE?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital leverages n8n as the enterprise-grade orchestration layer for UAE businesses, connecting 400+ applications into intelligent AI-driven workflows. By bridging diverse LLMs with Zoho CRM, WhatsApp, and legacy databases, our n8n implementations provide the nervous system required for autonomous agents to execute complex, multi-step operations with 99.1% accuracy.
                        </p>
                        <p className="hero-text" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            Enterprise Workflow Orchestration with n8n — The Backbone of Your AI Operations.
                            Every AI agent needs a nervous system. n8n is an open-source workflow orchestration platform connecting 400+ applications. 
                            We use n8n as the backbone of every AI solution we build.
                        </p>
                        
                        <div className="hero-text" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                See n8n in Action
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY SOLUTIONS */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label">CAPABILITIES</div>
                        <h2 className="section-title">What are the Benefits of n8n for UAE Agentic AI Workflows?</h2>
                    </div>

                    <div className="capabilities-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                        gap: "2rem"
                    }}>
                        {[
                            { title: "AI Agent Workflows", desc: "Intelligent routing between WhatsApp, diverse LLMs, and CRM environments.", icon: <Workflow /> },
                            { title: "Data Synchronization", desc: "Live integration and harmony across Zoho, e-commerce, and accounting systems.", icon: <Repeat /> },
                            { title: "Approval Chains", desc: "Multi-step complex approval chains for rapid procurement and reliable documents.", icon: <CheckCircle2 /> },
                            { title: "Event-Driven Automation", desc: "Instant automation triggered securely from CRM events, key emails, and critical API calls.", icon: <Zap /> },
                            { title: "Reporting Pipelines", desc: "Aggregated reporting pipelines seamlessly pulling from multiple sources to single dashboards.", icon: <Server /> },
                            { title: "Error Handling", desc: "Bulletproof error handling featuring retry loops, real-time alerting, and fallback routing.", icon: <ShieldCheck /> }
                        ].map((item, i) => (
                            <div key={i} className="capability-card" style={{
                                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                                background: "var(--bg)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                transition: "all 0.3s ease",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%"
                            }}>
                                <div className="card-icon" style={{ 
                                    width: "64px",
                                    height: "64px",
                                    background: "rgba(59, 130, 246, 0.1)",
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary)", 
                                    marginBottom: "1.5rem" 
                                }}>
                                    {React.cloneElement(item.icon, { size: 36, strokeWidth: 2.5 })}
                                </div>
                                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style jsx>{`
                @media (max-width: 991px) {
                    section { padding: 60px 1.5rem !important; }
                    .container { padding: 0 !important; }
                }
                @media (max-width: 768px) {
                    section:first-of-type { 
                        min-height: auto !important; 
                        padding-top: 120px !important;
                        padding-bottom: 60px !important;
                        display: block !important;
                    }
                    .hero-img-container {
                        position: relative !important;
                        width: 100% !important;
                        height: 250px !important;
                        margin-bottom: 2rem;
                        opacity: 1 !important;
                        right: auto !important;
                    }
                    .hero-img-container img {
                        mask-image: none !important;
                        -webkit-mask-image: none !important;
                        border-radius: 24px;
                    }
                    h1 { text-align: center; }
                    p { text-align: center; margin-left: auto; margin-right: auto; }
                    .hero-text { display: flex; flex-direction: column; align-items: center; text-align: center; }
                    .capabilities-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
                    .capability-card { align-items: center; text-align: center; padding: 2rem !important; }
                    .card-icon { margin-bottom: 1rem !important; }
                }
            `}</style>
            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </main>
    );
}
