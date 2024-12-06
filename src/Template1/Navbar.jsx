import { FaCaretDown } from "react-icons/fa";

export default function Navbar({ businessName }) {
  return (
    <>
      <div className="bg-black py-2 text-center text-white">
        Here we can put any offer going on or any slogan of the company
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-center px-7 py-5">
          <div className="flex items-center justify-center gap-11">
            <div className="mr-20 flex items-center justify-center">
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
              <button className="rounded-xl bg-orange-500 px-4 py-4 text-white hover:bg-orange-600">
                Get in Touch
              </button>
              <div className="relative flex items-center">
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  NL
                  <FaCaretDown className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
