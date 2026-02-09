export function Hero() {
  return (
    <section className="bg-hero">
      <div className="bg-hero__content">
        <h1 className="bg-hero__title">Bertrand Group</h1>
        <p className="bg-hero__descriptor">
          Brands, systems, and ventures. Sudbury, Canada.
        </p>
        <hr className="bg-hero__rule" />
      </div>

      <style>{`
        .bg-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--space-2xl) var(--space-md);
        }
        .bg-hero__content {
          max-width: 600px;
        }
        .bg-hero__title {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: var(--font-semibold);
          text-transform: uppercase;
          letter-spacing: 0.22em;
          line-height: var(--leading-tight);
          margin-bottom: var(--space-sm);
        }
        .bg-hero__descriptor {
          font-family: var(--font-body);
          font-size: var(--text-base);
          font-weight: var(--font-light);
          color: var(--text-subtle);
          letter-spacing: 0.03em;
        }
        .bg-hero__rule {
          width: 60px;
          height: 1px;
          background: var(--border);
          border: none;
          margin: var(--space-lg) auto 0;
        }
        @media (max-width: 480px) {
          .bg-hero { min-height: 85vh; }
        }
      `}</style>
    </section>
  )
}
