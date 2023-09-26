import React from 'react';
import './BottomSection.css';
import logo from '../assets/logo.jpg';

const BottomSection = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logof" />
      <p className="copyright">
        © 2023 Ruhunu Maha Kataragama Dewalaya. All Rights Reserved.
      </p>
      <a href="/privacy-policy" className="privacy-policy-link">
        Privacy Policy
      </a>
    </footer>
  );
};

export default BottomSection;
