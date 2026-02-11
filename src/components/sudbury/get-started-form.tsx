"use client"

import { useState } from "react"

const offerings = [
  { value: "starter", label: "Starter Site — $750 (Recommended)" },
  { value: "redesign", label: "One-Page System Redesign — $1,250" },
  { value: "brandmark", label: "Brandmark & Visual Identity — $950" },
]

export function GetStartedForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="sb-form" id="get-started">
        <div className="sb-container">
          <div className="sb-form__success">
            <h2 className="sb-form__title">Thank you</h2>
            <p className="sb-form__subhead">
              We&rsquo;ve received your details and will respond within 1
              business day.
            </p>
          </div>
        </div>
        <style>{formStyles}</style>
      </section>
    )
  }

  return (
    <section className="sb-form" id="get-started">
      <div className="sb-container">
        <h2 className="sb-form__title">Get started</h2>
        <p className="sb-form__subhead">
          Send your details. We&rsquo;ll confirm availability and next steps
          within 1 business day.
        </p>

        <form className="sb-form__form" onSubmit={handleSubmit}>
          {/* Offering — always visible, pre-selected */}
          <div className="sb-form__field">
            <label className="sb-form__label" htmlFor="offering">
              Which offering?
            </label>
            <select
              id="offering"
              name="offering"
              className="sb-form__select"
              defaultValue="starter"
            >
              {offerings.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Step 1 fields */}
          <div className="sb-form__field">
            <label className="sb-form__label" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="sb-form__input"
              placeholder="Full name"
              required
            />
          </div>

          <div className="sb-form__field">
            <label className="sb-form__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="sb-form__input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="sb-form__field">
            <label className="sb-form__label" htmlFor="business">
              Business name
            </label>
            <input
              id="business"
              name="business"
              type="text"
              className="sb-form__input"
              placeholder="Your business or organization"
              required
            />
          </div>

          {step === 1 && (
            <button
              type="button"
              className="sb-form__next"
              onClick={() => setStep(2)}
            >
              Continue &rarr;
            </button>
          )}

          {/* Step 2 fields */}
          {step === 2 && (
            <>
              <div className="sb-form__field sb-form__field--step2">
                <label className="sb-form__label" htmlFor="website">
                  Your website (if you have one)
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  className="sb-form__input"
                  placeholder="https://yoursite.com"
                />
              </div>

              <div className="sb-form__field sb-form__field--step2">
                <label className="sb-form__label" htmlFor="message">
                  What&rsquo;s not working?
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="sb-form__textarea"
                  placeholder="What feels unclear, outdated, or ineffective about your current site?"
                  rows={4}
                />
              </div>

              <button type="submit" className="sb-form__submit">
                Fix my website &rarr;
              </button>

              <p className="sb-form__disclaimer">
                No obligation. We&rsquo;ll review and respond before any work
                begins.
              </p>
            </>
          )}
        </form>
      </div>

      <style>{formStyles}</style>
    </section>
  )
}

const formStyles = `
  .sb-form {
    padding: var(--space-xl) 0 var(--space-lg);
    border-top: 1px solid var(--border);
  }
  .sb-form__title {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    font-weight: var(--font-semibold);
    color: var(--text);
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }
  .sb-form__subhead {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--font-normal);
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: var(--space-md);
    max-width: 480px;
  }
  .sb-form__form {
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  .sb-form__field {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
  .sb-form__field--step2 {
    animation: sb-fadeIn 0.3s var(--ease-out);
  }
  @keyframes sb-fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .sb-form__field--step2 {
      animation: none;
    }
  }
  .sb-form__label {
    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--text);
  }
  .sb-form__input,
  .sb-form__select,
  .sb-form__textarea {
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: var(--font-normal);
    color: var(--text);
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem 0.875rem;
    transition: border-color var(--duration-fast) ease;
    width: 100%;
  }
  .sb-form__input::placeholder,
  .sb-form__textarea::placeholder {
    color: var(--text-subtle);
  }
  .sb-form__input:focus,
  .sb-form__select:focus,
  .sb-form__textarea:focus {
    outline: none;
    border-color: var(--accent);
  }
  .sb-form__select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23737373' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.875rem center;
    padding-right: 2.5rem;
    cursor: pointer;
  }
  .sb-form__select option {
    background: var(--bg-elevated);
    color: var(--text);
  }
  .sb-form__textarea {
    resize: vertical;
    min-height: 100px;
  }
  .sb-form__next,
  .sb-form__submit {
    display: inline-block;
    font-family: var(--font-body);
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    padding: 0.875rem 2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background var(--duration-fast) ease,
                transform var(--duration-fast) ease;
    align-self: flex-start;
  }
  .sb-form__next {
    background: var(--bg-elevated);
    color: var(--text);
    border: 1px solid var(--border);
  }
  .sb-form__next:hover {
    border-color: var(--border-hover);
  }
  .sb-form__submit {
    background: var(--accent);
    color: #0a0a0a;
  }
  .sb-form__submit:hover {
    background: var(--accent-hover);
    transform: translateY(-1px);
  }
  .sb-form__disclaimer {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: var(--font-normal);
    color: var(--text-subtle);
    margin-top: 0.25rem;
  }
  .sb-form__success {
    text-align: center;
    padding: var(--space-lg) 0;
  }
`
