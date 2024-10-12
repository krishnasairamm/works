import './App.css';
import { useState} from 'react'; 
import Sidebar from './pages/Cart';
import Aboutpage from './pages/Aboutpage'; 
import Quickpage from './pages/Quickpage';
import Safetypage from './pages/Safetypage'; 
import Contactpage from './pages/Contactpage'; 
import mapicon from './components/mapicon.png';
import storelogo from './components/logo.png';

function App() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isQuickClicked, setIsQuickClicked] = useState(true);
  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [isSafetyClicked, setIsSafetyClicked] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [overallTotal, setOverallTotal] = useState(0);
  
  
  const [showQuick, setShowQuick] = useState(true); 
  const [showAbout, setShowAbout] = useState(false);
  const [showSafety, setShowSafety] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleAboutClick = () => {
    resetAllStates();
    setShowAbout(true);
    setIsAboutClicked(true);  
  };

  const handleQuickClick = () => {
    resetAllStates();
    setShowQuick(true);
    setIsQuickClicked(true);  
  };

  const handleSafetyClick = () => {
    resetAllStates();
    setShowSafety(true);
    setIsSafetyClicked(true);  
  };

  const handleContactClick = () => {
    resetAllStates();
    setShowContact(true);
    setIsContactClicked(true);  
  };


  const resetAllStates = () => {
    setIsQuickClicked(false);
    setIsAboutClicked(false);
    setIsSafetyClicked(false);
    setIsContactClicked(false);

    setShowQuick(false);
    setShowAbout(false);
    setShowSafety(false);
    setShowContact(false);
  };

  return (
    <div>
      <nav>
        {/* Location Card */}
        <div className="location-card">
          <img src={mapicon} alt="Map Icon" id="map-icon" className="map-icon" />
          <div>
            <h3 id="location-title" className="location-name">My Sivakasi Crackers</h3>
            <p id="location-address" className="address">
              3/1233/1/1, Mariyamman Nagar,<br />
              Sattur Road Paraipatti, Sivakasi - 626 189.<br />
            </p>
          </div>
        </div>
        
        <div className="store-logo">
          <img src={storelogo} alt="Store Logo" id="store-logo" />
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="whatsapp">
            <i className="fa-brands fa-whatsapp" id="whatsapp"></i> +91 78710 76094<br />
          </div>
          <div className="phone">
            <i className="fa-solid fa-phone" id="phone"></i> +91 94424 56559<br />
          </div>
        </div>
      </nav>

      
      {/* Sidebar */}
      <Sidebar totalQuantity={totalQuantity} overallTotal={overallTotal} />
      

      {/* Navigation Buttons */}
      <div className="menu-buttons">
        <button id="quick-button" className={isQuickClicked ? 'clicked' : ''} onClick={handleQuickClick}>Quick Purchase</button>
        <button id="about-button" className={isAboutClicked ? 'clicked' : ''} onClick={handleAboutClick}>About</button>
        <button id="safety-button" className={isSafetyClicked ? 'clicked' : ''} onClick={handleSafetyClick}>Safety Tips</button>
        <button id="contact-button" className={isContactClicked ? 'clicked' : ''} onClick={handleContactClick}>Contact</button>
      </div>

      
      {showQuick && <Quickpage setTotalQuantity={setTotalQuantity} setOverallTotal={setOverallTotal} />}
      {showAbout && <Aboutpage />}
      {showSafety && <Safetypage />}
      {showContact && <Contactpage />}


      {/* Footer */}
      <footer>
        <div className="footer-class">
          <div>
            <img src={storelogo} id="footer-logo" alt=''/>
            <h3>Our Showroom</h3>
            <p>3/1233/1/1, Mariyamman Nagar,<br />
              Sattur Road Paraipatti, Sivakasi - 626 189</p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <h4>WhatsApp</h4><p><i className="fa-brands fa-whatsapp"></i>+91 78710 76094</p>
            <h4>Mobile</h4><p><i className="fa-solid fa-phone"></i>+91 94424 56559</p>
            <h4>Email</h4><p><i className="fa-solid fa-envelope"></i>beswaycrackersenquiry@gmail.com</p>
          </div>

          <div>
            <h2>Quick Links</h2><br/>
            <button className="home fb">Home</button>
            <button className="about fb">About My Crackers</button>
            <button className="fire fb">Fire Crackers</button><br />
            <button className="fireworks fb">Fireworks Gift Box</button>
            <button className="price fb">Price List</button>
            <button className="quick fb">Quick Purchase</button><br />
            <button className="contact fb">Contact us</button>
          </div>

          <div>
            <h2>Reach Us</h2>
            <iframe
            title='map-loc'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13238.017795891185!2d77.81192688746222!3d9.448887751705982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cec1f83f112d%3A0x30342409dd4229b1!2sSivakasi%20Pyro%20Park(Sivakasi%20Crackers)!5e0!3m2!1sen!2sin!4v1728542181723!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
