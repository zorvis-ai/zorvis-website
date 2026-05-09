"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Clock, IndianRupee, CheckCircle2, ArrowRight } from "lucide-react";

// ─── Pricing constants (from Zorvis pricing) ───
const PLANS = [
  { name: "Starter", base: 4999, perEmp: 99, includedEmps: 25, tests: 75 },
  { name: "Growth",  base: 9999, perEmp: 79, includedEmps: 100, tests: 300 },
  { name: "Scale",   base: 19999, perEmp: 59, includedEmps: 500, tests: 750 },
];

// Default values for sliders
const DEFAULTS = {
  monthlyCvVolume: 400,
  monthlyHires: 10,
  hrHourlyCost: 500,
  currentTestCost: 800,
};

function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function recommendPlan(cvVolume: number, hires: number) {
  // Estimate employees as monthly hires × 12 retention factor (rough)
  const estEmps = Math.max(hires * 4, 25);
  if (estEmps <= 25 && cvVolume <= 200) return PLANS[0];
  if (estEmps <= 100 && cvVolume <= 800) return PLANS[1];
  return PLANS[2];
}

type Step = "calculate" | "capture" | "result";

export default function RoiCalculator({ embedded = false }: { embedded?: boolean }) {
  // Inputs
  const [cvVolume, setCvVolume] = useState(DEFAULTS.monthlyCvVolume);
  const [hires, setHires] = useState(DEFAULTS.monthlyHires);
  const [hrCost, setHrCost] = useState(DEFAULTS.hrHourlyCost);
  const [testCost, setTestCost] = useState(DEFAULTS.currentTestCost);

  // Flow
  const [step, setStep] = useState<Step>("calculate");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Calculations
  const calc = useMemo(() => {
    const HOURS_PER_CV = 0.5; // 30 min per CV manual review
    const ZORVIS_TIME_REDUCTION = 0.92; // 92% time saved with AI ranking
    const ZORVIS_TEST_COST = 0; // Tests included in plan

    const hoursMonthly = cvVolume * HOURS_PER_CV;
    const hoursSaved = hoursMonthly * ZORVIS_TIME_REDUCTION;
    const inrSavedScreening = hoursSaved * hrCost;

    const monthlyTestSpend = hires * testCost;
    const inrSavedTesting = monthlyTestSpend - ZORVIS_TEST_COST;

    const totalMonthly = inrSavedScreening + inrSavedTesting;
    const totalAnnual = totalMonthly * 12;

    const plan = recommendPlan(cvVolume, hires);
    const planEstEmps = Math.max(hires * 4, plan.includedEmps);
    const extraEmps = Math.max(0, planEstEmps - plan.includedEmps);
    const planCost = plan.base + extraEmps * plan.perEmp;

    const paybackDays = planCost > 0 && totalMonthly > 0
      ? Math.ceil((planCost / totalMonthly) * 30)
      : 0;

    return {
      hoursSaved,
      inrSavedScreening,
      inrSavedTesting,
      totalMonthly,
      totalAnnual,
      plan,
      planCost,
      paybackDays,
    };
  }, [cvVolume, hires, hrCost, testCost]);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/roi/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company_name: companyName,
          monthly_cv_volume: cvVolume,
          monthly_hires: hires,
          hr_hourly_cost_inr: hrCost,
          current_test_cost_inr: testCost,
          hours_per_cv: 0.5,
          hours_saved_monthly: calc.hoursSaved,
          inr_saved_screening: calc.inrSavedScreening,
          inr_saved_testing: calc.inrSavedTesting,
          total_monthly_savings: calc.totalMonthly,
          total_annual_savings: calc.totalAnnual,
          zorvis_recommended_plan: calc.plan.name,
          zorvis_plan_cost_monthly: calc.planCost,
          payback_days: calc.paybackDays,
          source: embedded ? "homepage_calculator" : "calculator_page",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStep("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-200 bg-gradient-to-br from-indigo-50 to-white px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              See what you'd save with Zorvis
            </h3>
            <p className="text-sm text-slate-600">Slide the values. See your savings live.</p>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === "calculate" && (
          <motion.div
            key="calculate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Inputs column */}
              <div className="space-y-6">
                <Slider
                  label="CVs you receive monthly"
                  value={cvVolume}
                  min={50}
                  max={2000}
                  step={50}
                  onChange={setCvVolume}
                  format={(v) => v.toLocaleString("en-IN")}
                />
                <Slider
                  label="Hires per month"
                  value={hires}
                  min={1}
                  max={100}
                  step={1}
                  onChange={setHires}
                />
                <Slider
                  label="HR hourly cost"
                  value={hrCost}
                  min={200}
                  max={2000}
                  step={50}
                  onChange={setHrCost}
                  format={(v) => `₹${v.toLocaleString("en-IN")}/hr`}
                />
                <Slider
                  label="Current cost per aptitude test"
                  value={testCost}
                  min={0}
                  max={2500}
                  step={100}
                  onChange={setTestCost}
                  format={(v) => `₹${v.toLocaleString("en-IN")}`}
                />
              </div>

              {/* Results column */}
              <div className="space-y-3">
                <ResultRow
                  icon={<Clock className="h-4 w-4" />}
                  label="Hours saved every month"
                  value={`${Math.round(calc.hoursSaved)} hrs`}
                  color="emerald"
                />
                <ResultRow
                  icon={<IndianRupee className="h-4 w-4" />}
                  label="Saved on screening"
                  value={formatINR(calc.inrSavedScreening)}
                  color="indigo"
                />
                <ResultRow
                  icon={<IndianRupee className="h-4 w-4" />}
                  label="Saved on testing"
                  value={formatINR(calc.inrSavedTesting)}
                  color="indigo"
                />

                <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wide text-indigo-100">
                    Your annual savings
                  </div>
                  <div className="mt-2 text-3xl font-bold md:text-4xl">
                    {formatINR(calc.totalAnnual)}
                  </div>
                  <div className="mt-2 text-sm text-indigo-100">
                    {formatINR(calc.totalMonthly)}/month · Pays for itself in {calc.paybackDays} days
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                  <strong className="text-slate-900">Recommended plan:</strong> Zorvis {calc.plan.name} at {formatINR(calc.planCost)}/month
                </div>

                <button
                  onClick={() => setStep("capture")}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Email me a detailed breakdown
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === "capture" && (
          <motion.div
            key="capture"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 md:p-10"
          >
            <div className="mx-auto max-w-md">
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  Your projected savings
                </div>
                <div className="mt-1 text-3xl font-bold text-indigo-900">
                  {formatINR(calc.totalAnnual)}
                </div>
                <div className="mt-1 text-xs text-indigo-700">per year, at your current volume</div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Where should we send your detailed breakdown?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                We'll send a PDF summary plus early-access details. No spam.
              </p>

              <form onSubmit={handleEmailSubmit} className="mt-5 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Work email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Company name <span className="text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Pvt Ltd"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                {error && (
                  <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
                    {error}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep("calculate")}
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send me the breakdown →"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 md:p-10 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              On its way to your inbox
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We'll email your detailed savings breakdown shortly.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border border-slate-200 bg-slate-50 p-5 text-left">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Quick recap
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Annual savings</span>
                  <strong className="text-slate-900">{formatINR(calc.totalAnnual)}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Hours saved/month</span>
                  <strong className="text-slate-900">{Math.round(calc.hoursSaved)} hrs</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Recommended plan</span>
                  <strong className="text-slate-900">Zorvis {calc.plan.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Payback period</span>
                  <strong className="text-slate-900">{calc.paybackDays} days</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setStep("calculate");
                setEmail("");
                setCompanyName("");
              }}
              className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Run another calculation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Slider sub-component ───
function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  format?: (n: number) => string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-base font-bold text-indigo-600">
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-indigo-600"
      />
      <div className="mt-1 flex justify-between text-[10px] text-slate-400">
        <span>{format ? format(min) : min}</span>
        <span>{format ? format(max) : max}</span>
      </div>
    </div>
  );
}

// ─── Result row sub-component ───
function ResultRow({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: "emerald" | "indigo";
}) {
  const colorMap = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
  };
  return (
    <div className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${colorMap[color]}`}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs font-medium">{label}</span>
      </div>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}
