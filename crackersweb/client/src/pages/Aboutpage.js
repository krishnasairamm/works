import React from 'react';
import Banner from '../components/banner.webp';
import Offer from '../components/offer.avif';
import Sale from '../components/sale.jpg';

const Aboutpage = () => {
  return (
    <div>
      <div className='banner-div'>
        <img src={Banner} id="banner-img" alt="About Banner" />
      </div>
      
      <div className='offer-div'>
        <img src={Offer} id="offer-img"/>
        <div className='about-off-div'>
          <h2>We Provide Premium Quality Crackers</h2>
          <p>
            We are reputed and reliable name involved in the field of Fireworks trading business for past 10 years.<br/><br/>
            We offer various range of fireworks products such as Sparklers, Ground Chakkars, Twinkling Stars, Chorsa, Rockets, 
            Flower Pots, Pencils, Atom Bombs, Colour Matches and other Fancy Items. We also offer fireworks gift boxes ranges at
            competitive price. With websites, e-mail services & other technologies we are able to serve you faster, better and in
            time to your complete satisfaction. We offer the best products and services at economical prices to our clients
          </p>
        </div>
      </div>

      <div className="background-img">
      <h1>Have any questions related to our products? Feel Free to Enquire Us!</h1>
      <button>Contact Now</button>
    </div>
      <div className="container">
      
      <div className="why-choose-us section">
        <h5>Why Choose Us</h5>
        <p>Our Company is known for providing best Quality Products to our esteemed customers at competitive prices.</p>
        <ul>
          <li>10+ years of experience</li>
          <li>Direct dealers of reputed brands</li>
          <li>Quality and safety crackers</li>
          <li>Credible and healthy dealings</li>
          <li>Quick response & on-time delivery</li>
        </ul>
      </div>

      
      <div className="center-section">
        <img src={Sale} alt="Diwali Sale" className="sale-image" />
      </div>

      
      <div className="vision-mission section">
        <h5>Vision & Mission</h5>
        <p>To be the Best wholesale Dealer for all kinds of fancy crackers & gift boxes and a market leader in innovative and colourful crackers.</p>
        <p>Our Mission is to provide Quality and Innovative Crackers products to our valuable customers at reasonable prices and light up all their celebrations.</p>
      </div>
    </div>
    </div>
  );
};

export default Aboutpage;
