import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaBars,
  FaQuoteLeft,
  FaQuoteRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Template7({ data }) {
  const [open, setOpen] = useState(false);

  // Destructure data prop
  const {
    companyName,
    phoneNo,
    email,
    content,
    logo,
    images = [],
  } = data || {};

  // Extracting dynamic data from the content prop
  const { hero, aboutUs, services, testimonials, footer } = content || {};

  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <nav className="bg-white p-6 font-poppins shadow-2xl shadow-black">
        <div className="flex justify-between items-center max-w-7xl mx-auto flex-wrap">
          {/* Nav Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={`${companyName} Logo`}
              className="h-12 lg:h-16"
            />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <FaBars size={28} />
            </button>
          </div>

          {/* Nav Items */}
          <ul
            className={`${
              open ? "block" : "hidden"
            } w-full lg:w-auto lg:flex space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0 flex-wrap`}
          >
            {["About", "Services", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-gray-600 text-lg font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav Social Icons */}
          <div
            className={`${
              open ? "flex" : "hidden"
            } w-full flex-row lg:w-auto lg:flex space-x-4 lg:space-y-0 mt-4 lg:mt-0 justify-center`}
          >
            {[{ icon: <FaFacebookSquare size={28} />, link: "https://facebook.com" },
              { icon: <FaTwitterSquare size={28} />, link: "https://twitter.com" },
              { icon: <FaInstagramSquare size={28} />, link: "https://instagram.com" },
            ].map(({ icon, link }, index) => (
              <a key={index} href={link} className="text-black hover:text-gray-600">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{hero?.title}</h2>
            <p className="text-gray-600 mb-6">{hero?.description}</p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 mb-4 md:mb-0">
              Discover More
            </button>
          </div>
          <div className="order-1 md:order-2 relative">
            <img
              src={images[0] || "https://via.placeholder.com/600x400?text=Hero+Image"} // Updated default image
              alt="Hero Image"
              className="rounded-lg shadow-lg w-full h-full object-cover mb-4"
            />
            <div className="absolute top-2 right-2 bg-white p-4 rounded-lg shadow-md">
              <p className="text-blue-600 text-sm font-semibold">20+ Years Of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-purple-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-800">A BIT ABOUT US</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">{aboutUs?.description}</p>
          <button className="bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300">
            EXPLORE MORE
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={`relative bg-gray-100 py-20 px-6 md:px-12 lg:px-24 ${
          services?.length <= 2 ? "flex justify-center items-center" : ""
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-purple-800">Our Services</h2>
          <div
            className={`grid ${services?.length <= 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-12`}
          >
            {services?.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={images[index % images.length] || "https://via.placeholder.com/600x400?text=Service+Image"} // Updated default image
                  alt={`Service ${index + 1}`}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-purple-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 px-4 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
        What Our Clients Say
      </h2>
          <div className={`flex ${testimonials?.length < 3 ? "justify-center" : "justify-between"} flex-wrap gap-12`}>
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative w-full md:w-1/3">
                <div className="flex justify-center -mt-16">
                  <img
                    src={images[index % images.length] || "https://via.placeholder.com/600x400?text=Testimonial+Image"} // Updated default image
                    alt={testimonial.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <FaQuoteLeft className="text-purple-600 text-3xl mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.review}</p>
                <h3 className="text-xl font-semibold mt-4 text-purple-800">{testimonial.name}</h3>
                <FaQuoteRight className="text-purple-600 text-3xl ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-blue-800 py-16 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{footer?.title}</h2>
          <p className="text-gray-600 mb-4">{footer?.description}</p>
          <div className="flex justify-center mt-6 space-x-6">
            {[{ icon: <FaFacebook size={28} />, link: "https://facebook.com" },
              { icon: <FaTwitter size={28} />, link: "https://twitter.com" },
              { icon: <FaInstagram size={28} />, link: "https://instagram.com" },
              { icon: <FaLinkedin size={28} />, link: "https://linkedin.com" },
            ].map(({ icon, link }, index) => (
              <a key={index} href={link} className="text-blue-800 hover:text-gray-600">
                {icon}
              </a>
            ))}
          </div>
          <p className="text-center mt-6">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Template7;
