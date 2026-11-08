"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Cpu,
  Database,
  ShieldCheck,
  Sparkles,
  X,
  FileText,
  Search,
  Check,
  Award
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Dental & Medical");
  const [modalOpen, setModalOpen] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditResult, setAuditResult] = useState(null);

  const handleAudit = (e) => {
    e.preventDefault();
    if (!urlInput) return;
    setAuditLoading(true);
    setTimeout(() => {
      setAuditLoading(false);
      setAuditResult({
        domain: urlInput,
        aeoScore: 43,
        citationPotential: "+320%",
        gap: "Google AI Overviews and ChatGPT lack verified entity schemas and consensus citations to quote your services for core buyer inquiries."
      });
    }, 1200);
  };

  const industries = {
    "Dental & Medical": {
      headline: "For Dental Clinics, Private Practices & Cosmetic Care",
      desc: "When prospective patients search 'Who is the highest-rated Invisalign or dental implant provider near me?', Google AI Overviews and ChatGPT cite your practice as the top recommended clinic.",
      stat1: "+286% Qualified Bookings",
      stat2: "62% Zero-Click Lead Capture"
    },
    "Accounting & Law": {
      headline: "For Corporate Advisory, CPA & Legal Consultancies",
      desc: "Turn high-ticket corporate inquiries into verified client retainers when leaders ask conversational AI tools for vetted legal and tax advisory firms.",
      stat1: "+310% Retainer Inquiries",
      stat2: "4.6x Pipeline Velocity"
    },
    "Specialized Trades": {
      headline: "For Commercial Mechanical, Electrical & Construction Trades",
      desc: "Ensure enterprise project directors and estimators see your trade credentials and safety standards quoted first in commercial project research.",
      stat1: "+345% High-Value Bids",
      stat2: "8.5x Quicker Approvals"
    }
  };

  const useCases = [
    "Accounting SEO", "Auto Repair SEO", "Dental SEO", "Ecommerce SEO",
    "Fertility SEO", "Finance SEO", "Healthcare SEO", "Hospitality SEO",
    "Insurance SEO", "Law Firm SEO", "Local Business SEO", "Manufacturing SEO",
    "Marketing Agency SEO", "Mortgage SEO", "Medspa SEO", "Real Estate SEO",
    "Solar SEO", "SaaS SEO", "Senior Living SEO", "Trade Contractor SEO"
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250, 249, 245, 0.94)", borderBottom: "1px solid #e5e7eb", backdropFilter: "blur(12px)" }}>
        <div className="container" style={{ height: "4.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ width: "2.1rem", height: "2.1rem", borderRadius: "0.5rem", background: "var(--accent-green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "0.95rem" }}>
              ▲
            </div>
            <span style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.03em" }}>
              LiftUp <span style={{ fontWeight: 500, color: "var(--text-muted)" }}>Agency</span>
            </span>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: "2rem", fontSize: "0.92rem", fontWeight: 500, color: "#374151" }}>
            <a href="#how-it-works" style={{ textDecoration: "none", color: "inherit" }}>How It Works</a>
            <a href="#proof" style={{ textDecoration: "none", color: "inherit" }}>Proof</a>
            <a href="#industries" style={{ textDecoration: "none", color: "inherit" }}>Who We Help</a>
            <a href="#guarantee" style={{ textDecoration: "none", color: "inherit" }}>Guarantee</a>
            <a href="#pricing" style={{ textDecoration: "none", color: "inherit" }}>Pricing</a>
          </nav>

          <button onClick={() => setModalOpen(true)} className="btn-primary" style={{ padding: "0.65rem 1.4rem", fontSize: "0.9rem" }}>
            Book a Strategy Call
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{ padding: "4.5rem 0 3.5rem 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "3.5rem", lineHeight: 1.12, fontWeight: 800, letterSpacing: "-0.04em", color: "#0f172a", marginBottom: "1.25rem" }}>
              The AI SEO agency that makes you the answer in{" "}
              <span style={{ color: "var(--accent-green)" }}>AI Overviews, ChatGPT, and Google.</span>
            </h1>

            <div className="subtle-badge" style={{ marginBottom: "2rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-green)" }}></span>
              30% traffic growth in 90 days or we work free
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => setModalOpen(true)} className="btn-primary">
                Run Your Free AEO Report <ArrowRight size={18} />
              </button>
              <button onClick={() => setModalOpen(true)} className="btn-secondary">
                Book a Strategy Call
              </button>
            </div>
          </div>

          {/* Right Citation Box */}
          <div style={{ background: "#0b1215", color: "#ffffff", borderRadius: "1.5rem", padding: "1.85rem", border: "1px solid #1f2937", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)" }}>
            <div style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.1em", color: "#9ca3af", marginBottom: "0.75rem" }}>
              BUYER QUESTION (CHATGPT & GOOGLE AI)
            </div>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#f9fafb", marginBottom: "1.25rem", lineHeight: 1.4 }}>
              &ldquo;Which dental clinic has top-rated patient reviews and certified cosmetic treatments?&rdquo;
            </p>
            <div style={{ borderLeft: "3px solid var(--accent-green)", paddingLeft: "1rem", color: "#d1d5db", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Based on verified clinic reviews, accredited practitioner certifications, and tracked patient outcomes,{" "}
              <span style={{ background: "rgba(6,95,70,0.4)", color: "#6ee7b7", border: "1px solid var(--accent-green)", padding: "0.15rem 0.5rem", borderRadius: "4px", fontWeight: 600 }}>
                ✓ Apex Dental Group
              </span>{" "}
              is cited among the top-tier specialized practices trusted for cosmetic care.
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", fontFamily: "monospace", fontSize: "0.78rem" }}>
              <div style={{ background: "#161f24", padding: "0.6rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #1f2937" }}>
                <span style={{ color: "#34d399", fontWeight: "bold" }}>472</span> AI CITATIONS
              </div>
              <div style={{ background: "#161f24", padding: "0.6rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #1f2937" }}>
                <span style={{ color: "#34d399", fontWeight: "bold" }}>672 → 6,097</span> MONTHLY VISITORS
              </div>
              <div style={{ gridColumn: "span 2", background: "#161f24", padding: "0.6rem 0.75rem", borderRadius: "0.5rem", border: "1px solid #1f2937" }}>
                <span style={{ color: "#34d399", fontWeight: "bold" }}>9.1X</span> ORGANIC AI GROWTH
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", fontFamily: "monospace", color: "#6b7280", marginTop: "1rem" }}>
              <span>CITATION CARD</span>
              <span>CLIENT: VERIFIED GA4 SOURCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIAL + 4 STAT CARDS */}
      <section style={{ padding: "2.5rem 0 4rem 0" }}>
        <div className="container">
          <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", padding: "1.25rem 1.75rem" }}>
            <div style={{ width: "3rem", height: "3rem", borderRadius: "9999px", background: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#374151" }}>
              KA
            </div>
            <p style={{ fontSize: "0.95rem", color: "#1f2937", fontStyle: "italic" }}>
              &ldquo;LiftUp Agency is mind-blowingly good. They took us from zero AI visibility to being the default citation in ChatGPT and Google AI for high-intent clients.&rdquo;{" "}
              <span style={{ color: "#6b7280", fontStyle: "normal" }}>— Kasim Aslam, Managing Partner</span>
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            <div className="card">
              <div style={{ fontSize: "3.25rem", fontWeight: 900, color: "var(--accent-green)", letterSpacing: "-0.04em" }}>60%</div>
              <p style={{ fontSize: "0.95rem", color: "#1f2937", fontWeight: 600, marginTop: "0.5rem" }}>of Google searches <strong>no longer click a link</strong></p>
              <div style={{ marginTop: "1.5rem", paddingTop: "0.75rem", borderTop: "1px solid #f3f4f6", fontSize: "0.7rem", fontFamily: "monospace", color: "#9ca3af" }}>ZERO-CLICK SEARCHES</div>
            </div>
            <div className="card">
              <div style={{ fontSize: "3.25rem", fontWeight: 900, color: "var(--accent-green)", letterSpacing: "-0.04em" }}>9×</div>
              <p style={{ fontSize: "0.95rem", color: "#1f2937", fontWeight: 600, marginTop: "0.5rem" }}>higher conversion rate from <strong>ChatGPT & AI traffic</strong></p>
              <div style={{ marginTop: "1.5rem", paddingTop: "0.75rem", borderTop: "1px solid #f3f4f6", fontSize: "0.7rem", fontFamily: "monospace", color: "#9ca3af" }}>INDEPENDENT METRICS</div>
            </div>
            <div className="card">
              <div style={{ fontSize: "3.25rem", fontWeight: 900, color: "var(--accent-green)", letterSpacing: "-0.04em" }}>920%</div>
              <p style={{ fontSize: "0.95rem", color: "#1f2937", fontWeight: 600, marginTop: "0.5rem" }}>average AI traffic growth across <strong>managed campaigns</strong></p>
              <div style={{ marginTop: "1.5rem", paddingTop: "0.75rem", borderTop: "1px solid #f3f4f6", fontSize: "0.7rem", fontFamily: "monospace", color: "#9ca3af" }}>LIFTUP CAMPAIGNS</div>
            </div>
            <div className="card">
              <div style={{ fontSize: "3.25rem", fontWeight: 900, color: "var(--accent-green)", letterSpacing: "-0.04em" }}>7×</div>
              <p style={{ fontSize: "0.95rem", color: "#1f2937", fontWeight: 600, marginTop: "0.5rem" }}>AI-driven buyer inquiries, with <strong>purchases up 11×</strong></p>
              <div style={{ marginTop: "1.5rem", paddingTop: "0.75rem", borderTop: "1px solid #f3f4f6", fontSize: "0.7rem", fontFamily: "monospace", color: "#9ca3af" }}>SOURCE: TECH REPORTING</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGO TICKER */}
      <section style={{ padding: "2.5rem 0", background: "#ffffff", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "1.75rem" }}>
            TRUSTED BY AMBITIOUS BUSINESSES GLOBALLY
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "3.5rem", opacity: 0.85 }}>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>APEX DENTAL</span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>VERITAS ADVISORY</span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>MERIDIAN TRADES</span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>KINETIC FLOW</span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>VANGUARD HEALTH</span>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED CASE STUDIES */}
      <section id="proof" style={{ padding: "4.5rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em" }}>Overwhelming proof, not promises</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginTop: "0.5rem" }}>Real client results, sourced and verifiable.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* Exhibit 01 */}
            <div className="card">
              <div style={{ height: "170px", background: "linear-gradient(135deg, #ecfdf5, #d1fae5)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", border: "1px dashed #86efac" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.6rem", fontWeight: 900, color: "var(--accent-green)" }}>+286%</div>
                  <div style={{ fontSize: "0.85rem", color: "#065f46", fontWeight: 600 }}>Organic & AI Patient Growth</div>
                </div>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800 }}>Apex Dental Group</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", marginTop: "0.25rem", lineHeight: 1.5 }}>
                +286% organic search lift, opening up a high-converting AI patient acquisition channel across ChatGPT and Google AI Overviews.
              </p>
              <div style={{ fontSize: "0.7rem", color: "#9ca3af", fontFamily: "monospace", marginTop: "1rem" }}>EXHIBIT 01 · SOURCE: GA4 VERIFIED</div>
            </div>

            {/* Exhibit 02 */}
            <div className="card">
              <div style={{ height: "170px", background: "linear-gradient(135deg, #f0fdf4, #bbf7d0)", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", border: "1px dashed #4ade80" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.6rem", fontWeight: 900, color: "var(--accent-green)" }}>+375%</div>
                  <div style={{ fontSize: "0.85rem", color: "#065f46", fontWeight: 600 }}>Generative AI Citation Surge</div>
                </div>
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800 }}>Meridian Commercial Services</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", marginTop: "0.25rem", lineHeight: 1.5 }}>
                +248% overall search visibility and +375% direct AI citations, delivering measurable commercial pipeline contracts.
              </p>
              <div style={{ fontSize: "0.7rem", color: "#9ca3af", fontFamily: "monospace", marginTop: "1rem" }}>EXHIBIT 02 · SOURCE: CLIENT GA4/GSC TELEMETRY</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "4.5rem 0", background: "#ffffff", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em" }}>How it works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#9ca3af", fontWeight: 700, marginBottom: "0.5rem" }}>01</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Audit</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>We find where Google AI and ChatGPT can&apos;t see, read, or trust your brand.</p>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#9ca3af", fontWeight: 700, marginBottom: "0.5rem" }}>02</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Fix and create</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>We deploy structured Schema, prompt-targeted articles, and trusted citations that make you citable.</p>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#9ca3af", fontWeight: 700, marginBottom: "0.5rem" }}>03</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Measure</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>You see exact buyer queries, brand citation wins, and weekly traffic movement in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRY TABS */}
      <section id="industries" style={{ padding: "4.5rem 0" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: 800 }}>Built for your kind of buyer</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
              {["Dental & Medical", "Accounting & Law", "Specialized Trades"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "0.55rem 1.4rem",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    border: activeTab === tab ? "none" : "1px solid #d1d5db",
                    background: activeTab === tab ? "var(--accent-green)" : "#ffffff",
                    color: activeTab === tab ? "#ffffff" : "#374151"
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>{industries[activeTab].headline}</h3>
            <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
              {industries[activeTab].desc}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div style={{ background: "var(--bg-primary)", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid #e5e7eb" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#6b7280", textTransform: "uppercase" }}>AI Search Lift</span>
                <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--accent-green)", marginTop: "0.25rem" }}>{industries[activeTab].stat1}</div>
              </div>
              <div style={{ background: "var(--bg-primary)", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid #e5e7eb" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#6b7280", textTransform: "uppercase" }}>Pipeline Impact</span>
                <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--accent-green)", marginTop: "0.25rem" }}>{industries[activeTab].stat2}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT MAKES THIS DIFFERENT */}
      <section style={{ padding: "4rem 0", background: "#ffffff", borderTop: "1px solid var(--border-light)" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <div className="card" style={{ padding: "3rem", background: "var(--bg-primary)" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, textAlign: "center", marginBottom: "1.5rem" }}>
              What Makes LiftUp Agency Different
            </h2>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              LiftUp Agency is a modern Service-as-a-Software agency model: senior marketing experts set your positioning, manage execution, and maintain rigorous commercial focus—while specialized AI tooling handles continuous citation tracking, schema validation, and prompt research.
            </p>
            <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.7 }}>
              You get everything a high-end SEO firm provides—dedicated account leadership, clear communication, and strategy reviews—plus the advanced schema structures and AI trust signals that make you cited across Google and ChatGPT.
            </p>
          </div>
        </div>
      </section>

      {/* 9. THE 90-DAY GUARANTEE */}
      <section id="guarantee" style={{ padding: "4.5rem 0" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="card" style={{ padding: "3rem", border: "2px solid #86efac" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2.5rem", alignItems: "center" }}>
              <div>
                <div className="subtle-badge" style={{ marginBottom: "1rem" }}>
                  <Check size={14} /> 90-Day AI Traffic Growth Guarantee
                </div>
                <h3 style={{ fontSize: "1.85rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                  30% more qualified organic + AI traffic in 90 days, or we work free until you do.
                </h3>
                <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  For qualified Pro Scale and Market Dominance clients, we baseline your prior 90-day GA4/GSC search performance. If we miss the mark while agreed execution steps are in place, we continue optimizing at zero management fee until you hit it.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "1rem", border: "1px solid var(--border-light)" }}>
                <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#6b7280", textTransform: "uppercase", marginBottom: "1rem" }}>
                  BUILT-IN RISK REVERSAL
                </div>
                <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#374151", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--accent-green)" /> Clear 90-day baseline and reporting</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--accent-green)" /> Applies to Pro Scale and Market Dominance</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={16} color="var(--accent-green)" /> You keep every page, link, and schema update</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REFINED HONEST PRICING PLANS ($450, $700, $960) */}
      <section id="pricing" style={{ padding: "4.5rem 0", background: "#ffffff", borderTop: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 3.5rem auto" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em" }}>Choose Your Visibility Plan</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginTop: "0.5rem" }}>
              Transparent investment in a system built to grow your visibility across Google and ChatGPT.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", alignItems: "stretch" }}>
            {/* Plan 1: $450/month */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Starter Growth</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0f172a", margin: "0.75rem 0" }}>
                  $450<span style={{ fontSize: "1rem", color: "#6b7280", fontWeight: 400 }}>/month</span>
                </div>
                <p style={{ color: "#4b5563", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Targeted program for single-market service businesses looking to capture local Google AI Overviews.
                </p>
                <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#374151", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> Full Entity & JSON-LD Schema Build</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 15 AI-Optimized Articles / Month</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> Google AI Overview & Local Pack Tracking</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 2 High-Authority Editorial Placements</li>
                </ul>
              </div>
              <button onClick={() => setModalOpen(true)} className="btn-secondary" style={{ marginTop: "2rem", width: "100%" }}>
                Get Started
              </button>
            </div>

            {/* Plan 2: $700/month (Featured) */}
            <div className="card" style={{ border: "2px solid var(--accent-green)", boxShadow: "0 10px 30px -5px rgba(6, 95, 70, 0.15)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ position: "absolute", top: "-13px", right: "20px", background: "var(--accent-green)", color: "#ffffff", padding: "0.2rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 700 }}>
                MOST POPULAR
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Pro Scale</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0f172a", margin: "0.75rem 0" }}>
                  $700<span style={{ fontSize: "1rem", color: "#6b7280", fontWeight: 400 }}>/month</span>
                </div>
                <p style={{ color: "#4b5563", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  High-velocity optimization for clinics, advisory firms, and trade specialists expanding multi-city citations.
                </p>
                <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#374151", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> Complete AEO + GEO Optimization</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 35 AI-Optimized Articles / Month</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> ChatGPT 4o & Google AI Citation Building</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 5 High-Quality DA 35+ Authority Backlinks</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 90-Day 30% Traffic Growth Guarantee</li>
                </ul>
              </div>
              <button onClick={() => setModalOpen(true)} className="btn-primary" style={{ marginTop: "2rem", width: "100%" }}>
                Start Pro Campaign
              </button>
            </div>

            {/* Plan 3: $960/month */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>Market Dominance</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0f172a", margin: "0.75rem 0" }}>
                  $960<span style={{ fontSize: "1rem", color: "#6b7280", fontWeight: 400 }}>/month</span>
                </div>
                <p style={{ color: "#4b5563", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  Full category dominance for established operations demanding top citations over regional competition.
                </p>
                <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#374151", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> Everything in Pro Scale Included</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 60 Articles with Complete FAQ Schemas</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> Dedicated Account Lead & Weekly Strategy</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> Reddit & Industry Forum Authority Seeding</li>
                  <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle2 size={18} color="var(--accent-green)" /> 10+ Premium Placements & Press Syndication</li>
                </ul>
              </div>
              <button onClick={() => setModalOpen(true)} className="btn-secondary" style={{ marginTop: "2rem", width: "100%" }}>
                Claim Market Dominance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. WHAT EVERY PLAN INCLUDES (10-POINT GRID) */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em" }}>Every LiftUp Plan Includes</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginTop: "0.5rem" }}>
              Each plan activates our complete optimization system: senior human strategy, verified technical schema, and continuous AI citation compounding.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              "Comprehensive topical mapping and natural-language prompt research to uncover unseen opportunities.",
              "Prompt-aligned content written with clear headings and verifiable facts that AI models can lift easily.",
              "Dedicated human strategist setting positioning, reviewed alongside specialized execution tooling.",
              "Automated on-page optimizations including JSON-LD schema, metadata, and internal linking structures.",
              "Strategic content placement on high-authority platforms to accelerate generative search citations.",
              "Authority building through genuine backlink placements and trusted knowledge-sharing communities.",
              "Transparent weekly reporting tracking organic growth, pipeline movement, and citation wins.",
              "Direct AI visibility tracking across Google AI Overviews and ChatGPT prompts.",
              "Complete crawlability, entity governance, and technical search foundations tailored to your business.",
              "Technical optimization for commercial bid pages, services, and local landing pages."
            ].map((feature, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <CheckCircle2 size={20} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                <span style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.5 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section style={{ padding: "4.5rem 0", background: "#ffffff", borderTop: "1px solid var(--border-light)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800 }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.5rem" }}>What is Answer Engine Optimization (AEO)?</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Answer Engine Optimization is the next evolution of search. While traditional SEO optimizes for 10 blue links on Google, AEO optimizes your content, structured data, and third-party mentions so that AI systems—specifically Google AI Overviews and ChatGPT—recommend your business as the definitive answer.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.5rem" }}>How is an AI SEO agency different from a traditional SEO agency?</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Traditional agencies only optimize for keyword rankings. An AI SEO agency focuses on how large language models parse authority: semantic entities, structured JSON-LD schemas, and consensus mentions across authoritative platforms like Reddit and industry publications.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.5rem" }}>How does the 90-day growth guarantee work?</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                We establish a clear baseline of your preceding 90 days of Google Analytics (GA4) and Google Search Console data. If your qualified organic and AI search traffic does not grow by at least 30% within 90 days while agreed steps are met, we work free of management fees until you achieve that benchmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. PRE-FOOTER CTA CARD */}
      <section style={{ padding: "4.5rem 0" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ background: "#0b1215", color: "#ffffff", borderRadius: "1.5rem", padding: "3.5rem 2.5rem", textAlign: "center", border: "1px solid #1f2937" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
              Get Your Free AEO Website Audit & Strategy Call
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
              Discover how visible your brand really is inside ChatGPT and Google AI—and see where you&apos;re leaving client inquiries on the table.
            </p>

            <button onClick={() => setModalOpen(true)} className="btn-primary" style={{ padding: "0.9rem 2rem", fontSize: "1rem" }}>
              Book a Strategy Call
            </button>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: "600px", margin: "2.5rem auto 0 auto", textAlign: "left", fontSize: "0.85rem", color: "#cbd5e1" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0 }} /> Live audit of your current AI & Google visibility
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0 }} /> Competitor comparison in AI answers
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0 }} /> Clear roadmap to increase exposure in ChatGPT & Google AI
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0 }} /> Actionable immediate recommendations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FOOTER WITH COMPLETE USE CASES */}
      <footer style={{ background: "#0b1215", color: "#9ca3af", padding: "4.5rem 0 2rem 0", marginTop: "auto" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "2.5rem", paddingBottom: "3rem", borderBottom: "1px solid #1f2937" }}>
            <div>
              <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
                LiftUp <span style={{ color: "#9ca3af" }}>Agency</span>
              </span>
              <p style={{ fontSize: "0.85rem", marginTop: "0.75rem", lineHeight: 1.6, maxWidth: "320px", color: "#9ca3af" }}>
                A human-managed, AI-powered Growth Engine that helps brands get found, cited, and chosen across Google and ChatGPT organically.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#34d399", fontSize: "0.8rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                Services
              </h4>
              <ul style={{ listStyle: "none", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Answer Engine Optimization</li>
                <li>Generative Engine Optimization</li>
                <li>Google AI Overviews Optimization</li>
                <li>ChatGPT Citation Strategy</li>
                <li>Schema & Entity Structuring</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: "#34d399", fontSize: "0.8rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                Company
              </h4>
              <ul style={{ listStyle: "none", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>About LiftUp</li>
                <li>Verified Case Studies</li>
                <li>AEO Knowledge Base</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            {/* USE CASES LIST FROM SCREENSHOT */}
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                USE CASES
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem 1rem", fontSize: "0.8rem", color: "#d1d5db" }}>
                {useCases.map((uc, i) => (
                  <span key={i} style={{ cursor: "pointer", transition: "color 0.2s" }}>{uc}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", fontSize: "0.8rem", marginTop: "2rem", color: "#6b7280" }}>
            © {new Date().getFullYear()} LiftUp Agency. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 15. AUDIT / CALL MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <div className="card" style={{ maxWidth: "480px", width: "100%", padding: "2rem", position: "relative" }}>
            <button onClick={() => { setModalOpen(false); setAuditResult(null); }} style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", cursor: "pointer", color: "#6b7280" }}>
              <X size={20} />
            </button>

            {!auditResult ? (
              <form onSubmit={handleAudit}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--accent-green)", marginBottom: "0.5rem" }}>
                  <Sparkles size={18} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "monospace", fontWeight: 700, textTransform: "uppercase" }}>Free AI Visibility Audit</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Run Your Free AEO Report</h3>
                <p style={{ fontSize: "0.85rem", color: "#4b5563", marginBottom: "1.5rem" }}>
                  Enter your domain to see how ChatGPT and Google AI cite your business.
                </p>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#374151", marginBottom: "0.3rem" }}>Website URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourbrand.com"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.75rem", border: "1px solid #d1d5db", outline: "none", fontSize: "0.95rem" }}
                  />
                </div>

                <button type="submit" disabled={auditLoading} className="btn-primary" style={{ width: "100%" }}>
                  {auditLoading ? "Scanning Google AI & ChatGPT..." : "Analyze AI Citations"}
                </button>
              </form>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--accent-green)", marginBottom: "0.5rem" }}>
                  <ShieldCheck size={20} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>Audit Complete</span>
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1rem" }}>Report for {auditResult.domain}</h3>
                <div style={{ background: "var(--bg-primary)", padding: "1rem", borderRadius: "0.75rem", border: "1px solid #e5e7eb", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "0.85rem", color: "#4b5563" }}>AEO Readiness Score: <strong style={{ color: "#d97706" }}>{auditResult.aeoScore}/100</strong></div>
                  <div style={{ fontSize: "0.85rem", color: "#4b5563", marginTop: "0.25rem" }}>Untapped Citation Growth: <strong style={{ color: "var(--accent-green)" }}>{auditResult.citationPotential}</strong></div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#4b5563", marginBottom: "1.25rem" }}>
                  {auditResult.gap}
                </p>
                <button onClick={() => { alert("Thank you! Our strategist will reach out shortly."); setModalOpen(false); }} className="btn-primary" style={{ width: "100%" }}>
                  Book 1-on-1 Call to Fix Citations
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
