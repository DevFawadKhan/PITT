import React from "react";

export default function Hero() {
  return (
    <>
      <section className="relative bg-[url('/heroBg.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/30"></div>{" "}
        {/* Dark overlay */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:justify-center flex justify-center items-center">
          <div className="max-w-xl text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
              Embrace the Adventure of Exploring the Vast
              <strong className="block text-white font-extrabold">
                Universe
              </strong>
            </h1>

            <p className="mt-4 text-white sm:text-lg">
              Unlock the world with us and explore hidden gems, iconic
              landmarks, and unforgettable adventures. Your journey starts here.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Book A Trip
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
