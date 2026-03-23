"use client";


import {
    Zap,
    CheckCircle2,
    Building2,
    ShoppingBag,
    Landmark,
    Plane,
    ClipboardList,
    Briefcase,
    Bot,
    Shield,
    Settings
} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionsClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Enterprise AI Solutions",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Comprehensive AI agent architectures, Zoho governance, and enterprise automation solutions for UAE businesses.",
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
                "name": "How does AI Agent Architecture benefit UAE enterprises?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It provides governance-first, transparent AI reasoning for lead qualification and finance, ensuring compliance with UAE regulations while automating up to 94% of workflows."
                }
            },
            {
                "@type": "Question",
                "name": "Why is Zoho governance important for AI readiness?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Clean, scalable Zoho architectures ensure a single source of truth, which is essential for AI agents to reason accurately and maintain data sovereignty."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    const pillars = [
        {
            id: "pillar-1",
            title: "How Does AI Agent Architecture Automate Enterprise Logic?",
            subtitle: "Transparent, Governance-First AI",
            icon: <Bot className="text-primary" />,
            content: "Artificial intelligence in the enterprise is too often black-box and risky. We architect transparent, governance-first AI agents that reason through business logic, manage approvals, and integrate seamlessly with your existing Zoho instance.",
            details: "An agent handling supplier qualification doesn't just generate a score—it traces its decision logic, cites source data, and maintains an audit trail compliant with ISO and UAE regulations. Our agents are built on Claude for reasoning and Gemini for high-volume processing.",
            stats: [
                "40+ deployed agent workflows across UAE & APAC",
                "87% average qualification accuracy on leads",
                "94% automation of finance workflows",
                "Arabic language intelligence: Gulf, Levantine, Egyptian dialects"
            ]
        },
        {
            id: "pillar-2",
            title: "How is Zoho Architected for Enterprise Governance and AI?",
            subtitle: "Clean, Scalable, AI-Ready Instances",
            icon: <Shield className="text-success" />,
            content: "Zoho implementations fail most often from customization chaos, not tool limitations. We architect clean, governed Zoho instances designed for scale and AI integration.",
            details: "Governance means accurate tax code assignment, labor law compliance, and data sovereignty. We handle all of this in the architecture phase—before you start implementing.",
            stats: [
                "80+ Zoho implementations architected across APAC",
                "Data model clarity: single source of truth",
                "Workflow governance: embedded approvals",
                "VAT module and labor compliance built-in"
            ]
        },
        {
            id: "pillar-3",
            title: "What is the Role of n8n in Enterprise Automation Workflows?",
            subtitle: "Engineering Discipline for Workflow",
            icon: <Settings className="text-secondary" />,
            content: "Automation in the enterprise means engineering discipline. We architect multi-process automation using n8n as the orchestration spine.",
            details: "This means process mapping, workflow design with transparent decision trees, error handling, and observability. We train your team and establish SLAs.",
            stats: [
                "200+ cumulative hours/month saved",
                "n8n-first architecture: transparent & maintainable",
                "Error handling and escalation: human oversight built-in",
                "Observability: real-time performance dashboards"
            ]
        }
    ];

    const industries = [
        {
            title: "Real Estate & Property Management",
            icon: <Building2 />,
            desc: "Dubai real estate moves at WhatsApp speed. We deploy AI agents that qualify leads in Arabic and English within 4 minutes, scoring by budget and visa status."
        },
        {
            title: "Retail & E-Commerce",
            icon: <ShoppingBag />,
            desc: "Automating inventory lookups, order status, return processing, and product recommendations. 90% automation of order-related inquiries."
        },
        {
            title: "Finance & Accounting",
            icon: <Landmark />,
            desc: "Automating reconciliation, accruals, and reporting prep. Month-end reduced from 10 days to 3 with UAE VAT specifics handled."
        }
    ];

    useGSAP(() => {
        gsap.from(".reveal-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%"
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <main style={{ padding: '40px 1.5rem 60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div className="section-label reveal-item">Our Solutions</div>
                        <h1 className="section-title reveal-item" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Enterprise AI & Zoho Ecosystem</h1>
                        <p className="hero-text" style={{ 
                            fontSize: "1.1rem", 
                            fontWeight: 700,
                            color: "var(--primary)",
                            maxWidth: "850px",
                            margin: "0 auto 1.5rem",
                            lineHeight: 1.6
                        }}>
                            FI Digital provides enterprise-grade AI agents and Zoho ecosystem architectures for Dubai businesses. By combining Claude-powered reasoning with n8n orchestration, we deploy digital workers that automate 94% of lead qualification and finance workflows with Day 1 VAT compliance.
                        </p>
                        <p className="section-desc reveal-item" style={{ margin: '0 auto', maxWidth: '800px' }}>
                            We bridge advanced AI reasoning with operational Zoho reliability to create a seamless agent mesh for your business.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {pillars.map((pillar) => (
                            <div key={pillar.id} className="card reveal-item" style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                    <div style={{ flex: '1 1 350px', minWidth: '0' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                            <div style={{ color: 'var(--primary)', flexShrink: 0 }}>{pillar.icon}</div>
                                            <div>
                                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{pillar.title}</h2>
                                                <div style={{ color: 'var(--primary)', fontWeight: 600 }}>{pillar.subtitle}</div>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{pillar.content}</p>
                                        <p style={{ color: 'var(--text-muted)' }}>{pillar.details}</p>
                                    </div>
                                    <div style={{ flex: '1 1 300px', background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px', minWidth: '0' }}>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {pillar.stats.map(stat => (
                                                <li key={stat} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem' }}>
                                                    <CheckCircle2 size={18} className="text-primary" style={{ flexShrink: 0 }} />
                                                    {stat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '6rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 className="section-title reveal-item">What are the Most Effective AI Solutions for UAE Industries?</h2>
                        </div>
                        <div className="card-grid reveal-item">
                            {industries.map(ind => (
                                <div key={ind.title} className="card" style={{ padding: '2rem' }}>
                                    <div className="icon-box" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>{ind.icon}</div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{ind.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{ind.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
