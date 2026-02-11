"use client"

import { useEffect, useState } from "react"

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    const form = document.getElementById("get-started")
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) {
            setVisible((prev) => {
              // Show when hero exits viewport
              if (!entry.isIntersecting) return true
              return false
            })
          }
          if (entry.target === form && entry.isIntersecting) {
            setVisible(false)
          }
        }
      },
      { threshold: 0 }
    )

    observer.observe(hero)
    if (form) observer.observe(form)

    return () => observer.disconnect()
  }, [])

  // Re-check form visibility separately to handle both observers
  useEffect(() => {
    const form = document.getElementById("get-started")
    if (!form) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        className={`sb-sticky ${visible ? "sb-sticky--visible" : ""}`}
        aria-hidden={!visible}
      >
        <div className="sb-sticky__inner">
          <a href="#get-started" className="sb-sticky__cta">
            Get started &rarr;
          </a>
          <p className="sb-sticky__sub">Response within 1 business day</p>
        </div>
      </div>

      <style>{`
        .sb-sticky {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          background: rgba(10, 10, 10, 0.95);
          border-top: 1px solid var(--border);
          padding: 0.75rem var(--space-sm);
          transform: translateY(100%);
          transition: transform var(--duration-fast) var(--ease-out);
          pointer-events: none;
        }
        .sb-sticky--visible {
          transform: translateY(0);
          pointer-events: auto;
        }
        .sb-sticky__inner {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
        }
        .sb-sticky__cta {
          display: inline-block;
          background: var(--accent);
          color: #0a0a0a;
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          padding: 0.625rem 1.5rem;
          border-radius: 6px;
          transition: background var(--duration-fast) ease;
          white-space: nowrap;
        }
        .sb-sticky__cta:hover {
          background: var(--accent-hover);
        }
        .sb-sticky__sub {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-subtle);
          white-space: nowrap;
        }
        @media (min-width: 769px) {
          .sb-sticky {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sb-sticky {
            transition: none;
          }
        }
      `}</style>
    </>
  )
}
