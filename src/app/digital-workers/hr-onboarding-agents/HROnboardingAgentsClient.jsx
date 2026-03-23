"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Users, 
    ArrowRight, 
    CheckCircle2, 
    Clock, 
    ShieldCheck, 
    MessageCircle, 
    FileText, 
    UserPlus, 
    Building2,
    Calendar,
    Briefcase,
    Globe
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SectionHeader = ({ title, label }) => (
    <div style={{ marginBottom: "4rem", textAlign: "center" }} className="reveal">
        {label && <div className="section-label">{label}</div>}
        <h2 className="section-title">{title}</h2>
    </div>
);

const TimelineStep = ({ icon: Icon, title, desc, delay }) => (
    <div className="reveal-timeline" style={{ flex: 1, position: "relative", padding: "2rem", minWidth: "250px" }}>
        <div style={{ 
            width: "60px", 
            height: "60px", 
            borderRadius: "50%", 
            background: "rgba(59, 130, 246, 0.1)", 
            color: "var(--primary)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            marginBottom: "1.5rem",
            position: "relative",
            zIndex: 2,
            border: "1px solid var(--border)"
        }}>
            <Icon size={28} />
        </div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem" }}>{title}</h3>
        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</p>
        <style jsx>{`
            .reveal-timeline::after {
                content: '';
                position: absolute;
                top: 50px;
                left: 80px;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, var(--primary) 0%, transparent 100%);
                opacity: 0.2;
                display: block;
            }
            @media (max-width: 991px) {
                .reveal-timeline::after { display: none; }
            }
        `}</style>
    </div>
);

