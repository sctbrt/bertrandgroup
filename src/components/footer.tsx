"use client"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer">
      <div className="bg-container">
        <div className="bg-footer__inner">
          <p className="bg-footer__text">
            &copy; {year} Bertrand Group
          </p>
          <p className="bg-footer__text">Sudbury, Canada</p>
        </div>
      </div>

      <style>{`
        .bg-footer {
          border-top: 1px solid var(--border);
          padding: var(--space-lg) 0;
          margin-top: var(--space-xl);
        }
        .bg-footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bg-footer__text {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-light);
          color: var(--text-subtle);
        }
        @media (max-width: 480px) {
          .bg-footer__inner {
            flex-direction: column;
            gap: var(--space-xs);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
