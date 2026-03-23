"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Database, TrendingUp, BellRing, LineChart, FileText } from 'lucide-react';

export default function DataAnalyticsClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI-Powered Data Analytics",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Enterprise data analytics and BI solutions for UAE businesses. Unify data sources, build intelligent dashboards, and implement AI-powered forecasting.",
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
                "name": "How does AI improve business data analytics?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI adds anomaly detection, predictive forecasting, and automated insight generation to traditional BI, allowing UAE firms to identify trends and risks before they impact the bottom line."
                }
            },
            {
                "@type": "Question",
                "name": "Can you unify data from Zoho and other apps?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build unified data layers that integrate Zoho, e-commerce, marketing, and finance software into single source-of-truth executive dashboards."
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
                        src="/images/platform/data_analytics.png" 
                        alt="Business Intelligence & Data Analytics" 
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
                        <div className="section-label hero-text">BUSINESS INTELLIGENCE</div>
                        <h1 className="hero-text" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             How Does AI-Powered Data Analytics <br />
                             <span className="text-gradient">Transform UAE Business Intelligence?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital delivers AI-driven data analytics for the UAE market, unifying fragmented data silos into intelligent, predictive business intelligence ecosystems. By bridging real-time data ingestion with advanced anomaly detection and sales forecasting, our analytics solutions resolve the visibility gap for Dubai-based executives, enabling confident, data-backed decision-making with 99.1% reporting accuracy.
                        </p>
                        <p className="hero-text" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            Unify data sources, build intelligent dashboards, and add AI-powered anomaly detection and forecasting.
                            Turn your data silos into a goldmine of business intelligence.
                        </p>
                        
                        <div className="hero-text" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Build Your Data Strategy
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
                        <h2 className="section-title">What are the Key Benefits of AI-Driven Data Analytics for Dubai Firms?</h2>
                    </div>

                    <div className="capabilities-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                        gap: "2rem"
                    }}>
                        {[
                            { title: "Unified Data Layer", desc: "A connected unified data layer integrating Zoho, e-commerce stores, marketing channels, and finance software.", icon: <Database /> },
                            { title: "Executive Dashboards", desc: "Live high-level executive dashboards providing precise real-time KPI visibility and business tracking.", icon: <TrendingUp /> },
                            { title: "Anomaly Detection", desc: "Active AI-powered anomaly detection monitoring live metrics for abrupt deviations with automatic alerting.", icon: <BellRing /> },
                            { title: "Predictive Analytics", desc: "Advanced forecasting systems generating predictive sales pipelines, inventory demand prediction, and cash flow projecting.", icon: <LineChart /> },
                            { title: "Automated Reporting", desc: "Beautiful automated performance reporting delivered directly to stakeholders weekly, monthly, and quarterly.", icon: <FileText /> }
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
