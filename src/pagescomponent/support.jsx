"use client"

const Support = () => {
  return (
    <div className="page support-page">
      <div className="page-hero">
        <h1>Support & Contact</h1>
        <p>We're here to help you 24/7</p>
      </div>

      <div className="support-content">
        <div className="support-grid">
          <div className="support-card">
            <div className="support-icon">📞</div>
            <h3>Call Us</h3>
            <p className="support-detail">+1 (555) 123-4567</p>
            <p className="support-time">Available 24/7</p>
          </div>

          <div className="support-card">
            <div className="support-icon">📧</div>
            <h3>Email Us</h3>
            <p className="support-detail">info@MAZmobilegarage.com</p>
            <p className="support-time">Response within 2 hours</p>
          </div>

          <div className="support-card">
            <div className="support-icon">💬</div>
            <h3>Live Chat</h3>
            <p className="support-detail">Chat with our team</p>
            <p className="support-time">Mon-Sun: 9AM-9PM</p>
          </div>

          <div className="support-card">
            <div className="support-icon">📍</div>
            <h3>Visit Us</h3>
            <p className="support-detail">123 Mobile Street</p>
            <p className="support-time">Tech City, TC 12345</p>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long do repairs take?</h4>
              <p>Most repairs are completed within 24-48 hours. Emergency repairs may be done same day.</p>
            </div>

            <div className="faq-item">
              <h4>Do you offer warranty?</h4>
              <p>Yes, we provide a 6-month warranty on all repairs covering the same issue.</p>
            </div>

            <div className="faq-item">
              <h4>Is your pickup service free?</h4>
              <p>Yes, pickup and drop-off services are completely free for all customers.</p>
            </div>

            <div className="faq-item">
              <h4>Do you use genuine parts?</h4>
              <p>Yes, we only use original genuine parts for all repairs to ensure quality.</p>
            </div>

            <div className="faq-item">
              <h4>Can you repair water damage?</h4>
              <p>Yes, we can repair water-damaged devices with high success rates.</p>
            </div>

            <div className="faq-item">
              <h4>What if my device isn't repairable?</h4>
              <p>If repair isn't possible, we'll inform you upfront with no charges.</p>
            </div>
          </div>
        </div>

        <div className="support-image">
          <img src="/customer-service-support-team-helping-clients.jpg" alt="Support team" />
        </div>
      </div>
    </div>
  )
}

export default Support
