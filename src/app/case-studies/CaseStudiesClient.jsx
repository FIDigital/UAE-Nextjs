"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ChevronRight, TrendingUp, Clock, Users,
  DollarSign, Building, ShoppingBag, Landmark, Star,
  BarChart2, Zap, MessageSquare, CheckCircle2,
  ArrowUpRight, Calculator, ChevronDown,
} from "lucide-react";

/* ─── Case Studies data ──────────────────────────────────────────────────────── */
const caseStudies = [
  {
    id: 1,
    industry: "Real Estate",
    industryColor: "#1D4ED8",
    industryBg: "rgba(29,78,216,0.10)",
    Icon: Building,
    company: "Meridian Properties",
    location: "Dubai Marina, UAE",
    size: "85-person agency",
    image: "/images/case-studies/cs-realestate.png",
    challenge:
      "Meridian's brokers were losing leads overnight — enquiries from property portals went unanswered for 8–12 hours, causing a 34% drop-off rate before any human even made contact.",
    solution:
      "Deployed a WhatsApp AI Sales Agent (n8n + Claude 3 + Zoho CRM) that qualifies leads in real time, books viewings, and hands off hot leads to brokers with full context.",
    tech: ["WhatsApp AI Agent", "n8n Orchestration", "Zoho CRM", "Claude 3 Sonnet"],
    results: [
      { label: "Lead Response Time", before: "8–12 hrs", after: "< 2 min", icon: Clock },
      { label: "Lead Qualification Rate", before: "22%", after: "68%", icon: TrendingUp },
      { label: "Monthly Viewing Bookings", before: "41", after: "114", icon: BarChart2 },
    ],
    keyMetric: "3× more viewings booked per month",
    keyMetricColor: "#1D4ED8",
    testimonial:
      "FI Digital's AI agent is working 24/7 when our team sleeps. We haven't lost a warm lead since go-live.",
    client: "CEO, Meridian Properties",
  },
  {
    id: 2,
    industry: "Retail & E-commerce",
    industryColor: "#6366F1",
    industryBg: "rgba(99,102,241,0.10)",
    Icon: ShoppingBag,
    company: "Luxe Living UAE",
    location: "Dubai, UAE",
    size: "230-person retail brand",
    image: "/images/case-studies/cs-retail.png",
    challenge:
      "Luxe Living's customer support team was overwhelmed with 1,200+ WhatsApp messages a day. Average reply time was 4 hours, CSAT was 61%, and cart-abandonment rate was 38%.",
    solution:
      "Deployed a bilingual (EN/AR) AI Support Agent via Zoho SalesIQ + n8n that handles order tracking, returns, upsell prompts, and escalation — with Zoho CRM integration for VIP routing.",
    tech: ["Zoho SalesIQ", "Zoho CRM", "n8n", "Bilingual LLM Agent"],
    results: [
      { label: "Support Response Time", before: "4 hrs", after: "38 sec", icon: Clock },
      { label: "CSAT Score", before: "61%", after: "89%", icon: Star },
      { label: "Cart Recovery Rate", before: "12%", after: "31%", icon: TrendingUp },
    ],
    keyMetric: "AED 280K incremental revenue in 90 days",
    keyMetricColor: "#6366F1",
    testimonial:
      "The bilingual agent handles Arabic customers flawlessly. Our team now focuses on VIPs instead of order status queries.",
    client: "Head of Digital, Luxe Living UAE",
  },
  {
    id: 3,
    industry: "Financial Services",
    industryColor: "#10B981",
    industryBg: "rgba(16,185,129,0.10)",
    Icon: Landmark,
    company: "Al Noor Capital",
    location: "Abu Dhabi, UAE",
    size: "400-person investment firm",
    image: "/images/case-studies/cs-finance.png",
    challenge:
      "Procurement and finance ops teams spent 22 hrs/week manually processing invoices, chasing approvals, and reconciling vendor data across 6 disconnected systems.",
    solution:
      "Built an AI Document Processing pipeline (LangChain + Zoho Books + Zoho Flow) that extracts, validates, and routes invoices from email → approval → ERP in under 4 minutes.",
    tech: ["LangChain RAG", "Zoho Books", "Zoho Flow", "AI Document Processing"],
    results: [
      { label: "Invoice Processing Time", before: "2–3 days", after: "< 4 min", icon: Zap },
      { label: "Manual Hours Saved/Week", before: "22 hrs", after: "2 hrs", icon: Clock },
      { label: "Approval Accuracy", before: "78%", after: "99.1%", icon: CheckCircle2 },
    ],
    keyMetric: "20 hrs/week reclaimed for strategic work",
    keyMetricColor: "#10B981",
    testimonial:
      "Our CFO said it's the first AI implementation that actually reduced compliance risk while cutting costs simultaneously.",
    client: "COO, Al Noor Capital",
  },
];

