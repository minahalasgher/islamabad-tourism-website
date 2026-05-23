// TravelBlogs.jsx

import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Beautiful Evening At Rawal Lake",
    desc: "Enjoy peaceful boating, sunset views, and relaxing family moments at Rawal Lake.",
    date: "12 May 2026",
  },

  {
    id: 2,
    image: blog2,
    title: "Top Hiking Spots In Margalla Hills",
    desc: "Adventure lovers can enjoy amazing hiking trails with beautiful mountain views.",
    date: "18 May 2026",
  },

  {
    id: 3,
    image: blog3,
    title: "Peaceful Walk In Fatima Jinnah Park",
    desc: "Relax and enjoy greenery in one of the biggest parks of Islamabad.",
    date: "22 May 2026",
  },

  {
    id: 4,
    image: blog4,
    title: "Daman-e-Koh Family Tour Guide",
    desc: "A perfect tourist point for families with breathtaking Islamabad scenery.",
    date: "25 May 2026",
  },

  {
    id: 5,
    image: blog5,
    title: "Hidden Beauty Of Saidpur Village",
    desc: "A traditional village surrounded by mountains and cultural beauty.",
    date: "30 May 2026",
  },
];

function TravelBlogs() {
  return (
    <section className="w-full bg-white py-20 px-5 md:px-10">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
          Travel Blogs
        </h2>

        <div className="w-20 h-[2px] bg-gray-400 mx-auto mt-5"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <CalendarDays size={16} />
                <span>{blog.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 leading-7 mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6 mb-5">
                {blog.desc}
              </p>

              <button className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300">
                Read More
                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelBlogs;