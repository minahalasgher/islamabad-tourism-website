import React from "react";
import "./Header.css";
// import heroImg from "../assets/hero.jpg";
function Header (){
    return(
    <header className="header">
     <a href="#">Nexcent</a>
     <nav className="nav-bar">
          <a href="/">home</a>
          <a href="#">blog</a>
          <a href="#">FAQ</a>
          <a href="#"> contact</a>
          <a href="#">services</a>
     </nav>
     
            <div className=" classic-btns">
            <button className="primary-btn">sign up</button>
            <button  className="secondry-btn">login</button>
              </div>
       </header>

    );
}
export default Header;