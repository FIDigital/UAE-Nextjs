"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    CheckCircle2, 
    MessageSquare,
    Calendar,
    ClipboardList,
    Stethoscope,
    ShieldCheck,
    Smartphone,
    HeartPulse,
    UserCheck,
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
        title: "WhatsApp Appointment Booking",
        desc: "Automated, multilingual appointment scheduling via WhatsApp, allowing patients to book or reschedule 24/7.",
        icon: <Calendar size={24} />
    },
    {
        title: "Patient Intake Automation",
        desc: "AI-guided pre-visit questionnaires and intake forms that sync directly with your health management system.",
        icon: <ClipboardList size={24} />
    },
    {
        title: "Insurance Verification",
        desc: "Instant pre-authorization and insurance verification checks to reduce waiting room stress and claim rejections.",
        icon: <ShieldCheck size={24} />
    },
    {
        title: "Care Reminders & Follow-ups",
        desc: "Personalized medication reminders and post-visit care instructions delivered automatically via the patient's preferred channel.",
        icon: <HeartPulse size={24} />
    },
    {
        title: "Referral Coordination",
        desc: "Streamline communication between specialists and primary care with automated data sharing and status tracking.",
        icon: <UserCheck size={24} />
    },
    {
        title: "DHA Compliance Workflows",
        desc: "AI-driven logging and document management to ensure full compliance with DHA and HAAD regulatory standards.",
        icon: <Stethoscope size={24} />
    }
];

const ClinicEfficiencyCalculator = () => {
    const [dailyPatients, setDailyPatients] = useState(40);
    const [noShowRate, setNoShowRate] = useState(15);
    
    const [results, setResults] = useState({
        recoveredRevenue: 0,
        staffHoursSaved: 0
    });

    useEffect(() => {
        // Assume AI reminders reduce no-shows by 40%
        const noShowsReduced = (dailyPatients * (noShowRate/100)) * 0.4;
        const recoveredMonthly = noShowsReduced * 350 * 22; // Avg AED 350 per consult
        // Assume 10 mins saved per patient intake/scheduling
        const hoursSaved = (dailyPatients * 10 / 60) * 22;

        setResults({
            recoveredRevenue: recoveredMonthly,
            staffHoursSaved: hoursSaved
        });
    }, [dailyPatients, noShowRate]);

    return (
        <div style={{ 
            background: "var(--bg)", 
            padding: "clamp(1.5rem, 5vw, 2.5rem)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Clinic Efficiency Calculator</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Daily Patient Volume</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{dailyPatients} Patients</span>
                    </div>
                    <input 
                        type="range" 
                        min="10" 
                        max="200" 
                        value={dailyPatients} 
                        onChange={(e) => setDailyPatients(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
                
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Current No-Show Rate (%)</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{noShowRate}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="5" 
                        max="30" 
                        value={noShowRate} 
                        onChange={(e) => setNoShowRate(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
            </div>

            <div className="calc-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem", background: "rgba(34, 197, 94, 0.1)", borderRadius: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Est. Revenue Recovery (Monthly)</div>
                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#22c55e" }}>AED {Math.round(results.recoveredRevenue).toLocaleString()}</div>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Front-Desk Hours Saved (Monthly)</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>{Math.round(results.staffHoursSaved)} Hours</div>
                </div>
            </div>
            
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.5rem", textAlign: "center" }}>
                *Estimates based on UAE private healthcare benchmarks and AI integration results.
            </p>
        </div>
    );
};

export default function HealthcareClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Healthcare AI Automation",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Bilingual AI agents for patient management, appointment scheduling, and insurance verification for UAE healthcare providers.",
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
                "name": "How does AI help UAE clinics with patient management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI agents automate patient intake, multilingual WhatsApp scheduling, and insurance verification, reducing administrative burden and no-show rates by 40%."
                }
            },
            {
                "@type": "Question",
                "name": "Is the healthcare AI compliant with DHA regulations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our solution includes DHA compliance workflows for AI-driven logging and document management."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-hc");
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
                        src="/images/industries/healthcare-hero.png" 
                        alt="UAE Healthcare AI" 
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
                        <div className="section-label reveal-hc">What are the Key AI Capabilities Driving 24/7 Patient Support in Dubai?</div>
                        <h1 className="reveal-hc" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             How Does AI Modernize <br />
                             <span className="text-gradient">Healthcare Operations in the UAE?</span>
                        </h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital deploys specialized AI agents for Dubai healthcare providers that automate patient intake, insurance verification, and multilingual WhatsApp scheduling. By bridging DHA-compliant workflows with 24/7 autonomous support, we help clinics reduce no-shows by 40% and resolve 90% of administrative queries in Arabic and English.
                        </p>
                        <p className="reveal-hc" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            UAE healthcare is booming with rising patient expectations: instant booking, WhatsApp communication, 
                            seamless insurance processing. Our AI agents handle intake, scheduling, follow-ups, and insurance 
                            verification.
                        </p>
                        <div className="reveal-hc" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Modernize Your Clinic
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
                            { value: "40%", label: "Reduction in No-Show Rates" },
                            { value: "24/7", label: "Availability for Patient Booking" },
                            { value: "60%", label: "Faster Insurance Processing" },
                            { value: "100%", label: "DHA Compliance Integration" }
                        ].map((stat, i) => (
                            <div key={i} className="reveal-hc" style={{ textAlign: "center" }}>
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
                    <div style={{ marginBottom: "60px", textAlign: "center" }} className="reveal-hc">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title">What is the Patient-First AI Strategy for UAE Clinics?</h2>
                    </div>

                    <div className="solutions-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="reveal-hc" style={{
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
                        <div className="reveal-hc">
                            <div className="section-label">CLINIC OPTIMIZATION</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>Quantify Your Operational Savings</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                                Manual scheduling and patient intake are bottlenecks for growing clinics. See how AI can recover lost 
                                revenue from no-shows and free up your front-desk staff.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {[
                                    "Automated multilingual WhatsApp scheduling",
                                    "Deep integration with Zoho Health & EMR systems",
                                    "Real-time insurance eligibility checks",
                                    "Patient-centric care instructions & reminders"
                                ].map((tick, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                                        <span style={{ fontWeight: 600 }}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-hc">
                            <ClinicEfficiencyCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-hc" style={{ 
                        maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", 
                        background: "var(--primary)", borderRadius: "40px", color: "white"
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                            How Do I Scale My Healthcare Operations in 6 Weeks with AI?
                        </h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Join forward-thinking medical groups in Dubai using AI to deliver superior patient care.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 2.5rem" }}>
                            Schedule Your Assessment
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
                    .reveal-hc { display: flex; flex-direction: column; align-items: center; text-align: center; }
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
