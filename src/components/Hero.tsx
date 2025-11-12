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
        <h1 className="hero-title">
          Innovation in Digital Media
        </h1>
        <p className="hero-subtitle">
          We create exceptional digital experiences that inspire, engage, and transform.
        </p>
        <button className="hero-cta" onClick={scrollToContact}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
