import React from "react";

export default function USP({ uspContent, businessName, niche }) {
  return (
    <section id="usps" className="mb-36 bg-white px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="mb-16 text-left text-3xl font-extrabold text-gray-800 md:text-4xl">
          USP’s <span className="text-orange-500">{businessName}</span>
        </h2>

        {/* Map through USP content and display each item */}
        <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0">
          {uspContent.map((item) => (
            <div
              key={item.number}
              className="flex flex-col items-start justify-start space-y-6"
            >
              {/* USP Number with pink circle and black text */}
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-black">
                  <span className="text-xl font-semibold">{item.number}</span>
                </div>
              </div>

              {/* USP Content */}
              <div className="flex flex-col">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {item.title}
                  <span className="text-orange-500"> {niche}</span>
                </h3>
                <p className="mb-4 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
