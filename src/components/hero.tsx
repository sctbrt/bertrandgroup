"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !svgRef.current || !sectionRef.current) return

    const hasPlayed = localStorage.getItem("bgc_intro_seen")

    if (hasPlayed) {
      sectionRef.current.classList.add("skip-intro")
    } else {
      svgRef.current.classList.add("animate")
      localStorage.setItem("bgc_intro_seen", "1")
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-hero">
      <div className="bg-hero__canvas">
        <svg
          ref={svgRef}
          className="bg-hero__svg"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* ── Outer bounding rectangle ── */}
          <rect className="line-outer" x="60" y="30" width="680" height="540" rx="0"
            stroke="var(--blueprint-line)" strokeWidth="1.5" strokeOpacity="0.45" />
          {/* ── Inner bounding rectangle ── */}
          <rect className="line-inner" x="120" y="70" width="560" height="460" rx="0"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.3" />

          {/* ── Full-span horizontal guide lines ── */}
          <line className="guide" x1="0" y1="160" x2="800" y2="160"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="2 6" />
          <line className="guide" x1="0" y1="220" x2="800" y2="220"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="1 8" />
          <line className="guide" x1="0" y1="300" x2="800" y2="300"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.25" />
          <line className="guide" x1="0" y1="380" x2="800" y2="380"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="1 8" />
          <line className="guide" x1="0" y1="440" x2="800" y2="440"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="2 6" />

          {/* ── Full-span vertical guide lines ── */}
          <line className="guide" x1="290" y1="0" x2="290" y2="600"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="2 6" />
          <line className="guide" x1="400" y1="0" x2="400" y2="600"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.25" />
          <line className="guide" x1="510" y1="0" x2="510" y2="600"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="2 6" />
          <line className="guide" x1="345" y1="0" x2="345" y2="600"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.14" strokeDasharray="1 8" />
          <line className="guide" x1="455" y1="0" x2="455" y2="600"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.14" strokeDasharray="1 8" />

          {/* ── Diagonal construction lines ── */}
          <line className="guide" x1="200" y1="50" x2="600" y2="550"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.14" strokeDasharray="3 8" />
          <line className="guide" x1="600" y1="50" x2="200" y2="550"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.14" strokeDasharray="3 8" />

          {/* ── Construction circles ── */}
          {/* Large outer circle */}
          <circle className="circle-construct" cx="400" cy="300" r="200"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.3" />
          {/* B bounding circle */}
          <circle className="circle-construct" cx="400" cy="300" r="155"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.28" />
          {/* Upper bump arc */}
          <circle className="circle-construct" cx="440" cy="230" r="70"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.3" />
          {/* Lower bump arc */}
          <circle className="circle-construct" cx="440" cy="370" r="70"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.3" />
          {/* Inner dashed circle */}
          <circle className="circle-construct" cx="400" cy="300" r="100"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.22" strokeDasharray="3 5" />
          {/* Center circle */}
          <circle className="circle-construct" cx="400" cy="300" r="35"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.22" />

          {/* ── Dimension lines ── */}
          {/* Top width */}
          <line className="dim" x1="290" y1="115" x2="510" y2="115"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.35" />
          <line className="dim" x1="290" y1="110" x2="290" y2="120"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.4" />
          <line className="dim" x1="510" y1="110" x2="510" y2="120"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.4" />
          {/* Left height */}
          <line className="dim" x1="255" y1="160" x2="255" y2="440"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.35" />
          <line className="dim" x1="250" y1="160" x2="260" y2="160"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.4" />
          <line className="dim" x1="250" y1="440" x2="260" y2="440"
            stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.4" />
          {/* Right partial height */}
          <line className="dim" x1="545" y1="220" x2="545" y2="380"
            stroke="var(--blueprint-line)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 4" />
          <line className="dim" x1="540" y1="220" x2="550" y2="220"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.35" />
          <line className="dim" x1="540" y1="380" x2="550" y2="380"
            stroke="var(--blueprint-line)" strokeWidth="0.75" strokeOpacity="0.35" />

          {/* ── Dimension labels ── */}
          <text x="520" y="118" fill="var(--blueprint-line)" fillOpacity="0.45"
            fontFamily="var(--font-body)" fontSize="8" letterSpacing="0.05em">220</text>
          <text x="258" y="305" fill="var(--blueprint-line)" fillOpacity="0.45"
            fontFamily="var(--font-body)" fontSize="8" letterSpacing="0.05em"
            transform="rotate(-90 258 305)">280</text>

          {/* ── Corner crop marks ── */}
          {/* Inner — around B area */}
          <g stroke="var(--blueprint-line)" strokeWidth="1" strokeOpacity="0.55">
            <line x1="260" y1="125" x2="260" y2="145" />
            <line x1="260" y1="125" x2="280" y2="125" />
            <line x1="540" y1="125" x2="540" y2="145" />
            <line x1="520" y1="125" x2="540" y2="125" />
            <line x1="260" y1="475" x2="260" y2="455" />
            <line x1="260" y1="475" x2="280" y2="475" />
            <line x1="540" y1="475" x2="540" y2="455" />
            <line x1="520" y1="475" x2="540" y2="475" />
          </g>

          {/* ── Crosshair targets (⊕) ── */}
          <g stroke="var(--blueprint-crosshair)" strokeWidth="0.75" fill="none">
            {/* Top-left of B */}
            <circle cx="290" cy="160" r="6" />
            <line x1="282" y1="160" x2="298" y2="160" />
            <line x1="290" y1="152" x2="290" y2="168" />
            {/* Top-right of B */}
            <circle cx="510" cy="160" r="6" />
            <line x1="502" y1="160" x2="518" y2="160" />
            <line x1="510" y1="152" x2="510" y2="168" />
            {/* Bottom-left of B */}
            <circle cx="290" cy="440" r="6" />
            <line x1="282" y1="440" x2="298" y2="440" />
            <line x1="290" y1="432" x2="290" y2="448" />
            {/* Bottom-right of B */}
            <circle cx="510" cy="440" r="6" />
            <line x1="502" y1="440" x2="518" y2="440" />
            <line x1="510" y1="432" x2="510" y2="448" />
            {/* Center crosshair */}
            <circle cx="400" cy="300" r="8" />
            <line x1="389" y1="300" x2="411" y2="300" />
            <line x1="400" y1="289" x2="400" y2="311" />
          </g>

          {/* ── Measurement ruler (bottom) ── */}
          <g fill="var(--blueprint-line)" fillOpacity="0.3">
            {Array.from({ length: 30 }, (_, i) => (
              <circle key={`ruler-b-${i}`} cx={150 + i * 18} cy="510" r={i % 3 === 0 ? 1.5 : 1} />
            ))}
          </g>
          {/* Measurement ruler (top) */}
          <g fill="var(--blueprint-line)" fillOpacity="0.25">
            {Array.from({ length: 30 }, (_, i) => (
              <circle key={`ruler-t-${i}`} cx={150 + i * 18} cy="55" r={i % 3 === 0 ? 1.5 : 1} />
            ))}
          </g>

          {/* ── DOT-MATRIX B ── */}
          {/* 7 rows × 4-5 cols, centered at (400, 300) */}
          {/* Grid: 55px spacing, dot radius 18 */}
          <g fill="var(--blueprint-dot)">
            {/* Row 1 */}
            <circle cx="290" cy="160" r="18" />
            <circle cx="345" cy="160" r="18" />
            <circle cx="400" cy="160" r="18" />
            <circle cx="455" cy="160" r="18" />
            {/* Row 2 */}
            <circle cx="290" cy="207" r="18" />
            <circle cx="345" cy="207" r="18" />
            <circle cx="455" cy="207" r="18" />
            <circle cx="510" cy="207" r="18" />
            {/* Row 3 */}
            <circle cx="290" cy="253" r="18" />
            <circle cx="345" cy="253" r="18" />
            <circle cx="455" cy="253" r="18" />
            <circle cx="510" cy="253" r="18" />
            {/* Row 4 — crossbar */}
            <circle cx="290" cy="300" r="18" />
            <circle cx="345" cy="300" r="18" />
            <circle cx="400" cy="300" r="18" />
            <circle cx="455" cy="300" r="18" />
            {/* Row 5 */}
            <circle cx="290" cy="347" r="18" />
            <circle cx="345" cy="347" r="18" />
            <circle cx="455" cy="347" r="18" />
            <circle cx="510" cy="347" r="18" />
            {/* Row 6 */}
            <circle cx="290" cy="393" r="18" />
            <circle cx="345" cy="393" r="18" />
            <circle cx="455" cy="393" r="18" />
            <circle cx="510" cy="393" r="18" />
            {/* Row 7 */}
            <circle cx="290" cy="440" r="18" />
            <circle cx="345" cy="440" r="18" />
            <circle cx="400" cy="440" r="18" />
            <circle cx="455" cy="440" r="18" />
          </g>

          {/* ── Intersection nodes ── */}
          <g fill="var(--blueprint-line)" fillOpacity="0.5">
            <circle cx="290" cy="300" r="2.5" />
            <circle cx="510" cy="300" r="2.5" />
            <circle cx="400" cy="160" r="2.5" />
            <circle cx="400" cy="440" r="2.5" />
          </g>
        </svg>
      </div>

      <div className="bg-hero__text">
        <div className="bg-hero__text-frame">
          <h1 className="bg-hero__title">Bertrand Group</h1>
          <p className="bg-hero__descriptor">
            Brands, systems, and ventures. Sudbury, Canada.
          </p>
        </div>
      </div>

      <style>{`
        .bg-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--space-lg) var(--space-md);
          gap: var(--space-md);
        }
        .bg-hero__canvas {
          width: 100%;
          max-width: 640px;
        }
        .bg-hero__svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Draw-in animation */
        .bg-hero__svg .guide,
        .bg-hero__svg .line-outer,
        .bg-hero__svg .line-inner,
        .bg-hero__svg .circle-construct,
        .bg-hero__svg .dim {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          transition: none;
        }
        .bg-hero__svg.animate .guide,
        .bg-hero__svg.animate .line-outer,
        .bg-hero__svg.animate .line-inner,
        .bg-hero__svg.animate .circle-construct,
        .bg-hero__svg.animate .dim {
          animation: drawLine 2s var(--ease-out) forwards;
        }

        .bg-hero__svg g[fill="var(--blueprint-dot)"] circle {
          opacity: 0;
          transition: none;
        }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle {
          animation: dotFadeIn 0.5s var(--ease-out) forwards;
        }
        /* Clockwise reveal: top row L→R, right col down, bottom row R→L, left col up, then interior */
        /* Row 1: dots 1-4 (top, L→R) */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(1) { animation-delay: 0.8s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(2) { animation-delay: 0.87s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(3) { animation-delay: 0.94s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(4) { animation-delay: 1.01s; }
        /* Row 2: dots 5-8 — right side (8) continues clockwise, left (5,6) fills last */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(8) { animation-delay: 1.08s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(7) { animation-delay: 1.15s; }
        /* Row 3: dots 9-12 — right side (12) continues down */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(12) { animation-delay: 1.22s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(11) { animation-delay: 1.29s; }
        /* Row 4 crossbar: dot 16 (right) continues, then 15, 14, 13 (L) */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(16) { animation-delay: 1.36s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(15) { animation-delay: 1.43s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(14) { animation-delay: 1.50s; }
        /* Row 5: right side (20) continues down */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(20) { animation-delay: 1.57s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(19) { animation-delay: 1.64s; }
        /* Row 6: right side (24) continues */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(24) { animation-delay: 1.71s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(23) { animation-delay: 1.78s; }
        /* Row 7: bottom row R→L */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(28) { animation-delay: 1.85s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(27) { animation-delay: 1.92s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(26) { animation-delay: 1.99s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(25) { animation-delay: 2.06s; }
        /* Left column going up: row 6, 5, 4 left dots */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(21) { animation-delay: 2.13s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(17) { animation-delay: 2.20s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(13) { animation-delay: 2.27s; }
        /* Left column continuing up: row 3, 2 left dots */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(9) { animation-delay: 2.34s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(5) { animation-delay: 2.41s; }
        /* Interior dots (second from left): fill in last */
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(6) { animation-delay: 2.48s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(10) { animation-delay: 2.55s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(18) { animation-delay: 2.62s; }
        .bg-hero__svg.animate g[fill="var(--blueprint-dot)"] circle:nth-child(22) { animation-delay: 2.69s; }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        @keyframes dotFadeIn {
          to { opacity: 1; }
        }

        /* Skip animation on repeat visits */
        .skip-intro .bg-hero__svg .guide,
        .skip-intro .bg-hero__svg .line-outer,
        .skip-intro .bg-hero__svg .line-inner,
        .skip-intro .bg-hero__svg .circle-construct,
        .skip-intro .bg-hero__svg .dim {
          stroke-dasharray: none;
          stroke-dashoffset: 0;
        }
        .skip-intro .bg-hero__svg g[fill="var(--blueprint-dot)"] circle {
          opacity: 1;
        }
        .skip-intro .bg-hero__text {
          opacity: 1;
          animation: none;
        }

        /* Reduced motion: show everything immediately */
        @media (prefers-reduced-motion: reduce) {
          .bg-hero__svg .guide,
          .bg-hero__svg .line-outer,
          .bg-hero__svg .line-inner,
          .bg-hero__svg .circle-construct,
          .bg-hero__svg .dim {
            stroke-dasharray: none;
            stroke-dashoffset: 0;
          }
          .bg-hero__svg g[fill="var(--blueprint-dot)"] circle {
            opacity: 1;
          }
        }

        .bg-hero__text {
          max-width: 600px;
          opacity: 0;
          animation: textFadeIn 0.8s var(--ease-out) 2.5s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-hero__text { opacity: 1; animation: none; }
        }
        @keyframes textFadeIn {
          to { opacity: 1; }
        }

        .bg-hero__text-frame {
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--blueprint-line-medium);
          border-radius: 2px;
          padding: var(--space-md) var(--space-lg);
        }
        .bg-hero__text-frame::before,
        .bg-hero__text-frame::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: var(--blueprint-crosshair);
          border-style: solid;
          border-width: 0;
        }
        .bg-hero__text-frame::before {
          top: -1px;
          left: -1px;
          border-top-width: 1px;
          border-left-width: 1px;
        }
        .bg-hero__text-frame::after {
          bottom: -1px;
          right: -1px;
          border-bottom-width: 1px;
          border-right-width: 1px;
        }

        .bg-hero__title {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: var(--font-semibold);
          text-transform: uppercase;
          letter-spacing: 0.22em;
          line-height: var(--leading-tight);
          margin-bottom: var(--space-xs);
        }
        .bg-hero__descriptor {
          font-family: var(--font-body);
          font-size: var(--text-base);
          font-weight: var(--font-light);
          color: var(--text-muted);
          letter-spacing: 0.03em;
        }
        @media (max-width: 768px) {
          .bg-hero__canvas { max-width: 480px; }
        }
        @media (max-width: 480px) {
          .bg-hero { min-height: 85vh; }
          .bg-hero__canvas { max-width: 320px; }
        }
      `}</style>
    </section>
  )
}
