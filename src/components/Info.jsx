import React from "react";

export default function Info() {
  return (
    <>
      <div className="bg-green-dark h-96 w-full -mt-40"></div>
      <div className="bg-green-dark h-96 w-full -mt-40"></div>
      <div className="container mx-auto flex items-center -mt-96">
        <div className="basis-1/2 -mt-40">
          <h1 className="text-white text-5xl leading-normal font-serif font-bold w-1/2 mx-auto">
            Quality from seed to cup.
          </h1>
          <p className="text-white w-1/2 mx-auto mt-4 leading-relaxed">
            We collect the best coffee beans from 13 countries, then we do some
            magic for your cup.
          </p>
          <p className="text-gold underline underline-offset-4 w-1/2 mt-6 mx-auto">
            <a href="/">Explore More</a>
          </p>
        </div>
        <div className="basis-1/2 -mt-40">
          <img
            src="./img-info.jpg"
            alt=""
            className="w-4/5 mx-auto shadow-2xl drop-shadow-xl"
          />
        </div>
      </div>
    </>
  );
}
