"use client"

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h3 className="footer-title">MAZ Mobile Garage</h3>
          <p className="footer-description">Fast, reliable mobile repair service at your doorstep</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#services">Screen Repair</a>
            </li>
            <li>
              <a href="#services">Battery Replacement</a>
            </li>
            <li>
              <a href="#services">Charging Issues</a>
            </li>
            <li>
              <a href="#services">Camera Repair</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#support">Contact Support</a>
            </li>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#cookies">Cookie Policy</a>
            </li>
            <li>
              <a href="#disclaimer">Disclaimer</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p className="footer-contact-info">📞 8688349726</p>
          <p className="footer-contact-info">📧 info@MAZmobilegarage.com</p>
          <p className="footer-contact-info">Bellary Karnataka</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 MAZ Mobile Garage. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
