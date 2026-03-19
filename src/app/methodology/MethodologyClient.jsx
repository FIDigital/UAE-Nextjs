"use client";

import {
    Lightbulb,
    PenTool,
    Rocket,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MethodologyClient() {
    const containerRef = useRef(null);

    const phases = [
        {
            num: "01",
            title: "Discover & Diagnose",
            timeline: "Weeks 1-3",
            icon: <Lightbulb />,
            desc: "Discovery finds real problems, not symptoms. We observe actual processes (WhatsApp messages, CRM usage, spreadsheets) and identify pain points with impact.",
            deliverable: "20-page diagnostic report with process maps and AI readiness assessment."
        },
        {
            num: "02",
            title: "Design & Architecture",
            timeline: "Weeks 3-8",
            icon: <PenTool />,
            desc: "Once we understand your reality, we design the optimized solution—Zoho data models, n8n workflows, and AI agent specifications.",
            deliverable: "Architecture diagrams, API documentation, and UAT plan."
        },
        {
            num: "03",
            title: "Deploy & Test",
            timeline: "Weeks 8-16",
            icon: <Rocket />,
            desc: "Implementation is orchestrated, not rushed. We build workflows, configure agents, and test exhaustively with your team.",
            deliverable: "Functional agent mesh with zero-downtime transition."
        },
        {
            num: "04",
            title: "Optimize & Govern",
            timeline: "Ongoing",
            icon: <ShieldCheck />,
            desc: "Launch is not the end. We monitor accuracy, user adoption, and refine agent behavior based on real-world usage.",
            deliverable: "Ongoing performance audits and ROI dashboards."
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
        <div className="page-wrapper" ref={containerRef}>
            <main style={{ padding: '160px 1.5rem 100px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div className="section-label reveal-item">Our Process</div>
                        <h1 className="section-title reveal-item" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>The 4-Phase Engineering Path</h1>
                        <p className="section-desc reveal-item" style={{ margin: '0 auto', maxWidth: '800px' }}>
                            We follow a rigorous architecture-first methodology to ensure every implementation delivers measurable ROI.
                        </p>
                    </div>

                    <div className="methodology-stack reveal-item" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {phases.map((phase) => (
                            <div key={phase.num} className="card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-light)', lineHeight: 1 }}>{phase.num}</div>
                                    <div style={{ background: 'var(--hover-bg)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)' }}>{phase.timeline}</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div className="icon-box" style={{ color: 'var(--primary)' }}>{phase.icon}</div>
                                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{phase.title}</h2>
                                </div>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{phase.desc}</p>
                                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Deliverable</div>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>{phase.deliverable}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card reveal-item" style={{ marginTop: '5rem', padding: '3rem', textAlign: 'center', background: 'var(--primary)', color: 'white' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to start Phase 1?</h2>
                        <p style={{ opacity: 0.9, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
                            Book a 45-minute Complimentary AI & Zoho Readiness Audit to baseline your current processes.
                        </p>
                        <a href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                            Get Audit Report
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
