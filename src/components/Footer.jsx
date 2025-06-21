import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li className="footer-factory-q">Can I visit your factory?</li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faqs#mode-of-payment">Mode of Payment</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="footer-qr-row">
            <div className="footer-qr-block">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://facebook.com" alt="Facebook QR" />
              <span>Facebook</span>
            </div>
            <div className="footer-qr-block">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://instagram.com" alt="Instagram QR" />
              <span>Instagram</span>
            </div>
            <div className="footer-qr-block">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://linkedin.com" alt="LinkedIn QR" />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">&copy; {new Date().getFullYear()} APC. All rights reserved.</div>
    </footer>
  );
};

export default Footer;