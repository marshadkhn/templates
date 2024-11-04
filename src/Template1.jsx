import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaBars
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Template1 = ({ data }) => {
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

  return (
    <div className="bg-white text-white">
      {/* Navbar */}
      <nav className="bg-white p-6 font-poppins">
        <div className="flex justify-between items-center max-w-7xl mx-auto flex-wrap">
          {/* Nav Logo */}
          <h1 className="flex-1 text-2xl font-semibold text-black">{companyName}</h1>

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
              } flex-row lg:w-auto lg:flex space-x-4 lg:space-y-0 mt-4 lg:mt-0 justify-end flex-1`}
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
      <div
        className="relative text-left py-20 bg-gray-900 bg-cover bg-center min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${images[0] || "https://via.placeholder.com/1200x800"})`
        }}
      >
        {/* Black Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Line (divider or stylistic element) */}
          <hr className="border-t-4 border-white w-24 mb-4 mx-auto" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {content.hero.title}
          </h1>

          {/* Paragraph */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {content.hero.description}
          </p>

          {/* Button */}
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Aan de slag{/* Get Started */}
          </button>
        </div>
      </div>

      {/* About Us   */}
      <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* First Half: Image Grid */}
        <div className="md:w-1/2 p-4 grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              key={index}
              src={images[index + 1] || "https://via.placeholder.com/1200x800"}
              alt={`Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg transition-transform transform hover:scale-105 shadow-md"
              loading="lazy"
            />
          ))}
        </div>

        {/* Second Half: Content */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <p className="text-gray-600 mb-2 font-medium">{companyName}</p>
          <h2 className="text-3xl font-bold mb-4 text-black">
            Over ons{/* About Us */}
          </h2>
          <p className="text-gray-700 mb-4">{content.aboutUs.description}</p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200 transform hover:scale-105">
            Click Me
          </button>
        </div>
      </div>

      {/* Service section */}
      <div className="bg-gradient-to-r from-[#f0f4f8] to-[#e6effa] flex items-center justify-center min-h-screen mt-32 py-10">
        <div className="w-full max-w-4xl p-6 text-center">
          <p className="text-gray-700 mb-4">
            Ontdek ons ​​brede scala aan diensten die zijn ontworpen om aan uw behoeften te voldoen
            {/* Discover our wide range of services designed to cater to your needs */}
          </p>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Onze diensten{/* Our Services */}
          </h2>

          {/* Services Grid */}
          <div className="flex flex-wrap gap-8 justify-center">
            {content.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[400px] border border-gray-200 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <img
                  src={images[index + 1] || "https://via.placeholder.com/1200x800"}
                  alt={`Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-t-lg transition-transform duration-200"
                  loading="lazy"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-200">
                    Meer informatie{/* Learn More */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial section*/}
      <div className="w-full max-w-4xl mx-auto p-6 text-center mt-32 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Wat onze klanten zeggen
          {/* What Our Clients Say */}
        </h2>
        <p className="text-gray-100 mb-6">
          We waarderen feedback van onze klanten. Hier zijn enkele van de vriendelijke woorden die ze over onze diensten hebben gedeeld.
          {/* We value feedback from our clients. Here are some of the kind words they’ve shared about our services. */}
        </p>

        {/* Testimonial Carousel */}
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          showStatus={false}
          className="rounded-lg overflow-hidden"
        >
          {content.testimonials.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-white p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                {client.name}
              </h3>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15.27L16.18 19l-1.64-7.03L19 8.24l-7.19-.61L10 1 8.19 7.63 1 8.24l5.46 3.73L5.82 19z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-center italic mb-2">
                "{client.review}"
              </p>
              <p className="text-gray-500">- {client.name}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Our Team section*/}
      <div className="w-full max-w-4xl mx-auto p-6 mt-32 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">
          Maak kennis met ons team{/* Meet Our Team */}
        </h2>
        <p className="text-gray-700 mb-6">
          Ons team bestaat uit toegewijde professionals die gepassioneerd zijn over wat ze doen. We werken samen om de beste service en oplossingen voor onze klanten te bieden.
          {/* Our team is comprised of dedicated professionals who are passionate about what they do. We work together to provide the best service and solutions for our clients. */}
        </p>

        {/* Team Member Boxes */}
        <div className="flex flex-wrap gap-8 justify-center">
          {content.ourTeam.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[250px] border border-gray-300 p-4 rounded-lg bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-blue-200 mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold mb-1 text-blue-600">
                {member.name}
              </h3>
              <p className="text-sm font-bold text-gray-700 mb-1">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Company Info Column */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              {content.footer.title}
            </h4>
            <p className="mb-2">
              {content.footer.content}
            </p>
            <p className="mb-2">
              1234 Straatnaam, Stad, Staat, 12345{/* 1234 Street Name, City, State, 12345 */}
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:info@yourcompany.com"
                className="text-blue-400 hover:underline"
              >
                {email}
              </a>
            </p>
            <p className="mb-2">
              {/* Phone:  */}
              Telefoon: <span className="text-blue-400">{phoneNo}</span>
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Snelle links{/* Quick Links */}
            </h4>
            <ul className="space-y-2">
              {["Home", "Over ons", "Diensten", "Contact", "FAQ"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Onze diensten{/* Our Services */}
            </h4>
            <ul className="space-y-2">
              {content.services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Blijf verbonden{/* Stay Connected */}
            </h4>
            <p className="mb-4">
              Abonneer u op onze nieuwsbrief voor de laatste updates en aanbiedingen.
              {/* Subscribe to our newsletter for the latest updates and offers. */}
            </p>
            <div className="flex flex-col sm:flex-row justify-center mb-4">
              <input
                type="email"
                placeholder="Voer uw e-mailadres in" // Enter you email
                className="p-2 rounded-l border border-gray-400 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="bg-blue-600 text-white px-4 rounded sm:rounded-r hover:bg-blue-700 transition duration-200">
                Abonneren{/* Subscribe */}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4 mt-8">
          {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="hover:text-blue-400 transition duration-200"
            >
              {platform}
            </a>
          ))}
        </div>

        <p className="mt-4 text-sm text-center border-t border-gray-700 pt-4">
          © 2024 Uw Bedrijf. Alle rechten voorbehouden.{/* © 2024 Your Company. All rights reserved. */}
        </p>
      </footer>

      {/* Made with Love Section */}
      <div className="text-center py-4 bg-gray-800 text-white">
        <p className="text-lg">
          Gemaakt met {/* Made with */}
          <span role="img" aria-label="love">❤️</span> door {/* by */} Leeuw Studio
        </p>
      </div>
    </div>
  );
};

export default Template1;
