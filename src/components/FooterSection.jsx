import footerBg from "../assets/footer-bg.jpg";

function FooterSection() {
  return (
    <footer
      className="text-white pt-14 sm:pt-16 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            
            <div className="flex items-start gap-4 mb-5">
              
              <div className="bg-white text-[#0f3d3e] p-3 sm:p-4 rounded-full text-2xl sm:text-3xl">
                ☎
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold leading-snug">
                  Got Questions ? Call us 24/7
                </h2>

                <p className="mt-2 text-base sm:text-lg font-semibold">
                  Call Us: +923 111 038 049
                </p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Contact Info
            </h3>

            <p className="text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base">
              Sir Syed Avenue, H-13, Islamabad,
              Pakistan.
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Company
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer transition">
                About us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms of Use
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Statement
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Give Us Feedbacks
              </li>
            </ul>
          </div>

          {/* Zi SoftTech */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Zi SoftTech
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li>Web Development</li>
              <li>Software Dev</li>
              <li>HostingZi</li>
              <li>Digital Smart Cards</li>
              <li>Travelzi CRM</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Support
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li>Account</li>
              <li>Legal</li>
              <li>Contact</li>
              <li>Affiliate Program</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Mailing List */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Mailing List
            </h2>

            <p className="text-gray-300 leading-7 mb-5 text-sm sm:text-base">
              Sign up for our mailing list to get
              latest updates and offers.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 mb-6">
              
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white text-black px-4 py-3 outline-none w-full sm:rounded-l-md sm:rounded-r-none rounded-md"
              />

              <button className="bg-[#0d1b52] px-5 py-3 sm:rounded-r-md sm:rounded-l-none rounded-md hover:bg-[#13236b] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 py-5 px-4 sm:px-6">
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm gap-3 text-center md:text-left">

            <p>
              © 2025 NTP | All Rights Reserved
            </p>

            <p>
              Developed by Zi SoftTech
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;