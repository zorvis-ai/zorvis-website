import Link from "next/link";
import {
  Headphones,
  ShoppingBag,
  Truck,
  Briefcase,
  Factory,
  Building2,
  Sparkles,
  Target,
  Brain,
  Users,
  Shield,
  ArrowRight,
  Phone,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Nav, Footer } from "@/components/Nav";
import HeroAnimation from "./components/HeroAnimation";
import RoiCalculator from "./components/RoiCalculator";
import OldWayVsZorvis from "./components/OldWayVsZorvis";
import AptitudeSampleWidget from "./components/AptitudeSampleWidget";
import DataCompoundsAnimation from "./components/DataCompoundsAnimation";
import ZorvisModulesStrip from "@/components/ZorvisModulesStrip";

// NOTE: industries linked to /solutions/volume-hiring with query params, not anchors.
// The /solutions/volume-hiring page should read useSearchParams to set its initial active tab.
// (5E task — currently treats them as section anchors which won't work with tabs.)
const INDUSTRIES = [
  { icon: Headphones, label: "BPO & Contact Centres", q: "bpo" },
  { icon: ShoppingBag, label: "Retail & QSR", q: "retail" },
  { icon: Truck, label: "Logistics & E-commerce", q: "logistics" },
  { icon: Briefcase, label: "Staffing Agencies", q: "staffing" },
  { icon: Factory, label: "Manufacturing", q: "manufacturing" },
  { icon: Building2, label: "Hospitality & Services", q: "hospitality" },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* ────────────── HERO ────────────── */}
      {/* overflow-hidden contains the HeroAnimation, prevents right-side clipping bleed */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
        style={{
          paddingTop:
            "calc(env(safe-area-inset-top, 0px) + 1rem)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,79,207,0.25),_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-8 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                <Sparkles className="h-3.5 w-3.5" />
                Built for India + UAE · Launching India-first
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                Hire 35% better, in 1/10th the time.{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  The people platform that learns your company.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
                Zorvis ranks every CV against your role, conducts first-round phone interviews in 8 languages, runs assessments on the candidate's preferred channel, and connects every hire to the performance data that comes after. So the next hire is sharper than the last.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/roi-calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Try the ROI Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/waitlist"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Get early access
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="mt-5 text-xs text-slate-400">
                No credit card · Free tier permanent · Live in 15 minutes
              </div>
            </div>

            {/* Right — animation. max-w-full prevents children overflowing the column. */}
            <div className="relative max-w-full overflow-hidden">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── MODULES STRIP — sets the suite frame early ────────────── */}
      {/* followsDarkHero=true smooths the dark→light transition with a subtle gradient */}
      <ZorvisModulesStrip followsDarkHero />

      {/* ────────────── INDUSTRIES STRIP ────────────── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Built for industries that hire at volume
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.label}
                href={`/solutions/volume-hiring?industry=${ind.q}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-5 transition hover:border-indigo-300 hover:bg-indigo-50/30"
              >
                <ind.icon className="h-6 w-6 text-slate-500 transition group-hover:text-indigo-600" />
                <span className="text-center text-xs font-medium leading-tight text-slate-700">
                  {ind.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── PROBLEM STATS ────────────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              The hiring volume problem nobody fixed
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              When you post a job for high-volume roles, the math is brutal.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { stat: "400+", unit: "CVs", subtitle: "land in your inbox in 72 hours after posting one job" },
              { stat: "6 hrs", unit: "screening", subtitle: "spent reading CVs manually for every role you fill" },
              { stat: "40%", unit: "drop off", subtitle: "industry-average 90-day attrition for volume hires" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-8 text-center">
                <div className="text-5xl font-bold text-indigo-600 md:text-6xl">{item.stat}</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {item.unit}
                </div>
                <div className="mt-3 text-sm text-slate-600">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── APTITUDE SAMPLE WIDGET ────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-24">
          <AptitudeSampleWidget />
        </div>
      </section>

      {/* ────────────── AI INTERVIEW SECTION ────────────── */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold tracking-wide text-violet-700">
                <Phone className="h-3.5 w-3.5" />
                BETA · DESIGN PARTNERS WELCOME
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                The first interview happens before HR opens their calendar.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Top scorers from your aptitude test get a phone call from our AI. 4-5 standardized questions, 5 minutes, in their preferred language. Recording, transcript, and AI scoring delivered to you before you spend a minute on the candidate.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  {
                    icon: Globe,
                    title: "8 languages, native speakers",
                    detail: "English, Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Arabic. Hinglish code-switching supported.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "DPDP-compliant by default",
                    detail: "Recording disclosed before call connects. Candidate consent captured. 30-day retention then auto-delete.",
                  },
                  {
                    icon: Brain,
                    title: "Scoring tuned to your hires",
                    detail: "Interview scores correlate with 90-day performance data. Your scoring rubric improves every quarter.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-violet-100 text-violet-700">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-0.5 text-sm text-slate-600">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA — whitespace-nowrap on the button prevents text wrap; flex-col stack at narrow widths */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/waitlist?interest=ai-interview"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  Apply for AI Interview beta
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="text-xs text-slate-500">
                  Included in every paid plan · 50–1,000 interviews/month
                </span>
              </div>
            </div>

            {/* Right — visual mock */}
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">
                      Zorvis AI Interview
                    </div>
                    <div className="text-xs text-slate-500">
                      To: P. Sharma · Hindi · 04:23
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    Live
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="text-xs font-semibold text-violet-700">
                      AI · Q3 of 5
                    </div>
                    <div className="mt-1 text-slate-700">
                      "क्या आप रात की शिफ्ट में काम कर सकते हैं?"
                    </div>
                    <div className="mt-1 text-xs italic text-slate-400">
                      "Can you work night shifts?"
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <div className="text-xs font-semibold text-slate-600">
                      Candidate
                    </div>
                    <div className="mt-1 text-slate-700">
                      "हां, मैं पिछले 2 साल से रात की शिफ्ट कर रहा हूं..."
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Live Scoring
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-emerald-600">8.4</div>
                      <div className="text-xs text-slate-500">Communication</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-600">9.1</div>
                      <div className="text-xs text-slate-500">Availability</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-amber-600">6.8</div>
                      <div className="text-xs text-slate-500">Experience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 hidden rotate-3 transform rounded-md bg-violet-600 px-3 py-1.5 text-xs font-bold text-white shadow-md md:block">
                Top match · Move to interview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── WHAT ZORVIS DOES (3 features) ────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              <Brain className="h-3.5 w-3.5" />
              The Zorvis Approach
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Three things working in one loop
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Not a faster ATS. A different kind of system, where every signal feeds the next decision.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Rank in minutes",
                desc: "Every CV scored against your role. Top candidates surface in a Kanban view. You never read a bad CV again.",
                accent: "bg-indigo-100 text-indigo-700",
              },
              {
                icon: Users,
                title: "Meet candidates where they are",
                desc: "Tests delivered on the candidate's preferred channel — email, WhatsApp, SMS, or web. 95% open rate. No app downloads.",
                accent: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: Brain,
                title: "Predict performance",
                desc: "Test scores at hire connect to performance ratings 90 days later. The system gets sharper with every hire you make.",
                accent: "bg-violet-100 text-violet-700",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:shadow-md md:p-8">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${card.accent}`}>
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── OLD WAY VS ZORVIS WAY ────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              The same role, two timelines
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              How a typical 400-CV hiring round looks before and after Zorvis.
            </p>
          </div>

          <div className="mt-12">
            <OldWayVsZorvis />
          </div>
        </div>
      </section>

      {/* ────────────── DATA COMPOUNDS LOOP ────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <DataCompoundsAnimation />
        </div>
      </section>

      {/* ────────────── WHAT GETS BETTER AS YOU GROW ────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-200">
              <Sparkles className="h-3.5 w-3.5" />
              YOUR MOAT, COMPOUNDING
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              What gets better as you grow.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Hiring data feeds performance, performance feeds prediction, prediction feeds the next hire. The system builds a picture of <em>your</em> company — one no competitor can copy.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {[
              { marker: "100",  line: "After 100 hires, your dashboard knows what good looks like at your company." },
              { marker: "200",  line: "After 200, your reviews start factoring in hire-day baseline scores." },
              { marker: "500",  line: "After 500, your succession planning surfaces names you wouldn't have noticed." },
              { marker: "1000", line: "After 1,000, you've built something Workday couldn't replicate even with their billion-dollar engineering team." },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-mono text-base font-bold text-white">
                  {row.marker}
                </div>
                <div className="text-base text-slate-200 md:text-lg">
                  {row.line}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm italic text-slate-400">
            This is why founders pick Zorvis over an ATS. The ATS holds your candidates. Zorvis builds your hiring intelligence.
          </div>
        </div>
      </section>

      {/* ────────────── ROI CALCULATOR ────────────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              See your numbers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Slide the values to your reality. Get an honest savings estimate in 30 seconds.
            </p>
          </div>

          <div className="mt-10">
            <RoiCalculator embedded />
          </div>
        </div>
      </section>

      {/* ────────────── TRUST STRIP ────────────── */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Built on
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                "DPDP Act 2023",
                "UAE PDPL Ready",
                "GDPR Compliant",
                "Data: Mumbai + Bahrain",
                "Blind-first ranking",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── CLOSING CTA ────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Be among the first 100 companies on Zorvis
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Early access opens this quarter. Founding-customer pricing locked in for 12 months.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/roi-calculator"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Calculate my savings first
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            Free tier permanent · No credit card · India + UAE
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
