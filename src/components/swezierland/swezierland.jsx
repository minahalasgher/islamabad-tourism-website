import React from "react";

// import bg from "../../assets/bg2.jpg";
import videoBg from "../../assets/medium.mp4";
// import card1 from "../../assets/card5.jpg";
// import card2 from "../../assets/card6.jpg";
// import card3 from "../../assets/card7.jpg";
// import card4 from "../../assets/card8.jpg"

function swezierland() {
  // const cards = [
  //   { id: 1, img: card1 },
  //   { id: 2, img: card2 },
  //   { id: 3, img: card3 },
  //   { id: 4, img: card4 },
  // ];

  return (
    <div>
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-6">
      <section
        className="relative w-full max-w-6xl h-[600px] rounded-3xl overflow-hidden">
      
      <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
       >
      <source src={videoBg} type="video/mp4" />
      </video>
        {/* black overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* navbar */}
        <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-white">
          <div className="flex ">
           <h1 className="text-2xl font-bold ">World Tour</h1>
          {/* <span><img  className =" flex size-[10%] rounded-full "src="src/assets/earth4.jpg" alt="earth" />
          </span>wOrld tOur</h1> */}

          </div> 
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Destinations</li>
            <li>Packeges</li>
            <li>Tours</li>
            {/* <li>Contact</li> */}
          </ul>
        </nav>

        {/* content */}
        <div className="relative z-10 flex h-full px-10 ">
          {/* left side */}
          <div className="w-1/2 flex flex-col justify-center text-white">
            {/* <p>Best place for tourist</p>  */}

            <h1 className="text-8xl font-bold  whitespace-nowrap mt-3 text-center ml-60 pb-20">
              WORLD TOUR
            </h1>

            <p className="mt-4 max-w-sm">
              Treveling makes life more existing and meaningful <br/> Every country has its own beauty and traditions .
            </p>

            <button className="mt-8 w-fit px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Discover Location
            </button>
          </div>
          

          {/* righ t cards */}
          <div className="w-1/2 relative">
            <div className="absolute bottom-24 right-0 flex gap-4">
              {/* {cards.map((item) => (
                <div
                  key={item.id}
                  className="w-36 h-52 rounded-2xl overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}  */}
             </div>
          </div>
        </div>
        <div>
          
        </div>
      </section>
    </div>
    </div>
   
    
  );
}

export default swezierland;