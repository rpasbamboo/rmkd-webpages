import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './TopSection.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import BackToTopButton from './BackToTopButton';


const TopSection = () => {
  
  return (
    <header>
      <nav>
        <ul className="nav-tabs">
          <div class ="left">
           <div className="tab"><a href="/" style={{ color:'white' }}>Shrine</a></div>
           <div className="tab"><a href="/plan-visit">Plan a Visit</a></div>
           <div className="tab"><a href="/leadership">Leadership</a></div>
          </div>
          <div className="logo">
           <img src={logo} alt="Logo" />
          </div>
          <div class ="right">
           <div className="tab"><a href="/articles">Articles</a></div>
           <div className="tab"><a href="/contact">Contact</a></div>
          </div>
          <div className="social-icons">
           <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
           </a>
           <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
           </a>
           <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
           </a>
         </div>
        </ul>
      </nav>
      <h1>Shrine</h1>
    </header>
  );
};

export default TopSection;
