import React from "react";
import TextField from "../components/TextField";

export default function Contact({ businessName }) {
  const fields = [
    { label: "Your Name*", type: "text" },
    { label: "Email*", type: "email" },
    { label: "Your Phone", type: "tel" },
    { label: "Subject", type: "text" },
  ];

  return (
    <section
      id="contact"
      className="mb-36 flex flex-col items-center bg-white px-4"
    >
      <h1 className="mb-6 text-4xl font-semibold text-slate-800">
        Neem Contact Op Met{" "}
        <span className="text-orange-500">{businessName}</span>!!
      </h1>
      <form className="mt-6 w-full max-w-2xl">
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <TextField label={field.label} type={field.type} />
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-col">
          <textarea
            className="w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="5"
            placeholder={`Write your message for ${businessName}`}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="rounded-3xl bg-orange-500 px-6 py-2 text-white hover:bg-orange-600">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
