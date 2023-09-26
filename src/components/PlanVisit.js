import React from 'react';
import './PlanVisit.css'; 
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 
import image4 from '../assets/image4.jpg'; 
import image5 from '../assets/image5.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import BottomSection from './BottomSection';
import BackToTopButton from './BackToTopButton';


function PlanVisit() {
  return (
    <div className="plan-visit">
     <header>
      <nav>
        <ul class="nav-tabs">
          <div class ="left">
           <div class ="tab"><Link to="/Shrine" >Shrine</Link></div>
           <div class ="tab"><Link to="/" style={{ color:'white' }}>Plan a Visit</Link></div>
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
      <h1>Plan a Visit</h1>
     </header>  
     <body>
      <div className="section">
        {/* Part 1 */}
        <div className="column">
          <img src={image1} alt="Image 1"className="circular" />
        </div>
        <div className="column">
          <h2 className="title-1">WELCOME</h2>
          <h3 className="title-2">කතරගම පුද බිමට
පැමිණෙන ඔබට</h3>
          <ul>
            <li>කතරගම පුදබිමට පිවිසෙන ඔබගේ රථවාහන නියමිත ස්ථාන වල පමණක් නවතා තබන්න.</li>
            <li>පුදබිමට සුදුසු ඇඳුමකින් සැරසී පැමිණෙන්න.</li>
            <li>පුද බිම පොලිතින් හා ප්ලාස්ටික් වලින් තොර කලාපයක් බැවින් එවැනි දෑ රැගෙන ඒමෙන් වැලකීම යහපත්.</li>
            <li>පාවහන් නියමිත ස්ථානයට භාර දීමෙන් ඒවා අස්ථාන ගත නොවේ</li>
            <li>තොරතුරු දැන ගැනීම සඳහා හෝ හදිසි අවශ්‍යතාවයක දී 047 - 2235122/885 යන දුරකථන අංක ඔස්සේ කතරගම මහා දේවාලයේ කාර්යාලය අමතන්න.</li>
            <li>දේවාලය වෙනුවෙන් ලබා දෙන මුදල් හා ද්‍රව්‍යමය ආධාර දේවාල කාර්යාලය වෙත පමණක් ලබා දෙන්න. සෑම පරිත්‍යාගයක් සඳහා ම රිසිට් පතක් ලබා ගන්න.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        {/* Part 2 */}
        <div className="column">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="column">
          <h2 className="title-1">තේවා වේලාව</h2>
          <h3 className="title-2">කතරගම මහා දේවාලය</h3>
          <p>අලුයම 4.30</p>
          <p>උදෑසන 10.30</p>
          <p>සවස 6.30</p>
          <p>සෙනසුරාදා දින අලුයම 4.30 තේවාව නොපැවැත්වෙන අතර එදින පෙරවරු 9.30 නානු මුරය පැවැත්වීමෙන් අනතුරුව උදෑසන 10.30 තේවාව පැවැත්වේ. අලුත් අවුරුද්දට පෙර පුණ්‍යකාළයේ දී හා විශේෂ හේතුවක් නොවේ නම් දේවාලය අන් සෑම දිනකම විවෘතව පවතියි.</p>
        </div>
      </div>

      <div className="section">
        {/* Part 3 */}
        <div className="column">
          <h2 className="title-1">තේවා වේලාව</h2>
          <h3 className="title-2">ගණ දෙවි දේවාලය</h3>
          <p>අලුයම 4.30</p>
          <p> උදෑසන 10.30 </p>
          <p> සවස 6.30</p>
          <p>සෙනසුරාදා දින අලුයම 4.30 තේවාව නොපැවැත්වෙයි. තේවා වේලාවන්හි ද දේවාලය විවෘතව පවතියි.</p>
        </div>
        <div className="column">
          <img src={image3} alt="Image 3" />
        </div>
      </div>

      <div className="section">
        {/* Part 4 */}
        <div className="column">
          <img src={image4} alt="Image 4" />
        </div>
        <div className="column">
          <h2 className="title-1">තේවා වේලාව</h2>
          <h3 className="title-2">වල්ලි අම්මා දේවාලය</h3>
          <p>දහවල් 12.00 රාත්‍රී 8.00</p>
          <p>දේවාලය විවෘතව පවතින්නේ තේවා වෙලාවන්හි පමණි.
තේවා වේලාව</p>
        </div>
      </div>

      <div className="section">
        {/* Part 5 */}
        <div className="column">
          <h2 className="title-1">තේවා වේලාව
</h2>
          <h3 className="title-2">තේවානි අම්මා දේවාලය</h3>
          <p>අලුයම පලනි ආණ්ඩ දේවාලය – 5.45 තේවානි ආම්මාන් දේවාලය – 6.02 බහිරව දේවාලය – 6.15 උදෑසන පලනි ආණ්ඩ දේවාලය – 11.15 තේවානි ආම්මාන් දේවාලය – 11.30 බෝගර් ස්වාමි – 11.45 බහිරව දේවාලය – 11.45 සවස පලනි ආණ්ඩ දේවාලය – 07.15 තේවානි ආම්මාන් දේවාලය – 07.30 බහිරව දේවාලය – 07.45
</p>
          <p>දේවාලය විවෘතව පවතින්නේ තේවා වෙලාවන්හි පමණි.</p>
        </div>
        <div className="column">
          <img src={image5} alt="Image 5" />
        </div>
      </div>
      </body>
      <BottomSection />
      <BackToTopButton /> 
    </div>
  );
}

export default PlanVisit;
