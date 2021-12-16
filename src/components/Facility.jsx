import React from "react";

export default function Facility() {
  return (
    <div className="mt-24 mb-48  relative">
      <div className="container flex mx-auto items-center justify-center absolute inset-0">
        <div className="basis-1/2 justify-center">
          <img src="./square-facility.svg" alt="" className="ml-40" />
          <div className="w-1/2 mx-auto absolute left-0 top-0 ml-40 px-8 mt-32">
            <h2 className="text-5xl text-white font-bold font-serif">
              Coffee Party?
            </h2>
            <p className="text-white mt-4 mb-2 leading-loose font-light">
              The <span className="text-gold font-normal">Sanctuary</span> are
              built to provides you a place that can used for many things. Want
              a coffee party? a meeting? a family gathering? or even a small
              wedding party? We Can!
            </p>
            <ul className="flex space-x-10">
              <li>
                <p className="text-white font-serif text-4xl">100+</p>
                <p className="text-white text-lg font-light">Peoples</p>
              </li>
              <li>
                <p className="text-white font-serif text-4xl">60+</p>
                <p className="text-white text-lg font-light">Tables</p>
              </li>
              <li>
                <p className="text-white font-serif text-4xl">3+</p>
                <p className="text-white text-lg font-light">Open Spaces</p>
              </li>
            </ul>
            <p className="text-gold underline underline-offset-4 mt-4">
              <a href="/">Reservation</a>
            </p>
          </div>
        </div>
        <div className="basis-1/2 -mt-64">
          <img
            src="./img-facility.jpg"
            alt=""
            className="mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="bg-green-dark h-80"></div>
      <div className="bg-green-dark h-48"></div>
    </div>
  );
}
