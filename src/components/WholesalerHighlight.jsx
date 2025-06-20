import React from 'react';
import sampleVideo from '../assets/5759073-uhd_3840_2160_30fps.mp4';

const socialLinks = [
  { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://www.facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://www.instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://www.alibaba.com', icon: 'fas fa-globe', label: 'Alibaba' },
];

const WholesalerHighlight = () => {
  return (
    <section className="wholesaler-highlight-section">
      <div className="wholesaler-highlight-video-wrapper">
        <video
          className="wholesaler-highlight-video"
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="wholesaler-highlight-content">
        <div className="wholesaler-highlight-box">
          <h1 className="wholesaler-highlight-heading">
            Your Trusted Wholesale Fashion Partner
            <br></br>
            AP CURATED COUTURE
          </h1>
          <div className="wholesaler-highlight-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="wholesaler-highlight-social-btn"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WholesalerHighlight; 