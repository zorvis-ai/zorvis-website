"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  UserCheck,
  Wallet,
  TrendingUp,
  Heart,
} from "lucide-react";

type Module = {
  id: string;
  name: string;
  outcome: string;
  icon: typeof Search;
  status: "july26" | "oct26";
  detail: string;
};

const MODULES: Module[] = [
  {
    id: "hire",
    name: "Hire",
    outcome: "1,000 CVs sorted in 3 minutes",
    icon: Search,
    status: "july26",
    detail: "Multi-board posting, AI ranking, aptitude tests on the candidate's preferred channel.",
  },
  {
    id: "interview",
    name: "Interview",
    outcome: "AI phone interviews in 8 languages",
    icon: Phone,
    status: "oct26",
    detail: "AI conducts the first-round interview by phone in the candidate's preferred language. Recorded, transcribed, scored.",
  },
  {
    id: "onboard",
    name: "Onboard",
    outcome: "Day 1 in hours, not days",
    icon: UserCheck,
    status: "july26",
    detail: "Document collection, e-signing, IT asset request, buddy assignment — all automated.",
  },
  {
    id: "pay",
    name: "Pay",
    outcome: "Zero compliance errors, India + UAE",
    icon: Wallet,
    status: "oct26",
    detail: "Payroll runs, statutory filings, WPS for UAE, all generated automatically.",
  },
  {
    id: "perform",
    name: "Perform",
    outcome: "Reviews that take 1 hour, not 1 week",
    icon: TrendingUp,
    status: "oct26",
    detail: "OKRs, 1:1s, peer feedback, calibrated reviews — anchored to hire-day baseline.",
  },
  {
    id: "retain",
    name: "Retain",
    outcome: "Team health, never individual surveillance",
    icon: Heart,
    status: "oct26",
    detail: "Department-level health scoring. No individual flight-risk scores. Ever.",
  },
];

export default function ZorvisModulesStrip({
  variant = "default",
  followsDarkHero = false,
}: {
  variant?: "default" | "compact";
  /**
   * Set to true when this strip sits directly under PageHero variant="dark".
   * Adds a fade-in transition so the strip doesn't look disconnected from the dark hero.
   */
  followsDarkHero?: boolean;
}) {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <div
      style={{
        background: "#FAFAFA",
        borderTop: followsDarkHero ? "none" : "1px solid #E5E5EA",
        borderBottom: "1px solid #E5E5EA",
        padding: variant === "compact" ? "20px 24px" : "32px 24px",
        // Subtle gradient on top edge if following a dark hero — softens the transition
        backgroundImage: followsDarkHero
          ? "linear-gradient(180deg, rgba(13,17,23,0.08) 0%, rgba(13,17,23,0) 24px), linear-gradient(180deg, #FAFAFA 0%, #FAFAFA 100%)"
          : undefined,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: variant === "compact" ? 14 : 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#6B7280",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            One platform · Six modules
          </div>
          <h3
            style={{
              fontSize: variant === "compact" ? 14 : 16,
              fontWeight: 600,
              color: "#0D1117",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            From the first job post to your strongest team.
          </h3>
        </div>

        {/* Modules grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 8,
          }}
          className="zv-modules-grid"
        >
          {MODULES.map((mod) => {
            const isActive = activeModule === mod.id;
            const isJuly = mod.status === "july26";

            return (
              <div
                key={mod.id}
                onMouseEnter={() => setActiveModule(mod.id)}
                onMouseLeave={() => setActiveModule(null)}
                style={{
                  position: "relative",
                  padding: "14px 12px",
                  background: isActive ? "#FFFFFF" : "transparent",
                  borderRadius: 8,
                  cursor: "default",
                  textAlign: "center",
                  border: `1px solid ${isActive ? "#E5E5EA" : "transparent"}`,
                  transition: "all 0.15s ease",
                  boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: isJuly ? "#E0E7FF" : "#F5F5F7",
                    color: isJuly ? "#4F46E5" : "#9CA3AF",
                    marginBottom: 8,
                  }}
                >
                  <mod.icon style={{ width: 18, height: 18 }} />
                </div>

                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: isJuly ? "#0D1117" : "#9CA3AF",
                    marginBottom: 2,
                  }}
                >
                  {mod.name}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: "#6B7280",
                    lineHeight: 1.35,
                    minHeight: 28,
                  }}
                >
                  {mod.outcome}
                </div>

                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginTop: 6,
                    color: isJuly ? "#4F46E5" : "#9CA3AF",
                  }}
                >
                  {isJuly ? "○ JULY 2026" : "○ OCT 2026"}
                </div>

                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 220,
                      padding: "10px 12px",
                      background: "#0D1117",
                      color: "#FFFFFF",
                      borderRadius: 8,
                      fontSize: 11,
                      lineHeight: 1.5,
                      zIndex: 100,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: -4,
                        left: "50%",
                        transform: "translateX(-50%) rotate(45deg)",
                        width: 8,
                        height: 8,
                        background: "#0D1117",
                      }}
                    />
                    {mod.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .zv-modules-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 6px !important;
          }
        }
        @media (max-width: 420px) {
          .zv-modules-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
