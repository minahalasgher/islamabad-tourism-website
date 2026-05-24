function TravelTips() {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0B5D5B] mb-4">
            Travel Tips for Visitors
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Helpful information to make your Islamabad trip
            comfortable, safe, and memorable.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Tip 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-5">☀️</div>

            <h3 className="text-2xl font-semibold mb-3">
              Best Weather
            </h3>

            <p className="text-gray-600">
              Visit Islamabad during spring and autumn
              for pleasant weather and green scenery.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-5">🚌</div>

            <h3 className="text-2xl font-semibold mb-3">
              Local Transport
            </h3>

            <p className="text-gray-600">
              Use Metro Bus, Careem, or InDrive for
              affordable and convenient travel.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-5">📸</div>

            <h3 className="text-2xl font-semibold mb-3">
              Photography Spots
            </h3>

            <p className="text-gray-600">
              Don’t miss Faisal Mosque, Monal, and
              Daman-e-Koh for amazing photos.
            </p>
          </div>

          {/* Tip 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 duration-300">
            <div className="text-5xl mb-5">🗺️</div>

            <h3 className="text-2xl font-semibold mb-3">
              Explore Safely
            </h3>

            <p className="text-gray-600">
              Keep water with you and explore tourist
              places during daytime for best experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TravelTips;