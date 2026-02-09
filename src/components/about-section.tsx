export function AboutSection() {
  return (
    <section className="bg-section bg-fade">
      <div className="bg-container">
        <p className="bg-section__label">About</p>
        <p className="bg-about__text">
          Bertrand Group is a family of brands and platforms built in Northern
          Ontario. We create and operate businesses focused on clarity,
          structure, and lasting value &mdash; from design studios to digital
          platforms to hospitality.
        </p>
      </div>

      <style>{`
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
        }
      `}</style>
    </section>
  )
}
