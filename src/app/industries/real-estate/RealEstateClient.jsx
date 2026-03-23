"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    CheckCircle2, 
    ArrowRight,
    Search,
    Zap,
    MessageSquare,
    Home,
    Calendar,
    LineChart,
    Shield,
    Users
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
    {
        title: "WhatsApp Lead Qualification",
        desc: "Instant qualification in Arabic and English, capturing buyer preferences before a human agent even dials.",
        icon: <MessageSquare size={24} />
    },
    {
        title: "Real-Time Inventory Matching",
        desc: "AI instantly matches new leads with available inventory in Zoho CRM based on budget, area, and type.",
        icon: <Home size={24} />
    },
    {
        title: "Automated Viewing Scheduling",
        desc: "Seamlessly coordinate viewings with calendar sync, sending automated reminders to both agent and client.",
        icon: <Calendar size={24} />
    },
    {
        title: "Pipeline Analytics",
        desc: "Track conversion rates by lead source and agent performance with deep-dive ROI analytics.",
        icon: <LineChart size={24} />
    },
    {
        title: "Off-Plan Payment Tools",
        desc: "Automated payment plan calculators and ROI projections for investors interested in off-plan projects.",
        icon: <Zap size={24} />
    },
    {
        title: "Post-Sale Coordination",
        desc: "Streamline handover and snagging coordination with automated task management and notifications.",
        icon: <Shield size={24} />
    }
];

