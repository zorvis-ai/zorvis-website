"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  ShoppingBag,
  Truck,
  Briefcase,
  Factory,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Nav, Footer } from "@/components/Nav";

type Industry = {
  id: string;
  icon: typeof Headphones;
  label: string;
  shortLabel: string;
  stat: string;
  pains: string[];
  solutions: string[];
  scenario: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "bpo",
    icon: Headphones,
    label: "BPO & Contact Centres",
    shortLabel: "BPO",
    stat: "BPO companies receive 800+ applications for every 50 seats. Industry 90-day attrition: 40%. Average time to fill: 3 weeks.",
    pains: [
      "Voice and English fluency cannot be tested via traditional CV screening — you only know after the in-person interview, often after wasting half a day.",
      "High no-show rate at training (35%+) because candidates accept multiple offers and ghost the lower-priority ones.",
      "The data on which hires actually stayed past 90 days never feeds back into screening — every hiring round starts from scratch.",
    ],
    solutions: [
      "Voice + English aptitude test sent on WhatsApp, completed in under 12 minutes, scored automatically.",
      "Offer acceptance tracking with timestamp and IP capture — you know who's serious and who's window-shopping.",
      "Test scores at hire connect to performance ratings 90 days later. Within 6 months, your scoring is calibrated to who actually succeeds at your company.",
    ],
    scenario:
      "A 200-seat BPO posts a job for 50 voice agents. 432 CVs arrive in 48 hours. Zorvis ranks them in 8 minutes. The HR manager sends voice + English tests on WhatsApp to the top 80. By morning, 71% have completed. The dashboard shows 30 candidates who scored above 80. Interviews happen in 2 days, not 2 weeks.",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    label: "Retail & QSR",
    shortLabel: "Retail",
    stat: "Retail and QSR chains hire 50–200 store staff per month across multiple locations, with 60%+ of applicants applying via WhatsApp shares.",
    pains: [
      "Hiring is decentralised — every store manager runs their own process, with no consistency in candidate quality.",
      "New store rollouts demand 30+ hires in two weeks. Manual screening cannot keep pace.",
      "Background verification gets skipped under time pressure, leading to compliance and theft incidents downstream.",
    ],
    solutions: [
      "Single dashboard across all locations. Headquarters sees who's being hired, who scored what, and which stores have hiring gaps.",
      "WhatsApp-native flow: candidates apply, test, interview, and accept offers without ever opening an email.",
      "BGV ordered with one click. Results back in 48 hours. No store manager has to chase a vendor again.",
    ],
    scenario:
      "A retail chain rolls out 12 new stores in Tier-2 cities, needing 360 hires in 30 days. Zorvis distributes the job to all stores via WhatsApp. 4,200 applications come in. AI ranks all of them. Store managers see only candidates above 70% match — about 30 each. Interviews happen at the store. BGV runs automatically on offer acceptance. All 360 stores staffed in 26 days.",
  },
  {
    id: "logistics",
    icon: Truck,
    label: "Logistics & E-commerce",
    shortLabel: "Logistics",
    stat: "Last-mile and warehouse hiring sees 45–60% 90-day attrition. Most candidates have basic smartphones and limited app fluency.",
    pains: [
      "Candidate population doesn't read English well, doesn't have email, and won't download new apps.",
      "Document collection (Aadhaar, driving licence, address proof) is slow and paper-heavy at scale.",
      "Fitness and ability to work shifts cannot be verified before hire — leading to fast dropouts.",
    ],
    solutions: [
      "Hindi, Tamil, Telugu test interfaces. Functional literacy + situational judgment tests, not abstract aptitude.",
      "Document collection via WhatsApp camera. Auto-OCR extracts and validates. No physical paperwork.",
      "Pre-hire screening for shift availability, vehicle ownership, area familiarity — all conversational, all on WhatsApp.",
    ],
    scenario:
      "A logistics firm needs 180 delivery partners across Bangalore in 14 days. Job posted on Naukri + WhatsApp groups. 2,100 applications. Zorvis pre-screens for vehicle ownership, route familiarity, and document readiness. Top 240 get a 7-minute Hindi voice + situational judgment test. 178 score above threshold. Documents collected via WhatsApp. 180 hires onboarded in 11 days.",
  },
  {
    id: "staffing",
    icon: Briefcase,
    label: "Staffing Agencies",
    shortLabel: "Staffing",
    stat: "Recruitment agencies handle 20+ employer clients simultaneously, each with their own candidate quality bar and hiring volume.",
    pains: [
      "Multi-client management on spreadsheets is chaotic. A candidate scored for one client gets re-screened for another.",
      "Agencies cannot offer differentiated quality without expensive testing tools, eating into margin.",
      "Placement quality data — who actually stayed and performed — is lost between clients, so the agency can't sell on outcomes.",
    ],
    solutions: [
      "Multi-client dashboard with separate Kanban pipelines per employer. White-label with your agency's logo on tests and offers.",
      "AI testing bundled at zero marginal cost. You charge clients premium for quality screening; we don't bill per test.",
      "Anonymised placement quality data across clients becomes your competitive advantage. 'Our candidates stay 32% longer than industry average' — proven.",
    ],
    scenario:
      "A 25-employer staffing agency in Mumbai uses Zorvis Agency Growth. They run separate pipelines for each client, all branded with the agency logo. Candidates take WhatsApp tests under the agency's brand. Over 6 months, the agency builds a placement quality dataset that lets them charge 18% premium pricing — citing real outcome data from their own platform.",
  },
  {
    id: "manufacturing",
    icon: Factory,
    label: "Manufacturing",
    shortLabel: "Manufacturing",
    stat: "Manufacturing SMEs run seasonal hiring waves of 50–500 people, with PF, ESI, and contract labour compliance at every step.",
    pains: [
      "Compliance burden (PF, ESI, TDS, contract labour) consumes HR time that should go to hiring quality.",
      "Blue-collar candidates fail abstract aptitude tests not because they're unqualified — the tests are designed for white-collar roles.",
      "Probation reviews and 30/60/90-day milestones get tracked on email reminders, with predictable misses.",
    ],
    solutions: [
      "Compliance calendar with 30/7/1-day reminders for every PF/ESI/TDS deadline. Non-cancellable until acknowledged.",
      "Blue-collar-appropriate testing: functional literacy, situational judgment, document readiness. Not IQ puzzles.",
      "Probation review milestones auto-created at hire. HR is alerted at day 25 to review, not on day 91 when the window has closed.",
    ],
    scenario:
      "A 250-employee manufacturing unit hires 80 seasonal workers for a 3-month contract. Zorvis runs functional Hindi/Marathi assessments via WhatsApp. PF/ESI compliance is auto-scheduled. At day 85, HR is alerted on every contract worker for renewal/exit decision. Zero compliance penalties for the year.",
  },
  {
    id: "hospitality",
    icon: Building2,
    label: "Hospitality & Services",
    shortLabel: "Hospitality",
    stat: "Hospitality businesses in India and UAE rely on a South Asian workforce with cross-border movement, complex documentation, and language requirements.",
    pains: [
      "Pre-screening candidates in their home country before they fly to UAE is logistically painful and easy to skip.",
      "Emirates ID, residence visa, and labour contract management is paper-heavy and error-prone at scale.",
      "Language abilities (English, Arabic, Hindi, Filipino) need to be tested before deployment, not discovered after.",
    ],
    solutions: [
      "Pre-test workers in India before they board the flight. Multi-language interfaces (English, Hindi, Arabic, Tagalog).",
      "Emirates ID and labour card OCR. WPS SIF generation. Bilingual Arabic/English offer letters compliant with UAE Labour Law.",
      "Visa expiry, Emirates ID renewal, contract milestones tracked on a unified compliance calendar with 90/30/7-day alerts.",
    ],
    scenario:
      "A Dubai hotel chain hires 60 service staff from Mumbai and Manila. Zorvis pre-tests language fluency and service aptitude in their home country, on WhatsApp, in their native language. Offer letters issued in bilingual Arabic/English. Emirates ID and visa documents collected via WhatsApp camera before the flight. Day 1 in Dubai is onboarding, not paperwork.",
  },
];

