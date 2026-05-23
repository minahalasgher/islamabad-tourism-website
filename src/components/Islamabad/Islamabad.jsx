import React from "react";

function App() {
  const cards = [
    {
      id: 1,
      //  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       img:"https://i.pinimg.com/736x/02/74/e7/0274e73c0ebadbfa3c6e96e8255ce7cb.jpg",
    },
    {
       id: 2,
       img: "https://i.pinimg.com/736x/19/3d/7b/193d7b7bbe03c13d8123fe20036cfc6d.jpg",
    },
    {
        id: 3,
        img: "https://i.pinimg.com/1200x/3b/9f/58/3b9f585511de3d7fa6bfbaea0e790a38.jpg",
    },
    {
        id: 4,
        img: "https://i.pinimg.com/1200x/df/f0/81/dff08137cb1725b089c083bec53a6484.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Main Hero Section */}
      <section
        className="relative w-full max-w-6xl h-[600px] rounded-3xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            // "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
             "url('https://i.pinimg.com/736x/b1/df/a7/b1dfa733379039729c8f64c9c4fed3c5.jpg')",
             
            
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Navbar */}
        <nav className="relative z-20 flex justify-between items-center px-10 py-6 text-white">
          <h1 className="text-2xl font-bold">wOrld tOur</h1>

          <ul className="flex gap-8 font-medium">
              <li>Home</li>
              <li >Destinations</li>
              <li>Blog</li>
              <li>Flight</li>
              <li>Offer</li>
              <li>Contact</li>
          </ul>
        </nav>

        {/* Content */}
        <div className="relative z-20 flex h-full px-10">
          {/* Left Text */}
          <div className="w-1/2 flex flex-col justify-center text-white">
            <p className="mb-4 text-lg">Tropical River Life</p>

            <h1 className="text-6xl font-bold mt-3">
              Visit <br /> Islamabad
            </h1>

            <p className="mt-4 text-gray-200 max-w-md">
              Islamabad is a  super georgeous city. and
              daily life flowing along peaceful rivers.best place for tourist.
            </p>

            <button className="mt-8 w-fit px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Discover Location
            </button>
          </div>

          {/* Right Cards */}
          <div className="w-1/2 flex items-center justify-center relative">
            <div className="absolute bottom-24 right-0 flex gap-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-36 h-52 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={card.img}
                    alt="travel"
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

export default App;