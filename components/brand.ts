// ─────────────────────────────────────────────────────────────────────────────
// ZORVIS AI — Brand constants
// Single source of truth. Every page imports from here.
// Messaging locked: omnichannel-native, platform-led, SME-priced.
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name:      "Zorvis",
  tagline:   "People Intelligence Platform",
  sub:       "India & UAE",
  pitch:     "The AI layer behind every people decision.",
  meaning:   "Zor is force in Hindi. Vis is vision in Latin. Zorvis is the intelligence engine that sees what your next great hire looks like — before you do.",
  // NEVER say: WhatsApp-native, WhatsApp-first, WhatsApp-powered
  // ALWAYS say: preferred channel, omnichannel, candidate's choice
  channel:   "Every candidate and employee on their preferred channel — email, WhatsApp, SMS, or web portal.",
  free:      "Free tier is permanent. No trial. No credit card.",
  cta:       "Start free — no card required",
  ctaSub:    "Get early access",
};

export const COLORS = {
  bg:       "#0C0E1A",
  surface:  "#13152A",
  surface2: "#1A1D35",
  border:   "rgba(255,255,255,0.07)",
  indigo:   "#4F46E5",
  violet:   "#818CF8",
  lavender: "#C7D2FE",
  amber:    "#F59E0B",
  green:    "#10B981",
  red:      "#EF4444",
  text:     "#F9FAFB",
  muted:    "#9CA3AF",
  dim:      "#6B7280",
};

