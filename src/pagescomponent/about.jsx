"use client"

const About = () => {
  return (
    <div className="page about-page">
      <div className="page-hero">
        <h1>About Moz Mobile Garage</h1>
        <p>Dedicated to providing the best mobile repair experience</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="about-image">
            <img src="/professional-mobile-repair-workshop.jpg" alt="Our workshop" />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Moz Mobile Garage is a leading mobile repair service provider with over 10 years of experience in the
              industry. We pride ourselves on delivering exceptional customer service and high-quality repairs.
            </p>
            <p>
              Our team of certified technicians is trained to handle all major brands and models. We use only genuine
              parts and the latest repair techniques to ensure your device is in the best hands.
            </p>
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-image">
            <img src="/team-of-mobile-phone-technicians.jpg" alt="Our team" />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide reliable, affordable, and accessible mobile repair services to everyone in the
              community. We believe in transparency, quality workmanship, and customer satisfaction.
            </p>
            <p>
              With our home service model, we eliminate the hassle of traveling to repair shops. Simply book an
              appointment, and our expert technicians will come to you at your convenience.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <h2>Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">15000+</div>
              <p>Repairs Completed</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <p>Expert Technicians</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
