import React from 'react';
import Crackers from '../components/crackers.avif';

const Contactpage= () => {
  return (
    <div>
      <div className='crackers-banner'>
        <h1>QUALITY CRACKERS</h1>
      </div>
      <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-details">
        {/* Address Section */}
        <div className="contact-item">
          <div className="icon">
            <i class="fa-solid fa-location-dot c-fa-icon"></i>
          </div>
          <h3>Address</h3>
          <p>My Sivakasi Crackers</p>
          <p>3/1233/1/1, Mariyamman Nagar,</p>
          <p>Sattur Road Paraipatti, Sivakasi - 626 189.</p>
        </div>
        {/* Phone Section */}
        <div className="contact-item">
          <div className="icon">
          <i class="fa-solid fa-phone c-fa-icon"></i>
          </div>
          <h3>Phone</h3>
          <p>Mobile: +91 78710 76094</p>
          <p>Mobile: +91 94424 56559</p>
        </div>
        {/* Email Section */}
        <div className="contact-item">
          <div className="icon">
          <i class="fa-solid fa-envelope c-fa-icon"></i>
          </div>
          <h3>Connect With Us</h3>
          <p>Email: beswaycrackersenquiry@gmail.com</p>
        </div>
      </div>
      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.722817497252!2d77.96464381562754!3d9.450177193239845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01151b6ff7e6d3%3A0x6ef1d0c07c3eb4d1!2sSivakasi!5e0!3m2!1sen!2sin!4v1633788099737!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
    </div>
    
  );
};

export default Contactpage;
