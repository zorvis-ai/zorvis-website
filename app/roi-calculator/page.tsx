head -60 ~/Documents/Zorvis/website/app/solutions/volume-hiring/page.tsximport Link from "next/link";
import { ArrowRight, TrendingUp, Calculator, Shield } from "lucide-react";
import { Nav, Footer } from "@/components/Nav";
import RoiCalculator from "../components/RoiCalculator";

export const metadata = {
  title: "ROI Calculator — Zorvis AI",
  description:
    "See how much your team could save on hiring with Zorvis. Live calculator with honest assumptions and no signup required.",
};

export default function RoiCalculatorPage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-12 lg:px-8 lg:pt-28 lg:pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
            <Calculator className="h-3.5 w-3.5" />
            ROI Calculator
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            See what hiring with Zorvis would actually save you.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Slide your numbers. Get an honest estimate. No fluff, no sales call required.
          </p>
        </div>
      </section>

      {/* THE CALCULATOR */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
          <RoiCalculator />
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <Shield className="h-3.5 w-3.5" />
              Honest assumptions
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              How we calculate this
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We've shown the math up front. Adjust the numbers if your situation differs.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <Assumption
              label="Time per CV (manual review)"
              value="30 minutes average"
              note="Industry studies show 20–45 minutes per CV for thoughtful manual review. We use 30 minutes as a midpoint, which is conservative for technical roles and slightly generous for volume roles."
            />
            <Assumption
              label="Time saved with Zorvis ranking"
              value="92%"
              note="The AI ranks every CV in seconds. The remaining 8% accounts for human review of the top 10–20 candidates the AI surfaces. We don't claim 100% — humans should always review the shortlist."
            />
            <Assumption
              label="Test cost replaced"
              value="100% of your current per-test spend"
              note="Aptitude testing is bundled into all paid Zorvis plans at zero marginal cost up to the included test bundle. If you exceed the bundle, overage applies — but for most companies, the included tests cover 100% of monthly hiring volume."
            />
            <Assumption
              label="What we don't include in savings"
              value="Indirect benefits"
              note="The calculator only shows direct cost savings. We exclude harder-to-quantify benefits: reduced 90-day attrition, improved candidate experience, faster time-to-fill, and the data flywheel that improves your hiring over time."
            />
          </div>

          <div className="mt-12 rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Why we built this calculator</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Most SaaS calculators are designed to inflate ROI. Ours uses conservative assumptions
                  because we'd rather you trust the number you see here than be surprised after signing up.
                  If your numbers come out small, your team probably isn't hiring enough volume to need
                  Zorvis yet — and we'll tell you that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-24 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Numbers look good?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Get on the early-access list and lock in founding-customer pricing for 12 months.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/solutions/volume-hiring"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Browse solutions by industry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Assumption({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-sm font-semibold text-slate-900">{label}</h4>
        <span className="text-sm font-bold text-indigo-600">{value}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{note}</p>
    </div>
  );
}
