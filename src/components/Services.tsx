import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies tailored to your business goals and target audience.',
      icon: '🎯'
    },
    {
      title: 'Creative Production',
      description: 'High-quality content creation including video, photography, and graphic design.',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and applications built with cutting-edge technologies.',
      icon: '💻'
    },
    {
      title: 'Brand Identity',
      description: 'Cohesive brand identities that make lasting impressions and build trust.',
      icon: '✨'
    },
    {
      title: 'Social Media',
      description: 'Strategic social media management and campaigns that drive engagement.',
      icon: '📱'
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven insights to optimize performance and maximize ROI.',
      icon: '📊'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for all your digital media needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
