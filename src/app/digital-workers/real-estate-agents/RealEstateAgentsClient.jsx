"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    MessageCircle, 
    Zap, 
    Database, 
    BrainCircuit, 
    CheckCircle2,
    XCircle,
    ArrowRight,
    Workflow,
    Mic,
    Clock,
    TrendingUp,
    Users,
    ChevronDown,
    Building2,
    Briefcase,
    ShoppingBag,
    Plane,
    Truck,
    ChevronUp,
    GlassWater,
    CarFront,
    Box,
    ShieldCheck,
    BarChart3,
    CalendarCheck2
} from "lucide-react";
import FAQItem from "@/components/FAQItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CollapsibleText = ({ children, maxHeight = 100, fadeColor = "var(--bg)" }) => {
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
                <div style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    width: "100%", 
                    height: "80px", 
                    background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
                    pointerEvents: "none",
                    opacity: isExpanded ? 0 : 1,
                    transition: "opacity 0.4s ease",
                    zIndex: 2
                }} />
            </div>
            
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="expand-btn"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.2rem",
                    padding: "2px 0",
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    zIndex: 3,
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                }}
            >
                <span style={{ position: "relative" }}>
                    {isExpanded ? "Close" : "Learn More"}
                    <div className="btn-line" style={{ 
                        position: "absolute", 
                        bottom: "-4px", 
                        left: 0, 
                        width: "100%", 
                        height: "2px", 
                        background: "var(--primary)",
                        transform: "scaleX(0.3)",
                        transformOrigin: "left",
                        transition: "transform 0.4s ease",
                        opacity: 0.6
                    }} />
                </span>
                <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)"
                }}>
                    <ChevronDown size={16} strokeWidth={2.5} />
                </div>
            </button>

            <style jsx>{`
                .expand-btn:hover .btn-line {
                    transform: scaleX(1);
                    opacity: 1;
                }
                .expand-btn:active {
                    transform: translateY(1px);
                }
            `}</style>
        </div>
    );
};


