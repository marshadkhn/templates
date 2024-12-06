import React from "react";

export default function Gallery({ photoContent, businessName, images }) {
  return (
    <section id="photo" className="mb-36 bg-white px-6 md:px-24">
      <div className="container mx-auto">
        <h2 className="mb-10 text-left text-3xl font-extrabold text-gray-800 md:text-4xl">
          Some Photos Of <span className="text-orange-500">{businessName}</span>
          !!
        </h2>

        {/* Photo grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {photoContent.map((item) => (
            <div key={item.id} className="aspect-w-1 aspect-h-1 relative">
              <img
                src={images[2] || "https://via.placeholder.com/1200x800"}
                alt={item.title}
                className="h-full w-full object-cover shadow-lg"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-black bg-opacity-70 p-8">
                <div className="text-left text-white">
                  <h3 className="mb-2 text-2xl">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
