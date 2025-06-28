import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section ">
      <div className="footer-content">
         <div className="map">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0873318816275!2d77.09097557495875!3d28.68703408160458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05d81d565401%3A0xe0ef5daaa7cc2b8f!2sAP%20Curated%20Couture!5e0!3m2!1sen!2sus!4v1749885460508!5m2!1sen!2sus"
          width="400"
          height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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