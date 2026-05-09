"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, UserCheck, Target, TrendingUp, Sparkles } from "lucide-react";

// ─── The 4 stages of the loop ───
const STAGES = [
  {
    icon: Target,
    label: "Score at hire",
    detail: "Aptitude band recorded",
    color: "#A78BFA",
  },
  {
    icon: UserCheck,
    label: "Candidate hired",
    detail: "Joins your team",
    color: "#7C3AED",
  },
  {
    icon: TrendingUp,
    label: "90-day rating",
    detail: "Manager rates performance",
    color: "#10B981",
  },
  {
    icon: Brain,
    label: "Predictor improves",
    detail: "System learns patterns",
    color: "#F59E0B",
  },
];

// Sample data points that animate as more hires accumulate
const DATA_POINTS_OVER_TIME = [
  { hires: 1,    accuracy: "63%",  label: "Month 1" },
  { hires: 12,   accuracy: "71%",  label: "Month 3" },
  { hires: 47,   accuracy: "79%",  label: "Month 6" },
  { hires: 138,  accuracy: "86%",  label: "Month 9" },
  { hires: 312,  accuracy: "91%",  label: "Month 12" },
];

export default function DataCompoundsAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeDataPoint, setActiveDataPoint] = useState(0);

  // Cycle through stages every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through data points every 1.5 seconds (faster than stages)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDataPoint((prev) => (prev + 1) % DATA_POINTS_OVER_TIME.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(135deg, #0D1117 0%, #1A1F2E 100%)",
      borderRadius: 20, padding: "48px 32px",
      color: "#FFFFFF", position: "relative", overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px",
            background: "rgba(167,139,250,0.15)",
            border: "1px solid rgba(167,139,250,0.3)",
            borderRadius: 100,
            fontSize: 12, color: "#C4B5FD",
            fontWeight: 600, letterSpacing: "0.04em",
            marginBottom: 16,
          }}>
            <Sparkles style={{ width: 14, height: 14 }} />
            THE COMPOUNDING LOOP
          </div>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.15,
            margin: "0 0 12px", color: "#FFFFFF",
          }}>
            Every hire makes the next hire <span style={{
              background: "linear-gradient(90deg,#A78BFA 0%,#7C3AED 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>better.</span>
          </h2>
          <p style={{
            fontSize: 15, color: "#9CA3AF", lineHeight: 1.65,
            margin: "0 auto", maxWidth: 540,
          }}>
            The longer you use Zorvis, the more your hire-quality predictor calibrates to <em>your</em> company.
            By month 12, the system knows what success looks like at your specific company.
          </p>
        </div>

        {/* Main visual — the loop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 32,
          alignItems: "center",
        }} className="zv-loop-grid">
          {/* LEFT: Circular flow diagram */}
          <div style={{ position: "relative", aspectRatio: "1 / 1", maxWidth: 460 }}>
            <svg viewBox="-40 0 480 400" style={{ width: "100%", height: "100%" }}>
              {/* Defs */}
              <defs>
                <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
                </linearGradient>
                <filter id="loopGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer circle path (the loop) */}
              <circle
                cx="200" cy="200" r="140"
                fill="none"
                stroke="rgba(167,139,250,0.15)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Animated dot moving around the loop */}
              <motion.circle
                r="6"
                fill="#A78BFA"
                filter="url(#loopGlow)"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "200px 200px" }}
                cx="340" cy="200"
              />

              {/* 4 stage nodes positioned around the circle */}
              {STAGES.map((stage, i) => {
                const angle = (i / STAGES.length) * 2 * Math.PI - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 140;
                const y = 200 + Math.sin(angle) * 140;
                const isActive = activeStage === i;

                return (
                  <g key={stage.label}>
                    {/* Pulse ring for active node */}
                    {isActive && (
                      <motion.circle
                        cx={x} cy={y} r="36"
                        fill="none"
                        stroke={stage.color}
                        strokeWidth="2"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        style={{ transformOrigin: `${x}px ${y}px` }}
                      />
                    )}

                    {/* Node circle */}
                    <motion.circle
                      cx={x} cy={y} r="28"
                      fill={isActive ? stage.color : "rgba(255,255,255,0.06)"}
                      stroke={isActive ? stage.color : "rgba(255,255,255,0.15)"}
                      strokeWidth="2"
                      animate={{
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: `${x}px ${y}px` }}
                    />

                    {/* Stage number */}
                    <text
                      x={x} y={y + 4}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fontFamily="'DM Sans', sans-serif"
                      fill={isActive ? "#FFFFFF" : "#9CA3AF"}
                    >
                      {i + 1}
                    </text>

                    {/* Label below node */}
                    <text
                      x={x}
                      y={y > 200 ? y + 56 : y - 42}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                      fontFamily="'DM Sans', sans-serif"
                      fill={isActive ? "#FFFFFF" : "#D1D5DB"}
                    >
                      {stage.label}
                    </text>
                    <text
                      x={x}
                      y={y > 200 ? y + 70 : y - 28}
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="'DM Sans', sans-serif"
                      fill="#6B7280"
                    >
                      {stage.detail}
                    </text>
                  </g>
                );
              })}

              {/* Center label */}
              <g>
                <text
                  x="200" y="195"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="'DM Sans', sans-serif"
                  fill="#A78BFA"
                  letterSpacing="2"
                >
                  YOUR
                </text>
                <text
                  x="200" y="212"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="800"
                  fontFamily="'DM Sans', sans-serif"
                  fill="#FFFFFF"
                  letterSpacing="0.5"
                >
                  DATA MOAT
                </text>
              </g>
            </svg>
          </div>

          {/* RIGHT: Compounding stat panel */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.06em", color: "#A78BFA",
              marginBottom: 14,
            }}>PREDICTOR ACCURACY OVER TIME</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {DATA_POINTS_OVER_TIME.map((point, i) => {
                const isActive = activeDataPoint === i;
                const isPast = activeDataPoint > i;
                return (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: isActive ? 1 : isPast ? 0.7 : 0.35,
                      x: isActive ? 0 : -3,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      background: isActive ? "rgba(167,139,250,0.12)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${isActive ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: 10,
                      transition: "background 0.4s, border-color 0.4s",
                    }}
                  >
                    <div>
                      <div style={{
                        fontSize: 11, fontWeight: 600,
                        color: isActive ? "#A78BFA" : "#6B7280",
                        letterSpacing: "0.04em",
                      }}>
                        {point.label}
                      </div>
                      <div style={{
                        fontSize: 13, color: "#D1D5DB", marginTop: 2,
                      }}>
                        {point.hires.toLocaleString("en-IN")} hires recorded
                      </div>
                    </div>

                    <div style={{
                      fontSize: 22, fontWeight: 800,
                      fontFamily: "ui-monospace, SFMono-Regular, monospace",
                      color: isActive ? "#FFFFFF" : "#6B7280",
                      letterSpacing: "-0.02em",
                    }}>
                      {point.accuracy}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div style={{
              marginTop: 18,
              padding: "14px 16px",
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 10,
              fontSize: 13, color: "#D1FAE5", lineHeight: 1.6,
            }}>
              <strong style={{ color: "#34D399" }}>By month 12:</strong>{" "}
              <span style={{ color: "#A7F3D0" }}>
                "Based on 312 similar hires on Zorvis: predicted 90-day rating 4.1/5."
              </span>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 36, paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          fontSize: 13, color: "#9CA3AF", lineHeight: 1.65,
        }}>
          <strong style={{ color: "#FFFFFF" }}>The intelligence is yours.</strong>{" "}
          Your company data, your patterns, your moat. A competitor entering tomorrow starts at zero.
          The gap widens every day you use Zorvis.
        </div>
      </div>

      {/* Mobile responsive — stack columns */}
      <style>{`
        @media (max-width: 800px) {
          .zv-loop-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
