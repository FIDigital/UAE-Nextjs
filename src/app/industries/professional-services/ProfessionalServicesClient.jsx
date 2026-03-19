"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    CheckCircle2, 
    FileText,
    Clock,
    Database,
    Users,
    Briefcase,
    ShieldCheck,
    Zap,
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
        title: "AI Proposal Drafting",
        desc: "Generate high-quality, complex proposals using Claude AI trained on your firm's historical successes and branding templates.",
        icon: <FileText size={24} />
    },
    {
        title: "Automated Billing",
        desc: "Convert timesheets and project milestones into accurate, professional invoices automatically via Zoho Books.",
        icon: <Clock size={24} />
    },
    {
        title: "Knowledge Retrieval (RAG)",
        desc: "Search across decades of internal project documentation and legal precedents in seconds using natural language queries.",
        icon: <Database size={24} />
    },
    {
        title: "Meeting Intelligence",
        desc: "Automated status updates, meeting summaries, and action item tracking so partners focus on strategy, not note-taking.",
        icon: <Cpu size={24} />
    },
    {
        title: "Compliance Automation",
        desc: "Ensure every document and workflow meets UAE regulatory standards with automated audit trails and document checks.",
        icon: <ShieldCheck size={24} />
    },
    {
        title: "Resource Optimization",
        desc: "AI-driven allocation of team members based on skills, past performance, and current billable capacity.",
        icon: <Users size={24} />
    }
];

const AdminRecoveryCalculator = () => {
    const [teamSize, setTeamSize] = useState(25);
    const [adminHoursPerWeek, setAdminHoursPerWeek] = useState(8);
    
    const [results, setResults] = useState({
        recoveredHours: 0,
        revenuePotential: 0
    });

    useEffect(() => {
        // Assume AI recovers 60% of admin hours
        const recoveredMonthly = (teamSize * adminHoursPerWeek * 4) * 0.6;
        // Assume avg billable rate of AED 800/hr
        const revenue = recoveredMonthly * 800;

        setResults({
            recoveredHours: recoveredMonthly,
            revenuePotential: revenue
        });
    }, [teamSize, adminHoursPerWeek]);

    return (
        <div style={{ 
            background: "var(--bg)", 
            padding: "clamp(1.5rem, 5vw, 2.5rem)", 
            borderRadius: "32px", 
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Billable Hour Recovery</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Total Team Size</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{teamSize} People</span>
                    </div>
                    <input 
                        type="range" 
                        min="5" 
                        max="200" 
                        value={teamSize} 
                        onChange={(e) => setTeamSize(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
                
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontWeight: 600 }}>Weekly Admin Hours Per Person</span>
                        <span style={{ color: "var(--primary)", fontWeight: 700 }}>{adminHoursPerWeek}h</span>
                    </div>
                    <input 
                        type="range" 
                        min="2" 
                        max="20" 
                        value={adminHoursPerWeek} 
                        onChange={(e) => setAdminHoursPerWeek(parseInt(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--primary)" }}
                    />
                </div>
            </div>

            <div className="calc-results-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem", background: "var(--primary)", borderRadius: "20px", color: "white", textAlign: "center" }}>
                    <div style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "0.5rem" }}>Monthly Hours Recovered</div>
                    <div style={{ fontSize: "2rem", fontWeight: 900 }}>{Math.round(results.recoveredHours)} Hours</div>
                </div>
                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", textAlign: "center" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Potential Revenue Lift (Monthly)</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary)" }}>AED {Math.round(results.revenuePotential).toLocaleString()}</div>
                </div>
            </div>
            
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1.5rem", textAlign: "center" }}>
                *Based on standard UAE consulting rates and AI efficiency benchmarks.
            </p>
        </div>
    );
};

export default function ProfessionalServicesClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-ps");
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
                        src="/images/industries/professional-services-hero.png" 
                        alt="Professional Services Dubai" 
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
                        <div className="section-label reveal-ps">Professional Services</div>
                        <h1 className="reveal-ps" style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "1.5rem",
                            letterSpacing: "-0.03em"
                        }}>
                             Deliver More Value with <br />
                             <span className="text-gradient">Less Administrative Overhead</span>
                        </h1>
                        <p className="reveal-ps" style={{
                            fontSize: "clamp(1rem, 1.2vw, 1.25rem)",
                            color: "var(--text-muted)",
                            maxWidth: "700px",
                            marginBottom: "3rem",
                            lineHeight: 1.7
                        }}>
                            Professional services firms lose up to 40% of partner time to non-billable admin: proposals, timesheets, 
                            invoices, and knowledge searches. Our AI assistants automate the admin layer so your experts focus on 
                            client work.
                        </p>
                        <div className="reveal-ps" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem" }}>
                                Automate Your Admin Layer
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
                            { value: "40%", label: "Time Spent on Non-Billable Tasks" },
                            { value: "85%", label: "Faster Proposal Drafting with AI" },
                            { value: "0%", label: "Manual Entry in AI-Driven Workflows" },
                            { value: "2x", label: "Increase in Case Capacity" }
                        ].map((stat, i) => (
                            <div key={i} className="reveal-ps" style={{ textAlign: "center" }}>
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
                    <div style={{ marginBottom: "60px", textAlign: "center" }} className="reveal-ps">
                        <div className="section-label">Solutions</div>
                        <h2 className="section-title">High-Impact AI for Experts</h2>
                    </div>

                    <div className="solutions-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {solutions.map((item, idx) => (
                            <div key={idx} className="reveal-ps" style={{
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
                        <div className="reveal-ps">
                            <div className="section-label">EFFICIENCY ROI</div>
                            <h2 className="section-title" style={{ textAlign: "left" }}>Recover Your Most Valuable Asset: Time</h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                                Every hour spent on a proposal or a report is an hour not billed to a client. See the massive impact 
                                AI-driven efficiency can have on your firm's bottom line.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {[
                                    "AI-powered proposal & contract generation",
                                    "Automated time tracking & Zoho Books billing",
                                    "Proprietary knowledge base for split-second research",
                                    "Seamless CRM & Document Management integration"
                                ].map((tick, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                        <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                                        <span style={{ fontWeight: 600 }}>{tick}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-ps">
                            <AdminRecoveryCalculator />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "100px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="reveal-ps" style={{ 
                        maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem", 
                        background: "var(--primary)", borderRadius: "40px", color: "white"
                    }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
                            Future-Proof Your Firm
                        </h2>
                        <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "2.5rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
                            Join the elite UAE firms turning administrative friction into a competitive advantage.
                        </p>
                        <Link href="/contact" className="btn btn-primary" style={{ background: "white", color: "var(--primary)", padding: "1rem 2.5rem" }}>
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* NAVIGATION LINKS */}
            <section style={{ padding: "60px 0", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
                    <Link href="/industries" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>All Industries</Link>
                    <Link href="/product-studio" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 600 }}>Product Studio</Link>
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
                    .reveal-ps { display: flex; flex-direction: column; align-items: center; text-align: center; }
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
