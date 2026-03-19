import Link from "next/link";

const services = [
    {
        icon: "🔗",
        title: "Zoho CRM",
        desc: "Manage your sales pipeline, automate follow-ups, and close more deals with Zoho CRM tailored for your business.",
    },
    {
        icon: "📊",
        title: "Zoho Analytics",
        desc: "Turn your data into actionable insights with powerful dashboards and AI-driven reporting tools.",
    },
    {
        icon: "👥",
        title: "Zoho People",
        desc: "Streamline HR operations — from hiring to payroll — with a complete human capital management suite.",
    },
    {
        icon: "📦",
        title: "Zoho Inventory",
        desc: "Track stock levels, manage warehouses, and automate purchase orders across multiple sales channels.",
    },
    {
        icon: "💰",
        title: "Zoho Books",
        desc: "Cloud accounting software that simplifies bookkeeping, invoicing, and tax compliance for UAE businesses.",
    },
    {
        icon: "🤖",
        title: "Zoho AI (Zia)",
        desc: "Leverage artificial intelligence to predict sales trends, automate tasks, and get smart suggestions.",
    },
];

export default function ServicesSection() {
    return (
        <section id="solutions" className="section" aria-labelledby="solutions-heading" style={{ background: "white" }}>
            <div className="section-inner">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
                    {/* Left text */}
                    <div>
                        <span className="section-label">Our Solutions</span>
                        <h2 id="solutions-heading" className="section-title">
                            Everything You Need to Run Your Business on Zoho
                        </h2>
                        <p className="section-desc">
                            As a certified Zoho Premium Partner in Dubai, we implement, customize, and support the full
                            suite of Zoho applications tailored for the UAE market.
                        </p>
                        <Link href="/solutions" className="btn-primary" style={{ marginTop: "2rem", display: "inline-flex" }}>
                            View All Solutions
                        </Link>
                    </div>

                    {/* Right grid */}
                    <div className="card-grid" style={{ marginTop: 0 }}>
                        {services.map((s) => (
                            <div key={s.title} className="card">
                                <div className="card-icon">{s.icon}</div>
                                <h3 className="card-title">{s.title}</h3>
                                <p className="card-desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