export const NAV = [
  { label: "Product",    href: "/product" },
  { label: "Use Cases",  href: "/use-cases" },
  { label: "Solutions",  href: "/solutions" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Customers",  href: "/customers" },
  { label: "About",      href: "/about" },
];

// ─── Channels — shown consistently across all pages ──────────────────────────
export const CHANNELS = [
  { icon: "✉️", label: "Email",      note: "System default" },
  { icon: "💬", label: "WhatsApp",   note: "Where preferred" },
  { icon: "📱", label: "SMS",        note: "Fallback" },
  { icon: "🔗", label: "Slack",      note: "For employees" },
  { icon: "🌐", label: "Web portal", note: "Always available" },
];

// ─── Three modules — consistent across every page ────────────────────────────
export const MODULES = [
  {
    num: "01", name: "Hire", slug: "hire",
    tagline: "AI-powered pipeline",
    headline: "From first CV to signed offer. One connected system.",
    desc: "Post a job, receive 400 applications, get a ranked shortlist in 3 minutes. Assessments delivered on each candidate's preferred channel. Every stage automated. Digital offers with e-signature.",
    status: "Live · India", statusColor: "#10B981",
    accentColor: "#4F46E5",
    features: [
      "AI ranks 400 CVs in 3 minutes",
      "Assessments on any channel — email, WhatsApp, SMS, or portal",
      "ZIE score engine — fit, not just keywords",
      "Digital offers + legally valid e-signature",
      "Full Kanban pipeline with automated actions",
      "UAE: pre-arrival screening before visa costs",
    ],
  },
  {
    num: "02", name: "Manage", slug: "manage",
    tagline: "Daily people operations",
    headline: "HR answers exceptions. Not repetitive questions.",
    desc: "Employees self-serve leave balances, payslips, goals, and queries on their preferred channel — WhatsApp, Slack, email, or web. HR only handles what needs human judgment.",
    status: "Phase 2", statusColor: "#818CF8",
    accentColor: "#818CF8",
    features: [
      "Multi-channel HR helpdesk — employee's choice of channel",
      "Leave, payslips, and goals without a portal login",
      "OKR check-ins and performance signals",
      "UAE: WPS SIF auto-generation, Emirates ID OCR",
      "Bilingual Arabic / English for GCC teams",
      "Compliance calendar — visa expiry, contract renewals",
    ],
  },
  {
    num: "03", name: "Grow", slug: "grow",
    tagline: "People intelligence",
    headline: "Every hire makes the next one smarter.",
    desc: "Hire-to-retire data compounds into a flywheel. 90-day hire quality scores feed back into future ranking. Team health signals surface before attrition happens — never individual surveillance, always team-level.",
    status: "Phase 3", statusColor: "#F59E0B",
    accentColor: "#F59E0B",
    features: [
      "Hire quality predictor — predicts 90-day rating before offer",
      "Monthly workforce intelligence reports",
      "Team health scores — aggregated, never individual",
      "Source ROI tracking — which job board produces best hires",
      "Data flywheel — 500 outcomes → measurably smarter scoring",
      "No individual attrition risk scores — ever",
    ],
  },
];

// ─── 8 use cases ─────────────────────────────────────────────────────────────
export const USE_CASES = [
  {
    id: "bpo", icon: "🎯", title: "BPO Hiring", sub: "India",
    problem: "400 CVs land every Monday. 6 hours of reading before a single shortlist. Tests on a separate tool. Offers on email. Zero pipeline visibility.",
    solution: "AI ranks 400 CVs in 3 minutes with score bands and summaries. Assessments delivered on each candidate's preferred channel. Full Kanban pipeline automates every next action.",
    metrics: ["3 min per 400 CVs", "60% less screening time", "Zero spreadsheets"],
    steps: ["Post on Naukri/LinkedIn", "CVs auto-ranked by ZIE", "Assessment on preferred channel", "Top candidates to interview", "Digital offer signed"],
    color: "#4F46E5",
  },
  {
    id: "staffing", icon: "🏢", title: "Staffing Agency", sub: "White-label",
    problem: "2,000 CVs/month screened manually. Placement quality inconsistent. Clients complaining. No data to prove your value.",
    solution: "White-label Zorvis under your brand. Score every candidate before placement. Show clients quality data. Charge premium for verified placements.",
    metrics: ["Your brand, our AI", "Multi-client dashboard", "Score every placement"],
    steps: ["Agency white-labels Zorvis", "Every candidate pre-scored", "Share score report with client", "Client hires with confidence", "90-day rating feeds flywheel"],
    color: "#818CF8",
  },
  {
    id: "uae-blue-collar", icon: "🇦🇪", title: "UAE Blue Collar", sub: "Pre-arrival screening",
    problem: "Workers are still in India when you need to screen them — before paying for visas. Documents arrive as WhatsApp photos. WPS SIF file done manually in Excel every month.",
    solution: "Screen workers remotely on their preferred channel before visa costs. Emirates ID OCR extracts data automatically. WPS SIF generated in one click.",
    metrics: ["Pre-arrival screening", "Emirates ID OCR", "WPS auto-generated"],
    steps: ["Screen candidate in India via preferred channel", "Score returned in minutes", "Visa applied for top candidates", "Emirates ID OCR on arrival", "WPS SIF auto-generated monthly"],
    color: "#F59E0B",
  },
  {
    id: "hospitality", icon: "🏨", title: "Hospitality & F&B", sub: "UAE & India",
    problem: "200 applications for 20 housekeeping roles. No structured screening. High turnover — and nobody tracks why.",
    solution: "Reliability and situational judgment screening replaces blunt aptitude tests. Assessments delivered via the candidate's preferred channel. Bilingual for UAE teams.",
    metrics: ["Reliability scoring", "Multichannel assessments", "Bilingual Arabic/English"],
    steps: ["Post in English + Arabic", "Assessment on candidate's channel", "Reliability + SJT scored", "Top 10 shortlisted", "Bilingual offer sent"],
    color: "#10B981",
  },
  {
    id: "manufacturing", icon: "🏭", title: "Manufacturing & Logistics", sub: "India",
    problem: "Shift-fit matters more than a cognitive score. You need to know if someone shows up, reads a safety label, and makes good decisions under pressure.",
    solution: "Separate blue-collar screening track tests functional literacy, document readiness, and situational judgment — not abstract reasoning. Same scoring engine, right inputs.",
    metrics: ["Shift-fit scoring", "Document readiness", "Reliability signals"],
    steps: ["Blue-collar track selected", "Functional literacy tested", "Document readiness checked", "Shift-fit score returned", "Offer on preferred channel"],
    color: "#F59E0B",
  },
  {
    id: "hr-ops", icon: "📱", title: "HR Daily Operations", sub: "Module 02",
    problem: "HR spends 40% of their time answering questions they've answered a hundred times. Leave balance. Payslip. Holiday list. All on email.",
    solution: "Employees self-serve on their preferred channel — WhatsApp, Slack, email, or web portal. The helpdesk answers routine questions 24/7. HR handles what needs human judgment.",
    metrics: ["24/7 self-service", "Any channel, employee's choice", "HR handles exceptions only"],
    steps: ["Employee queries on preferred channel", "Leave balance answered instantly", "Payslip link sent on request", "Goals checked via any channel", "HR only handles exceptions"],
    color: "#818CF8",
  },
  {
    id: "founder", icon: "🚀", title: "SME Founder Hiring", sub: "First 50 employees",
    problem: "You are the HR team. You are reading CVs at 11pm. Every hire is a gut call. You can't afford to get it wrong — and you can't afford an HR manager yet.",
    solution: "Zorvis gives a solo founder an enterprise-grade hiring pipeline. Free to start. First hire in days. The system does the heavy lifting — you make the final call.",
    metrics: ["No HR team needed", "Free forever tier", "First hire in days"],
    steps: ["Post your first job", "AI ranks all applications", "Assessments sent automatically", "Top 3 shortlisted by morning", "Offer signed digitally"],
    color: "#4F46E5",
  },
  {
    id: "gcc-compliance", icon: "⚖️", title: "GCC Compliance", sub: "UAE · KSA · GCC",
    problem: "Visa expiry tracked on paper. WPS fines for late filing. Labour contract renewals missed. Emirates ID collected via WhatsApp photo gallery — and stored nowhere structured.",
    solution: "Compliance calendar with automated alerts. WPS SIF auto-generated on payroll run. Emirates ID OCR. Bilingual offer letters. MOHRE-ready documentation.",
    metrics: ["Visa expiry alerts", "WPS SIF in one click", "MOHRE-ready docs"],
    steps: ["Compliance calendar auto-populated", "Visa expiry alert 30 days before", "WPS SIF on payroll run", "Emirates ID data auto-extracted", "Labour contract renewals tracked"],
    color: "#10B981",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM = [
  {
    name: "Sagar Raj", role: "Founder & CEO",
    bio: "Former Senior Product Manager at Amazon, Seattle (3.5 years). Co-founded Inovas Tech. MBA + MS Information Systems, Iowa State University. Built products used by millions. Now building the platform he wished existed when hiring the Wild Oak team.",
    linkedin: "https://www.linkedin.com/in/sagarraj/",
    initials: "SR", color: "#4F46E5",
  },
  {
    name: "Ambar Raj", role: "Product Advisor",
    bio: "Led Wild Oak to $1M+ ARR in 18 months. Senior PM at Pipedrive (100k+ customers) and Smartly.io (Helsinki). MBA Carlson School, Minnesota. Owned product strategy, pricing, and a 12-person cross-functional team across India, Middle East, and the US.",
    linkedin: "https://www.linkedin.com/in/ambarraj/",
    initials: "AR", color: "#818CF8",
  },
  {
    name: "Mehak Jain", role: "Technology Advisor",
    bio: "Senior Technical Program Manager at Wild Oak. 7 years at Collins Aerospace building safety-critical aerospace software across Seattle and globally. MS Computer Engineering, Iowa State. SAFe Certified Scrum Master. Deep engineering delivery background.",
    linkedin: "https://www.linkedin.com/in/mehakjain10/",
    initials: "MJ", color: "#10B981",
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const PRICING = {
  india: [
    {
      name: "Starter", price: "Free", sub: "forever", highlight: false, color: "#6B7280",
      desc: "For founders making their first hires.",
      features: ["3 active jobs", "50 CVs ranked per job", "Score bands shown, contacts blurred", "10 assessments/month (any channel)", "Basic Kanban pipeline", "Email support"],
      cta: "Start free", href: "/waitlist",
    },
    {
      name: "Growth", price: "₹9,999", sub: "/month", highlight: true, color: "#4F46E5",
      badge: "Most popular",
      desc: "For HR managers hiring at scale.",
      features: ["Unlimited jobs + CV ranking", "Full contact unlock", "200 assessments/month (any channel)", "Full Kanban + automated actions", "Digital offers + e-signature", "25 employee HR OS", "Priority support"],
      cta: "Get early access", href: "/waitlist",
    },
    {
      name: "Scale", price: "₹19,999", sub: "/month", highlight: false, color: "#818CF8",
      desc: "For growing companies and agencies.",
      features: ["Everything in Growth", "Unlimited assessments", "100 employee HR OS", "Agency white-label dashboard", "UAE compliance module", "API access", "Dedicated onboarding + SLA"],
      cta: "Talk to us", href: "mailto:founder@zorvis.ai",
    },
  ],
  uae: [
    {
      name: "Starter", price: "Free", sub: "forever", highlight: false, color: "#6B7280",
      desc: "For small businesses hiring locally.",
      features: ["3 active jobs", "50 CVs ranked per job", "Score bands shown, contacts blurred", "10 assessments/month (any channel)", "Basic Kanban pipeline", "Email support"],
      cta: "Start free", href: "/waitlist",
    },
    {
      name: "Growth", price: "AED 549", sub: "/month", highlight: true, color: "#4F46E5",
      badge: "Most popular",
      desc: "For UAE HR managers.",
      features: ["Unlimited jobs + CV ranking", "Full contact unlock", "200 assessments/month (any channel)", "Emirates ID OCR", "Bilingual Arabic/English offers", "WPS SIF auto-generation", "25 employee HR OS"],
      cta: "Get early access", href: "/waitlist",
    },
    {
      name: "Scale", price: "AED 1,099", sub: "/month", highlight: false, color: "#818CF8",
      desc: "For large hospitality and construction teams.",
      features: ["Everything in Growth", "Unlimited assessments", "100 employee HR OS", "Visa expiry calendar + alerts", "MOHRE-ready documentation", "API access", "Dedicated onboarding + SLA"],
      cta: "Talk to us", href: "mailto:founder@zorvis.ai",
    },
  ],
};
