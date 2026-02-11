import Link from "next/link"

export function SudburyHeader() {
  return (
    <header className="sb-header">
      <div className="sb-header__inner">
        <Link href="/sudbury" className="sb-header__logo">
          <span className="sb-header__name">Bertrand Brands</span>
        </Link>
        <a href="#get-started" className="sb-header__link">
          Get started &rarr;
        </a>
      </div>

      <style>{`
        .sb-header {
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
        .sb-header__inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 5vw, 3rem);
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sb-header__logo {
          display: flex;
          align-items: center;
        }
        .sb-header__name {
          font-family: var(--font-heading);
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text);
        }
        .sb-header__link {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          letter-spacing: 0.02em;
          transition: color var(--duration-fast) ease;
        }
        .sb-header__link:hover {
          color: var(--text);
        }
      `}</style>
    </header>
  )
}
