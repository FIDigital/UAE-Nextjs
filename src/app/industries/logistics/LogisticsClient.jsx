"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    CheckCircle2, 
    Truck,
    Box,
    FileText,
    TrendingUp,
    Navigation,
    Clock,
    ShieldCheck,
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
        title: "Route Optimization",
        desc: "AI-driven route planning that considers Dubai's unique traffic patterns and peak hours to reduce delivery times and fuel costs.",
        icon: <Navigation size={24} />
    },
    {
        title: "Warehouse Automation",
        desc: "Optimize picking paths and inventory positioning within your warehouse to increase throughput and reduce errors.",
        icon: <Box size={24} />
    },
    {
        title: "Customs Documentation AI",
        desc: "Automated generation and verification of customs declarations and shipping documents to speed up cross-border movement.",
        icon: <FileText size={24} />
    },
    {
        title: "Predictive Maintenance",
        desc: "Monitor fleet health data to predict and schedule maintenance before breakdowns occur, ensuring maximum up-time.",
        icon: <Zap size={24} />
    },
    {
        title: "Demand Forecasting",
        desc: "Advanced predictive models to forecast future inventory needs based on historical data and market trends in the GCC.",
        icon: <TrendingUp size={24} />
    },
    {
        title: "Automated Tracking",
        desc: "Provide customers and stakeholders with real-time, AI-powered tracking updates and predictive ETAs.",
        icon: <Truck size={24} />
    }
];

const LogisticsEfficiencyCalculator = () => {
    const [fleetSize, setFleetSize] = useState(50);
    const [monthlyMileage, setMonthlyMileage] = useState(10000); // per vehicle
    
    const [results, setResults] = useState({
        fuelSavings: 0,
        timeRecovered: 0
    });

    useEffect(() => {
        // Assume AI route optimization saves 15% on fuel/mileage
        const fuelSaved = (fleetSize * monthlyMileage * 0.15) * 2.5; // AED 2.5 per km avg cost
        // Assume 20% reduction in idle/admin time
        const timeSaved = (fleetSize * 20) * 4; // 20 hours per month per vehicle

        setResults({
            fuelSavings: fuelSaved,
            timeRecovered: timeSaved
        });
    }, [fleetSize, monthlyMileage]);

    return (
        <div style={{ 
            background: "var(--bg)", 
            padding: "clamp(1.5rem, 5vw, 2.5rem)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Logistics Optimization</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Fleet Size</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{fleetSize} Vehicles</span>
                    </div>
                    <input 
                        type="range" 
                        min="10" 
                        max="500" 
                        value={fleetSize} 
                        onChange={(e) => setFleetSize(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
                
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Avg. Monthly KM (Per Vehicle)</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{monthlyMileage.toLocaleString()} KM</span>
                    </div>
                    <input 
                        type="range" 
                        min="1000" 
                        max="20000" 
                        step="500"
                        value={monthlyMileage} 
                        onChange={(e) => setMonthlyMileage(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
            </div>

            <div className="calc-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem", background: "var(--primary)", borderRadius: "20px", color: "white", textAlign: "center" }}>
                    <div style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "0.5rem" }}>Potential Annual Fuel Savings</div>
                    <div style={{ fontSize: "2rem", fontWeight: 900 }}>AED {(Math.round(results.fuelSavings) * 12).toLocaleString()}</div>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Operational Time Recovered (Monthly)</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>{Math.round(results.timeRecovered).toLocaleString()} Hours</div>
                </div>
            </div>
            
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.5rem", textAlign: "center" }}>
                *Based on GCC logistics benchmarks and AI-driven route optimization data.
            </p>
        </div>
    );
};

export default function LogisticsClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-log");
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
                        src="/images/industries/logistics-hero.png" 
                        alt="Dubai Logistics & Supply Chain" 
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
                        <div className="section-label reveal-log">Logistics & Supply Chain</div>
                        <h1 className="reveal-log" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             Move Faster. Track Everything. <br />
                             <span className="text-gradient">Waste Nothing.</span>
                        </h1>
                        <p className="reveal-log" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            The UAE is a global logistics hub with Jebel Ali Port handling millions of tons annually. Whether freight 
                            forwarder, warehouse operator, or last-mile delivery — AI transforms operational efficiency.
                        </p>
                        <div className="reveal-log" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Optimize Your Logistics Operations
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
                            { value: "15%", label: "Average Fuel Cost Reduction" },
                            { value: "30%", label: "Increase in Order Throughput" },
                            { value: "98%+", label: "Predictive ETA Accuracy" },
                            { value: "50%", label: "Faster Customs Clearance AI" }
                        ].map((stat, i) => (
                            <div key={i} className="reveal-log" style={{ textAlign: "center" }}>
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
                    <div style={{ marginBottom: "60px", textAlign: "center" }} className="reveal-log">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title">Supply Chain Intelligence</h2>
                    </div>

                    <div className="solutions-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="reveal-log" style={{
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
                        <div className="reveal-log">
                            <div className="section-label">OPERATIONAL ROI</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>Eliminate Hidden Waste</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                                In the logistics world, uncertainty is the enemy of profit. See how AI-driven route optimization and 
                                demand forecasting can significantly reduce fuel costs and recover lost operational time.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {[
                                    "Real-time AI route optimization for Dubai traffic",
                                    "Predictive warehouse & inventory positioning",
                                    "Automated customs & shipping document generation",
                                    "Fleet health monitoring & predictive maintenance"
                                ].map((tick, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                                        <span style={{ fontWeight: 600 }}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-log">
                            <LogisticsEfficiencyCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-log" style={{ 
                        maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", 
                        background: "var(--primary)", borderRadius: "40px", color: "white"
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                            Optimize for the Global Hub
                        </h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Join the UAE's leading logistics operators using AI to outpace the competition.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 2.5rem" }}>
                            Start Your Optimization
                        </Link>
                    </div>
                </div>
            </section>

            {/* NAVIGATION LINKS */}
            <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/industries" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>All Industries</Link>
                    <Link href="/platform" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Our Platform</Link>
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
                    .reveal-log { display: flex; flex-direction: column; align-items: center; text-align: center; }
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
