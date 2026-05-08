export type Template = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  format: "Word" | "Excel" | "Email";
  popular?: boolean;
  preview: string;
  content: string;
};

export const TEMPLATE_CATEGORIES = ["All", "Offer Letters", "Job Descriptions", "Interview Scorecards", "Onboarding", "Compliance"];

export const ALL_TEMPLATES: Template[] = [
  {
    slug: "offer-letter-india-standard",
    title: "Standard Offer Letter — India (Full CTC Breakup)",
    description: "Legally sound offer letter for Indian companies. Covers CTC breakup, joining date, probation, and at-will clause. Used by 200+ companies.",
    category: "Offer Letters",
    tags: ["offer letter india", "employment letter india", "joining letter", "offer letter template", "hr template india"],
    format: "Word",
    popular: true,
    preview: "Covers: CTC breakup (Basic, HRA, Special Allowance, PF, Bonus) · Probation & notice period · BGV condition · At-will clause · Joining deadline",
    content: `[COMPANY LETTERHEAD]
Date: [DATE]

Dear [CANDIDATE NAME],

We are pleased to offer you the position of [DESIGNATION] at [COMPANY NAME], based at our [LOCATION] office, reporting to [MANAGER NAME / TITLE].

──────────────────────────────────────────
COMPENSATION (Annual CTC: ₹[AMOUNT])
──────────────────────────────────────────
Component               Monthly (₹)   Annual (₹)
Basic Salary            [AMOUNT]      [AMOUNT]
House Rent Allowance    [AMOUNT]      [AMOUNT]
Special Allowance       [AMOUNT]      [AMOUNT]
PF (Employer's Share)   [AMOUNT]      [AMOUNT]
                        ─────────────────────
Monthly Gross           [AMOUNT]      [AMOUNT]
Annual Bonus (variable) —             Up to ₹[AMOUNT]
Total CTC               —             ₹[AMOUNT]

──────────────────────────────────────────
KEY TERMS
──────────────────────────────────────────
Joining Date:  [DATE]
Probation:     [90] days from date of joining
               Notice during probation: [7] days either side
Notice Period: [30/60/90] days post-confirmation (either side)
Work Location: [ADDRESS / Remote / Hybrid — [X] days/week in office]

CONDITIONS
This offer is subject to:
1. Satisfactory Background Verification (employment, education, criminal)
2. Submission of original documents on or before Day 1
3. Execution of Confidentiality and IP Assignment Agreement
4. Medical fitness (if applicable for role)

Material discrepancies found during BGV will automatically rescind this offer.

ACCEPTANCE
Please sign and return this letter by [DATE]. Failure to respond by this date will result in the offer lapsing.

We look forward to welcoming you to [COMPANY NAME].

Warm regards,

[HR MANAGER NAME]
[DESIGNATION] | [COMPANY NAME]
[EMAIL] | [PHONE]

──────────────────────────────────────────
ACCEPTANCE

I, [CANDIDATE NAME], accept the above offer of employment on the terms stated herein.

Signature: _________________________

Date: _________________________

Note: Signing this letter constitutes your acceptance of the offer. A formal employment contract will follow on joining.`,
  },

  {
    slug: "jd-bpo-customer-service-agent",
    title: "BPO Customer Service Agent — Job Description",
    description: "Ready-to-post JD for BPO customer service agents. Honest about shifts, metrics, and the growth path. Attracts candidates who know what they are signing up for.",
    category: "Job Descriptions",
    tags: ["bpo job description", "customer service jd india", "call centre jd", "bpo agent jd template", "bpo hiring india"],
    format: "Word",
    popular: true,
    preview: "Covers: Role overview · Key responsibilities · Performance metrics · Requirements · Shift details · Compensation & growth path",
    content: `JOB TITLE: Customer Service Agent
LOCATION: [CITY] — On-site (rotational shifts)
EXPERIENCE: 0–2 years (freshers welcome)
COMPENSATION: ₹[AMOUNT]–[AMOUNT] CTC + Night Allowance + Performance Incentive

──────────────────────────────────────────
ABOUT THE ROLE
──────────────────────────────────────────
You will be the voice of [CLIENT/BRAND] for Indian customers, handling [inbound/outbound] calls to resolve queries, troubleshoot issues, and deliver a consistently positive experience.

This is not a stepping stone — it is a career. [X]% of our Team Leads and Operations Managers started as agents.

──────────────────────────────────────────
WHAT YOU WILL DO
──────────────────────────────────────────
• Handle [X] calls/day across [process description] — resolving within defined SLA
• Achieve CSAT scores of [X]%+ consistently
• Update CRM accurately after each interaction (no shortcuts)
• Escalate complex issues to the right team promptly
• Follow compliance and quality guidelines on every call

──────────────────────────────────────────
THE METRICS YOU WILL BE MEASURED ON
──────────────────────────────────────────
• AHT (Average Handle Time): [X] minutes
• CSAT: [X]%+
• FCR (First Call Resolution): [X]%+
• Attendance: [X]%+ monthly

──────────────────────────────────────────
WHAT WE ARE LOOKING FOR
──────────────────────────────────────────
✅ Minimum qualification: 12th pass (graduation preferred)
✅ Fluent in [Hindi / English / Regional language] — spoken and written
✅ Typing speed: 25+ WPM on basic computer
✅ Willing to work rotational shifts including nights (with allowance)
✅ Within [X] km of [OFFICE ADDRESS] — transport plan ready
✅ Basic smartphone and internet access at home

❌ IMPORTANT: This role involves rotational shifts, including nights 10pm–6am. Please apply only if you are genuinely willing and able to work these shifts. Our night differential is ₹[AMOUNT]/month.

──────────────────────────────────────────
WHAT WE OFFER
──────────────────────────────────────────
• CTC: ₹[AMOUNT]–[AMOUNT] fixed
• Night Shift Allowance: ₹[AMOUNT]/month (on night shifts)
• Performance Incentive: Up to ₹[AMOUNT]/month on CSAT targets
• Health Insurance: Covered from Day 1
• 5-day work week (for [PROCESS NAME])
• Fast-track to Team Lead: Top performers promoted in [X]–[X] months

──────────────────────────────────────────
HOW TO APPLY
──────────────────────────────────────────
Send your CV to [EMAIL] or apply via [PLATFORM LINK].
Walk-in also welcome: [ADDRESS], [DAYS], [TIME].

[COMPANY NAME] is an equal opportunity employer. All qualified applicants are considered regardless of gender, religion, caste, or disability.`,
  },

  {
    slug: "interview-scorecard-bpo-agent",
    title: "BPO Agent Interview Scorecard (Structured)",
    description: "Structured scorecard for BPO HR interviews. 4 sections, 1-5 scale, weighted scoring, and a clear hire/no-hire recommendation section. Eliminates inconsistent evaluation.",
    category: "Interview Scorecards",
    tags: ["bpo interview scorecard", "call centre scorecard", "structured interview india", "hr interview template bpo", "candidate evaluation bpo"],
    format: "Word",
    popular: true,
    preview: "Covers: Communication (40%) · Attitude & motivation (30%) · Role comprehension (20%) · Logistics (10%) · Hire recommendation",
    content: `BPO AGENT INTERVIEW SCORECARD
──────────────────────────────────────────
Candidate Name: _________________________
Position Applied For: ___________________
Process: ________________________________
Date: ___________________________________
Interviewer: ____________________________

SCORING GUIDE: 1 = Poor | 2 = Below Average | 3 = Average | 4 = Good | 5 = Excellent
──────────────────────────────────────────

SECTION 1: COMMUNICATION (Weight: 40%)
─────────────────────────────────────────
                                        Score (1-5)  Notes
English fluency (spoken, sustained)     _______      ______________________
Hindi / regional language               _______      ______________________
Clarity and coherence of speech         _______      ______________________
Listening comprehension                 _______      ______________________
Ability to simplify and explain         _______      ______________________

Section 1 Raw Score: _____ / 25
Weighted Score (×0.40): _____

SECTION 2: ATTITUDE & MOTIVATION (Weight: 30%)
──────────────────────────────────────────────
                                        Score (1-5)  Notes
Willingness for rotational shifts       _______      ______________________
Handling-a-difficult-customer (mock)    _______      ______________________
Career motivation for BPO (authentic?)  _______      ______________________
Energy and engagement in interview      _______      ______________________

Section 2 Raw Score: _____ / 20
Weighted Score (×0.30): _____

SECTION 3: ROLE COMPREHENSION (Weight: 20%)
─────────────────────────────────────────────
                                        Score (1-5)  Notes
Understanding of the role and process   _______      ______________________
Reading comprehension (passage given)   _______      ______________________
Basic numerical / data accuracy         _______      ______________________

Section 3 Raw Score: _____ / 15
Weighted Score (×0.20): _____

SECTION 4: LOGISTICS (Weight: 10%)
────────────────────────────────────
                                        Score (1-5)  Notes
Commute distance and transport plan     _______      ______________________
Joining availability and notice period  _______      ______________________

Section 4 Raw Score: _____ / 10
Weighted Score (×0.10): _____

──────────────────────────────────────────
TOTAL WEIGHTED SCORE: _____ / 100
──────────────────────────────────────────

RECOMMENDATION:
☐ Strong Hire   (Score 80+)
☐ Hire          (Score 65–79)
☐ Second Opinion (Score 50–64)
☐ No Hire       (Score <50)

Primary reason for recommendation:
_____________________________________________
_____________________________________________

Red flags noted (if any):
_____________________________________________

NEXT STEP:
☐ Send to Ops Round        ☐ Send Language Test
☐ Issue Offer              ☐ Reject (email sent)

Interviewer Signature: _________________ Date: _________

──────────────────────────────────────────
SCORING CALIBRATION NOTES
──────────────────────────────────────────
Score 5 on English: Sustained conversation with no comprehension gaps, natural pacing, correct grammar >85% of time.
Score 5 on Motivation: Specific, credible reason for choosing BPO. Can name 2+ things they know about the process.
Score 1 on Logistics: Lives >20km away with no transport plan. Cannot join within 2 weeks.`,
  },

  {
    slug: "employee-onboarding-checklist-india",
    title: "Employee Onboarding Checklist — Day 1 to 90 Days (India)",
    description: "Complete onboarding checklist for HR managers, managers, and IT teams. Covers pre-joining, Day 1, Week 1, 30-day review, and 90-day probation confirmation.",
    category: "Onboarding",
    tags: ["employee onboarding checklist india", "new joiner checklist", "hr onboarding india", "probation checklist", "day 1 onboarding"],
    format: "Word",
    popular: true,
    preview: "Covers: Pre-joining actions · Day 1 HR + IT + Manager tasks · Week 1 induction plan · 30-day and 90-day review forms · Probation decision",
    content: `EMPLOYEE ONBOARDING CHECKLIST
[COMPANY NAME]
──────────────────────────────────────────
Employee Name: _________________________
Designation: ___________________________
Department: ____________________________
Manager: _______________________________
Buddy: _________________________________
Date of Joining: ________________________
HR Owner: ______________________________

──────────────────────────────────────────
PRE-JOINING (HR — 1 week before DOJ)
──────────────────────────────────────────
☐ Countersigned offer letter received and filed
☐ Welcome email sent (includes: Day 1 address, time, what to bring)
☐ Laptop/workstation ordered and configured
☐ Company email ID created
☐ Slack/Teams added to relevant channels
☐ HRMS profile created
☐ Day 1 plan communicated to manager and buddy
☐ Desk allocated

──────────────────────────────────────────
DAY 1 — MORNING (HR: 9am–12pm)
──────────────────────────────────────────
☐ Warm welcome at reception
☐ Company welcome kit given (if applicable)
☐ Document collection:
   ☐ Aadhaar (original + copy)
   ☐ PAN card
   ☐ Educational certificates (originals)
   ☐ Last employer relieving letter
   ☐ 2 passport photographs
   ☐ Bank account details (IFSC, account number)
   ☐ Emergency contact details
☐ HR policies walkthrough (POSH, leave, code of conduct)
☐ Company overview (mission, product, org chart)
☐ Physical tour of office

DAY 1 — AFTERNOON (IT + Manager: 1pm–5pm)
──────────────────────────────────────────
☐ Laptop setup: email, Slack, GitHub (if applicable), tools
☐ Systems access verified (CRM, HRMS, document storage)
☐ Badge / access card issued
☐ Manager 1:1: role context, 30-60-90 day expectations
☐ Buddy introduction (informal coffee/lunch)

──────────────────────────────────────────
WEEK 1 (Manager + Buddy)
──────────────────────────────────────────
☐ Product/service deep dive (internal training sessions)
☐ Meet all key stakeholders (list provided by manager)
☐ Shadow senior colleague for at least 2 days
☐ First small task assigned by Day 3
☐ Daily 15-min check-in with manager or buddy

──────────────────────────────────────────
30-DAY REVIEW (Manager)
──────────────────────────────────────────
Date: _________________________
Meeting held with: Manager ☐   HR ☐

How is the employee settling in? _______________
Any concerns or blockers identified? _______________
Training needs identified? _______________
Employee's feedback on onboarding: _______________

Manager sign-off: _________________ Date: _________

──────────────────────────────────────────
60-DAY REVIEW (Manager)
──────────────────────────────────────────
Date: _________________________

Performance against 60-day targets (rate 1–5): _____
Specific areas of strength: _______________
Specific areas for development: _______________

Manager sign-off: _________________ Date: _________

──────────────────────────────────────────
90-DAY PROBATION REVIEW (Manager + HR)
──────────────────────────────────────────
Date: _________________________

Overall performance rating (1–5): _____
Probation Recommendation:
☐ CONFIRM — all expectations met
☐ EXTEND by [30/60] days — reason: ________________
☐ TERMINATE — reason: ___________________________

Confirmation letter issued: ☐ Yes  Date: _________

Manager: _________________ HR: _________________ Date: _________
Employee acknowledgement: _________________ Date: _________`,
  },

  {
    slug: "background-verification-checklist-india",
    title: "Background Verification (BGV) Checklist — India",
    description: "Structured BGV checklist for Indian HR managers. Covers identity, employment history, education, and criminal checks with vendor comparison and discrepancy handling guide.",
    category: "Compliance",
    tags: ["background verification india", "bgv checklist india", "employee verification india", "bgv template hr india", "pre employment checks india"],
    format: "Word",
    preview: "Covers: Identity verification · Employment history (2 employers) · Education checks · Reference calls · Discrepancy handling · BGV vendors comparison",
    content: `BACKGROUND VERIFICATION CHECKLIST
[COMPANY NAME]
──────────────────────────────────────────
Candidate: _____________________________
Position: ______________________________
HR Owner: ______________________________
BGV Vendor (if used): __________________
Offer Date: ____________________________
BGV Initiated: _________________________
Target Completion: ______________________

──────────────────────────────────────────
1. IDENTITY VERIFICATION
──────────────────────────────────────────
☐ Aadhaar Card verified (UIDAI API or manual)
   Result: ☐ Match  ☐ Mismatch — Notes: _________
☐ PAN Card verified
   Result: ☐ Match  ☐ Mismatch — Notes: _________
☐ Passport (if applicable)
   Result: ☐ Valid  ☐ Expired — Expiry: _________

──────────────────────────────────────────
2. EMPLOYMENT HISTORY (last [X] years)
──────────────────────────────────────────
EMPLOYER 1:
Company: ________________________
Dates on CV: ________ to ________
Designation on CV: ________________
Verified dates: ________ to ________
Verified designation: ________________
Reference called: ☐ Yes  ☐ No
Reference name/position: _______________
Would they rehire? ☐ Yes  ☐ No  ☐ Conditionally
Discrepancy? ☐ None  ☐ Minor  ☐ Major — Notes: _____

EMPLOYER 2:
[Same format as above]

──────────────────────────────────────────
3. EDUCATION VERIFICATION
──────────────────────────────────────────
Highest degree claimed: ________________
Institution: __________________________
Year claimed: _________________________
Verification method: ☐ Institution call  ☐ DigiLocker  ☐ Vendor
Verified: ☐ Confirmed  ☐ Not confirmed — Notes: _____

Additional certificates (if role-critical):
Certificate: ___________ Verified: ☐ Yes ☐ No

──────────────────────────────────────────
4. REFERENCE CHECK (minimum 2)
──────────────────────────────────────────
Reference 1:
Name: ______________ Relationship: ______________
Company: ______________ Contact: ________________
Key question — Would they rehire? ☐ Yes  ☐ No  ☐ Conditionally
Overall impression (1–5): _____
Notes: _______________________________________________

Reference 2:
[Same format as above]

──────────────────────────────────────────
5. CRIMINAL / COURT RECORD CHECK
──────────────────────────────────────────
☐ District court record check initiated
   Jurisdiction(s) checked: ______________________
   Outcome: ☐ Clear  ☐ Record found — Details: _____

──────────────────────────────────────────
OVERALL BGV OUTCOME
──────────────────────────────────────────
☐ CLEAR — Proceed with joining as planned
☐ MINOR DISCREPANCY — Candidate informed, documented, proceed
☐ MAJOR DISCREPANCY — Offer rescinded. Candidate notified in writing on [DATE].

HR sign-off: _________________ Date: _________

──────────────────────────────────────────
BGV VENDOR QUICK REFERENCE (India)
──────────────────────────────────────────
AuthBridge:  Best coverage, preferred for 50+ checks/month
IDfy:        API-first, good for HRMS integration
Springverify: Mid-market pricing, good for SMEs
Direct:      Call previous employer HR — still the most reliable for employment verification

Typical turnaround: Identity (same day), Employment (3–7 days), Education (3–14 days), Criminal (5–10 days)
Typical cost per candidate: ₹800–2,500 depending on scope`,
  },
];
