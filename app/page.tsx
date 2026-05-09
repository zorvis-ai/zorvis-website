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
} from "lucide-react";
import { Nav, Footer } from "@/components/Nav";
import HeroAnimation from "./components/HeroAnimation";
import RoiCalculator from "./components/RoiCalculator";
import OldWayVsZorvis from "./components/OldWayVsZorvis";
import AptitudeSampleWidget from "./components/AptitudeSampleWidget";
import DataCompoundsAnimation from "./components/DataCompoundsAnimation";

const INDUSTRIES = [
  { icon: Headphones, label: "BPO & Contact Centres", anchor: "bpo" },
  { icon: ShoppingBag, label: "Retail & QSR", anchor: "retail" },
  { icon: Truck, label: "Logistics & E-commerce", anchor: "logistics" },
  { icon: Briefcase, label: "Staffing Agencies", anchor: "staffing" },
  { icon: Factory, label: "Manufacturing", anchor: "manufacturing" },
  { icon: Building2, label: "Hospitality & Services", anchor: "hospitality" },
];

export default function HomePage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* ────────────── HERO ────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(91,79,207,0.25),_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-20 lg:px-8 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                <Sparkles className="h-3.5 w-3.5" />
                Built for India + GCC · Launching India-first
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                400 CVs ranked in 3 minutes.{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  By an AI that gets smarter every hire.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
                Zorvis is the hire-to-retire AI for India and UAE companies. Rank candidates, test on WhatsApp, predict performance at 90 days — all in one system that learns from every hire you make.
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

            {/* Right — animation */}
            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

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
                href={`/solutions/volume-hiring#${ind.anchor}`}
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

      {/* ────────────── APTITUDE SAMPLE WIDGET (NEW) ────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-24">
          <AptitudeSampleWidget />
        </div>
      </section>

      {/* ────────────── WHAT ZORVIS DOES ────────────── */}
      <section className="bg-slate-50">
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
                desc: "AI scores every CV against your role. Top candidates surface in a Kanban view. You never read a bad CV again.",
                accent: "bg-indigo-100 text-indigo-700",
              },
              {
                icon: Users,
                title: "Test on WhatsApp",
                desc: "Aptitude tests delivered on the channel candidates actually use. 95% open rate. No app downloads. Auto-scored.",
                accent: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: Brain,
                title: "Predict performance",
                desc: "Test scores at hire connect to performance ratings 90 days later. The system gets smarter with every hire you make.",
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

      {/* ────────────── DATA COMPOUNDS LOOP (NEW) ────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <DataCompoundsAnimation />
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
            Early access opens this quarter. Get founding-customer pricing locked in for 12 months.
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
