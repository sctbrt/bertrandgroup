export function StarterCard() {
  return (
    <section className="sb-starter bg-fade" id="pricing">
      <div className="sb-container">
        <div className="sb-starter__card">
          <div className="sb-starter__badge">
            <span className="sb-starter__badge-rec">Recommended</span>
            <span className="sb-starter__badge-time">
              Delivered in 1 business day
            </span>
          </div>

          <h2 className="sb-starter__title">Starter Site</h2>

          <p className="sb-starter__desc">
            A fast, focused website that clearly explains what you do and makes
            it easy for customers to contact you.
          </p>

          <ul className="sb-starter__list">
            <li>Clear messaging and contact flow</li>
            <li>Clean, mobile-first layout</li>
            <li>Fast turnaround with simple handoff</li>
          </ul>

          <a href="#get-started" className="sb-starter__cta">
            Get started &rarr;
          </a>

          <div className="sb-starter__price">
            <span className="sb-starter__amount">$750 CAD</span>
            <span className="sb-starter__note">
              Most businesses start here.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .sb-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 5vw, 3rem);
        }
        .sb-starter {
          padding: var(--space-lg) 0;
        }
        .sb-starter__card {
          background: linear-gradient(135deg, #1e1033 0%, #160d26 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: var(--radius-lg);
          padding: var(--space-md) var(--space-md) var(--space-md);
          max-width: 480px;
          margin: 0 auto;
        }
        .sb-starter__badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: var(--space-sm);
          flex-wrap: wrap;
        }
        .sb-starter__badge-rec {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          font-weight: var(--font-medium);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.15);
          padding: 0.25rem 0.625rem;
          border-radius: 4px;
        }
        .sb-starter__badge-time {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: #d4d4d8;
        }
        .sb-starter__title {
          font-family: var(--font-heading);
          font-size: clamp(1.25rem, 4vw, 1.5rem);
          font-weight: var(--font-semibold);
          color: var(--text);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .sb-starter__desc {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: #d4d4d8;
          line-height: 1.7;
          margin-bottom: var(--space-sm);
        }
        .sb-starter__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: var(--space-md);
        }
        .sb-starter__list li {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: #e4e4e7;
          padding-left: 1.25rem;
          position: relative;
        }
        .sb-starter__list li::before {
          content: "\\2713";
          position: absolute;
          left: 0;
          color: #a78bfa;
          font-size: var(--text-sm);
        }
        .sb-starter__cta {
          display: inline-block;
          background: var(--accent);
          color: #0a0a0a;
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-medium);
          padding: 0.75rem 1.75rem;
          border-radius: 8px;
          transition: background var(--duration-fast) ease,
                      transform var(--duration-fast) ease;
          margin-bottom: var(--space-sm);
        }
        .sb-starter__cta:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .sb-starter__price {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .sb-starter__amount {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-medium);
          color: #e4e4e7;
        }
        .sb-starter__note {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: #a1a1aa;
        }
        @media (max-width: 480px) {
          .sb-starter__card {
            padding: var(--space-sm) var(--space-sm) var(--space-sm);
          }
        }
      `}</style>
    </section>
  )
}