export default function HROnboardingAgentsClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI HR Onboarding Agent Deployment",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Bilingual AI agents for HR automation, employee onboarding, and policy Q&A integrated with Zoho People in the UAE.",
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
                "name": "How does AI speed up employee onboarding in Dubai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI agents automate document collection via WhatsApp, initiate IT provisioning, and guide new hires through UAE-specific compliance in days instead of weeks."
                }
            },
            {
                "@type": "Question",
                "name": "Can AI agents answer questions about UAE labor laws?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our HR agents are trained on your company policies and UAE labor regulations to provide instant, bilingual answers to employee queries."
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

        gsap.from(".reveal-timeline", {
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".timeline-container",
                start: "top 80%"
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
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
                padding: "clamp(120px, 15vh, 180px) 1.5rem 80px",
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
                        src="/images/hr-onboarding-hero.png"
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
                    <div style={{ maxWidth: "900px" }}>
                        <div className="reveal" style={{ textAlign: "left" }}>
                            <div className="section-label" style={{ marginBottom: "1rem" }}>AI DIGITAL WORKFORCE</div>
                            <h1 style={{ 
                                fontSize: "clamp(2.2rem, 5vw, 3.8rem)", 
                                fontWeight: 900, 
                                marginBottom: "1.5rem", 
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em",
                                color: "var(--text)"
                            }}>
                                How Does AI HR Onboarding Scale for UAE Enterprises <span style={{ 
                                    background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>Without Hiring?</span>
                            </h1>
                            <p className="hero-text" style={{ 
                                fontSize: "1.1rem", 
                                fontWeight: 700,
                                color: "var(--primary)",
                                maxWidth: "850px",
                                marginBottom: "1.5rem",
                                lineHeight: 1.6
                            }}>
                                FI Digital builds AI HR agents for Dubai enterprises that automate employee onboarding, leave management, and policy Q&A. By connecting Zoho People with n8n orchestration, our digital workers ensure UAE labor law compliance and Day 1 IT provisioning with 94% workflow automation.
                            </p>
                            <h2 style={{ 
                                fontSize: "clamp(1.1rem, 2vw, 1.5rem)", 
                                fontWeight: 500, 
                                color: "var(--text-muted)", 
                                marginBottom: "2rem", 
                                lineHeight: 1.5,
                                maxWidth: "750px" 
                            }}>
                                AI Agents That Handle Onboarding Paperwork, Answer Policy Questions, and Manage Leave
                            </h2>
                            <p style={{ 
                                fontSize: "clamp(1rem, 1.2vw, 1.1rem)", 
                                lineHeight: 1.8, 
                                color: "var(--text-secondary)", 
                                marginBottom: "2.5rem", 
                                opacity: 0.9,
                                maxWidth: "800px" 
                            }}>
                                Onboarding in the UAE involves a complex chain: visa processing, Emirates ID, medical 
                                insurance, bank setup, and IT provisioning. Our HR Agent automates the entire workflow, 
                                initiating tasks, sending reminders via WhatsApp, and tracking everything in Zoho People.
                            </p>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
                                    Modernize Your HR Operations <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* KEY SOLUTIONS SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "rgba(255,255,255,0.01)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div className="reveal" style={{ textAlign: "left", marginBottom: "4rem" }}>
                        <div className="section-label" style={{ color: "var(--primary)" }}>CORE CAPABILITIES</div>
                        <h2 className="section-title">What Key AI Capabilities Drive 24/7 HR Support for Dubai Businesses?</h2>
                    </div>
                    
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", 
                        gap: "2rem" 
                    }}>
                        {[
                            { title: "Onboarding Orchestration", icon: UserPlus, desc: "End-to-end workflow orchestration via n8n connecting Zoho People and internal tools." },
                            { title: "WhatsApp Documentation", icon: MessageCircle, desc: "Secure document collection from new hires via a familiar, mobile-first interface." },
                            { title: "Automated Leave System", icon: Calendar, desc: "Full leave management: application, approval routing, and balance tracking in Zoho." },
                            { title: "Policy Q&A Agent", icon: Briefcase, desc: "Instant answers about leave, benefits, and UAE labor law in Arabic and English." },
                            { title: "Payroll Synchronization", icon: CheckCircle2, desc: "Seamless payroll data synchronization with Zoho Payroll to ensure zero-error payment." },
                            { title: "Exit Workflow Automation", icon: ArrowRight, desc: "Exit process automation: clearance workflows and final settlement calculations." }
                        ].map((item, i) => (
                            <div key={i} className="reveal card-hover" style={{ 
                                padding: "3rem 2.5rem", 
                                background: "var(--bg-secondary)", 
                                borderRadius: "32px", 
                                border: "1px solid var(--border)", 
                                height: "100%",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "left"
                            }}>
                                <div style={{ 
                                    width: "56px", 
                                    height: "56px", 
                                    borderRadius: "16px", 
                                    background: "rgba(59, 130, 246, 0.08)", 
                                    color: "var(--primary)", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    marginBottom: "2rem",
                                    border: "1px solid rgba(59, 130, 246, 0.15)"
                                }}>
                                    <item.icon size={28} />
                                </div>
                                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.01em" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem", opacity: 0.8 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    .card-hover:hover {
                        transform: translateY(-8px);
                        border-color: var(--primary);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                        background: rgba(255,255,255,0.03);
                    }
                `}</style>
            </section>


            {/* FINAL CTA SECTION */}
            <section style={{ padding: "100px 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", opacity: 0.05, pointerEvents: "none" }} />
                <div className="container" style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
                    <div className="reveal">
                        <SectionHeader title="How Do I Scale My HR Operations in 6 Weeks with AI?" />
                        <p style={{ 
                            fontSize: "clamp(1rem, 1.2vw, 1.15rem)", 
                            color: "var(--text-muted)", 
                            marginBottom: "3rem", 
                            lineHeight: 1.8, 
                            maxWidth: "700px",
                            margin: "0 auto 3rem" 
                        }}>
                            Stop the paperwork cycle. Give your HR team the space to focus on strategy and culture while our agents handle the noise.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap", width: "100%" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ 
                                padding: "1rem clamp(1.5rem, 4vw, 2.5rem)", 
                                fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "0.75rem",
                                textAlign: "center",
                                minWidth: "min(320px, 100%)",
                                height: "auto"
                            }}>
                                Start HR Audit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
