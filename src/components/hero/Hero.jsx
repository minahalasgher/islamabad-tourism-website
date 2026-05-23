import React from "react";
import heroImg from "../../assets/hero.jpg"; 
import "./Hero.css";

function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-text">
        <h1>
          Lessons and insights
          <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>  
      <div className="hero-img">
        <img  src={heroImg} alt=""/>
      </div>
    </section>
    
    

      <div className="client">
       <h2>Our Client</h2>
       <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="images">
          <img src="src/assets/Logo (1).png"/>
          <img src="src/assets/Logo (2).png"/>
          <img src="src/assets/Logo (3).png"/>
          <img src="src/assets/Logo (4).png"/>
          <img src="src/assets/Logo (5).png"/>
      </div>
    </>
    
  );
}
export default Hero;