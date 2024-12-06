import React from "react";

export default function Hero({ niche, images }) {
  return (
    <section
      id="hero"
      className="hero-section relative flex h-screen items-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${
          images[0] || "https://via.placeholder.com/1200x800"
        })`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container relative z-10 mx-auto px-24">
        <div className="max-w-lg text-left">
          <h1 className="mb-4 text-4xl font-bold">
            Innovative Solutions for Premium Heat Exchange Systems
          </h1>
          <p className="mb-8">
            Delivering custom-engineered heat exchangers and HVAC solutions for
            efficient energy management. Whether for industrial or commercial
            applications, Interheat's products are designed to meet specific
            needs with precision, reliability, and sustainability in mind.
          </p>
          <button className="rounded-xl bg-orange-500 px-6 py-3 text-white hover:bg-orange-600">
            You're partner in {niche} , Get in touch!
          </button>
        </div>
      </div>
    </section>
  );
}
