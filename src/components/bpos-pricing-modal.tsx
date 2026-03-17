"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface PricingPlan {
  name: string
  tier: "standard" | "pro"
  price: number
  period: "month" | "year"
  annualSavings?: string
  features: string[]
  cta: string
  href: string
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: "Standard",
    tier: "standard",
    price: 99,
    period: "month",
    features: [
      "Full POS — orders, payments, floor plan",
      "Up to 3 terminals",
      "Cash & card payments",
      "Receipt printing",
      "Basic reporting",
      "Menu management",
      "Employee PIN login",
    ],
    cta: "Start Free Trial",
    href: "https://bertrandbrands.ca/bpos#pricing",
  },
  {
    name: "Standard",
    tier: "standard",
    price: 948,
    period: "year",
    annualSavings: "Save $240/yr",
    features: [
      "Full POS — orders, payments, floor plan",
      "Up to 3 terminals",
      "Cash & card payments",
      "Receipt printing",
      "Basic reporting",
      "Menu management",
      "Employee PIN login",
    ],
    cta: "Start Free Trial",
    href: "https://bertrandbrands.ca/bpos#pricing",
  },
  {
    name: "Pro",
    tier: "pro",
    price: 199,
    period: "month",
    features: [
      "Everything in Standard, plus:",
      "Unlimited terminals",
      "Kitchen Display System (KDS)",
      "Bar tabs & happy hour pricing",
      "Inventory management",
      "Advanced reporting & P&L",
      "Employee scheduling & tips",
      "Gift cards & private room booking",
      "Multi-terminal sync",
      "Cloud backup",
    ],
    cta: "Start Free Trial",
    href: "https://bertrandbrands.ca/bpos#pricing",
    popular: true,
  },
  {
    name: "Pro",
    tier: "pro",
    price: 1908,
    period: "year",
    annualSavings: "Save $480/yr",
    features: [
      "Everything in Standard, plus:",
      "Unlimited terminals",
      "Kitchen Display System (KDS)",
      "Bar tabs & happy hour pricing",
      "Inventory management",
      "Advanced reporting & P&L",
      "Employee scheduling & tips",
      "Gift cards & private room booking",
      "Multi-terminal sync",
      "Cloud backup",
    ],
    cta: "Start Free Trial",
    href: "https://bertrandbrands.ca/bpos#pricing",
    popular: true,
  },
]

const earlyBird = {
  title: "Early Bird — First 10 Customers",
  standardMonth: 59,
  standardYear: 564,
  proMonth: 129,
  proYear: 1236,
  note: "Lock in Early Bird pricing for life. Limited to the first 10 sign-ups.",
}

