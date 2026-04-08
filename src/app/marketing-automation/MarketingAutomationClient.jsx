"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Zap,
    Users,
    TrendingUp,
    MessageSquare,
    Search,
    ArrowRight,
    CheckCircle2,
    Shield,
    Globe,
    Activity,
    Smartphone,
    Layers,
    Server,
    Image as ImageIcon,
    Repeat,
    FileText,
    BarChart2,
    Mail
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingAutomationClient() {
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
            title: "CRM Integration", 
            icon: <Server />, 
            desc: "Connect your marketing efforts directly to your sales pipeline for total lead visibility." 
        },
        { 
            title: "Customer Segmentation", 
            icon: <Users />, 
            desc: "Group profiles by behavior, demographics, or spend to deliver surgical messaging." 
        },
        { 
            title: "Branded Templates", 
            icon: <ImageIcon />, 
            desc: "Professional, responsive designs that maintain brand integrity across all devices." 
        },
        { 
            title: "Multi-channel Automation", 
            icon: <Repeat />, 
            desc: "Orchestrate journeys across Email, SMS, WhatsApp, and Social from one hub." 
        },
        { 
            title: "Subscription Management", 
            icon: <FileText />, 
            desc: "Automate preferences and opt-ins to ensure compliance and message relevance." 
        },
        { 
            title: "Marketing Analytics", 
            icon: <BarChart2 />, 
            desc: "Deep-dive data attribution to see exactly which campaigns drive your revenue." 
        }
    ];

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflow: "hidden" }}>
            
            {/* ══ HERO SECTION ══════════════════════════════════════════════════════ */}
            <section style={{
                position: "relative",
                minHeight: "90vh",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg)",
                padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
                overflow: "hidden"
            }}>
                {/* Background Visual — similar to Home */}
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
                        <div className="hero-content hero-reveal" style={{ maxWidth: "700px", opacity: 0, transform: "translateY(20px)" }}>
                            <div className="section-label">Powered by Zoho</div>
                            <h1 style={{
                                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                                fontWeight: 900,
                                lineHeight: 1.15,
                                marginBottom: "2rem",
                                letterSpacing: "-0.03em"
                            }}>
                                Marketing Automation for <br />
                                <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                    Better Customer Experience
                                </span>
                            </h1>
                            <p style={{ 
                                fontSize: "clamp(1.1rem, 2vw, 1.25rem)", 
                                color: "var(--text-muted)",
                                lineHeight: 1.6,
                                marginBottom: "3rem"
                            }}>
                                Engage your leads and customers across various channels. Deliver powerful personalized messages at the right time, in the right place, with relevant call to action.
                            </p>
                            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "inherit" }}>
                                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
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
                                    src="/images/solutions/marketing-hero.png" 
                                    alt="Marketing Automation Dashboard" 
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
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label reveal-item">Features</div>
                        <h2 className="section-title reveal-item">Key Capabilities</h2>
                        <p className="section-desc reveal-item" style={{ maxWidth: "700px", margin: "1.5rem auto 0" }}>
                            Best in class Marketing Automation to map and enhance customer journeys.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "2rem" }}>
                        {keyFeatures.map((feature, i) => (
                            <div key={i} className="reveal-item" style={{
                                padding: "3rem",
                                background: "var(--bg-secondary)",
                                borderRadius: "40px",
                                border: "1px solid var(--border)",
                                transition: "all 0.3s ease",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div style={{ 
                                    width: "60px", height: "60px", 
                                    background: "var(--bg)", 
                                    color: "var(--primary)", 
                                    borderRadius: "18px", 
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "2rem",
                                    border: "1px solid var(--border)"
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
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem", background: "var(--bg-secondary)", borderRadius: "60px 60px 0 0" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    
                    {/* Item 1 */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "5rem", alignItems: "center", marginBottom: "clamp(100px, 15vh, 160px)" }}>
                        <div className="reveal-item" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{ 
                                position: "absolute", top: "-10%", left: "-5%", width: "110%", height: "120%", 
                                background: "var(--primary)05", borderRadius: "40px", transform: "rotate(-2deg)", zIndex: 0 
                            }} />
                            <Image 
                                src="/images/solutions/marketing-engage.png" 
                                alt="Lead Nurturing & Engagement" 
                                width={600} height={450}
                                style={{ borderRadius: "40px", position: "relative", zIndex: 1, width: "100%", height: "auto", border: "1px solid var(--border)" }}
                            />
                        </div>
                        <div className="reveal-item">
                            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>Boost your Marketing Engagement Rates</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                With Zoho Marketing Automation solutions, you can create visually appealing, personalized and engaging emails, messages, notifications that are optimized for maximum engagement, leading to higher open rates and click-throughs.
                            </p>
                            <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {["Optimized for maximum engagement", "Visualized personalized messaging", "Data-driven delivery timing"].map((text, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", color: "var(--text)" }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span style={{ fontWeight: 600 }}>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Item 2 - Reverse */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "5rem", alignItems: "center", marginBottom: "clamp(100px, 15vh, 160px)" }}>
                        <div className="reveal-item" style={{ order: 2, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                            <div style={{ 
                                position: "absolute", top: "-10%", left: "-5%", width: "110%", height: "120%", 
                                background: "#6366F105", borderRadius: "40px", transform: "rotate(2deg)", zIndex: 0 
                            }} />
                            <Image 
                                src="/images/solutions/marketing-campaign.png" 
                                alt="Campaign Streamlining" 
                                width={600} height={450}
                                style={{ borderRadius: "40px", position: "relative", zIndex: 1, width: "100%", height: "auto", border: "1px solid var(--border)" }}
                            />
                        </div>
                        <div className="reveal-item" style={{ order: 1 }}>
                            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>Streamline your Marketing Campaigns</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                Marketing, Sales, brand teams and your external agency partners can now collaborate on a user-friendly interface. Zoho marketing automation solution allows you to track results easily, and make insightful decisions to improve your overall Digital Marketing Strategy.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "5rem", alignItems: "center" }}>
                        <div className="reveal-item" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Image 
                                src="/images/solutions/marketing-segment.png" 
                                alt="Scale Reach" 
                                width={600} height={450}
                                style={{ borderRadius: "40px", width: "100%", height: "auto", border: "1px solid var(--border)" }}
                            />
                        </div>
                        <div className="reveal-item">
                            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>Scale your marketing outreach</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                Zoho Marketing Automation's advanced segmentation feature allows your team to understand data beneath your customer profile and segment them into multiple attributes. Enabling your team to discover new segments which can be tapped for new revenue streams.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ══ FOOTER CTA ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(100px, 15vh, 200px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div className="reveal-item" style={{ 
                        background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                        padding: "clamp(3rem, 10vw, 7rem)",
                        borderRadius: "clamp(40px, 6vw, 80px)",
                        textAlign: "center",
                        color: "white",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "absolute", top: "10%", right: "-10%", width: "400px", height: "400px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", pointerEvents: "none" }} />
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.04em" }}>Start Your Journey <br /> With Precision</h2>
                        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", opacity: 0.9, maxWidth: "700px", margin: "0 auto 3.5rem", lineHeight: 1.7 }}>
                            Transform your engagement rates and consolidate your multi-channel strategy today.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)", border: "none" }}>
                                Book Free Demo <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
