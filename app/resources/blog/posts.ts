export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured?: boolean;
};

// ─── 100 blog posts across 8 SEO keyword clusters ────────────────────────────
// Cluster 1: CV screening & shortlisting (India pain point #1)
// Cluster 2: Aptitude testing & assessments
// Cluster 3: HR software comparisons India
// Cluster 4: UAE compliance & WPS
// Cluster 5: BPO hiring specifically
// Cluster 6: SME HR operations
// Cluster 7: AI in hiring
// Cluster 8: Onboarding, attrition, performance

export const ALL_POSTS: Post[] = [

  // ── CLUSTER 1: CV Screening & Shortlisting ────────────────────────────────
  {
    slug: "how-to-shortlist-cvs-faster-india",
    title: "How to Shortlist CVs Faster: A Practical Guide for Indian HR Managers",
    description: "Step-by-step guide to cutting CV screening time from 6 hours to under 30 minutes — without compromising shortlist quality.",
    category: "CV Screening", tags: ["cv screening", "shortlisting", "hr india", "recruitment"], date: "2026-04-01", readTime: 7, featured: true,
  },
  {
    slug: "cv-screening-software-india-comparison",
    title: "Best CV Screening Software in India (2026): Compared",
    description: "We compare the top CV screening tools available to Indian SMEs — including AI-powered options, pricing, and what to look for.",
    category: "CV Screening", tags: ["cv screening software", "recruitment software india", "ats india"], date: "2026-04-03", readTime: 9,
  },
  {
    slug: "manual-cv-screening-cost-india",
    title: "The Hidden Cost of Manual CV Screening for Indian BPOs",
    description: "When your HR manager spends 6 hours screening CVs every Monday, the real cost to your business is much higher than it looks.",
    category: "CV Screening", tags: ["bpo hiring", "cv screening cost", "hr productivity india"], date: "2026-04-05", readTime: 5,
  },
  {
    slug: "ai-cv-ranking-how-it-works",
    title: "How AI CV Ranking Actually Works — And Why It's Better Than a Human for the First Pass",
    description: "A plain-language explanation of how AI ranks CVs, what signals it uses, and why it outperforms manual reading for high-volume hiring.",
    category: "CV Screening", tags: ["ai cv ranking", "ai recruitment", "cv shortlisting automation"], date: "2026-04-07", readTime: 6,
  },
  {
    slug: "shortlisting-criteria-bpo-india",
    title: "What to Look For When Shortlisting BPO Candidates in India",
    description: "The 7 signals that predict 90-day success for a BPO agent — and how to assess them without reading 400 CVs.",
    category: "CV Screening", tags: ["bpo recruitment", "shortlisting criteria", "bpo hiring india"], date: "2026-04-09", readTime: 6,
  },
  {
    slug: "naukri-linkedin-cv-overload-solution",
    title: "Getting 500 CVs from Naukri and LinkedIn? Here's How to Handle It",
    description: "Practical strategies for managing CV overload from India's biggest job boards without burning out your HR team.",
    category: "CV Screening", tags: ["naukri recruitment", "linkedin hiring india", "cv overload"], date: "2026-04-11", readTime: 5,
  },
  {
    slug: "resume-screening-checklist-india-hr",
    title: "The 10-Point Resume Screening Checklist Every Indian HR Manager Needs",
    description: "A structured checklist to standardise your CV screening process — so your shortlist is consistent, defensible, and fast.",
    category: "CV Screening", tags: ["resume screening", "hr checklist india", "recruitment process"], date: "2026-04-13", readTime: 4,
  },
  {
    slug: "reduce-time-to-shortlist-strategies",
    title: "7 Strategies to Reduce Time-to-Shortlist by 60%",
    description: "Proven tactics used by fast-hiring BPOs and staffing agencies to cut the time between job posting and shortlist from days to hours.",
    category: "CV Screening", tags: ["time to shortlist", "recruitment efficiency", "hr automation india"], date: "2026-04-15", readTime: 7,
  },

  // ── CLUSTER 2: Aptitude Testing & Assessments ────────────────────────────
  {
    slug: "aptitude-test-bpo-candidates-india",
    title: "Which Aptitude Tests Work Best for BPO Candidates in India?",
    description: "A breakdown of test types — numerical, verbal, logical — and which actually predict 90-day performance for BPO roles.",
    category: "Assessments", tags: ["aptitude test bpo", "pre-employment testing india", "candidate assessment"], date: "2026-04-02", readTime: 7, featured: true,
  },
  {
    slug: "mercer-mettl-alternatives-india",
    title: "Mercer Mettl Alternatives for Indian SMEs: Cheaper, Faster Options",
    description: "Mettl charges ₹500–2,000 per test. We compare alternatives that give you the same assessment quality at a fraction of the cost.",
    category: "Assessments", tags: ["mettl alternative", "aptitude test software india", "pre-employment test india"], date: "2026-04-04", readTime: 8,
  },
  {
    slug: "whatsapp-aptitude-test-india",
    title: "Sending Aptitude Tests via WhatsApp: Why Completion Rates Go Up",
    description: "Why WhatsApp-delivered assessments see 40–80% higher completion rates than traditional proctored platforms — and how to do it.",
    category: "Assessments", tags: ["whatsapp assessment", "recruitment whatsapp india", "mobile testing recruitment"], date: "2026-04-06", readTime: 5,
  },
  {
    slug: "blue-collar-assessment-india",
    title: "How to Assess Blue-Collar Workers in India: A Different Approach",
    description: "Cognitive aptitude tests are the wrong tool for blue-collar hiring. Here's what actually predicts reliability and shift performance.",
    category: "Assessments", tags: ["blue collar hiring india", "blue collar assessment", "labour hiring india"], date: "2026-04-08", readTime: 6,
  },
  {
    slug: "situational-judgement-test-india-hiring",
    title: "Situational Judgement Tests for Indian Hiring: What They Are and When to Use Them",
    description: "SJTs are underused in Indian SME hiring. Here's when they're worth it and what to expect from implementation.",
    category: "Assessments", tags: ["situational judgement test", "sbt india hiring", "candidate assessment tools"], date: "2026-04-10", readTime: 5,
  },
  {
    slug: "pre-employment-testing-roi-india",
    title: "Does Pre-Employment Testing Actually Work? The Data from Indian BPOs",
    description: "Analysis of hiring outcome data showing how aptitude scores correlate with 90-day performance in Indian BPO environments.",
    category: "Assessments", tags: ["pre employment testing roi", "hiring data india", "predictive hiring"], date: "2026-04-12", readTime: 8,
  },
  {
    slug: "online-recruitment-test-candidate-experience",
    title: "Why Candidates Hate Online Recruitment Tests — And How to Fix It",
    description: "Drop-off rates, friction points, and what makes candidates complete assessments vs abandon them. Data from 10,000 test invitations.",
    category: "Assessments", tags: ["candidate experience recruitment", "assessment completion rate", "recruitment drop off"], date: "2026-04-14", readTime: 6,
  },
  {
    slug: "anti-cheat-aptitude-test-india",
    title: "Anti-Cheat in Aptitude Tests: What Actually Works (and What's Theatre)",
    description: "Camera proctoring, shuffle questions, timed sections — which anti-cheat mechanisms matter and which are false confidence.",
    category: "Assessments", tags: ["anti cheat test", "proctored assessment india", "remote testing india"], date: "2026-04-16", readTime: 6,
  },
  {
    slug: "functional-literacy-test-manufacturing-india",
    title: "Testing Functional Literacy for Manufacturing Hiring in India",
    description: "Why standard literacy tests miss the mark for factory and logistics roles — and what to test instead.",
    category: "Assessments", tags: ["manufacturing hiring india", "functional literacy test", "factory recruitment"], date: "2026-04-18", readTime: 5,
  },

  // ── CLUSTER 3: HR Software Comparisons India ─────────────────────────────
  {
    slug: "keka-vs-darwinbox-vs-zorvis",
    title: "Keka vs Darwinbox vs Zorvis AI: Which HR Software for Indian SMEs?",
    description: "A clear, unbiased comparison of the three most common HR platforms for 50–500 employee Indian companies — pricing, features, and fit.",
    category: "HR Software India", tags: ["keka alternative", "darwinbox alternative", "hr software india comparison"], date: "2026-04-17", readTime: 10, featured: true,
  },
  {
    slug: "best-hr-software-bpo-india-2026",
    title: "Best HR Software for BPOs in India (2026)",
    description: "The definitive guide to HR tools for Indian BPOs — covering ATS, assessment platforms, HRMS, and payroll integration.",
    category: "HR Software India", tags: ["hr software bpo india", "bpo hr tool", "ats bpo india"], date: "2026-04-19", readTime: 9,
  },
  {
    slug: "hr-software-50-500-employees-india",
    title: "HR Software for 50–500 Employee Companies in India: A Buyer's Guide",
    description: "What HR tools actually make sense for mid-size Indian companies — and what to avoid buying before you're ready for it.",
    category: "HR Software India", tags: ["hr software india", "hrms small business india", "hr tools sme india"], date: "2026-04-21", readTime: 8,
  },
  {
    slug: "greenhouse-alternative-india",
    title: "Greenhouse Alternatives for India: Why ₹40L/Year Is the Wrong Answer",
    description: "Greenhouse is excellent for enterprise. For an Indian SME, it's massively overpriced and under-localised. Here are the better options.",
    category: "HR Software India", tags: ["greenhouse alternative india", "ats india", "recruitment software india"], date: "2026-04-23", readTime: 7,
  },
  {
    slug: "zoho-recruit-vs-zorvis",
    title: "Zoho Recruit vs Zorvis AI: Which Is Right for Your Indian SME?",
    description: "A feature-by-feature comparison of Zoho Recruit and Zorvis AI for Indian companies doing high-volume hiring.",
    category: "HR Software India", tags: ["zoho recruit alternative", "ats comparison india", "zoho recruit india"], date: "2026-04-25", readTime: 7,
  },
  {
    slug: "free-hr-software-india",
    title: "Free HR Software for Indian Startups: What's Actually Free and What's a Trial",
    description: "A review of every HR tool claiming a free tier in India — what you actually get, what's capped, and what the upsells look like.",
    category: "HR Software India", tags: ["free hr software india", "free ats india", "hr software free tier"], date: "2026-04-27", readTime: 7,
  },
  {
    slug: "staffing-agency-software-india",
    title: "Best Software for Staffing Agencies in India (2026)",
    description: "Tools built for high-volume placement operations — multi-client dashboards, candidate scoring, and white-label options.",
    category: "HR Software India", tags: ["staffing agency software india", "recruitment agency tool", "placement software india"], date: "2026-04-29", readTime: 8,
  },
  {
    slug: "digital-offer-letter-india-guide",
    title: "Digital Offer Letters in India: Legal Validity, Tools, and Best Practices",
    description: "Everything an Indian HR manager needs to know about legally valid e-signatures on offer letters — under the IT Act 2000.",
    category: "HR Software India", tags: ["digital offer letter india", "e-signature india", "offer letter software india"], date: "2026-05-01", readTime: 6,
  },

  // ── CLUSTER 4: UAE Compliance & WPS ──────────────────────────────────────
  {
    slug: "wps-sif-file-generation-uae-guide",
    title: "WPS SIF File Generation in UAE: The Complete Guide for HR Managers",
    description: "Everything you need to know about the Wages Protection System SIF file — format, fields, MOHRE validation, and how to automate it.",
    category: "UAE Compliance", tags: ["wps sif uae", "wages protection system uae", "uae payroll compliance"], date: "2026-04-02", readTime: 9, featured: true,
  },
  {
    slug: "emirates-id-ocr-hr-dubai",
    title: "Emirates ID OCR: How to Automate Document Collection for UAE Employees",
    description: "Stop collecting Emirates ID photos via WhatsApp. Here's how OCR extraction works and why it matters for UAE compliance.",
    category: "UAE Compliance", tags: ["emirates id ocr", "uae hr document collection", "emirates id extraction"], date: "2026-04-04", readTime: 6,
  },
  {
    slug: "uae-visa-expiry-tracking-hr",
    title: "UAE Visa Expiry Tracking: How to Never Pay a Fine Again",
    description: "Manual visa tracking on spreadsheets fails. Here's a systematic approach to visa expiry management for UAE HR teams.",
    category: "UAE Compliance", tags: ["uae visa expiry", "visa tracking uae hr", "uae labour law compliance"], date: "2026-04-06", readTime: 5,
  },
  {
    slug: "mohre-compliance-uae-sme-guide",
    title: "MOHRE Compliance for UAE SMEs: What You Need to Know in 2026",
    description: "A practical guide to Ministry of Human Resources and Emiratisation compliance for SMEs hiring South Asian workers.",
    category: "UAE Compliance", tags: ["mohre compliance uae", "uae labour law", "uae hr compliance"], date: "2026-04-08", readTime: 8,
  },
  {
    slug: "pre-arrival-screening-uae-workers-india",
    title: "How to Screen Workers in India Before Paying for UAE Visas",
    description: "The practice of pre-arrival screening is critical for UAE hospitality and construction hiring. Here's how to do it at scale.",
    category: "UAE Compliance", tags: ["pre arrival screening uae", "uae blue collar hiring", "visa screening india"], date: "2026-04-10", readTime: 7,
  },
  {
    slug: "bilingual-offer-letter-uae-arabic-english",
    title: "Bilingual Offer Letters for UAE Employees: Arabic and English Requirements",
    description: "UAE labour law requires offer letters in both Arabic and English for many workers. Here's what the law says and how to comply.",
    category: "UAE Compliance", tags: ["bilingual offer letter uae", "arabic offer letter uae", "uae employment contract"], date: "2026-04-12", readTime: 5,
  },
  {
    slug: "hr-software-uae-sme-comparison",
    title: "HR Software for UAE SMEs: ZenHR, Bayzat, Zorvis Compared",
    description: "A comparison of the three most common HR platforms for UAE SMEs — with a focus on compliance features and pricing.",
    category: "UAE Compliance", tags: ["hr software uae", "zenhr alternative", "bayzat alternative", "uae hrms"], date: "2026-04-14", readTime: 9,
  },
  {
    slug: "uae-blue-collar-hiring-guide-2026",
    title: "Hiring Blue-Collar Workers in UAE (2026): The Complete Process",
    description: "End-to-end guide to hiring South Asian blue-collar workers for UAE hospitality, construction, and facilities — from screening to WPS.",
    category: "UAE Compliance", tags: ["uae blue collar hiring", "hiring workers uae", "south asian workforce uae"], date: "2026-04-16", readTime: 10,
  },
  {
    slug: "emiratisation-quota-compliance-guide",
    title: "Emiratisation Quotas: What UAE SMEs Need to Know",
    description: "The Nafis programme and Emiratisation requirements explained for UAE SMEs — who is affected, what the fines are, and how to track compliance.",
    category: "UAE Compliance", tags: ["emiratisation quota", "nafis programme uae", "uae nationalisation hr"], date: "2026-04-18", readTime: 7,
  },
  {
    slug: "wps-fines-uae-avoid-guide",
    title: "How to Avoid WPS Fines in UAE: A Practical Checklist",
    description: "Late WPS filing costs UAE businesses AED 1,000 per day. Here's what causes failures and how to prevent them.",
    category: "UAE Compliance", tags: ["wps fines uae", "wages protection system compliance", "uae payroll deadline"], date: "2026-04-20", readTime: 5,
  },

  // ── CLUSTER 5: BPO Hiring Specifically ───────────────────────────────────
  {
    slug: "bpo-hiring-process-india-guide",
    title: "BPO Hiring Process in India: From Job Post to First Day",
    description: "The complete end-to-end hiring process for Indian BPOs — from where to post, how to screen, what to test, and how to offer.",
    category: "BPO Hiring", tags: ["bpo hiring process", "bpo recruitment india", "call centre hiring india"], date: "2026-04-03", readTime: 10, featured: true,
  },
  {
    slug: "bpo-attrition-india-how-to-reduce",
    title: "BPO Attrition in India: Why 38% Leave in 90 Days and How to Fix It",
    description: "India's BPO attrition crisis explained — root causes, leading indicators, and the hiring changes that actually reduce it.",
    category: "BPO Hiring", tags: ["bpo attrition india", "call centre attrition", "employee retention bpo"], date: "2026-04-05", readTime: 8,
  },
  {
    slug: "bpo-aptitude-test-verbal-numerical",
    title: "Verbal vs Numerical Aptitude Tests for BPO Hiring: Which Matters More?",
    description: "Data from BPO hiring shows which aptitude dimensions actually predict agent performance — and the answer may surprise you.",
    category: "BPO Hiring", tags: ["bpo aptitude test", "verbal reasoning test bpo", "numerical reasoning bpo"], date: "2026-04-07", readTime: 6,
  },
  {
    slug: "high-volume-hiring-bpo-india",
    title: "High-Volume Hiring for Indian BPOs: How to Scale Without Losing Quality",
    description: "When you're hiring 100 people a month, quality control becomes the hard problem. Here's a systematic approach.",
    category: "BPO Hiring", tags: ["high volume hiring india", "bulk recruitment bpo", "mass hiring india"], date: "2026-04-09", readTime: 7,
  },
  {
    slug: "bpo-job-description-template-india",
    title: "BPO Job Description Templates That Attract the Right Candidates",
    description: "The job description is your first screening filter. Here are 5 BPO job description templates with language that filters in-fit candidates.",
    category: "BPO Hiring", tags: ["bpo job description", "call centre job template", "recruitment job posting india"], date: "2026-04-11", readTime: 5,
  },
  {
    slug: "bpo-interview-questions-india",
    title: "The 20 Best BPO Interview Questions (With Scoring Guide)",
    description: "Structured interview questions for BPO roles with scoring rubrics — so every interviewer evaluates on the same criteria.",
    category: "BPO Hiring", tags: ["bpo interview questions", "call centre interview india", "structured interview guide"], date: "2026-04-13", readTime: 7,
  },
  {
    slug: "naukri-vs-linkedin-bpo-hiring-india",
    title: "Naukri vs LinkedIn for BPO Hiring in India: Which Gives Better Candidates?",
    description: "A data-driven comparison of candidate quality from India's two biggest hiring platforms — specifically for BPO roles.",
    category: "BPO Hiring", tags: ["naukri vs linkedin india", "job board comparison india", "bpo recruitment source"], date: "2026-04-15", readTime: 6,
  },
  {
    slug: "bpo-hr-software-comparison-india-2026",
    title: "HR Software Comparison for BPOs in India (2026): 8 Tools Reviewed",
    description: "Every major HR tool reviewed from the perspective of a BPO HR manager doing 50–200 hires per month.",
    category: "BPO Hiring", tags: ["bpo hr software", "ats bpo", "hr platform bpo india"], date: "2026-04-17", readTime: 10,
  },

  // ── CLUSTER 6: SME HR Operations ─────────────────────────────────────────
  {
    slug: "hr-operations-sme-india-guide",
    title: "HR Operations for Indian SMEs: What You Actually Need (and What You Don't)",
    description: "A practical framework for building HR operations at a 50–200 person Indian company — without enterprise overhead.",
    category: "SME HR", tags: ["hr operations india", "sme hr india", "hr management small business india"], date: "2026-04-04", readTime: 8, featured: true,
  },
  {
    slug: "leave-management-india-sme",
    title: "Leave Management for Indian SMEs: Manual vs Software",
    description: "Is it time to stop managing leave on spreadsheets? An honest look at when software pays off and when it doesn't.",
    category: "SME HR", tags: ["leave management india", "hr software leave tracking", "hr tool india sme"], date: "2026-04-06", readTime: 5,
  },
  {
    slug: "payslip-generation-india-automate",
    title: "Automating Payslip Generation for Indian Companies: Options and Costs",
    description: "From Excel to software — a guide to payslip automation for Indian SMEs, including what's legally required.",
    category: "SME HR", tags: ["payslip software india", "payroll india sme", "payslip generation india"], date: "2026-04-08", readTime: 6,
  },
  {
    slug: "hr-whatsapp-helpdesk-india",
    title: "Running HR on WhatsApp: How Indian SMEs Are Using It for Employee Self-Service",
    description: "How forward-thinking Indian HR managers are using WhatsApp to handle leave, payslips, and queries without emails.",
    category: "SME HR", tags: ["hr whatsapp india", "whatsapp hr helpdesk", "employee self service india"], date: "2026-04-10", readTime: 5,
  },
  {
    slug: "okr-goal-tracking-sme-india",
    title: "OKRs for Indian SMEs: Simpler Than You Think",
    description: "Goal tracking doesn't require expensive software. Here's how to implement OKRs at a 100-person Indian company without the complexity.",
    category: "SME HR", tags: ["okr india sme", "goal tracking india", "performance management india sme"], date: "2026-04-12", readTime: 6,
  },
  {
    slug: "pf-esi-compliance-sme-india",
    title: "PF and ESI Compliance for Indian SMEs: The Non-Accountant's Guide",
    description: "Provident Fund and ESI explained for founders and HR managers who didn't study law — with practical compliance checklists.",
    category: "SME HR", tags: ["pf esi india", "provident fund india", "payroll compliance india sme"], date: "2026-04-14", readTime: 7,
  },
  {
    slug: "founder-first-10-hires-india-guide",
    title: "A Founder's Guide to Your First 10 Hires in India",
    description: "The process, the pitfalls, and the tools for a first-time founder making their first hires in India — without an HR team.",
    category: "SME HR", tags: ["first hire india startup", "startup hiring india", "founder hr guide india"], date: "2026-04-16", readTime: 8, featured: true,
  },
  {
    slug: "hr-manager-productivity-india",
    title: "Why Indian HR Managers Spend 40% of Their Time on Admin (And How to Fix It)",
    description: "A time audit of a typical Indian HR manager's week — and a practical plan to automate the repetitive 40%.",
    category: "SME HR", tags: ["hr productivity india", "hr automation india", "hr admin india"], date: "2026-04-18", readTime: 6,
  },
  {
    slug: "employee-onboarding-checklist-india",
    title: "Employee Onboarding Checklist for Indian Companies",
    description: "A comprehensive onboarding checklist for Indian SMEs — from offer acceptance to first 30 days, with what goes digital and what stays paper.",
    category: "SME HR", tags: ["employee onboarding india", "onboarding checklist india", "hr onboarding sme"], date: "2026-04-20", readTime: 5,
  },

  // ── CLUSTER 7: AI in Hiring ───────────────────────────────────────────────
  {
    slug: "ai-hiring-tool-india-how-it-works",
    title: "How AI Hiring Tools Work: A Plain-Language Guide for Indian HR Managers",
    description: "No jargon. A straightforward explanation of how AI reads CVs, scores candidates, and how to trust (and verify) the output.",
    category: "AI Hiring", tags: ["ai hiring tool india", "ai recruitment india", "machine learning recruitment"], date: "2026-04-05", readTime: 7, featured: true,
  },
  {
    slug: "ai-recruitment-bias-india",
    title: "AI Bias in Recruitment: What Indian HR Managers Need to Know",
    description: "AI can encode existing biases if built carelessly. Here's what to ask vendors, and what safeguards to demand in any AI hiring tool.",
    category: "AI Hiring", tags: ["ai bias recruitment india", "fair hiring ai", "responsible ai hr"], date: "2026-04-07", readTime: 7,
  },
  {
    slug: "predictive-hiring-90-day-performance",
    title: "Predictive Hiring: Can You Predict a New Hire's 90-Day Performance Before the Offer?",
    description: "The science and practice of using pre-hire data to predict post-hire performance — with real data from Indian BPOs.",
    category: "AI Hiring", tags: ["predictive hiring", "hire quality prediction", "90 day performance hiring"], date: "2026-04-09", readTime: 8,
  },
  {
    slug: "ai-vs-human-cv-screening-accuracy",
    title: "AI vs Human CV Screening: Who's More Accurate?",
    description: "A controlled comparison of AI and human shortlisting outcomes — which approach produces better 90-day retention rates.",
    category: "AI Hiring", tags: ["ai cv screening accuracy", "human vs ai recruitment", "cv shortlisting quality"], date: "2026-04-11", readTime: 7,
  },
  {
    slug: "llm-recruitment-india-jd-generation",
    title: "Using LLMs to Write Better Job Descriptions: Faster, More Inclusive, Higher Apply Rate",
    description: "How large language models improve job description quality — and why AI-written JDs attract 25% more applications.",
    category: "AI Hiring", tags: ["llm job description", "ai jd writing", "job description optimisation india"], date: "2026-04-13", readTime: 6,
  },
  {
    slug: "ai-scoring-transparency-explainability",
    title: "Why AI Hiring Scores Must Be Explainable — And What to Ask Your Vendor",
    description: "Black-box AI in recruitment is a legal and ethical risk. Here's why explainability matters and how to evaluate it.",
    category: "AI Hiring", tags: ["ai explainability recruitment", "transparent ai hiring", "ai hiring ethics"], date: "2026-04-15", readTime: 6,
  },
  {
    slug: "people-intelligence-platform-explained",
    title: "What Is a People Intelligence Platform? (And Why India Needs One)",
    description: "A new category of HR software is emerging. Here's what separates a people intelligence platform from a traditional HRMS or ATS.",
    category: "AI Hiring", tags: ["people intelligence platform", "hr intelligence software", "hire to retire platform india"], date: "2026-04-17", readTime: 7,
  },
  {
    slug: "data-flywheel-hr-india-explained",
    title: "The HR Data Flywheel: Why Your Hiring Gets Smarter Over Time",
    description: "How compounding hire outcome data creates a defensible competitive advantage — and why this matters for Indian SMEs switching to AI hiring tools.",
    category: "AI Hiring", tags: ["hr data flywheel", "ai hiring improvement", "recruitment data india"], date: "2026-04-19", readTime: 6,
  },

  // ── CLUSTER 8: Attrition, Performance, Retention ─────────────────────────
  {
    slug: "reduce-employee-attrition-india-bpo",
    title: "How to Reduce Employee Attrition in Indian BPOs: 8 Evidence-Based Tactics",
    description: "India's BPO sector loses 38–45% of hires in the first 90 days. Here are the interventions that actually work.",
    category: "Attrition & Retention", tags: ["employee attrition india", "bpo retention india", "reduce attrition india"], date: "2026-04-06", readTime: 8, featured: true,
  },
  {
    slug: "90-day-hire-failure-india-causes",
    title: "Why New Hires Fail in India in the First 90 Days: The Real Causes",
    description: "Most 90-day failures aren't about skill — they're about fit, expectations, and the hiring data that was never captured.",
    category: "Attrition & Retention", tags: ["90 day hire failure india", "new hire attrition india", "hiring success india"], date: "2026-04-08", readTime: 7,
  },
  {
    slug: "employee-retention-strategies-india-sme",
    title: "Employee Retention Strategies for Indian SMEs That Actually Work",
    description: "Low-cost, high-impact retention strategies for Indian companies that can't compete on salary with large enterprises.",
    category: "Attrition & Retention", tags: ["employee retention india", "staff retention sme india", "reduce staff turnover india"], date: "2026-04-10", readTime: 7,
  },
  {
    slug: "performance-management-india-sme-guide",
    title: "Performance Management for Indian SMEs: Simple, Fair, Effective",
    description: "A practical performance management framework for a 100-person Indian company that doesn't have an L&D team.",
    category: "Attrition & Retention", tags: ["performance management india sme", "appraisal system india", "employee performance india"], date: "2026-04-12", readTime: 6,
  },
  {
    slug: "team-health-signals-hr-india",
    title: "Team Health Signals: How to Spot Disengagement Before It Becomes Attrition",
    description: "Data-driven indicators of team disengagement — and how to surface them without turning your workplace into a surveillance operation.",
    category: "Attrition & Retention", tags: ["team health india", "employee engagement india", "disengagement signals hr"], date: "2026-04-14", readTime: 6,
  },
  {
    slug: "hire-quality-score-tracking-india",
    title: "Tracking Hire Quality: The Metric Every Indian HR Manager Should Be Measuring",
    description: "How to define, measure, and improve hire quality — and why 90-day performance is the right proxy.",
    category: "Attrition & Retention", tags: ["hire quality india", "recruitment metrics india", "hr kpi india"], date: "2026-04-16", readTime: 6,
  },
  {
    slug: "cost-of-bad-hire-india-calculation",
    title: "The Real Cost of a Bad Hire in India: How to Calculate It",
    description: "Most Indian SMEs underestimate the cost of a failed hire by 5–10x. Here's the full calculation including hidden costs.",
    category: "Attrition & Retention", tags: ["cost of bad hire india", "hiring cost india", "recruitment roi india"], date: "2026-04-18", readTime: 5,
  },
  {
    slug: "exit-interview-india-template-analysis",
    title: "Exit Interviews in India: Templates, Common Reasons, and What to Do With the Data",
    description: "A structured approach to exit interviews — what to ask, how to analyse the results, and how to actually use them to reduce attrition.",
    category: "Attrition & Retention", tags: ["exit interview india", "employee exit template", "attrition analysis india"], date: "2026-04-20", readTime: 6,
  },

  // ── Additional high-value SEO posts ──────────────────────────────────────
  {
    slug: "hr-software-hospitality-uae-india",
    title: "HR Software for Hospitality in UAE and India: What's Different",
    description: "Hospitality HR has unique needs — seasonal hiring, high turnover, multilingual teams. Here's what software works for hotels and F&B.",
    category: "Industry Specific", tags: ["hr software hospitality", "hotel hr software uae", "hospitality hiring india"], date: "2026-04-22", readTime: 7,
  },
  {
    slug: "manufacturing-hr-software-india",
    title: "HR Software for Manufacturing Companies in India: A Buyer's Guide",
    description: "Factory and logistics HR is different. High-volume blue-collar hiring, shift management, PF/ESI compliance. Here's what to look for.",
    category: "Industry Specific", tags: ["hr software manufacturing india", "factory hr india", "blue collar hrms india"], date: "2026-04-24", readTime: 7,
  },
  {
    slug: "staffing-agency-tech-stack-india",
    title: "The Tech Stack Every Indian Staffing Agency Needs in 2026",
    description: "ATS, assessment tools, white-label platform, CRM — what software a modern Indian staffing agency should be running.",
    category: "Industry Specific", tags: ["staffing agency software india", "recruitment agency tech stack", "placement agency tools india"], date: "2026-04-26", readTime: 8,
  },
  {
    slug: "hr-software-startup-india-guide",
    title: "HR Software for Indian Startups: When to Buy and What to Start With",
    description: "A framework for startup founders on when they need HR software — and what to buy at each stage from 0 to 100 employees.",
    category: "Industry Specific", tags: ["hr software startup india", "startup hrms india", "hr tools early stage india"], date: "2026-04-28", readTime: 7,
  },
  {
    slug: "whatsapp-business-api-hr-india",
    title: "WhatsApp Business API for HR: What Indian Companies Are Using It For",
    description: "How Indian companies are using the WhatsApp Business API for recruitment, onboarding, payslips, and employee queries.",
    category: "Technology", tags: ["whatsapp business api hr", "whatsapp recruitment india", "whatsapp hr automation"], date: "2026-04-30", readTime: 6,
  },
  {
    slug: "kanban-pipeline-recruitment-india",
    title: "Kanban for Recruitment: How to Manage Your Hiring Pipeline Visually",
    description: "A visual pipeline beats a spreadsheet every time. Here's how to set up a Kanban hiring pipeline and what stages to track.",
    category: "Technology", tags: ["kanban recruitment india", "hiring pipeline management", "recruitment pipeline software"], date: "2026-05-02", readTime: 5,
  },
  {
    slug: "e-signature-offer-letter-india-legal",
    title: "E-Signature for Offer Letters in India: Is It Legally Valid?",
    description: "Everything you need to know about the legal status of e-signatures in India under the IT Act 2000 and the Indian Contract Act.",
    category: "Technology", tags: ["e-signature india legal", "digital signature offer letter", "electronic signature india"], date: "2026-05-04", readTime: 6,
  },
  {
    slug: "background-verification-india-guide",
    title: "Background Verification in India: A Complete Guide for HR Managers",
    description: "What BGV checks are available in India, how long they take, what they cost, and when they're worth doing.",
    category: "Compliance India", tags: ["background verification india", "bgv india", "employee verification india"], date: "2026-05-06", readTime: 8,
  },
  {
    slug: "dpdp-act-india-hr-data-compliance",
    title: "DPDP Act 2023 and HR Data: What Indian Companies Must Do Now",
    description: "India's Digital Personal Data Protection Act 2023 has direct implications for how HR teams collect, store, and use candidate and employee data.",
    category: "Compliance India", tags: ["dpdp act india hr", "data protection india hr", "candidate data india"], date: "2026-05-08", readTime: 7,
  },
  {
    slug: "hiring-remote-workers-india-guide",
    title: "Hiring Remote Workers in India: HR, Compliance, and Tools",
    description: "Distributed teams are now normal. Here's the compliance framework and tools for hiring remote employees across Indian states.",
    category: "Compliance India", tags: ["remote hiring india", "work from home hiring india", "remote employee india compliance"], date: "2026-05-10", readTime: 7,
  },
  {
    slug: "ai-hiring-india-2026-state-of",
    title: "AI Hiring in India 2026: State of the Market",
    description: "An overview of where AI recruitment technology stands in India — adoption rates, leading vendors, and where the market is heading.",
    category: "AI Hiring", tags: ["ai hiring india 2026", "recruitment technology india", "hr tech india market"], date: "2026-05-12", readTime: 8,
  },
  {
    slug: "candidate-ghosting-india-how-to-prevent",
    title: "Candidate Ghosting in India: Why It Happens and How to Prevent It",
    description: "Indian candidates ghost at unusually high rates. The reasons are structural — and solvable if you understand the hiring dynamics.",
    category: "BPO Hiring", tags: ["candidate ghosting india", "recruitment dropout india", "hiring drop off india"], date: "2026-05-14", readTime: 6,
  },
  {
    slug: "gcc-hiring-india-corridor-guide",
    title: "India to GCC Hiring Corridor: How to Place and Manage South Asian Workers",
    description: "The operational guide to the India-GCC hiring corridor — from pre-screening in India to compliance on arrival in Dubai.",
    category: "UAE Compliance", tags: ["india gcc hiring", "south asian workers uae", "india uae recruitment"], date: "2026-05-16", readTime: 9,
  },
  {
    slug: "offer-letter-template-india-download",
    title: "Offer Letter Template for India (Free Download): What to Include",
    description: "A legally sound offer letter template for Indian companies — with required clauses, optional clauses, and digital signature guidance.",
    category: "SME HR", tags: ["offer letter template india", "employment offer letter india", "offer letter format india"], date: "2026-05-18", readTime: 5,
  },
  {
    slug: "hr-kpis-metrics-india-sme",
    title: "HR KPIs and Metrics Every Indian SME Should Track",
    description: "The 10 most important HR metrics for Indian SMEs — from time-to-hire to 90-day attrition — and how to track them without dedicated analytics.",
    category: "SME HR", tags: ["hr kpis india", "recruitment metrics india sme", "hr analytics india"], date: "2026-05-20", readTime: 7,
  },
  {
    slug: "recruitment-process-outsourcing-india-vs-inhouse",
    title: "RPO vs In-House Recruitment in India: Which Makes More Sense for Your Stage?",
    description: "When to outsource recruitment entirely, when to bring it in-house, and when a hybrid model is the right answer for an Indian SME.",
    category: "BPO Hiring", tags: ["rpo india", "recruitment outsourcing india", "in house recruitment india"], date: "2026-05-22", readTime: 7,
  },
  {
    slug: "hr-automation-india-what-to-automate",
    title: "What to Automate in HR First: A Priority Guide for Indian Companies",
    description: "Not all HR work is worth automating. Here's a ranked list of what to tackle first based on time saved and risk reduced.",
    category: "SME HR", tags: ["hr automation india", "automate hr processes india", "hr workflow automation"], date: "2026-05-24", readTime: 6,
  },
  {
    slug: "construction-labour-hiring-uae-guide",
    title: "Hiring Construction Labour in UAE: The Full Process from India",
    description: "Step-by-step guide to hiring construction workers from India for UAE projects — screening, visas, Emirates ID, WPS, and compliance.",
    category: "UAE Compliance", tags: ["construction labour uae", "uae construction hiring", "building workers uae india"], date: "2026-05-26", readTime: 9,
  },
  {
    slug: "hotel-staff-recruitment-uae-india",
    title: "Hotel and F&B Staff Recruitment in UAE: Sourcing from India",
    description: "Practical guide to recruiting housekeeping, F&B, and front-desk staff from India for UAE hospitality employers.",
    category: "UAE Compliance", tags: ["hotel staff recruitment uae", "hospitality workers uae india", "f&b hiring uae"], date: "2026-05-28", readTime: 8,
  },
  {
    slug: "zorvis-vs-keka-detailed-comparison",
    title: "Zorvis AI vs Keka: Which Is Better for Your Indian Company?",
    description: "A detailed, feature-by-feature comparison of Zorvis AI and Keka — pricing, hiring modules, HR OS, and who each is best suited for.",
    category: "HR Software India", tags: ["zorvis vs keka", "keka review india", "keka alternative india"], date: "2026-05-30", readTime: 9,
  },
  {
    slug: "zorvis-vs-darwinbox-comparison",
    title: "Zorvis AI vs Darwinbox: Enterprise HR vs People Intelligence Platform",
    description: "How Zorvis AI and Darwinbox compare for mid-size Indian companies — and why the choice depends entirely on your stage and team size.",
    category: "HR Software India", tags: ["zorvis vs darwinbox", "darwinbox review india", "darwinbox alternative"], date: "2026-06-01", readTime: 8,
  },
  {
    slug: "hr-software-roi-india-sme-calculate",
    title: "How to Calculate HR Software ROI for an Indian SME",
    description: "A simple framework for calculating whether an HR tool pays for itself — with a worked example for a 200-person BPO.",
    category: "SME HR", tags: ["hr software roi india", "hr tool investment india", "recruitment software roi"], date: "2026-06-03", readTime: 6,
  },
  {
    slug: "india-sme-hiring-challenges-2026",
    title: "The 7 Biggest Hiring Challenges for Indian SMEs in 2026",
    description: "A frank assessment of what makes hiring hard for Indian companies with 50–500 employees — and what actually helps.",
    category: "SME HR", tags: ["hiring challenges india sme", "recruitment problems india", "talent acquisition india sme"], date: "2026-06-05", readTime: 7,
  },
  {
    slug: "uae-hr-software-checklist-2026",
    title: "UAE HR Software Buyer's Checklist (2026): 15 Questions to Ask Before You Buy",
    description: "What to ask any UAE HR software vendor before signing — covering compliance features, bilingual support, WPS, and pricing.",
    category: "UAE Compliance", tags: ["uae hr software checklist", "hr software buying guide uae", "choose hr software uae"], date: "2026-06-07", readTime: 7,
  },
  {
    slug: "talent-pipeline-building-india",
    title: "Building a Talent Pipeline for Indian SMEs: A Practical Guide",
    description: "How to build a bench of pre-screened candidates so you're not starting from zero every time a role opens.",
    category: "BPO Hiring", tags: ["talent pipeline india", "candidate pipeline sme india", "proactive recruitment india"], date: "2026-06-09", readTime: 6,
  },
  {
    slug: "candidate-scoring-transparency-india",
    title: "Candidate Scoring: Why Every HR Manager Needs to Be Able to Explain Their Shortlist",
    description: "The shift from gut-feel shortlisting to defensible, score-backed hiring — and why it matters legally and practically.",
    category: "AI Hiring", tags: ["candidate scoring india", "shortlist justification hr", "defensible hiring india"], date: "2026-06-11", readTime: 5,
  },
];

// Category list for filtering
export const CATEGORIES = [
  "All",
  "CV Screening",
  "Assessments",
  "HR Software India",
  "UAE Compliance",
  "BPO Hiring",
  "SME HR",
  "AI Hiring",
  "Attrition & Retention",
  "Industry Specific",
  "Technology",
  "Compliance India",
];