export function BPOSPricingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [billing, setBilling] = useState<"month" | "year">("month")
  const modalRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  const activePlans = plans.filter((p) => p.period === billing)
  const standardPlan = activePlans.find((p) => p.tier === "standard")!
  const proPlan = activePlans.find((p) => p.tier === "pro")!

  const earlyStandard =
    billing === "month" ? earlyBird.standardMonth : earlyBird.standardYear
  const earlyPro =
    billing === "month" ? earlyBird.proMonth : earlyBird.proYear

  return (
    <>
      <div className="bpos-modal__backdrop" onClick={onClose} />
      <div
        className="bpos-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="B-POS Pricing"
      >
        <button
          className="bpos-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="bpos-modal__header">
          <p className="bpos-modal__label">B-POS</p>
          <h2 className="bpos-modal__title">
            Restaurant POS.
            <br />
            <span className="bpos-modal__title-accent">Built offline-first.</span>
          </h2>
          <p className="bpos-modal__subtitle">
            Full-suite point of sale for dine-in, bar, and takeout.
            Runs on any device. No internet required.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="bpos-modal__toggle-wrap">
          <button
            className={`bpos-modal__toggle-btn ${billing === "month" ? "active" : ""}`}
            onClick={() => setBilling("month")}
          >
            Monthly
          </button>
          <button
            className={`bpos-modal__toggle-btn ${billing === "year" ? "active" : ""}`}
            onClick={() => setBilling("year")}
          >
            Annual
            <span className="bpos-modal__toggle-badge">Save 20%</span>
          </button>
        </div>

        {/* Early Bird Banner */}
        <div className="bpos-modal__early-bird">
          <span className="bpos-modal__early-bird-tag">
            Limited
          </span>
          <span>{earlyBird.title}</span>
        </div>

        {/* Plans */}
        <div className="bpos-modal__plans">
          {[standardPlan, proPlan].map((plan, i) => {
            const earlyPrice = i === 0 ? earlyStandard : earlyPro
            return (
              <div
                key={plan.tier}
                className={`bpos-modal__plan ${plan.popular ? "bpos-modal__plan--popular" : ""}`}
              >
                {plan.popular && (
                  <span className="bpos-modal__plan-badge">Most Popular</span>
                )}
                <h3 className="bpos-modal__plan-name">{plan.name}</h3>

                <div className="bpos-modal__plan-pricing">
                  <span className="bpos-modal__plan-price-early">
                    ${earlyPrice}
                  </span>
                  <span className="bpos-modal__plan-price-regular">
                    ${plan.price}
                  </span>
                  <span className="bpos-modal__plan-period">
                    /{billing === "month" ? "mo" : "yr"}
                  </span>
                </div>

                {plan.annualSavings && (
                  <p className="bpos-modal__plan-savings">{plan.annualSavings}</p>
                )}

                <ul className="bpos-modal__plan-features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span className="bpos-modal__check" aria-hidden="true">
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`bpos-modal__plan-cta ${plan.popular ? "bpos-modal__plan-cta--primary" : ""}`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

        <p className="bpos-modal__footer-note">
          14-day free trial. No credit card required. Cancel anytime.
        </p>
        <p className="bpos-modal__footer-link">
          <a
            href="https://pos.bertrandgroup.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the demo &rarr;
          </a>
        </p>

        <style>{`
          .bpos-modal__backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            z-index: 200;
          }
          .bpos-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 201;
            background: var(--bg);
            border: 1px solid var(--border);
            border-radius: 16px;
            max-width: 780px;
            width: calc(100% - 2rem);
            max-height: calc(100vh - 2rem);
            overflow-y: auto;
            padding: clamp(1.5rem, 4vw, 2.5rem);
            animation: bpos-modal-in 0.25s ease-out;
          }
          @keyframes bpos-modal-in {
            from {
              opacity: 0;
              transform: translate(-50%, -48%);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }
          .bpos-modal__close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: var(--text-subtle);
            font-size: 1.5rem;
            cursor: pointer;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            transition: color var(--duration-fast) ease, background var(--duration-fast) ease;
          }
          .bpos-modal__close:hover {
            color: var(--text);
            background: rgba(255, 255, 255, 0.06);
          }
          .bpos-modal__header {
            text-align: center;
            margin-bottom: var(--space-md);
          }
          .bpos-modal__label {
            font-family: var(--font-body);
            font-size: var(--text-xs);
            font-weight: var(--font-medium);
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: var(--space-xs);
          }
          .bpos-modal__title {
            font-family: var(--font-heading);
            font-size: clamp(1.25rem, 3vw, 1.75rem);
            font-weight: var(--font-semibold);
            line-height: 1.3;
            letter-spacing: -0.01em;
            margin-bottom: var(--space-xs);
          }
          .bpos-modal__title-accent {
            color: var(--accent);
          }
          .bpos-modal__subtitle {
            font-family: var(--font-body);
            font-size: var(--text-sm);
            font-weight: var(--font-light);
            color: var(--text-subtle);
            max-width: 480px;
            margin: 0 auto;
            line-height: 1.6;
          }

          /* Billing toggle */
          .bpos-modal__toggle-wrap {
            display: flex;
            justify-content: center;
            gap: 2px;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 3px;
            max-width: 280px;
            margin: 0 auto var(--space-sm);
          }
          .bpos-modal__toggle-btn {
            flex: 1;
            background: none;
            border: none;
            color: var(--text-subtle);
            font-family: var(--font-body);
            font-size: var(--text-xs);
            font-weight: var(--font-medium);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            transition: all var(--duration-fast) ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
          }
          .bpos-modal__toggle-btn.active {
            background: rgba(255, 255, 255, 0.08);
            color: var(--text);
          }
          .bpos-modal__toggle-badge {
            font-size: 0.625rem;
            background: var(--accent);
            color: #000;
            padding: 1px 5px;
            border-radius: 3px;
            font-weight: var(--font-semibold);
            letter-spacing: 0.02em;
          }

          /* Early Bird */
          .bpos-modal__early-bird {
            text-align: center;
            font-family: var(--font-body);
            font-size: var(--text-xs);
            color: var(--text-muted);
            margin-bottom: var(--space-md);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          .bpos-modal__early-bird-tag {
            font-size: 0.625rem;
            font-weight: var(--font-semibold);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--accent);
            border: 1px solid var(--accent);
            border-radius: 3px;
            padding: 1px 6px;
          }

          /* Plans grid */
          .bpos-modal__plans {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-sm);
            margin-bottom: var(--space-md);
          }
          .bpos-modal__plan {
            position: relative;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: var(--space-sm) clamp(1rem, 3vw, 1.5rem);
            display: flex;
            flex-direction: column;
          }
          .bpos-modal__plan--popular {
            border-color: var(--accent);
            box-shadow: 0 0 20px -8px rgba(217, 119, 6, 0.15);
          }
          .bpos-modal__plan-badge {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--accent);
            color: #000;
            font-family: var(--font-body);
            font-size: 0.625rem;
            font-weight: var(--font-semibold);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 3px 10px;
            border-radius: 4px;
            white-space: nowrap;
          }
          .bpos-modal__plan-name {
            font-family: var(--font-heading);
            font-size: var(--text-lg);
            font-weight: var(--font-semibold);
            letter-spacing: -0.01em;
            margin-bottom: var(--space-xs);
          }
          .bpos-modal__plan-pricing {
            display: flex;
            align-items: baseline;
            gap: 6px;
            margin-bottom: 4px;
          }
          .bpos-modal__plan-price-early {
            font-family: var(--font-heading);
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: var(--font-semibold);
            color: var(--accent);
          }
          .bpos-modal__plan-price-regular {
            font-family: var(--font-body);
            font-size: var(--text-sm);
            color: var(--text-subtle);
            text-decoration: line-through;
          }
          .bpos-modal__plan-period {
            font-family: var(--font-body);
            font-size: var(--text-xs);
            color: var(--text-subtle);
          }
          .bpos-modal__plan-savings {
            font-family: var(--font-body);
            font-size: var(--text-xs);
            color: var(--accent);
            margin-bottom: var(--space-xs);
          }
          .bpos-modal__plan-features {
            list-style: none;
            margin: var(--space-xs) 0;
            padding: 0;
            flex: 1;
          }
          .bpos-modal__plan-features li {
            font-family: var(--font-body);
            font-size: var(--text-xs);
            font-weight: var(--font-light);
            color: var(--text-muted);
            padding: 4px 0;
            display: flex;
            align-items: flex-start;
            gap: 8px;
            line-height: 1.5;
          }
          .bpos-modal__check {
            color: var(--accent);
            font-size: 0.7rem;
            flex-shrink: 0;
            margin-top: 2px;
          }
          .bpos-modal__plan-cta {
            display: block;
            text-align: center;
            font-family: var(--font-body);
            font-size: var(--text-sm);
            font-weight: var(--font-medium);
            padding: 0.65rem 1rem;
            border-radius: 8px;
            margin-top: auto;
            transition: all var(--duration-fast) ease;
            background: rgba(255, 255, 255, 0.06);
            color: var(--text);
            border: 1px solid var(--border);
          }
          .bpos-modal__plan-cta:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--border-hover);
          }
          .bpos-modal__plan-cta--primary {
            background: var(--accent);
            color: #000;
            border-color: var(--accent);
          }
          .bpos-modal__plan-cta--primary:hover {
            background: var(--accent-hover);
            border-color: var(--accent-hover);
          }

          /* Footer */
          .bpos-modal__footer-note {
            text-align: center;
            font-family: var(--font-body);
            font-size: var(--text-xs);
            font-weight: var(--font-light);
            color: var(--text-subtle);
          }
          .bpos-modal__footer-link {
            text-align: center;
            margin-top: 6px;
          }
          .bpos-modal__footer-link a {
            font-family: var(--font-body);
            font-size: var(--text-xs);
            color: var(--accent);
            transition: color var(--duration-fast) ease;
          }
          .bpos-modal__footer-link a:hover {
            color: var(--accent-hover);
          }

          /* Responsive */
          @media (max-width: 640px) {
            .bpos-modal__plans {
              grid-template-columns: 1fr;
            }
            .bpos-modal {
              top: auto;
              bottom: 0;
              left: 0;
              transform: none;
              width: 100%;
              max-width: 100%;
              max-height: 92vh;
              border-radius: 16px 16px 0 0;
              animation: bpos-modal-slide-up 0.3s ease-out;
            }
            @keyframes bpos-modal-slide-up {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          }
        `}</style>
      </div>
    </>
  )
}
