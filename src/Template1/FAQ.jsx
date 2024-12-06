import React from "react";

export default function FAQ({ businessName, faqContent }) {
  return (
    <section
      id="faq"
      className="mb-20 flex flex-col items-center justify-center bg-white px-4"
    >
      <h1 className="mb-6 text-4xl font-semibold text-slate-800">
        Veelgestelde Vragen Over{" "}
        <span className="text-orange-500">{businessName}</span>!!
      </h1>
      <div className="mt-6 flex w-full max-w-2xl flex-col gap-5">
        {/* Map through FAQ content */}
        {faqContent.map((item) => (
          <div key={item.id} className="rounded-2xl border-2 p-6">
            <button className="flex w-full items-center justify-between text-lg text-gray-800">
              {/* Replace { NICHE } dynamically */}
              <div className="mr-2 text-left">{item.question}</div>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border bg-gray-800 p-1 text-white">
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
  );
}
