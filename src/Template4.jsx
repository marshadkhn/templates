import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Template4 = () => {
  return (
    <div className="bg-white text-white">
      {/* Navbar */}
      <nav className="bg-white p-6 font-poppins">
        <div className="flex justify-between items-center max-w-7xl mx-auto flex-wrap">
          {/* Nav Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCnjO77h-mMKfTcRHCMoG9KjBnMfHW9a4Fso2kL-YjO2I-jk2qcMCjef3D0wLcvcwnEA&usqp=CAU"
              alt="Company Logo"
              className="h-16" // Increased logo size
            />
          </div>

          {/* Nav Items */}
          <ul className="flex space-x-8 flex-wrap">
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
          <div className="flex space-x-4">
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
        className="relative text-left py-32 bg-gray-900 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Black Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Line (divider or stylistic element) */}
          <hr className="border-t-4 border-white w-24 mb-4 mx-auto" />

          {/* Heading (with dummy data) */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Welcome to Your Future
          </h1>

          {/* Paragraph (with dummy data) */}
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Discover endless possibilities with our platform. We provide the
            tools and solutions to help you achieve your dreams, no matter the
            challenge.
          </p>

          {/* Button */}
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Our Products   */}
      <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* First Half: Image Grid */}
        <div className="md:w-1/2 p-4 grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              key={index}
              src={`https://images.unsplash.com/photo-1511452885600-a3d2c9148a31`}
              alt={`Image ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg transition-transform transform hover:scale-105 shadow-md"
              loading="lazy"
            />
          ))}
        </div>

        {/* Second Half: Content */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <p className="text-gray-600 mb-2 font-medium">House Info</p>
          <h2 className="text-3xl font-bold mb-4 text-black">Custom Villa</h2>
          <p className="text-gray-700 mb-4">
            This is the first paragraph describing the content. It provides some
            context or details about the topic.
          </p>
          <p className="text-gray-700 mb-6 mt-4">
            This is the second paragraph, offering additional insights or
            information.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200 transform hover:scale-105">
            Click Me
          </button>
        </div>
      </div>

      {/* Service section */}
      <div className="bg-gradient-to-r from-[#f0f4f8] to-[#e6effa] flex items-center justify-center min-h-screen mt-32 py-10">
        <div className="w-full max-w-4xl p-6 text-center">
          <p className="text-gray-700 mb-4">
            Discover our wide range of services designed to cater to your needs.
            Our expert team is here to help you achieve your goals.
          </p>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Our Services
          </h2>

          {/* Box divs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-6">
            {[
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31",
                title: "Service One",
                description:
                  "This service provides innovative solutions tailored to your needs.",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
                title: "Service Two",
                description:
                  "Expert consultation to help you navigate your challenges effectively.",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                title: "Service Three",
                description:
                  "Comprehensive support to optimize your business processes.",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
                title: "Service Four",
                description:
                  "Creative strategies to enhance your brand's visibility.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border border-gray-200 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden"
              >
                <img
                  src={service.imageUrl}
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
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial section*/}
      <div className="w-full max-w-4xl mx-auto p-6  text-center mt-32 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-100 mb-6">
          We value feedback from our clients. Here are some of the kind words
          they’ve shared about our services.
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
          {[
            {
              name: "Alice Johnson",
              review:
                "This is a fantastic service! I would recommend it to everyone.",
            },
            {
              name: "Bob Smith",
              review: "Amazing experience! The team is very professional.",
            },
            {
              name: "Charlie Brown",
              review: "Outstanding support and service. Truly impressed!",
            },
            {
              name: "Diana Prince",
              review: "Exceptional quality! Will definitely return for more.",
            },
          ].map((client, index) => (
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
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Meet Our Team</h2>
        <p className="text-gray-700 mb-6">
          Our team is comprised of dedicated professionals who are passionate
          about what they do. We work together to provide the best service and
          solutions for our clients.
        </p>

        {/* Team Member Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              imgUrl:
                "https://images.unsplash.com/photo-1531314888229-c4b4682c3118?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Alex Johnson",
              designation: "Project Manager",
            },
            {
              imgUrl:
                "https://images.unsplash.com/photo-1542385262-cdf06b302c2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Jordan Lee",
              designation: "Software Engineer",
            },
            {
              imgUrl:
                "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Taylor Smith",
              designation: "UX Designer",
            },
            {
              imgUrl:
                "https://images.unsplash.com/photo-1461935793258-ac2ac2c930b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Morgan Brown",
              designation: "Content Strategist",
            },
            {
              imgUrl:
                "https://images.unsplash.com/photo-1518611540400-6b85a0704342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Jamie Fox",
              designation: "Marketing Specialist",
            },
            {
              imgUrl:
                "https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Chris Taylor",
              designation: "Data Analyst",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 p-4 rounded-lg bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.imgUrl}
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
              Company Info
            </h4>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-2">1234 Street Name, City, State, 12345</p>
            <p className="mb-2">
              Email:{" "}
              <a
                href="mailto:info@yourcompany.com"
                className="text-blue-400 hover:underline"
              >
                info@yourcompany.com
              </a>
            </p>
            <p className="mb-2">
              Phone: <span className="text-blue-400">(123) 456-7890</span>
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact", "FAQ"].map(
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
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Consulting",
                "Web Development",
                "Design",
                "SEO Services",
                "Digital Marketing",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription Column */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-500 pb-2">
              Stay Connected
            </h4>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l border border-gray-400 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button className="bg-blue-600 text-white px-4 rounded sm:rounded-r hover:bg-blue-700 transition duration-200">
                Subscribe
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
          © 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Template4;
