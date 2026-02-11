export function SudburyHero() {
  return (
    <section className="sb-hero" id="hero">
      <div className="sb-hero__content">
        <p className="sb-hero__eyebrow">Sudbury &amp; Northern Ontario</p>
        <h1 className="sb-hero__title">
          Your website isn&rsquo;t working.
          <br />
          Let&rsquo;s fix it.
        </h1>
        <p className="sb-hero__subhead">
          It&rsquo;s not broken &mdash; it&rsquo;s unclear, outdated, or not
          doing its job. We fix websites so they&rsquo;re clear, trustworthy,
          and built to convert.
        </p>
        <div className="sb-hero__actions">
          <a href="#get-started" className="sb-hero__cta">
            Get started &rarr;
          </a>
          <p className="sb-hero__microcopy">
            No sales calls. We confirm next steps within 1 business day.
          </p>
          <a href="#pricing" className="sb-hero__secondary">
            See pricing &darr;
          </a>
        </div>
      </div>

      <style>{`
        .sb-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--space-2xl) var(--space-md);
        }
        .sb-hero__content {
          max-width: 620px;
        }
        .sb-hero__eyebrow {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-medium);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #a78bfa;
          margin-bottom: var(--space-md);
        }
        .sb-hero__title {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 6vw, 3rem);
          font-weight: var(--font-semibold);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: var(--space-sm);
        }
        .sb-hero__subhead {
          font-family: var(--font-body);
          font-size: var(--text-base);
          font-weight: var(--font-normal);
          color: #d4d4d4;
          line-height: 1.7;
          margin-bottom: var(--space-md);
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .sb-hero__actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xs);
        }
        .sb-hero__cta {
          display: inline-block;
          background: var(--accent);
          color: #0a0a0a;
          font-family: var(--font-body);
          font-size: var(--text-base);
          font-weight: var(--font-medium);
          padding: 0.875rem 2rem;
          border-radius: 8px;
          letter-spacing: 0.01em;
          transition: background var(--duration-fast) ease,
                      transform var(--duration-fast) ease;
        }
        .sb-hero__cta:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .sb-hero__microcopy {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-subtle);
          margin-top: var(--space-xs);
        }
        .sb-hero__secondary {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          margin-top: var(--space-sm);
          transition: color var(--duration-fast) ease;
        }
        .sb-hero__secondary:hover {
          color: var(--text);
        }
        @media (max-width: 480px) {
          .sb-hero {
            min-height: 90vh;
            padding: var(--space-xl) var(--space-sm);
          }
          .sb-hero__title {
            font-size: clamp(1.5rem, 8vw, 2.25rem);
          }
        }
      `}</style>
    </section>
  )
}
