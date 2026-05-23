import React from "react";

import bg from "../../assets/bg2.jpg";
import card1 from "../../assets/swe1.jpg";
import card2 from "../../assets/swe2.jpg";
import card3 from "../../assets/swe3.jpg";
import card4 from "../../assets/swe4.jpg";

function Hero1() {
  const cards = [
    { id: 1, img: card1 },
    { id: 2, img: card2 },
    { id: 3, img: card3 },
    { id: 4, img: card4 },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-3 sm:p-5 md:p-6">
      
      <section
        className="relative w-full max-w-6xl min-h-[650px] md:h-[600px] rounded-3xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* black overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* content */}
        <div className="relative z-10 flex flex-col lg:flex-row h-full px-5 sm:px-8 md:px-10 pb-10 lg:pb-0">
          
          {/* left side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-white text-center lg:text-left pt-10 lg:pt-0">
            
            <p className="text-sm sm:text-base">
              Best place
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 leading-tight">
              Islamabad <br /> tour
            </h1>

            <p className="mt-4 max-w-sm sm:max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              Islamabad — The City of Peace & Beauty.
              Experience Nature in the Heart of Pakistan.
            </p>

            <button className="mt-8 w-fit mx-auto lg:mx-0 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Discover Location
            </button>
          </div>

          {/* right cards */}
          <div className="w-full lg:w-1/2 relative flex items-end justify-center lg:justify-end mt-10 lg:mt-0">
            
            <div className="flex flex-wrap justify-center lg:flex-nowrap gap-3 sm:gap-4 lg:absolute lg:bottom-24 lg:right-0">
              
              {cards.map((item) => (
                <div
                  key={item.id}
                  className="w-28 sm:w-32 md:w-36 h-44 sm:h-48 md:h-52 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.img}
                    alt="tour"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero1;