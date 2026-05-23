const contributors = [
  {
    id: 1,
    name: "Ali Hassan",
    role: "Travel Contributor",
    attractions: 45,
    blogs: 12,
  },
  {
    id: 2,
    name: "Ayesha Khan",
    role: "Tour Guide",
    attractions: 38,
    blogs: 9,
  },
  {
    id: 3,
    name: "Usman Tariq",
    role: "Photographer",
    attractions: 50,
    blogs: 14,
  },
];

function ContributorsSection() {
  return (
    <section className="bg-[#f5f7f9] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#0b1f33] mb-3">
          Meet Our Contributors
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Explore Islamabad with our travel experts
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {contributors.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              {/* Top Background */}
              <div className="h-20 bg-gradient-to-r from-[#0f3d3e] to-[#2f6f63]"></div>

              {/* Card Content */}
              <div className="py-8 px-6 text-center">

                <h3 className="text-2xl font-bold text-[#0b1f33]">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.role}
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-10 mt-6 border-t pt-4">

                  <div>
                    <h4 className="text-xl font-bold text-[#0b1f33]">
                      {item.attractions}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Attractions
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#0b1f33]">
                      {item.blogs}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Blogs
                    </p>
                  </div>

                </div>

                {/* Button */}
                <button className="mt-6 bg-[#0f3d3e] hover:bg-[#145252] text-white px-6 py-2 rounded-full transition duration-300">
                  View Profile
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ContributorsSection;