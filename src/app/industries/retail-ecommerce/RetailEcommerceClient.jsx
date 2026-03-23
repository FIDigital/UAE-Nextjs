"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    CheckCircle2, 
    MessageSquare,
    ShoppingBag,
    Package,
    Users,
    TrendingUp,
    RefreshCw,
    Smartphone,
    Zap
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
    {
        title: "WhatsApp Commerce",
        desc: "Enable customers to browse products, place orders, and make payments directly via WhatsApp in Arabic and English.",
        icon: <ShoppingBag size={24} />
    },
    {
        title: "AI Inventory Forecasting",
        desc: "Predict demand patterns across your UAE stores and warehouse to optimize stock levels via Zoho Inventory.",
        icon: <Package size={24} />
    },
    {
        title: "Customer 360 View",
        desc: "Unify online and offline data in Zoho CRM to provide personalized recommendations and VIP treatment.",
        icon: <Users size={24} />
    },
    {
        title: "Automated Re-engagement",
        desc: "AI triggers personalized WhatsApp or email campaigns when a customer hasn't purchased in their usual window.",
        icon: <RefreshCw size={24} />
    },
    {
        title: "Dynamic Pricing",
        desc: "Optimize margins with AI recommendations based on real-time competitor data and local demand surges.",
        icon: <TrendingUp size={24} />
    },
    {
        title: "Returns Automation",
        desc: "Streamline the exchange and returns process with an AI-guided workflow that reduces customer frustration.",
        icon: <Zap size={24} />
    }
];

const RetailCalculator = () => {
    const [monthlyRevenue, setMonthlyRevenue] = useState(1000000);
    const [abandonmentRate, setAbandonmentRate] = useState(70);
    
    const [results, setResults] = useState({
        recoveredRevenue: 0,
        efficiencyGain: 0
    });

    useEffect(() => {
        // Assume AI recovers 15% of abandoned carts/leads
        const recovered = monthlyRevenue * (abandonmentRate / 100) * 0.15;
        // Assume 25% efficiency gain in support/ops
        const efficiency = monthlyRevenue * 0.05;

        setResults({
            recoveredRevenue: recovered,
            efficiencyGain: efficiency
        });
    }, [monthlyRevenue, abandonmentRate]);

    return (
        <div style={{ 
            background: "var(--bg)", 
            padding: "clamp(1.5rem, 5vw, 2.5rem)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Commerce Recovery Calculator</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Monthly Revenue (AED)</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <input 
                        type="range" 
                        min="100000" 
                        max="5000000" 
                        step="100000"
                        value={monthlyRevenue} 
                        onChange={(e) => setMonthlyRevenue(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
                
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Cart/Lead Abandonment Rate (%)</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{abandonmentRate}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="20" 
                        max="90" 
                        value={abandonmentRate} 
                        onChange={(e) => setAbandonmentRate(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
            </div>

            <div className="calc-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem", background: "var(--primary)", borderRadius: "20px", color: "white", textAlign: "center" }}>
                    <div style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "0.5rem" }}>Est. Monthly Revenue Recovery</div>
                    <div style={{ fontSize: "2rem", fontWeight: 900 }}>AED {results.recoveredRevenue.toLocaleString()}</div>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Operational Cost Savings</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>AED {results.efficiencyGain.toLocaleString()}</div>
                </div>
            </div>
            
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.5rem", textAlign: "center" }}>
                *Based on UAE e-commerce benchmarks. Actual results vary by industry niche.
            </p>
        </div>
    );
};

export default function RetailEcommerceClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Retail & E-commerce AI Automation",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Bilingual AI agents for WhatsApp commerce, inventory forecasting, and automated customer re-engagement for UAE retail brands.",
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
                "name": "How does AI help UAE retail brands scale?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI agents automate customer engagement on WhatsApp, identify personalized shopping patterns, and optimize inventory via Zoho, increasing conversion rates by up to 48%."
                }
            },
            {
                "@type": "Question",
                "name": "Can customers shop directly on WhatsApp?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI agents allow customers to browse, order, and pay directly via WhatsApp in both Arabic and English."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-retail");
        gsap.set(reveals, { opacity: 0, y: 30 });
        reveals.forEach((item) => {
            gsap.to(item, {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: item, start: "top 90%" }
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
                        src="/images/industries/retail-hero.png" 
                        alt="Dubai Retail & E-Commerce" 
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
                        <div className="section-label reveal-retail">What are the Key AI Capabilities Driving 24/7 Shopping Support in Dubai?</div>
                        <h1 className="reveal-retail" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             How Does AI Modernize <br />
                             <span className="text-gradient">Retail & E-commerce Operations in the UAE?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital deploys specialized AI agents for UAE retail brands that automate WhatsApp commerce, inventory forecasting, and personalized customer re-engagement. By bridging real-time demand signals with Zoho Inventory and CRM, our digital workers recover 15% of abandoned carts while resolving 90% of shopping inquiries in Arabic and English autonomously.
                        </p>
                        <p className="reveal-retail" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            UAE retail customers expect instant WhatsApp responses, same-day delivery, and personalized 
                            recommendations. Our AI solutions help you sell smarter: WhatsApp commerce, inventory intelligence, 
                            customer 360 views, and automated re-engagement.
                        </p>
                        <div className="reveal-retail" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Sell Smarter with AI
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
                            { value: "$10B+", label: "UAE E-commerce Market (2025)" },
                            { value: "48%", label: "Conversion Lift via Personalization" },
                            { value: "90%+", label: "WhatsApp Open Rates in UAE" },
                            { value: "15-min", label: "Expectation for Support Reply" }
                        ].map((stat, i) => (
                            <div key={i} className="reveal-retail" style={{ textAlign: "center" }}>
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
                    <div style={{ marginBottom: "60px", textAlign: "center" }} className="reveal-retail">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title">What is the Smart Retail Strategy for UAE E-commerce Brands?</h2>
                    </div>

                    <div className="solutions-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="reveal-retail" style={{
                                padding: "2.5rem",
                                background: "var(--card-bg)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                transition: "all 0.3s ease"
                            }}>
                                <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>{item.icon}</div>
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
                        <div className="reveal-retail">
                            <div className="section-label">REVENUE RECOVERY</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>Stop Losing Customers at the Finish Line</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                                High abandonment rates are the silent killer of UAE retail. See how much potential revenue you can 
                                recover by implementing automated re-engagement and WhatsApp commerce.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {[
                                    "Automated abandoned cart recovery on WhatsApp",
                                    "Hyper-personalized product recommendations",
                                    "24/7 AI support in Arabic & English",
                                    "Direct integration with Zoho Commerce & Inventory"
                                ].map((tick, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                                        <span style={{ fontWeight: 600 }}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-retail">
                            <RetailCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-retail" style={{ 
                        maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", 
                        background: "var(--primary)", borderRadius: "40px", color: "white"
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                            How Do I Scale My E-commerce Operations in 6 Weeks with AI?
                        </h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Transform your retail brand into an AI-powered commerce engine.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 2.5rem" }}>
                            Start Selling Smarter
                        </Link>
                    </div>
                </div>
            </section>

            {/* NAVIGATION LINKS */}
            <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/industries" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>All Industries</Link>
                    <Link href="/platform/zoho-agentic-ai" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Zoho AI</Link>
                    <Link href="/contact" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700 }}>Contact Us</Link>
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
                    .reveal-retail { display: flex; flex-direction: column; align-items: center; text-align: center; }
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
