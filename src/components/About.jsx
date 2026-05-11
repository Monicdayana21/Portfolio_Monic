import ScrollReveal from './ScrollReveal';

export default function About() {
  const stats = [
    { value: '5+', label: 'Projects Built' },
    { value: '2', label: 'Roles Mastered' },
    { value: '6+', label: 'Months Internship' },
    { value: '10+', label: 'Technologies' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">// About Me</span>
            <h2 className="section-title">Who I Am</h2>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal delay={100}>
            <div className="about__text-card glass-card">
              <div className="about__accent-line" />
              <p className="about__description">
                I am a passionate <strong>Full Stack Developer</strong> with knowledge in <strong>Data Analytics</strong>.
                I enjoy creating scalable web applications, dashboards, and intelligent systems that solve real-world problems.
              </p>
              <p className="about__description">
                I work with frontend, backend, databases, and analytics tools to build complete digital solutions.
                My goal is to bridge the gap between development and data — building systems that not only function
                beautifully but also provide meaningful insights.
              </p>
              <div className="about__highlights">
                <div className="about__highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  <span>Full Stack Development</span>
                </div>
                <div className="about__highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                  <span>Data Analytics & Visualization</span>
                </div>
                <div className="about__highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <span>Dashboard Design</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="about__stats">
              {stats.map((s, i) => (
                <div className="about__stat glass-card" key={i}>
                  <span className="about__stat-value gradient-text">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
