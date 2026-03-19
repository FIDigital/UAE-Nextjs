"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    MessageCircle,
    Building2,
    Landmark,
    Headset,
    UserPlus,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Cpu
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
    {
        title: "WhatsApp Sales Agents",
        desc: "24/7 multilingual sales agents that qualify leads, answer product questions, and book appointments directly on WhatsApp.",
        icon: <MessageCircle size={32} />,
        href: "/digital-workers/whatsapp-sales-agents",
        color: "#25D366"
    },
    {
        title: "Real Estate Agents",
        desc: "AI agents that handle property inquiries, manage viewing schedules, and qualify tenant/buyer leads in seconds.",
        icon: <Building2 size={32} />,
        href: "/digital-workers/real-estate-agents",
        color: "#3B82F6"
    },
    {
        title: "Finance & Procurement",
        desc: "Automate invoice processing, reconcile accounts, and manage supplier qualifications with zero data entry errors.",
        icon: <Landmark size={32} />,
        href: "/digital-workers/finance-procurement-agents",
        color: "#6366F1"
    },
    {
        title: "Customer Service Agents",
        desc: "Autonomous support agents that resolve queries, process returns, and update order statuses using your internal knowledge base.",
        icon: <Headset size={32} />,
        href: "/digital-workers/customer-service-agents",
        color: "#EC4899"
    },
    {
        title: "HR & Onboarding",
        desc: "Streamline employee onboarding, automate document collection, and answer internal policy questions instantly.",
        icon: <UserPlus size={32} />,
        href: "/digital-workers/hr-onboarding-agents",
        color: "#8B5CF6"
    }
];


const AgentVisual = ({ agent }) => {
    const isWhatsApp = agent.title.includes("WhatsApp");
    const isRealEstate = agent.title.includes("Real Estate");
    const isFinance = agent.title.includes("Finance");
    const isSupport = agent.title.includes("Customer Service");
    const isHR = agent.title.includes("HR");

    return (
        <div style={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
        }}>
            {/* Background Glow */}
            <div style={{
                position: "absolute",
                width: "80%",
                height: "80%",
                background: `radial-gradient(circle, ${agent.color}15 0%, transparent 70%)`,
                borderRadius: "50%",
                filter: "blur(40px)",
                zIndex: 0
            }} />

            {/* Mockup Container */}
            <div className="card" style={{
                width: "100%",
                maxWidth: "400px",
                height: "320px",
                background: "var(--card-bg)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid var(--border)",
                boxShadow: "var(--card-shadow)",
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease"
            }}>
                {/* Header Bar */}
                <div style={{
                    padding: "12px 20px",
                    background: "rgba(100, 100, 100, 0.05)",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                    <div style={{ marginLeft: "auto", fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Agent Node: {agent.title.split(' ')[0]}
                    </div>
                </div>

                {/* Content Area */}
                <div style={{ flex: 1, padding: "20px", position: "relative" }}>
                    {isWhatsApp && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div style={{ alignSelf: "flex-start", maxWidth: "80%", background: "var(--hover-bg)", color: "var(--text)", padding: "10px 15px", borderRadius: "0 15px 15px 15px", fontSize: "0.85rem", border: "1px solid var(--border)" }}>
                                Hello! How can I help you today?
                            </div>
                            <div style={{ alignSelf: "flex-end", maxWidth: "80%", background: `${agent.color}15`, color: agent.color, padding: "10px 15px", borderRadius: "15px 15px 0 15px", fontSize: "0.85rem", border: `1px solid ${agent.color}30` }}>
                                I need to book a viewing for Villa 22.
                            </div>
                            <div style={{ alignSelf: "flex-start", maxWidth: "80%", background: "var(--hover-bg)", padding: "10px 15px", borderRadius: "0 15px 15px 15px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px", border: "1px solid var(--border)" }}>
                                <div className="typing-dot" style={{ width: "4px", height: "4px", borderRadius: "50%", background: agent.color }} />
                                <div className="typing-dot" style={{ width: "4px", height: "4px", borderRadius: "50%", background: agent.color, animationDelay: "0.2s" }} />
                                <div className="typing-dot" style={{ width: "4px", height: "4px", borderRadius: "50%", background: agent.color, animationDelay: "0.4s" }} />
                            </div>
                        </div>
                    )}

                    {isRealEstate && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            <div style={{ height: "100px", background: "var(--hover-bg)", borderRadius: "12px", border: "1px dashed var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Building2 size={40} style={{ color: "var(--text)", opacity: 0.2 }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <div style={{ width: "120px", height: "10px", background: "var(--border)", borderRadius: "5px", marginBottom: "8px" }} />
                                    <div style={{ width: "80px", height: "8px", background: "var(--hover-bg)", borderRadius: "4px" }} />
                                </div>
                                <div style={{ padding: "4px 10px", borderRadius: "20px", background: `${agent.color}15`, color: agent.color, fontSize: "0.7rem", fontWeight: 800 }}>AVAILABLE</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                <div style={{ height: "30px", background: "var(--hover-bg)", borderRadius: "8px", border: "1px solid var(--border)" }} />
                                <div style={{ height: "30px", background: "var(--hover-bg)", borderRadius: "8px", border: "1px solid var(--border)" }} />
                            </div>
                        </div>
                    )}

                    {isFinance && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px", background: "var(--hover-bg)", borderRadius: "8px", border: "1px solid var(--border)" }}>
                                    <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${agent.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: agent.color }}>
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ width: "60%", height: "8px", background: "var(--border)", borderRadius: "4px", marginBottom: "4px" }} />
                                        <div style={{ width: "40%", height: "6px", background: "var(--border)", opacity: 0.5, borderRadius: "3px" }} />
                                    </div>
                                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)" }}>AED {i * 1250}.00</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {(isSupport || isHR) && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `${agent.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: agent.color }}>
                                    {isSupport ? <Headset size={20} /> : <UserPlus size={20} />}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ width: "100%", height: "12px", background: "var(--border)", borderRadius: "6px", marginBottom: "8px" }} />
                                    <div style={{ width: "70%", height: "12px", background: "var(--border)", opacity: 0.5, borderRadius: "6px" }} />
                                </div>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                                    <span>Syncing Knowledge Base</span>
                                    <span>94%</span>
                                </div>
                                <div style={{ height: "4px", background: "var(--hover-bg)", borderRadius: "2px" }}>
                                    <div style={{ width: "94%", height: "100%", background: agent.color, borderRadius: "2px", boxShadow: `0 0 10px ${agent.color}` }} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <div style={{ padding: "4px 8px", background: "var(--hover-bg)", borderRadius: "4px", fontSize: "0.65rem", color: "var(--text-muted)", border: "1px solid var(--border)", fontWeight: 700 }}>CRM SYNC</div>
                                <div style={{ padding: "4px 8px", background: "var(--hover-bg)", borderRadius: "4px", fontSize: "0.65rem", color: "var(--text-muted)", border: "1px solid var(--border)", fontWeight: 700 }}>ZOHO CONNECT</div>
                            </div>
                        </div>
                    )}
                </div>

                <div style={{
                    height: "1px",
                    width: "100%",
                    background: `linear-gradient(90deg, transparent, ${agent.color}, transparent)`,
                    opacity: 0.3
                }} />
            </div>

            <style jsx>{`
                @keyframes typing {
                    0% { opacity: 0.3; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                    100% { opacity: 0.3; transform: scale(0.8); }
                }
                .typing-dot {
                    animation: typing 1.4s infinite;
                }
            `}</style>
        </div>
    );
};

