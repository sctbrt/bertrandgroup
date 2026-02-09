const team = [
  {
    name: "Scott Bertrand",
    role: "Founder & Principal",
    bio: "Brand strategy, UX direction, and operations across all Group ventures. Based in Greater Sudbury, Ontario.",
  },
  {
    name: "Devin Major",
    role: "Developer & Architect",
    bio: "Full-stack development, infrastructure, and technical architecture.",
  },
]

export function TeamSection() {
  return (
    <section className="bg-section bg-fade">
      <div className="bg-container">
        <p className="bg-section__label">Team</p>
        <div className="bg-team__grid">
          {team.map((member) => (
            <div key={member.name} className="bg-team__card">
              <h3 className="bg-team__name">{member.name}</h3>
              <p className="bg-team__role">{member.role}</p>
              <p className="bg-team__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-team__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }
        .bg-team__card {
          padding: var(--space-md) 0;
        }
        .bg-team__name {
          font-family: var(--font-heading);
          font-size: var(--text-xl);
          font-weight: var(--font-normal);
          letter-spacing: -0.02em;
          margin-bottom: var(--space-1);
        }
        .bg-team__role {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-normal);
          color: var(--accent);
          margin-bottom: var(--space-xs);
        }
        .bg-team__bio {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: var(--font-light);
          color: var(--text-muted);
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .bg-team__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
