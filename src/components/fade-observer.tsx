"use client"

import { useEffect } from "react"

export function FadeObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".bg-fade").forEach((el) => {
        el.classList.add("revealed")
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll(".bg-fade").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <style>{`
      .bg-fade {
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
      }
      .bg-fade.revealed {
        opacity: 1;
        transform: translateY(0);
      }
      @media (prefers-reduced-motion: reduce) {
        .bg-fade {
          opacity: 1;
          transform: none;
          transition: none;
        }
      }
    `}</style>
  )
}
