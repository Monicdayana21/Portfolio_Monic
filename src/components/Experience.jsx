import ScrollReveal from './ScrollReveal';

const internships = [
  {
    role: 'Data Analytics Intern',
    company: 'BDreamz Global Solution Pvt. Ltd.',
    duration: '6 Months',
    type: 'internship',
  },
  {
    role: 'Python Development Intern',
    company: 'AICTE Virtual Internship',
    duration: '3 Months',
    type: 'internship',
  },
];

const certifications = [
  {
    title: 'Python Internship Completion',
    issuer: 'Skill Intern (AICTE Certified)',
    type: 'certification',
  },
  {
    title: 'Data Analyst Course',
    issuer: 'Besant Technologies, Bangalore',
    type: 'certification',
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">// Experience & Certifications</span>
            <h2 className="section-title">Journey So Far</h2>
            <p className="section-subtitle">Internships and certifications that shaped my expertise</p>
          </div>
        </ScrollReveal>

        <div className="experience__grid">
          {/* Internships */}
          <ScrollReveal delay={100}>
            <div className="experience__column">
              <h3 className="experience__column-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Internship Experience
              </h3>
              {internships.map((item, i) => (
                <div className="experience__card glass-card" key={i}>
                  <div className="experience__card-accent" />
                  <div className="experience__card-content">
                    <h4 className="experience__card-role">{item.role}</h4>
                    <p className="experience__card-company">{item.company}</p>
                    <span className="experience__card-duration">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={200}>
            <div className="experience__column">
              <h3 className="experience__column-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                Certifications
              </h3>
              {certifications.map((item, i) => (
                <div className="experience__card glass-card" key={i}>
                  <div className="experience__card-accent experience__card-accent--blue" />
                  <div className="experience__card-content">
                    <h4 className="experience__card-role">{item.title}</h4>
                    <p className="experience__card-company">{item.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
