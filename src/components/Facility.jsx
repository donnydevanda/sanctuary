import React from "react";

export default function Facility() {
  return (
    <div className="my-20 relative md:-mt-20">
      <div className="container flex flex-col mx-auto items-center justify-center md:absolute md:inset-0 md:flex-row">
        <div className="basis-1/2 justify-center order-2 md:order-1">
          <img
            src="./square-facility.svg"
            alt=""
            className="invisible 2xl:visible 2xl:ml-40"
          />
          <div className="w-4/5 mx-auto -mt-28 2xl:w-1/2 2xl:absolute 2xl:left-0 2xl:top-0 2xl:ml-40 md:-mt-48 2xl:px-8 2xl:mt-32">
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
            <p className="text-gold hover:text-yellow-500 underline underline-offset-4 md:mt-4">
              <a href="/">Reservation</a>
            </p>
          </div>
        </div>
        <div className="basis-1/2 order-1 md:order-2 -mt-14 md:-mt-0 2xl:-mt-80">
          <img
            src="./img-facility.jpg"
            alt=""
            className="mx-auto drop-shadow-2xl w-3/4 md:w-2/3"
          />
        </div>
      </div>
      <div className="bg-green-dark h-64 -mt-96 md:mt-40 md:h-80" />
      <div className="bg-green-dark h-48" />
    </div>
  );
}
