import { useState, useEffect } from 'react';
import '../styles/Header.css';

interface HeaderProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenSupport: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenTerms, onOpenPrivacy, onOpenSupport }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          Arko Media Labs
        </div>
        <nav className="nav">
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('services')}>Services</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <div className="nav-secondary">
          <button className="nav-link" onClick={onOpenSupport}>Support</button>
          <button className="nav-link" onClick={onOpenTerms}>Terms</button>
          <button className="nav-link" onClick={onOpenPrivacy}>Privacy</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
