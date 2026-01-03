"use client"

const Services = () => {
  const services = [
    {
      icon: "📱",
      title: "Screen Repair",
      description: "Professional LCD, AMOLED, and curved screen replacement for all devices",
      price: "Starting from $50",
    },
    {
      icon: "🔋",
      title: "Battery Replacement",
      description: "Replace worn-out batteries with genuine original components",
      price: "Starting from $30",
    },
    {
      icon: "🔌",
      title: "Charging Issues",
      description: "Fix charging port problems, charger issues, and battery not charging",
      price: "Starting from $25",
    },
    {
      icon: "📷",
      title: "Camera Repair",
      description: "Fix blurry, cracked, or malfunctioning camera modules",
      price: "Starting from $40",
    },
    {
      icon: "🔊",
      title: "Speaker Repair",
      description: "Repair or replace damaged speakers and earpiece components",
      price: "Starting from $35",
    },
    {
      icon: "💾",
      title: "Data Recovery",
      description: "Recover lost data from damaged or non-responsive devices",
      price: "Starting from $60",
    },
  ]

  return (
    <div className="page services-page">
      <div className="page-hero">
        <h1>Our Services</h1>
        <p>Professional repairs for all mobile devices</p>
      </div>

      <div className="services-content">
        <div className="services-intro">
          <h2>Comprehensive Mobile Repair Solutions</h2>
          <p>
            We offer a wide range of mobile repair services covering hardware and software issues. Our skilled
            technicians use advanced tools and genuine parts to ensure your device works like new.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="service-image">
          <img src="/mobile-repair-service-tools-and-equipment.jpg" alt="Our services" />
        </div>
      </div>
    </div>
  )
}

export default Services
