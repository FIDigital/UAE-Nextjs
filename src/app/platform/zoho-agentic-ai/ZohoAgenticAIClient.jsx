"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Database,
    Workflow,
    BrainCircuit,
    Code2,
    BarChart3,
    ChevronRight,
    CheckCircle2,
    ShieldCheck,
    Lock,
    Cpu,
    Zap,
    Users,
    MessageSquare,
    BookOpen,
    Layout,
    Globe,
    AlertTriangle,
    Clock,
    Coins,
    RefreshCw,
    HelpCircle,
    Plus,
    Minus
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// --- SUB-COMPONENTS ---

const TechMeshBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const dots = [];
        const dotCount = 60;
        const maxDist = 250;

        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(244, 63, 94, 0.3)";
            ctx.strokeStyle = "rgba(244, 63, 94, 0.08)";

            dots.forEach((dot, i) => {
                dot.x += dot.vx;
                dot.y += dot.vy;

                if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
                if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const d2 = dots[j];
                    const dist = Math.sqrt((dot.x - d2.x) ** 2 + (dot.y - d2.y) ** 2);
                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                opacity: 0.5,
                pointerEvents: "none"
            }}
        />
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div style={{
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 0",
            cursor: "pointer"
        }} onClick={() => setIsOpen(!isOpen)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: isOpen ? "var(--primary)" : "var(--text)" }}>{question}</h4>
                {isOpen ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} />}
            </div>
            {isOpen && (
                <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                    {answer}
                </p>
            )}
        </div>
    );
};

const CollapsibleText = ({ children, maxHeight = 100, fadeColor = "var(--bg-secondary)" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        if (!wrapperRef.current || !contentRef.current) return;

        const targetHeight = isExpanded ? contentRef.current.scrollHeight : maxHeight;

        gsap.to(wrapperRef.current, {
            height: targetHeight,
            duration: 0.6,
            ease: "power3.inOut",
            overwrite: true
        });
    }, { dependencies: [isExpanded], scope: wrapperRef });

    return (
        <div style={{ marginBottom: "1.5rem" }}>
            <div
                ref={wrapperRef}
                style={{
                    height: `${maxHeight}px`,
                    overflow: "hidden",
                    position: "relative",
                    willChange: "height"
                }}
            >
                <div ref={contentRef}>
                    {children}
                </div>

                {/* Premium Gradient Shadow */}
                {!isExpanded && (
                    <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "60px",
                        background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
                        pointerEvents: "none",
                        zIndex: 2
                    }} />
                )}
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    padding: "4px 0",
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontSize: "1rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    outline: "none"
                }}
            >
                {isExpanded ? "Read Less" : "Read More"}
                <ChevronRight size={18} style={{
                    transform: isExpanded ? "rotate(-90deg)" : "rotate(90deg)",
                    transition: "transform 0.4s ease"
                }} />
            </button>
        </div>
    );
};


