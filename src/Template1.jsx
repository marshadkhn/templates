import React, { useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
// import logo from "../../assets/Images/im.jpg";
// import logo2 from "../../assets/Images/logo2.png";
import google from "../src/assets/Images/google.png";
import profilePic from "../src/assets/profilePic.png";
// import backgroundImage from "../../assets/Images/hero-bg.png";
// import gallery from "../../assets/Images/gallery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import jsonData from "../../assets/data.js";
const Template = ({ data }) => {
  const {
    niche,
    businessName,
    emailBusiness,
    content,
    images = [],
  } = data || {};

  const {
    reviews = [],
    uspContent = [],
    photoContent = [],
    faqContent = [],
  } = content || {};

  return (
    <div className="relative">
      {/* Navbar starts */}
      <div className="bg-black text-white text-center py-2">
        Here we can put any offer going on or any slogan of the company
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-7 flex justify-center items-center py-5">
          <div className="flex justify-center items-center gap-11">
            <div className="flex justify-center items-center mr-20">
              {/* <img src={logo} alt="LEEUW STUDIO" className="h-10" /> */}
              <span className="text-xl font-bold"> {businessName}</span>
            </div>
            <div className="flex justify-center space-x-11">
              <a href="#home" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">
                About Us
              </a>
              <a href="#blogs" className="text-gray-700 hover:text-gray-900">
                Blogs
              </a>
              <a href="#case" className="text-gray-700 hover:text-gray-900">
                Case
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-500 text-white px-4 py-4 rounded-xl hover:bg-orange-600">
                Get in Touch
              </button>
              <div className="relative flex items-center">
                <button className="text-gray-700 hover:text-gray-900 flex items-center">
                  NL
                  <FaCaretDown className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar ends */}

      {/* Hero section starts */}

      <section
        id="hero"
        className="hero-section relative bg-cover bg-center h-screen flex items-center text-white"
        style={{
          backgroundImage: `url(${
            images[0] || "https://via.placeholder.com/1200x800"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 container mx-auto px-24">
          <div className="text-left max-w-lg">
            <h1 className="text-4xl font-bold mb-4">
              Innovative Solutions for Premium Heat Exchange Systems
            </h1>
            <p className="mb-8">
              Delivering custom-engineered heat exchangers and HVAC solutions
              for efficient energy management. Whether for industrial or
              commercial applications, Interheat's products are designed to meet
              specific needs with precision, reliability, and sustainability in
              mind.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600">
              You're partner in {niche} , Get in touch!
            </button>
          </div>
        </div>
      </section>
      {/* Hero section ends */}

      {/* Review section starts */}
      <section id="review" className="bg-white py-12">
        <div className="container mx-auto px-24">
          <div className="flex justify-between items-center mt-8 px-6">
            <h2 className="text-3xl font-bold text-main-blue text-center mb-8">
              Reviews : <span className="text-orange-500"> {businessName}</span>
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600">
              Bekijk alle reviews
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 p-6 ${
                  index !== reviews.length - 1 ? "border-r-2" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={profilePic}
                    alt="profilePic"
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{review.name}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-500">
                        {"★".repeat(review.rating)}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{review.review}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={google} // Replace with the actual URL of the Google icon
                    alt="Google"
                    className="h-4 w-4 mr-2"
                  />
                  <span className="text-gray-500 text-sm">Google Reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Review section ends */}

      {/* Why Choose Us? starts */}
      <section id="intro" className="bg-light-blue py-16">
        <div className="container mx-auto md:px-24 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Left section */}
          <div
            className="w-full md:w-1/2  h-[437px] bg-blue-100 p-12 rounded-3xl"
            style={{
              backgroundImage: `url(${
                images[1] || "https://via.placeholder.com/1200x800"
              })`, // Temporary image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Right section */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6">
              Een Kijke Achter De Schermen Bij:{" "}
              <span className="text-orange-500">{businessName}</span>
            </h2>
            <p className="text-gray-700 leading-8 mb-4">
              Would Definitely Recommend Ryles As A Driving School: Everything
              Is Well Organised And Clearly Communicated. They Let You Drive
              With Other Instructors{" "}
              <span className="text-orange-500"> {niche}</span> To Practice
              Exams, Which {businessName} Is Very Useful To Prepare For The Real
              Exam.
            </p>
            <p className="text-gray-700 leading-8 mb-4">
              Would Definitely Recommend Ryles As A Driving{" "}
              <span className="text-orange-500"> {niche}</span> School:
              Everything Is Well Organised And Clearly Communicated. They Let
              You Drive With Other {businessName} Instructors (Besides Your
              Regular One) To Practice Exams, Which Is Very Useful To Prepare
              For The Real Exam.
            </p>
            <p className="text-gray-700 leading-8">
              Would Definitely Recommend Ryles As A{" "}
              <span className="text-orange-500"> {niche}</span> Driving School:
              Everything Is Well Organised And Clearly Communicated. They Let
              You Drive With Other Instructors (Besides Your Regular One) To
              Practice Exams, Which Is Very Useful To Prepare For The Real Exam.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us? ends */}

      {/* Diensten / Producten / Afspraak Sectie */}
      <section
        id="service"
        className="bg-gradient-to-r from-blue-100 to-blue-200 py-16"
      >
        <div className="container mx-auto px-6 md:px-16 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Diensten, <span className="text-orange-500">Producten</span> &
              Afspraak
            </h2>
            <p className="text-gray-600 text-lg">
              Ontdek ons brede aanbod, ontworpen om aan al je wensen te voldoen.
              Of je nu op zoek bent naar topdiensten, hoogwaardige producten, of
              een afspraak wilt maken, wij hebben het voor je!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Diensten Kaart */}
            {/* Service Card */}
            <div className="w-full sm:w-64 bg-white shadow-lg rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    images[3] || "https://via.placeholder.com/1200x800"
                  })`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Onze Diensten
                </h3>
                <p className="text-gray-600 text-sm">
                  Ontdek onze vakkundig samengestelde diensten, op maat gemaakt
                  om aan jouw specifieke behoeften te voldoen.
                </p>
              </div>
            </div>

            {/* Producten Kaart */}
            {/* Products Card */}
            <div className="w-full sm:w-64 bg-white shadow-lg rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    images[3] || "https://via.placeholder.com/1200x800"
                  })`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Onze Producten
                </h3>
                <p className="text-gray-600 text-sm">
                  Blader door onze premium producten die garant staan voor
                  kwaliteit en tevredenheid.
                </p>
              </div>
            </div>

            {/* Afspraak Kaart */}
            {/* Appointment Card */}
            <div className="w-full sm:w-64 bg-white shadow-lg rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    images[3] || "https://via.placeholder.com/1200x800"
                  })`,
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Maak een Afspraak
                </h3>
                <p className="text-gray-600 text-sm">
                  Plan een afspraak met ons en laten we jouw ideeën tot leven
                  brengen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="usps" className="bg-white py-16 px-24">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-left text-gray-800 mb-16">
            USP’s <span className="text-orange-500">{businessName}</span>
          </h2>

          {/* Map through USP content and display each item */}
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 ">
            {uspContent.map((item) => (
              <div
                key={item.number}
                className="flex flex-col items-start justify-start space-y-6"
              >
                {/* USP Number with pink circle and black text */}
                <div className="flex items-start ">
                  <div className="flex items-center justify-center bg-pink-200 text-black rounded-full h-12 w-12 ">
                    <span className="font-semibold text-xl">{item.number}</span>
                  </div>
                </div>

                {/* USP Content */}
                <div className="flex flex-col ">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                    <span className="text-orange-500"> {niche}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End USP Section */}

      {/* gallery Start*/}
      <section id="photo" className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-24 ">
          <h2 className="text-3xl md:text-4xl font-extrabold text-left text-gray-800 mb-10">
            Some Photos Of{" "}
            <span className="text-orange-500">{businessName}</span>!!
          </h2>

          {/* Photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {photoContent.map((item) => (
              <div key={item.id} className="relative">
                {/* Image */}
                <img
                  src={images[2] || "https://via.placeholder.com/1200x800"}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                {/* Overlay - always visible */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-end justify-start p-4 rounded-lg">
                  <div className="text-left text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* gallery End*/}

      {/* onze starts */}
      <section
        id="job"
        className="flex flex-col items-center justify-center py-16 bg-gray-200"
      >
        <h1 className="text-4xl font-bold text-black">
          Werken bij <span className="text-orange-500">{businessName}</span>?
        </h1>
        <p className="mt-5 text-lg  text-gray-700">
          Op zoek naar een boeiende job? Ontdek snel onze vacatures!
        </p>
        <button className="mt-8 px-6 py-2 text-orange-500 text-2xl font-bold">
          ONZE VACATURES &gt;
        </button>
      </section>

      {/* faqContents: start */}
      <section
        id="faq"
        className="flex flex-col items-center justify-center bg-white py-10 px-4"
      >
        <h1 className="text-2xl font-bold text-black text-center">
          Veelgestelde Vragen Over{" "}
          <span className="text-orange-500">{businessName}</span>!!
        </h1>
        <div className="flex flex-col gap-5 mt-6 w-full max-w-2xl">
          {/* Map through FAQ content */}
          {faqContent.map((item) => (
            <div key={item.id} className="border-2 rounded-2xl p-4">
              <button className="text-lg text-gray-800 flex justify-between items-center w-full">
                {/* Replace { NICHE } dynamically */}
                {item.question}
                <span className="bg-gray-800 border rounded-full p-1 text-white flex items-center justify-center w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* faqContents: ends */}

      {/* Contact start */}

      <section
        id="contact"
        className="flex flex-col items-center justify-center min-h-screen bg-white py-10 px-4"
      >
        <h1 className="text-2xl font-bold text-black text-center">
          Neem Contact Op Met{" "}
          <span className="text-orange-500">{businessName}</span>!!
        </h1>
        <form className="mt-6 w-full max-w-2xl">
          {/* Name and Email fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-gray-700">Your Name*</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name*"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Email*</label>
              <input
                type="email"
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email*"
              />
            </div>
          </div>

          {/* Phone and Subject fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="text-gray-700">Your Phone</label>
              <input
                type="tel"
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Phone"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Subject</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Subject"
              />
            </div>
          </div>

          {/* Message field */}
          <div className="flex flex-col mb-4">
            <label className="text-gray-700">Message</label>
            <textarea
              className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              rows="5"
              placeholder="Write your message for {BUSINESS NAME}"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 text-white bg-orange-500 rounded-3xl hover:bg-orange-600">
              Submit
            </button>
          </div>
        </form>
      </section>
      {/* Contact end */}

      <footer id="footer" className="bg-black/80 text-white py-10 ">
        <div className="container mx-auto px-24 ">
          {/* Four Columns Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
            {/* Logo and About Section */}
            <div className="flex flex-col text-left">
              {/* <img src={logo2} className="h-16 mb-4" /> */}
              <h2 className="text-4xl font-extrabold mb-4 ">{businessName}</h2>
              <h2 className="text-lg font-bold text-orange-500 ">
                TEXT ABOUT {businessName}
              </h2>
            </div>

            {/* Quick Links 1 */}
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-300 hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-300 hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold">Contact Information</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-300 hover:text-white">
                  {emailBusiness}
                </li>
                <li className="text-gray-300 hover:text-white">
                  {businessName}
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-white pt-4">
            <p className="text-center sm:text-left">
              &copy; 2024 - All rights reserved - Leeuwstudio.nl
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#twitter" className="relative group">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-red-500 text-sm"
                  />
                </div>
              </a>
              <a href="#instagram" className="relative group">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-red-500 text-sm"
                  />
                </div>
              </a>
              <a href="#facebook" className="relative group">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-red-500 text-sm"
                  />
                </div>
              </a>
              <a href="#youtube" className="relative group">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center transition-transform transform group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-red-500 text-sm"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Template;
