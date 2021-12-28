import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mx-auto 2xl:flex-row 2xl:mt-16">
      <div className="basis-1/2 w-full 2xl:w-min 2xl:ml-24">
        <img
          src="./img-hero.jpg"
          alt=""
          className="object-fill w-full mx-auto 2xl:drop-shadow-2xl 2xl:w-min"
        />
      </div>
      <div className="basis-1/2 w-full">
        <div className="bg-transparent shadow-lg border-y-4 border-gold p-16 2xl:border-l-4 2xl:-mt-56 -ml-12">
          <div className="mx-auto w-full md:w-3/4">
            <div className="flex items-center ">
              <img src="./ic-location.svg" alt="" />
              <p className="text-lg text-green-800 ml-3 -mt-1">
                Jakarta, Indonesia
              </p>
            </div>
            <h1 className="text-6xl text-green-800 font-serif font-bold mt-4">
              Sit, Drink, Relax.
            </h1>
            <p className="text-lg text-green-800 mt-4">
              Fresh you up, boost your productivity, and build your mood <br />
              with a taste from Sanctuary coffee.
            </p>
            <ul className="flex items-center mt-8 space-x-6">
              <li>
                <a
                  href="/"
                  className="bg-green-900 hover:bg-green-800 shadow text-white px-10 py-3"
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-green-900 hover:text-gold underline underline-offset-4"
                >
                  Reservation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
