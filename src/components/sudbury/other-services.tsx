export function OtherServices() {
  return (
    <section className="sb-other bg-fade">
      <div className="sb-container">
        <p className="sb-other__intro">Already have a website?</p>
        <div className="sb-other__grid">
          <div className="sb-other__card">
            <h3 className="sb-other__name">One-Page System Redesign</h3>
            <p className="sb-other__timeline">2&ndash;3 business days</p>
            <p className="sb-other__desc">
              A fully custom, code-based one-page website.
            </p>
            <p className="sb-other__price">$1,250 CAD</p>
            <a href="#get-started" className="sb-other__cta">
              Get started &rarr;
            </a>
          </div>
          <div className="sb-other__card">
            <h3 className="sb-other__name">Brandmark &amp; Visual Identity</h3>
            <p className="sb-other__timeline">5&ndash;7 business days</p>
            <p className="sb-other__desc">
              A complete brandmark with clear visual direction.
            </p>
            <p className="sb-other__price">$950 CAD</p>
            <a href="#get-started" className="sb-other__cta">
              Get started &rarr;
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .sb-other {
          padding: var(--space-lg) 0;
        }
        .sb-other__intro {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 3vw, 1.25rem);
          font-weight: var(--font-medium);
          color: var(--text);
          margin-bottom: var(--space-md);
          letter-spacing: -0.01em;
        }
        .sb-other__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-sm);
        }
        .sb-other__card {
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: var(--space-sm) var(--space-sm) var(--space-sm);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .sb-other__name {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: var(--font-medium);
          color: var(--text);
          letter-spacing: -0.01em;
        }
        .sb-other__timeline {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-subtle);
        }
        .sb-other__desc {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          line-height: 1.6;
        }
        .sb-other__price {
          font-family: var(--font-heading);
          font-size: var(--text-base);
          font-weight: var(--font-medium);
          color: #d4d4d8;
          margin-top: 0.25rem;
        }
        .sb-other__cta {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          transition: color var(--duration-fast) ease;
          margin-top: 0.25rem;
        }
        .sb-other__cta:hover {
          color: var(--text);
        }
        @media (max-width: 768px) {
          .sb-other__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
