import React from "react";

export default function Info() {
  return (
    <>
      <div className="bg-green-dark h-96 w-full md:-mt-40" />
      <div className="bg-green-dark h-96 w-full md:-mt-40" />
      <div className="container mx-auto flex flex-col md:flex-row items-center -mt-96">
        <div className="basis-1/2 order-2 mt-12 md:order-1 md:-mt-40">
          <h1 className="text-white text-5xl leading-normal font-serif font-bold mx-auto w-4/5 md:w-1/2">
            Quality from seed to cup.
          </h1>
          <p className="text-white mx-auto mt-4 leading-relaxed w-4/5 md:w-1/2">
            We collect the best coffee beans from 13 countries, then we do some
            magic for your cup.
          </p>
          <p className="text-gold underline underline-offset-4 w-4/5 mt-6 mx-auto md:w-1/2">
            <a href="/">Explore More</a>
          </p>
        </div>
        <div className="basis-1/2 order-1 -mt-80 md:order-2 md:basis-1/2 md:-mt-40">
          <img
            src="./img-info.jpg"
            alt=""
            className="w-4/5 mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
