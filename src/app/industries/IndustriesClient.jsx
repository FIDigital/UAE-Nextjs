"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const industries = [
    {
        name: "Real Estate & PropTech",
        tagline: "Automate lead qualification and property matching.",
        slug: "real-estate",
        image: "/images/industries/real-estate-hero.png"
    },
    {
        name: "Retail & E-Commerce",
        tagline: "WhatsApp commerce and inventory intelligence.",
        slug: "retail-ecommerce",
        image: "/images/industries/retail-hero.png"
    },
    {
        name: "Professional Services",
        tagline: "AI proposal drafting and admin automation.",
        slug: "professional-services",
        image: "/images/industries/professional-services-hero.png"
    },
    {
        name: "Healthcare & Wellness",
        tagline: "Patient scheduling and intake automation.",
        slug: "healthcare",
        image: "/images/industries/healthcare-hero.png"
    },
    {
        name: "F&B & Hospitality",
        tagline: "WhatsApp reservations and guest concierge.",
        slug: "fnb-hospitality",
        image: "/images/industries/fnb-hero.png"
    },
    {
        name: "Logistics & Supply Chain",
        tagline: "Route optimization and customs automation.",
        slug: "logistics",
        image: "/images/industries/logistics-hero.png"
    }
];

export default function IndustriesClient() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Industry AI Consultatiion",
        "provider": {
            "@id": "https://fidigital.ae/#organization"
        },
        "description": "Bespoke AI and Zoho solutions for Real Estate, Retail, Finance, Healthcare, and Logistics industries in the UAE.",
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
                "name": "Which UAE industries benefit most from AI agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Real Estate, Retail, and Logistics see the highest impact through automated lead qualification, WhatsApp commerce, and custom clearance workflows."
                }
            },
            {
                "@type": "Question",
                "name": "Does FI Digital handle industry-specific regulations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our AI and Zoho architectures are built with Day 1 compliance for UAE VAT, labor laws, and industry-specific data sovereignty requirements."
                }
            }
        ]
    };

    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray(".reveal-industries");
        const gridItems = gsap.utils.toArray(".industry-card");

        gsap.set([reveals, gridItems], { opacity: 0, y: 40 });

        reveals.forEach((item) => {
            gsap.to(item, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });

        gsap.to(gridItems, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".industry-grid",
                start: "top 85%"
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", minHeight: "100vh" }}>
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
                padding: "clamp(120px, 15vh, 160px) 1.5rem 60px",
                textAlign: "center"
            }}>
                <div className="container" style={{ maxWidth: "1000px" }}>
                    <div className="section-label reveal-industries">Which Industries Can Benefit from Agentic AI in the UAE?</div>
                    <h1 className="reveal-industries" style={{
                        fontSize: "clamp(2.5rem, 6vw, 4rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        letterSpacing: "-0.02em"
                    }}>
                        AI Solutions Built for <span className="text-gradient">Your Industry</span>
                    </h1>
                    <p className="hero-text" style={{ 
                        fontSize: "1.1rem", 
                        fontWeight: 700,
                        color: "var(--primary)",
                        maxWidth: "850px",
                        margin: "0 auto 1.5rem",
                        lineHeight: 1.6
                    }}>
                        FI Digital builds industry-specific AI solutions for UAE enterprises, from Real Estate lead qualification to Logistics customs automation. By integrating Zoho with advanced reasoning models, we enable 94% workflow automation and Day 1 regulatory compliance for Dubai&apos;s high-growth sectors.
                    </p>
                    <p className="reveal-industries" style={{
                        fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        maxWidth: "800px",
                        margin: "0 auto 3rem"
                    }}>
                        Every industry has unique workflows, regulations, and customer expectations. We build AI solutions that 
                        understand how your specific industry works in the UAE.
                    </p>
                </div>
            </section>

            {/* INDUSTRY GRID */}
            <section style={{ padding: "0 1.5rem 100px" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="industry-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                        gap: "2rem"
                    }}>
                        {industries.map((industry, i) => (
                            <Link 
                                key={i} 
                                href={`/industries/${industry.slug}`}
                                className="industry-card"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    textDecoration: "none",
                                    color: "inherit",
                                    background: "var(--card-bg)",
                                    borderRadius: "32px",
                                    border: "1px solid var(--border)",
                                    overflow: "hidden",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    position: "relative"
                                }}
                            >
                                <div style={{ height: "260px", minHeight: "220px", overflow: "hidden", position: "relative" }}>
                                    <Image 
                                        src={industry.image} 
                                        alt={industry.name}
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            transition: "transform 0.6s ease"
                                        }}
                                        className="card-img"
                                    />
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))"
                                    }} />
                                </div>
                                <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <h3 style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
                                        {industry.name}
                                    </h3>
                                    <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, flex: 1 }}>
                                        {industry.tagline}
                                    </p>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        marginTop: "auto"
                                    }}>
                                        Explore Solutions <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .industry-card:hover {
                    transform: translateY(-10px);
                    border-color: var(--primary);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                }
                .industry-card:hover .card-img {
                    transform: scale(1.1);
                }
                @media (max-width: 768px) {
                    .industry-grid { 
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                }
            `}</style>

            <div style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
                Last Updated: March 2026
            </div>
        </div>
    );
}
