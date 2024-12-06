import React from "react";

export default function Working({ businessName }) {
  return (
    <section
      id="job"
      className="mb-36 flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl text-black">
        Werken bij <span className="text-orange-500">{businessName}</span>?
      </h1>
      <p className="mt-5 w-1/3 text-center text-xl text-gray-700">
        Op zoek naar een boeiende job? Ontdek snel onze vacatures!
      </p>
      <button className="mt-8 px-6 py-2 text-2xl font-bold text-orange-500">
        ONZE VACATURES &gt;
      </button>
    </section>
  );
}
