// ─────────────────────────────────────────────────────────────────────────────
// ZORVIS AI — Brand constants · Light Enterprise Theme
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND = {
  name:    "Zorvis",
  tagline: "People Intelligence Platform",
  pitch:   "The AI layer behind every people decision.",
  meaning: "Zor is force in Hindi. Vis is vision in Latin. Zorvis is the intelligence engine that sees what your next great hire looks like — before you do.",
  channel: "Every candidate and employee on their preferred channel — email, WhatsApp, SMS, Slack, or web portal.",
  free:    "Free tier is permanent. No trial. No credit card.",
};

export const COLORS = {
  bg:       "#FFFFFF",
  bgAlt:    "#F7F8FC",
  bgDark:   "#0D1117",
  surface:  "#FFFFFF",
  surfaceB: "#F0F2FA",
  border:   "#E2E6F0",
  borderB:  "#C8CEDF",
  text:     "#0D1117",
  textB:    "#374151",
  muted:    "#6B7280",
  dim:      "#9CA3AF",
  indigo:   "#4F46E5",
  indigoB:  "#4338CA",
  violet:   "#7C3AED",
  lavender: "#EEF2FF",
  green:    "#059669",
  amber:    "#D97706",
  red:      "#DC2626",
};

// ─────────────────────────────────────────────────────────────────────────────
// NAV — flat list, used by mobile menu only.
// Desktop nav uses NAV_GROUPS (with dropdowns) defined below.
// ─────────────────────────────────────────────────────────────────────────────
export const NAV = [
  { label: "Platform",   href: "/product" },
  { label: "Solutions",  href: "/solutions" },
  { label: "Resources",  href: "/resources" },
  { label: "Pricing",    href: "/pricing" },
];

