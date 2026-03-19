"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    CheckCircle2, 
    MessageSquare,
    Utensils,
    Hotel,
    Calendar,
    Star,
    ShoppingCart,
    Zap,
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
        title: "WhatsApp Reservation Agent",
        desc: "Automated booking agent that handles reservations, table preferences, and special requests 24/7 in multiple languages.",
        icon: <Calendar size={24} />
    },
    {
        title: "AI Concierge",
        desc: "Instant responses to guest questions about amenities, local recommendations, and hotel services via WhatsApp or web-chat.",
        icon: <Hotel size={24} />
    },
    {
        title: "Menu & Pricing Optimization",
        desc: "AI analysis of sales data to recommend menu adjustments and dynamic pricing strategies for maximum profitability.",
        icon: <Utensils size={24} />
    },
    {
        title: "Automated Procurement",
        desc: "Inventory tracking that automatically generates supplier purchase orders when stock levels hit critical thresholds.",
        icon: <ShoppingCart size={24} />
    },
    {
        title: "Review Intelligence",
        desc: "Monitor reviews across platforms and generate AI-drafted, personalized responses to maintain your brand reputation.",
        icon: <Star size={24} />
    },
    {
        title: "Inquiry Management",
        desc: "Automated handling of event and large-group catering inquiries, qualifying leads before passing them to your sales team.",
        icon: <Users size={24} />
    }
];

const ExperienceRoiCalculator = () => {
    const [weeklyCovers, setWeeklyCovers] = useState(800);
    const [avgCheck, setAvgCheck] = useState(250);
    
    const [results, setResults] = useState({
        recoveredRevenue: 0,
        staffEfficiency: 0
    });

    useEffect(() => {
        // Assume AI recovers 10% of lost reservations/walk-aways
        const recovered = (weeklyCovers * 0.1) * avgCheck * 4;
        // Assume 15% efficiency gain in ops/booking admin
        const efficiency = weeklyCovers * 5 * 4; // 5 mins saved per cover admin

        setResults({
            recoveredRevenue: recovered,
            staffEfficiency: efficiency
        });
    }, [weeklyCovers, avgCheck]);

    return (
        <div style={{ 
            background: "var(--bg)", 
            padding: "clamp(1.5rem, 5vw, 2.5rem)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Guest Experience ROI</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Weekly Covers</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{weeklyCovers}</span>
                    </div>
                    <input 
                        type="range" 
                        min="100" 
                        max="5000" 
                        value={weeklyCovers} 
                        onChange={(e) => setWeeklyCovers(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
                
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Avg. Check (AED)</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{avgCheck}</span>
                    </div>
                    <input 
                        type="range" 
                        min="50" 
                        max="1500" 
                        value={avgCheck} 
                        onChange={(e) => setAvgCheck(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
            </div>

            <div className="calc-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem", background: "var(--primary)", borderRadius: "20px", color: "white", textAlign: "center" }}>
                    <div style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "0.5rem" }}>Potential Monthly Revenue Recovery</div>
                    <div style={{ fontSize: "2rem", fontWeight: 900 }}>AED {Math.round(results.recoveredRevenue).toLocaleString()}</div>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Admin Time Saved (Monthly)</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>{Math.round(results.staffEfficiency / 60)} Staff Hours</div>
                </div>
            </div>
            
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.5rem", textAlign: "center" }}>
                *Based on Dubai hospitality standards and automated reservation efficiency.
            </p>
        </div>
    );
};

export default function FnbHospitalityClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-fnb");
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
                        src="/images/industries/fnb-hero.png" 
                        alt="Dubai F&B & Hospitality" 
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
                        <div className="section-label reveal-fnb">F&B & Hospitality</div>
                        <h1 className="reveal-fnb" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             Elevate the Guest Experience <br />
                             <span className="text-gradient">Automate the Operations</span>
                        </h1>
                        <p className="reveal-fnb" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            Dubai is a premier hospitality destination. Whether fine dining, hotel chain, cloud kitchen, or catering — 
                            the margin between great and average service comes down to speed, personalization, and consistency. 
                            AI delivers all three.
                        </p>
                        <div className="reveal-fnb" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Modernize Your Hospitality Group
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
                            { value: "13,000+", label: "F&B Outlets in Dubai" },
                            { value: "70%", label: "Prefer WhatsApp for Booking" },
                            { value: "25%", label: "Potential Food Waste Reduction" },
                            { value: "3.2x", label: "Higher Engagement via AI Concierge" }
                        ].map((stat, i) => (
                            <div key={i} className="reveal-fnb" style={{ textAlign: "center" }}>
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
                    <div style={{ marginBottom: "60px", textAlign: "center" }} className="reveal-fnb">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title">Superior Service Through Intelligence</h2>
                    </div>

                    <div className="solutions-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="reveal-fnb" style={{
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
                        <div className="reveal-fnb">
                            <div className="section-label">GUEST RETENTION</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>The Profitability of Personalization</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                                In Dubai's competitive market, a missed reservation or a slow response is a lost customer. See how AI 
                                can capture every inquiry and optimize your operational efficiency.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {[
                                    "24/7 autonomous WhatsApp reservation agents",
                                    "AI concierge for personalized guest interactions",
                                    "Predictive inventory & supplier procurement",
                                    "Centralized guest data via Zoho CRM & Booking"
                                ].map((tick, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                                        <span style={{ fontWeight: 600 }}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-fnb">
                            <ExperienceRoiCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-fnb" style={{ 
                        maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", 
                        background: "var(--primary)", borderRadius: "40px", color: "white"
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                            Redefine Dubai Hospitality
                        </h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Join the UAE's top hospitality groups using AI to deliver flawless service at scale.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 2.5rem" }}>
                            Discuss Your Strategy
                        </Link>
                    </div>
                </div>
            </section>

            {/* NAVIGATION LINKS */}
            <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/industries" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>All Industries</Link>
                    <Link href="/digital-workers" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Digital Workers</Link>
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
                    .reveal-fnb { display: flex; flex-direction: column; align-items: center; text-align: center; }
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
