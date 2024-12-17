import React from "react";

export default function NewsLetter() {
  return (
    <>
      <div
        className="relative h-[555px] bg-cover bg-center"
        style={{ backgroundImage: "url('/NewsletterBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
          <p className="text-lg mb-8">
            Explore highlights, trends, and special announcements you don't want
            to miss.
          </p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-lg focus:outline-none mr-2 mb-2 sm:mb-0 w-full sm:w-[300px] h-[54px] text-black"
            />
            <button className="bg-red-600 text-white p-3 rounded-lg w-full sm:w-[200px] h-[54px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
