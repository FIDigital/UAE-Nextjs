"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    Zap, 
    Shield, 
    ArrowRight, 
    CheckCircle2, 
    FileText, 
    PieChart, 
    Clock, 
    Database, 
    TrendingUp,
    Calculator,
    Lock,
    Search,
    ChevronDown,
    Building2,
    Users,
    Briefcase,
    Globe,
    Scale
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FAQItem from '@/components/FAQItem';

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ title, label, color = "var(--primary)" }) => (
    <div className="rv" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <div className="section-label" style={{ color }}>{label}</div>
        <h2 className="section-title">{title}</h2>
    </div>
);

const AutomationBlock = ({ title, description, result, color = "var(--primary)", index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className="reveal card" style={{ 
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.025)",
            borderRadius: "32px",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            height: "100%",
            boxShadow: isExpanded ? `0 30px 60px ${color}15` : "none",
            transform: isExpanded ? "translateY(-10px)" : "none",
        }} onClick={() => setIsExpanded(!isExpanded)}>
            <div style={{ 
                position: "absolute", 
                top: "1.5rem", 
                right: "2rem", 
                fontSize: "4rem", 
                fontWeight: 900, 
                opacity: 0.05, 
                color: "var(--primary)",
                userSelect: "none",
                transition: "all 0.6s ease"
            }}>
                {index + 1}
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div style={{ 
                    width: "4px", 
                    height: "30px", 
                    background: color, 
                    borderRadius: "2px",
                    boxShadow: isExpanded ? `0 0 15px ${color}` : "none",
                    transition: "all 0.6s ease"
                }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, margin: 0 }}>{title}</h3>
            </div>
            
            <div style={{ 
                maxHeight: isExpanded ? "800px" : "86px", 
                overflow: "hidden",
                transition: "all 0.7s cubic-bezier(0.33, 1, 0.68, 1)",
                marginBottom: "2rem",
                position: "relative"
            }}>
                <p style={{ 
                    fontSize: "1.05rem", 
                    lineHeight: 1.7, 
                    color: "var(--text-muted)", 
                    margin: 0,
                    opacity: isExpanded ? 1 : 0.7,
                    transition: "opacity 0.6s ease"
                }}>
                    {description}
                </p>
                {!isExpanded && (
                    <div style={{ 
                        position: "absolute", 
                        bottom: 0, 
                        left: 0, 
                        width: "100%", 
                        height: "40px", 
                        background: "linear-gradient(to bottom, transparent, rgba(5, 10, 20, 0.4))",
                        pointerEvents: "none"
                    }} />
                )}
            </div>
            
            <div style={{ marginTop: "auto" }}>
                <div style={{ 
                    padding: "1.25rem 1.5rem", 
                    background: isExpanded ? "rgba(34, 197, 94, 0.15)" : "rgba(34, 197, 94, 0.08)", 
                    borderRadius: "20px", 
                    color: "#22c55e", 
                    fontSize: "0.95rem", 
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    border: "1px solid rgba(34, 197, 94, 0.15)",
                    transition: "all 0.4s ease"
                }}>
                    <Zap size={20} />
                    <span style={{ flexGrow: 1 }}>{result}</span>
                </div>
                
                <div style={{ 
                    textAlign: "center", 
                    marginTop: "1.5rem", 
                    fontSize: "0.85rem", 
                    fontWeight: 700, 
                    color: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    opacity: isExpanded ? 1 : 0.6,
                    transition: "all 0.4s ease",
                    letterSpacing: "1px"
                }}>
                    {isExpanded ? "HIDE DETAILS" : "VIEW FULL SCOPE"} 
                    <ChevronDown size={16} style={{ transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }} />
                </div>
            </div>
        </div>
    );
};

export default function FinanceProcurementAgentsClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Finance & Procurement Agent",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "AI-powered finance automation for UAE businesses. Handles AP/AR, bank reconciliation, and VAT compliance with Zoho Books integration.",
        "areaServed": {
            "@type": "Country",
            "name": "United Arab Emirates"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "AED",
            "priceRange": "AED 25,000 - 1,000,000"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can AI handle UAE VAT compliance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI agents are programmed with UAE-specific VAT rules, including non-recoverable tax on fuel, import duty treatments, and Free Zone specific regulations."
                }
            },
            {
                "@type": "Question",
                "name": "How long does month-end close take with AI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI finance agents reduce month-end close time from an average of 10 days down to just 3 days by automating reconciliation and posting."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-content > *", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.utils.toArray(".reveal").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const faqs = [
        {
            question: "What if the AI codes an invoice to the wrong GL account?",
            answer: "It will, occasionally. We catch this two ways. First, humans review before posting (soft deployment phase). If humans see errors, we adjust the AI logic (if the AI is misclassifying vendor XYZ's invoices, we add a rule). Second, variance analysis shows unexpected balances (if office supplies are suddenly 200% of budget, that might indicate miscoding). We investigate and adjust. Over time, the AI gets better. Most errors are caught in the first month; after that, accuracy is 99%+."
        },
        {
            question: "How does this handle multi-currency operations?",
            answer: "Most of your transactions are AED. Some are USD (imports), some might be INR (if you have India operations), some EUR. Zoho Books handles multi-currency natively. The AI matches transactions to appropriate accounts and currency translation is handled by Zoho's standard methods. For unusual currencies, the AI flags for human review."
        },
        {
            question: "What about approval workflows?",
            answer: "You define approval chains (invoices under AED 10K go to department manager; AED 10-50K go to CFO; above AED 50K go to board). The AI enforces these automatically. If an invoice needs CFO approval and the CFO is on vacation, it routes to the acting CFO. Approval delay is minimized because approvers see pre-validated transactions with full context."
        },
        {
            question: "Is this compliant with DFSA or other UAE regulations?",
            answer: "Yes. Full audit trail (every transaction decision is logged). Data stored in UAE servers (Zoho Books UAE data center). Compliance with VAT rules (automated). If you're regulated (financial services, healthcare), we review specific requirements with your compliance team before implementation."
        },
        {
            question: "What if we change our chart of accounts or cost center structure?",
            answer: "We update the AI logic and re-train on the new structure. This takes 1-2 days. Future transactions use the new structure; past data can be re-categorized if needed."
        },
        {
            question: "How long until we see ROI?",
            answer: "Time savings ROI: 6-8 weeks (cost of agent is recovered through freed-up time). Risk reduction ROI (VAT audit avoidance): depends on your risk profile, but we value it at AED 500K+ over 5 years. Most customers see payback in 3-4 months."
        }
    ];

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
                        src="/images/finance_procurement_hero_v2.png"
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
                        <div className="section-label" style={{ marginBottom: "1.5rem" }}>AI DIGITAL WORKERS</div>
                        <h1 className="section-title" style={{ 
                            fontSize: "clamp(2rem, 5.5vw, 3.8rem)", 
                            lineHeight: 1.1, 
                            marginBottom: "2rem",
                            textAlign: "left"
                        }}>
                            Finance & Procurement Agents: From Month-End Chaos to <span style={{ 
                                background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>94% Automation</span>
                        </h1>
                        <p className="reveal" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            marginBottom: "1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital&apos;s AI Finance & Procurement Agents are autonomous workers designed for UAE financial operations. They handle AP/AR, bank reconciliation, and VAT compliance with 99.7%+ accuracy. Our agents reduce month-end close time from 10 days to just 3 days using Zoho Books native integration.
                        </p>
                        <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "850px", marginBottom: "3.5rem", lineHeight: 1.8 }}>
                            Month-end close in the UAE is traditionally painful. Finance teams work 10+ days combining data from 
                            multiple systems, reconciling accounts, and ensuring VAT compliance. Our AI-powered finance and 
                            procurement agents automate the complex workflows of accounts payable, receivable, and VAT preparation.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: "1.25rem 2.5rem" }}>
                                Book Finance Audit <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT SNAPSHOT SECTION */}
            <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                        {[
                            { label: "Month-End Close", value: "3 Days", sub: "10+ Days traditionally", icon: Clock },
                            { label: "Automation Level", value: "94%", sub: "Touchless transactions", icon: Zap },
                            { label: "VAT Accuracy", value: "99.7%+", sub: "Errors dropped by 90%", icon: Shield },
                            { label: "Bank Rec Time", value: "15 Min", sub: "Formerly 5 Hours", icon: Calculator }
                        ].map((m, i) => (
                            <div key={i} className="reveal card" style={{ padding: "2rem", textAlign: "center" }}>
                                <div style={{ color: "var(--primary)", marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}><m.icon size={32} /></div>
                                <div style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "0.5rem" }}>{m.value}</div>
                                <div style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>{m.label}</div>
                                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{m.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT GETS AUTOMATED SECTION */}
            <section style={{ padding: "clamp(60px, 10vw, 120px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1400px" }}>
                    <SectionHeader title="What Does FI Digital&apos;s Full AI Finance Stack Include?" label="What Gets Automated:" />
                    
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", 
                        gap: "2.5rem" 
                    }}>
                        <AutomationBlock 
                            index={0}
                            title="Accounts Payable (AP)"
                            description="Invoice processing is traditionally manual: invoice arrives (email, WhatsApp, PDF), someone enters it into Zoho Books, matches to PO (three-way matching: PO-invoice-receipt), codes to correct GL account and cost center, routes for approval, pays on due date. Our AI agent: receives invoice automatically, extracts key data using OCR and NLP, matches to existing POs automatically, flags mismatches, and routes for approval with intelligent escalation."
                            result="Human effort on AP drops 65%. Processing: 3 days → <1 day."
                        />
                        
                        <AutomationBlock 
                            index={1}
                            title="Accounts Receivable & Collections"
                            description="AR traditionally lives in spreadsheets. Invoice created in Zoho Books, but follow-up is manual. Our AI agent: tracks customer payments automatically (integrates with bank feeds), flags aging invoices (0-30 days, 30-60+, etc.), generates collection messages in Arabic or English based on tone and urgency, and sends them via WhatsApp or email at optimal times."
                            result="DSO improves by 8-12 days on average. Staff time drops 40%."
                        />
                        
                        <AutomationBlock 
                            index={2}
                            title="Expense Management"
                            description="Employees submit expense reports. Someone has to review, code to GL/cost center, and route for approval. Our AI agent: receives expense submission (via Zoho, email, or mobile app), reviews against policy, auto-codes to likely GL account based on patterns, and flags policy violations. Compliant expenses auto-approve; violations go to a manager with full context."
                            result="Processing time: 20 min → <1 min per report. Fraud detection improves."
                        />
                        
                        <AutomationBlock 
                            index={3}
                            title="Bank Reconciliation"
                            description="Monthly bank rec traditionally takes 4-6 hours: download statement, compare to GL, investigate differences. Our AI agent: downloads bank statement automatically (API integration with most UAE banks), matches transactions to GL entries, identifies timing differences vs. errors, and posts corrections automatically for known types."
                            result="Rec time: 4-6 hours → <20 minutes. catch errors immediately."
                        />
                        
                        <AutomationBlock 
                            index={4}
                            title="VAT Compliance & Return Preparation"
                            description="UAE VAT rules are specific: input tax on fuel is not recoverable. Output tax is due monthly. Our AI agent: categorizes each transaction for VAT treatment (taxable, exempt, out-of-scope), applies correct tax rate, tracks input vs. output, and prepares monthly VAT return automatically. When you review, the draft return is already done—you just validate and submit."
                            result="Compliance accuracy improves 92% to 98%. Return prep: 3 days → <1 hour."
                        />
                        
                        <AutomationBlock 
                            index={5}
                            title="Procurement Intelligence & PO"
                            description="Procurement teams create POs, track receipts, and manage invoices. Our AI agent: helps procurement create POs (assists with vendor selection, flags unusual orders), tracks three-way matching (PO-invoice-receipt), and flags issues (invoice mismatch, short receipt). The agent also maintains vendor scorecards and recommends vendors for new purchases."
                            result="PO cycle time improves 40%. Vendor management is data-driven."
                        />
                        
                        <AutomationBlock 
                            index={6}
                            title="Budget Monitoring & Variance"
                            description="Most teams build monthly budgets but don't monitor them. Spending goes over budget unnoticed until month-end. Our AI agent: tracks spending daily against budget, alerts finance manager when a cost center is projected to exceed budget, analyzes variances, and provides drill-down context to the department level."
                            result="Proactive budget management. 85% less effort on month-end analysis."
                        />
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE SECTION */}
            <section style={{ padding: "100px 1.5rem", background: "#050a14" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "5rem", alignItems: "center" }}>
                        <div className="reveal">
                            <div className="section-label" style={{ color: "var(--primary-light)" }}>INTELLIGENT PIPELINE</div>
                            <h2 className="section-title" style={{ color: "#fff" }}>How Does the AI Finance Agent Architecture Work?</h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>
                                The agent lives between <strong>Zoho Books</strong> (your financial data), <strong>n8n</strong> (orchestration), and <strong>Claude</strong> (reasoning).
                            </p>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>
                                Every financial transaction flows through the system: invoices arrive and are parsed by Claude (extracting data and understanding format), matched to POs, coded to GL accounts, and posted to Zoho Books automatically.
                            </p>
                            <div style={{ 
                                padding: "2rem", 
                                background: "rgba(255,255,255,0.03)", 
                                borderRadius: "24px", 
                                border: "1px solid rgba(255,255,255,0.1)" 
                            }}>
                                <h4 style={{ color: "#fff", fontWeight: 900, marginBottom: "1rem" }}>Critical Compliance Advantage</h4>
                                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                                    The entire flow is auditable—every transaction has decision logic logged (e.g., why a value was coded to GL 4100 instead of 4200). This audit trail is critical for SOC2, ISO, and UAE regulatory compliance.
                                </p>
                            </div>
                        </div>
                        <div className="reveal">
                            <div style={{ position: "relative" }}>
                                <Image 
                                    src="/images/finance-agent/finance-agent-workflow.png" 
                                    alt="Architecture Flowchart"
                                    width={800}
                                    height={600}
                                    style={{ width: "100%", height: "auto", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UAE VAT SECTION */}
            <section style={{ padding: "120px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap: "4rem", alignItems: "center" }}>
                        <div className="reveal" style={{ order: 2 }}>
                            <div className="section-label">UAE-SPECIFIC</div>
                            <h2 className="section-title">How Does AI Automate UAE VAT and FTA Compliance?</h2>
                            <div style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    UAE VAT is more complex because: 1) Fuel input tax is never recoverable. 2) Import duties are separate from VAT. 3) Free Zone goods (Jebel Ali, RAK, Fujairah) have different treatments. 4) Reverse charges apply to intra-GCC services.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Our agent understands all these rules. When setting up a supplier from a free zone, the agent flags: 'Free zone supplier—verify VAT ID; treatment differs if goods imported into mainland.'
                                </p>
                                <div style={{ 
                                    padding: "2rem", 
                                    background: "rgba(239, 68, 68, 0.03)", 
                                    borderRadius: "20px", 
                                    border: "1px solid rgba(239, 68, 68, 0.1)",
                                    color: "#ef4444"
                                }}>
                                    Most finance teams fail VAT audit because they missed one category. Our agent has no judgment calls—the rules are programmed in.
                                </div>
                            </div>
                        </div>
                        <div className="reveal" style={{ order: 1 }}>
                            <div className="card" style={{ padding: "3.5rem", background: "var(--bg-secondary)", border: "2px solid var(--primary)" }}>
                                <div style={{ opacity: 0.1, position: "absolute", top: "2rem", right: "2rem" }}><Scale size={100} /></div>
                                <h3 style={{ fontSize: "1.75rem", fontWeight: 900, marginBottom: "2rem" }}>Error-Proof Return Preparation</h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                    {[
                                        "Automated VAT grouping & categorization",
                                        "Real-time FTA-compliant audit file generation",
                                        "Non-recoverable tax auto-flagging",
                                        "Multi-entity Free Zone consolidation",
                                        "Reverse-charge intra-GCC monitoring"
                                    ].map((t, i) => (
                                        <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "1rem", fontWeight: 700 }}>
                                            <CheckCircle2 size={18} style={{ color: "#22c55e" }} /> {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS CASE SECTION */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))", gap: "5rem", alignItems: "center" }}>
                        <div className="reveal">
                            <div className="section-label">REAL-WORLD NUMBERS</div>
                            <h2 className="section-title">What is the Business Case for AI Finance Automation in the UAE?</h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "2rem" }}>
                                A manufacturer in Jebel Ali (AED 400M revenue, 200 employees, complex multi-entity structure):
                            </p>
                            
                            <div style={{ marginBottom: "3rem" }}>
                                <div style={{ 
                                    display: "grid", 
                                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                                    gap: "1.5rem", 
                                    marginBottom: "2rem" 
                                }}>
                                    <div className="card" style={{ padding: "2.5rem", border: "1.5px solid rgba(239, 68, 68, 0.15)", background: "rgba(239, 68, 68, 0.02)" }}>
                                        <h3 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: "1.5rem", color: "#ef4444" }}>BEFORE AI AGENT</h3>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1rem", color: "var(--text-muted)" }}>
                                            <li style={{ display: "flex", gap: "0.75rem" }}><span style={{ color: "#ef4444" }}>×</span> Month-end close: 10 days</li>
                                            <li style={{ display: "flex", gap: "0.75rem" }}><span style={{ color: "#ef4444" }}>×</span> 4 people fully consumed</li>
                                            <li style={{ display: "flex", gap: "0.75rem" }}><span style={{ color: "#ef4444" }}>×</span> 2-3 VAT errors/month</li>
                                            <li style={{ display: "flex", gap: "0.75rem" }}><span style={{ color: "#ef4444" }}>×</span> Bank rec: 5 hours</li>
                                        </ul>
                                    </div>
                                    <div className="card" style={{ padding: "2.5rem", border: "2px solid var(--primary)", background: "var(--bg-secondary)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                                        <h3 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: "1.5rem", color: "#22c55e" }}>AFTER AI AGENT</h3>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1rem" }}>
                                            <li style={{ display: "flex", gap: "0.75rem", fontWeight: 700 }}><CheckCircle2 size={18} style={{ color: "#22c55e" }} /> 3 Days Close</li>
                                            <li style={{ display: "flex", gap: "0.75rem", fontWeight: 700 }}><CheckCircle2 size={18} style={{ color: "#22c55e" }} /> 60 Days/Year Freed</li>
                                            <li style={{ display: "flex", gap: "0.75rem", fontWeight: 700 }}><CheckCircle2 size={18} style={{ color: "#22c55e" }} /> Zero VAT Errors</li>
                                            <li style={{ display: "flex", gap: "0.75rem", fontWeight: 700 }}><CheckCircle2 size={18} style={{ color: "#22c55e" }} /> 15 Minute Recs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Cost of agent:</strong> AED 28,000/month (Zoho Books premium, n8n, Claude API).
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Time savings:</strong> 4 people &times; 5 days/month &times; AED 300/day = <strong>AED 6,000/month</strong> freed up. 
                                    One-time setup: AED 40,000. <strong>Payback: 7 months.</strong>
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    After payback, it's all profit. The company also avoids <strong>VAT audit risk</strong> (valued at AED 500K+). Risk mitigation value alone justifies the investment.
                                </p>
                            </div>
                        </div>

                        <div className="reveal">
                            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                                <div className="section-label" style={{ marginBottom: "1rem" }}>FINANCE AGENT IMPACT</div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "2rem" }}>Performance Metrics Overview</h3>
                            </div>
                            <div className="card" style={{ padding: "1rem", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                                <Image 
                                    src="/images/finance-agent/finance-agent-impact.png" 
                                    alt="Finance Agent Impact"
                                    width={800}
                                    height={500}
                                    style={{ width: "100%", height: "auto", display: "block", borderRadius: "24px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO BENEFITS MOST SECTION */}
            <section style={{ padding: "80px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div className="section-label">USER ROLES</div>
                        <h2 className="section-title" style={{ fontSize: "2rem" }}>Who Benefits from AI Finance and Procurement Automation?</h2>
                    </div>
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
                        gap: "1.5rem" 
                    }}>
                        {[
                            {
                                role: "CFO / Director",
                                icon: <PieChart size={20} />,
                                point: "Strategic close, visibility, and audit-ready books."
                            },
                            {
                                role: "Controller",
                                icon: <Shield size={20} />,
                                point: "100% VAT accuracy and automated FTA compliance."
                            },
                            {
                                role: "Procurement",
                                icon: <Briefcase size={20} />,
                                point: "Automated PO matching and data-driven vendor choices."
                            },
                            {
                                role: "AP / AR Team",
                                icon: <Users size={20} />,
                                point: "No more manual entry; 85% reduction in workload."
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal card" style={{ padding: "2rem", textAlign: "center", background: "var(--bg-secondary)" }}>
                                <div style={{ color: "var(--primary)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: "0.75rem" }}>{item.role}</h3>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{item.point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPLEMENTATION SECTION */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1200px" }}>
                    <SectionHeader title="How Long is the Implementation for AI Finance Automation?" label="IMPLEMENTATION PATH" />
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
                        {[
                            {
                                p: "PHASE 1",
                                t: "Setup (Weeks 1-3)",
                                d: "Configure Zoho Books for AI readiness: clean chart of accounts, cost centers, and approval workflows. Set up bank feeds and supplier channels (email/WhatsApp)."
                            },
                            {
                                p: "PHASE 2",
                                t: "Agent Build & Test (Weeks 3-6)",
                                d: "Build AI agents for parsing and matching. Train agents on past 12 months of transactions to understand your patterns. Extensive testing with real data."
                            },
                            {
                                p: "PHASE 3",
                                t: "Deployment (Weeks 6-12)",
                                d: "Go live with soft deployment (approvers review postings). After 95%+ accuracy, move to full autonomous posting and optimization."
                            }
                        ].map((item, i) => (
                            <div key={i} className="reveal card" style={{ 
                                padding: "3rem", 
                                border: "1px solid var(--border)",
                                borderBottom: "4px solid var(--primary)",
                                borderTop: "none",
                                borderLeft: "none",
                                borderRight: "none",
                                borderRadius: "0 0 24px 24px",
                                background: "var(--bg)"
                            }}>
                                <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "var(--primary)", marginBottom: "1rem" }}>{item.p}</div>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "1.5rem" }}>{item.t}</h3>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section style={{ padding: "100px 1.5rem" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <SectionHeader title="Common Questions About AI Finance Agents for UAE Businesses" label="DEEP DIVE" />
                    <div className="reveal">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>
                </div>
            </section>

            {/* NEXT STEPS SECTION */}
            <section style={{ padding: "120px 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "850px" }}>
                    <SectionHeader title="How Do I Start Automating My Finance Operations with AI?" label="READY TO CONVERT?" />
                    <p className="reveal" style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "3rem" }}>
                        If your month-end close is 10+ days, if your finance team is drowning in invoices, if you're worried about 
                        VAT compliance or audit readiness, this is for you. Book a 30-minute call. We'll walk through your current 
                        process, show how AI agents would help, and give you a realistic timeline and cost. If it makes sense, 
                        we'll do a quick proof-of-concept (process 50 of your actual past invoices and show you the results).
                    </p>
                    <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                         <Link href="/contact" className="btn btn-primary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem" }}>
                            Book Your Discovery Call
                         </Link>
                         <Link href="/" className="btn btn-secondary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem" }}>
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
