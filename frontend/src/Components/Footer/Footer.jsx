import React from 'react'
import { Link } from 'react-router-dom'; 

import './Footer.scss'
import logo from '../../assets/ecocircuit_logo2-removebg.png'


const Footer = () => {
  return (
    <>
        <div className='footer'>
          <div className='footer-logo'>
            <img src={logo} alt="" />
          </div>

          <div className="footer-links">
            <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/about" className="footer__link">
                About
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/blogs" className="footer__link">
                Blogs
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/contact" className="footer__link">
                Contact
              </Link>
            </li>
            </ul>
          </div>

          <div className='footer-newsletter'>
            <input type='email' placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
        </div>
    </>
  )
}

export default Footer