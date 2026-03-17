"use client"

export function BPOSTile({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        className="bg-portfolio__tile bg-portfolio__tile--bpos"
        onClick={onClick}
        type="button"
      >
        <span className="bg-portfolio__bpos-label">B-POS</span>
        <p className="bg-portfolio__role">Restaurant Point of Sale</p>
        <p className="bg-portfolio__desc">
          Offline-first, full-suite POS for dine-in, bar, and takeout.
          Runs on any device.
        </p>
        <span className="bg-portfolio__link">See pricing &rarr;</span>
        <span className="bg-portfolio__bpos-badge">New</span>
      </button>

      <style>{`
        .bg-portfolio__tile--bpos {
          cursor: pointer;
          text-align: left;
          font: inherit;
        }
        .bg-portfolio__tile--bpos:hover {
          border-color: rgba(217, 119, 6, 0.3);
        }
        .bg-portfolio__tile--bpos:hover .bg-portfolio__link {
          color: var(--accent);
        }
        .bg-portfolio__bpos-label {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          letter-spacing: 0.04em;
          color: var(--text);
        }
        .bg-portfolio__bpos-badge {
          position: absolute;
          top: var(--space-sm);
          right: var(--space-sm);
          font-family: var(--font-body);
          font-size: 0.625rem;
          font-weight: var(--font-semibold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #FDFBF7;
          background: var(--accent);
          padding: 2px 8px;
          border-radius: 4px;
        }
      `}</style>
    </>
  )
}
