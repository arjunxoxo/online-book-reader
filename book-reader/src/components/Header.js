import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css';
import logo1 from  "../Assets/logo1.png";
import Books from "../Assets/img1.png";

function Header() {
  return (
    <section>
      <div className="circle"></div>
      <header>
        <div className="logo-container">
          <img src={logo1} alt="Logo" className="logo1" />
          <h1>Book Nook</h1>
        </div>
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">Explore</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </header>
      <div className="container">
        <div className="text-box">
          <h2>Today a reader <br/>Tomorrow a <span>Leader</span></h2>
          <p>Find all your favourite Books Here....</p>
          <Link to="/browse">Browse</Link> {/* Use Link component for navigation */}
        </div>
        <div className="img-box">
          <img src={Books} alt="Books" className="starbucks" />
        </div>
      </div>
    </section>
  );
}

export default Header;
