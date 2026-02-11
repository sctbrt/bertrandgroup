"use client"

export function SudburyFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="sb-footer">
      <div className="sb-container">
        <div className="sb-footer__trust">
          <p className="sb-footer__location">
            Based in Greater Sudbury, Ontario.
            <br />
            Serving Northern Ontario &amp; Canada.
          </p>
          <p className="sb-footer__privacy">
            Your information is only used to respond to your request.
          </p>
        </div>
        <div className="sb-footer__bottom">
          <p className="sb-footer__copy">
            &copy; {year} Bertrand Group
          </p>
        </div>
      </div>

      <style>{`
        .sb-footer {
          border-top: 1px solid var(--border);
          padding: var(--space-md) 0 var(--space-lg);
          margin-top: var(--space-lg);
        }
        .sb-footer__trust {
          margin-bottom: var(--space-md);
        }
        .sb-footer__location {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: var(--space-xs);
        }
        .sb-footer__privacy {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-subtle);
        }
        .sb-footer__bottom {
          padding-top: var(--space-sm);
          border-top: 1px solid var(--border);
        }
        .sb-footer__copy {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-light);
          color: var(--text-subtle);
        }
      `}</style>
    </footer>
  )
}
