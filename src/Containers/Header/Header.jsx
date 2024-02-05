import React from 'react'
import './Header.scss'
import Navbar from '../../Components/Navbar/Navbar'
import BG from '../../assets/BG.jpg'

const Header = () => {
  return (
    <div className='app_header'>
      <div className="hero">
        <h1>Renew.<span> Recycle.</span> Reconnect.</h1>
        <p>Empowering Change, One Circuit at a Time : Find Your Nearest E-Waste Facility and Join the Recycling Revolution!</p>
      </div>
      <div className="hero-img">
        <img src={BG} alt="" />
      </div>          
    </div>
  )
}

export default Header