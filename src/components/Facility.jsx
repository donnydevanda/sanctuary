import React from "react";

export default function Facility() {
  return (
    <div className="mt-32 mb-48 relative">
      <div className="container flex mx-auto items-center justify-center absolute inset-0">
        <div className="basis-1/2">
          <img src="./square-facility.svg" alt="" className="ml-40" />
          <h2 className="text-5xl text-white font-bold font-serif w-1/2 mx-auto -mt-64">
            Coffee Party?
          </h2>
          <p className="text-white mt-4 mb-2 w-1/2 mx-auto leading-loose font-light">
            The <span className="text-gold font-normal">Sanctuary</span> are
            built to provides you a place that can used for many things. Want a
            coffee party? a meeting? a family gathering? or even a small wedding
            party? We Can!
          </p>
          <p className="text-gold underline underline-offset-4 w-1/2 mx-auto">
            <a href="/">Reservation</a>
          </p>
        </div>
        <div className="basis-1/2 -mt-80">
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
