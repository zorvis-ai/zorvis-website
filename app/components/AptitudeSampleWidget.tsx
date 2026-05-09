"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Clock, CheckCircle2, XCircle, ArrowRight, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

// ─── 3 SAMPLE QUESTIONS — same format Zorvis serves to candidates ───
type Question = {
  id: string;
  category: "Numerical" | "Verbal" | "Logical";
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    category: "Numerical",
    difficulty: "Medium",
    question: "A BPO company hires 24 voice agents per month. If the average attrition rate is 40% in the first 90 days, approximately how many agents from each monthly batch are still on the team after 90 days?",
    options: ["10 agents", "14 agents", "16 agents", "20 agents"],
    correct: 1,
    explanation: "60% retention means 24 × 0.60 = 14.4 agents, rounded to 14.",
  },
  {
    id: "q2",
    category: "Verbal",
    difficulty: "Medium",
    question: "Choose the option that best completes the analogy:\n\nCANDIDATE : SCREENED :: EMPLOYEE : ?",
    options: ["Hired", "Onboarded", "Trained", "Promoted"],
    correct: 1,
    explanation: "Just as candidates are screened before becoming employees, employees are onboarded after becoming employees. The pattern is 'next-stage process'.",
  },
  {
    id: "q3",
    category: "Logical",
    difficulty: "Medium",
    question: "Five candidates were ranked. Priya scored higher than Rahul but lower than Anjali. Mohan scored lower than Rahul. Suresh scored higher than Anjali. Who scored the highest?",
    options: ["Priya", "Anjali", "Suresh", "Cannot be determined"],
    correct: 2,
    explanation: "Order from chain: Suresh > Anjali > Priya > Rahul > Mohan. Suresh is highest.",
  },
];

const DEFAULT_TIME_PER_Q = 30; // seconds

type Stage = "intro" | "playing" | "result";

