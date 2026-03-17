export function AboutSection() {
  return (
    <section className="bg-section bg-fade">
      <div className="bg-container">
        <div className="bg-about__frame">
          <p className="bg-section__label">About</p>
          <p className="bg-about__text">
            Bertrand Group is a family of brands and platforms built in Northern
            Ontario. We create and operate businesses focused on clarity,
            structure, and lasting value &mdash; from design studios to digital
            platforms to hospitality.
          </p>
        </div>
      </div>

      <style>{`
        .bg-about__frame {
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--blueprint-line-medium);
          border-radius: 2px;
          padding: var(--space-lg);
        }
        .bg-about__frame::before,
        .bg-about__frame::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: var(--blueprint-crosshair);
          border-style: solid;
          border-width: 0;
        }
        .bg-about__frame::before {
          top: -1px;
          left: -1px;
          border-top-width: 1px;
          border-left-width: 1px;
        }
        .bg-about__frame::after {
          bottom: -1px;
          right: -1px;
          border-bottom-width: 1px;
          border-right-width: 1px;
        }
        .bg-about__text {
          font-family: var(--font-body);
          font-size: var(--text-lg);
          font-weight: var(--font-light);
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 640px;
        }
        @media (max-width: 480px) {
          .bg-about__text { font-size: var(--text-base); }
          .bg-about__frame { padding: var(--space-md); }
        }
      `}</style>
    </section>
  )
}
