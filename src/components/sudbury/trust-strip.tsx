export function TrustStrip() {
  return (
    <section className="sb-trust bg-fade">
      <div className="sb-container">
        <h2 className="sb-trust__title">What clients usually come to us for</h2>
        <ul className="sb-trust__list">
          <li className="sb-trust__item">Confusing or unclear websites</li>
          <li className="sb-trust__item">
            Outdated design that doesn&rsquo;t build trust
          </li>
          <li className="sb-trust__item">
            Sites that aren&rsquo;t bringing in leads
          </li>
        </ul>
      </div>

      <style>{`
        .sb-trust {
          padding: var(--space-lg) 0;
          border-top: 1px solid var(--border);
        }
        .sb-trust__title {
          font-family: var(--font-heading);
          font-size: clamp(1rem, 3vw, 1.25rem);
          font-weight: var(--font-medium);
          color: var(--text);
          margin-bottom: var(--space-sm);
          letter-spacing: -0.01em;
        }
        .sb-trust__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }
        .sb-trust__item {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          padding-left: 1.25rem;
          position: relative;
        }
        .sb-trust__item::before {
          content: "\\2014";
          position: absolute;
          left: 0;
          color: var(--text-subtle);
        }
      `}</style>
    </section>
  )
}
