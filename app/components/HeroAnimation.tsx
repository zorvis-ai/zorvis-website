"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScoreBand = {
  label: string;
  band: string;
  delay: number;
  finalY: number;
  isTop: boolean;
};

const candidates: ScoreBand[] = [
  { label: "P. Sharma",   band: "82–88", delay: 0.0, finalY: 60,  isTop: true  },
  { label: "A. Khan",     band: "78–84", delay: 0.1, finalY: 110, isTop: true  },
  { label: "R. Kumar",    band: "74–80", delay: 0.2, finalY: 160, isTop: true  },
  { label: "S. Iyer",     band: "62–68", delay: 0.3, finalY: 240, isTop: false },
  { label: "M. Reddy",    band: "55–61", delay: 0.4, finalY: 290, isTop: false },
  { label: "F. Al Mansoori", band: "48–54", delay: 0.5, finalY: 340, isTop: false },
];

export default function HeroAnimation() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 420"
        className="w-full h-full"
        role="img"
        aria-label="Animation showing CVs being ranked by AI"
      >
        {/* Soft background */}
        <defs>
          <radialGradient id="bg" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(91,79,207,0.15)" />
            <stop offset="100%" stopColor="rgba(91,79,207,0)" />
          </radialGradient>
          <linearGradient id="topCard" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5B4FCF" />
            <stop offset="100%" stopColor="#7C6FFF" />
          </linearGradient>
          <linearGradient id="midCard" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F1F2F8" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="400" height="420" fill="url(#bg)" />

        {/* "Inbox" header */}
        <motion.g
          initial={reduce ? {} : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <text x="200" y="28" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui" fontWeight="600" letterSpacing="2">
            ZORVIS · CANDIDATE PIPELINE
          </text>
        </motion.g>

        {/* Candidate cards */}
        {candidates.map((c, i) => (
          <motion.g
            key={c.label}
            initial={reduce ? {} : { x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: c.delay + 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Card body */}
            <rect
              x="40"
              y={c.finalY}
              width="320"
              height="38"
              rx="8"
              fill={c.isTop ? "url(#topCard)" : "url(#midCard)"}
              stroke={c.isTop ? "#5B4FCF" : "#E2E8F0"}
              strokeWidth="1"
            />

            {/* Avatar circle */}
            <circle
              cx="62"
              cy={c.finalY + 19}
              r="11"
              fill={c.isTop ? "rgba(255,255,255,0.25)" : "#5B4FCF"}
              opacity={c.isTop ? 1 : 0.85}
            />
            <text
              x="62"
              y={c.finalY + 23}
              textAnchor="middle"
              fill={c.isTop ? "#FFFFFF" : "#FFFFFF"}
              fontSize="10"
              fontWeight="600"
              fontFamily="system-ui"
            >
              {c.label.split(" ")[0][0]}
            </text>

            {/* Name (blurred for non-top) */}
            <text
              x="84"
              y={c.finalY + 16}
              fill={c.isTop ? "#FFFFFF" : "#94A3B8"}
              fontSize="12"
              fontWeight="600"
              fontFamily="system-ui"
              filter={c.isTop ? undefined : "url(#blur)"}
            >
              {c.label}
            </text>

            {/* Subtitle */}
            <text
              x="84"
              y={c.finalY + 30}
              fill={c.isTop ? "rgba(255,255,255,0.75)" : "#CBD5E1"}
              fontSize="10"
              fontFamily="system-ui"
            >
              CV ranked · Test ready
            </text>

            {/* Score band — animated in after card lands */}
            <motion.g
              initial={reduce ? {} : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: c.delay + 0.9,
                ease: "backOut",
              }}
            >
              <rect
                x="290"
                y={c.finalY + 9}
                width="60"
                height="20"
                rx="10"
                fill={c.isTop ? "rgba(255,255,255,0.2)" : "#F1F5F9"}
                stroke={c.isTop ? "rgba(255,255,255,0.4)" : "#CBD5E1"}
                strokeWidth="0.5"
              />
              <text
                x="320"
                y={c.finalY + 22}
                textAnchor="middle"
                fill={c.isTop ? "#FFFFFF" : "#475569"}
                fontSize="11"
                fontWeight="700"
                fontFamily="ui-monospace, SFMono-Regular, monospace"
              >
                {c.band}
              </text>
            </motion.g>
          </motion.g>
        ))}

        {/* WhatsApp pulse on top card — signals "test ready to send" */}
        <motion.g
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
        >
          <motion.circle
            cx="345"
            cy="79"
            r="6"
            fill="#25D366"
            animate={
              reduce
                ? {}
                : {
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.3, 1],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* Footer status line */}
        <motion.text
          x="200"
          y="400"
          textAnchor="middle"
          fill="#5B4FCF"
          fontSize="11"
          fontWeight="600"
          fontFamily="system-ui"
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          400 CVs ranked in 2 minutes 14 seconds
        </motion.text>

        {/* Blur filter for non-top names */}
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
