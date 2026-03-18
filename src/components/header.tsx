export function Header() {
  return (
    <header className="bg-header">
      <div className="bg-header__inner">
        <a href="/" className="bg-header__logo">
          <svg
            className="bg-header__mark"
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
          <span className="bg-header__name">Bertrand Group</span>
        </a>
        <nav className="bg-header__nav">
          <a
            href="https://brands.bertrandgroup.ca"
            className="bg-header__link"
          >
            Studio &rarr;
          </a>
          <a
            href="https://bertrandbrands.ca/bpos"
            className="bg-header__link bg-header__link--accent"
          >
            B-POS &rarr;
          </a>
        </nav>
      </div>

      <style>{`
        .bg-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(245, 240, 232, 0.85);
          border-bottom: 1px solid var(--blueprint-line-light);
        }
        .bg-header__inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 5vw, 3rem);
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .bg-header__logo {
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }
        .bg-header__mark {
          width: 24px;
          height: 24px;
          color: var(--text);
          flex-shrink: 0;
        }
        .bg-header__name {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text);
        }
        .bg-header__link {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          letter-spacing: 0.02em;
          transition: color var(--duration-fast) ease;
        }
        .bg-header__nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .bg-header__link:hover {
          color: var(--text);
        }
        .bg-header__link--accent {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--accent);
          letter-spacing: 0.02em;
          padding: 0;
          transition: color var(--duration-fast) ease;
        }
        .bg-header__link--accent:hover {
          color: var(--accent-hover);
        }
        @media (max-width: 480px) {
          .bg-header__inner { height: 56px; }
          .bg-header__name { font-size: var(--text-base); }
        }
      `}</style>
    </header>
  )
}