const QuickWinCalculator = () => {
    const [leads, setLeads] = useState(500);
    const [conversionRate, setConversionRate] = useState(2);
    
    const [results, setResults] = useState({
        manualHours: 0,
        aiHours: 0,
        potentialRevenue: 0
    });

    useEffect(() => {
        const manualHours = leads * 0.5; // 30 mins per lead
        const aiHours = leads * 0.05; // 3 mins per lead
        const potentialRevenue = (leads * (conversionRate / 100)) * 50000; // Avg 50k commission

        setResults({
            manualHours,
            aiHours,
            potentialRevenue
        });
    }, [leads, conversionRate]);

    return (
        <div style={{ 
            background: "linear-gradient(145deg, var(--bg) 0%, var(--bg-secondary) 100%)", 
            padding: "clamp(1.5rem, 5vw, 2.5rem)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            minHeight: "550px", // Stable height to prevent jumping
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        }}>
            <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Quick Win Calculator</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Estimate your AI-driven revenue recovery</p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "2.5rem" }}>
                {/* Leads Input */}
                <div className="input-group">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.8rem" }}>
                        <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>Leads Per Month</span>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                            <span style={{ color: "var(--primary)", fontSize: "1.4rem", fontWeight: 800 }}>{leads.toLocaleString()}</span>
                        </div>
                    </div>
                    <input 
                        type="range" 
                        min="50" 
                        max="2000" 
                        value={leads} 
                        onChange={(e) => setLeads(parseInt(e.target.value))}
                        style={{ 
                            width: "100%", 
                            accentColor: "var(--primary)",
                            cursor: "pointer",
                            height: "6px"
                        }}
                    />
                </div>
                
                {/* Conversion Rate Input */}
                <div className="input-group">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.8rem" }}>
                        <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>Conversion Rate</span>
                        <span style={{ color: "var(--primary)", fontSize: "1.4rem", fontWeight: 800 }}>{conversionRate}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        step="0.5"
                        value={conversionRate} 
                        onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                        style={{ 
                            width: "100%", 
                            accentColor: "var(--primary)",
                            cursor: "pointer",
                            height: "6px"
                        }}
                    />
                </div>
            </div>

            {/* Results Grid */}
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: "1rem", 
                marginTop: "auto" 
            }}>
                <div style={{ 
                    padding: "1.25rem", 
                    background: "rgba(239, 68, 68, 0.05)", 
                    borderRadius: "20px", 
                    border: "1px solid rgba(239, 68, 68, 0.1)",
                    textAlign: "center" 
                }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>Manual Hours</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ef4444" }}>{results.manualHours.toLocaleString()}h</div>
                </div>
                <div style={{ 
                    padding: "1.25rem", 
                    background: "rgba(34, 197, 94, 0.05)", 
                    borderRadius: "20px", 
                    border: "1px solid rgba(34, 197, 94, 0.1)",
                    textAlign: "center" 
                }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>AI Setup</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#22c55e" }}>{results.aiHours.toLocaleString()}h</div>
                </div>
                
                <div style={{ 
                    gridColumn: "1 / -1", 
                    padding: "1.75rem", 
                    background: "var(--primary)", 
                    borderRadius: "24px", 
                    color: "white", 
                    textAlign: "center",
                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: "120px"
                }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, opacity: 0.9, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>Potential Commission Recovery</div>
                    <div style={{ 
                        fontSize: "clamp(1.5rem, 5vw, 2.25rem)", 
                        fontWeight: 900,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}>
                        AED {results.potentialRevenue.toLocaleString()}
                    </div>
                </div>
            </div>
            
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1.5rem", textAlign: "center", fontStyle: "italic" }}>
                *Based on Dubai market averages. Results may vary by agency.
            </p>
        </div>
    );
};

export default function RealEstateClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Real Estate AI Automation",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Bilingual AI agents for lead qualification, property matching, and automated viewing scheduling for Dubai real estate agencies.",
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
                "name": "How does AI help real estate agents in Dubai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI agents provide instant lead qualification on WhatsApp, automate viewing scheduling, and match buyers with inventory in Zoho CRM, ensuring 24/7 engagement."
                }
            },
            {
                "@type": "Question",
                "name": "Can the AI handle Arabic inquiries?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI agents are fully bilingual, supporting both Arabic and English for seamless communication with the UAE's diverse buyer pool."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-re");
        
        gsap.set(reveals, { opacity: 0, y: 30 });

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
                        src="/images/industries/real-estate-hero.png" 
                        alt="Dubai Real Estate" 
                        fill
                        style={{ 
                            objectFit: "cover",
                            maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                            WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)"
                        }}
                    />
                </div>

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
                    <div style={{ maxWidth: "800px" }}>
                        <div className="section-label reveal-re">What are the Key AI Capabilities Driving 24/7 Lead Support for Dubai Real Estate?</div>
                        <h1 className="reveal-re" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             How Does AI Modernize <br />
                             <span className="text-gradient">Real Estate Operations in the UAE?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital deploys specialized AI agents for Dubai real estate that automate 24/7 WhatsApp lead qualification, automated viewing scheduling, and instant Zoho CRM property matching. By bridging bilingual reasoning with deep portal integrations, our digital workers resolve 90% of buyer inquiries while reducing non-productive agent time by 40% in high-volume off-plan and secondary markets.
                        </p>
                        <p className="reveal-re" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            Dubai's property market has 15,000+ active agents competing for buyer attention. The agencies that win 
                            respond fastest and qualify smartest. Our AI solutions enable instant lead qualification, automated 
                            property matching, viewing scheduling, and full CRM integration.
                        </p>
                        <div className="reveal-re" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                See How AI Transforms Real Estate
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARKET STATS */}
            <section style={{ padding: "80px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem" }}>
                        {[
                            { value: "400k+", label: "Avg Monthly Transactions" },
                            { value: "65%", label: "Buyer Contact via WhatsApp" },
                            { value: "5 Mins", label: "Critical Response Window" },
                            { value: "22.3%", label: "Market Growth (2025 YoY)" }
                        ].map((stat, i) => (
                            <div key={i} className="reveal-re" style={{ textAlign: "center" }}>
                                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--primary)", marginBottom: "0.5rem" }}>{stat.value}</div>
                                <div style={{ color: "var(--text-muted)", fontWeight: 600, fontSize: "0.9rem" }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY SOLUTIONS */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ marginBottom: "60px", textAlign: "center" }} className="reveal-re">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title">What is the Smart Property Strategy for UAE Developers?</h2>
                    </div>

                    <div className="solutions-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="reveal-re" style={{
                                padding: "2.5rem",
                                background: "var(--card-bg)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                transition: "all 0.3s ease"
                            }}>
                                <div style={{
                                    width: "48px", height: "48px", background: "rgba(59, 130, 246, 0.1)",
                                    borderRadius: "12px", display: "flex", alignItems: "center",
                                    justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem"
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALCULATOR & CTA SECTION */}
            <section style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="calculator-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
                        <div className="reveal-re">
                            <div className="section-label">ROI CALCULATOR</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>Quantify the AI Advantage</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                                See how much revenue your agency is leaving on the table due to manual lead handling. Our calculator 
                                uses current UAE market data to estimate your potential commission recovery.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {[
                                    "Reduce lead response time from hours to seconds",
                                    "Decrease non-productive agent time by 40%",
                                    "Ensure 100% of leads are qualified & matched instantly",
                                    "Deep integration with Zoho CRM & WhatsApp"
                                ].map((tick, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                                        <span style={{ fontWeight: 600 }}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-re">
                            <QuickWinCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-re" style={{ 
                        maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", 
                        background: "var(--primary)", borderRadius: "40px", color: "white"
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                            How Do I Scale My Real Estate Operations in 6 Weeks with AI?
                        </h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Join the UAE's fastest-growing agencies using high-performance AI agents.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 2.5rem" }}>
                            Start Your AI Transformation
                        </Link>
                    </div>
                </div>
            </section>

            {/* NAVIGATION LINKS */}
            <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/industries" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>All Industries</Link>
                    <Link href="/digital-workers" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Digital Workers</Link>
                    <Link href="/platform" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Our Platform</Link>
                </div>
            </section>

            <style jsx>{`
                @media (max-width: 991px) {
                    section { padding: 60px 1.5rem !important; }
                    .container { padding: 0 !important; }
                    h1 { font-size: 3rem !important; }
                    .grid-stats { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; }
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
                    h1 { font-size: 2.5rem !important; text-align: center; }
                    p { text-align: center; margin-left: auto; margin-right: auto; }
                    .reveal-re { display: flex; flex-direction: column; align-items: center; text-align: center; }
                    .grid-stats { grid-template-columns: 1fr !important; }
                    .solutions-grid { grid-template-columns: 1fr !important; }
                    .calculator-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
                    .calculator-grid h2 { text-align: center !important; }
                    .calculator-grid p { text-align: center !important; }
                    .calc-results-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    );
}