export default function RealEstateAgentsClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Real Estate Agent",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "AI-powered real estate lead qualification for Dubai luxury properties. Arabic-fluent WhatsApp agents integrated with Zoho CRM.",
        "areaServed": {
            "@type": "City",
            "name": "Dubai"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "AED",
            "priceRange": "AED 20,000 - 500,000"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does AI qualify real estate leads?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI agent asks a series of contextual questions via WhatsApp regarding budget, location preference, financing (cash vs mortgage), and visa status to score leads before they reach your human team."
                }
            },
            {
                "@type": "Question",
                "name": "Is the AI RERA compliant?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our systems ensure full audit trails and data sovereignty by storing all interactions within UAE-based Zoho data centers, supporting RERA's documentation requirements."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal");
        reveals.forEach((el) => {
            gsap.from(el, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: containerRef });

    const SectionHeader = ({ title, label, dark = false }) => (
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4.5rem", position: "relative" }}>
            {label && <div className="section-label" style={{ color: dark ? "rgba(255,255,255,0.6)" : "var(--primary)" }}>{label}</div>}
            <h2 className="section-title" style={{ color: dark ? "#fff" : "var(--text)" }}>{title}</h2>
        </div>
    );

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
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
                minHeight: "90vh", 
                display: "flex", 
                alignItems: "center", 
                position: "relative",
                padding: "clamp(120px, 15vh, 180px) 1.5rem 100px",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                {/* Background Visual — right-side image with radial fade */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "60%",
                        height: "100%",
                        zIndex: 0,
                        opacity: 0.35,
                        pointerEvents: "none",
                    }}
                >
                    <Image
                        src="/images/industries/real-estate-hero.png"
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

                {/* Subtle gradient overlay behind text */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background: "linear-gradient(to right, var(--bg) 45%, transparent 80%)",
                        pointerEvents: "none",
                    }}
                />
                
                <div className="container" style={{ maxWidth: "1250px", position: "relative", zIndex: 1 }}>
                    <div className="hero-content" style={{ maxWidth: "900px" }}>
                        <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", background: "rgba(59, 130, 246, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "2rem" }}>
                            <Building2 size={16} /> Real Estate Lead Qualification
                        </div>
                        <h1 className="reveal" style={{ 
                            fontSize: "clamp(2.2rem, 5.5vw, 4rem)", 
                            fontWeight: 900, 
                            marginBottom: "2rem", 
                            lineHeight: 1.1,
                            textAlign: "left"
                        }}>
                            AI-Powered Real Estate Lead Qualification: <span style={{ 
                                background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>From Drowning to Converting</span>
                        </h1>
                        <p className="reveal" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital&apos;s AI Real Estate Agents are specialized digital workers that handle property inquiries via WhatsApp 24/7. They qualify prospective buyers in Arabic and English, verify financing with RERA-inspired logic, and sync data instantly to Zoho CRM.
                        </p>
                        <p className="reveal" style={{ 
                            fontSize: "1.15rem", 
                            lineHeight: 1.8, 
                            color: "var(--text-muted)",
                            maxWidth: "850px",
                            marginBottom: "3rem"
                        }}>
                            Dubai real estate is hyper-competitive and WhatsApp-driven. A qualified agent receives 
                            hundreds of messages per day. Most are tire-kickers. Our AI agent qualifies leads 
                            automatically, improving response time from 6 hours to 12 minutes and increasing 
                            conversion rates by 2.4x.
                        </p>
                        <div className="reveal">
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1.25rem 2.5rem" }}>
                                Book Qualification Audit <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE PROBLEM SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
                        <div className="reveal">
                             <div className="section-label">MARKETING REALITY</div>
                            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "2rem" }}>What is the Real Estate Lead Qualification Problem in Dubai?</h2>
                            <CollapsibleText maxHeight={200} fadeColor="var(--bg-secondary)">
                                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                                    Your agents manually handle WhatsApp inquiry qualification. A message comes in: 'هل عندكم فيلات في جيميز؟' (Do you have villas in Jumeirah?). Your agent needs to ask: budget, location preference, property type, timeline, occupancy status (renting now, own elsewhere, first-time buyer), visa status, nationality, financing approach. That's 7-8 sequential messages, each requiring a response. The inquiry started at 9am; by the time you've asked all questions, it's 10:30am and the prospect has already called a competitor. Even if your agent is diligent, the process is exhausting. Each inquiry takes 45 minutes of human time. 80% of inquiries are unqualified (low budget, no visa, no real urgency). You're spending 36 hours/week on qualification to close 15-20 deals/month. A competitor with faster response and better qualification closes 25-30 deals/month with the same team size. That competitor uses AI.
                                </p>
                            </CollapsibleText>
                        </div>
                        <div className="reveal">
                            <div style={{ padding: "2rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
                                </div>
                                <div style={{ spaceY: "1rem" }}>
                                    <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Manual Process Benchmark:</div>
                                    <div style={{ h: "8px", w: "100%", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
                                        <div style={{ h: "100%", w: "18%", background: "var(--primary)" }} />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 700 }}>
                                        <span>Manual Conversion</span>
                                        <span>18%</span>
                                    </div>
                                    <div style={{ mt: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>AI-Assisted Conversion:</div>
                                    <div style={{ h: "8px", w: "100%", background: "var(--border)", borderRadius: "4px", overflow: "hidden" }}>
                                        <div style={{ h: "100%", w: "43%", background: "#28c840" }} />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 700 }}>
                                        <span>AI-Powered Conversion</span>
                                        <span>43%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="What Does FI Digital&apos;s AI Real Estate Agent Actually Do?" label="CORE CAPABILITIES" />
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
                        <div className="reveal">
                            <div style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)", spaceY: "1.5rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    When a customer WhatsApps your business number, the AI agent: <strong>answers within 12 minutes</strong> (not 6 hours). Asks all qualifying questions in <strong>natural conversation flow</strong> (not sequential interrogation). Understands real estate nuance (off-plan market, FEWA rules, visa implications, financing sources). Qualifies in <strong>Arabic or English</strong> based on customer preference. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Maintains conversation context (customer mentioned "family of 4" so the agent knows they need 3+ bedrooms). Routes to the <strong>right agent</strong> on your team (if a specialist is available, the lead goes to them). Scores the lead (<strong>hot</strong> = ready to buy within 4 weeks, <strong>warm</strong> = ready to buy within 6 months, <strong>cool</strong> = early stage).
                                </p>
                                <p style={{ marginBottom: "2rem" }}>
                                    Sends a pre-briefing to the assigned agent with full context. Your team picks up <strong>qualified, pre-informed leads</strong>, not cold inquiries. Closing probability goes up <strong>40%</strong>.
                                </p>

                                <div style={{ 
                                    padding: "2rem", 
                                    background: "rgba(59, 130, 246, 0.05)", 
                                    borderRadius: "24px", 
                                    border: "1px solid rgba(59, 130, 246, 0.2)",
                                    fontSize: "0.95rem"
                                }}>
                                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", alignItems: "center" }}>
                                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                                            <Zap size={18} />
                                        </div>
                                        <div style={{ fontWeight: 800, color: "var(--text)" }}>AGENT NOTIFICATION EXAMPLE:</div>
                                    </div>
                                    <p style={{ margin: 0, fontStyle: "italic", color: "var(--text)" }}>
                                        "New hot lead: Emirati family, AED 2.4M cash budget, Dubai Hills preferred, need to close within 6 weeks, schools critical, previous inquiry was about ROI so might be rental investor. Team member: Ahmed (specialist in Dubai Hills off-plan). Lead score: 92/100. Context: previously interested in Park Towers, asked about payment plan, asked about service charges."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="reveal">
                            <div style={{ position: "relative" }}>
                                <Image 
                                    src="/images/real-estate-agent/real-estate-agent-flow-v2.png" 
                                    alt="Real Estate AI Agent Qualification Flow"
                                    width={800}
                                    height={600}
                                    style={{ width: "100%", height: "auto", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)", border: "1px solid var(--border)" }}
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    top: "-20px", 
                                    right: "-20px", 
                                    background: "var(--primary)", 
                                    color: "#fff", 
                                    padding: "0.5rem 1rem", 
                                    borderRadius: "100px", 
                                    fontSize: "0.8rem", 
                                    fontWeight: 800,
                                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
                                }}>
                                    LIVE FLOW
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* REAL SCENARIO WALKTHROUGH */}
            <section style={{ padding: "120px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1000px" }}>
                    <SectionHeader title="How Does an AI Real Estate Lead Qualification Flow Work?" label="A REAL SCENARIO" />
                    <div style={{ display: "grid", gap: "2rem" }}>
                        <div className="reveal" style={{ padding: "3rem", background: "var(--card-bg)", borderRadius: "40px", border: "1px solid var(--border)" }}>
                            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", alignItems: "center" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><MessageCircle size={20} /></div>
                                <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>WhatsApp Conversation Journey</div>
                            </div>
                            
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {/* Turn 1 */}
                                <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.03)", padding: "1.2rem 1.5rem", borderRadius: "0 20px 20px 20px", border: "1px solid var(--border)", maxWidth: "85%" }}>
                                    <div style={{ fontSize: "0.75rem", color: "var(--primary)", marginBottom: "0.4rem", fontWeight: 800 }}>PROSPECT [10:15 AM]</div>
                                    <p style={{ margin: 0, fontStyle: "italic", fontSize: "0.95rem" }}>"السلام عليكم، هل عندكم فيلات للبيع في جيميز أو بر دبي، مع مسبح وملعب تنس؟"</p>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>"Hello, do you have villas for sale in Jumeirah or Bar Dubai, with pool and tennis court?"</div>
                                </div>

                                <div style={{ alignSelf: "flex-end", background: "var(--bg)", padding: "1.2rem 1.5rem", borderRadius: "20px 20px 0 20px", border: "1px solid var(--primary)", maxWidth: "85%" }}>
                                    <div style={{ fontSize: "0.75rem", color: "var(--primary)", marginBottom: "0.4rem", fontWeight: 800, textAlign: "right" }}>AI AGENT [10:15 AM]</div>
                                    <p style={{ margin: 0, fontSize: "0.95rem" }}>"حياك الله. تمام فيه عندنا خيارات. شوي أسئلة بسيطة عشان أساعدك أحسن. الميزانية المتاحة كم تقريباً؟"</p>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.4rem", textAlign: "right" }}>"Great, we have options. A few simple questions... What budget range are you considering?"</div>
                                </div>

                                {/* Turn 2 */}
                                <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.03)", padding: "1.2rem 1.5rem", borderRadius: "0 20px 20px 20px", border: "1px solid var(--border)", maxWidth: "85%" }}>
                                    <div style={{ fontSize: "0.75rem", color: "var(--primary)", marginBottom: "0.4rem", fontWeight: 800 }}>PROSPECT [10:16 AM]</div>
                                    <p style={{ margin: 0, fontStyle: "italic", fontSize: "0.95rem" }}>"حوالي 3 ملايين"</p>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>"Around 3 million"</div>
                                </div>

                                <div style={{ alignSelf: "flex-end", background: "var(--bg)", padding: "1.2rem 1.5rem", borderRadius: "20px 20px 0 20px", border: "1px solid var(--primary)", maxWidth: "85%" }}>
                                    <div style={{ fontSize: "0.75rem", color: "var(--primary)", marginBottom: "0.4rem", fontWeight: 800, textAlign: "right" }}>AI AGENT [10:16 AM]</div>
                                    <p style={{ margin: 0, fontSize: "0.95rem" }}>"تمام. هل تفضل فيلا جديدة أم مستعملة؟ ومتى تحتاج الفيلا؟"</p>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.4rem", textAlign: "right" }}>AI understands AED 3M, detects off-plan interest vs ready-move, and asks for timeline.</div>
                                </div>

                                {/* Final Summary */}
                                <div style={{ alignSelf: "center", width: "100%", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                                    <div style={{ fontWeight: 800, color: "var(--primary)", marginBottom: "1rem" }}>OUTCOME BY MINUTE 4:</div>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                                        {[
                                            { l: "Budget", v: "AED 3M (50% Cash)" },
                                            { l: "Timeline", v: "Before Summer" },
                                            { l: "Status", v: "UAE Resident" },
                                            { l: "Lead Score", v: "92/100 (Hot)" }
                                        ].map((stat, i) => (
                                            <div key={i} style={{ padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{stat.l}</div>
                                                <div style={{ fontWeight: 800 }}>{stat.v}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <p style={{ marginTop: "1.5rem", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                        Agent compiles 4 matching properties, sends photos + brief descriptions. Customer picks one. Agent books appointment in Zoho CRM for Ahmed (Jumeirah specialist), sending full context profile: nationality (Arab local), financing preference (50% cash), timeline urgency (4 months). Ahmed picks up with full context. <strong>The lead converts 72% of the time.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMON SCENARIOS SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="What are the Most Common AI Real Estate Automation Scenarios?" label="VERSATILE WORKFLOWS" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { 
                                title: "Scenario 1: Off-Plan Buyer", 
                                icon: <Building2 />,
                                text: "Handles developer payment plans, RERA-compliant options, and transfer tax implications. Routes to off-plan specialists." 
                            },
                            { 
                                title: "Scenario 2: Rental Inquiry", 
                                icon: <Users />,
                                text: "Detects tenant intent immediately. Captures move-in dates and budget before routing to the rental division." 
                            },
                            { 
                                title: "Scenario 3: Commercial", 
                                icon: <Briefcase />,
                                text: "Identifies business type and size requirements for retail or office space. Routes to commercial specialists." 
                            },
                            { 
                                title: "Scenario 4: Management", 
                                icon: <Database />,
                                text: "Captures vacancy details and maintenance challenges. Routes to Property Management, not sales." 
                            }
                        ].map((scenario, i) => (
                            <div key={i} className="reveal scenario-card" style={{ 
                                padding: "2rem", 
                                background: "var(--bg)", 
                                borderRadius: "24px", 
                                border: "1px solid var(--border)",
                                transition: "all 0.3s ease",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem"
                            }}>
                                <div style={{ color: "var(--primary)", background: "rgba(59, 130, 246, 0.1)", width: "45px", height: "45px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {React.cloneElement(scenario.icon, { size: 22 })}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.5rem" }}>{scenario.title}</h3>
                                    <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>{scenario.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    .scenario-card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                `}</style>
            </section>

            {/* WHY TRADITIONAL CRM FAILS */}
            <section style={{ padding: "120px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }} className="reveal">
                        <div className="section-label">THE INTEGRATION GAP</div>
                        <h2 className="section-title">Why Does Traditional CRM Often Fail in the UAE Real Estate Market?</h2>
                        <p style={{ maxWidth: "800px", margin: "0 auto", color: "var(--text-muted)", fontSize: "1.1rem" }}>
                            Zoho CRM is designed for sales pipelines, but real estate qualification is WhatsApp-first and mobile-first. Your agents live on WhatsApp, not in Zoho.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
                        {/* THE PROBLEM */}
                        <div className="reveal" style={{ 
                            padding: "3rem", 
                            background: "rgba(239, 68, 68, 0.02)", 
                            borderRadius: "32px", 
                            border: "1px solid rgba(239, 68, 68, 0.1)",
                            position: "relative"
                        }}>
                             <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", color: "rgba(239, 68, 68, 0.2)", fontWeight: 900, fontSize: "4rem", lineHeight: 1 }}>01</div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "2.5rem", color: "#ef4444", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <XCircle size={24} /> Traditional Implementation
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {[
                                    { t: "Data Entry Friction", d: "Agents receive 100+ inquiries/week; they're not logging each one in Zoho manually. Most leads never enter the system." },
                                    { t: "Personal Phone Silos", d: "The agent's WhatsApp thread is the system of record. If an agent leaves, their lead knowledge vanishes with them." },
                                    { t: "No Automated Logic", d: "Zoho doesn't automate 'low budget + non-resident = cold'. You're still manually judging every single lead." },
                                    { t: "The Response Queue", d: "Agents get backed up. A Thursday enquiry waits until Friday. In Dubai real estate, a cold lead is a dead lead." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ color: "#ef4444", fontWeight: 900, fontSize: "1.1rem" }}>{i + 1}.</div>
                                        <div>
                                            <div style={{ fontWeight: 800, marginBottom: "0.25rem", color: "var(--text)" }}>{item.t}</div>
                                            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* THE SOLUTION */}
                        <div className="reveal" style={{ 
                            padding: "3rem", 
                            background: "rgba(34, 197, 94, 0.03)", 
                            borderRadius: "32px", 
                            border: "1px solid rgba(34, 197, 94, 0.2)",
                            position: "relative",
                            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.05)"
                        }}>
                            <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", color: "rgba(34, 197, 94, 0.2)", fontWeight: 900, fontSize: "4rem", lineHeight: 1 }}>02</div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "2.5rem", color: "#22c55e", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <CheckCircle2 size={24} /> AI-Powered Workflow
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {[
                                    { t: "Zero Friction Entry", d: "The AI is the CRM entry point. Every WhatsApp interaction becomes an instant Zoho activity and lead record." },
                                    { t: "System of Record", d: "All qualification data lives in Zoho, shared across the team. Your business owns the data, not individual phones." },
                                    { t: "Automated Rules", d: "The AI applies your specific logic (Hot vs Warm), scores each lead automatically, and routes intelligently." },
                                    { t: "WhatsApp Speed", d: "Response within 12 minutes, 24/7. Your business answers while competitors are still sleeping or in meetings." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ color: "#22c55e", fontWeight: 900, fontSize: "1.1rem" }}>{i + 1}.</div>
                                        <div>
                                            <div style={{ fontWeight: 800, marginBottom: "0.25rem", color: "var(--text)" }}>{item.t}</div>
                                            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
                        <div className="reveal">
                             <SectionHeader title="How Does the AI Real Estate Agent Integrate with Zoho CRM?" label="SYSTEMS ON AUTOPILOT" />
                            <CollapsibleText maxHeight={250} fadeColor="var(--bg-secondary)">
                                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                                    The agent lives at the boundary of WhatsApp, n8n, Zoho CRM, and property databases. When a WhatsApp comes in, n8n: receives the webhook from WhatsApp Business API, matches the phone number to a Zoho contact (or creates a new record), retrieves conversation history from Zoho, passes to Claude for reasoning. Claude: understands the inquiry, generates contextual questions, routes decision (which team member should see this). The response is sent back to WhatsApp. The interaction is logged in Zoho as an activity on the contact record. The lead record is created/updated with qualification data (location preference, budget, timeline, etc.). When the customer confirms a viewing, n8n triggers Zoho Calendar to book the appointment and notify the assigned agent. We also integrate with: Property Finder API (to check live listings and availability), Bayut API (alternative property data source), DLD (Dubai Land Department - for ownership verification, if needed). This architecture means: no manual data entry, full data consistency, automatic routing, and audit trail for compliance.
                                </p>
                            </CollapsibleText>
                        </div>
                        <div className="reveal" style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "WhatsApp Business API", icon: <MessageCircle /> },
                                { title: "Claude 3.5 AI Core", icon: <BrainCircuit /> },
                                { title: "n8n Orchestration", icon: <Workflow /> },
                                { title: "Zoho CRM (UAE Center)", icon: <Database /> },
                                { title: "Property Finder API", icon: <Building2 /> },
                                { title: "DLD Verification", icon: <ShieldCheck /> }
                            ].map((integ, i) => (
                                <div key={i} style={{ padding: "1.25rem", background: "var(--bg)", borderRadius: "16px", border: "1px solid var(--border)", display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <div style={{ color: "var(--primary)" }}>{integ.icon}</div>
                                    <div style={{ fontWeight: 700 }}>{integ.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section style={{ padding: "120px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", alignItems: "center" }}>
                        <div style={{ flex: 1, minWidth: "350px" }} className="reveal">
                             <SectionHeader title="What Results Can I Expect from AI Real Estate Automation?" label="RESULTS & ROI" />
                            <div style={{ spaceY: "2.5rem" }}>
                                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "3rem" }}>
                                    We've deployed real estate AI agents at three brokerages. A 5-person sales team working with AI agents is operating like a 7-8 person team. Annual: AED 10.9M additional revenue from the same team and same market.
                                </p>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    {[
                                        { label: "Response Speed", val: "50x Faster" },
                                        { label: "Close Rate", val: "2.4x Better" },
                                        { label: "Team Productivity", val: "+60%" },
                                        { label: "Annual Revenue", val: "+AED 10.9M" }
                                    ].map((metric, i) => (
                                        <div key={i} style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                                            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px" }}>{metric.label}</div>
                                            <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>{metric.val}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>ROI Calculation:</div>
                                    <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.95rem" }}>
                                        Moving from 18% to 43% conversion on 180 inquiries/week = 19 extra deals/week. At AED 15k commission, that's AED 210k/week incremental revenue. Payback on Agent cost (AED 18k/month) in just 1 day.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{ flex: 1, minWidth: "350px" }} className="reveal">
                            <Image 
                                src="/images/real-estate-agent/real-estate-results-dashboard.png" 
                                alt="Measurable Impact Results Dashboard"
                                width={800}
                                height={600}
                                style={{ width: "100%", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPLIANCE SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1000px" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                         <div style={{ color: "var(--primary)", marginBottom: "1rem" }}><ShieldCheck size={48} strokeWidth={1.5} /></div>
                        <h2 className="section-title">How Does FI Digital Ensure RERA Compliance and Data Sovereignty?</h2>
                    </div>
                    <div className="reveal">
                        <CollapsibleText maxHeight={150} fadeColor="var(--bg-secondary)">
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", textAlign: "center" }}>
                                Real estate in UAE is regulated by RERA (Real Estate Regulatory Agency) in Dubai. Compliance requirements: client identification (KYC), data protection (personal data stored safely), transaction records (audit trail of all communications), escrow management (funds handled correctly). Our system: stores all data in UAE/EU servers (Zoho UAE data center), maintains full audit trails (every AI interaction is logged with timestamp and decision logic), supports KYC workflows (agent can capture ID info securely), doesn't handle escrow (that stays with your legal/finance team). RERA doesn't specifically regulate AI agents (regulations lag tech), but they care about outcomes: are leads being qualified legally, are transactions documented, is data protected? We satisfy all of that.
                            </p>
                        </CollapsibleText>
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section style={{ padding: "100px 1.5rem" }}>
                 <div className="container" style={{ maxWidth: "1100px" }}>
                    <SectionHeader title="How Long is the Implementation for a Real Estate AI Agent?" />
                    <div style={{ display: "grid", gap: "2rem" }}>
                        {[
                            { title: "Weeks 1-2: Discovery", text: "Provide sample WhatsApp inquiries (100+ messages), Zoho access, team interviews. We deliver AI specification and integration plan." },
                            { title: "Weeks 2-4: Build", text: "Configure n8n workflows, Claude prompts (trained on Dubai real estate & Arabic fluency), Zoho integration, property database APIs." },
                            { title: "Weeks 4-6: Soft Launch", text: "Agent handles 20% of traffic. We monitor quality, accuracy, escalations. You provide daily feedback for refinement." },
                            { title: "Weeks 6-8: Full Launch", text: "Agent handles 100% of traffic. Humans review escalations. Weekly monitoring calls. Within 8 weeks, you're live." }
                        ].map((step, i) => (
                            <div key={i} className="reveal" style={{ display: "flex", gap: "2rem", alignItems: "center", padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                <div style={{ minWidth: "60px", height: "60px", borderRadius: "15px", background: "var(--bg)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>{i + 1}</div>
                                <div>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>{step.title}</h3>
                                    <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <SectionHeader title="Common Questions About AI for UAE Real Estate Brokers" />
                    <div style={{ display: "grid", gap: "1.5rem" }}>
                        {[
                            { q: "What if the AI qualifies a lead wrong?", a: "We build in safeguards. Critical decisions (confirming a viewing appointment) require human review. If the AI scores a lead as 'hot' but the agent disagrees, the agent changes the score and we learn from it. Over time, the AI gets better. Also, even with imperfect scoring, you're still ahead because leads are getting faster responses." },
                            { q: "How does the AI handle price negotiation?", a: "It doesn't. Pricing discussion with a customer needs a human. The AI confirms your listed price and sends property info. If the customer asks 'Is there flexibility on price?', the AI routes to a human (escalation) with context." },
                            { q: "Can the AI handle Arabic dialects correctly?", a: "Yes. We've trained on Gulf Arabic (UAE, Saudi), Levantine (Syria, Lebanon, Palestine), and Egyptian. The AI also understands code-switching (mixing Arabic and English), which is normal in UAE. It's better than English-only agents." },
                            { q: "What if a customer insists on talking to a human immediately?", a: "The AI respects that. Customer says 'I want to talk to a human,' the AI routes immediately to an available agent (with context). This happens 5-8% of the time. Most customers don't mind AI as long as it's responsive and helpful." },
                            { q: "How does this integrate with your current Zoho setup?", a: "We integrate with existing Zoho. If you don't have Zoho, we'll help you set it up (4-6 weeks). Integration work is 1-2 weeks for a clean instance, 4-6 weeks if you have customization debt." },
                            { q: "What about lead data privacy?", a: "All data in Zoho (stored in UAE servers). WhatsApp messages are logged to Zoho. We don't store data separately. Compliance with UAE data protection and RERA requirements." },
                            { q: "Can we customize the qualifying questions?", a: "Yes, absolutely. Every business has slightly different qualifying criteria. Your luxury segment might weight 'neighborhood prestige' more; a suburban segment might weight 'school district' more. We build that into AI logic." },
                            { q: "What's the cost?", a: "AI agent itself: AED 18,000/month (includes n8n, Zoho, Claude API). If property database API integrations needed: +AED 3,000/month. If Zoho setup needed: AED 50-150K one-time. Typical total: AED 21K/month. ROI usually hits in 1-4 weeks." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* NEXT STEPS SECTION */}
            <section style={{ padding: "120px 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <SectionHeader title="How Do I Start Automating Real Estate Leads with AI?" label="READY TO CONVERT?" />
                    <p className="reveal" style={{ 
                        fontSize: "1.2rem", 
                        lineHeight: 1.8, 
                        color: "var(--text-muted)", 
                        marginBottom: "3rem",
                        maxWidth: "700px",
                        margin: "0 auto 3rem"
                    }}>
                        If you're managing 50+ WhatsApp inquiries daily and your response time is measured in hours, this is for you. Book a 30-minute call with us. We'll show a real example from another real estate company and give you a realistic timeline and cost estimate.
                    </p>
                    <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                         <Link href="/contact" className="btn-primary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem" }}>
                            Book Your Discovery Call
                         </Link>
                         <Link href="/" className="btn-secondary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem" }}>
                             WhatsApp Quick Connect
                         </Link>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
