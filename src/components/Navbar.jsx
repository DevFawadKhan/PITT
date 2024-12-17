import React from "react";

function Navbar() {
  return (
    <>
      <header className="p-4 bg-white border-b-2">
  <div className="container flex justify-between items-center h-12 mx-auto">
    {/* Logo (aligned to the left) */}
    <a
      rel="noopener noreferrer"
      href="#"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      <img
        src="/logo.png" // Replace with your logo image path
        alt="Logo"
        className="h-10"
      />
    </a>

    {/* Navigation Links (centered) */}
    <ul className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-1">
      <li className="flex">
        <a
          href="#"
          className="flex items-center px-4 text-gray-800 hover:text-violet-400"
        >
          Home
        </a>
      </li>
      <li className="flex">
        <a
          href="#"
          className="flex items-center px-4 text-gray-800 hover:text-violet-400"
        >
          Destinations
        </a>
      </li>
      <li className="flex">
        <a
          href="#"
          className="flex items-center px-4 text-gray-800 hover:text-violet-400"
        >
          Packages
        </a>
      </li>
      <li className="flex">
        <a
          href="#"
          className="flex items-center px-4 text-gray-800 hover:text-violet-400"
        >
          Why Us
        </a>
      </li>
      <li className="flex">
        <a
          href="#"
          className="flex items-center px-4 text-gray-800 hover:text-violet-400"
        >
          Contact
        </a>
      </li>
    </ul>

    {/* Mobile Menu Button (aligned to the right) */}
    <button className="p-4 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  </div>
</header>

    </>
  );
}
export default Navbar;
