import React from "react";
import bgImage from "../../assets/bg4.jpg";
function App() {
  return (
    <div className="min-h-screen bg-[#dcecf5] flex items-center justify-center p-8">
      <div
        className="w-full max-w-6xl h-[700px] rounded-[35px] bg-cover bg-center relative overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-10">
          <h1 className="text-2xl font-semibold">GreenTrails</h1>

          <ul className="hidden md:flex gap-10 text-sm ">
            <li>Locations</li>
            <li>Rooms</li>
            <li>Experiences</li>
            <li>Contact</li>
          </ul>

          <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
            Book Now
          </button>
        </nav>

        {/* Left text */}
        <div className="absolute top-36 left-10 z-10 text-white">
          <h1 className="text-7xl font-bold leading-tight">
            Discover <br />
            <span className="text-gray-300">Nature’s</span> <br />
            Hidden Trails
          </h1>

          <p className="mt-8 text-sm max-w-sm text-gray-200">
            Explore our collection of secluded sanctuaries crafted for
            restorative rest. Disconnect from the daily grind.
          </p>
        </div>

        {/* Rating */}
        <div className="absolute bottom-12 left-10 text-white z-10 flex items-center gap-2">
          <span className="text-yellow-400 text-2xl">★</span>
          <span className="text-3xl font-semibold">4.5</span>
          <p className="text-sm text-gray-300">from 1,100+ stays</p>
        </div>

        {/* Booking card */}
        <div className="absolute bottom-20 right-10 z-10 w-[360px] bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-6">
            Novem Natural <br /> Eco Resort
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div className="bg-black/30 p-4 rounded-xl">
              <p className="text-gray-400">Check-in</p>
              <p>After 2:00 PM</p>
            </div>

            <div className="bg-black/30 p-4 rounded-xl">
              <p className="text-gray-400">Check-out</p>
              <p>Until 12:00 PM</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold">$55.00</h3>
            <span className="text-sm text-gray-300">/night</span>
          </div>

          <button className="w-full bg-white text-black py-3 rounded-full font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;