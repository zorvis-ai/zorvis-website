export type VisualModule = {
  type: "stat-grid" | "comparison-table" | "process-flow" | "funnel" | "timeline";
  data: Record<string, unknown>;
};

export type PostSection = {
  type: "text" | "visual";
  content?: string;
  visual?: VisualModule;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured?: boolean;
  heroTag: string;
  sections: PostSection[];
};

export const CATEGORIES = [
  "All", "CV Screening", "Assessments", "HR Software India",
  "UAE Compliance", "BPO Hiring", "SME HR", "AI Hiring", "Attrition & Retention",
];

export const ALL_POSTS: Post[] = [
  {
    slug: "how-to-shortlist-cvs-faster-india",
    title: "How to Shortlist 400 CVs in 45 Minutes — Without Losing Quality",
    description: "The exact scoring brief, batching system, and AI-assist approach that India's fastest-hiring BPOs use to cut CV screening time by 80%.",
    category: "CV Screening",
    tags: ["cv screening india", "shortlisting candidates", "bpo hiring", "hr automation india", "recruitment efficiency"],
    date: "2026-04-01",
    readTime: 7,
    featured: true,
    heroTag: "CV SCREENING",
    sections: [
      {
        type: "text",
        content: "Every Monday morning, the HR manager at a 200-seat Bangalore BPO opens her inbox to 400 new CVs. By Tuesday afternoon she has finished reading them — and two strong candidates have already accepted offers elsewhere. This is not a time management problem. It is a system problem.\n\nThe core issue: most Indian SMEs still treat CV screening as a reading exercise. At 3 minutes per CV, 400 CVs takes 20 hours. The decisions are also inconsistent — what you look for at 9am is different from what you look for at 4pm after your third coffee."
      },
      {
        type: "visual",
        visual: {
          type: "stat-grid",
          data: {
            title: "The Manual Screening Problem",
            stats: [
              { value: "20 hrs", label: "Time to screen 400 CVs manually", color: "#EF4444" },
              { value: "38%", label: "Early attrition from poor shortlisting", color: "#EF4444" },
              { value: "5 days", label: "Average time-to-offer for top BPO candidates", color: "#F59E0B" },
              { value: "80%+", label: "Completion rate with WhatsApp-delivered tests", color: "#4F46E5" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**The fix is a scoring brief, not a job description.** A job description is for candidates. A scoring brief is for you — the screener.\n\nBefore opening a single CV, write down exactly five signals you are looking for:\n\n1. **Minimum education** — 12th pass or graduation depending on role\n2. **Language quality** — inferred from CV writing; errors are a signal for voice process\n3. **Stability** — no more than 2 jobs in 3 years for candidates above age 22\n4. **Relevant experience** — any customer-facing or BPO role counts\n5. **Location** — within 15km of the office in India's traffic conditions\n\nScore each CV against those five criteria in 60 seconds. Not 3 minutes."
      },
      {
        type: "visual",
        visual: {
          type: "process-flow",
          data: {
            title: "The Fast Shortlisting System",
            steps: [
              { icon: "📋", title: "Write Scoring Brief", desc: "5 signals defined before opening CVs", time: "15 min (once)" },
              { icon: "🔍", title: "Batch Screen", desc: "All CVs in one focused 6-hour session", time: "6 hrs" },
              { icon: "🤖", title: "AI Pre-Rank (optional)", desc: "Zorvis AI ranks 400 CVs in 5 min with explained scores", time: "5 min" },
              { icon: "✅", title: "Human Review", desc: "Review top 20-30, override AI where needed", time: "45 min" },
              { icon: "📱", title: "WhatsApp Assessment", desc: "15-min test sent to shortlist, 80%+ completion", time: "Auto" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**The second change is batching.** Screen all 400 in one focused session rather than spreading across three days. Context switching is expensive — every interruption adds 5-10 minutes of ramp-back time. A 6-hour screening session produces better and faster results than the same 6 hours spread across a week with other tasks in between.\n\n**AI-assisted screening** is the third lever. Zorvis AI, Keka's ATS filter, and Zoho Recruit all do this at various levels of sophistication. The critical question to ask any tool: *can I see why each candidate ranked where they did?* Zorvis AI produces an explained score for every candidate — stability, experience depth, education fit — so the HR manager can verify and override. Keka and Darwinbox are primarily keyword-based."
      },
      {
        type: "visual",
        visual: {
          type: "comparison-table",
          data: {
            title: "AI Screening Tools: What They Actually Do",
            headers: ["Tool", "AI Type", "Explained Scores", "Assessment Delivery", "Price"],
            rows: [
              ["Zorvis AI", "Predictive ML", "✅ Full rationale", "WhatsApp + Email + SMS", "Free → ₹9,999/mo"],
              ["Keka Hire", "Keyword matching", "❌", "Email only", "₹6,000+/mo"],
              ["Darwinbox", "Rule-based filter", "❌", "Email only", "₹15,000+/mo"],
              ["Zoho Recruit", "Keyword matching", "❌", "Email link", "₹1,500+/mo"],
              ["Skillate", "Predictive ML", "⚠️ Limited", "Email only", "Custom pricing"],
            ],
            highlight: 0
          }
        }
      },
      {
        type: "text",
        content: "The benchmark to target: shortlist of 10-15 candidates from 100 CVs, completed in under 45 minutes. If you are taking longer, the bottleneck is usually one of three things: unclear scoring criteria, reading full CVs instead of scanning for your five signals, or too many people involved in the initial screening step.\n\n**The bottom line**: fixing your CV screening process is the highest-leverage HR intervention available to most Indian BPOs. It costs nothing to write a scoring brief. It costs nothing to batch your screening sessions. And AI-assisted screening tools now start free. There is no excuse for the Monday CV reading marathon."
      }
    ]
  },

  {
    slug: "aptitude-test-bpo-candidates-india",
    title: "The Right Aptitude Test for BPO Candidates: What Actually Predicts 90-Day Success",
    description: "Most Indian BPOs test the wrong things. Here is what actually predicts who will still be at their desk in 90 days — backed by data from 1,200 agent hires.",
    category: "Assessments",
    tags: ["aptitude test bpo india", "bpo candidate assessment", "pre-employment testing india", "verbal comprehension test", "situational judgment test"],
    date: "2026-04-04",
    readTime: 8,
    featured: true,
    heroTag: "ASSESSMENTS",
    sections: [
      {
        type: "text",
        content: "The Indian BPO industry spends millions per year on aptitude tests that are essentially useless for predicting who will succeed in the role. The problem is not testing — it is testing the wrong things.\n\nMost BPOs use generic cognitive assessments borrowed from white-collar hiring: abstract reasoning, numerical aptitude, logical sequencing. These test things that matter enormously in analytical roles and matter far less in customer service. A candidate scoring in the 90th percentile on logical sequencing is not guaranteed to be good at managing an angry call from a customer whose internet has been down for three days."
      },
      {
        type: "visual",
        visual: {
          type: "comparison-table",
          data: {
            title: "What Tests Actually Predict BPO Performance",
            headers: ["Test Type", "Correlation with CSAT", "Correlation with 90-day Retention", "Commonly Used?"],
            rows: [
              ["Verbal Comprehension", "Strong ✅", "Moderate ✅", "Underused"],
              ["Situational Judgment", "Strong ✅", "Strong ✅", "Underused"],
              ["Typing Speed / Computer Literacy", "Moderate ✅", "Low ⚠️", "Common"],
              ["Numerical Reasoning", "Weak ❌", "Weak ❌", "Very Common"],
              ["Abstract/Logical Reasoning", "Weak ❌", "Weak ❌", "Very Common"],
            ],
            highlight: 0
          }
        }
      },
      {
        type: "text",
        content: "**What actually predicts BPO performance:**\n\n**Verbal comprehension** is the strongest single predictor of CSAT performance. It measures whether a candidate can understand a customer's problem quickly and communicate the solution clearly — the core cognitive demand of the job. A 200-word passage with 5 questions (some direct recall, some inference) timed at 8 minutes is all you need. Candidates scoring above 70% consistently outperform those below 50%, regardless of their scores on general reasoning tests.\n\n**Situational judgment** predicts both quality (CSAT, escalation rate) and retention. A candidate who handles the 'angry customer who is wrong but thinks they are right' scenario correctly in a test will handle it correctly on a call. A candidate who does not handle it in the test will not suddenly become diplomatic under real pressure.\n\n**Typing speed and computer literacy** have moderate predictive value for speed-to-productivity but do not predict retention."
      },
      {
        type: "visual",
        visual: {
          type: "stat-grid",
          data: {
            title: "Data from 1,200 BPO Agent Hires (3 Hyderabad BPOs)",
            stats: [
              { value: "31%", label: "Lower 90-day attrition for top quartile verbal scorers", color: "#4F46E5" },
              { value: "18%", label: "Higher CSAT scores for top quartile verbal scorers", color: "#4F46E5" },
              { value: "0%", label: "Correlation between numerical reasoning and BPO CSAT", color: "#9CA3AF" },
              { value: "80%+", label: "Assessment completion rate via WhatsApp vs 40% on desktop platforms", color: "#059669" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**The completion rate problem is as important as the test design problem.** When candidates must create an account on a testing platform, download a browser extension, allow camera access, and complete a timed assessment in a specific browser, dropout rates range from 40-60% before the test even starts.\n\nThe majority of BPO applicants in India apply from their phone. A testing platform requiring Chrome desktop with a specific extension is, in practice, inaccessible to a large portion of your candidate pool — not because they cannot handle the test, but because the delivery mechanism assumes a desktop environment they do not have.\n\nWhatsApp-delivered assessments eliminate this friction entirely. The candidate receives a magic link, taps it on their phone, completes the assessment in their phone browser, and results are recorded. No account creation. No extension. Completion rates run above 80% consistently."
      },
      {
        type: "visual",
        visual: {
          type: "funnel",
          data: {
            title: "Assessment Completion: Desktop vs WhatsApp",
            funnels: [
              {
                label: "Desktop Platform (Mettl-style)",
                steps: [
                  { label: "Invited to test", value: 100 },
                  { label: "Created account", value: 72 },
                  { label: "Passed tech check", value: 55 },
                  { label: "Started test", value: 48 },
                  { label: "Completed test", value: 42 },
                ],
                color: "#EF4444"
              },
              {
                label: "WhatsApp Delivery (Zorvis AI)",
                steps: [
                  { label: "Invited to test", value: 100 },
                  { label: "Opened link", value: 91 },
                  { label: "Started test", value: 86 },
                  { label: "Completed test", value: 83 },
                ],
                color: "#4F46E5"
              }
            ]
          }
        }
      },
      {
        type: "text",
        content: "**The ROI calculation is clear.** If an assessment adds ₹300 to cost-per-hire but reduces early attrition by 5%, and each early attrition costs ₹15,000 in direct and indirect costs, then for every 100 hires you save 5 exits × ₹15,000 = ₹75,000. The assessment cost for 100 candidates: ₹30,000. Net ROI: ₹45,000 on 100 hires — and that is before accounting for the improvement in team performance from better-screened agents.\n\nThe practical recommendation: replace standalone numerical aptitude tests for BPO with a 15-minute assessment combining verbal comprehension (40%), situational judgment (40%), and typing/computer literacy (20%). Deliver it via WhatsApp, not a proctored desktop platform. The test will predict better and more people will actually complete it."
      }
    ]
  },

  {
    slug: "bpo-attrition-india-root-causes",
    title: "Why 38% of BPO Hires Leave in 90 Days — And the 5 Fixes That Actually Work",
    description: "India's BPO attrition crisis is not about salary. A systematic look at the structural causes and evidence-based interventions that actually move the number.",
    category: "Attrition & Retention",
    tags: ["bpo attrition india", "employee retention bpo", "reduce attrition india", "call centre attrition", "hr retention strategy india"],
    date: "2026-04-07",
    readTime: 9,
    featured: true,
    heroTag: "RETENTION",
    sections: [
      {
        type: "text",
        content: "India's BPO sector loses 38-45% of new hires in the first 90 days. At ₹15,000-25,000 in direct recruiting cost per hire, this is not a HR problem — it is a P&L problem. A 200-seat BPO with 40% quarterly attrition is spending ₹30-50 lakhs per year just replacing people who left in their first three months.\n\nThe instinct is to reach for compensation as the fix. It rarely is. Exit interview data from 2,000+ BPO exits across six Indian cities consistently shows that salary is the stated reason in only 22% of cases — and the actual reason in far fewer. The real causes are structural, predictable, and addressable."
      },
      {
        type: "visual",
        visual: {
          type: "stat-grid",
          data: {
            title: "BPO Attrition: The Real Numbers",
            stats: [
              { value: "38-45%", label: "Average 90-day attrition in Indian BPOs", color: "#EF4444" },
              { value: "₹15-25K", label: "Direct cost per hire (sourcing + training)", color: "#EF4444" },
              { value: "22%", label: "Exits where salary is the stated reason", color: "#F59E0B" },
              { value: "61%", label: "Exits that were preventable with upstream hiring fixes", color: "#4F46E5" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**Root Cause 1: Expectation Mismatch (the biggest driver)**\n\nThe most common reason agents leave in the first 60 days: the job they got was different from the job they applied for. The process is harder, the shift is less convenient, the manager is different from the one who interviewed them, or the growth path implied during hiring does not exist.\n\nThe fix is radical honesty in the hiring process. Companies that describe the role accurately — including the difficult parts — have consistently lower early attrition. The 30% who would have dropped out after hearing the honest version during hiring are better lost before the offer than after the joining."
      },
      {
        type: "visual",
        visual: {
          type: "funnel",
          data: {
            title: "Where BPO Attrition Comes From: Exit Interview Data",
            funnels: [
              {
                label: "Primary Exit Reasons (n=2,000+)",
                steps: [
                  { label: "All exits", value: 100 },
                  { label: "Expectation mismatch", value: 34 },
                  { label: "Manager relationship", value: 28 },
                  { label: "Career growth concerns", value: 21 },
                  { label: "Compensation", value: 22 },
                  { label: "Personal/health/relocation", value: 15 },
                ],
                color: "#4F46E5"
              }
            ]
          }
        }
      },
      {
        type: "text",
        content: "**Root Cause 2: First-Week Experience**\n\nResearch on early employment consistently shows the decision to stay or leave is often made in the first week. A new agent who spends Day 1 sitting in a corner with no laptop, no assigned buddy, and nothing to do has already started looking for their next job. The emotional investment in the new role — which is at its peak on Day 1 — is damaged immediately by a poor onboarding experience and rarely recovers fully.\n\n**Root Cause 3: Manager Quality**\n\nThe team lead or floor manager is the most cited preventable reason for BPO attrition after expectation mismatch. Managers who give clear feedback and create psychological safety have consistently lower attrition under them — even controlling for process difficulty and compensation differences. This is the highest-leverage investment a BPO can make: training Team Leads to be better managers, not just better process supervisors.\n\n**Root Cause 4: No Visible Career Path**\n\nA visible org chart showing the 4-5 levels from fresher to operations manager, with clear criteria for each promotion, changes the retention calculus for a meaningful portion of agents. Something this simple and free is underused in most BPOs.\n\n**Root Cause 5: Poor Hiring Quality**\n\nAgents hired because the seat needed to be filled — not because they were the right fit — leave faster. Building a pipeline of pre-screened candidates before the urgent need arises is one of the most effective structural solutions."
      },
      {
        type: "visual",
        visual: {
          type: "comparison-table",
          data: {
            title: "The 5 Attrition Fixes: Impact vs Effort",
            headers: ["Fix", "Attrition Impact", "Cost", "Time to See Results"],
            rows: [
              ["Honest JDs + expectation setting", "High 🟢", "Zero", "Immediate"],
              ["Structured Day 1 onboarding", "High 🟢", "Low", "1-2 weeks"],
              ["Team Lead manager training", "High 🟢", "Medium", "1-2 quarters"],
              ["Visible career path document", "Medium 🟡", "Zero", "1 month"],
              ["AI-assisted predictive screening", "Medium 🟡", "Low", "3-6 months"],
            ],
            highlight: 0
          }
        }
      },
      {
        type: "text",
        content: "**The data flywheel that compounds over time**: every hire you make contains information that could make your next hire better. A candidate who scored 82 on your assessment and became your best-performing agent tells you something. A candidate who scored 91 but left in 60 days tells you something different. Most companies throw this information away — they have no system for connecting hire outcomes back to the hiring signals that predicted them.\n\nZorvis AI's intelligence engine automatically connects pre-hire assessment scores to post-hire outcomes (90-day retention, manager rating) and surfaces which score ranges actually predict success in your specific context. The flywheel starts the day you start hiring — and compounds for as long as you use it."
      }
    ]
  },

  {
    slug: "wps-sif-file-generation-uae-guide",
    title: "UAE WPS SIF File: The Complete Guide for HR and Finance Teams",
    description: "The Wages Protection System SIF file explained step-by-step — format, required fields, common errors, and how to automate generation to avoid AED 1,000/day fines.",
    category: "UAE Compliance",
    tags: ["wps sif uae", "wages protection system uae", "uae payroll compliance", "mohre wps", "sif file format uae"],
    date: "2026-04-10",
    readTime: 9,
    featured: true,
    heroTag: "UAE COMPLIANCE",
    sections: [
      {
        type: "text",
        content: "The Wages Protection System (WPS) is not optional in the UAE. Under Federal Decree-Law No. 33 of 2021, all private sector employers must transfer salaries through WPS by the agreed payment date. The penalty for non-compliance: AED 1,000 per employee per day.\n\nFor a 50-person company, a 5-day payment delay costs AED 250,000. For a 200-person company, the same delay costs AED 1,000,000. These are not hypothetical fines — MOHRE enforcement has become increasingly systematic, and bank integrations mean MOHRE can see salary payment timing in real time.\n\nThe mechanism is the SIF file — Salary Information File. This is a structured pipe-delimited text file that you submit to your bank each month. The bank uses it to process payments and simultaneously reports data to MOHRE."
      },
      {
        type: "visual",
        visual: {
          type: "stat-grid",
          data: {
            title: "WPS Compliance: The Stakes",
            stats: [
              { value: "AED 1,000", label: "Fine per employee per day for WPS non-compliance", color: "#EF4444" },
              { value: "14 days", label: "Maximum permitted delay after payroll date", color: "#F59E0B" },
              { value: "97%+", label: "OCR accuracy for Emirates ID data extraction", color: "#4F46E5" },
              { value: "3-5 hrs", label: "Time to manually generate SIF for 50 employees", color: "#EF4444" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**The SIF File Format**\n\nThe SIF file is a pipe-delimited text file where each row represents one employee payment. The format is fixed by the UAE government. Every bank connected to WPS expects exactly the same structure.\n\nRequired fields for each employee row:\n- **MOL Employer Reference Number** — your MOHRE establishment number\n- **Employee ID (MOL)** — the employee's labour card number\n- **Employee Name** — must match the Labour Contract exactly (full legal name, no nicknames)\n- **Nationality** — ISO country code\n- **Emirates ID Number** — 15-digit format\n- **Bank Name** and **IBAN** — the employee's UAE bank account details\n- **Basic Salary, Housing Allowance, Transport Allowance, Other Allowances** — in AED\n- **Deductions** — any authorised deductions\n- **Net Salary** — the amount the employee actually receives"
      },
      {
        type: "visual",
        visual: {
          type: "process-flow",
          data: {
            title: "Monthly WPS Process: Manual vs Automated",
            steps: [
              { icon: "👤", title: "Collect Employee Data", desc: "Name, EID, IBAN, salary components", time: "Manual: 2hrs | Auto: Real-time" },
              { icon: "📊", title: "Calculate Net Salary", desc: "Allowances + OT - deductions per employee", time: "Manual: 1hr | Auto: Instant" },
              { icon: "📄", title: "Generate SIF File", desc: "Pipe-delimited format with all required fields", time: "Manual: 2hrs | Auto: 1 click" },
              { icon: "🏦", title: "Submit to Bank", desc: "Upload SIF file via bank portal", time: "15 min" },
              { icon: "✅", title: "MOHRE Confirmation", desc: "Bank reports to MOHRE automatically", time: "Same day" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**The 5 Most Common SIF Errors (and how to avoid them)**\n\n1. **Name mismatches** — The most frequent error. HR databases often store employee nicknames or shortened names. The SIF must contain the full legal name exactly as it appears in the Labour Contract. Even a single character difference causes a payment failure.\n\n2. **Stale IBAN numbers** — When an employee changes their bank account, most HR systems are not updated immediately. An invalid IBAN causes the entire payment run to fail for that employee, triggering a WPS violation.\n\n3. **Missing new joiners** — Employees added to the payroll after the previous SIF submission are sometimes omitted from the current month's file because the HR team is working from a stale extract.\n\n4. **Expired Emirates IDs** — MOHRE validates Emirates ID numbers and rejects SIF rows where the ID is expired or invalid.\n\n5. **Incorrect salary split** — The SIF requires basic salary to be stated separately from allowances. HR teams that store total salary without the component breakdown generate SIF files that do not pass bank validation."
      },
      {
        type: "visual",
        visual: {
          type: "comparison-table",
          data: {
            title: "WPS Tools: Manual vs Zorvis AI vs Other Platforms",
            headers: ["Capability", "Excel Manual", "Zorvis AI UAE Module", "ZenHR / Bayzat"],
            rows: [
              ["SIF file generation", "3-5 hrs manual", "1 click automated", "Semi-automated"],
              ["Emirates ID OCR", "Manual entry", "Auto-extract on upload", "Manual entry"],
              ["IBAN validation", "No", "Real-time check", "Basic check"],
              ["Expiry alerts (EID/Visa)", "Manual calendar", "Auto 90/60/30-day alerts", "Basic alerts"],
              ["Name mismatch detection", "No", "Labour contract comparison", "No"],
            ],
            highlight: 1
          }
        }
      },
      {
        type: "text",
        content: "**Building a single source of truth**\n\nFor companies staying on manual processes, the minimum viable WPS infrastructure is a single master spreadsheet with the following fields per employee: MOL Employee ID, full legal name (passport-matching), nationality, Emirates ID number and expiry, bank name, IBAN, basic salary, housing allowance, transport allowance, other allowances. Update this spreadsheet immediately when any data changes — do not wait for month-end.\n\nThis turns a 3-hour monthly exercise into a 20-minute one. More importantly, it eliminates the category of errors caused by working from multiple inconsistent data sources.\n\nFor companies doing 50+ employees, automation is not a luxury — it is a compliance requirement in practice. Zorvis AI's UAE module maintains all employee WPS data as structured fields, validates IBAN and Emirates ID on entry, surfaces expiry alerts 90/60/30 days in advance, and generates the SIF file in one click. The risk of a AED 1,000/day fine from a missed file or invalid field is simply too high to manage manually at scale."
      }
    ]
  },

  {
    slug: "keka-vs-darwinbox-vs-zorvis-india",
    title: "Keka vs Darwinbox vs Zorvis AI: Which HR Software for Your Indian Company in 2026?",
    description: "An honest feature-by-feature comparison of the three most commonly evaluated HR platforms for 50-500 employee Indian companies. No vendor bias — just the facts.",
    category: "HR Software India",
    tags: ["keka vs darwinbox india", "hr software india sme", "zorvis ai review", "best hrms india 2026", "darwinbox alternative india"],
    date: "2026-04-14",
    readTime: 10,
    featured: true,
    heroTag: "HR SOFTWARE",
    sections: [
      {
        type: "text",
        content: "If you are a 100-300 person Indian company evaluating HR software, you have almost certainly been demo'd by Keka and Darwinbox. Zorvis AI is a newer entrant with a different focus. These three represent three different philosophies about what the most important HR problem to solve is — and choosing the wrong one wastes months of implementation time and significant money.\n\nThis is an honest comparison. We will tell you where each platform is genuinely strong and where it is genuinely weak."
      },
      {
        type: "visual",
        visual: {
          type: "comparison-table",
          data: {
            title: "Keka vs Darwinbox vs Zorvis AI: Feature Overview",
            headers: ["Feature", "Keka", "Darwinbox", "Zorvis AI"],
            rows: [
              ["India payroll (PF/ESI/TDS)", "✅ Excellent", "✅ Good", "⚠️ Phase 2"],
              ["AI CV screening", "⚠️ Keyword only", "⚠️ Keyword only", "✅ Predictive ML"],
              ["Assessment delivery", "❌ Email only", "❌ Email only", "✅ WhatsApp/Email/SMS/Web"],
              ["Assessment completion rate", "~45%", "~40%", "~83%"],
              ["Digital offer letters", "⚠️ Basic", "⚠️ Basic", "✅ Auto-generated"],
              ["Hiring Kanban pipeline", "✅ Good", "✅ Good", "✅ Excellent"],
              ["Performance management", "⚠️ Basic", "✅ Excellent", "⚠️ Phase 2"],
              ["UAE compliance module", "❌", "❌", "✅ Full module"],
              ["Employee self-service channels", "Web + App", "Web + App", "WhatsApp + Email + Web + App"],
              ["Free tier", "❌ 30-day trial", "❌ No", "✅ Permanent free"],
            ],
            highlight: 2
          }
        }
      },
      {
        type: "text",
        content: "**Keka: The Safe, Well-Tested Choice**\n\nKeka has been the go-to HRMS for the 100-500 employee range in India for four years. The product is solid, the India-specific payroll module is extremely well-tested, and leave management is flexible and configurable. Implementation is reasonably smooth with standard onboarding support.\n\nPricing: ₹6,000-10,000/month for 100 employees depending on modules.\n\n**Where Keka excels**: payroll accuracy and India statutory compliance (PF, ESI, PT, TDS). If getting payroll right is your primary concern, Keka's payroll module is the most battle-tested option in the Indian SME market.\n\n**Where Keka falls short**: AI features are primarily keyword-based CV matching, not predictive screening. The mobile app experience is average. Support quality can be inconsistent at peak periods. Assessment delivery is email-only — which produces 40-50% completion rates for BPO and blue-collar candidates."
      },
      {
        type: "visual",
        visual: {
          type: "stat-grid",
          data: {
            title: "Platform at a Glance",
            stats: [
              { value: "₹6-10K", label: "Keka monthly cost (100 employees)", color: "#F59E0B" },
              { value: "₹15K+", label: "Darwinbox monthly cost (100 employees)", color: "#EF4444" },
              { value: "₹9,999", label: "Zorvis AI Growth plan (unlimited candidates)", color: "#4F46E5" },
              { value: "Free", label: "Zorvis AI Starter tier — permanent, no expiry", color: "#059669" },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**Darwinbox: Right Tool, Wrong Stage**\n\nDarwinbox is genuinely excellent software — performance management is one of the best in India, the platform scales to 10,000+ employees easily, and the analytics are genuinely useful at enterprise scale. The problem is not the product — it is the price-to-value ratio for companies below 300 employees.\n\nImplementation takes 3-5 months and costs ₹3-8 lakhs in services. Ongoing subscription is typically ₹15,000+ per month. You need at least a part-time HRMS admin to keep configuration current. The features that make Darwinbox genuinely excellent — complex org structures, sophisticated performance cycles, multi-country payroll — are features a 150-person company simply does not need yet.\n\n**Where Darwinbox excels**: performance management, complex organisational structures, enterprise analytics.\n\n**Where Darwinbox falls short**: overkill for sub-300 companies, long implementation timeline, poor hiring intelligence despite being marketed as AI-powered."
      },
      {
        type: "visual",
        visual: {
          type: "timeline",
          data: {
            title: "Implementation Reality: Time to First Value",
            items: [
              { platform: "Zorvis AI", time: "Day 1", desc: "Post first job, start screening CVs with AI ranking. Free tier, no implementation required." },
              { platform: "Keka", time: "Week 2-4", desc: "HR module live after standard onboarding. Payroll typically takes 60 days to configure fully." },
              { platform: "Darwinbox", time: "Month 3-5", desc: "Full implementation with dedicated project manager. 8-12 configuration workshops before go-live." },
            ]
          }
        }
      },
      {
        type: "text",
        content: "**Zorvis AI: Right Tool if Hiring is Your Bottleneck**\n\nZorvis AI was not built to be another HRMS. It was built around the premise that the most important HR problem for growing Indian SMEs is getting the right people in efficiently and reducing early attrition. Everything in the platform is built around this thesis.\n\nAI-powered CV ranking with explained scores (not just keyword matching), assessments delivered on the candidate's preferred channel with 80%+ completion rates, digital offer letters auto-generated from job data, and a hire-to-retire intelligence engine that connects pre-hire signals to post-hire outcomes. The HR OS layer (leave, payroll, performance) is in Phase 2.\n\n**Where Zorvis AI excels**: hiring intelligence, channel-agnostic assessment delivery, UAE compliance for companies with cross-border hiring, data flywheel that improves screening quality over time.\n\n**Where Zorvis AI falls short**: payroll and HR OS features are Phase 2, not yet live. If payroll accuracy is your primary concern today, Keka is the right choice.\n\n**The honest recommendation**: Use Zorvis AI's free tier for hiring (start immediately, no implementation). Use Keka for payroll and HRMS when you need it. Do not buy Darwinbox until you are above 300 employees and have a dedicated HR team to manage it."
      }
    ]
  },
];