export default function VolumeHiringPage() {
  const [activeTab, setActiveTab] = useState<string>("bpo");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && INDUSTRIES.some((i) => i.id === hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        document.getElementById("industry-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const active = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];

  return (
    <main className="bg-white">
      <Nav />

      {/* ────── HERO ────── */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28 lg:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
              Solutions for high-volume hiring
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Built for industries that hire at volume.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              High volume. High stakes. High dropout rates. Zorvis is built for the hiring problems
              other tools were never designed to address.
            </p>
          </div>
        </div>
      </section>

      {/* ────── INDUSTRY TABS ────── */}
      <section id="industry-tabs" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          {/* Tab strip */}
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2 md:justify-center">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => {
                    setActiveTab(ind.id);
                    history.replaceState(null, "", `#${ind.id}`);
                  }}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                    activeTab === ind.id
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/30"
                  }`}
                >
                  <ind.icon className="h-4 w-4" />
                  <span>{ind.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-10"
            >
              {/* Stat banner */}
              <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white md:flex">
                    <active.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{active.label}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                      {active.stat}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pains + Solutions */}
              <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-rose-600">
                    Three pain points
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {active.pains.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-slate-700">{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                    Three Zorvis solutions
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {active.solutions.map((s, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-indigo-200 bg-indigo-50/50 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600" />
                        <p className="text-sm leading-relaxed text-slate-800">{s}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Scenario */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  A typical scenario
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg">
                  {active.scenario}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link
                  href="/roi-calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  See your savings for {active.shortLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Get early access
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ────── DON'T SEE YOUR INDUSTRY ────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Zorvis works for any high-volume hiring scenario. If your team posts more than 10 roles
            a month, we can help.
          </p>
          <Link
            href="/waitlist"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Tell us about your hiring
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