export default function DigitalWorkersClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".reveal-item");
        items.forEach((item, i) => {
            gsap.from(item, {
                y: 50,
                x: i % 2 === 0 ? -30 : 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)" }}>
            {/* Hero Section */}
            <section style={{
                position: "relative",
                background: "var(--bg)",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                color: "var(--text)",
                padding: "clamp(120px, 15vh, 160px) 1.5rem 100px"
            }}>
                {/* Background image — right-side with radial fade, same pattern as CaseStudiesClient */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60%",
                    height: "100%",
                    zIndex: 0,
                    opacity: 0.4,
                    pointerEvents: "none",
                }}>
                    <Image
                        src="/images/digital_worker_hero_v3.png"
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

                {/* Gradient overlay behind text */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(to right, var(--bg) 45%, transparent 80%)",
                    pointerEvents: "none",
                }} />

                <div className="container" style={{ position: "relative", zIndex: 3, textAlign: "left" }}>
                    <div style={{ maxWidth: "700px" }}>
                        <div className="section-label" style={{ marginBottom: "1rem" }}>AI Digital Workers · UAE Enterprise</div>

                        <h1 style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: "-0.025em",
                            margin: "0 0 1.25rem",
                            textWrap: "balance",
                            color: "var(--text)",
                        }}>
                            Digital Workers That Never Sleep,{" "}
                            <span style={{
                                background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>
                                Never Forget
                            </span>
                        </h1>

                        <p style={{
                            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                            color: "var(--text-muted)",
                            maxWidth: "600px",
                            margin: "0 0 2.5rem",
                            lineHeight: 1.75,
                        }}>
                            Purpose-built AI agents for UAE enterprises — bilingual in Arabic and English, connected to Zoho CRM, WhatsApp Business, and your finance tools. They qualify leads, process invoices, resolve support queries, and onboard staff around the clock.
                        </p>

                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                            <Link href="/contact" className="btn-primary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem" }}>
                                Book AI Audit <ArrowRight size={18} />
                            </Link>
                            <Link href="#solutions" className="btn-secondary" style={{ height: "42px", padding: "0 1.5rem", fontSize: "0.9rem" }}>
                                View Agents
                            </Link>
                        </div>

                        {/* Quick stats */}
                        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", textAlign: "left" }}>
                            {[
                                { num: "5+", label: "Agent Types Deployed" },
                                { num: "24/7", label: "Always On" },
                                { num: "2 min", label: "Avg Lead Response" },
                                { num: "99.1%", label: "Automation Accuracy" },
                            ].map(s => (
                                <div key={s.label}>
                                    <div style={{
                                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                        fontWeight: 900,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        background: "linear-gradient(135deg, #1D4ED8, #6366F1)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}>{s.num}</div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Portfolio Section */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "clamp(4rem, 8vh, 8rem)" }}>
                        <div className="section-label">Solution Portfolio</div>
                        <h2 className="section-title">Specialized Autonomous Agents</h2>
                        <p className="section-desc" style={{ margin: "0 auto", fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}>
                            Our digital workers are deployed as functional units within your existing teams, taking over high-volume high-complexity tasks.
                        </p>
                    </div>

                    <div className="solutions-stack" style={{ display: "flex", flexDirection: "column" }}>
                        {solutions.map((item, idx) => (
                            <div
                                key={idx}
                                className={`reveal-item solution-row ${idx % 2 === 0 ? "row-normal" : "row-reverse"}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "clamp(2rem, 5vw, 4rem)"
                                }}
                            >
                            {/* Content Side */}
                            <div className="content-side" style={{ flex: "1 1 400px", minWidth: "280px" }}>
                                <div style={{
                                    width: "60px",
                                    height: "60px",
                                    background: `${item.color}15`,
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: item.color,
                                    marginBottom: "2rem"
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 900, marginBottom: "1.5rem", letterSpacing: "-0.02em", color: "var(--text)" }}>{item.title}</h3>
                                <p style={{
                                    fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
                                    lineHeight: 1.7,
                                    color: "var(--text-muted)",
                                    marginBottom: "2.5rem"
                                }}>
                                    {item.desc}
                                </p>

                                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>
                                        <CheckCircle2 size={20} style={{ color: item.color, flexShrink: 0 }} />
                                        Deep Zoho CRM & Analytics Integration
                                    </li>
                                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>
                                        <CheckCircle2 size={20} style={{ color: item.color, flexShrink: 0 }} />
                                        Multilingual Arabic & English Reasoning
                                    </li>
                                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.95rem", fontWeight: 600, color: "var(--text)" }}>
                                        <CheckCircle2 size={20} style={{ color: item.color, flexShrink: 0 }} />
                                        Autonomous Decision Making & Task Execution
                                    </li>
                                </ul>

                                <Link
                                    href={item.href}
                                    className="btn-secondary"
                                    style={{
                                        borderColor: item.color,
                                        color: item.color,
                                        padding: "0.75rem 1.5rem",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        borderRadius: "12px",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        background: `${item.color}05`
                                    }}
                                >
                                    Explore Capability
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* Visual Side (No-Image Designing) */}
                            <div className="visual-side" style={{
                                flex: "1 1 500px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                            }}>
                                <AgentVisual agent={item} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Footer Links (As requested in SEO instructions) */}
            <section style={{ padding: "60px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/platform" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Explore Platform</Link>
                    <Link href="/industries" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Browse Industries</Link>
                    <Link href="/contact" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 700 }}>Book AI Audit</Link>
                </div>
            </section>
            <style jsx>{`
                .solutions-stack {
                    gap: 8rem;
                }
                .row-normal { flex-direction: row; }
                .row-reverse { flex-direction: row-reverse; }

                .visual-side {
                    min-height: 450px;
                }

                @media (max-width: 1024px) {
                    .solutions-stack {
                        gap: 4rem;
                        padding: 0 1rem;
                    }
                    .solution-row {
                        flex-direction: column !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    .content-side {
                        flex: 1 1 auto !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        alignItems: center;
                    }
                    .visual-side {
                        flex: 1 1 auto !important;
                        width: 100%;
                        min-height: 350px;
                    }
                    .content-side ul {
                        align-items: center;
                        text-align: left;
                    }
                }

                @media (max-width: 480px) {
                    .solutions-stack {
                        gap: 3rem;
                    }
                    .visual-side {
                        min-height: 300px;
                    }
                }

                .card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.12);
                    border-color: var(--primary) !important;
                }
            `}</style>
        </div>
    );
}
