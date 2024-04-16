import React from 'react'
import './Header.css'
import logo1 from  "../Assets/logo1.png"
import Books from "../Assets/img1.png"
function Header() {
  return (
    <>
    
    <section>
        <div class="circle"></div>
        <header>
          <div className="logo-container">
          <img src={logo1} alt="Logo" className="logo1" />
          <h1>Book Nook</h1>
        </div>
       
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
        <div class="container">
            <div class="text-box">
                <h2>Today a reader <br/>Tomorrow a <span>Leader</span></h2>
                <p>Find all your favourite Books Here....</p>
                <a href="3">Browse</a>
            </div>
            <div class="img-box">
               <img src={Books} alt="Books" className="starbucks" />
            </div>
        </div>
        
    
    </section>

    </>
  )
}

export default Header