import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";
import logo2 from "../../assets/ecocircuit_logo2-removebg.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo2} alt="EcoCircuit Logo" />
      </Link>
      <ul className={`navbar__list ${menuOpen ? "open" : ""}`}>
        <li className="navbar__item">
          <Link
            to="/"
            className="navbar__link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/about"
            className="navbar__link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/blogs"
            className="navbar__link"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/contact"
            className="navbar__link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <Link to="/login" className="login">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
