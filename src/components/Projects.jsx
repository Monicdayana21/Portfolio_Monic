import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Aura Diary',
    description: 'A personal journaling application with mood tracking and emotional analytics. Features beautiful UI for self-reflection, diary entries with timestamps, and mood-based insights to help users understand their emotional patterns.',
    tech: ['React', 'Vite', 'Node.js', 'Express.js', 'CSS'],
    github: [
      { label: 'Frontend', url: 'https://github.com/Monicdayana21/Auro_Diary-_Frontend.git' },
      { label: 'Backend', url: 'https://github.com/Monicdayana21/Aura_Diary-_Backend.git' },
    ],
    live: 'https://auro-diary-frontend.vercel.app/dashboard',
    accent: '#8b5cf6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
  },
  {
    title: 'Bill Sender',
    description: 'An automated billing system that generates and sends invoices to clients via email. Streamlines the entire billing process with PDF generation, automated email delivery, and client management.',
    tech: ['Node.js', 'Express.js', 'Email Integration'],
    github: [
      { label: 'Repository', url: 'https://github.com/Monicdayana21/bill-sender.git' },
    ],
    accent: '#3b82f6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ),
  },
  {
    title: 'Employee Monitoring & Productivity Dashboard',
    description: 'A comprehensive dashboard for tracking employee productivity metrics in real-time. Features performance analytics, activity monitoring, data visualization charts, and management reporting tools.',
    tech: ['React', 'Node.js', 'Express.js', 'Dashboard', 'Analytics'],
    github: [
      { label: 'Frontend', url: 'https://github.com/Monicdayana21/Employee-Monitoring-frontend-.git' },
      { label: 'Backend', url: 'https://github.com/Monicdayana21/Employee-Monitoring-backed.git' },
    ],
    live: 'https://employee-monitoring-frontend.vercel.app/',
    accent: '#10b981',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: 'Expense IQ — Expense Tracker with Analytics',
    description: 'An intelligent expense tracking application with built-in analytics. Track daily expenses, visualize spending patterns with interactive charts, categorize transactions, and gain actionable financial insights.',
    tech: ['React', 'Node.js', 'Express.js', 'Analytics', 'Charts'],
    github: [
      { label: 'Frontend', url: 'https://github.com/Monicdayana21/Expense-IQ--Frontend.git' },
      { label: 'Backend', url: 'https://github.com/Monicdayana21/Expense-IQ--Backend.git' },
    ],
    live: 'https://expense-iq-frontend-nu.vercel.app/login',
    accent: '#f59e0b',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
  },
  {
    title: 'Hostel Outpass Management',
    description: 'A digital outpass management system for hostel administration. Streamlines the process of requesting, reviewing, and approving student outpasses with role-based access control and status tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: [],
    accent: '#ec4899',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">// My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Full-stack applications and data-driven solutions I've built</p>
          </div>
        </ScrollReveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="projects__card glass-card" style={{ '--card-accent': p.accent }}>
                <div className="projects__card-header">
                  <div className="projects__card-icon" style={{ color: p.accent }}>
                    {p.icon}
                  </div>
                  <div className="projects__card-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="projects__github-link" title="Live Demo" style={{ borderColor: p.accent, color: p.accent }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        <span>Live</span>
                      </a>
                    )}
                    {p.github.map((g, j) => (
                      <a key={j} href={g.url} target="_blank" rel="noopener noreferrer" className="projects__github-link" title={g.label}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span>{g.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="projects__card-title">{p.title}</h3>
                <p className="projects__card-description">{p.description}</p>
                <div className="projects__card-tech">
                  {p.tech.map(t => (
                    <span className="projects__tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
