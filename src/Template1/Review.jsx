import React from "react";
import google from "../assets/Images/google.png";
import profilePic from "../assets/Images/profilePic.png";

export default function Review({ businessName, reviews }) {
  return (
    <section id="review" className="mb-36 bg-white">
      <div className="container mx-auto px-24">
        <div className="flex items-center justify-between px-6">
          <h2 className="text-main-blue mb-8 text-center text-3xl font-bold">
            Reviews : <span className="text-orange-500"> {businessName}</span>
          </h2>
          <button className="rounded-full bg-neutral-400 px-6 py-4 text-white hover:bg-neutral-500">
            Bekijk alle reviews
          </button>
        </div>
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`w-full p-6 md:w-1/3 ${
                index !== reviews.length - 1 ? "border-r-2" : ""
              }`}
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 flex items-center">
                  <img
                    src={profilePic}
                    alt="profilePic"
                    className="mr-4 h-12 w-12 rounded-full"
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
                <div className="border-5 mt-4 flex justify-center rounded border border-gray-300 p-2">
                  <div className="flex items-center">
                    <img src={google} alt="Google" className="mr-2 h-4 w-4" />
                    <span className="text-xs font-medium text-slate-800">
                      Google Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
