"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Database, Brain, MemoryStick, Cog, Terminal, Settings } from 'lucide-react';

export default function CustomAIDevelopmentClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom AI Agent Development",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Tailored AI agent development using LangChain and Python for UAE businesses. Build autonomous agents with RAG, long-term memory, and multi-step reasoning.",
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
                "name": "What technologies do you use for custom AI agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We primarily use LangChain and Python, combined with advanced RAG (Retrieval-Augmented Generation) and long-term memory frameworks to build agents that solve complex business logic."
                }
            },
            {
                "@type": "Question",
                "name": "How are custom AI agents different from standard chatbots?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike standard chatbots, our custom agents are autonomous, capable of multi-step reasoning, and integrated with internal APIs and databases to perform real business actions."
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
                        src="/images/platform/custom_development.png" 
                        alt="Custom AI Agent Development" 
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
                        <div className="section-label hero-text">TAILORED LOGIC</div>
                        <h1 className="hero-text" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             How Does Custom AI Development <br />
                             <span className="text-gradient">Solve Complex UAE Business Challenges?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital specializes in custom AI development for the UAE market, building autonomous agents that bridge advanced reasoning with proprietary business logic. By utilizing LangChain, Python, and sophisticated RAG architectures, our tailored digital workers resolve 90% of complex operational inquiries while maintaining deep contextual memory across multi-step enterprise workflows.
                        </p>
                        <p className="hero-text" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            Using LangChain and Python, we develop agents tailored to your business: RAG for proprietary data, 
                            long-term memory, multi-step reasoning, and tool-using agents.
                        </p>
                        
                        <div className="hero-text" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Discuss Your Custom AI
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
                        <h2 className="section-title">What is the Best Strategy for Custom AI Development in the UAE?</h2>
                    </div>

                    <div className="capabilities-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                        gap: "2rem"
                    }}>
                        {[
                            { title: "RAG Knowledge Base", desc: "RAG-powered knowledge agents using your highly-secure internal and proprietary documents to ground reasoning.", icon: <Database /> },
                            { title: "Multi-Step Reasoning", desc: "Advanced logic agents capable of breaking down, planning, and executing complex autonomous tasks sequentially.", icon: <Brain /> },
                            { title: "Long-Term Context", desc: "Memory-enabled agents that store historical information continuously to build deep client and process context over time.", icon: <MemoryStick /> },
                            { title: "Tool & API Usage", desc: "Autonomous tool-using agents configured to actively call custom APIs, query SQL databases, and interact natively with internal apps.", icon: <Cog /> },
                            { title: "Production Reliability", desc: "Complete robust evaluation and monitoring frameworks ensuring your AI behaves safely and reliably in live production.", icon: <Settings /> }
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
