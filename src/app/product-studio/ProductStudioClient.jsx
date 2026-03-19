"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Code2, 
    Cpu, 
    Zap, 
    Rocket, 
    Search, 
    Palette, 
    ChevronRight,
    CheckCircle2,
    ArrowRight,
    Layers,
    ShieldCheck,
    Globe
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "Custom SaaS Development",
        desc: "Cloud-native, multi-tenant software built specifically for your business logic. We handle everything from database architecture to front-end experience.",
        icon: <Layers size={32} />,
        href: "/product-studio/custom-saas",
        color: "#3B82F6",
        image: "/images/custom-saas-hero-v2.png"
    },
    {
        title: "AI Product Engineering",
        desc: "Integrate LLMs and custom AI agents into your products. We build AI-first applications that automate complex reasoning and interactions.",
        icon: <Cpu size={32} />,
        href: "/product-studio/ai-mvp",
        color: "#8B5CF6",
        image: "/images/ai-product.png"
    },
    {
        title: "Enterprise MVPs",
        desc: "Launch your product in weeks, not months. We build production-grade MVPs designed to scale from the first user to the millionth.",
        icon: <Zap size={32} />,
        href: "/product-studio/scaling-maintenance",
        color: "#F59E0B",
        image: "/images/scaling-maintenance-hero.png"
    },
    {
        title: "Legacy Modernization",
        desc: "Breathe new life into aging systems. We migrate legacy software to modern tech stacks without losing data or disrupting operations.",
        icon: <Rocket size={32} />,
        href: "/product-studio/legacy-modernization",
        color: "#EC4899",
        image: "/images/legacy-modernization-hero.png"
    }
];

const processSteps = [
    { name: "Discovery", icon: <Search size={24} />, desc: "Market research & product strategy" },
    { name: "Design", icon: <Palette size={24} />, desc: "High-fidelity UX & UI architecture" },
    { name: "Build", icon: <Code2 size={24} />, desc: "Agile engineering & rapid iterations" },
    { name: "Launch", icon: <Rocket size={24} />, desc: "Cloud deployment & security hardening" },
    { name: "Scale", icon: <Globe size={24} />, desc: "Continuous improvement & optimization" }
];

