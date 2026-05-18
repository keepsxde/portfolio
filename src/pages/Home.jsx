import './Home.css'

const NAME = 'YOUR_NAME'

const STATS = [
  { label: 'Degree', value: 'B.IT — Cybersecurity & Software Engineering' },
  { label: 'Status', value: 'Undergraduate' },
  { label: 'Interests', value: 'Penetration Testing · CTF · Secure Dev' },
  { label: 'Location', value: 'YOUR_LOCATION' },
]

const BADGES = [
  { text: 'Cybersecurity', color: 'green' },
  { text: 'Software Engineering', color: 'cyan' },
  { text: 'Penetration Testing', color: 'purple' },
  { text: 'CTF Player', color: 'red' },
]

export default function Home() {
  return (
    <main className="page home">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="hero container">
        <div className="hero__left">
          <p className="hero__greeting">
            <span className="hero__prompt">$</span> whoami
          </p>
          <h1 className="hero__name">{NAME}</h1>
          <p className="hero__role">
            Cybersecurity &amp; Software Engineering Student
          </p>

          <div className="hero__badges">
            {BADGES.map(b => (
              <span key={b.text} className={`tag tag--${b.color}`}>{b.text}</span>
            ))}
          </div>

          <p className="hero__bio">
            {/* Replace this paragraph with your own introduction */}
            Add a short bio here — who you are, what drives your passion for
            cybersecurity, and what you're currently working toward. Keep it
            concise: two or three sentences is perfect.
          </p>

          <div className="hero__cta">
            <a href="/projects" className="btn btn--primary">View Projects</a>
            <a href="/writeups" className="btn btn--ghost">Read Writeups</a>
          </div>
        </div>

        <div className="hero__right">
          <div className="avatar-wrapper">
            <div className="avatar">
              <div className="avatar__inner">
                <svg viewBox="0 0 80 80" fill="none" className="avatar__placeholder-icon" aria-label="Profile photo placeholder">
                  <circle cx="40" cy="30" r="16" fill="var(--border)" />
                  <ellipse cx="40" cy="68" rx="26" ry="18" fill="var(--border)" />
                </svg>
                <p className="avatar__hint">Upload your photo</p>
              </div>
            </div>
            <div className="avatar__ring" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── Info stats ───────────────────────────── */}
      <section className="stats-section container">
        <div className="section-heading">
          <h2><span className="accent">~/</span>about</h2>
        </div>
        <div className="stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-card__label">{s.label}</span>
              <span className="stat-card__value">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Achievements ─────────────────────────── */}
      <section className="achievements-section container">
        <div className="section-heading">
          <h2><span className="accent">~/</span>achievements</h2>
        </div>
        <div className="achievements-grid">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="achievement-card">
              <div className="achievement-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </div>
              <div className="achievement-card__body">
                <h3 className="achievement-card__title">Achievement Title</h3>
                <p className="achievement-card__desc">
                  Short description of this achievement — competition name, date, or certification.
                </p>
              </div>
              <span className="achievement-card__date">YYYY</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ────────────────────────── */}
      <section className="certs-section container">
        <div className="section-heading">
          <h2><span className="accent">~/</span>certifications</h2>
        </div>
        <div className="certs-grid">
          {[1, 2, 3].map(i => (
            <div key={i} className="cert-card">
              <div className="cert-card__badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="cert-card__name">Certification Name</h3>
                <p className="cert-card__issuer">Issuing Organisation · YYYY</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
