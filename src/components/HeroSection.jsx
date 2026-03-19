import Link from "next/link";

const stats = [
    { number: "500+", label: "Businesses Served" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Zoho Products" },
];

export default function HeroSection() {
    return (
        <section
            id="home"
            className="hero-section"
            aria-label="Hero – FI Digital Zoho Partner UAE"
            style={{
                background: "var(--hero-bg)",
                paddingTop: "160px",
                paddingBottom: "100px",
                position: "relative",
            }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1, padding: "0 1.5rem" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    {/* Badge */}
                    <div className="hero-badge">
                        Premium Zoho Partner Dubai
                    </div>

                    {/* Heading */}
                    <h1 className="hero-title">
                        Digital <span>Synergy</span> <br />
                        for Modern UAE Business
                    </h1>

                    {/* Description */}
                    <p className="hero-description">
                        We transform your business operations with Zoho&apos;s powerful ecosystem.
                        Customized implementations, expert support, and localized solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-actions" style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                        <Link href="/contact" className="btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}>
                            Get Started Today
                        </Link>
                    </div>
                </div>

                {/* Dashboard Preview Image */}
                <div className="hero-image-wrapper" style={{ perspective: "1000px" }}>
                    <div
                        style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(20px)",
                            borderRadius: "24px",
                            padding: "1rem",
                            boxShadow: "var(--card-shadow)",
                            border: "1px solid var(--border)",
                            transform: "rotateX(5deg)",
                            maxWidth: "1000px",
                            margin: "0 auto",
                        }}
                    >
                        {/* Inner Dashboard UI */}
                        <div style={{ background: "var(--card-bg)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)" }}>
                            {/* Toolbar */}
                            <div style={{ padding: "0.75rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
                                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
                                <div style={{ flex: 1, height: "24px", border: "1px solid var(--border)", borderRadius: "6px", background: "var(--bg)", opacity: 0.5 }} />
                            </div>

                            <div style={{ padding: "2rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                                    {[
                                        { label: "Active Users", value: "1,284", color: "var(--primary)" },
                                        { label: "Revenue Growth", value: "+24.8%", color: "#10b981" },
                                        { label: "Pending Tasks", value: "42", color: "#f59e0b" },
                                    ].map(stat => (
                                        <div key={stat.label} style={{ padding: "1.5rem", borderRadius: "12px", background: "var(--bg)", border: "1px solid var(--border)", opacity: 0.9 }}>
                                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>{stat.label}</div>
                                            <div style={{ fontSize: "1.75rem", fontWeight: 700, color: stat.color }}>{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Visual Placeholder */}
                                <div style={{ marginTop: "1.5rem", height: "180px", background: "var(--bg)", borderRadius: "12px", display: "flex", alignItems: "flex-end", padding: "1.5rem", gap: "1rem", opacity: 0.8 }}>
                                    {[60, 45, 90, 70, 50, 85, 40].map((h, i) => (
                                        <div key={i} style={{ flex: 1, background: "linear-gradient(to top, var(--primary), var(--accent))", borderRadius: "6px 6px 2px 2px", height: `${h}%`, opacity: (i + 4) / 10 }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="stats-strip">
                {stats.map((s) => (
                    <div key={s.label} className="stat-item">
                        <div className="stat-number">{s.number}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
