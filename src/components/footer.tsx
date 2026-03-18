"use client"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer">
      <div className="bg-container">
        <div className="bg-footer__rule" aria-hidden="true">
          <span className="bg-footer__tick" />
          <span className="bg-footer__tick" />
          <span className="bg-footer__tick" />
        </div>
        <div className="bg-footer__inner">
          <div className="bg-footer__brand">
            <svg
              className="bg-footer__mark"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="16" cy="16" r="8.5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="16" cy="16" r="5.8" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="16" cy="16" r="3.4" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="16" cy="16" r="1.2" fill="currentColor" />
            </svg>
            <p className="bg-footer__text">
              &copy; {year} Bertrand Group
            </p>
          </div>
          <p className="bg-footer__text">Sudbury, Canada</p>
        </div>
      </div>

      <style>{`
        .bg-footer {
          padding: var(--space-lg) 0 var(--space-md);
          margin-top: var(--space-xl);
        }
        .bg-footer__rule {
          display: flex;
          align-items: center;
          gap: 0;
          margin-bottom: var(--space-md);
          height: 1px;
          background: var(--blueprint-line-medium);
          position: relative;
        }
        .bg-footer__tick {
          position: absolute;
          width: 1px;
          height: 8px;
          background: var(--blueprint-line-medium);
          top: -3.5px;
        }
        .bg-footer__tick:nth-child(1) { left: 0; }
        .bg-footer__tick:nth-child(2) { left: 50%; }
        .bg-footer__tick:nth-child(3) { right: 0; }
        .bg-footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .bg-footer__brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .bg-footer__mark {
          width: 16px;
          height: 16px;
          color: var(--blueprint-line);
          opacity: 0.5;
        }
        .bg-footer__text {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-subtle);
          letter-spacing: 0.02em;
        }
        @media (max-width: 480px) {
          .bg-footer__inner {
            flex-direction: column;
            gap: var(--space-xs);
            text-align: center;
          }
          .bg-footer__brand { justify-content: center; }
        }
      `}</style>
    </footer>
  )
}
