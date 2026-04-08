"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Filter,
    Users,
    DollarSign,
    FileText,
    Check,
    BarChart2,
    ArrowRight,
    CheckCircle2,
    Zap,
    Briefcase,
    TrendingUp,
    Shield,
    Activity,
    Settings,
    Layers,
    Target
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SalesClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-item");
        reveals.forEach((el) => {
            gsap.from(el, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Hero reveal
        const tl = gsap.timeline();
        tl.to(".hero-reveal", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    const keyFeatures = [
        { 
            title: "Lead Management", 
            icon: <Filter />, 
            desc: "Efficiently capture and track leads through their entire qualification journey." 
        },
        { 
            title: "Account Overview", 
            icon: <Users />, 
            desc: "A 360-degree view of your customer relationships, interactions, and history." 
        },
        { 
            title: "Opportunity Management", 
            icon: <DollarSign />, 
            desc: "Manage your deal pipeline with precision, from discovery to final closure." 
        },
        { 
            title: "Quotation Management", 
            icon: <FileText />, 
            desc: "Generate professional, standardized quotes and track their approval status." 
        },
        { 
            title: "Activity Tracking", 
            icon: <Check />, 
            desc: "Maintain a clear audit trail of all calls, meetings, and follow-up tasks." 
        },
        { 
            title: "Sales Analytics", 
            icon: <BarChart2 />, 
            desc: "Data-driven insights into your sales performance and revenue forecasting." 
        }
    ];

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflow: "hidden" }}>
            
            {/* ══ HERO SECTION ══════════════════════════════════════════════════════ */}
            <section style={{
                position: "relative",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                background: "var(--bg)",
                padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
                overflow: "hidden"
            }}>
                {/* Background Visual — professional style matched to Home */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60%",
                    height: "100%",
                    zIndex: 0,
                    opacity: 0.45,
                    pointerEvents: "none",
                }}>
                    <Image
                        src="/images/home_hero_professional.png"
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

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
                        <style jsx>{`
                            @media (max-width: 1024px) {
                                .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; text-align: center; }
                                .hero-content { margin: 0 auto; }
                                .hero-content div { justify-content: center !important; }
                            }
                        `}</style>
                        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "4rem", alignItems: "center", width: "100%" }}>
                        <div className="hero-content hero-reveal" style={{ maxWidth: "800px", opacity: 0, transform: "translateY(20px)" }}>
                            <div className="section-label">Sales Transformation</div>
                            <h1 style={{
                                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                                fontWeight: 900,
                                lineHeight: 1.15,
                                marginBottom: "2rem",
                                letterSpacing: "-0.03em"
                            }}>
                                Streamline Your Sales Process <br />
                                <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                    With Zoho CRM
                                </span>
                            </h1>
                            <p style={{ 
                                fontSize: "clamp(1.1rem, 2vw, 1.25rem)", 
                                color: "var(--text-muted)",
                                lineHeight: 1.6,
                                marginBottom: "3rem"
                            }}>
                                Effortlessly manage your leads, deals, and revenue, and close more deals with our comprehensive & easy-to-use CRM solution.
                            </p>
                            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "inherit" }}>
                                <Link href="/contact" className="btn-primary">
                                    Get Started Today <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="hero-image-wrap hero-reveal" style={{ position: "relative", opacity: 0, transform: "translateY(20px)" }}>
                            <div style={{ 
                                background: "rgba(255,255,255,0.03)", 
                                border: "1px solid var(--border)", 
                                padding: "1rem", 
                                borderRadius: "40px",
                                backdropFilter: "blur(20px)",
                                boxShadow: "0 40px 100px -20px rgba(0,0,0,0.15)"
                            }}>
                                <Image 
                                    src="/images/solutions/sales-hero.png" 
                                    alt="Zoho CRM Sales Pipeline" 
                                    width={800} 
                                    height={800}
                                    style={{ borderRadius: "24px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FEATURES GRID ═══════════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem", background: "var(--bg-secondary)", borderRadius: "60px 60px 0 0", position: "relative", zIndex: 1, marginTop: "-60px" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label reveal-item">Functionalities</div>
                        <h2 className="section-title reveal-item">Key Sales Features</h2>
                        <p className="section-desc reveal-item" style={{ maxWidth: "700px", margin: "1.5rem auto 0" }}>
                            All important functionalities built on best practices for the manufacturing industry.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "2.5rem" }}>
                        {keyFeatures.map((feature, i) => (
                            <div key={i} className="reveal-item" style={{
                                padding: "3rem",
                                background: "var(--bg)",
                                borderRadius: "40px",
                                border: "1px solid var(--border)",
                                transition: "all 0.3s ease",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)"
                            }}>
                                <div style={{ 
                                    width: "60px", height: "60px", 
                                    background: "var(--primary)10", 
                                    color: "var(--primary)", 
                                    borderRadius: "18px", 
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "2rem"
                                }}>
                                    {React.cloneElement(feature.icon, { size: 28 })}
                                </div>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.02em" }}>{feature.title}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ DETAILED VALUE PROPOSITION ════════════════════════════════════════ */}
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    
                    {/* Item 1 */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "6rem", alignItems: "center", marginBottom: "clamp(120px, 18vh, 180px)" }}>
                        <div className="reveal-item">
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>Convert leads to customers with Ease</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Zoho CRM's easy to use interface is built for sales and account management teams to close deals quicker. Features like tasks, reminders and activity tracker ensures none of the opportunities are missed. In simple words, efficient sales tool, which also gives better customer experience.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <div style={{ padding: "0.75rem 1.5rem", background: "var(--bg-secondary)", borderRadius: "100px", fontSize: "0.9rem", fontWeight: 700, border: "1px solid var(--border)" }}>Smart Reminders</div>
                                <div style={{ padding: "0.75rem 1.5rem", background: "var(--bg-secondary)", borderRadius: "100px", fontSize: "0.9rem", fontWeight: 700, border: "1px solid var(--border)" }}>Activity Timeline</div>
                            </div>
                        </div>
                        <div className="reveal-item">
                            <div style={{ 
                                background: "rgba(255,255,255,0.02)", 
                                border: "1px solid var(--border)", 
                                padding: "1.5rem", 
                                borderRadius: "40px",
                                backdropFilter: "blur(10px)"
                            }}>
                                <Image 
                                    src="/images/solutions/sales-convert.png" 
                                    alt="Sales Conversion Process" 
                                    width={700} height={500}
                                    style={{ borderRadius: "24px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Item 2 - Reverse */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "6rem", alignItems: "center", marginBottom: "clamp(120px, 18vh, 180px)" }}>
                        <div className="reveal-item" style={{ order: 2 }}>
                            <Image 
                                src="/images/solutions/sales-automate.png" 
                                alt="Automation Flow" 
                                width={700} height={500}
                                style={{ borderRadius: "40px", width: "100%", height: "auto", border: "1px solid var(--border)" }}
                            />
                        </div>
                        <div className="reveal-item" style={{ order: 1 }}>
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>Sales flow automation</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Zoho has multiple automation features like blueprints, client scripts, and workflows which can help your sales team focus on building meaningful relationships with your customers and leave mundane tasks on Zoho's powerful automation engine. More time with sales teams, more deal closures.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {[ "Automated Blueprints", "Client-Side Scripting", "Real-time Workflows" ].map((tag, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 700 }}>
                                        <CheckCircle2 size={20} color="var(--primary)" /> {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "6rem", alignItems: "center" }}>
                        <div className="reveal-item">
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>Rich Sales Insights, Better Decisions</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                Zoho CRM's Business Intelligence and Analytics features are class-leading and help find the right trends, insights and gaps throughout your sales funnel. Measure conversion rates and deal with pipeline, deal with lost reasons and drop offs, all with the click of a button. Give a boost to your sales strategy using analytics and dashboard by Zoho.
                            </p>
                        </div>
                        <div className="reveal-item">
                            <div style={{ position: "relative" }}>
                                <div style={{ position: "absolute", inset: "-20px", background: "var(--primary)05", borderRadius: "50%", filter: "blur(60px)", zIndex: 0 }} />
                                <Image 
                                    src="/images/solutions/sales-analyze.png" 
                                    alt="Insights & Reports" 
                                    width={700} height={500}
                                    style={{ borderRadius: "40px", position: "relative", zIndex: 1, width: "100%", height: "auto", border: "1px solid var(--border)" }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ══ FOOTER CTA ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(100px, 15vh, 200px) 1.5rem", background: "linear-gradient(to top, var(--bg-secondary) 0%, var(--bg) 100%)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div className="reveal-item" style={{ 
                        background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                        padding: "clamp(4rem, 10vw, 8.5rem)",
                        borderRadius: "clamp(40px, 6vw, 80px)",
                        textAlign: "center",
                        color: "white",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 30px 60px -15px rgba(29,78,216,0.3)"
                    }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 70%)", pointerEvents: "none" }} />
                        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "2.5rem", letterSpacing: "-0.04em", lineHeight: 1.1 }}>Ready to Close <br /> More Deals?</h2>
                        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", opacity: 0.9, maxWidth: "750px", margin: "0 auto 4rem", lineHeight: 1.7 }}>
                            Transform your pipeline with the most powerful sales automation engine available for the UAE market.
                        </p>
                        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                            <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)", border: "none" }}>
                                Book Free AI Audit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
