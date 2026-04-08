"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const wallanCase = {
  company: "Wallan Trading Co",
  image: "/images/case-studies/wallan.png",
  slug: "wallan-trading-co-digital-transformation-zoho"
};

export default function CaseStudiesClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
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
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
            <main style={{ paddingTop: "var(--header-h)" }}>
                
                {/* HERO SECTION — Home-style */}
                <section style={{
                    position: "relative",
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
                    background: "var(--bg)",
                }}>
                    <div style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "60%",
                        height: "100%",
                        zIndex: 0,
                        opacity: 0.15,
                        pointerEvents: "none",
                    }}>
                        <Image
                            src="/images/case-studies-hero.png"
                            alt=""
                            fill
                            style={{
                                objectFit: "cover",
                                maskImage: "radial-gradient(circle at right, black, transparent 80%)",
                                WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
                            }}
                        />
                    </div>

                    <div className="container" style={{ position: "relative", zIndex: 1 }}>
                        <div style={{ maxWidth: "900px" }}>
                            <div className="section-label hero-reveal" style={{ opacity: 0, transform: "translateY(10px)" }}>Customer Success</div>
                            <h1 className="hero-reveal" style={{
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: 900,
                                lineHeight: 1.1,
                                marginBottom: "2rem",
                                letterSpacing: "-0.03em",
                                opacity: 0, transform: "translateY(10px)"
                            }}>
                                <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                    Case study
                                </span>
                            </h1>
                            <p className="hero-reveal" style={{ 
                                fontSize: "clamp(1.1rem, 2vw, 1.25rem)", 
                                color: "var(--text-muted)",
                                lineHeight: 1.6,
                                maxWidth: "800px",
                                opacity: 0, transform: "translateY(10px)"
                            }}>
                                Proving ROI through intelligent transformation. Explore how we architect solutions that scale with Middle Eastern ambition.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 1ST SECTION — Split Layout */}
                <section style={{ padding: "100px 1.5rem", borderTop: "1px solid var(--border)" }}>
                    <div className="container">
                        <div style={{ 
                          display: "grid", 
                          gridTemplateColumns: "1fr 1fr", 
                          gap: "4rem", 
                          alignItems: "center",
                          maxWidth: "1100px",
                          margin: "0 auto"
                        }}>
                            
                            {/* Left Side: Company Name */}
                            <div>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>Featured Company</div>
                                <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.2 }}>
                                    {wallanCase.company}
                                </h2>
                                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                                    Leading the automotive sector in Riyadh through comprehensive digital innovation and unified Zoho systems.
                                </p>
                                <Link href={`/casestudy/${wallanCase.slug}`} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                                    View Full Case Study <ArrowUpRight size={20} />
                                </Link>
                            </div>

                            {/* Right Side: Company Photo */}
                            <div style={{ textAlign: "right" }}>
                                <div style={{ 
                                    position: "relative", 
                                    borderRadius: "32px", 
                                    overflow: "hidden", 
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                    border: "1px solid var(--border)",
                                    width: "100%",
                                    maxWidth: "540px",
                                    marginLeft: "auto"
                                }}>
                                    <Image 
                                        src={wallanCase.image} 
                                        alt={wallanCase.company} 
                                        width={540} 
                                        height={360} 
                                        style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
