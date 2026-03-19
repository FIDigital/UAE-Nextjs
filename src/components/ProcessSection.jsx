const steps = [
    { num: "01", title: "Discovery & Analysis", desc: "We analyze your business processes, identify pain points, and map the right Zoho solutions for your goals." },
    { num: "02", title: "Custom Implementation", desc: "Our certified consultants configure and customize Zoho apps to match your exact workflow requirements." },
    { num: "03", title: "Training & Onboarding", desc: "We train your team thoroughly so they can use Zoho confidently from day one, maximizing adoption." },
    { num: "04", title: "Ongoing Support", desc: "We provide dedicated post-go-live support, regular updates, and continuous optimization as your business grows." },
];

export default function ProcessSection() {
    return (
        <section id="about" className="section" aria-labelledby="process-heading" style={{ background: "var(--bg-light)" }}>
            <div className="section-inner">
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <span className="section-label">How We Work</span>
                    <h2 id="process-heading" className="section-title" style={{ margin: "0 auto" }}>
                        Our Proven Implementation Process
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                    {steps.map((step, i) => (
                        <div
                            key={step.num}
                            style={{
                                background: "white",
                                borderRadius: "16px",
                                padding: "2rem",
                                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                                borderTop: "3px solid var(--primary)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1.25rem",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontSize: "3.5rem",
                                    fontWeight: 900,
                                    color: "rgba(29,78,216,0.07)",
                                    lineHeight: 1,
                                }}
                            >
                                {step.num}
                            </span>
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontWeight: 800,
                                    fontSize: "0.85rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                {i + 1}
                            </div>
                            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-dark)" }}>
                                {step.title}
                            </h3>
                            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
