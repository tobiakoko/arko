import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-label">Arko Media Labs</div>
        <h1 className="hero-title">
          Turbocharge Your Creation
        </h1>
        <p className="hero-subtitle">
          We create exceptional digital experiences that inspire, engage, and transform brands through innovative media solutions.
        </p>
        <button className="hero-cta" onClick={scrollToContact}>
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default Hero;
