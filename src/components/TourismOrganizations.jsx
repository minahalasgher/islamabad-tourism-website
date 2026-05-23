import faisal from "../assets/faisal.jpg";
import monument from "../assets/monument1.jpg";
import rawal from "../assets/rawal.jpg";
import monal from "../assets/monal.jpg";
import margalla from "../assets/margalla.jpg";
import lokvirsa from "../assets/lok.jpg";

const tourismData = [
  {
    title: "SAIDPUR VILLAGE",
    image: faisal,
  },
  {
    title: "Pakistan Monument",
    image: monument,
  },
  {
    title: "Rawal Lake",
    image: rawal,
  },
  {
    title: "Monal Islamabad",
    image: monal,
  },
  {
    title: "Margalla Hills",
    image: margalla,
  },
  {
    title: "Lok Virsa",
    image: lokvirsa,
  },
];

function TourismOrganizations() {
  return (
    <div className="bg-[#AEB6BF] py-14 sm:py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          National Tourism Organizations
        </h1>

        <p className="text-gray-200 mt-3 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-7 px-2">
          Tourism Departments of the Federal and Provincial
          Governments of Pakistan
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide pb-2">
        
        {tourismData.map((item, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] 
            bg-white rounded-2xl overflow-hidden shadow-lg 
            hover:scale-105 duration-300 flex-shrink-0"
          >
            
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 sm:h-48 md:h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h2 className="text-center text-[#0B5D5B] font-semibold text-base sm:text-lg">
                {item.title}
              </h2>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default TourismOrganizations;