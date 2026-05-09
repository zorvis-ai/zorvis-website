"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, Zap, X, Check } from "lucide-react";

const OLD_WAY = [
  { label: "Read 400 CVs manually", time: "6 hrs", days: "Day 1" },
  { label: "Set up tests on separate platform", time: "3 hrs", days: "Day 2" },
  { label: "Send tests, chase candidates over email", time: "2 days", days: "Day 3-4" },
  { label: "Score, compile spreadsheets", time: "4 hrs", days: "Day 5" },
  { label: "Schedule interviews on email tag", time: "2 days", days: "Day 6-7" },
];

const ZORVIS_WAY = [
  { label: "AI ranks 400 CVs automatically", time: "2 min", days: "0 hrs" },
  { label: "Test sent on WhatsApp to top 10", time: "30 sec", days: "0 hrs" },
  { label: "Candidates complete on phone, scored live", time: "24 hrs", days: "Day 1" },
  { label: "Top candidates surface in dashboard", time: "Auto", days: "Day 1" },
  { label: "Interview slots booked one-click", time: "5 min", days: "Day 1" },
];

export default function OldWayVsZorvis() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* OLD WAY column */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-rose-600">
              The old way
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              7+ days to first interview
            </h3>
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {OLD_WAY.map((step, i) => (
            <motion.li
              key={i}
              initial={reduce ? {} : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-lg bg-slate-50 px-3 py-2.5"
            >
              <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900">{step.label}</div>
                <div className="text-xs text-slate-500">
                  {step.time} · {step.days}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-rose-700">
            Total time
          </div>
          <div className="text-2xl font-bold text-rose-900">~7 days · ₹15,000+ in HR time</div>
        </div>
      </motion.div>

      {/* ZORVIS WAY column */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-2xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-lg lg:p-8"
      >
        <div className="flex items-center gap-3 border-b border-indigo-200 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
              The Zorvis way
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              1 day to first interview
            </h3>
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {ZORVIS_WAY.map((step, i) => (
            <motion.li
              key={i}
              initial={reduce ? {} : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 rounded-lg bg-white px-3 py-2.5 ring-1 ring-indigo-100"
            >
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-900">{step.label}</div>
                <div className="text-xs text-indigo-600 font-semibold">
                  {step.time} · {step.days}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-5 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 px-4 py-3 text-white">
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-100">
            Total time
          </div>
          <div className="text-2xl font-bold">~24 hours · ₹0 wasted</div>
        </div>
      </motion.div>
    </div>
  );
}
