export default function LoginError() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="relative z-10 max-w-xl w-full text-center">
        <div className="fade-up delay-1">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              fontSize: '0.85rem',
              color: '#f87171',
            }}
          >
            <span
              className="pulse-dot"
              style={{ background: '#f87171', boxShadow: '0 0 12px #f87171' }}
            />
            Authentication Error
          </div>
        </div>

        <div
          className="fade-up delay-2 mx-auto mb-8 flex items-center justify-center"
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f87171"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="fade-up delay-3 hero-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Something went wrong<br />
          <span className="gradient-text">during sign-in</span>
        </h1>

        <p
          className="fade-up delay-4"
          style={{
            fontSize: '1.05rem',
            color: 'var(--sb-text-muted)',
            maxWidth: '480px',
            margin: '1.25rem auto 0',
            lineHeight: 1.7,
          }}
        >
          We couldn&apos;t complete your authentication. This may be a temporary issue.
          Please try logging in again — if the problem persists, contact your administrator.
        </p>
      </div>
    </section>
  );
}
