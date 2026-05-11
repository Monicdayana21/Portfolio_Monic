import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`} id="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-text">MD</span>
        </a>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                <span className="navbar__link-text">{l.label}</span>
                <span className="navbar__link-glow"></span>
              </a>
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/1Q7pWoXG1_9EpboqHIzpASUdQ1KeNkKZe/view?usp=sharing"
               target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__resume-btn">
              Resume
            </a>
          </li>
        </ul>
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`} />
        </button>
      </div>
    </nav>
  );
}
