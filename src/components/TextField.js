import React from "react";

export default function TextField({ label, type }) {
  return (
    <input
      type={type}
      className="rounded-md border border-gray-300 bg-white p-3 shadow-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      placeholder={label}
    />
  );
}