export default function AptitudeSampleWidget() {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState<{ correct: boolean; time: number }[]>([]);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME_PER_Q);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  // Timer countdown — only runs during 'playing' and not while showing the answer
  useEffect(() => {
    if (stage !== "playing" || showAnswer) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [stage, showAnswer, timeLeft]);

  function startTest() {
    setStage("playing");
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setAnswers([]);
    setTimeLeft(DEFAULT_TIME_PER_Q);
    setQuestionStartTime(Date.now());
  }

  function handleSelect(idx: number) {
    if (showAnswer) return;
    setSelected(idx);
  }

  function handleSubmit() {
    if (showAnswer) return;
    const timeTaken = Math.round((Date.now() - questionStartTime) / 1000);
    const isCorrect = selected === QUESTIONS[currentQ].correct;
    setAnswers([...answers, { correct: isCorrect, time: timeTaken }]);
    setShowAnswer(true);
  }

  function handleNext() {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowAnswer(false);
      setTimeLeft(DEFAULT_TIME_PER_Q);
      setQuestionStartTime(Date.now());
    } else {
      setStage("result");
    }
  }

  function reset() {
    setStage("intro");
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setAnswers([]);
    setTimeLeft(DEFAULT_TIME_PER_Q);
  }

  // ─── Stage: INTRO ───
  if (stage === "intro") {
    return (
      <div style={{
        background: "linear-gradient(135deg, #0D1117 0%, #1A1F2E 100%)",
        borderRadius: 16, padding: "44px 32px",
        color: "#FFFFFF", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-30%", left: "50%",
          transform: "translateX(-50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px",
            background: "rgba(167,139,250,0.15)",
            border: "1px solid rgba(167,139,250,0.3)",
            borderRadius: 100,
            fontSize: 12, color: "#C4B5FD",
            fontWeight: 600, letterSpacing: "0.04em",
            marginBottom: 18,
          }}>
            <Sparkles style={{ width: 14, height: 14 }} />
            TRY IT YOURSELF
          </div>

          <h2 style={{
            fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.15,
            margin: "0 0 14px", color: "#FFFFFF",
          }}>
            Take 3 sample questions.<br/>
            <span style={{
              background: "linear-gradient(90deg,#A78BFA 0%,#7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>See what your candidates see.</span>
          </h2>
          <p style={{
            fontSize: 15, color: "#9CA3AF", lineHeight: 1.65,
            margin: "0 auto 32px", maxWidth: 460,
          }}>
            Three real questions from our 500-question bank — one Numerical, one Verbal, one Logical.
            90 seconds total. We'll show you exactly what your candidates would experience.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10,
            marginBottom: 32,
          }}>
            {[
              { label: "3 questions", icon: Brain },
              { label: "90 seconds", icon: Clock },
              { label: "No signup", icon: CheckCircle2 },
            ].map((s) => (
              <div key={s.label} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "7px 13px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100,
                fontSize: 12, color: "#D1D5DB", fontWeight: 500,
              }}>
                <s.icon style={{ width: 12, height: 12 }} />
                {s.label}
              </div>
            ))}
          </div>

          <button
            onClick={startTest}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px",
              background: "linear-gradient(90deg,#7C3AED 0%,#A78BFA 100%)",
              color: "#FFFFFF", fontSize: 14, fontWeight: 700,
              border: "none", borderRadius: 10,
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
              boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(124,58,237,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(124,58,237,0.4)";
            }}
          >
            Start the test
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    );
  }

  // ─── Stage: PLAYING ───
  if (stage === "playing") {
    const q = QUESTIONS[currentQ];
    const progress = ((currentQ + (showAnswer ? 1 : 0)) / QUESTIONS.length) * 100;
    return (
      <div style={{
        background: "#FFFFFF",
        border: "1px solid #E2E6F0", borderRadius: 16,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          padding: "16px 24px",
          background: "#0D1117", color: "#FFFFFF",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
              color: "#A78BFA",
            }}>QUESTION {currentQ + 1} OF {QUESTIONS.length}</div>
            <div style={{
              padding: "3px 9px",
              background: "rgba(167,139,250,0.18)",
              borderRadius: 100,
              fontSize: 11, fontWeight: 600, color: "#C4B5FD",
            }}>{q.category}</div>
            <div style={{
              padding: "3px 9px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 100,
              fontSize: 11, fontWeight: 600, color: "#D1D5DB",
            }}>{q.difficulty}</div>
          </div>

          {/* Timer */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 14, fontWeight: 700,
            color: timeLeft <= 10 ? "#FCA5A5" : "#FFFFFF",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
          }}>
            <Clock style={{ width: 14, height: 14 }} />
            {timeLeft}s
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: "#F1F2F8" }}>
          <motion.div
            initial={{ width: `${(currentQ / QUESTIONS.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg,#7C3AED 0%,#A78BFA 100%)",
            }}
          />
        </div>

        {/* Question body */}
        <div style={{ padding: "32px 28px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={q.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p style={{
                fontSize: 16, lineHeight: 1.6, color: "#0D1117",
                margin: "0 0 26px", whiteSpace: "pre-line",
                fontWeight: 500,
              }}>
                {q.question}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {q.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isCorrectAnswer = i === q.correct;
                  const showCorrect = showAnswer && isCorrectAnswer;
                  const showWrong = showAnswer && isSelected && !isCorrectAnswer;

                  let borderColor = "#E2E6F0";
                  let bg = "#FFFFFF";
                  let textColor = "#0D1117";

                  if (showCorrect) {
                    borderColor = "#10B981";
                    bg = "rgba(16,185,129,0.06)";
                  } else if (showWrong) {
                    borderColor = "#EF4444";
                    bg = "rgba(239,68,68,0.06)";
                  } else if (isSelected) {
                    borderColor = "#4F46E5";
                    bg = "#EEF2FF";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={showAnswer}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "14px 18px",
                        border: `2px solid ${borderColor}`,
                        background: bg,
                        borderRadius: 10,
                        cursor: showAnswer ? "default" : "pointer",
                        textAlign: "left", width: "100%",
                        fontFamily: "'DM Sans',sans-serif",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        if (!showAnswer && !isSelected) {
                          e.currentTarget.style.borderColor = "#CBD5E1";
                          e.currentTarget.style.background = "#F7F8FC";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!showAnswer && !isSelected) {
                          e.currentTarget.style.borderColor = "#E2E6F0";
                          e.currentTarget.style.background = "#FFFFFF";
                        }
                      }}
                    >
                      <div style={{
                        width: 24, height: 24, borderRadius: 6,
                        background: isSelected || showCorrect ? "#4F46E5" : "transparent",
                        border: `1.5px solid ${isSelected || showCorrect ? "#4F46E5" : "#CBD5E1"}`,
                        color: "#FFFFFF",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 11, fontWeight: 700,
                        flexShrink: 0,
                      }}>
                        {showCorrect ? "✓" : showWrong ? "✗" : String.fromCharCode(65 + i)}
                      </div>
                      <span style={{ fontSize: 14, color: textColor, lineHeight: 1.5 }}>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation reveal after submit */}
              <AnimatePresence>
                {showAnswer && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden", marginTop: 18 }}
                  >
                    <div style={{
                      padding: "14px 16px",
                      background: "#F1F5FF",
                      borderLeft: "3px solid #4F46E5",
                      borderRadius: 4,
                      fontSize: 13, color: "#4338CA", lineHeight: 1.65,
                    }}>
                      <strong>Why:</strong> {q.explanation}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action button */}
              <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
                {!showAnswer ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selected === null}
                    style={{
                      padding: "11px 24px",
                      background: selected === null ? "#E2E6F0" : "#0D1117",
                      color: selected === null ? "#9CA3AF" : "#FFFFFF",
                      fontSize: 14, fontWeight: 600,
                      border: "none", borderRadius: 8,
                      cursor: selected === null ? "not-allowed" : "pointer",
                      fontFamily: "'DM Sans',sans-serif",
                      transition: "background 0.15s",
                    }}
                  >
                    Submit answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "11px 24px",
                      background: "#4F46E5", color: "#FFFFFF",
                      fontSize: 14, fontWeight: 600,
                      border: "none", borderRadius: 8,
                      cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {currentQ < QUESTIONS.length - 1 ? "Next question" : "See my score"}
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // ─── Stage: RESULT ───
  const correctCount = answers.filter((a) => a.correct).length;
  const scorePercent = Math.round((correctCount / QUESTIONS.length) * 100);
  const totalTime = answers.reduce((sum, a) => sum + a.time, 0);
  // Score band visual: realistic-feeling band based on actual score
  const scoreBand =
    scorePercent === 100
      ? "92–98"
      : scorePercent >= 67
      ? "78–84"
      : scorePercent >= 34
      ? "62–68"
      : "48–54";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "linear-gradient(135deg, #0D1117 0%, #1A1F2E 100%)",
        borderRadius: 16, padding: "40px 32px",
        color: "#FFFFFF", position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "-20%", right: "-20%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Trophy */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          style={{
            width: 64, height: 64, borderRadius: 16,
            background: "linear-gradient(135deg,#7C3AED 0%,#A78BFA 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 18px",
            boxShadow: "0 8px 24px rgba(124,58,237,0.4)",
          }}
        >
          <Trophy style={{ width: 30, height: 30, color: "#FFFFFF" }} />
        </motion.div>

        <h2 style={{
          fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 800,
          textAlign: "center", margin: "0 0 8px",
          color: "#FFFFFF", letterSpacing: "-0.025em",
        }}>
          You got {correctCount} of {QUESTIONS.length} correct.
        </h2>

        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{
            fontSize: 14, color: "#9CA3AF", margin: 0,
            display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            <Clock style={{ width: 13, height: 13 }} />
            Completed in {totalTime} seconds
          </p>
        </div>

        {/* Score band card */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 12, padding: 20,
          marginBottom: 24,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: "#A78BFA",
            letterSpacing: "0.06em", marginBottom: 8,
          }}>YOUR SCORE BAND</div>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <div style={{
                fontSize: 32, fontWeight: 800,
                fontFamily: "ui-monospace, SFMono-Regular, monospace",
                color: "#FFFFFF", lineHeight: 1,
              }}>
                {scoreBand}
              </div>
              <div style={{ fontSize: 12, color: "#6B7280", marginTop: 6 }}>
                Score bands are how Zorvis presents results to HR — not false-precision single numbers.
              </div>
            </div>
            <div style={{
              padding: "8px 14px",
              background: scorePercent >= 67 ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)",
              border: `1px solid ${scorePercent >= 67 ? "rgba(16,185,129,0.3)" : "rgba(245,158,11,0.3)"}`,
              borderRadius: 100,
              fontSize: 12, fontWeight: 600,
              color: scorePercent >= 67 ? "#34D399" : "#FCD34D",
              flexShrink: 0,
            }}>
              {scorePercent >= 67 ? "Top candidate" : "Below threshold"}
            </div>
          </div>
        </div>

        {/* Per-question breakdown */}
        <div style={{ marginBottom: 26 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: "#A78BFA",
            letterSpacing: "0.06em", marginBottom: 10,
          }}>BREAKDOWN</div>
          {QUESTIONS.map((q, i) => (
            <div
              key={q.id}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 14px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 8, marginBottom: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {answers[i]?.correct ? (
                  <CheckCircle2 style={{ width: 16, height: 16, color: "#34D399" }} />
                ) : (
                  <XCircle style={{ width: 16, height: 16, color: "#F87171" }} />
                )}
                <span style={{ fontSize: 13, color: "#D1D5DB", fontWeight: 500 }}>
                  Q{i + 1} · {q.category}
                </span>
              </div>
              <span style={{
                fontSize: 12, color: "#9CA3AF",
                fontFamily: "ui-monospace, SFMono-Regular, monospace",
              }}>
                {answers[i]?.time}s
              </span>
            </div>
          ))}
        </div>

        {/* The pitch */}
        <div style={{
          padding: "18px 20px",
          background: "rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: 10,
          marginBottom: 22,
        }}>
          <div style={{
            fontSize: 13, color: "#C4B5FD",
            lineHeight: 1.6, fontWeight: 500,
          }}>
            <strong style={{ color: "#FFFFFF" }}>This is what your candidates would see.</strong>{" "}
            Zorvis serves 500 questions per category — Numerical, Verbal, Logical, and Domain-specific —
            on WhatsApp, with score bands instead of false-precision numbers.
            Top scorers surface in your Kanban automatically.
          </div>
        </div>

        {/* CTAs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "center",
        }}>
          <Link
            href="/waitlist"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "12px 24px",
              background: "#FFFFFF", color: "#0D1117",
              fontSize: 14, fontWeight: 700, borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F1F2F8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
          >
            Get early access
            <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              background: "transparent", color: "#FFFFFF",
              fontSize: 14, fontWeight: 600, borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.25)",
              cursor: "pointer", fontFamily: "'DM Sans',sans-serif",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
          >
            Try again
          </button>
        </div>
      </div>
    </motion.div>
  );
}
