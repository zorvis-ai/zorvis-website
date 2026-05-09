"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Nav, Footer, Tag } from "@/components/Nav";
import { Search, ChevronDown, Shield, Brain, Globe, Users, FileText, Lock, ArrowRight } from "lucide-react";

type FaqCategory = "all" | "data" | "scoring" | "compliance" | "product" | "pricing";

type Faq = {
  id: string;
  category: Exclude<FaqCategory, "all">;
  question: string;
  shortAnswer: string;
  fullAnswer: string[];
};

const FAQS: Faq[] = [
  // ─── DATA & SECURITY ───
  {
    id: "data-safe",
    category: "data",
    question: "Is my candidate data safe?",
    shortAnswer:
      "Yes. Encrypted at rest with AES-256, TLS 1.3 in transit, regional data residency (Mumbai for India, Bahrain for UAE), database-level multi-tenant isolation.",
    fullAnswer: [
      "Candidate data in Zorvis AI is encrypted at rest using AES-256 and in transit using TLS 1.3. Documents, CV files, and test recordings are stored in AWS S3 with separate encrypted buckets for India (Mumbai) and UAE (Bahrain) — your data never leaves the region your company is registered in.",
      "Multi-tenant isolation is enforced at the database level via Supabase Row Level Security — your data is invisible to every other company on the platform regardless of the application layer. Magic test links use single-use JWT tokens that expire after 48 hours and are invalidated immediately on first use.",
      "For India customers, all data handling is compliant with the DPDP Act 2023 — explicit consent is captured at every stage, data is retained for the statutory 12-month period and then auto-deleted, and candidates have a one-tap erasure option available at any time. For UAE customers, all data is handled in compliance with UAE PDPL and stored exclusively in Bahrain.",
    ],
  },
  {
    id: "cancel-data",
    category: "data",
    question: "What happens to my data if I cancel?",
    shortAnswer:
      "30-day grace period for full export. Active data is archived (not deleted) for 7 years. Your intelligence model data is preserved if you reactivate.",
    fullAnswer: [
      "Your data remains accessible for 30 days after cancellation, allowing export of all candidate records, employee profiles, hire outcomes, and documents. After 30 days, active data is archived but not deleted — you can reactivate at any time. Archived data is retained for 7 years in compliance with statutory requirements and then permanently deleted.",
      "Candidate contact data and CVs that are past the 12-month DPDP retention window are auto-deleted regardless of subscription status — this is a compliance requirement, not a product decision. You receive a notification before any auto-deletion occurs. All your intelligence model data — hire quality correlations, team health history, performance calibration — is retained in your account and fully available when you reactivate.",
    ],
  },
  {
    id: "employee-scores",
    category: "data",
    question: "Can my employees see their own performance scores?",
    shortAnswer:
      "Yes — by design (Principle P12). Employees see goal completion, peer feedback, skills gaps, career progress. They never see hiring scores or AI risk scores (which don't exist).",
    fullAnswer: [
      "Yes — and this is deliberate design, not a data leak. Employee transparency is a core principle (P12) of Zorvis AI's Intelligence Engine.",
      "In the employee self-service portal and via their preferred channel, employees can see: their own goal completion rates and trends, peer feedback they have received, their skills profile and identified gaps, their career track progress toward the next level, and their engagement signal summary (e.g. 'Your goal completion rate is 51% vs your average 74% — might be a good time for a 1:1'). This is empowering data, not surveillance data.",
      "What employees cannot see: their aptitude score from hiring (it is not shown post-hire in their self-service), other employees' scores, team health scores (these are HR-only), or any AI risk scores (which don't exist — P13 is that no individual attrition risk score is ever generated). Manager calibration data is never visible to the employee being calibrated.",
    ],
  },

  // ─── SCORING & AI ───
  {
    id: "score-explainability",
    category: "scoring",
    question: "Can I see why a candidate was ranked where they were?",
    shortAnswer:
      "Yes, always. Four score components: Aptitude (40%), Resume-JD match (20%), BGV (20%), Behaviour (20%). Plus a 3-sentence AI narrative per candidate.",
    fullAnswer: [
      "Yes — explicitly and always. Zorvis AI shows you four score components for every candidate, always visible on their card in your Kanban pipeline:",
      "• Aptitude (40%): their weighted test score across Numerical, Verbal, Logical, and Domain-specific categories — with a category breakdown visible in their profile.",
      "• Resume-JD semantic match (20%): how well their skills and experience map to your job description, scored via AI embedding comparison.",
      "• BGV outcome (20%): Clear = 1.0, Minor flag = 0.5, Major flag = 0.0. Never penalises a minor flag permanently across multiple applications.",
      "• Behaviour signals (20%): derived from observable test behaviour — time consistency, domain confidence patterns, anti-cheat flags — shown as context, never as penalty components.",
      "Every candidate has a 3-sentence AI narrative: overall assessment, strongest category, and a context note if any proctoring flags exist. Score bands (e.g. 68–74) are shown rather than single numbers like 73, to accurately represent the range of certainty in the assessment. You can always override, move, reject, or advance any candidate regardless of their score — AI ranks, you decide.",
    ],
  },
  {
    id: "ai-bias",
    category: "scoring",
    question: "How do I know the AI isn't biased against certain candidates?",
    shortAnswer:
      "Blind-first ranking (names, photos, addresses stripped before scoring), score bands not precision, quarterly demographic audits, and AI ranks but humans decide every hire.",
    fullAnswer: [
      "This is the most important question any AI hiring company should answer publicly. Here is exactly what Zorvis AI does and what it cannot guarantee:",
      "What we do to reduce bias:",
      "• Blind-first ranking: candidate names, photos, addresses, and graduation years are stripped from CV data before the AI scores them. The AI sees a skills profile, not a person's identity.",
      "• Score bands not precision: showing 68–74 instead of 73 honestly represents the range of uncertainty in the assessment. It prevents HR from treating a decimal-point difference as meaningful.",
      "• Quarterly demographic audit: Zorvis AI runs a demographic correlation analysis of all model outputs every quarter. If scores for candidates with names associated with particular communities, regions, or genders show statistically significant divergence from expected distributions, the model is retrained with corrected data.",
      "• AI ranks, human decides: no candidate is rejected by an algorithm. Every decision is made by a person who can see the full context, override any score, and add their own judgment. The score is an input, not a verdict.",
      "What we cannot guarantee: that the aptitude questions themselves are culturally neutral for all geographies and educational backgrounds, or that companies using Zorvis AI will not introduce bias in how they use the scores. We build the fairest system we can. HR judgment is the final filter, and that is always true.",
    ],
  },
  {
    id: "vs-naukri",
    category: "scoring",
    question: "How is this different from just posting on Naukri?",
    shortAnswer:
      "Naukri delivers candidates. Zorvis AI tells you which ones are worth talking to, runs the entire flow to their first day of work, and learns from every hire to improve the next one.",
    fullAnswer: [
      "Naukri delivers candidates to your inbox. Zorvis AI tells you which ones are worth talking to, and then manages every step from that conversation to their first day of work.",
      "When you post on Naukri, you get CVs. When you post through Zorvis AI (which posts to Naukri simultaneously alongside LinkedIn, Indeed, and your careers page), you get CVs that are automatically ranked by composite score, tested on aptitude, semantically matched to your job description, and displayed in a pipeline where every action — sending a test, scheduling an interview, generating an offer — happens in one place.",
      "The candidate data you collect on Zorvis AI — aptitude score, test category breakdown, BGV result, offer acceptance timestamp, onboarding completion rate, 90-day performance rating — creates a closed loop that improves every subsequent hire. Naukri delivers supply. Zorvis AI processes it, scores it, and converts it into intelligent hires that get better over time.",
    ],
  },

  // ─── PRODUCT ───
  {
    id: "language",
    category: "product",
    question: "Can candidates take the test in their own language?",
    shortAnswer:
      "English and Hindi available now. Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam in Phase 2. Arabic instruction text for UAE candidates in Phase 2.",
    fullAnswer: [
      "Yes, with current and expanding support. Zorvis AI's aptitude question bank currently supports English as the primary language, with Hindi available for all non-domain-specific categories. Regional language support — Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam — is on the Phase 2 roadmap (Month 4–6), prioritised for blue-collar and manufacturing roles where native language testing is a significant quality improvement.",
      "For UAE candidates, English is the default, with Arabic support for basic instruction text on the test interface in Phase 2. The language of the test does not affect how scores are calculated or compared — a candidate who tests in Hindi is scored against the same statistical distribution as a candidate who tests in English for the same role category.",
    ],
  },
  {
    id: "blue-collar",
    category: "product",
    question: "Does it work for blue-collar and frontline hiring?",
    shortAnswer:
      "Yes — purpose-built. Lower verbal weighting, higher practical reasoning, shorter tests, SSC-equivalent literacy, domain banks for manufacturing/hospitality/retail/logistics. UAE pre-screening before visa.",
    fullAnswer: [
      "Yes — and this is a specific design choice, not an afterthought. Blue-collar test configuration in Zorvis AI is explicitly different from white-collar:",
      "• Lower verbal reasoning weighting — frontline roles don't require essay-level comprehension",
      "• Higher numerical and practical reasoning weighting — counting, measurement, and spatial reasoning are more relevant",
      "• Shorter test duration — 20–25 minutes vs 35–45 minutes for professional roles",
      "• Simpler language — questions calibrated for SSC-equivalent literacy levels",
      "• Domain-specific banks per category: manufacturing, hospitality, security, retail, logistics, healthcare support",
      "• Connection speed tolerance built in — many frontline candidates test on 3G or shared WiFi",
      "For UAE blue-collar hiring specifically — where workers are pre-screened in India before visa application — Zorvis AI allows the test to be sent and completed before the candidate arrives in the UAE, and connects to Emirates ID and residence visa collection post-arrival.",
    ],
  },
  {
    id: "setup-time",
    category: "product",
    question: "How long does setup take?",
    shortAnswer:
      "Less than 15 minutes from sign-up to first ranked candidates. No implementation, no IT involvement, no software to install.",
    fullAnswer: [
      "Less than 15 minutes to see your first ranked candidates. The exact steps:",
      "• Minute 1–3: Sign up with Google account. Enter company name and industry. Done.",
      "• Minute 3–8: Create your first job role. Paste a job description OR use Zorvis AI's AI JD generator (role + level + industry → full JD in 30 seconds). Set your test configuration.",
      "• Minute 8–12: Share your application link (auto-generated) with existing candidates OR upload a batch of CVs directly.",
      "• Minute 12–15: First candidates ranked. Score bands and AI summaries visible immediately on free tier.",
      "There is no implementation, no onboarding call required, no IT department involvement. No software to install. Full pipeline (send tests, collect documents, generate offers) is available immediately on paid plan. WhatsApp delivery is available as soon as WATI account is connected — typically same day.",
    ],
  },
  {
    id: "custom-template",
    category: "product",
    question: "Can I use my own offer letter template?",
    shortAnswer:
      "Yes, on the Scale plan and above. Upload your DOCX, AI populates with candidate data while preserving your formatting and clauses. 5 India + 1 UAE bilingual template included on all plans.",
    fullAnswer: [
      "Yes, from the Scale plan and above. Zorvis AI includes 5 standard India templates and 1 UAE bilingual template, which cover the vast majority of SME requirements. Customers on the Scale plan and Enterprise plan can upload their own branded offer letter template in DOCX format, which Zorvis AI's AI layer will populate with candidate and salary data while preserving your company formatting, logo, and custom clauses. The salary field is never auto-filled in any template — it is always entered manually by HR.",
      "For companies with existing legal counsel-reviewed templates: custom template upload is a Sprint 9 feature available at launch on Scale plan. The standard templates included with all plans are built from MOHRE-published UAE specifications and standard Indian employment law requirements, and are suitable for most SME use cases without legal modification.",
    ],
  },
  {
    id: "integrations",
    category: "product",
    question: "What integrations do you have on Day 1?",
    shortAnswer:
      "Naukri, LinkedIn, Indeed, SendGrid, WATI (WhatsApp), Google Calendar, Outlook, SpringVerify (BGV), AWS S3. HRMS connectors (Darwinbox, Keka, Zoho, GreytHR) in Months 3-6.",
    fullAnswer: [
      "On Day 1 of paid plan:",
      "• Job boards: Naukri, LinkedIn, Indeed (one-click post to all simultaneously from within Zorvis AI dashboard)",
      "• Email: SendGrid for transactional email (test delivery, offers, notifications)",
      "• WhatsApp: WATI integration for WhatsApp delivery (requires WATI account — setup takes same day)",
      "• Calendar: Google Calendar and Outlook for interview scheduling (OAuth)",
      "• Background verification: SpringVerify (one-click BGV orders, webhook result delivery)",
      "• Storage: AWS S3 for all documents, CVs, and PDFs",
      "Integrations available in Month 3–6: Darwinbox, Zoho People, Keka, GreytHR (bi-directional HRMS sync), Bayt and GulfTalent (UAE job boards), Daily.co (video interviews), Meta Cloud API direct (replaces WATI at scale), Coursera and LinkedIn Learning (training completion tracking).",
    ],
  },

  // ─── COMPLIANCE ───
  {
    id: "dpdp-compliance",
    category: "compliance",
    question: "Is it compliant with India DPDP Act 2023?",
    shortAnswer:
      "Yes. Explicit consent captured at every stage, purpose limitation, data minimisation, right to erasure (one-tap), 12-month retention then auto-delete, all India data stored in Mumbai (ap-south-1).",
    fullAnswer: [
      "Yes. The India Digital Personal Data Protection Act 2023 applies to any company processing personal data of Indian residents. Zorvis AI's compliance implementation:",
      "• Explicit consent: captured as a non-bypassable step at the start of every aptitude test, with timestamp and IP address stored. Candidates consent to having their test data processed for the purpose of hiring assessment by the specific company that sent them the test.",
      "• Purpose limitation: candidate data is used only for hiring assessment by the company that collected it. It is not shared with other companies, not sold, and not used for advertising.",
      "• Data minimisation: Zorvis AI only collects what is needed for the assessment purpose. Camera snapshots (if the candidate opted into proctoring) are automatically deleted after 30 days.",
      "• Right to erasure: rejection messages always include 'Your data is stored for 12 months. Reply DELETE to erase it immediately.' The erasure endpoint permanently deletes all candidate data within 24 hours.",
      "• Retention: all candidate data is automatically deleted after 12 months from the last interaction. HR receives 30-day advance notice before any auto-deletion.",
      "• Data residency: all India company data is stored in AWS ap-south-1 (Mumbai). No Indian candidate data is processed outside India.",
    ],
  },
  {
    id: "uae-labour-law",
    category: "compliance",
    question: "Is the scoring compliant with UAE Labour Law?",
    shortAnswer:
      "Yes. Aptitude tests are inputs to HR decisions, never automated decisions. Blind-first ranking prevents the discriminatory patterns Federal Decree-Law No. 33 of 2021 prohibits. Bilingual offer letter templates built to MOHRE specifications.",
    fullAnswer: [
      "Yes, in two specific ways that matter to UAE employers:",
      "First, Zorvis AI's aptitude test scores are used as inputs to HR decision-making, not as automated employment decisions. UAE Federal Decree-Law No. 33 of 2021 does not prohibit aptitude testing — it prohibits discrimination on the basis of nationality, religion, or gender in hiring decisions. Zorvis AI's blind-first ranking (which strips name, photo, and address before ranking) and its team-level-only retention intelligence (which never produces individual risk scores) are specifically designed to avoid the discriminatory patterns that create legal exposure.",
      "Second, the offer letter templates in Zorvis AI are built to Federal Decree-Law No. 33 of 2021 specifications: fixed-term contracts with a maximum 3-year term, basic + housing + transport salary structure, gratuity reference clause, and MOHRE annex attached. The bilingual Arabic/English format ensures enforceability in UAE courts where Arabic is the legal language.",
      "Zorvis AI is not a law firm and this does not constitute legal advice — but the templates have been built from MOHRE's published specifications.",
    ],
  },
  {
    id: "white-label",
    category: "compliance",
    question: "Can I white-label this for my recruitment agency?",
    shortAnswer:
      "Yes. Three Agency plans (Starter ₹4,999, Growth ₹9,999, Scale ₹19,999/month). Your logo on tests and offers. Multi-client dashboard. Custom subdomain on Scale.",
    fullAnswer: [
      "Yes. Zorvis AI has specific agency plans designed for recruitment agencies that want to offer AI-powered hiring intelligence to their employer clients under the agency's own brand.",
      "Agency plans include: agency logo on all test links and offer letters sent to candidates (not Zorvis AI branding), a consolidated multi-client dashboard for managing all employer clients in one view, separate Kanban pipelines per client, and (on Agency Scale) a custom subdomain (e.g. screen.youragency.com) and API access for workflow automation.",
      "Agency pricing: Agency Starter ₹4,999/month (up to 5 employer clients), Agency Growth ₹9,999/month (up to 20 clients), Agency Scale ₹19,999/month (unlimited clients). The agency pays Zorvis AI; employer clients pay the agency whatever the agency charges — Zorvis AI does not have a direct relationship with the agency's clients unless the agency wants to offer self-service onboarding.",
    ],
  },

  // ─── PRICING ───
  {
    id: "free-tier-catch",
    category: "pricing",
    question: "What does 'Free Tier' actually mean — what's the catch?",
    shortAnswer:
      "No catch. Permanently free, unlimited CVs ranked, AI summaries visible. Contact details blurred and pipeline locked. Pay only when you want to contact a candidate.",
    fullAnswer: [
      "There is no catch, and it is worth explaining exactly why.",
      "The free tier is permanently available with no time limit. You can upload unlimited CVs to any number of job roles and see them ranked with AI score bands and 2-line summaries. You can see how your top candidate compares against others in your industry on Zorvis AI. You can see the candidate's name. You cannot see their contact details (phone and email are blurred). You cannot take pipeline actions (you cannot send a test, move a candidate, generate an offer, or download data).",
      "Why do we offer this permanently for free? Because the intelligence preview on your own real CVs is the most honest possible sales demonstration. No demo data, no cherry-picked examples. You see Zorvis AI's ranking on your actual applicants for your actual roles. When you identify a candidate you want to contact — and you will — you pay to contact them. That is the conversion trigger.",
      "The service is free because the data compounds. Every company that ranks CVs on Zorvis AI — even without paying — contributes to the industry percentile benchmark that makes the ranking more meaningful for every other user. You get a permanently useful tool. We get better benchmark data. When you convert to paid, you get the full pipeline. There is no hidden cost, no auto-upgrade, and no data sale.",
    ],
  },
];

