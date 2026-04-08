"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    BrainCircuit,
    Cpu,
    Globe,
    Lock,
    Zap,
    ArrowRight,
    CheckCircle2,
    Users,
    Activity,
    Search,
    Database,
    LineChart,
    Rocket,
    MessageSquare,
    Bot,
    Sparkles
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AIClient() {
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
                {/* Background Visual matched to Home */}
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
                                .hero-content .grid { grid-template-columns: 1fr !important; text-align: left; max-width: 400px; margin: 0 auto 3rem !important; }
                            }
                        `}</style>
                        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "center", width: "100%" }}>
                        <div className="hero-content hero-reveal" style={{ maxWidth: "800px", opacity: 0, transform: "translateY(20px)" }}>
                            <div className="section-label">AI STUDIO 🚀</div>
                            <h1 style={{
                                fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
                                fontWeight: 900,
                                lineHeight: 1.1,
                                marginBottom: "2rem",
                                letterSpacing: "-0.03em"
                            }}>
                                Empower your business <br />
                                <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                    with tailored AI solutions
                                </span>
                            </h1>
                            <p style={{ 
                                fontSize: "clamp(1.1rem, 2vw, 1.25rem)", 
                                color: "var(--text-muted)",
                                lineHeight: 1.6,
                                marginBottom: "3rem"
                            }}>
                                Empower your business with our tailored AI solutions. Harness Zoho’s AI capabilities to boost productivity, optimize operations, and achieve unparalleled success. AI Studio can help you with following:
                            </p>
                            
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
                                {[ "AI Consulting", "Building Models", "Data Prep", "AI Adoption" ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontWeight: 700 }}>
                                        <CheckCircle2 size={20} color="var(--primary)" /> {item}
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "inherit" }}>
                                <Link href="/contact" className="btn-primary">
                                    Book Free Demo <ArrowRight size={18} />
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
                                    src="/images/Ai/Ai-studio.png"
                                    alt="AI Studio on Zoho"
                                    width={700}
                                    height={500}
                                    style={{ width: "100%", height: "auto", borderRadius: "24px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ STAGGERED SECTIONS ═══════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem", background: "var(--bg-secondary)", borderRadius: "60px 60px 0 0", marginTop: "-60px", position: "relative", zIndex: 1 }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    
                    {/* Item 1: Zia Assistant */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(3rem, 8vw, 6rem)", alignItems: "center", marginBottom: "clamp(100px, 15vh, 180px)" }}>
                        <div className="reveal-item" style={{ order: 1 }}>
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>ZIA – AI POWERED ASSISTANT FOR YOUR BUSINESS</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Welcome to Zia, your AI-powered business assistant seamlessly integrated with Zoho Applications. Zia is here to enhance your productivity, provide valuable predictions, streamline assignment processes, and offer insights and reporting. Discover how Zia can make a difference in various aspects of your business:
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                                {[
                                    { t: "Zia for Sales", d: "Data Enrichment, Best time to call, Cross Sell predictions, Sales Pipeline Guidance." },
                                    { t: "Zia for Managers", d: "Deal Conversion Predictor, Anomalies Detector, AI Powered Deal Assignment." },
                                    { t: "Zia for Service teams", d: "AI Powered Chatbot, Cross Selling Engine to help Service team sell, Case assignment logic." }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                                        <div>
                                            <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{item.t}</div>
                                            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>{item.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p style={{ fontStyle: "italic", fontSize: "0.95rem", color: "var(--text-muted)", borderLeft: "3px solid var(--primary)", paddingLeft: "1.5rem" }}>
                                We at FI Digital’s AI Studio, work with our ANZ clients to identify their practical use cases and help design their processes as well as Zoho software to bring in AI use cases. Our goal is to get you maximum productivity boost out of your existing Zoho Application Stack.
                            </p>
                        </div>
                        <div className="reveal-item" style={{ order: 2 }}>
                            <div style={{ 
                                background: "var(--bg)", 
                                border: "1px solid var(--border)", 
                                padding: "1.5rem", 
                                borderRadius: "40px",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image 
                                    src="/images/Ai/Zia.png" 
                                    alt="Zia AI Powered Assistant" 
                                    width={600} height={450}
                                    style={{ borderRadius: "24px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Creator Modeler */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(3rem, 8vw, 6rem)", alignItems: "center", marginBottom: "clamp(100px, 15vh, 180px)" }}>
                        <div className="reveal-item" style={{ 
                            order: typeof window !== 'undefined' && window.innerWidth <= 1024 ? 2 : 2 
                        }}>
                            <style jsx>{`
                                @media (max-width: 1024px) {
                                    .stagger-reverse { order: 2 !important; }
                                    .stagger-text { order: 1 !important; }
                                }
                            `}</style>
                            <div className="stagger-reverse" style={{ 
                                background: "var(--bg)", 
                                border: "1px solid var(--border)", 
                                padding: "1.5rem", 
                                borderRadius: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image 
                                    src="/images/Ai/Creator.png" 
                                    alt="Zoho Creator Modeling" 
                                    width={600} height={450}
                                    style={{ borderRadius: "24px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                        <div className="reveal-item stagger-text" style={{ order: 1 }}>
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>CREATOR MODELER</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                One of the most advanced tools within Zoho is, Zoho Creator Modeler, which helps you design criterias and train AI model according to your specific business requirements. Few examples are:
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.25rem" }}>
                                {[
                                    { t: "Object detection", d: "Train model based on photos, approve or reject certain products based on specific training data." },
                                    { t: "OCR", d: "Embed delivery docket data straight into your mobile app by scanning it using OCR." },
                                    { t: "Prediction model", d: "Create supply chain model, train data which needs to be tracked with weightage." }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: "flex", gap: "1rem" }}>
                                        <CheckCircle2 color="var(--primary)" size={22} style={{ flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontWeight: 800, marginBottom: "0.25rem" }}>{item.t}</div>
                                            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.d}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Item 3: Catalyst AI */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(3rem, 8vw, 6rem)", alignItems: "center", marginBottom: "clamp(100px, 15vh, 180px)" }}>
                        <div className="reveal-item" style={{ order: 1 }}>
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>CATALYST AI SERVICES</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Catalyst has host of AI services, which can be leveraged by our clients to design micro AI Models suiting their specific business needs, few examples are below:
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                {[
                                    { t: "Quick ML", d: "Helps with use cases like forecasting engine and fraud detection models." },
                                    { t: "ConvoKraft", d: "Conversational lead AI to help with use cases like booking appointments and refund processing." },
                                    { t: "SmartBrowz", d: "Scrap data from across your web systems and generate PDF reports / templates to share it with stakeholders." }
                                ].map((item, i) => (
                                    <div key={i} style={{ padding: "1.5rem", background: "rgba(99, 102, 241, 0.05)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                        <div style={{ fontWeight: 800, marginBottom: "0.4rem", color: "var(--primary)" }}>{item.t}</div>
                                        <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-item" style={{ order: 2 }}>
                            <div style={{ 
                                background: "var(--bg)", 
                                border: "1px solid var(--border)", 
                                padding: "1.5rem", 
                                borderRadius: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image 
                                    src="/images/Ai/Catalyst-ai.png" 
                                    alt="Catalyst AI Capability" 
                                    width={600} height={450}
                                    style={{ borderRadius: "24px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Item 4: OpenAI Integration */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "clamp(3rem, 8vw, 6rem)", alignItems: "center", marginBottom: "clamp(100px, 15vh, 180px)" }}>
                        <div className="reveal-item" style={{ order: 2 }}>
                            <div style={{ 
                                background: "var(--bg)", 
                                border: "1px solid var(--border)", 
                                padding: "1.5rem", 
                                borderRadius: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image 
                                    src="/images/Ai/zia-openai.png" 
                                    alt="Zia Powered by OpenAI" 
                                    width={600} height={450}
                                    style={{ borderRadius: "24px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                        <div className="reveal-item" style={{ order: 1 }}>
                            <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>ZIA POWERED BY OPEN AI</h3>
                            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Zoho gives you option to integrate Zia with Open AI through API, we can help you connect your Open AI account and help achieve productivity goals like these:
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", marginBottom: "2rem" }}>
                                {[
                                    { t: "Email assistant", d: "Write Sales email with ease with Open AI integration, right within email drafting tool within Zoho CRM." },
                                    { t: "Ticket Response Augmentation", d: "Give contectually rich replies by letting Open AI and Zia do it’s magic. Saving lot of time for Customer Service teams, while responding to customer tickets." },
                                    { t: "Zoho Social", d: "Create engaging social media posts from Zoho Social, take content help from Open AI without leaving Zoho Social interface." },
                                    { t: "Zoho Analytics", d: "Create complex reports and dashboards by taking Zia and Open AI’s help, it can suggest formulas to slice, dice and combine complex set of data sets." }
                                ].map((box, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem" }}>
                                        <Zap size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: "4px" }} />
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.25rem" }}>{box.t}</div>
                                            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{box.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                                Many more Zoho applications can leverage Open AI’s APIs and help deliver productivity gains.
                            </p>
                        </div>
                    </div>

                    {/* Why Section */}
                    <div style={{ marginTop: "clamp(100px, 15vh, 160px)", borderTop: "1px solid var(--border)", paddingTop: "clamp(60px, 10vh, 100px)" }}>
                        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.04em" }}>WHY WORK WITH <span style={{ color: "var(--primary)" }}>FIDIGITAL AI STUDIO?</span></h2>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "2rem" }}>
                            {[
                                "Practical AI use case deployments",
                                "Consultative approach",
                                "Hand holding right from discovery, up to AI adoption by business users",
                                "8+ years of expertise on Zoho Platform",
                                "Dedicated team of AI Consultants",
                                "RoI driven approach to reduce cost and boost efficiencies"
                            ].map((text, i) => (
                                <div key={i} className="reveal-item" style={{ 
                                    padding: "2rem", 
                                    background: "var(--bg)", 
                                    borderRadius: "32px", 
                                    border: "1px solid var(--border)",
                                    display: "flex", 
                                    gap: "1.25rem", 
                                    alignItems: "center" 
                                }}>
                                    <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "var(--primary)15", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", flexShrink: 0 }}>
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span style={{ fontWeight: 700, lineHeight: 1.4 }}>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ══ FOOTER CTA ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(80px, 12vh, 160px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div className="reveal-item" style={{ 
                        background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                        padding: "clamp(4rem, 8vw, 7.5rem)",
                        borderRadius: "clamp(30px, 5vw, 60px)",
                        textAlign: "center",
                        color: "white",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.04em" }}>Ready to Architect <br /> Your AI Future?</h2>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)", border: "none" }}>
                                Book Your AI Roadmap <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
