import React from "react";

export default function Getintouch() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-[90%] max-w-md p-8 rounded-lg shadow-md border-t-4 border-t-red-600">
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
          Get in Touch with Us
        </h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          We're here to help! Have questions or need assistance?
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
      
    </>
  );
}
