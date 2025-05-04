import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* Left section: logo + text */}
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
          <p>
            Enthusiastic learner passionate about AI, ML, Image Processing, and Computer Vision.
          </p>
        </div>

        {/* Right section: email + subscribe */}
        <div className="footer-top-right">
          <div className="footer-email-form">
            <div className="footer-email-input">
              <img src={user_icon} alt="user icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Shawmica Sivatharan. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