export default function ZohoAgenticAIClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-item");
        reveals.forEach((el, i) => {
            gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        gsap.from(".hero-text", {
            x: -30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out"
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflow: "hidden" }}>

            {/* HERO SECTION */}
            <section style={{
                position: "relative",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
                overflow: "hidden"
            }}>
                <TechMeshBackground />
                <div className="hero-img-container" style={{
                    position: "absolute",
                    top: 0, right: 0, width: "60%", height: "100%",
                    zIndex: 0, opacity: 0.3, pointerEvents: "none"
                }}>
                    <Image 
                        src="/images/platform/zoho_integration.png" 
                        alt="Zoho Agentic AI Integration" 
                        fill
                        style={{ 
                            objectFit: "cover",
                            maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                            WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)"
                        }}
                    />
                </div>

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
                    <div style={{ maxWidth: "1000px" }}>
                        <div className="section-label hero-text">ZOHO + MODERN AI</div>
                        <h1 className="hero-text" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                            Elevating Your Enterprise Platform, <br />
                            <span style={{ color: "var(--primary)" }}>Not Replacing It</span>
                        </h1>
                        <div className="hero-text" style={{ maxWidth: "950px", position: "relative" }}>
                            <CollapsibleText maxHeight={120}>
                                <p style={{
                                    fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
                                    color: "var(--text-muted)",
                                    lineHeight: 1.6,
                                    marginBottom: "1.5rem"
                                }}>
                                    The market narrative is 'AI will replace Zoho.' We take the opposite view. Zoho is not a legacy CRM you're 
                                    trying to escape. Zoho is an enterprise platform that will outlast this AI cycle, getting smarter with every 
                                    addition. The question is not 'should we use Zoho?' but 'how do we architect Zoho for the AI era?' Zoho's 
                                    strength is data clean, organized, multi entity, governance ready.
                                </p>
                                <p style={{
                                    fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
                                    color: "var(--text-muted)",
                                    lineHeight: 1.6,
                                    marginBottom: "3rem"
                                }}>
                                    What Zoho lacks is agentic reasoning: 
                                    the ability to understand business context, make judgment calls, and reason through complex scenarios. 
                                    That's where Claude and Gemini come in. We bridge Zoho and modern AI through n8n orchestration, 
                                    creating an 'AI elevated' Zoho platform. Your CRM doesn't just manage contacts it reasons about which 
                                    contacts are most likely to close. Your finance system doesn't just record transactions it explains VAT 
                                    treatment and flags anomalies. Your support system doesn't just log tickets it routes intelligently and 
                                    suggests resolutions. We've deployed 80+ Zoho instances across APAC. Most started as 'just a CRM'; 
                                    we've evolved them into integrated, AI ready enterprise platforms. The result: systems that scale, that 
                                    stay compliant, that don't require constant customization, and that create competitive advantage.
                                </p>
                            </CollapsibleText>
                        </div>
                    </div>
                </div>
            </section>
            {/* WHAT WE DO SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">THE DIFFERENCE</div>
                        <h2 className="section-title">What We Do That Others Cannot</h2>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "850px", margin: "0 auto" }}>
                            Most Zoho implementations are point and click configurations. We engineer Zoho
                            implementations into scalable, intelligent enterprise platforms.
                        </p>
                    </div>

                    <div className="reveal-item differences-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                        gap: "1.5rem"
                    }}>
                        {[
                            { title: "Advanced Data Models", desc: "We architect data structures specifically to support high-speed AI integration and reasoning loops.", icon: <Database /> },
                            { title: "n8n Orchestration", desc: "We embed complex business logic in n8n, not in restrictive Zoho DELUGE customization, for maximum flexibility.", icon: <Workflow /> },
                            { title: "Arabic Nuance", desc: "Native handling of Arabic dialects and UAE business etiquette in all AI agent interactions.", icon: <Globe /> },
                            { title: "Engineered for Scale", desc: "Your system handles 10x growth without re-architecting. We build platforms, not just configurations.", icon: <Cpu /> }
                        ].map((item, i) => (
                            <div key={i} className="reveal-item diff-card" style={{
                                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                                background: "var(--bg-secondary)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                transition: "transform 0.3s ease",
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
                                    {React.cloneElement(item.icon, { size: 32, strokeWidth: 2.5 })}
                                </div>
                                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem", flex: 1 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNICAL FLOW SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item solution-row row-reverse" style={{ display: "flex", alignItems: "center", gap: "clamp(2rem, 5vw, 6rem)" }}>
                        <div className="content-side" style={{ flex: "1 1 450px" }}>
                            <div className="section-label" style={{ color: "var(--primary)" }}>TECHNICAL FLOW</div>
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>Zoho + Claude/Gemini via n8n & LangChain</h2>
                            <CollapsibleText maxHeight={120}>
                                <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "2rem" }}>
                                    Here's how it works technically. When a sales opportunity comes in, n8n detects it (via Zoho webhook).
                                    n8n passes to Claude: opportunity data (company size, budget, product interest, past interaction history),
                                    company context (industry, region, company size range), and product data (pricing, competitive positioning).
                                    Claude reasons: based on this company and this opportunity, what's the likelihood of close? What's the concern?
                                    What should we do next? Claude proposes next step (schedule call, send white paper, escalate to VP).
                                    The response goes back to n8n, which updates Zoho (activity created, next step logged, likelihood updated).
                                    Across 100 opportunities/day, Claude is applying consistent, reasoned logic. No two opportunities are handled differently
                                    because a human was tired or distracted. The same applies to finance: when an expense is submitted, Claude understands policy,
                                    applies it, and either approves or flags. And HR: when a leave request comes in, Claude understands headcount impact,
                                    project deadlines, and policy, and routes accordingly. This is reasoning at scale.
                                </p>
                            </CollapsibleText>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, fontWeight: 900, fontSize: "0.8rem" }}>1</div>
                                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}><strong>Webhook Detection:</strong> n8n captures events from Zoho CRM/Books/Desk instantly.</p>
                                </div>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, fontWeight: 900, fontSize: "0.8rem" }}>2</div>
                                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}><strong>AI Reasoning:</strong> Claude/Gemini processes data against company policies and product positioning.</p>
                                </div>
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0, fontWeight: 900, fontSize: "0.8rem" }}>3</div>
                                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}><strong>Automated Response:</strong> n8n updates Zoho, creates activities, and logs reasoned next steps.</p>
                                </div>
                            </div>
                        </div>
                        <div className="visual-side" style={{ flex: "1 1 500px" }}>
                            <div style={{
                                borderRadius: "32px",
                                overflow: "hidden",
                                border: "1px solid var(--border)",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
                            }}>
                                <Image src="/images/platform/zoho/architecture_flow.png" alt="Zoho AI Architecture Flow" width={800} height={600} style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL STACK MODULES GRID */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">MODULAR INTELLIGENCE</div>
                        <h2 className="section-title">Full Zoho Stack, AI-Enhanced</h2>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "850px", margin: "0 auto" }}>
                            Zoho is modular: CRM for sales, Books for finance, Desk for support, People for HR, Creator for custom
                            apps, Analytics for reporting, Flow for automation. Most implementations use 2-3 modules. We architect
                            using the full stack, with AI at each layer.
                        </p>
                    </div>

                    <div className="reveal-item zoho-stack-vertical-list" style={{ 
                        display: "flex", 
                        flexDirection: "column",
                        gap: "2.5rem" 
                    }}>
                        {[
                            { 
                                title: "Zoho CRM + Sales Agent", 
                                logo: "/images/platform/zoho/icons/crm.svg",
                                desc: "Sales is about lead volume, qualification, and conversion. AI agent handles qualification (WhatsApp, web form, email inquiries all flow through agent). Zoho CRM is the system of record. Agent creates/updates leads, routes to right rep based on specialization and capacity. Rep focuses on selling (calling qualified leads, not qualifying). Result: higher conversion, faster sales cycle.", 
                                color: "#3b82f6" 
                            },
                            { 
                                title: "Zoho Books + Finance Agent", 
                                logo: "/images/platform/zoho/icons/books.svg",
                                desc: "Finance is about accuracy, compliance, cycle-time. AI agent handles AP/AR, bank rec, VAT, budget monitoring. Zoho Books is the system of record. Agent processes 94% of transactions. Humans focus on exceptions and strategy. Result: faster month-end close, fewer errors.", 
                                color: "#10b981" 
                            },
                            { 
                                title: "Zoho Desk + Support Agent", 
                                logo: "/images/platform/zoho/icons/desk.svg",
                                desc: "Support is about response speed and satisfaction. AI agent handles tier-1 (FAQ questions, order status, common issues). Zoho Desk routes to right agent. For complex issues, human takes over with full context. Result: higher satisfaction, faster resolution, lower support cost.", 
                                color: "#f43f5e" 
                            },
                            { 
                                title: "Zoho People + HR Agent", 
                                logo: "/images/platform/zoho/icons/people.svg",
                                desc: "HR is about policy compliance and employee experience. AI agent handles leave requests (applying policy, checking headcount, routing to manager), onboarding (creating tasks, sending documents, explaining processes), offboarding (ensuring nothing is missed). Zoho People is the system of record. Result: faster processes, better compliance, better employee experience.", 
                                color: "#8b5cf6" 
                            },
                            { 
                                title: "Zoho Creator + Custom Apps", 
                                logo: "/images/platform/zoho/icons/creator.svg",
                                desc: "Creator is the low-code platform within Zoho. You can build custom apps (inventory management, project management, etc.). AI integration means: custom app can have agentic behavior (inventory monitoring agent alerts when stock is low, procurement agent auto-creates POs, etc.). Most Creator implementations are configuration. We architect them with AI-readiness from the start.", 
                                color: "#f97316" 
                            },
                            { 
                                title: "Zoho Analytics + Insight Agents", 
                                logo: "/images/platform/zoho/icons/analytics.svg",
                                desc: "Analytics is about reporting and insight. AI agents can generate insights automatically (anomaly detection: sales are 20% down this month, which customers are at risk, what changed?). Insight agents don't just report data; they analyze and recommend. Instead of a report saying 'Q2 revenue was AED 8.5M,' an agent says 'Q2 revenue was AED 8.5M, driven by a 23% increase in real estate (AED 3.2M) and a 12% decrease in hospitality (AED 1.1M due to Ramadan). The top-performing office was Dubai (42% of total) and bottom performer was India (15% of target). Recommend: increase India headcount and review hospitality pitch.", 
                                color: "#06b6d4" 
                            }
                        ].map((module, i) => {
                            const resultIndex = module.desc.indexOf("Result:");
                            const mainDesc = resultIndex !== -1 ? module.desc.substring(0, resultIndex) : module.desc;
                            const resultText = resultIndex !== -1 ? module.desc.substring(resultIndex) : "";

                            return (
                                <div key={i} className="reveal-item zoho-stack-card-wide" style={{
                                    padding: "clamp(2rem, 5vw, 3.5rem)",
                                    background: "var(--bg-secondary)",
                                    borderRadius: "32px",
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "clamp(2rem, 5vw, 4rem)",
                                    border: "1px solid var(--border)",
                                    boxShadow: "0 15px 40px rgba(0,0,0,0.03)"
                                }}>
                                    <div className="stack-card-left" style={{ flex: "0 0 clamp(200px, 25vw, 280px)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                        <style dangerouslySetInnerHTML={{__html: `
                                          [data-theme='dark'] .zoho-product-logo-${i} {
                                            background: #ffffff !important;
                                            padding: 12px !important;
                                            border-radius: 20px !important;
                                            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1) !important;
                                          }
                                        `}} />
                                        <Image src={module.logo} alt={module.title} width={96} height={96} className={`zoho-product-logo-${i}`} style={{ objectFit: 'contain', display: "block", filter: `drop-shadow(0 10px 20px ${module.color}20)` }} />
                                        <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 900, lineHeight: 1.15, color: "var(--text)", letterSpacing: "-0.02em" }}>{module.title}</h3>
                                    </div>
                                    
                                    <div className="stack-card-right" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                        <div style={{ position: "relative", flex: 1 }}>
                                            {mainDesc.length > 500 ? (
                                                <CollapsibleText maxHeight={120}>
                                                    <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                                                        {mainDesc}
                                                    </p>
                                                </CollapsibleText>
                                            ) : (
                                                <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                                                    {mainDesc}
                                                </p>
                                            )}
                                        </div>

                                        {resultText && (
                                            <div className="result-block-wrapper" style={{ marginTop: "auto" }}>
                                                <div className="result-block" style={{
                                                    padding: "1.25rem 1.75rem",
                                                    background: `${module.color}08`,
                                                    borderRadius: "24px",
                                                    fontSize: "1.05rem",
                                                    fontWeight: 600,
                                                    color: "var(--text)",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    border: `1px solid ${module.color}15`,
                                                    boxShadow: `0 8px 24px ${module.color}05`
                                                }}>
                                                    <span style={{ color: module.color, marginRight: "0.75rem", fontWeight: 900, fontSize: "1.3rem" }}>→</span>
                                                    {resultText}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ZOHO FLOW SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", overflow: "hidden" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item solution-row row-normal" style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6rem"
                    }}>
                        <div className="content-side" style={{ flex: 1 }}>
                            <div className="section-label">INTELLIGENT WORKFLOWS</div>
                            <h2 className="left-align-desktop" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.1 }}>
                                Zoho Flow + <span className="text-gradient">AI-Driven Automation</span>
                            </h2>
                            <p className="left-align-desktop" style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Flow is Zoho's native automation (like Zapier, but inside Zoho). Flow lets you build workflows: if X happening, do Y. AI enhances this: instead of if-then-else, you have intelligent conditionals (if opportunity is high-value and customer is enterprise, route to VP; if opportunity is mid-market and sales rep has capacity, route to rep). Most Flow implementations are simple. We architect complex, conditional workflows with AI decision-making.
                            </p>
                        </div>
                        <div className="visual-side" style={{ flex: 1.2 }}>
                            <div style={{
                                position: "relative",
                                borderRadius: "32px",
                                overflow: "hidden",
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                                border: "1px solid var(--border)"
                            }}>
                                <Image 
                                    src="/images/platform/zoho/zoho_flow_automation.png" 
                                    alt="Zoho Flow AI Automation" 
                                    width={1000}
                                    height={600}
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                />
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)",
                                    pointerEvents: "none"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL ARCHITECTURE SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--hero-bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">TECHNICAL STACK</div>
                        <h2 className="section-title">Zoho + AI Architecture (Technical)</h2>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "850px", margin: "0 auto" }}>
                            This is different from a typical 'Zoho + Zapier' architecture, which is just moving data around. 
                            This architecture adds intelligence through a multi-layered reasoning framework.
                        </p>
                    </div>

                    <div className="reveal-item architecture-grid" style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", 
                        gap: "1.5rem" 
                    }}>
                        {[
                            { 
                                title: "Operational Spine", 
                                name: "Zoho", 
                                desc: "Data, processes, approvals, and native integrations.",
                                logo: "/images/new-zoho-logo.png",
                                color: "#3b82f6"
                            },
                            { 
                                title: "Orchestration Layer", 
                                name: "n8n", 
                                desc: "Receiving webhooks, routing to LLMs, and updating Zoho.",
                                logo: "/images/n8n.png",
                                color: "#10b981"
                            },
                            { 
                                title: "Reasoning Layer", 
                                name: "Claude / Gemini", 
                                desc: "Understanding context and making judgment calls.",
                                logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.svg",
                                logo2: "/images/logos/gemini.svg",
                                color: "#f43f5e"
                            },
                            { 
                                title: "Memory Layer", 
                                name: "LangChain", 
                                desc: "Retrieving relevant customer and product history.",
                                logo: "https://avatars.githubusercontent.com/u/126733545",
                                color: "#8b5cf6"
                            },
                            { 
                                title: "Knowledge Store", 
                                name: "Vector DB", 
                                desc: "Company FAQs, price lists, and policy documents.",
                                logo: "https://deepchecks.com/wp-content/uploads/2024/12/logo-vectordb.png",
                                color: "#f97316"
                            }
                        ].map((layer, i) => (
                            <div key={i} className="arch-card" style={{
                                padding: "2rem",
                                background: "var(--bg)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                textAlign: "center",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <div className="card-logo-container" style={{
                                    width: "64px",
                                    height: "64px",
                                    background: `${layer.color}08`,
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 1.5rem",
                                    border: `1px solid ${layer.color}20`,
                                    padding: "12px",
                                    gap: layer.logo2 ? "10px" : "0"
                                }}>
                                    <Image src={layer.logo} alt={layer.name} width={64} height={64} style={{ width: layer.logo2 ? "22px" : "100%", height: "100%", objectFit: "contain", filter: `drop-shadow(0 4px 10px ${layer.color}20)` }} />
                                    {layer.logo2 && (
                                        <Image src={layer.logo2} alt={layer.name} width={22} height={22} style={{ width: "22px", height: "100%", objectFit: "contain", filter: `drop-shadow(0 4px 10px ${layer.color}20)` }} />
                                    )}
                                </div>
                                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: layer.color, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>
                                    {layer.title}
                                </div>
                                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1rem" }}>{layer.name}</h4>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5, flex: 1 }}>{layer.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="reveal-item" style={{ 
                        marginTop: "4rem", 
                        padding: "2.5rem", 
                        background: "rgba(59, 130, 246, 0.05)", 
                        borderRadius: "24px", 
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                        textAlign: "center"
                    }}>
                        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", margin: 0, fontStyle: "italic" }}>
                            "Vector DB (e.g., Pinecone, Weaviate) acts as the deep knowledge store (company FAQs, product info, pricing, policies) 
                            accessible to agents. This setup transforms Zoho from a record repository into a reasoning engine."
                        </p>
                    </div>
                </div>
            </section>

            {/* UAE CONFIGURATION SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--hero-bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item uae-config-grid" style={{
                        background: "var(--bg)",
                        borderRadius: "clamp(24px, 4vw, 48px)",
                        padding: "clamp(1.5rem, 5vw, 4rem)",
                        border: "1px solid var(--border)",
                        display: "grid",
                        gridTemplateColumns: "1fr 1.2fr",
                        gap: "clamp(2rem, 4vw, 4rem)",
                        alignItems: "center"
                    }}>
                        <div>
                            <div className="section-label" style={{ color: "var(--primary)" }}>REGIONAL EXPERTISE</div>
                            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>UAE-Specific Configuration</h2>
                            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1.1rem" }}>
                                We don't just translate labels. We deeply configure Zoho for the UAE's unique regulatory
                                and business environment from Day 1.
                            </p>
                        </div>
                        <div className="uae-items-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                            {[
                                { title: "VAT Ready", desc: "Configured for UAE FTA rules and quarterly return preparation." },
                                { title: "Labor Law", desc: "Salary and end-of-service calculations built for UAE law." },
                                { title: "Data Sovereignty", desc: "Hosted in Zoho's UAE data centers for total compliance." },
                                { title: "Arabic-First UX", desc: "Bilingual field labels and RTL support for native staff." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{item.title}</h4>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY MOST FAIL SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">STRATEGIC OVERSIGHT</div>
                        <h2 className="section-title">Why Most Implementations Fail</h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
                            Avoid the pitfalls of over-customization and chaotic governance. Our approach builds a platform, not just a system.
                        </p>
                    </div>

                    <div className="reveal-item" style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        maxWidth: "1000px",
                        margin: "0 auto"
                    }}>
                        {[
                            { 
                                title: "Reason 1: Over-Customization", 
                                desc: "Most teams see Zoho as 'like Salesforce, but cheaper,' and they customize it like Salesforce. They add 60+ custom fields, 40+ custom workflows, 20+ custom modules. This creates technical debt: every Zoho update requires testing your customizations; every team member needs to understand custom logic; maintenance becomes expensive. We architect for 80/20: 80% of your process should work with Zoho's standard tools. Only 20% should require customization. Customization should be in n8n (clean, testable, separate from Zoho), not in Zoho (hard to test, hard to maintain)." 
                            },
                            { 
                                title: "Reason 2: No Governance", 
                                desc: "Most teams let anyone change Zoho configuration. Sales adds a field, finance tweaks an automation, support changes a workflow. Within 6 months, the system is chaotic (conflicting automations, inconsistent field usage, broken integrations). We establish governance: only approved people can modify configuration, changes are documented, testing is required before production, audit trail of all changes. This sounds bureaucratic, but it prevents costly mistakes." 
                            },
                            { 
                                title: "Reason 3: English-Only", 
                                desc: "Most Zoho partners are Western (US, EU, Australia). They configure in English, assuming users will speak English or will deal with English UX. In UAE, this is wrong. Your Arabic-speaking staff struggles with English CRM, make data entry errors, resist adoption. We configure bilingual from day 1." 
                            },
                            { 
                                title: "Reason 4: No AI-Ready Thinking", 
                                desc: "Most implementations are manual-process-focused. 'How do we do this in Zoho?' instead of 'How do we architect this for intelligence?' A sales process might be: sales rep enters lead, follows up manually, closes deal. With AI-ready thinking: sales agent qualifies lead and routes to right rep based on specialization; rep focuses on closing. The second approach is more efficient and more scalable. We think about data architecture and AI readiness before building anything." 
                            }
                        ].map((reason, i) => (
                            <div key={i} className="failure-card" style={{
                                padding: "clamp(1.5rem, 4vw, 2.5rem)",
                                background: "var(--bg)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                display: "flex",
                                gap: "clamp(1rem, 3vw, 2.5rem)",
                                alignItems: "flex-start",
                                transition: "all 0.3s ease",
                                textAlign: "left",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                            }}>
                                <div className="failure-number" style={{ 
                                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
                                    fontWeight: 900, 
                                    color: "var(--primary)", 
                                    opacity: 0.2,
                                    lineHeight: 1,
                                    fontFamily: "monospace",
                                    flexShrink: 0
                                }}>
                                    0{i + 1}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{reason.title}</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1.05rem", margin: 0 }}>
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label">THE PROCESS</div>
                        <h2 className="section-title">Implementation Methodology</h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", margin: "0 auto" }}>
                            A structured approach from discovery to steady-state operations.
                        </p>
                    </div>

                    <div className="reveal-item methodology-steps" style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(4, 1fr)", 
                        gap: "2rem",
                        marginBottom: "4rem"
                    }}>
                        {[
                            { title: "Phase 1: Discover", desc: "Interview team, observe actual processes, identify pain points, assess data quality, evaluate current system (if migrating), baseline metrics." },
                            { title: "Phase 2: Design", desc: "Architecture data model, design processes, spec integrations, design AI agent behavior, plan migration, design training plan." },
                            { title: "Phase 3: Build", desc: "Set up infrastructure, configure Zoho, build n8n workflows, train agents, migrate data, run UAT, train team." },
                            { title: "Phase 4: Deploy", desc: "Go live, monitor closely, optimize, transition to steady-state operations." }
                        ].map((phase, i) => (
                            <div key={i} className="methodology-card" style={{ 
                                padding: "clamp(1.25rem, 3vw, 2rem)",
                                background: "var(--bg-secondary)",
                                borderRadius: "24px",
                                border: "1px solid var(--border)",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.3s ease",
                                height: "100%"
                            }}>
                                <div style={{ 
                                    width: "42px", 
                                    height: "42px", 
                                    background: "var(--primary)", 
                                    color: "white", 
                                    borderRadius: "50%", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    fontSize: "1.1rem", 
                                    fontWeight: 900, 
                                    marginBottom: "1rem",
                                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                                    flexShrink: 0
                                }}>
                                    {i + 1}
                                </div>
                                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text)" }}>{phase.title}</h4>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.5, fontSize: "0.95rem", margin: 0 }}>{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="reveal-item" style={{ 
                        padding: "2rem", 
                        background: "var(--hero-bg)", 
                        borderRadius: "20px", 
                        border: "1px solid var(--border)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "2rem"
                    }}>
                        <div>
                            <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>Implementation Timeline</span>
                            <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>12-20 weeks depending on complexity</span>
                        </div>
                        <div>
                            <span style={{ display: "block", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 700 }}>Investment Range</span>
                            <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>AED 80k - 300k <span style={{fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: "normal"}}>for full stack</span></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* LICENSING & COST OPTIMIZATION SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1000px", display: "flex", flexDirection: "column", gap: "3rem" }}>
                    
                    {/* Licensing Block */}
                    <div className="reveal-item licensing-card" style={{
                        background: "var(--bg)",
                        padding: "clamp(1.5rem, 5vw, 4rem)",
                        borderRadius: "clamp(24px, 4vw, 32px)",
                        border: "1px solid var(--border)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
                        
                        <div className="section-label" style={{ color: "var(--primary)" }}>ECONOMICS</div>
                        <h2 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem" }}>Licensing & Cost Optimization</h2>
                        
                        <div style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Zoho pricing is per-module, per-user, per-month. CRM: AED 60-200 per user per month. Books: flat rate AED 500-1,500 per month. Desk: AED 50-150 per user per month. The cost scales with users. A 50-person sales team on Zoho CRM can cost AED 150K+ per month.
                            </p>
                            <p style={{ marginBottom: "1.5rem" }}>
                                <strong style={{ color: "var(--text)" }}>We optimize:</strong> licensing by role (SDRs don't need full CRM, they need lite access), by module (do you need full Desk or just email integration?), and by substitution (can you use Desk for customer support instead of a separate platform?).
                            </p>
                            <div style={{ 
                                padding: "1.5rem", 
                                background: "rgba(16, 185, 129, 0.05)", 
                                borderRadius: "16px",
                                borderLeft: "4px solid #10b981",
                                color: "var(--text)",
                                fontWeight: 600,
                                marginTop: "2rem"
                            }}>
                                Typical optimization saves 20-30% on Zoho costs without losing functionality.
                            </div>
                        </div>
                    </div>

                    {/* Migration Block */}
                    <div className="reveal-item migration-card" style={{
                        background: "var(--bg)",
                        padding: "clamp(1.5rem, 5vw, 4rem)",
                        borderRadius: "clamp(24px, 4vw, 32px)",
                        border: "1px solid var(--border)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
                        
                        <div className="section-label" style={{ color: "var(--primary)" }}>TRANSITION</div>
                        <h2 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem" }}>Migration From Other Platforms</h2>
                        
                        <div style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                            <p style={{ marginBottom: "1.5rem" }}>
                                If you're coming from Salesforce, HubSpot, Dynamics, or another CRM, we handle migration: data extraction, cleansing (fixing bad data before it enters Zoho), mapping (old fields to new fields), validation (confirming migration accuracy), and go-live.
                            </p>
                            
                            <div className="migration-metrics" style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ flex: 1, padding: "clamp(1rem, 3vw, 1.5rem)", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                    <h4 style={{ color: "var(--text)", fontWeight: 800, marginBottom: "0.5rem" }}>Salesforce Migration</h4>
                                    <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>Highly customized source. <span style={{ color: "var(--primary)", fontWeight: 700 }}>8-12 weeks</span> planning.</p>
                                </div>
                                <div style={{ flex: 1, padding: "clamp(1rem, 3vw, 1.5rem)", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                    <h4 style={{ color: "var(--text)", fontWeight: 800, marginBottom: "0.5rem" }}>HubSpot Migration</h4>
                                    <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.5 }}>Less customizable source. <span style={{ color: "var(--primary)", fontWeight: 700 }}>6-8 weeks</span> planning.</p>
                                </div>
                            </div>
                            
                            <div style={{ 
                                padding: "1.5rem", 
                                background: "rgba(59, 130, 246, 0.05)", 
                                borderRadius: "16px",
                                borderLeft: "4px solid var(--primary)",
                                color: "var(--text)",
                                fontWeight: 500,
                                fontSize: "1rem"
                            }}>
                                <strong style={{ fontWeight: 800 }}>The key is not to migrate 'as-is'</strong>—that just moves problems. We design the target state (clean Zoho architecture) and migrate to that state (some old fields are dropped, some are consolidated, some are transformed).
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section style={{ padding: "clamp(60px, 10vh, 100px) 0" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="reveal-item" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label">COMMON QUESTIONS</div>
                        <h2 className="section-title">Zoho Agentic AI FAQ</h2>
                    </div>
                    <div className="reveal-item">
                        <FAQItem 
                            question="Is Zoho enterprise-ready?" 
                            answer="Yes. Zoho is used by enterprises like Cisco, IBM, and HP. It's SOC2 compliant (data security), GDPR compliant (data privacy), and ISO 27001 certified (information security). For the UAE, we verify it meets data sovereignty and any specific regulatory requirements for your industry." 
                        />
                        <FAQItem 
                            question="What if we outgrow Zoho?" 
                            answer="Unlikely. Zoho scales to 10,000+ users. If you outgrow Zoho (meaning you're a mega-corporation with extremely complex customization), you're probably a SAP or Oracle customer. For 99% of mid-market, Zoho scales. The better question: does our architecture scale? We architect for growth. A 100-person company's Zoho instance should handle a 1,000-person company without re-architecting. This is possible with good architecture; not possible with over-customization." 
                        />
                        <FAQItem 
                            question="How do we move from one Zoho instance to another (e.g., US to UAE)?" 
                            answer="Zoho supports multi-region deployments. If you're currently on Zoho US (data center in US), you can migrate to Zoho EU or Zoho UAE data center. Data is migrated; configuration stays the same. This takes 2-4 weeks." 
                        />
                        <FAQItem 
                            question="Can Zoho handle our complex approval workflows?" 
                            answer="Most approval workflows are 2-3 levels (frontline person approves, then manager, then executive). Zoho handles this natively. If you have complex conditional logic ('if amount is above AED 100K and department is IT and manager is on vacation, escalate to CIO'), we use n8n for this. n8n is more flexible for complex logic." 
                        />
                        <FAQItem 
                            question="What about integrations with other systems?" 
                            answer="Zoho has native integrations with 100+ systems. If you need a system that's not natively integrated, we use n8n to bridge (n8n has 400+ integrations). If you need a custom integration (API to a legacy internal system), we build it." 
                        />
                        <FAQItem 
                            question="How much customization do we need?" 
                            answer="Depends on your process. If your process is fairly standard (sales process, finance process, customer support), you need 0-10% customization. If your process is industry-specific or unique to your company, you might need 10-20%. If you have crazy complex process, you might need 20-30%. Anything above 30% is a red flag—it means you're trying to force a non-standard process into Zoho. Better to re-engineer the process." 
                        />
                        <FAQItem 
                            question="What's the support model?" 
                            answer="During implementation, we're fully hands-on. After go-live, we transition to managed services: we monitor your system, we make configuration changes, we handle updates, we provide training. You focus on your business; we focus on your Zoho platform. Cost: typically AED 20-50K per month depending on system complexity and number of users." 
                        />
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 1.5rem", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(244, 63, 94, 0.05), transparent)", pointerEvents: "none" }} />
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div className="reveal-item" style={{
                        background: "var(--bg-secondary)",
                        padding: "5rem 3rem",
                        borderRadius: "48px",
                        border: "1px solid var(--border)",
                        textAlign: "center",
                        maxWidth: "1100px",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 1
                    }}>
                        <div className="section-label" style={{ color: "var(--primary)", marginBottom: "1rem" }}>NEXT STEPS</div>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>Ready to Elevate Your Platform?</h2>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "850px", margin: "0 auto", lineHeight: 1.7 }}>
                            If you're considering Zoho for the first time, if you're struggling with your current Zoho implementation, 
                            or if you want to elevate your Zoho with AI, let's talk. We offer a Zoho Readiness Audit (AED 18K, 20-page 
                            report) that evaluates your current system, your architecture, your AI-readiness, and your optimization 
                            opportunities. No sales pitch. Just honest assessment.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                            <Link href="/contact" className="btn btn-primary cta-button-mobile" style={{ 
                                padding: "1.25rem 3.5rem", 
                                fontSize: "1.1rem",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                whiteSpace: "nowrap"
                            }}>
                                Book Readiness Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .solution-row {
                    gap: 6rem;
                }
                .row-normal { flex-direction: row; }
                .row-reverse { flex-direction: row-reverse; }

                .left-align-desktop {
                    text-align: left !important;
                }

                @media (max-width: 992px) {
                    .zoho-stack-card-wide {
                        flex-direction: column !important;
                        gap: 2rem !important;
                        padding: 2.5rem !important;
                    }
                    .stack-card-left {
                        flex: none !important;
                        width: 100% !important;
                        flex-direction: row !important;
                        align-items: center !important;
                        gap: 1.5rem !important;
                    }
                    .icon-box {
                        margin-bottom: 0 !important;
                    }
                    .uae-config-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                        padding: 2.5rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .zoho-stack-card-wide {
                        padding: 1.5rem !important;
                    }
                    .zoho-stack-card-wide h3 {
                        font-size: 1.4rem !important;
                    }
                    .cta-button-mobile {
                        width: 100% !important;
                        padding: 1.25rem 1rem !important;
                    }
                }

                @media (max-width: 1100px) {
                    .architecture-grid, .methodology-steps {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }

                @media (max-width: 1024px) {
                    .architecture-grid, .methodology-steps {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                    .uae-config-grid {
                        grid-template-columns: 1fr !important;
                        padding: 3rem !important;
                        gap: 3rem !important;
                        border-radius: 32px !important;
                    }
                    .left-align-desktop {
                        text-align: center !important;
                    }
                    .solution-row {
                        flex-direction: column !important;
                        gap: 3rem !important;
                        text-align: center;
                    }
                    .content-side {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        flex: none !important;
                    }
                    .visual-side {
                        width: 100%;
                        flex: none !important;
                    }
                    .content-side ul {
                        align-items: center;
                        text-align: left;
                        width: 100%;
                    }
                    .zoho-stack-card-wide {
                        flex-direction: column !important;
                        gap: 1.5rem !important;
                    }
                    .stack-card-left {
                        width: 100% !important;
                        flex: none !important;
                    }
                }

                @media (max-width: 768px) {
                    .differences-grid, .intro-differences-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .reveal-item {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    .architecture-grid, .methodology-steps {
                        grid-template-columns: 1fr !important;
                    }
                    .uae-items-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .uae-config-grid {
                        padding: 2rem !important;
                        border-radius: 24px !important;
                    }
                    .failure-card {
                        flex-direction: column !important;
                        gap: 1rem !important;
                        padding: 1.5rem !important;
                    }
                    .migration-metrics {
                        flex-direction: column !important;
                    }
                    .zoho-stack-card-wide {
                        padding: 2rem !important;
                    }
                }
            `}</style>
            <style jsx>{`
                @media (max-width: 991px) {
                    section { padding: 60px 1.5rem !important; }
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
                    .hero-text { display: flex; flex-direction: column; align-items: center; text-align: center; }
                    
                    .differences-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
                    .diff-card { align-items: center; text-align: center; padding: 2rem !important; }
                    .diff-card .card-icon { margin-bottom: 1rem !important; }

                    .zoho-stack-card-wide { 
                        flex-direction: column !important; 
                        padding: clamp(2rem, 6vw, 3rem) !important; 
                        text-align: center !important;
                        align-items: center !important;
                        gap: 1.5rem !important;
                    }
                    .stack-card-left { flex: none !important; display: flex; flex-direction: column; align-items: center; width: 100% !important; margin-bottom: 0.5rem; }
                    .stack-card-right { width: 100% !important; align-items: center !important; }
                    .result-block-wrapper { display: flex; justify-content: center; width: 100%; }
                    
                    .architecture-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
                    .arch-card { padding: 1.5rem !important; }

                    .uae-config-grid { grid-template-columns: 1fr !important; padding: clamp(1.5rem, 5vw, 2.5rem) !important; gap: 3rem !important; text-align: center; }
                    .uae-items-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }

                    .licensing-card, .migration-card { padding: clamp(1.5rem, 5vw, 2.5rem) !important; text-align: center; }
                    .licensing-card p, .migration-card p { text-align: center !important; }
                    .migration-metrics { flex-direction: column !important; gap: 1rem !important; }

                    .failure-card { flex-direction: column !important; align-items: center !important; text-align: center !important; padding: 2rem !important; }
                    .failure-number { margin-bottom: 0.5rem !important; }
                }
            `}</style>
        </div>
    );
}