export default function ProductStudioClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Fix for "empty space": Ensure elements are visible initially just in case,
        // but use gsap.set to hide them immediately for the animation.
        const heroItems = gsap.utils.toArray(".hero-anim");
        const zigzagRows = gsap.utils.toArray(".zigzag-row");
        const steps = gsap.utils.toArray(".process-step");
        const revealItems = gsap.utils.toArray(".reveal-visual");

        // Initial setup
        gsap.set([...heroItems, ...zigzagRows, ...steps, ...revealItems], { opacity: 0, y: 30 });

        // Hero animation
        gsap.to(heroItems, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        // Cards animation (Zigzag)
        gsap.utils.toArray(".zigzag-row").forEach((row, i) => {
            gsap.set(row, { opacity: 0, y: 50 });
            gsap.to(row, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: row,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Process steps
        gsap.to(steps, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: ".process-section",
                start: "top 80%"
            }
        });

        // Visual reveals
        gsap.to(revealItems, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".reveal-trigger",
                start: "top 75%"
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)" }}>
            {/* Hero Section */}
            <section className="hero-section" style={{
                position: "relative",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                {/* Background Visual */}
                <div className="hero-background" style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "60%",
                    height: "100%",
                    zIndex: 0,
                    opacity: 0.4,
                    pointerEvents: "none"
                }}>
                    <Image 
                        src="/images/product-studio-hero.png" 
                        alt="Background" 
                        fill
                        style={{ objectFit: "cover", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                    />
                </div>

                <div className="container hero-container" style={{ 
                    position: "relative", 
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left"
                }}>
                    <div className="section-label hero-anim">Product Studio</div>
                    <h1 className="hero-anim" style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        maxWidth: "900px",
                        letterSpacing: "-0.03em"
                    }}>
                        Build It. Own It. <span style={{ color: "var(--primary)" }}>Scale It.</span>
                    </h1>
                    <h2 className="hero-anim" style={{
                        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: "2rem",
                        maxWidth: "800px"
                    }}>
                        Custom Software, AI Products, and MVPs Built by Engineers Who Understand UAE Business
                    </h2>
                    <p className="hero-anim" style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
                        color: "var(--text-muted)",
                        maxWidth: "700px",
                        marginBottom: "3rem",
                        lineHeight: 1.7
                    }}>
                        Every business eventually outgrows off-the-shelf software. FI Digital's Product Studio builds custom software products that you own completely. No subscriptions, no vendor lock-in. With engineering teams in Australia and India and product strategy from Dubai, we deliver world-class software at competitive investment levels.
                    </p>
                    <div className="hero-anim hero-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Link href="/contact" className="btn-primary">Start Your Product Journey</Link>
                        <Link href="#services" className="btn-secondary">Explore Capabilities</Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <div className="section-label">Capabilities</div>
                        <h2 className="section-title">What We Build</h2>
                        <p className="section-desc" style={{ margin: "0 auto" }}>
                            We turn complex business challenges into elegant, scalable software solutions.
                        </p>
                    </div>

                    <div className="services-zigzag" style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
                        {services.map((service, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className="zigzag-row" style={{
                                    display: "flex",
                                    flexDirection: isEven ? "row" : "row-reverse",
                                    alignItems: "center",
                                    gap: "4rem",
                                    flexWrap: "wrap"
                                }}>
                                    {/* Image Column */}
                                    <div style={{ flex: "1 1 400px", position: "relative" }}>
                                        <Link href={service.href} style={{ display: "block" }}>
                                            <div style={{
                                                position: "relative",
                                                paddingTop: "70%",
                                                borderRadius: "24px",
                                                overflow: "hidden",
                                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                                border: `1px solid ${service.color}30`
                                            }}>
                                                <Image 
                                                    src={service.image} 
                                                    alt={service.title}
                                                    fill
                                                    style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                                                    className="zigzag-img"
                                                />
                                                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(45deg, ${service.color}40, transparent)`, mixBlendMode: "overlay" }} />
                                            </div>
                                        </Link>
                                    </div>
                                    
                                    {/* Content Column */}
                                    <div style={{ flex: "1 1 400px" }}>
                                        <div style={{
                                            width: "60px",
                                            height: "60px",
                                            background: `${service.color}15`,
                                            borderRadius: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: service.color,
                                            marginBottom: "1.5rem"
                                        }}>
                                            {service.icon}
                                        </div>
                                        <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{service.title}</h3>
                                        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                                            {service.desc}
                                        </p>
                                        <Link href={service.href} className="btn-secondary" style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            border: `1px solid ${service.color}50`,
                                            color: "var(--text)",
                                            textDecoration: "none"
                                        }}>
                                            Explore Capability <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section" style={{ padding: "100px 0" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "80px" }}>
                        <div className="section-label">Our Workflow</div>
                        <h2 className="section-title">The Product Studio Process</h2>
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "2rem",
                        position: "relative",
                        flexWrap: "wrap"
                    }}>
                        {/* Connecting Line (Desktop) */}
                        <div style={{
                            position: "absolute",
                            top: "32px",
                            left: "5%",
                            right: "5%",
                            height: "2px",
                            background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
                            opacity: 0.3,
                            zIndex: 0,
                        }} className="desktop-line" />

                        {processSteps.map((step, idx) => (
                            <div key={idx} className="process-step" style={{
                                flex: "1 1 180px",
                                textAlign: "center",
                                position: "relative",
                                zIndex: 1
                            }}>
                                <div style={{
                                    width: "64px",
                                    height: "64px",
                                    background: "var(--card-bg)",
                                    border: "2px solid var(--primary)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto 1.5rem",
                                    color: "var(--primary)",
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                                }}>
                                    {step.icon}
                                </div>
                                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{step.name}</h4>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why FI Digital */}
            <section className="reveal-trigger" style={{ padding: "100px 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    <div className="reveal-visual">
                        <div className="section-label">Why Choose Us</div>
                        <h2 className="section-title" style={{ textAlign: "left" }}>Built for Business Growth</h2>
                        <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {[
                                { title: "Intellectual Property", desc: "You own the source code, the database, and the IP. Full transparency." },
                                { title: "No Subscription Lock-in", desc: "Build once, run forever. No monthly seat costs or hidden fees." },
                                { title: "Global Expertise", desc: "Local strategy in Dubai combined with top-tier engineering talent." }
                            ].map((item, idx) => (
                                <li key={idx} style={{ display: "flex", gap: "1rem" }}>
                                    <CheckCircle2 size={24} style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: "0.25rem" }}>{item.title}</h4>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="reveal-visual" style={{ position: "relative" }}>
                        <div style={{
                            position: "absolute",
                            top: "-20px",
                            left: "-20px",
                            right: "-20px",
                            bottom: "-20px",
                            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                            opacity: 0.05,
                            borderRadius: "40px",
                            zIndex: 0
                        }} />
                        <div style={{
                            padding: "3rem",
                            background: "var(--card-bg)",
                            borderRadius: "32px",
                            border: "1px solid var(--border)",
                            boxShadow: "var(--card-shadow)",
                            position: "relative",
                            zIndex: 1,
                            overflow: "hidden"
                        }}>
                             <Image 
                                src="/images/ai-product.png" 
                                alt="" 
                                fill
                                style={{ objectFit: "cover", opacity: 0.1, zIndex: -1 }}
                            />
                            <div style={{ fontSize: "3rem", fontWeight: 900, color: "var(--primary)", marginBottom: "1rem" }}>98%</div>
                            <div style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>Project Success Rate</div>
                            <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                                We don't just write code; we build products. Our methodology ensures that every line of code serves a business objective, prioritized by ROI and user impact.
                            </p>
                            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>50+</div>
                                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Products Launched</div>
                                </div>
                                <div style={{ width: "1px", background: "var(--border)" }} />
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>120+</div>
                                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Engineers</div>
                                </div>
                                <div style={{ width: "1px", background: "var(--border)" }} />
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>3</div>
                                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Global Hubs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .desktop-line { display: none; }
                @media (min-width: 1024px) {
                    .desktop-line {
                        display: block;
                    }
                }
                .zigzag-row:hover .zigzag-img {
                    transform: scale(1.05);
                }
                .btn-secondary:hover {
                    background: var(--hover-bg) !important;
                }

                @media (max-width: 1024px) {
                    section { padding: 80px 1.5rem !important; }
                    .services-grid { grid-template-columns: 1fr !important; }
                }

                @media (max-width: 768px) {
                    .hero-section { 
                        text-align: center !important; 
                        padding-top: 100px !important;
                        min-height: auto !important;
                    }
                    .hero-background {
                        width: 100% !important;
                        opacity: 0.25 !important;
                        mask-image: radial-gradient(circle at center, black, transparent 80%) !important;
                        -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%) !important;
                    }
                    .hero-container {
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    h1 { font-size: 2.5rem !important; }
                    h2 { font-size: 1.2rem !important; margin-left: auto; margin-right: auto; }
                    p { font-size: 1rem !important; margin-left: auto; margin-right: auto; }
                    .hero-buttons { justify-content: center !important; }
                    
                    .process-section { overflow-x: auto; }
                    .process-step { flex: 1 1 250px !important; }
                }
            `}</style>
        </div>
    );
}
