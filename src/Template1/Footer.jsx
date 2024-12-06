import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer({ businessName, emailBusiness }) {
  return (
    <footer id="footer" className="bg-black/80 py-10 text-white">
      <div className="container mx-auto px-24">
        {/* Four Columns Layout */}
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About Section */}
          <div className="flex flex-col text-left">
            {/* <img src={logo2} className="h-16 mb-4" /> */}
            <h2 className="mb-4 text-4xl font-extrabold">{businessName}</h2>
            <h2 className="text-lg font-bold text-orange-500">
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
                <a href="#services" className="text-gray-300 hover:text-white">
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
                <a href="#services" className="text-gray-300 hover:text-white">
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
              <li className="text-gray-300 hover:text-white">{businessName}</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-white pt-4 sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; 2024 - All rights reserved - Leeuwstudio.nl
          </p>
          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <a href="#twitter" className="group relative">
              <div className="flex h-10 w-10 transform items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-sm text-red-500"
                />
              </div>
            </a>
            <a href="#instagram" className="group relative">
              <div className="flex h-10 w-10 transform items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-sm text-red-500"
                />
              </div>
            </a>
            <a href="#facebook" className="group relative">
              <div className="flex h-10 w-10 transform items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sm text-red-500"
                />
              </div>
            </a>
            <a href="#youtube" className="group relative">
              <div className="flex h-10 w-10 transform items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-sm text-red-500"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