/* ─── Before/After data ─────────────────────────────────────────────────────── */
const beforeAfterItems = [
  {
    title: "CRM Lead Pipeline",
    subtitle: "Real Estate Agency — Dubai",
    before: {
      label: "Before AI",
      steps: [
        "Lead submits enquiry on portal",
        "Email notification to team inbox",
        "Broker manually checks inbox",
        "Broker calls lead (avg 8 hrs later)",
        "Manual qualification questions",
        "Manually logs to spreadsheet",
        "Schedules viewing via WhatsApp",
        "Sends property PDF manually",
        "Follow-up reminder set in calendar",
        "Manual entry into CRM",
        "Pipeline stage updated manually",
        "Weekly report built from spreadsheet",
      ],
      color: "#EF4444",
      label2: "12 Manual Steps",
    },
    after: {
      label: "After AI",
      steps: [
        "Lead submits enquiry → AI responds in 90 sec",
        "AI qualifies intent, budget, timeline",
        "Viewing auto-booked & confirmed",
      ],
      color: "#10B981",
      label2: "3 Automated Steps",
    },
  },
  {
    title: "Invoice Approval Workflow",
    subtitle: "Financial Services Firm — Abu Dhabi",
    before: {
      label: "Before AI",
      steps: [
        "Vendor emails invoice as PDF",
        "Finance team downloads PDF",
        "Manual data entry into spreadsheet",
        "Cross-check vendor master list",
        "Email to department head for approval",
        "Wait for email reply (avg 1.5 days)",
        "Manual ERP data entry",
        "Bank transfer approval process",
        "Reconciliation across 3 systems",
      ],
      color: "#EF4444",
      label2: "9 Manual Steps · 2–3 Days",
    },
    after: {
      label: "After AI",
      steps: [
        "AI extracts invoice data from email",
        "Auto-validates against vendor DB",
        "Routes to approver with 1-click confirm",
      ],
      color: "#10B981",
      label2: "3 Automated Steps · < 4 Min",
    },
  },
];

