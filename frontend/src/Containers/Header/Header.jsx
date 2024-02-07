import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='app_header'>
      <div className="hero">
        <h1>Renew.<span> Recycle.</span> Reconnect.</h1>
        <p>Empowering Change, One Circuit at a Time: Find Your Nearest E-Waste Facility and Join the Recycling Revolution!</p>
      </div>          
    </div>
  );
};

export default Header;
