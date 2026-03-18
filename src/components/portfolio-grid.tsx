import Image from "next/image"

const divisions = [
  {
    name: "Bertrand Brands",
    role: "Brand & Web Systems Studio",
    description:
      "Design, web, and systems work for businesses that need structure.",
    href: "https://brands.bertrandgroup.ca",
    linkText: "brands.bertrandgroup.ca",
    logomark: "/assets/bertrand-brands-logomark.png",
    wordmark: "/assets/bertrand-brands-wordmark-light-2026.png",
  },
  {
    name: "Bertrand POS Restaurant",
    role: "Restaurant Point of Sale",
    description:
      "Offline-first, full-suite POS for dine-in, bar, and takeout. Runs on any device.",
    href: "https://bertrandbrands.ca/bpos",
    linkText: "bertrandbrands.ca/bpos",
  },
]

const placeholders = [
  {
    name: "Healthcare",
    status: "Coming Soon",
  },
]

export function PortfolioGrid() {
  return (
    <section className="bg-section bg-fade">
      <div className="bg-container">
        <p className="bg-section__label">Portfolio</p>
        <div className="bg-portfolio__grid">
          {divisions.map((div) => (
            <a
              key={div.name}
              href={div.href}
              className="bg-portfolio__tile"
              target={div.href.startsWith("https://brands.") ? undefined : "_blank"}
              rel={div.href.startsWith("https://brands.") ? undefined : "noopener noreferrer"}
            >
              {div.logomark ? (
                <div className="bg-portfolio__lockup">
                  <Image
                    src={div.logomark}
                    alt=""
                    width={24}
                    height={24}
                    className="bg-portfolio__logomark"
                  />
                  <span className="bg-portfolio__divider" aria-hidden="true" />
                  <Image
                    src={div.wordmark!}
                    alt={div.name}
                    width={120}
                    height={24}
                    className="bg-portfolio__wordmark bg-portfolio__wordmark--lockup"
                  />
                </div>
              ) : div.wordmark ? (
                <Image
                  src={div.wordmark}
                  alt={div.name}
                  width={160}
                  height={24}
                  className="bg-portfolio__wordmark"
                />
              ) : (
                <span className="bg-portfolio__tile-name">{div.name}</span>
              )}
              <p className="bg-portfolio__role">{div.role}</p>
              <p className="bg-portfolio__desc">{div.description}</p>
              <span className="bg-portfolio__link">
                {div.linkText} &rarr;
              </span>
            </a>
          ))}

          {placeholders.map((ph) => (
            <div
              key={ph.name}
              className="bg-portfolio__tile bg-portfolio__tile--placeholder"
            >
              <span className="bg-portfolio__placeholder-name">{ph.name}</span>
              <p className="bg-portfolio__placeholder-status">{ph.status}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 5vw, 3rem);
        }
        .bg-section {
          padding: var(--space-2xl) 0;
        }
        .bg-section__label {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-semibold);
          color: var(--blueprint-line);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: var(--space-md);
        }
        .bg-portfolio__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }
        .bg-portfolio__tile {
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--blueprint-line-medium);
          border-radius: 2px;
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: var(--space-sm);
          transition: border-color var(--duration-fast) ease,
                      box-shadow var(--duration-fast) ease;
        }
        .bg-portfolio__tile::before,
        .bg-portfolio__tile::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: var(--blueprint-crosshair);
          border-style: solid;
          border-width: 0;
        }
        .bg-portfolio__tile::before {
          top: -1px;
          left: -1px;
          border-top-width: 1px;
          border-left-width: 1px;
        }
        .bg-portfolio__tile::after {
          bottom: -1px;
          right: -1px;
          border-bottom-width: 1px;
          border-right-width: 1px;
        }
        .bg-portfolio__tile:hover {
          border-color: var(--blueprint-line);
          box-shadow: 0 2px 12px -4px rgba(107, 135, 168, 0.15);
        }
        .bg-portfolio__tile--placeholder {
          border-style: dashed;
          border-color: var(--blueprint-line-light);
          opacity: 0.6;
          cursor: default;
        }
        .bg-portfolio__tile--placeholder:hover {
          border-color: var(--blueprint-line-light);
          box-shadow: none;
        }
        .bg-portfolio__lockup {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: var(--space-sm);
        }
        .bg-portfolio__logomark {
          width: 24px;
          height: 24px;
          opacity: 0.9;
          flex-shrink: 0;
          filter: brightness(0.15);
        }
        .bg-portfolio__divider {
          width: 1px;
          height: 20px;
          background: var(--blueprint-line-light);
          flex-shrink: 0;
        }
        .bg-portfolio__wordmark {
          height: 24px;
          max-width: 100%;
          width: auto;
          object-fit: contain;
          object-position: left;
          opacity: 0.9;
          margin-bottom: var(--space-sm);
          filter: brightness(0.15);
        }
        .bg-portfolio__wordmark--lockup {
          margin-bottom: 0;
        }
        .bg-portfolio__role {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--text-muted);
        }
        .bg-portfolio__desc {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-light);
          color: var(--text-subtle);
          line-height: 1.6;
        }
        .bg-portfolio__link {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-muted);
          letter-spacing: 0.02em;
          margin-top: auto;
          padding-top: var(--space-xs);
          transition: color var(--duration-fast) ease;
        }
        .bg-portfolio__tile:hover .bg-portfolio__link {
          color: var(--text);
        }
        .bg-portfolio__tile-name {
          font-family: var(--font-heading);
          font-size: var(--text-lg);
          font-weight: var(--font-semibold);
          letter-spacing: 0.04em;
          color: var(--text);
        }
        .bg-portfolio__placeholder-name {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: var(--font-light);
          color: var(--text-subtle);
        }
        .bg-portfolio__placeholder-status {
          font-family: var(--font-body);
          font-size: var(--text-xs);
          font-weight: var(--font-normal);
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        @media (max-width: 768px) {
          .bg-portfolio__grid { grid-template-columns: 1fr; }
          .bg-section { padding: var(--space-xl) 0; }
        }
      `}</style>
    </section>
  )
}