// Desktop dropdown structure
export const NAV_GROUPS = [
  {
    label: "Platform",
    href: "/product",
    children: [
      { label: "Overview",      href: "/product",        desc: "The full hire-to-retain platform" },
      { label: "How it works",  href: "/how-it-works",   desc: "End-to-end flow in 7 stages" },
      { label: "Use cases",     href: "/use-cases",      desc: "BPO, blue-collar, agencies, founders" },
      { label: "AI Interview",  href: "/waitlist?interest=ai-interview", desc: "Phone interviews in 8 languages" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "India SME",          href: "/solutions?market=india",  desc: "50–500 employees" },
      { label: "UAE & GCC",          href: "/solutions?market=uae",    desc: "Pre-arrival to WPS" },
      { label: "Staffing Agencies",  href: "/solutions?market=agency", desc: "White-label platform" },
      { label: "—" },
      { label: "BPO & Contact Centres", href: "/solutions/volume-hiring?industry=bpo" },
      { label: "Manufacturing",         href: "/solutions/volume-hiring?industry=manufacturing" },
      { label: "Retail & QSR",          href: "/solutions/volume-hiring?industry=retail" },
      { label: "Logistics & E-commerce", href: "/solutions/volume-hiring?industry=logistics" },
      { label: "Hospitality & F&B",     href: "/solutions/volume-hiring?industry=hospitality" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog",            href: "/resources/blog",      desc: "HR insights, no fluff" },
      { label: "HR Templates",    href: "/resources/templates", desc: "Free downloads" },
      { label: "Guides",          href: "/resources/guides",    desc: "Deep-dive playbooks" },
      { label: "FAQ",             href: "/faq",                 desc: "Pricing, product, compliance" },
      { label: "ROI Calculator",  href: "/roi-calculator",      desc: "Estimate your savings" },
      { label: "Customers",       href: "/customers",           desc: "Founding cohort" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    children: null, // No dropdown — direct link
  },
];

export const CHANNELS = [
  { icon: "✉️", label: "Email",      note: "System default" },
  { icon: "💬", label: "WhatsApp",   note: "Where preferred" },
  { icon: "📱", label: "SMS",        note: "Fallback" },
  { icon: "🔗", label: "Slack",      note: "For employees" },
  { icon: "🌐", label: "Web portal", note: "Always available" },
];

// ─────────────────────────────────────────────────────────────────────────────
// MODULES — kept for backward compatibility with /product page.
// The 6-module suite lives in ZorvisModulesStrip.tsx and is the source of truth.
// ─────────────────────────────────────────────────────────────────────────────
export const MODULES = [
  {
    num: "01", name: "Hire", slug: "hire",
    tagline: "AI-powered pipeline",
    headline: "From first CV to signed offer. One connected system.",
    desc: "Post a job, receive 400 applications, get a ranked shortlist in 3 minutes. Assessments delivered on each candidate's preferred channel. Every stage automated. Digital offers with e-signature.",
    status: "Live · India", statusColor: "#059669",
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
    desc: "Employees self-serve leave balances, payslips, goals, and queries on their preferred channel. HR only handles what needs human judgment.",
    status: "Phase 2", statusColor: "#D97706",
    accentColor: "#7C3AED",
    features: [
      "Multi-channel HR helpdesk — employee's choice",
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
    desc: "Hire-to-retire data compounds into a flywheel. 90-day hire quality scores feed back into future ranking. Team health signals surface before attrition happens.",
    status: "Phase 3", statusColor: "#D97706",
    accentColor: "#059669",
    features: [
      "Hire quality predictor before offer is made",
      "Monthly workforce intelligence reports",
      "Team health scores — aggregated, never individual",
      "Source ROI tracking — which board produces best hires",
      "Data flywheel — gets smarter with every hire",
      "No individual attrition risk scores — ever",
    ],
  },
];

export const USE_CASES = [
  {
    id: "bpo", icon: "🎯", title: "BPO Hiring", sub: "India",
    problem: "400 CVs land every Monday. 6 hours of reading before a single shortlist. Tests on a separate tool. Offers on email. Zero pipeline visibility.",
    solution: "AI ranks 400 CVs in 3 minutes with score bands. Assessments on each candidate's preferred channel. Full Kanban pipeline automates every next action.",
    metrics: ["3 min per 400 CVs", "60% less screening time", "Zero spreadsheets"],
    steps: ["Post on Naukri/LinkedIn", "CVs auto-ranked by ZIE", "Assessment on preferred channel", "Top candidates to interview", "Digital offer signed"],
    color: "#4F46E5",
  },
  {
    id: "staffing", icon: "🏢", title: "Staffing Agency", sub: "White-label",
    problem: "2,000 CVs/month screened manually. Placement quality inconsistent. No data to prove your value to clients.",
    solution: "White-label Zorvis under your brand. Score every candidate before placement. Show clients quality scores. Charge premium for verified placements.",
    metrics: ["Your brand, our AI", "Multi-client dashboard", "Score every placement"],
    steps: ["Agency white-labels Zorvis", "Every candidate pre-scored", "Share report with client", "Client hires with confidence", "90-day rating feeds flywheel"],
    color: "#7C3AED",
  },
  {
    id: "uae-blue-collar", icon: "🇦🇪", title: "UAE Blue Collar", sub: "Pre-arrival screening",
    problem: "Workers are still in India when you need to screen them — before paying for visas. Documents arrive as phone photos. WPS done manually in Excel.",
    solution: "Screen workers remotely on preferred channel before visa costs. Emirates ID OCR auto-extracts data. WPS SIF generated in one click.",
    metrics: ["Pre-arrival screening", "Emirates ID OCR", "WPS auto-generated"],
    steps: ["Screen in India via preferred channel", "Score returned in minutes", "Visa for top candidates", "Emirates ID OCR on arrival", "WPS SIF auto-generated"],
    color: "#D97706",
  },
  {
    id: "hospitality", icon: "🏨", title: "Hospitality & F&B", sub: "UAE & India",
    problem: "200 applications for 20 housekeeping roles. No structured screening. High turnover with no data trail.",
    solution: "Reliability and situational judgment screening. Assessments via candidate's preferred channel. Bilingual for UAE teams.",
    metrics: ["Reliability scoring", "Multichannel delivery", "Bilingual Arabic/English"],
    steps: ["Post in English + Arabic", "Assessment on candidate's channel", "Reliability + SJT scored", "Top 10 shortlisted", "Bilingual offer sent"],
    color: "#059669",
  },
  {
    id: "manufacturing", icon: "🏭", title: "Manufacturing & Logistics", sub: "India",
    problem: "Shift-fit matters more than a cognitive score. You need reliability, attendance patterns, and physical readiness signals.",
    solution: "Blue-collar screening track tests functional literacy, document readiness, and situational judgment. Same scoring engine, right inputs.",
    metrics: ["Shift-fit scoring", "Document readiness", "Reliability signals"],
    steps: ["Blue-collar track selected", "Functional literacy tested", "Document readiness checked", "Shift-fit score returned", "Offer on preferred channel"],
    color: "#D97706",
  },
  {
    id: "hr-ops", icon: "📱", title: "HR Daily Operations", sub: "Module 02",
    problem: "HR spends 40% of time answering questions they've answered a hundred times. Leave balance. Payslip. Holiday list.",
    solution: "Employees self-serve on the channel they prefer — WhatsApp, Slack, email, or portal. Helpdesk answers routine questions 24/7. HR handles exceptions only.",
    metrics: ["24/7 self-service", "Employee's choice of channel", "HR handles exceptions only"],
    steps: ["Employee queries on preferred channel", "Leave balance answered instantly", "Payslip link sent on request", "Goals checked via any channel", "HR handles exceptions only"],
    color: "#7C3AED",
  },
  {
    id: "founder", icon: "🚀", title: "SME Founder Hiring", sub: "First 50 employees",
    problem: "You are the HR team. Reading CVs at 11pm. Every hire is a gut call. Can't afford to get it wrong.",
    solution: "Enterprise-grade hiring pipeline for a solo founder. Free to start. First hire in days. System does the heavy lifting.",
    metrics: ["No HR team needed", "Free forever tier", "First hire in days"],
    steps: ["Post your first job", "AI ranks all applications", "Assessments sent automatically", "Top 3 shortlisted by morning", "Offer signed digitally"],
    color: "#4F46E5",
  },
  {
    id: "gcc-compliance", icon: "⚖️", title: "GCC Compliance", sub: "UAE · KSA · GCC",
    problem: "Visa expiry tracked on paper. WPS fines for late filing. Emirates ID collected via channel photos stored nowhere structured.",
    solution: "Compliance calendar with automated alerts. WPS SIF auto-generated. Emirates ID OCR. Bilingual offers. MOHRE-ready docs.",
    metrics: ["Visa expiry alerts", "WPS SIF in one click", "MOHRE-ready docs"],
    steps: ["Compliance calendar auto-populated", "Visa alert 30 days before expiry", "WPS SIF on payroll run", "Emirates ID auto-extracted", "Labour contract renewals tracked"],
    color: "#059669",
  },
];

export const TEAM = [
  {
    name: "Sagar Raj", role: "Founder & CEO",
    bio: "Former Senior Product Manager at Amazon, Seattle (3.5 years). MBA + MS Information Systems, Iowa State University. Built products used by millions. Now building the platform he wished existed when hiring his first team.",
    linkedin: "https://www.linkedin.com/in/sagarraj/",
    initials: "SR", color: "#4F46E5",
  },
  {
    name: "Ambar Raj", role: "Product Advisor",
    bio: "Led a D2C brand to $1M+ ARR in 18 months. Senior PM at Pipedrive (100k+ customers) and Smartly.io (Helsinki). MBA Carlson School, Minnesota. Deep product, growth, and GTM expertise.",
    linkedin: "https://www.linkedin.com/in/ambarraj/",
    initials: "AR", color: "#7C3AED",
  },
  {
    name: "Mehak Jain", role: "Technology Advisor",
    bio: "7 years at Collins Aerospace building safety-critical aerospace software. MS Computer Engineering, Iowa State. SAFe Certified Scrum Master. Senior Technical Program Manager with deep engineering delivery background.",
    linkedin: "https://www.linkedin.com/in/mehakjain10/",
    initials: "MJ", color: "#059669",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRICING — 4-tier structure (Free / Starter / Growth / Scale)
// ─────────────────────────────────────────────────────────────────────────────
export const PRICING = {
  india: [
    {
      name: "Free", price: "₹0", sub: "forever", highlight: false, color: "#6B7280",
      desc: "For founders evaluating the AI ranking engine.",
      features: [
        "1 active job",
        "Unlimited CVs uploaded",
        "AI ranking with score bands",
        "Contact details blurred",
        "5 assessments/month",
        "0 AI phone interviews",
        "Email support",
      ],
      cta: "Start free", href: "/waitlist",
    },
    {
      name: "Starter", price: "₹4,999", sub: "/month", highlight: false, color: "#4F46E5",
      desc: "For founders making their first hires.",
      features: [
        "5 active jobs",
        "Unlimited CV ranking",
        "Full contact unlock",
        "50 assessments/month (any channel)",
        "50 AI phone interviews/month (Beta)",
        "Basic Kanban pipeline",
        "Digital offers + e-signature",
        "Email support",
      ],
      cta: "Get early access", href: "/waitlist",
    },
    {
      name: "Growth", price: "₹9,999", sub: "/month", highlight: true, color: "#4F46E5",
      badge: "Most popular",
      desc: "For HR managers hiring at scale.",
      features: [
        "Unlimited jobs + CV ranking",
        "Full contact unlock",
        "200 assessments/month (any channel)",
        "200 AI phone interviews/month (Beta)",
        "Full Kanban + automated actions",
        "Digital offers + e-signature",
        "UAE compliance module",
        "25-employee HR OS",
        "Priority support",
      ],
      cta: "Get early access", href: "/waitlist",
    },
    {
      name: "Scale", price: "₹19,999", sub: "/month", highlight: false, color: "#7C3AED",
      desc: "For agencies, multi-location teams, and enterprise.",
      features: [
        "Everything in Growth",
        "Unlimited assessments",
        "1,000 AI phone interviews/month (Beta)",
        "100-employee HR OS",
        "Agency white-label dashboard",
        "API access",
        "Dedicated onboarding + SLA",
      ],
      cta: "Talk to us", href: "mailto:founder@zorvis.ai",
    },
  ],
  uae: [
    {
      name: "Free", price: "AED 0", sub: "forever", highlight: false, color: "#6B7280",
      desc: "For small businesses evaluating the platform.",
      features: [
        "1 active job",
        "Unlimited CVs uploaded",
        "AI ranking with score bands",
        "Contact details blurred",
        "5 assessments/month",
        "0 AI phone interviews",
        "Email support",
      ],
      cta: "Start free", href: "/waitlist",
    },
    {
      name: "Starter", price: "AED 249", sub: "/month", highlight: false, color: "#4F46E5",
      desc: "For small businesses hiring locally.",
      features: [
        "5 active jobs",
        "Unlimited CV ranking",
        "Full contact unlock",
        "50 assessments/month (any channel)",
        "50 AI phone interviews/month (Beta)",
        "Basic Kanban pipeline",
        "Digital offers + e-signature",
        "Email support",
      ],
      cta: "Get early access", href: "/waitlist",
    },
    {
      name: "Growth", price: "AED 549", sub: "/month", highlight: true, color: "#4F46E5",
      badge: "Most popular",
      desc: "For UAE HR managers.",
      features: [
        "Unlimited jobs + CV ranking",
        "Full contact unlock",
        "200 assessments/month (any channel)",
        "200 AI phone interviews/month (Beta)",
        "Emirates ID OCR",
        "Bilingual Arabic/English offers",
        "WPS SIF auto-generation",
        "25-employee HR OS",
      ],
      cta: "Get early access", href: "/waitlist",
    },
    {
      name: "Scale", price: "AED 1,099", sub: "/month", highlight: false, color: "#7C3AED",
      desc: "For large hospitality and construction teams.",
      features: [
        "Everything in Growth",
        "Unlimited assessments",
        "1,000 AI phone interviews/month (Beta)",
        "100-employee HR OS",
        "Visa expiry calendar + alerts",
        "MOHRE-ready documentation",
        "API access",
        "Dedicated onboarding + SLA",
      ],
      cta: "Talk to us", href: "mailto:founder@zorvis.ai",
    },
  ],
};
