import '../styles/Footer.css';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
  onOpenSupport: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy, onOpenSupport }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-subtitle">
            Ready to start your next project? Let's create something amazing together.
          </p>
          <div className="contact-info">
            <a href="mailto:hello@arkomedia.com" className="contact-link">
              hello@arkomedia.com
            </a>
          </div>
        </div>
      </section>

      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Arko Media Labs</div>
            <p className="footer-tagline">Innovation in Digital Media</p>
          </div>
          <div className="footer-links">
            <button onClick={onOpenSupport} className="footer-link">Support</button>
            <button onClick={onOpenTerms} className="footer-link">Terms & Conditions</button>
            <button onClick={onOpenPrivacy} className="footer-link">Privacy Policy</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Arko Media Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