const CATEGORIES: { id: FaqCategory; label: string; icon: typeof Shield }[] = [
  { id: "all",        label: "All questions",  icon: FileText },
  { id: "data",       label: "Data & Security", icon: Lock },
  { id: "scoring",    label: "Scoring & AI",    icon: Brain },
  { id: "compliance", label: "Compliance",      icon: Shield },
  { id: "product",    label: "Product",         icon: Users },
  { id: "pricing",    label: "Pricing",         icon: Globe },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = FAQS;
    if (activeCategory !== "all") {
      result = result.filter((f) => f.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.shortAnswer.toLowerCase().includes(q) ||
          f.fullAnswer.some((p) => p.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ fontFamily: "'DM Sans',system-ui,sans-serif", background: "#FFFFFF", color: "#0D1117", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section style={{
        padding: "120px 32px 60px",
        background: "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)",
        textAlign: "center",
      }}>
        <Tag>FREQUENTLY ASKED QUESTIONS</Tag>
        <h1 style={{
          fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 800,
          letterSpacing: "-0.03em", lineHeight: 1.08, margin: "0 0 18px",
          color: "#0D1117",
        }}>
          The questions everyone asks.<br/>
          <span style={{ color: "#4F46E5" }}>Honest answers.</span>
        </h1>
        <p style={{
          fontSize: 16, color: "#6B7280", lineHeight: 1.6,
          maxWidth: 580, margin: "0 auto",
        }}>
          Real questions from real customers and prospects. No marketing fluff. If you don't see your question answered, email us — we'll add it.
        </p>

        {/* Search */}
        <div style={{ maxWidth: 480, margin: "32px auto 0", position: "relative" }}>
          <Search style={{
            position: "absolute", left: 16, top: "50%",
            transform: "translateY(-50%)", color: "#9CA3AF",
            width: 18, height: 18,
          }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, e.g. 'data', 'WhatsApp', 'pricing'…"
            style={{
              width: "100%", padding: "14px 16px 14px 46px",
              fontSize: 14, fontFamily: "'DM Sans',sans-serif",
              border: "1px solid #E2E6F0", borderRadius: 10,
              background: "#FFFFFF", color: "#0D1117",
              outline: "none", transition: "border-color 0.15s, box-shadow 0.15s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#4F46E5";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(79,70,229,0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#E2E6F0";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ padding: "0 32px 32px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: 8, padding: "8px 0",
          }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === "all" ? FAQS.length : FAQS.filter((f) => f.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 16px", borderRadius: 8,
                    border: `1px solid ${isActive ? "#4F46E5" : "#E2E6F0"}`,
                    background: isActive ? "#4F46E5" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "#374151",
                    fontSize: 13, fontWeight: 600,
                    fontFamily: "'DM Sans',sans-serif",
                    cursor: "pointer", transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#F7F8FC";
                      e.currentTarget.style.borderColor = "#CBD5E1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.borderColor = "#E2E6F0";
                    }
                  }}
                >
                  <cat.icon style={{ width: 14, height: 14 }} />
                  <span>{cat.label}</span>
                  <span style={{
                    background: isActive ? "rgba(255,255,255,0.2)" : "#F1F2F8",
                    color: isActive ? "#FFFFFF" : "#6B7280",
                    fontSize: 11, fontWeight: 700,
                    padding: "1px 8px", borderRadius: 100,
                  }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUESTIONS LIST */}
      <section style={{ padding: "20px 32px 80px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "60px 20px",
              border: "1px dashed #E2E6F0", borderRadius: 12,
              background: "#F7F8FC",
            }}>
              <p style={{ fontSize: 16, color: "#6B7280", marginBottom: 12 }}>
                No questions match your search.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                style={{
                  fontSize: 13, fontWeight: 600, color: "#4F46E5",
                  background: "transparent", border: "none", cursor: "pointer",
                }}
              >
                Clear search and filters →
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    style={{
                      border: `1px solid ${isOpen ? "#4F46E5" : "#E2E6F0"}`,
                      borderRadius: 12,
                      background: "#FFFFFF",
                      overflow: "hidden",
                      transition: "border-color 0.15s, box-shadow 0.15s",
                      boxShadow: isOpen ? "0 4px 16px rgba(79,70,229,0.08)" : "none",
                    }}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      style={{
                        width: "100%", padding: "20px 22px",
                        display: "flex", alignItems: "flex-start",
                        justifyContent: "space-between", gap: 16,
                        background: "transparent", border: "none",
                        cursor: "pointer", textAlign: "left",
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{
                          fontSize: 16, fontWeight: 600, color: "#0D1117",
                          margin: 0, lineHeight: 1.4,
                        }}>
                          {faq.question}
                        </h3>
                        {!isOpen && (
                          <p style={{
                            fontSize: 14, color: "#6B7280",
                            margin: "8px 0 0", lineHeight: 1.55,
                          }}>
                            {faq.shortAnswer}
                          </p>
                        )}
                      </div>
                      <ChevronDown
                        style={{
                          width: 20, height: 20, flexShrink: 0,
                          color: isOpen ? "#4F46E5" : "#9CA3AF",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s, color 0.15s",
                          marginTop: 2,
                        }}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{
                            padding: "0 22px 24px",
                            borderTop: "1px solid #F1F2F8",
                            paddingTop: 18, marginTop: 4,
                          }}>
                            {faq.fullAnswer.map((para, i) => (
                              <p
                                key={i}
                                style={{
                                  fontSize: 14, color: "#374151",
                                  lineHeight: 1.7,
                                  margin: i === 0 ? "0 0 12px" : "0 0 12px",
                                }}
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section style={{
        padding: "60px 32px 80px",
        background: "linear-gradient(180deg,#FFFFFF 0%,#F7F8FC 100%)",
      }}>
        <div style={{
          maxWidth: 720, margin: "0 auto", textAlign: "center",
          padding: "44px 32px", background: "#0D1117",
          borderRadius: 16, color: "#FFFFFF",
        }}>
          <h2 style={{
            fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700,
            margin: "0 0 12px", letterSpacing: "-0.02em",
          }}>
            Still have questions?
          </h2>
          <p style={{
            fontSize: 15, color: "#9CA3AF", lineHeight: 1.6,
            margin: "0 0 28px", maxWidth: 480, marginInline: "auto",
          }}>
            Founders read every email personally. Reply within 24 hours, even on weekends.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <a
              href="mailto:founder@zorvis.ai?subject=Question%20about%20Zorvis"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px", background: "#FFFFFF", color: "#0D1117",
                fontSize: 14, fontWeight: 600, borderRadius: 8,
                textDecoration: "none", transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F2F8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
            >
              Email founder@zorvis.ai
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>
            <Link
              href="/waitlist"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 22px", background: "transparent",
                color: "#FFFFFF", fontSize: 14, fontWeight: 600,
                borderRadius: 8, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.25)",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
            >
              Get early access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
