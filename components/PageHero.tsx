"use client";

import { ReactNode } from "react";
import Link from "next/link";
import ZorvisModulesStrip from "./ZorvisModulesStrip";

type PageHeroProps = {
  /** Small label above headline, e.g. "PRICING" or "TRUST & SECURITY" */
  eyebrow?: string;
  /** Main headline — keep tight, 1-2 lines */
  headline: ReactNode;
  /** 1-2 sentence summary of the page */
  summary: string;
  /** Optional connector line that ties this page back to the broader product */
  suiteContext?: string;
  /** Optional CTAs */
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Hide the modules strip (default: false — strip shown by default) */
  hideModulesStrip?: boolean;
  /** Visual variant */
  variant?: "default" | "dark";
};

export default function PageHero({
  eyebrow,
  headline,
  summary,
  suiteContext,
  primaryCta,
  secondaryCta,
  hideModulesStrip = false,
  variant = "default",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <>
      {/* Hero block */}
      <section
        style={{
          paddingTop: "calc(80px + env(safe-area-inset-top, 0px))",
          paddingBottom: 56,
          paddingLeft: 24,
          paddingRight: 24,
          background: isDark
            ? "linear-gradient(180deg,#0D1117 0%,#1A1F2E 100%)"
            : "linear-gradient(180deg,#F7F8FC 0%,#FFFFFF 100%)",
          color: isDark ? "#FFFFFF" : "#0D1117",
          textAlign: "center",
          fontFamily: "'DM Sans',system-ui,sans-serif",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {eyebrow && (
            <div
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: isDark ? "#A78BFA" : "#4F46E5",
                background: isDark
                  ? "rgba(167,139,250,0.12)"
                  : "rgba(79,70,229,0.08)",
                padding: "5px 12px",
                borderRadius: 100,
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          )}

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: "0 0 14px",
              color: isDark ? "#FFFFFF" : "#0D1117",
            }}
          >
            {headline}
          </h1>

          <p
            style={{
              fontSize: 16,
              color: isDark ? "#9CA3AF" : "#6B7280",
              lineHeight: 1.6,
              margin: "0 auto",
              maxWidth: 560,
            }}
          >
            {summary}
          </p>

          {suiteContext && (
            <p
              style={{
                fontSize: 13,
                color: isDark ? "#7C7F8B" : "#9CA3AF",
                marginTop: 18,
                marginBottom: 0,
                fontStyle: "italic",
              }}
            >
              {suiteContext}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                justifyContent: "center",
                marginTop: 28,
              }}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  style={{
                    background: isDark ? "#FFFFFF" : "#0D1117",
                    color: isDark ? "#0D1117" : "#FFFFFF",
                    padding: "11px 22px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  style={{
                    background: "transparent",
                    color: isDark ? "#FFFFFF" : "#0D1117",
                    padding: "11px 22px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: "none",
                    border: `1px solid ${
                      isDark ? "rgba(255,255,255,0.2)" : "#E2E6F0"
                    }`,
                  }}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Modules strip — under the hero on every sub-page by default */}
      {!hideModulesStrip && <ZorvisModulesStrip variant="compact" />}
    </>
  );
}
