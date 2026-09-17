import Link from "next/link";

export const metadata = {
  title: "Thank You | FI Digital MEA",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main style={{
      minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "clamp(24px, 6vw, 56px)",
    }}>
      <div style={{
        maxWidth: 480, width: "100%", textAlign: "center",
        border: "1px solid var(--border)", borderRadius: 16,
        padding: "clamp(28px, 5vw, 44px) clamp(20px, 4vw, 36px)",
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: "rgba(16,185,129,0.1)", color: "#10B981",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1.5rem",
        }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h1 style={{ fontSize: "clamp(1.4rem, 4vw, 1.75rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
          Thank you — your inquiry has been received.
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
          A member of our team will respond within 4 business hours.
          If it&apos;s urgent, email us at{" "}
          <a href="mailto:support@fidigital.ae" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
            support@fidigital.ae
          </a>.
        </p>
        <Link href="/" style={{
          display: "inline-block", padding: "0.6rem 2rem", borderRadius: 100,
          background: "linear-gradient(135deg, #0279FF 0%, #00A3F3 100%)",
          color: "#fff", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
        }}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
