export default function Home() {
  return (
    <>
      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--sb-teal), var(--sb-cyan))' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
              Sortbrite
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#systems" className="nav-link">Systems</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
              Get Started
            </a>
          </div>
          <button className="md:hidden" style={{ color: 'var(--sb-text-muted)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '5rem' }}>
        <div className="grid-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="fade-up delay-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(20, 184, 166, 0.08)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                fontSize: '0.85rem',
                color: 'var(--sb-teal-bright)',
              }}>
              <span className="pulse-dot" />
              Enterprise-Grade Systems Platform
            </div>
          </div>

          <h1 className="fade-up delay-2 hero-heading">
            One Platform.<br />
            <span className="gradient-text">Every Solution.</span>
          </h1>

          <p className="fade-up delay-3" style={{
            fontSize: '1.25rem',
            color: 'var(--sb-text-muted)',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.7,
            marginTop: '1.5rem',
          }}>
            Sortbrite powers organizations with integrated management systems — from schools and HR
            to procurement, point-of-sale, construction, and beyond. All unified under one platform.
          </p>

          <div className="fade-up delay-4 flex flex-wrap items-center justify-center gap-4" style={{ marginTop: '2.5rem' }}>
            <a href="#systems" className="btn-primary">
              Explore Systems
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Request a Demo
            </a>
          </div>

          {/* Hero Stats Row */}
          <div className="fade-up delay-6 flex flex-wrap justify-center gap-12" style={{ marginTop: '4rem' }}>
            {[
              { number: '10+', label: 'Systems Built' },
              { number: '50+', label: 'Organizations Served' },
              { number: '99.9%', label: 'Uptime Guarantee' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number" style={{ fontSize: '2rem' }}>{stat.number}</div>
                <div style={{ color: 'var(--sb-text-dim)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-up delay-8">
          <div className="scroll-indicator">
            <div className="scroll-dot" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ SYSTEMS SHOWCASE ═══════════════ */}
      <section id="systems" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag fade-up">Our Systems</span>
            <h2 className="fade-up delay-1 section-heading">
              Powerful Systems for<br />
              <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="fade-up delay-2" style={{
              color: 'var(--sb-text-muted)',
              maxWidth: '560px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}>
              Each system runs on its own subdomain — fully independent yet seamlessly integrated
              into the Sortbrite ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* School Management */}
            <a href="https://school.sortbrite.com" target="_blank" rel="noopener noreferrer" className="system-card fade-up delay-3 block">
              <div className="card-glow" />
              <div className="icon-box" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="card-title">School Management</h3>
              <p className="card-desc">
                Complete academic management — enrollment, grading, attendance, scheduling, parent portals, and student information systems.
              </p>
              <div className="card-subdomain">
                <span>school.sortbrite.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>

            {/* HRIS */}
            <a href="https://hris.sortbrite.com" target="_blank" rel="noopener noreferrer" className="system-card fade-up delay-4 block">
              <div className="card-glow" />
              <div className="icon-box" style={{ background: 'rgba(20, 184, 166, 0.15)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3 className="card-title">HRIS</h3>
              <p className="card-desc">
                Human Resource Information System — employee management, payroll, leave tracking, performance reviews, and organizational charts.
              </p>
              <div className="card-subdomain">
                <span>hris.sortbrite.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>

            {/* Procurement, Assets & Budget */}
            <a href="https://pabm.sortbrite.com" target="_blank" rel="noopener noreferrer" className="system-card fade-up delay-5 block">
              <div className="card-glow" />
              <div className="icon-box" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M7 8h2M7 11h4" />
                  <circle cx="16" cy="10" r="2" />
                </svg>
              </div>
              <h3 className="card-title">Procurement, Assets & Budget</h3>
              <p className="card-desc">
                End-to-end procurement workflows, asset tracking, budget allocation, purchase orders, supplier management, and financial reporting.
              </p>
              <div className="card-subdomain">
                <span>pabm.sortbrite.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>

            {/* POS */}
            <a href="https://pos.sortbrite.com" target="_blank" rel="noopener noreferrer" className="system-card fade-up delay-6 block">
              <div className="card-glow" />
              <div className="icon-box" style={{ background: 'rgba(236, 72, 153, 0.15)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <path d="M1 10h22" />
                  <path d="M6 16h4M14 16h4" />
                </svg>
              </div>
              <h3 className="card-title">Point of Sale</h3>
              <p className="card-desc">
                Fast and reliable POS system — inventory management, sales tracking, receipt generation, multi-branch support, and real-time analytics.
              </p>
              <div className="card-subdomain">
                <span>pos.sortbrite.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>

            {/* Construction */}
            <a href="https://construction.sortbrite.com" target="_blank" rel="noopener noreferrer" className="system-card fade-up delay-7 block">
              <div className="card-glow" />
              <div className="icon-box" style={{ background: 'rgba(251, 146, 60, 0.15)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20" />
                  <path d="M5 20V8l7-5 7 5v12" />
                  <rect x="9" y="12" width="6" height="8" />
                  <path d="M9 12h6" />
                  <path d="M12 3v3" />
                </svg>
              </div>
              <h3 className="card-title">Construction Management</h3>
              <p className="card-desc">
                Project tracking, material management, contractor coordination, progress reporting, site inspections, and cost estimation tools.
              </p>
              <div className="card-subdomain">
                <span>construction.sortbrite.com</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </a>

            {/* More Systems */}
            <div className="system-card fade-up delay-8 more-systems-card">
              <div className="card-glow" />
              <div className="icon-box" style={{ background: 'rgba(148, 163, 184, 0.1)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sb-text-dim)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </div>
              <h3 className="card-title">And Many More</h3>
              <p className="card-desc">
                We continuously build and deploy new systems — Billing, Document Management, Fleet Tracking, Warehouse, and custom solutions tailored to your needs.
              </p>
              <div className="card-subdomain" style={{ color: 'var(--sb-teal)' }}>
                <span>Contact us for custom systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ FEATURES SECTION ═══════════════ */}
      <section id="features" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="section-tag fade-up">Why Sortbrite</span>
              <h2 className="fade-up delay-1 section-heading" style={{ textAlign: 'left' }}>
                Built for Scale.<br />
                <span className="gradient-text">Designed for You.</span>
              </h2>
              <p className="fade-up delay-2" style={{
                color: 'var(--sb-text-muted)',
                lineHeight: 1.7,
                marginTop: '1rem',
                fontSize: '1.05rem',
              }}>
                Every Sortbrite system is architected from the ground up with enterprise reliability,
                modern user experience, and seamless integration at its core.
              </p>
            </div>

            {/* Right: Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sb-teal-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  ),
                  title: 'Enterprise Security',
                  desc: 'Role-based access, encryption, audit trails, and compliance-ready architecture.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sb-amber-warm)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  ),
                  title: 'Lightning Fast',
                  desc: 'Optimized for speed with real-time data processing and instant responses.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                  title: 'Cloud Native',
                  desc: 'Deployed on modern cloud infrastructure with automatic scaling and backups.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  title: 'Reliable Uptime',
                  desc: '99.9% uptime SLA with redundant systems and 24/7 monitoring.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  ),
                  title: 'Customizable',
                  desc: 'Tailor every system to your organization\'s unique workflows and processes.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--sb-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Real-Time Analytics',
                  desc: 'Live dashboards, automated reports, and actionable insights across all systems.',
                },
              ].map((feature) => (
                <div key={feature.title} className="feature-bar fade-up">
                  <div style={{ marginBottom: '0.75rem' }}>{feature.icon}</div>
                  <h4 style={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                    color: 'var(--sb-text)',
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{ color: 'var(--sb-text-dim)', fontSize: '0.825rem', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag fade-up">How It Works</span>
            <h2 className="fade-up delay-1 section-heading">
              Get Started in<br />
              <span className="gradient-text">Three Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, var(--sb-teal), var(--sb-amber), transparent)' }} />

            {[
              {
                step: '01',
                title: 'Choose Your Systems',
                desc: 'Select from our suite of enterprise systems or request a custom solution tailored to your organization.',
                color: 'var(--sb-teal)',
              },
              {
                step: '02',
                title: 'We Deploy & Configure',
                desc: 'Our team sets up your dedicated subdomains, configures integrations, and migrates your existing data.',
                color: 'var(--sb-cyan)',
              },
              {
                step: '03',
                title: 'Launch & Scale',
                desc: 'Go live with full training and support. Scale up with additional systems as your organization grows.',
                color: 'var(--sb-amber)',
              },
            ].map((item) => (
              <div key={item.step} className="fade-up text-center relative">
                <div className="step-number" style={{ color: item.color }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  marginTop: '1rem',
                  marginBottom: '0.75rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--sb-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ STATS SECTION ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Systems Deployed', sub: 'And growing' },
              { number: '50+', label: 'Organizations', sub: 'Trust our platform' },
              { number: '10K+', label: 'Active Users', sub: 'Across all systems' },
              { number: '99.9%', label: 'Uptime', sub: 'Guaranteed SLA' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item fade-up">
                <div className="stat-number">{stat.number}</div>
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                  color: 'var(--sb-text)',
                }}>
                  {stat.label}
                </div>
                <div style={{ color: 'var(--sb-text-dim)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ ABOUT SECTION ═══════════════ */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-tag fade-up">About Sortbrite</span>
          <h2 className="fade-up delay-1 section-heading">
            Building the Future of<br />
            <span className="gradient-text">Enterprise Software</span>
          </h2>
          <p className="fade-up delay-2" style={{
            color: 'var(--sb-text-muted)',
            maxWidth: '640px',
            margin: '1.5rem auto 0',
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}>
            Sortbrite is a technology company dedicated to building modern, scalable, and integrated
            enterprise management systems. We believe organizations deserve software that works as
            hard as they do — reliable, intuitive, and built to grow.
          </p>
          <p className="fade-up delay-3" style={{
            color: 'var(--sb-text-dim)',
            maxWidth: '580px',
            margin: '1.25rem auto 0',
            lineHeight: 1.8,
            fontSize: '0.95rem',
          }}>
            Our subdomain architecture means each system operates independently while
            sharing a unified authentication layer, consistent design language, and seamless
            data interoperability. One login. Every system.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="cta-section p-10 md:p-16 text-center fade-up">
            <h2 style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              Ready to Transform Your<br />
              <span className="gradient-text">Organization?</span>
            </h2>
            <p style={{
              color: 'var(--sb-text-muted)',
              maxWidth: '480px',
              margin: '1.25rem auto 0',
              lineHeight: 1.7,
            }}>
              Get in touch to discuss which systems fit your needs, or request a
              live demo to see Sortbrite in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4" style={{ marginTop: '2rem' }}>
              <a href="mailto:hello@sortbrite.com" className="btn-primary">
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#systems" className="btn-secondary">
                View All Systems
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{
        borderTop: '1px solid var(--sb-border)',
        background: 'var(--sb-dark-2)',
      }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--sb-teal), var(--sb-cyan))' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1.1rem' }}>
                  Sortbrite
                </span>
              </div>
              <p style={{ color: 'var(--sb-text-dim)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                Enterprise systems platform powering organizations with integrated, scalable management solutions.
              </p>
            </div>

            {/* Systems */}
            <div>
              <h4 className="footer-heading">Systems</h4>
              <ul className="footer-links">
                <li><span>School Management</span></li>
                <li><span>HRIS</span></li>
                <li><span>Procurement & Budget</span></li>
                <li><span>Point of Sale</span></li>
                <li><span>Construction</span></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">Get in Touch</h4>
              <ul className="footer-links">
                <li>
                  <a href="mailto:hello@sortbrite.com" className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                    hello@sortbrite.com
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--sb-border)' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p style={{ color: 'var(--sb-text-dim)', fontSize: '0.8rem' }}>
                &copy; {new Date().getFullYear()} Sortbrite. All rights reserved.
              </p>
              <p style={{ color: 'var(--sb-text-dim)', fontSize: '0.8rem' }}>
                Engineered with precision. Built to last.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
