import Link from "next/link"

export function Header() {
  return (
    <header className="bg-header">
      <div className="bg-header__inner">
        <Link href="/" className="bg-header__logo">
          <span className="bg-header__name">Bertrand Group</span>
        </Link>
        <Link
          href="https://brands.bertrandgroup.ca"
          className="bg-header__link"
        >
          Studio &rarr;
        </Link>
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
          background: rgba(10, 10, 10, 0.8);
          border-bottom: 1px solid var(--border);
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
        }
        .bg-header__name {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
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
        .bg-header__link:hover {
          color: var(--text);
        }
        @media (max-width: 480px) {
          .bg-header__inner { height: 56px; }
          .bg-header__name { font-size: var(--text-base); }
        }
      `}</style>
    </header>
  )
}