/* ─── ROI Calculator ────────────────────────────────────────────────────────── */
function ROICalculator() {
  const [inputs, setInputs] = useState({
    employees: 25,
    leads: 300,
    responseHours: 6,
    industry: "real-estate",
  });
  const [showResults, setShowResults] = useState(false);
  const [gated, setGated] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const industryMultipliers = {
    "real-estate": { convRate: 0.18, avgDeal: 12000 },
    "retail": { convRate: 0.12, avgDeal: 480 },
    "finance": { convRate: 0.09, avgDeal: 28000 },
    "healthcare": { convRate: 0.22, avgDeal: 2400 },
    "logistics": { convRate: 0.14, avgDeal: 6500 },
  };

  const m = industryMultipliers[inputs.industry] || industryMultipliers["real-estate"];
  const hoursSaved = Math.round(inputs.employees * 6.5);
  const costSaved = Math.round(hoursSaved * 4.3 * 110);
  const extraLeads = Math.round(inputs.leads * 0.38);
  const revUplift = Math.round(extraLeads * m.convRate * m.avgDeal);

  const handleCalculate = () => {
    setShowResults(true);
    setGated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 24, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "2rem 2.5rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg, #1D4ED8, #6366F1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Calculator size={22} color="white" />
        </div>
        <div>
          <div style={{ fontWeight: 900, fontSize: "1.15rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>ROI Calculator</div>
          <div style={{ fontSize: "0.83rem", color: "var(--text-muted)" }}>Estimate your potential savings and revenue uplift</div>
        </div>
      </div>

      <div style={{ padding: "2rem 2.5rem" }}>
        {/* Inputs grid */}
        <div className="cs-calc-grid">
          <div className="cs-input-group">
            <label className="cs-label">
              <Users size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
              Team Size (employees)
            </label>
            <input
              type="range" min={5} max={500} step={5}
              value={inputs.employees}
              onChange={e => setInputs(p => ({ ...p, employees: +e.target.value }))}
              className="cs-range"
            />
            <div className="cs-range-val">{inputs.employees} employees</div>
          </div>

          <div className="cs-input-group">
            <label className="cs-label">
              <MessageSquare size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
              Monthly Leads / Enquiries
            </label>
            <input
              type="range" min={50} max={5000} step={50}
              value={inputs.leads}
              onChange={e => setInputs(p => ({ ...p, leads: +e.target.value }))}
              className="cs-range"
            />
            <div className="cs-range-val">{inputs.leads.toLocaleString()} leads/month</div>
          </div>

          <div className="cs-input-group">
            <label className="cs-label">
              <Clock size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
              Current Response Time
            </label>
            <input
              type="range" min={0.5} max={24} step={0.5}
              value={inputs.responseHours}
              onChange={e => setInputs(p => ({ ...p, responseHours: +e.target.value }))}
              className="cs-range"
            />
            <div className="cs-range-val">{inputs.responseHours} hr avg response</div>
          </div>

          <div className="cs-input-group">
            <label className="cs-label">
              <Building size={14} style={{ display: "inline", marginRight: 6, verticalAlign: "middle" }} />
              Industry
            </label>
            <select
              value={inputs.industry}
              onChange={e => setInputs(p => ({ ...p, industry: e.target.value }))}
              className="cs-select"
            >
              <option value="real-estate">Real Estate</option>
              <option value="retail">Retail & E-commerce</option>
              <option value="finance">Financial Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>
        </div>

        {/* CTA */}
        {!showResults && (
          <button onClick={handleCalculate} className="cs-calc-btn">
            <Calculator size={16} /> Calculate My ROI
          </button>
        )}

        {/* Results (gated) */}
        {showResults && (
          <div style={{ marginTop: "2rem" }}>
            {!submitted ? (
              <div style={{ position: "relative" }}>
                {/* Blurred preview */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem", filter: "blur(6px)", pointerEvents: "none", userSelect: "none" }}>
                  {[
                    { label: "Hours Saved / Month", value: `${hoursSaved.toLocaleString()} hrs`, icon: Clock, color: "#1D4ED8" },
                    { label: "Cost Reduction / Year", value: `AED ${(costSaved/1000).toFixed(0)}K`, icon: DollarSign, color: "#10B981" },
                    { label: "Revenue Uplift / Year", value: `AED ${(revUplift/1000).toFixed(0)}K`, icon: TrendingUp, color: "#6366F1" },
                  ].map(r => (
                    <div key={r.label} style={{ background: "var(--bg)", borderRadius: 16, padding: "1.25rem 1.5rem", border: "1px solid var(--border)", textAlign: "center" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${r.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem", color: r.color }}>
                        <r.icon size={18} />
                      </div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 900, color: r.color, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{r.value}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{r.label}</div>
                    </div>
                  ))}
                </div>
                {/* Gate overlay */}
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(to bottom, transparent 0%, var(--card-bg) 40%)", borderRadius: 16, padding: "1.5rem" }}>
                  <div style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "0.4rem", textAlign: "center" }}>Unlock Your Full ROI Report</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.25rem", textAlign: "center" }}>Get a personalised breakdown emailed to you</div>
                  <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      style={{ flex: 1, minWidth: 200, padding: "0.65rem 1.1rem", borderRadius: 10, border: "1.5px solid var(--border)", background: "var(--bg)", color: "var(--text)", fontSize: "0.9rem", outline: "none" }}
                    />
                    <button type="submit" style={{ padding: "0.65rem 1.4rem", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #1D4ED8, #6366F1)", color: "white", fontWeight: 800, fontSize: "0.9rem", cursor: "pointer", whiteSpace: "nowrap" }}>
                      Get Report
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                  {[
                    { label: "Hours Saved / Month", value: `${hoursSaved.toLocaleString()} hrs`, icon: Clock, color: "#1D4ED8" },
                    { label: "Cost Reduction / Year", value: `AED ${(costSaved/1000).toFixed(0)}K`, icon: DollarSign, color: "#10B981" },
                    { label: "Revenue Uplift / Year", value: `AED ${(revUplift/1000).toFixed(0)}K`, icon: TrendingUp, color: "#6366F1" },
                  ].map(r => (
                    <div key={r.label} style={{ background: "var(--bg)", borderRadius: 16, padding: "1.25rem 1.5rem", border: "1px solid var(--border)", textAlign: "center", animation: "fadeInUp 0.4s ease both" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: `${r.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem", color: r.color }}>
                        <r.icon size={18} />
                      </div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 900, color: r.color, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{r.value}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{r.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: "center", padding: "1rem", background: "rgba(16,185,129,0.08)", borderRadius: 12, border: "1px solid rgba(16,185,129,0.2)" }}>
                  <CheckCircle2 size={18} style={{ color: "#10B981", marginBottom: 4 }} />
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#10B981" }}>Report sent to {email}!</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>Our team will follow up with a detailed analysis within 24 hours.</div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────────── */
export default function CaseStudiesClient() {
  const [activeCase, setActiveCase] = useState(0);
  const [activeBA, setActiveBA] = useState(0);

  const cs = caseStudies[activeCase];

  return (
    <div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cs-section { padding: 90px 1.5rem; }
        .cs-section-alt { padding: 90px 1.5rem; background: var(--bg-secondary); }

        /* ── Industry tabs ── */
        .cs-industry-tabs { display: flex; gap: 0.7rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
        .cs-industry-tab {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.55rem 1.2rem; border-radius: 100px;
          border: 1.5px solid var(--border); background: var(--card-bg);
          color: var(--text-muted); font-weight: 700; font-size: 0.83rem;
          cursor: pointer; transition: all 0.22s ease;
        }
        .cs-industry-tab:hover { border-color: var(--primary); color: var(--primary); }
        .cs-industry-tab.active { color: white; }

        /* ── Featured case study layout ── */
        .cs-featured-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start;
        }
        .cs-featured-img {
          width: 100%; height: 340px; object-fit: cover; border-radius: 20px;
          display: block;
        }
        .cs-tech-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0 1.5rem; }
        .cs-tech-tag {
          font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.7rem;
          border-radius: 6px; border: 1.5px solid var(--border);
          color: var(--text-muted); background: var(--bg);
        }
        .cs-results-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.85rem; margin: 1.5rem 0; }
        .cs-result-card {
          background: var(--bg); border: 1px solid var(--border); border-radius: 14px;
          padding: 1rem 1.1rem; text-align: center;
        }
        .cs-result-before { font-size: 0.78rem; color: #EF4444; font-weight: 700; text-decoration: line-through; }
        .cs-result-after  { font-size: 1.15rem; font-weight: 900; font-family: 'Plus Jakarta Sans',sans-serif; }
        .cs-result-label  { font-size: 0.7rem; color: var(--text-muted); margin-top: 0.2rem; }
        .cs-key-metric {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.9rem; font-weight: 800; padding: 0.5rem 1.1rem;
          border-radius: 100px; margin-bottom: 1.25rem;
        }
        .cs-testimonial {
          position: relative; padding: 1.4rem 1.6rem;
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 16px; margin-top: 1.5rem;
        }
        .cs-testimonial::before {
          content: '"'; font-size: 4rem; font-family: Georgia, serif;
          color: var(--primary); position: absolute; top: -0.5rem; left: 1rem; line-height: 1;
          opacity: 0.25;
        }
        .cs-testimonial-text { font-size: 0.92rem; color: var(--text-muted); line-height: 1.7; font-style: italic; }
        .cs-testimonial-author { font-size: 0.78rem; font-weight: 800; margin-top: 0.75rem; color: var(--text); }

        /* ── Sidebar mini-cards ── */
        .cs-sidebar { display: flex; flex-direction: column; gap: 1rem; }
        .cs-mini-card {
          display: flex; gap: 1rem; align-items: flex-start;
          padding: 1.1rem 1.3rem; background: var(--card-bg);
          border: 1.5px solid var(--border); border-radius: 16px;
          cursor: pointer; transition: all 0.25s ease; text-decoration: none; color: var(--text);
        }
        .cs-mini-card.active { border-color: var(--primary); background: var(--hover-bg); }
        .cs-mini-card:hover  { border-color: var(--primary); transform: translateX(3px); }
        .cs-mini-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cs-mini-title { font-weight: 800; font-size: 0.9rem; margin-bottom: 0.2rem; }
        .cs-mini-metric { font-size: 0.76rem; font-weight: 700; }
        .cs-mini-co { font-size: 0.72rem; color: var(--text-muted); }

        /* ── ROI calculator ── */
        .cs-calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.75rem; }
        .cs-input-group { display: flex; flex-direction: column; gap: 0.45rem; }
        .cs-label { font-size: 0.78rem; font-weight: 700; color: var(--text-muted); }
        .cs-range { width: 100%; accent-color: var(--primary); cursor: pointer; }
        .cs-range-val { font-size: 0.82rem; font-weight: 800; color: var(--primary); }
        .cs-select {
          padding: 0.55rem 0.9rem; border-radius: 10px;
          border: 1.5px solid var(--border); background: var(--bg);
          color: var(--text); font-size: 0.9rem; outline: none; cursor: pointer;
          font-family: inherit;
        }
        .cs-calc-btn {
          display: inline-flex; align-items: center; gap: 0.55rem;
          padding: 0.75rem 2rem; border-radius: 100px; border: none;
          background: linear-gradient(135deg, #1D4ED8, #6366F1);
          color: white; font-weight: 800; font-size: 0.95rem; cursor: pointer;
          box-shadow: 0 6px 18px rgba(29,78,216,0.32);
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .cs-calc-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(29,78,216,0.42); }

        /* ── Before/After ── */
        .cs-ba-tabs { display: flex; gap: 0.6rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .cs-ba-tab {
          padding: 0.45rem 1.1rem; border-radius: 100px; border: 1.5px solid var(--border);
          background: var(--card-bg); font-size: 0.82rem; font-weight: 700;
          color: var(--text-muted); cursor: pointer; transition: all 0.2s;
        }
        .cs-ba-tab.active { background: var(--primary); border-color: var(--primary); color: white; }
        .cs-ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .cs-ba-panel {
          border-radius: 20px; padding: 1.75rem;
          border: 1px solid var(--border);
        }
        .cs-ba-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.25rem; }
        .cs-ba-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .cs-ba-label { font-weight: 900; font-size: 1rem; font-family: 'Plus Jakarta Sans',sans-serif; }
        .cs-ba-count { font-size: 0.72rem; font-weight: 800; padding: 0.18rem 0.6rem; border-radius: 100px; }
        .cs-ba-step {
          display: flex; align-items: flex-start; gap: 0.75rem;
          padding: 0.7rem 0.85rem; border-radius: 10px;
          font-size: 0.84rem; margin-bottom: 0.5rem; line-height: 1.45;
          border: 1px solid var(--border); background: var(--bg);
        }
        .cs-ba-step:last-child { margin-bottom: 0; }
        .cs-step-num { font-size: 0.68rem; font-weight: 800; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── Stats bar ── */
        .cs-stats-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); border-radius: 20px; overflow: hidden; }
        .cs-stat-item { background: var(--card-bg); padding: 2rem 1.5rem; text-align: center; }
        .cs-stat-num { font-size: clamp(2rem,4vw,2.8rem); font-weight: 900; font-family: 'Plus Jakarta Sans',sans-serif; background: linear-gradient(135deg, #1D4ED8, #6366F1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .cs-stat-label { font-size: 0.82rem; color: var(--text-muted); margin-top: 0.35rem; font-weight: 600; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cs-featured-layout { grid-template-columns: 1fr; }
          .cs-sidebar { flex-direction: row; flex-wrap: wrap; }
          .cs-mini-card { flex: 1; min-width: 200px; }
        }
        @media (max-width: 768px) {
          .cs-section, .cs-section-alt { padding: 60px 1.25rem; }
          .cs-results-row { grid-template-columns: 1fr; }
          .cs-calc-grid { grid-template-columns: 1fr; }
          .cs-ba-grid { grid-template-columns: 1fr; }
          .cs-stats-bar { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 480px) {
          .cs-stats-bar { grid-template-columns: 1fr 1fr; }
          .cs-featured-img { height: 220px; }
        }
      `}</style>

      <main style={{ paddingTop: "var(--header-h)" }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section className="hero-section" style={{
            position: "relative",
            minHeight: "65vh",
            display: "flex",
            alignItems: "center",
            padding: "clamp(100px, 12vh, 120px) 1.5rem 80px",
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
                    src="/images/case-studies-hero.png" 
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
            <div className="section-label">Case Studies & ROI Proof</div>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(2.4rem,6vw,4rem)",
              fontWeight: 900, lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem", color: "var(--text)"
            }}>
              Real Results From{" "}
              <br />
              <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Real UAE Businesses
              </span>
            </h1>
            <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: "var(--text-muted)", maxWidth: 600, margin: "0 0 2.5rem 0", lineHeight: 1.75 }}>
              Every number here comes from a real deployment. No projections. No averages. Actual hours saved, leads converted, and revenue generated.
            </p>

            {/* Quick stats */}
            <div style={{ display: "flex", justifyContent: "flex-start", gap: "2.5rem", flexWrap: "wrap", textAlign: "left" }}>
              {[
                { num: "80+", label: "Enterprise Clients" },
                { num: "13+", label: "Years in Market" },
                { num: "AED 2M+", label: "Client Value Created" },
                { num: "99.1%", label: "Avg Automation Accuracy" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, fontFamily: "'Plus Jakarta Sans',sans-serif", background: "linear-gradient(135deg, #1D4ED8, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.num}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CASE STUDIES ══════════════════════════════════════════════════════ */}
        <section id="case-studies" className="cs-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
              <div>
                <div className="section-label">Client Success Stories</div>
                <h2 className="section-title" style={{ marginBottom: "0.4rem" }}>Organised by Industry</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65, maxWidth: 560, marginBottom: "1.75rem" }}>
                  Each study includes: industry, challenge, solution stack, measurable results, and a direct client quote.
                </p>
              </div>
            </div>

            {/* Industry tabs */}
            <div className="cs-industry-tabs">
              {caseStudies.map((c, i) => (
                <button
                  key={c.id}
                  className={`cs-industry-tab${activeCase === i ? " active" : ""}`}
                  style={activeCase === i ? { background: c.industryColor, borderColor: c.industryColor } : {}}
                  onClick={() => setActiveCase(i)}
                >
                  <c.Icon size={14} />
                  {c.industry}
                </button>
              ))}
            </div>

            {/* Featured case + sidebar */}
            <div className="cs-featured-layout">
              {/* Main detail panel */}
              <div>
                <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: "1.75rem" }}>
                  <Image src={cs.image} alt={cs.company} fill className="cs-featured-img" style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: "1.25rem", left: "1.5rem", right: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                      <span style={{ background: cs.industryColor, color: "white", fontSize: "0.68rem", fontWeight: 800, padding: "0.2rem 0.65rem", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                        {cs.industry}
                      </span>
                      <span style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", fontSize: "0.72rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 100, backdropFilter: "blur(4px)" }}>
                        {cs.size}
                      </span>
                    </div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "white", marginTop: "0.4rem", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{cs.company}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>{cs.location}</div>
                  </div>
                </div>

                {/* Challenge */}
                <div style={{ marginBottom: "1.1rem" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#EF4444", marginBottom: "0.4rem" }}>The Challenge</div>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: "1.1rem" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: cs.industryColor, marginBottom: "0.4rem" }}>The Solution</div>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{cs.solution}</p>
                </div>

                {/* Tech tags */}
                <div className="cs-tech-tags">
                  {cs.tech.map(t => (
                    <span key={t} className="cs-tech-tag">{t}</span>
                  ))}
                </div>

                {/* Results row */}
                <div className="cs-results-row">
                  {cs.results.map(r => (
                    <div key={r.label} className="cs-result-card">
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: `${cs.industryColor}14`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.6rem", color: cs.industryColor }}>
                        <r.icon size={16} />
                      </div>
                      <div className="cs-result-before">{r.before}</div>
                      <div className="cs-result-after" style={{ color: cs.industryColor }}>{r.after}</div>
                      <div className="cs-result-label">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Key metric pill */}
                <div className="cs-key-metric" style={{ background: `${cs.industryColor}12`, color: cs.industryColor }}>
                  <TrendingUp size={16} /> {cs.keyMetric}
                </div>

                {/* Testimonial */}
                <div className="cs-testimonial">
                  <p className="cs-testimonial-text">{cs.testimonial}</p>
                  <div className="cs-testimonial-author">— {cs.client}</div>
                </div>

                <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginTop: "1.5rem" }}>
                  Get a Similar Result <ArrowRight size={16} />
                </Link>
              </div>

              {/* Sidebar: other cases */}
              <div className="cs-sidebar">
                <div style={{ fontSize: "0.74rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "0.25rem" }}>All Case Studies</div>
                {caseStudies.map((c, i) => (
                  <button key={c.id} className={`cs-mini-card${activeCase === i ? " active" : ""}`} onClick={() => setActiveCase(i)}>
                    <div className="cs-mini-icon" style={{ background: c.industryBg }}>
                      <c.Icon size={18} style={{ color: c.industryColor }} />
                    </div>
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div className="cs-mini-co">{c.company} · {c.location.split(",")[0]}</div>
                      <div className="cs-mini-title">{c.industry}</div>
                      <div className="cs-mini-metric" style={{ color: c.industryColor }}>↑ {c.keyMetric.split(" ").slice(0, 3).join(" ")}…</div>
                    </div>
                    <ChevronRight size={16} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                  </button>
                ))}

                {/* CTA card */}
                <div style={{ padding: "1.5rem", background: "linear-gradient(135deg, #1D4ED8 0%, #6366F1 100%)", borderRadius: 20, color: "white", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -30, right: -20, width: 130, height: 130, background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)" }} />
                  <div style={{ fontSize: "1rem", fontWeight: 900, marginBottom: "0.4rem", fontFamily: "'Plus Jakarta Sans',sans-serif", position: "relative" }}>Is Your ROI Proven?</div>
                  <p style={{ fontSize: "0.82rem", opacity: 0.85, lineHeight: 1.6, marginBottom: "1.1rem", position: "relative" }}>Book a free 45-min AI audit and get a UAE-specific business case built for you.</p>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.2rem", background: "white", color: "#1D4ED8", borderRadius: 100, fontSize: "0.83rem", fontWeight: 800, textDecoration: "none", position: "relative" }}>
                    Book Free Audit <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ROI CALCULATOR ════════════════════════════════════════════════════ */}
        <section id="roi-calculator" className="cs-section-alt">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-label">ROI Calculator</div>
              <h2 className="section-title">What Would AI Save Your Business?</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Adjust the sliders to match your team's profile. We'll estimate your hours saved, cost reduction, and revenue uplift — powered by data from 80+ UAE deployments.
              </p>
            </div>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* ══ BEFORE / AFTER ════════════════════════════════════════════════════ */}
        <section id="before-after" className="cs-section" style={{ background: "var(--bg)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="section-label">Before / After Showcases</div>
              <h2 className="section-title">Visual Process Comparisons</h2>
              <p className="section-desc" style={{ margin: "0 auto 2rem" }}>
                See the exact steps eliminated by AI automation — from 12-step manual nightmares to 3-step automated flows.
              </p>
              <div className="cs-ba-tabs" style={{ justifyContent: "center" }}>
                {beforeAfterItems.map((b, i) => (
                  <button key={i} className={`cs-ba-tab${activeBA === i ? " active" : ""}`} onClick={() => setActiveBA(i)}>
                    {b.title}
                  </button>
                ))}
              </div>
            </div>

            {beforeAfterItems.map((item, i) => (
              <div key={i} style={{ display: i === activeBA ? "block" : "none" }}>
                <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600 }}>{item.subtitle}</div>
                </div>
                <div className="cs-ba-grid">
                  {/* Before */}
                  <div className="cs-ba-panel" style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(239,68,68,0.25)" }}>
                    <div className="cs-ba-header">
                      <div className="cs-ba-dot" style={{ background: "#EF4444" }} />
                      <div className="cs-ba-label">{item.before.label}</div>
                      <span className="cs-ba-count" style={{ background: "rgba(239,68,68,0.12)", color: "#EF4444" }}>{item.before.label2}</span>
                    </div>
                    {item.before.steps.map((step, j) => (
                      <div key={j} className="cs-ba-step" style={{ borderColor: "rgba(239,68,68,0.15)" }}>
                        <span className="cs-step-num" style={{ background: "rgba(239,68,68,0.12)", color: "#EF4444" }}>{j + 1}</span>
                        <span style={{ color: "var(--text-muted)" }}>{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* After */}
                  <div className="cs-ba-panel" style={{ background: "rgba(16,185,129,0.04)", borderColor: "rgba(16,185,129,0.25)" }}>
                    <div className="cs-ba-header">
                      <div className="cs-ba-dot" style={{ background: "#10B981" }} />
                      <div className="cs-ba-label">{item.after.label}</div>
                      <span className="cs-ba-count" style={{ background: "rgba(16,185,129,0.12)", color: "#10B981" }}>{item.after.label2}</span>
                    </div>
                    {item.after.steps.map((step, j) => (
                      <div key={j} className="cs-ba-step" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                        <span className="cs-step-num" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>{j + 1}</span>
                        <span style={{ color: "var(--text)", fontWeight: 600 }}>{step}</span>
                      </div>
                    ))}
                    {/* Savings callout */}
                    <div style={{ marginTop: "1.25rem", padding: "1.1rem", background: "rgba(16,185,129,0.09)", borderRadius: 12, border: "1px solid rgba(16,185,129,0.2)", textAlign: "center" }}>
                      <CheckCircle2 size={20} style={{ color: "#10B981", marginBottom: 6 }} />
                      <div style={{ fontWeight: 900, fontSize: "1rem", color: "#10B981", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                        {i === 0 ? "8× Faster · 3× More Viewings" : "99.1% Accuracy · 20 Hrs/Week Saved"}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                        {i === 0 ? "Zero missed leads, 24/7 qualified responses" : "From 2–3 days to under 4 minutes per invoice"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ AGGREGATE STATS ═══════════════════════════════════════════════════ */}
        <section className="cs-section-alt">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="section-label">Aggregate Impact</div>
              <h2 className="section-title">Across All UAE Deployments</h2>
            </div>
            <div className="cs-stats-bar">
              {[
                { num: "340K+", label: "Hours Saved for Clients" },
                { num: "AED 2M+", label: "Revenue Unlocked" },
                { num: "89%", label: "Avg CSAT Improvement" },
                { num: "< 90 sec", label: "Avg AI Response Time" },
              ].map(s => (
                <div key={s.label} className="cs-stat-item">
                  <div className="cs-stat-num">{s.num}</div>
                  <div className="cs-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ═════════════════════════════════════════════════════════ */}
        <section className="cs-section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
            <div className="section-label">Ready for Your Own Case Study?</div>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem,4vw,2.6rem)", marginBottom: "1rem", lineHeight: 1.15 }}>
              Let's write yours next.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 2.5rem" }}>
              Book a complimentary 45-minute AI readiness audit. We'll map your current workflow, identify the highest-ROI automation opportunities, and hand you a business case — free.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                Book Free Audit <ArrowRight size={17} />
              </Link>
              <Link href="/resources" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0 1.75rem", height: 50, borderRadius: 12, border: "2px solid var(--border)", color: "var(--text)", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
                Explore Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
