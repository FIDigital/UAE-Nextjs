import Link from "next/link";

export default function CtaSection() {
    return (
        <section
            aria-labelledby="cta-heading"
            style={{
                background: "linear-gradient(135deg, #1D4ED8 0%, #6366f1 100%)",
                padding: "6rem 1.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background circles */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "-40%",
                    right: "-10%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    border: "80px solid rgba(255,255,255,0.06)",
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    bottom: "-30%",
                    left: "-5%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    border: "60px solid rgba(255,255,255,0.04)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
                    Ready to Transform?
                </p>
                <h2
                    id="cta-heading"
                    style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                        fontWeight: 800,
                        color: "white",
                        lineHeight: 1.2,
                        marginBottom: "1.25rem",
                    }}
                >
                    Start Your Digital Transformation Journey Today
                </h2>
                <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                    Talk to our Zoho experts and discover how FI Digital can streamline
                    your business operations and accelerate your growth in the UAE market.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link
                        href="/contact"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "white",
                            color: "#1D4ED8",
                            padding: "0.85rem 2rem",
                            borderRadius: "8px",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            textShadow: "none",
                            textDecoration: "none",
                            transition: "transform 0.15s ease, box-shadow 0.2s ease",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        }}
                    >
                        Book a Free Consultation
                    </Link>
                    <a
                        href="tel:+971-XX-XXXXXXX"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(255,255,255,0.12)",
                            color: "white",
                            padding: "0.85rem 2rem",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            textDecoration: "none",
                            border: "1px solid rgba(255,255,255,0.25)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        📞 Call Us Now
                    </a>
                </div>
            </div>
        </section>
    );
}
