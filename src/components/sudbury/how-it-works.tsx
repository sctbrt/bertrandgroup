export function HowItWorks() {
  return (
    <section className="sb-hiw bg-fade">
      <div className="sb-container">
        <h2 className="sb-hiw__title">How it works</h2>
        <div className="sb-hiw__grid">
          <div className="sb-hiw__step">
            <span className="sb-hiw__num">1</span>
            <h3 className="sb-hiw__heading">Submit your details</h3>
            <p className="sb-hiw__desc">
              Tell us what&rsquo;s not working and which service you&rsquo;re
              interested in.
            </p>
          </div>
          <div className="sb-hiw__step">
            <span className="sb-hiw__num">2</span>
            <h3 className="sb-hiw__heading">We confirm scope</h3>
            <p className="sb-hiw__desc">
              We review availability, confirm access, and outline next steps.
            </p>
          </div>
          <div className="sb-hiw__step">
            <span className="sb-hiw__num">3</span>
            <h3 className="sb-hiw__heading">We build &amp; deliver</h3>
            <p className="sb-hiw__desc">
              Most projects are completed in 1&ndash;7 business days.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .sb-hiw {
          padding: var(--space-lg) 0;
        }
        .sb-hiw__title {
          font-family: var(--font-heading);
          font-size: clamp(1.125rem, 3vw, 1.375rem);
          font-weight: var(--font-semibold);
          color: var(--text);
          margin-bottom: var(--space-md);
          letter-spacing: -0.01em;
        }
        .sb-hiw__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }
        .sb-hiw__step {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .sb-hiw__num {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          color: var(--text-subtle);
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .sb-hiw__heading {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          color: var(--text);
        }
        .sb-hiw__desc {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .sb-hiw__grid {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
          }
          .sb-hiw__step {
            flex-direction: row;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .sb-hiw__num {
            margin-top: 2px;
          }
        }
      `}</style>
    </section>
  )
}
