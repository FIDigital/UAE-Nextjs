"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronRight,
    CheckCircle2,
    TrendingUp,
    Clock,
    Zap,
    Users,
    ArrowRight,
    Layers,
    LifeBuoy,
    Share2,
    Briefcase,
    Inbox,
    MessageCircle,
    Globe,
    Shield,
    BarChart2,
    Target,
    PieChart,
    ChevronDown,
    Activity,
    Smartphone,
    MessageSquare,
    Search,
    Settings,
    Code,
    Network
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WallanCaseStudyClient() {
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

    const challengeItems = [
        {
            title: "Lead Management Challenges",
            icon: <Layers />,
            color: "var(--primary)",
            points: [
                { bold: "Multiple Lead Sources:", text: "Leads needed to be captured consistently from websites, mobile journeys, email, social lead forms, chat, and dealership request forms (e.g., test drive, RFQ, service bookings, and complaints)." },
                { bold: "Structured Lead Assignment:", text: "Leads needed to be routed automatically based on origin/source to the right brand or team for timely follow-up." },
                { bold: "Sales Follow-Up Visibility:", text: "Teams required a standardized activity structure to track calls, meetings, tasks, and status progression through qualification." }
            ]
        },
        {
            title: "Customer Support Challenges",
            icon: <LifeBuoy />,
            color: "#EF4444",
            points: [
                { bold: "Omni-Channel Ticket Intake:", text: "Customer concerns were received across email, social interactions, and messaging channels - requiring a centralized ticketing workflow." },
                { bold: "SLA and Escalation Governance:", text: "Support operations required clear response and resolution expectations, along with an escalation mechanism for aging concerns." },
                { bold: "Brand-Level Service Workflows:", text: "Customer service teams needed a structure to manage multiple dealership brands while maintaining consistency in handling and reporting." }
            ]
        },
        {
            title: "Channel and Integration Requirements",
            icon: <Share2 />,
            color: "#10B981",
            points: [
                { bold: "Social Channel Management:", text: "The business required a unified way to manage social publishing, monitoring, collaboration, and analytics across multiple brand accounts." },
                { bold: "Telephony Alignment:", text: "Newly created leads needed to trigger outbound call initiation through the existing contact center/telephony platform, with call outcomes captured back in CRM." },
                { bold: "System Interoperability:", text: "Qualified leads needed to be synchronized into the existing dealership CRM, while customer communications required integration with SMS and WhatsApp providers." },
                { bold: "Multilingual Digital Engagement:", text: "Chat experiences needed to support both English and Arabic, aligned with channel preferences such as social messaging and WhatsApp." }
            ]
        }
    ];

    const solutionSections = [
        {
            title: "Zoho CRM for Lead Management and Sales Follow-Up",
            icon: <Briefcase />,
            desc: "Centralized lead capture and automated follow-up system for multi-brand operations.",
            features: [
                { title: "Centralized Lead Capture", desc: "Configured the Lead module to store enquiries generated via API, social channels, email, e-commerce website, mobile application, and other web forms (including test drive, RFQ, service bookings, and complaints)." },
                { title: "Source-Based Lead Assignment", desc: "Implemented automation to assign leads automatically based on lead source, enabling structured routing across teams." },
                { title: "Telephony-Triggered Follow-Up", desc: "Enabled lead-triggered workflows to initiate outbound call requests through the telephony platform and capture call disposition details back into Zoho CRM." },
                { title: "On-Demand Call Details", desc: "Added a user action on the lead record to fetch call information when needed, supporting better visibility for follow-up activities." },
                { title: "Sales-to-Dealer System Handoff", desc: "Designed the process so that when a lead is marked as qualified, lead details are pushed to the existing dealership CRM via API for downstream processing." },
                { title: "Support Lead Conversion", desc: "Enabled users to convert leads into tickets when a lead is created for support purposes, helping unify sales and service workflows." },
                { title: "Activity Tracking", desc: "Calls, meetings, and tasks can be created under lead and customer records to standardize follow-up actions and keep interactions visible to relevant teams." }
            ]
        },
        {
            title: "Zoho Desk for Customer Service Operations",
            icon: <Inbox />,
            desc: "Scalable service infrastructure with multi-brand ticket governance and SLA oversight.",
            features: [
                { title: "Centralized Ticket Management", desc: "Implemented the Tickets module to store customer concerns generated via email, WhatsApp, social channels, and manual creation." },
                { title: "Customer Data Continuity", desc: "Configured the Customers module to sync customer data from Zoho CRM or create customer records when information does not already exist in Zoho Desk." },
                { title: "Automated Ticket Creation", desc: "Enabled automated ticket generation when new emails are received on monitored inboxes, and when interactions are captured from configured social channels." },
                { title: "Channel-Consistent Responses", desc: "Enabled agents to respond directly on the platform where the ticket originated, supported by notifications back to the sender." },
                { title: "SLA and Escalation Matrix", desc: "Implemented SLA configuration to define response/resolution expectations and support escalation for overdue concerns." },
                { title: "Operational Reporting", desc: "Provided reporting structures for ticket volumes and performance views such as source-wise, status-wise, and owner-wise analysis with channel, priority, make, and model breakdowns." }
            ]
        },
        {
            title: "Zoho Social for Multi-Brand Management",
            icon: <MessageCircle />,
            desc: "Unified social publishing, monitoring, and CRM-integrated listening.",
            features: [
                { title: "Connected Social Channels", desc: "Enabled social account connectivity and management across major platforms (e.g., Twitter/X, Instagram, Facebook, TikTok, Google Business Profile, and YouTube)." },
                { title: "Publishing and Approvals", desc: "Supported post scheduling, approvals, and collaboration across internal teams to maintain brand alignment." },
                { title: "Monitoring and Interaction", desc: "Enabled social listening and interaction management to capture customer queries and route them into service workflows when required." },
                { title: "CRM and Desk Integration", desc: "Configured social integrations to generate leads from Facebook lead forms and create tickets from selected interaction types across configured brand channels." }
            ]
        },
        {
            title: "Zoho SalesIQ for Bilingual Engagement",
            icon: <Globe />,
            desc: "Multilingual chat experiences and automated messaging workflows.",
            features: [
                { title: "English and Arabic Chatbots", desc: "Implemented chat experiences designed for both English and Arabic engagement across key digital messaging touchpoints." },
                { title: "Lead Creation on Chat Start", desc: "Configured SalesIQ chatbot integrations so that leads can be created in Zoho CRM when a chat starts on Facebook, Instagram, and WhatsApp." },
                { title: "SMS Automation Workflows", desc: "Enabled SMS automation to support operational messages such as appointment confirmations and branch location sharing." },
                { title: "WhatsApp within CRM", desc: "Enabled WhatsApp conversations and template messaging within the CRM via an approved provider integration for audience creation and notifications." }
            ]
        }
    ];

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflow: "hidden" }}>
            
            {/* ══ HERO SECTION ══════════════════════════════════════════════════════ */}
            <section style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.15,
                    pointerEvents: "none"
                }}>
                    <Image 
                        src="/images/case-studies/cars.jpg" 
                        alt="" 
                        fill
                        priority
                        style={{ 
                            objectFit: "cover",
                            maskImage: "radial-gradient(circle at center, black, transparent 90%)",
                            WebkitMaskImage: "radial-gradient(circle at center, black, transparent 90%)"
                        }}
                    />
                </div>

                <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px", padding: "120px 1.5rem" }}>
                    <div style={{ maxWidth: "1000px" }}>
                        <div className="section-label hero-reveal" style={{ opacity: 0, transform: "translateY(10px)" }}>Automotive Transformation</div>
                        <h1 className="hero-reveal" style={{
                            fontSize: "clamp(2rem, 5vw, 3.8rem)",
                            fontWeight: 900,
                            lineHeight: 1.2,
                            marginBottom: "2rem",
                            letterSpacing: "-0.03em",
                            opacity: 0, transform: "translateY(10px)"
                        }}>
                            Enhancing Wallan Trading Co.’s <br />
                            <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                Lead and Customer Engagement Processes with Zoho Solutions
                            </span>
                        </h1>
                        <p className="hero-reveal" style={{ 
                            fontSize: "clamp(1.1rem, 2vw, 1.2rem)", 
                            color: "var(--text-muted)",
                            lineHeight: 1.7,
                            marginBottom: "3.5rem",
                            maxWidth: "850px",
                            opacity: 0, transform: "translateY(10px)"
                        }}>
                            Wallan Trading Co. is a Riyadh-based automotive retail leader operating multiple dealership brands across Saudi Arabia. FI Digital implemented a unified Zoho-based customer engagement stack to support consistent lead handling, streamlined service workflows, and improved visibility across teams.
                        </p>
                        <div className="hero-reveal" style={{ opacity: 0, transform: "translateY(10px)" }}>
                            <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                Request Free Audit <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ THE STRATEGIC CHALLENGE ═══════════════════════════════════════════ */}
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem", background: "var(--bg-secondary)", borderRadius: "60px 60px 0 0", position: "relative", zIndex: 1, marginTop: "-60px" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <div className="section-label reveal-item">The Overview</div>
                        <h2 className="section-title reveal-item">The Strategic Challenge</h2>
                        <p className="section-desc reveal-item" style={{ maxWidth: "750px", margin: "1.5rem auto 0" }}>
                            Wallan Trading Co. set out to strengthen its lead management and customer service operations while maintaining brand-level differentiation across Saudi Arabia.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {challengeItems.map((item, i) => (
                            <div key={i} className="reveal-item" style={{
                                background: "var(--bg)",
                                borderRadius: "40px",
                                border: "1px solid var(--border)",
                                display: "grid",
                                gridTemplateColumns: "minmax(300px, 1fr) 2fr",
                                gap: "0rem",
                                overflow: "hidden"
                            }}>
                                <style jsx>{`
                                    @media (max-width: 900px) {
                                        .challenge-row { grid-template-columns: 1fr !important; }
                                        .challenge-head { border-right: none !important; border-bottom: 1px solid var(--border); }
                                    }
                                `}</style>
                                <div className="challenge-head" style={{
                                    padding: "3rem",
                                    background: "var(--bg-secondary)",
                                    borderRight: "1px solid var(--border)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start"
                                }}>
                                    <div style={{ 
                                        width: "60px", height: "60px", 
                                        background: `${item.color}15`, 
                                        color: item.color,
                                        borderRadius: "18px",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        marginBottom: "2rem"
                                    }}>
                                        {React.cloneElement(item.icon, { size: 28 })}
                                    </div>
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, lineHeight: 1.3, letterSpacing: "-0.02em", margin: 0 }}>{item.title}</h3>
                                </div>
                                <div style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                                    {item.points.map((p, j) => (
                                        <div key={j} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                                            <div style={{ color: item.color, marginTop: "6px", flexShrink: 0 }}><CheckCircle2 size={22} /></div>
                                            <div style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                                                <strong style={{ color: "var(--text)", display: "block", marginBottom: "4px", fontSize: "1.1rem" }}>{p.bold}</strong>
                                                <span style={{ color: "var(--text-muted)" }}>{p.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ MULTIFUNCTIONAL ZOHO ECOSYSTEM (Optimized & Precision Aligned) ═══ */}
            <section id="solutions" style={{ padding: "clamp(100px, 15vh, 160px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "7rem" }}>
                        <div className="section-label reveal-item">The Architecture</div>
                        <h2 className="section-title reveal-item">Multifunctional Zoho Ecosystem</h2>
                        <p className="section-desc reveal-item" style={{ maxWidth: "850px", margin: "1.5rem auto 0" }}>
                            To meet diverse requirements, FI Digital implemented a highly integrated multi-module solution designed for omnichannel capture and scalable governance.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
                        {solutionSections.map((section, i) => (
                            <div key={i} className="reveal-item" style={{ 
                                display: "grid", 
                                gridTemplateColumns: "350px 1fr", 
                                gap: "5rem",
                                alignItems: "start"
                            }}>
                                <style jsx>{`
                                    @media (max-width: 1100px) {
                                        .solution-row { grid-template-columns: 1fr !important; gap: 3rem !important; }
                                        .solution-sidebar { position: static !important; width: 100% !important; }
                                    }
                                `}</style>
                                <div className="solution-sidebar" style={{ position: "sticky", top: "120px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "60px", height: "60px", background: "var(--primary)10", color: "var(--primary)", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            {React.cloneElement(section.icon, { size: 30 })}
                                        </div>
                                        <h3 style={{ fontSize: "1.7rem", fontWeight: 900, margin: 0, letterSpacing: "-0.03em", lineHeight: 1.2 }}>{section.title}</h3>
                                    </div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.75 }}>{section.desc}</p>
                                    
                                    <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", color: "var(--primary)", letterSpacing: "1px", marginBottom: "0.5rem" }}>Status</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text)", fontWeight: 700 }}>
                                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }}></div>
                                            Operational Globally
                                        </div>
                                    </div>
                                </div>

                                <div style={{ 
                                    display: "grid", 
                                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                                    gap: "1.5rem" 
                                }}>
                                    {section.features.map((f, j) => (
                                        <div key={j} style={{ 
                                            background: "var(--bg)", 
                                            padding: "2.5rem", 
                                            borderRadius: "32px", 
                                            border: "1px solid var(--border)",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)",
                                            transition: "all 0.3s ease"
                                        }}>
                                            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                                                <div style={{ color: "var(--primary)", marginTop: "4px", flexShrink: 0 }}><CheckCircle2 size={22} /></div>
                                                <h5 style={{ fontSize: "1.15rem", fontWeight: 800, margin: 0, lineHeight: 1.3, color: "var(--text)" }}>{f.title}</h5>
                                            </div>
                                            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0, flex: 1 }}>{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ OMNICHANNEL HUB ARCHITECTURE ══════════════════════════════════════════ */}
            <section style={{ padding: "clamp(80px, 12vh, 120px) 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <div className="reveal-item" style={{ 
                        background: "var(--bg)", 
                        padding: "clamp(2rem, 8vw, 5rem)", 
                        borderRadius: "50px", 
                        border: "1px solid var(--border)",
                        textAlign: "center",
                        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)"
                    }}>
                        <div style={{ width: "80px", height: "80px", background: "var(--primary)10", color: "var(--primary)", borderRadius: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "2.5rem" }}>
                            <Network size={40} />
                        </div>
                        <h3 style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.4rem)", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.03em" }}>Unified Engagement Architecture</h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.9, maxWidth: "850px", margin: "0 auto" }}>
                            The solution consolidates inbound customer interactions into a single operating model. Lead sources including web forms, mobile journeys, email, chat, and social lead forms feed into Zoho CRM for primary follow-up. Customer concerns received through email and messaging are captured in Zoho Desk, ensuring consistent ticket management and SLA governance across multiple Riyadh dealership brands.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ IMPLEMENTATION ROADMAP ═══════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(100px, 15vh, 160px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                        <div className="section-label reveal-item">The Roadmap</div>
                        <h2 className="section-title reveal-item">From Mapping to Go-Live</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {[
                          { title: "Discovery and Process Mapping:", icon: <Search />, points: ["Aligned on lead sources, service channels, and brand/team structures required.", "Reviewed integration points with external dealership and contact center systems."] },
                          { title: "Configuration and Customization:", icon: <Settings />, points: ["Configured Zoho CRM modules and automations for capture and activity tracking.", "Configured Zoho Desk structures for customer sync and SLA governance."] },
                          { title: "Integration and Validation:", icon: <Network />, points: ["Validated lead flow from digital sources → CRM → Dealer system.", "Validated telephony workflows and social/chat integrations for ticket creation."] },
                          { title: "Training, Go-Live, and Support:", icon: <Zap />, points: ["Role-based training focused on lead processing and managerial oversight.", "Supported go-live readiness and provided post-deployment support."] }
                        ].map((step, i) => (
                          <div key={i} className="reveal-item" style={{
                              padding: "3rem",
                              borderRadius: "40px",
                              border: "1px solid var(--border)",
                              background: "var(--bg-secondary)",
                              position: "relative",
                              display: "flex",
                              flexDirection: "column",
                              height: "100%"
                          }}>
                              <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: "3rem", fontWeight: 900, color: "var(--primary)", opacity: 0.1 }}>0{i + 1}</div>
                              <div style={{ color: "var(--primary)", marginBottom: "2rem" }}>{React.cloneElement(step.icon, { size: 36 })}</div>
                              <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.4 }}>{step.title}</h4>
                              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", flex: 1 }}>
                                  {step.points.map((p, j) => (
                                      <div key={j} style={{ display: "flex", gap: "0.85rem", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                          <div style={{ color: "var(--primary)", marginTop: "4px", flexShrink: 0 }}><CheckCircle2 size={18} /></div>
                                          <span>{p}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ RESULTS ══════════════════════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(100px, 15vh, 160px) 1.5rem", background: "var(--bg-secondary)", borderRadius: "60px 60px 0 0" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                        <div className="section-label reveal-item">Success Metrics</div>
                        <h2 className="section-title reveal-item">The Impact of Transformation</h2>
                        <p className="section-desc" style={{ maxWidth: "800px", margin: "1.5rem auto 0" }}>
                            Establishing a scalable foundation for multi-brand lead handling and engagement.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 550px), 1fr))", gap: "2.5rem" }}>
                        {[
                          { title: "Lead and Sales Operations:", icon: <TrendingUp />, points: ["Unified Lead Intake: Capture from digital channels with consistent source tracking.", "Consistent Routing: Automated assignment supports standardized follow-ups.", "Streamlined Handover: Qualified leads synchronized directly to external dealership CRM.", "Call-Enabled Workflows: Support for outbound call initiation and visibility within CRM."] },
                          { title: "Telephony, SMS, and WhatsApp", icon: <MessageSquare />, desc: "Aligned lead handling with the existing telephony environment and approved messaging providers.", points: ["Lead-Triggered Call Initiation for prompt customer contact contact.", "Call Outcome Visibility synchronized back into Zoho CRM records.", "Click-to-Call Support directly from the lead record and interaction tracking.", "Template-Based SMS for operational messages like appointment confirmations.", "WhatsApp from CRM: Initiate conversations and manage messaging audiences."] },
                          { title: "Customer Support Operations:", icon: <LifeBuoy />, points: ["Centralized Ticket Handling for email, social, and messaging channels.", "SLA Governance: Improved oversight of response/resolution progress via matrices.", "Cross-Team Visibility: Sync between CRM and Desk supports journey continuity."] },
                          { title: "Social and Digital Engagement:", icon: <Globe />, points: ["Centralized Social Management: All publishing and monitoring in a unified workspace.", "Conversion into Workflow: Social interactions routed directly into lead or ticket tasks.", "Multilingual Chat Engagement: Bilingual bots with automated lead creation."] },
                          { title: "Reporting and Oversight:", icon: <BarChart2 />, points: ["Lead Performance: Source-wise, status-wise, and owner-wise analysis views.", "Ticket Analytics: Channel and category breakdowns to guide operational planning."] }
                        ].map((stat, i) => (
                          <div key={i} className="reveal-item" style={{ padding: "3.5rem", background: "var(--bg)", borderRadius: "40px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
                                  <div style={{ width: "56px", height: "56px", borderRadius: "18px", background: "var(--primary)10", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      {React.cloneElement(stat.icon, { size: 30 })}
                                  </div>
                                  <h4 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>{stat.title}</h4>
                              </div>
                              {stat.desc && <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>{stat.desc}</p>}
                              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", flex: 1 }}>
                                {stat.points.map((p, j) => (
                                  <div key={j} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", fontSize: "1.05rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                                    <div style={{ marginTop: "4px", flexShrink: 0 }}><CheckCircle2 size={24} color="var(--primary)" /></div>
                                    <span>{p}</span>
                                  </div>
                                ))}
                              </div>
                          </div>
                        ))}
                    </div>

                    {/* Final Concluding Card */}
                    <div className="reveal-item" style={{ 
                        marginTop: "5rem", 
                        padding: "clamp(2rem, 8vw, 6rem)", 
                        background: "var(--bg)", 
                        borderRadius: "50px", 
                        border: "1px solid var(--border)",
                        textAlign: "center",
                        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.1)"
                    }}>
                        <h3 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.03em" }}>Conclusion</h3>
                        <p style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)", color: "var(--text-muted)", lineHeight: 1.9, maxWidth: "950px", margin: "0 auto 3rem" }}>
                          By implementing an integrated Zoho CRM, Zoho Desk, Zoho Social, and Zoho SalesIQ solution, Wallan Trading Co. established a unified framework for capturing leads, managing customer concerns, and engaging customers across digital and social channels. The solution supports multi-brand operations, structured follow-up, and scalable service workflows while maintaining alignment with existing dealership systems.
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", opacity: 0.6, fontStyle: "italic", maxWidth: "800px", margin: "0 auto" }}>
                          Note: This case study summarizes the implemented solution at a high level. Specific configurations, credentials, and internal operational details have been intentionally excluded to protect confidentiality.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══════════════════════════════════════════════════════════════════ */}
            <section style={{ padding: "clamp(100px, 15vh, 200px) 1.5rem" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="reveal-item" style={{ 
                        background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)",
                        padding: "clamp(4rem, 10vw, 8rem)",
                        borderRadius: "clamp(40px, 6vw, 80px)",
                        textAlign: "center",
                        color: "white",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 60%)", pointerEvents: "none" }} />
                        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "2.5rem", position: "relative", letterSpacing: "-0.04em", lineHeight: 1.1 }}>Ready for Digital <br /> Excellence?</h2>
                        <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", opacity: 0.9, maxWidth: "800px", margin: "0 auto 4rem", lineHeight: 1.7, position: "relative" }}>
                            Join the ranks of leading Middle Eastern enterprises leveraging high-precision Zoho implementations with FI Digital.
                        </p>
                        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                            <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)", border: "none" }}>
                                Start Free Audit <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
