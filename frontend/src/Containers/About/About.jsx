import React from 'react';
import './About.scss';
import EwasteImage from '../../assets/BG.jpg'; 

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className='about-heading'>About Us</h1>
        <p className='about-paragraph'>
        Discover Ecocircuit – your hub for finding e-waste facilities nearby.
        Our map makes it simple to locate certified recycling centers.
        Earn credits for responsibly disposing of your e-waste and help protect the planet.
        Join us in making a difference, one device at a time. Explore Ecocircuit now.
        </p>
      </div>

      <div className="about-sub">
        <div className="sub">
        <div className="about-sub-text">
          <h1>Reimagining E-Waste</h1>
          <p>We’ve decided to not just make a difference,
            <br /> but be the difference in the world of electronic waste.</p>
        </div>
        </div>
        <div className="about-sub-image">
          <img src={EwasteImage} alt="" />
        </div>
      </div>

      <div className="about-powers">
        <h1>Our Superpowers</h1>
        <div className="about-list">
          <div className="item">
          <h3>Innovative Locations</h3>
          <p>Excellent locator system for easy e-waste deposit.</p>
          </div>
          <div className="item">
          <h3>Wide Coverage</h3>
          <p>We’re serving more locations than any other.</p>
          </div>
          <div className="item">
          <h3>24/7 Support</h3>
          <p>We’re always ready to assist you.</p>
          </div>
          <div className="item">
          <h3>Rewards Hub</h3>
          <p>Amazing credits system rewarding eco-friendly activities.</p>
          </div>
          <div className="item">
          <h3>Eco Champions</h3>
          <p>We’re committed to preserving earth’s beauty.</p>
          </div>
          <div className="item">
          <h3>Secure Disposal</h3>
          <p>Ensuring safe and compliant e-waste management.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
