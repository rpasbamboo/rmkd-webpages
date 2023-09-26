import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import BottomSection from './BottomSection';
import BackToTopButton from './BackToTopButton';


function HomePage() {
  return (
    <div className="home-page">
      
      <header>
      <nav>
        <ul class="nav-tabs">
          <div class ="left">
           <div class ="tab"><Link to="/shrine">Shrine</Link></div>
           <div class ="tab"><Link to="/PlanVisit">Plan a Visit</Link></div>
           <div class ="tab"><Link to="/leadership">Leadership</Link></div>
          </div>
          <div class ="logo">
            <Link to="/" style={{ color:'white' }}><img src={logo} alt="Logo" /></Link>
          </div>
          <div class= "mid">
           <div class ="tab"><Link to="/articles">Articles</Link></div>
           <div class ="tab"><Link to="/contact">Contact</Link></div>
          </div>
          <div class ="right">
          
           <div class ="social-icons">
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
          </div>
        </ul>
      </nav>
      <h1>Shrine</h1>
      </header>     
      
     
      <BottomSection />
      <BackToTopButton /> 
      
    </div>
  );
}

export default HomePage;
