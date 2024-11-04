import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaBars,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Template2({ data }) {
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
              } w-full lg:w-auto lg:flex space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0 flex-wrap justify-center flex-1`}
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
      <div className="bg-gradient-to-r from-blue-100 to-yellow-100 flex items-center justify-evenly p-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {content.hero.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {content.hero.description}
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Aan de slag{/* Get Started */}
          </button>
        </div>
        <div className="">
          <img
            src={images[0] || "https://via.placeholder.com/1200x800"}
            alt="Person holding a laptop"
            className="rounded-lg shadow-lg w-[40em] h-[30em] object-cover"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full max-w-4xl mx-auto my-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 p-4 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={images[index + 1] || "https://via.placeholder.com/1200x800"}
              alt={`Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg transition-transform transform hover:scale-105 shadow-md"
              loading="lazy"
            />
          ))}
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-center bg-gray-100">
          <p className="text-blue-600 mb-2 font-medium">
            Over ons{/* About Us */}
          </p>
          <h2 className="text-3xl font-bold mb-4 text-black">
            {companyName}
          </h2>
          <p className="text-gray-700 mb-4">{content.aboutUs.description}</p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow hover:bg-orange-600 transition duration-200 transform hover:scale-105">
            Click Me
          </button>
        </div>
      </div>

      {/* Service Section */}
      <section className="bg-[#e4eeee] py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Onze diensten{/* Our Services */}
          </h2>
          <div
            className={`flex flex-wrap gap-8 justify-center`}
          >
            {content.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[400px] max-w-[400px]">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


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
            <p className="mb-2">{content.footer.content}</p>
            <p className="mb-2">
              1234 Straatnaam, Stad, Staat, 12345{/* 1234 Street Name, City, State, 12345 */}
            </p>
            <p className="mb-2">
              Email:{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-400 hover:underline"
              >
                {email}"
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
              {["Home", "Over ons", "Diensten", "Contact", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Onze diensten{/* Our Services */}
            </h4>
            <ul className="space-y-2">
              {content.services.map((service) => (
                <li key={service}>
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
                placeholder="Voer uw e-mailadres in" // Enter your email
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
    </div>
  );
}

export default Template2;
