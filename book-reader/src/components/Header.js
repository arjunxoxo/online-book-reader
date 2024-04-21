import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logo1 from '../Assets/logo1.png';
import Books from '../Assets/img1.png';

function Header() {
  return (
    <section>
      <div class="circle"></div>
      <header>
        <div className="logo-container">
          <img src={logo1} alt="Logo" className="logo1" />
          <h1>Book Nook</h1>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li> {/* Use Link instead of <a> */}
          <li><Link to="/browse">Browse</Link></li> {/* Link to the Browse page */}
          <li><Link to="/login">Account</Link></li>
        </ul>
      </header>
      <div class="container">
        <div class="text-box">
          <h2>Today a reader <br/>Tomorrow a <span>Leader</span></h2>
          <p>Find all your favourite Books Here....</p>
          <Link to="/browse">Browse</Link> {/* Link to the Browse page */}
        </div>
        <div class="img-box">
          <img src={Books} alt="Books" className="starbucks"/>
        </div>
      </div>
    </section>
  );
}

export default Header;
