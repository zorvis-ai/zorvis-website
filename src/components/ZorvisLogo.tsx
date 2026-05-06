"use client";

interface ZorvisLogoProps {
  size?: number;
  theme?: "dark" | "light";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
}

export function ZorvisLogo({
  size = 32,
  theme = "dark",
  showWordmark = true,
  showTagline = false,
  className = "",
}: ZorvisLogoProps) {
  const sw = size * 0.19;        // stroke width
  const dr = size * 0.15;        // dot radius outer
  const di = size * 0.11;        // dot radius inner
  const pad = sw / 2 + 1;

  // Z corners
  const TL = { x: pad, y: pad };
  const TR = { x: size - pad, y: pad };
  const BL = { x: pad, y: size - pad };
  const BR = { x: size - pad, y: size - pad };

  const barColor   = theme === "dark" ? "#4F46E5" : "#4F46E5";
  const diagColor  = theme === "dark" ? "#818CF8" : "#6366F1";
  const dotBg      = theme === "dark" ? "#0C0E1A" : "#F5F4F0";
  const dotFill    = theme === "dark" ? "#C7D2FE" : "#4F46E5";
  const wordColor  = theme === "dark" ? "#FFFFFF" : "#0C0E1A";
  const tagColor   = theme === "dark" ? "#818CF8" : "#4F46E5";

  const wordmarkSize = size * 0.56;
  const wordmarkX    = size + size * 0.22;
  const wordmarkY    = size * 0.72;

  const totalWidth = showWordmark ? size + size * 0.22 + wordmarkSize * 3.1 : size;

  return (
    <svg
      width={totalWidth}
      height={size}
      viewBox={`0 0 ${totalWidth} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zorvis AI"
    >
      {/* Hire — top bar */}
      <line x1={TL.x} y1={TL.y} x2={TR.x} y2={TR.y}
        stroke={barColor} strokeWidth={sw} strokeLinecap="round" />

      {/* Manage — diagonal */}
      <line x1={TR.x} y1={TR.y} x2={BL.x} y2={BL.y}
        stroke={diagColor} strokeWidth={sw} strokeLinecap="round" />

      {/* Grow — bottom bar */}
      <line x1={BL.x} y1={BL.y} x2={BR.x} y2={BR.y}
        stroke={barColor} strokeWidth={sw} strokeLinecap="round" />

      {/* Intelligence dot — TR junction (Hire → Manage) */}
      <circle cx={TR.x} cy={TR.y} r={dr} fill={dotBg} />
      <circle cx={TR.x} cy={TR.y} r={di} fill={dotFill} />

      {/* Intelligence dot — BL junction (Manage → Grow) */}
      <circle cx={BL.x} cy={BL.y} r={dr} fill={dotBg} />
      <circle cx={BL.x} cy={BL.y} r={di} fill={dotFill} />

      {/* Wordmark: "orvis" (Z is the mark) */}
      {showWordmark && (
        <text
          x={wordmarkX}
          y={wordmarkY}
          fontFamily="'DM Sans', sans-serif"
          fontSize={wordmarkSize}
          fontWeight="700"
          letterSpacing="-0.03em"
          fill={wordColor}
        >
          orvis
        </text>
      )}

      {/* Tagline */}
      {showTagline && (
        <text
          x={wordmarkX}
          y={size}
          fontFamily="'DM Sans', sans-serif"
          fontSize={size * 0.18}
          fontWeight="500"
          letterSpacing="0.12em"
          fill={tagColor}
        >
          PEOPLE INTELLIGENCE
        </text>
      )}
    </svg>
  );
}
