import ScrollReveal from './ScrollReveal';

const fullStackSkills = {
  Frontend: [
    { name: 'React', color: '#61dafb' },
    { name: 'Vite', color: '#646cff' },
    { name: 'HTML', color: '#e34f26' },
    { name: 'CSS', color: '#1572b6' },
    { name: 'JavaScript', color: '#f7df1e' },
  ],
  Backend: [
    { name: 'Node.js', color: '#339933' },
    { name: 'Express.js', color: '#ffffff' },
  ],
  Database: [
    { name: 'MySQL', color: '#4479a1' },
    { name: 'Firebase', color: '#ffca28' },
    { name: 'Neon DB', color: '#00e5a0' },
  ],
  Tools: [
    { name: 'Git', color: '#f05032' },
    { name: 'GitHub', color: '#ffffff' },
    { name: 'VS Code', color: '#007acc' },
    { name: 'Postman', color: '#ff6c37' },
  ],
};

const analyticsSkills = [
  { name: 'Power BI', color: '#f2c811' },
  { name: 'Excel', color: '#217346' },
  { name: 'SQL', color: '#4479a1' },
  { name: 'Python', color: '#3776ab' },
  { name: 'Pandas', color: '#150458' },
  { name: 'Data Visualization', color: '#8b5cf6' },
  { name: 'Dashboard Design', color: '#3b82f6' },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">// My Skills</span>
            <h2 className="section-title">Tech Stack & Tools</h2>
            <p className="section-subtitle">Technologies I use to build full-stack applications and analyze data</p>
          </div>
        </ScrollReveal>

        <div className="skills__grid">
          {/* Full Stack */}
          <ScrollReveal delay={100}>
            <div className="skills__category glass-card">
              <div className="skills__category-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <h3>Full Stack Development</h3>
              </div>
              {Object.entries(fullStackSkills).map(([category, skills]) => (
                <div className="skills__subcategory" key={category}>
                  <h4 className="skills__subcategory-label">{category}</h4>
                  <div className="skills__tags">
                    {skills.map(s => (
                      <span className="skills__tag" key={s.name} style={{ '--tag-color': s.color }}>
                        <span className="skills__tag-dot" style={{ background: s.color }} />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Data Analytics */}
          <ScrollReveal delay={200}>
            <div className="skills__category glass-card">
              <div className="skills__category-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <h3>Data Analytics</h3>
              </div>
              <div className="skills__subcategory">
                <h4 className="skills__subcategory-label">Tools & Technologies</h4>
                <div className="skills__tags">
                  {analyticsSkills.map(s => (
                    <span className="skills__tag" key={s.name} style={{ '--tag-color': s.color }}>
                      <span className="skills__tag-dot" style={{ background: s.color }} />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
