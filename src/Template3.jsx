import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

function Template3({ data }) {
  const [open, setOpen] = useState(false);
  const {
    companyName,
    phoneNo,
    email,
    content,
    logo,
    images = [],
  } = data || {};

  // Added extraction of services and testimonials
  const services = content.services || [];
  const testimonials = content.testimonials || [];

  return (
    <div className="bg-white text-black">
      {/* NavBar Section */}
      <nav className="bg-white p-6 font-poppins">
        <div className="flex justify-between items-center max-w-7xl mx-auto flex-wrap">
          {/* Nav Logo */}
          <h1 className="text-2xl font-semibold text-black flex-1">{companyName}</h1>


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
            className={`${open ? "block" : "hidden"
              } w-full lg:w-auto lg:flex space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0 justify-center flex-wrap flex-1`}
          >
            {["Over", "Diensten", "Getuigenissen", "Contact"].map((item) => (
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
            className={`${open ? "flex" : "hidden"
              } w-full flex-row lg:w-auto lg:flex space-x-4 lg:space-y-0 mt-4 lg:mt-0 justify-end flex-1`}
          >
            {[
              {
                icon: <FaFacebookSquare size={28} />,
                link: "https://facebook.com",
              },
              {
                icon: <FaTwitterSquare size={28} />,
                link: "https://twitter.com",
              },
              {
                icon: <FaInstagramSquare size={28} />,
                link: "https://instagram.com",
              },
            ].map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="text-black hover:text-gray-600"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 h-[25em] py-12 px-4 lg:py-16 lg:px-8 relative overflow-hidden">
        <img
          src={images[0] || "https://via.placeholder.com/1200x800"}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto bg-white bg-opacity-80 p-6 lg:p-8 rounded-lg relative z-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-blue-900">
            {content.hero.title}
          </h2>
          <p className="text-md lg:text-lg text-center text-blue-800 mb-8 lg:mb-12">
            {content.hero.description}
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300">
              Aan de slag {/* Get Started */}
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-blue-100 py-12 px-4 lg:py-16 lg:px-8">
        <div className="container mx-auto bg-white bg-opacity-80 p-6 lg:p-8 rounded-lg">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-blue-900">
            Ontwikkel je vaardigheden op een nieuwe en unieke manier
            {/* Develop your skills in a new and unique way */}
          </h2>
          <p className="text-md lg:text-lg text-center text-blue-800 mb-8 lg:mb-12">
            Ontdek een transformatieve aanpak voor vaardigheidsontwikkeling op ons online leerplatform.
            {/* Explore a transformative approach to skill development on our online learning platform. */}
          </p>

          <div
            className="flex flex-wrap justify-center gap-6"
          >
            <p className="text-gray-700 text-sm lg:text-base">
              {content.aboutUs.description}
            </p>
          </div>

          <div className="flex justify-center mt-8 lg:mt-12">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300">
              Schrijf je nu in
              {/* Enroll Now */}
            </button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-white py-12 px-4 lg:py-16 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Onze diensten{/* Our Services */}
          </h2>
          <div
            className="flex flex-wrap justify-center gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white w-[30em] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={images[0] || "https://via.placeholder.com/1200x800"}
                  alt={service.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-blue-500 py-12 px-4 lg:py-16 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Wat onze klanten zeggen
            {/* What Our Clients Say */}
          </h2>
          <div
            className="flex flex-wrap justify-center gap-8"
          >
            {testimonials.map((client, index) => (
              <div
                key={index}
                className="bg-white w-[30em] p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{client.review}</p>
                <h3 className="text-xl font-semibold text-gray-900">{client.name}</h3>
                <p className="text-gray-600">{client.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="font-bold text-lg">
              Bedrijf{/* Company  */}
            </h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Over ons{/* About Us */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">
              Volg ons{/* Follow Us */}
            </h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Juridisch</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Privacybeleid{/* Privacy Policy */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Servicevoorwaarden{/* Terms of Service */}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg">
              Contacteer ons{/* Contact Us */}
            </h3>
            {phoneNo && <p className="text-gray-600">{phoneNo}</p>}
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </footer>

      {/* Made with Love Section */}
      <div className="text-center py-4 bg-gray-300 text-black">
        <p className="text-lg">
          Gemaakt met {/* Made with */}
          <span role="img" aria-label="love">❤️</span> door {/* by */} Leeuw Studio
        </p>
      </div>
    </div>
  );
}

export default Template3;
