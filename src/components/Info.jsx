import React from "react";

export default function Info() {
  return (
    <>
      <div className="bg-green-dark h-96 w-full 2xl:-mt-40" />
      <div className="bg-green-dark h-96 w-full visible md:-mt-48 md:invisible 2xl:visible" />
      <div className="container mx-auto flex flex-col items-center -mt-96 md:flex-row">
        <div className="basis-1/2 order-2 mt-12 md:-mt-40 2xl:order-1">
          <h1 className="text-white text-5xl leading-normal font-serif font-bold mx-auto w-4/5 2xl:w-1/2">
            Quality from seed to cup.
          </h1>
          <p className="text-white mx-auto mt-4 leading-relaxed w-4/5 2xl:w-1/2">
            We collect the best coffee beans from 13 countries, then we do some
            magic for your cup.
          </p>
          <p className="text-gold hover:text-yellow-500 underline underline-offset-4 w-4/5 mt-6 mx-auto 2xl:w-1/2">
            <a href="/">Explore More</a>
          </p>
        </div>
        <div className="basis-1/2 order-1 -mt-80 2xl:order-2 md:-mt-40">
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
