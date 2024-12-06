import React from "react";

export default function WhyChooseUs({ businessName, images, niche }) {
  return (
    <section id="intro" className="bg-light-blue mb-20 mt-24">
      <div className="container mx-auto flex flex-col items-center space-y-8 md:flex-row md:space-x-16 md:space-y-0 md:px-24">
        {/* Left section */}
        <div
          className="h-[437px] w-full rounded-3xl bg-blue-100 p-12 md:w-1/2"
          style={{
            backgroundImage: `url(${
              images[1] || "https://via.placeholder.com/1200x800"
            })`, // Temporary image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Right section */}
        <div className="w-full text-left md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold">
            Een Kijke Achter De Schermen Bij:{" "}
            <span className="text-orange-500">{businessName}</span>
          </h2>
          <p className="mb-4 leading-8 text-gray-700">
            Would Definitely Recommend Ryles As A Driving School: Everything Is
            Well Organised And Clearly Communicated. They Let You Drive With
            Other Instructors <span className="text-orange-500"> {niche}</span>{" "}
            To Practice Exams, Which {businessName} Is Very Useful To Prepare
            For The Real Exam.
          </p>
          <p className="mb-4 leading-8 text-gray-700">
            Would Definitely Recommend Ryles As A Driving{" "}
            <span className="text-orange-500"> {niche}</span> School: Everything
            Is Well Organised And Clearly Communicated. They Let You Drive With
            Other {businessName} Instructors (Besides Your Regular One) To
            Practice Exams, Which Is Very Useful To Prepare For The Real Exam.
          </p>
          <p className="leading-8 text-gray-700">
            Would Definitely Recommend Ryles As A{" "}
            <span className="text-orange-500"> {niche}</span> Driving School:
            Everything Is Well Organised And Clearly Communicated. They Let You
            Drive With Other Instructors (Besides Your Regular One) To Practice
            Exams, Which Is Very Useful To Prepare For The Real Exam.
          </p>
        </div>
      </div>
    </section>
  );
}
