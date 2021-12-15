import React from "react";

export default function Hero() {
  return (
    <div className="flex items-center mx-auto mt-16 h-full">
      <div className="basis-1/2 ml-24">
        <img src="./img-hero.jpg" alt="" className="mx-auto" />
      </div>
      <div className="basis-1/2">
        <div className="bg-transparent border-l-4 border-t-4 border-b-4 border-gold p-16 -mt-56 -ml-12">
          <p className="text-lg text-green-800">Jakarta, Indonesia</p>
          <h1 className="text-6xl text-green-800 font-serif font-bold mt-4">
            Sit, Drink, Relax.
          </h1>
          <p className="text-lg text-green-800 mt-4">
            Fresh you up, boost your productivity, and build your mood <br />
            with a taste from Sanctuary coffee.
          </p>
          <ul className="flex items-center mt-8 space-x-6">
            <li>
              <a href="/" className="bg-green-900 text-white px-10 py-3">
                Order
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-green-800 underline underline-offset-4"
              >
                Reservation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
