import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            At Arko Media Labs, we're dedicated to pushing the boundaries of digital innovation.
            Our team of creative professionals and technical experts work together to deliver
            cutting-edge solutions that help businesses thrive in the digital age.
          </p>
          <p className="about-text">
            With a focus on quality, creativity, and results, we transform ideas into
            powerful digital experiences that resonate with audiences and drive meaningful engagement.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
