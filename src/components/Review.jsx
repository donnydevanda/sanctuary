import React from "react";

export default function Review() {
  return (
    <>
      <div className="container bg-green-dark h-0 mx-auto md:mt-20 md:h-96" />
      <div className="container flex flex-col justify-center items-center mx-auto -mt-8 md:flex-row md:-mt-96">
        <div className="basis-1/2 md:-mt-24">
          <img
            src="./img-review.jpg"
            alt=""
            className="drop-shadow-2xl mx-auto"
          />
          <img
            src="./circle-review.svg"
            alt=""
            className="invisible h-0 -ml-36 w-3/4 md:visible md:h-full md:-mt-96"
          />
        </div>
        <div className="basis-1/2 bg-green-dark border-l-8 border-gold md:-mt-80">
          <div className="ml-8 my-12">
            <h2 className="text-5xl text-white font-serif font-semibold">
              What they think?
            </h2>
            <p className="text-white w-3/4 mt-8 font-light leading-loose">
              I really love the place, the vibes, and everything here. There is
              no things that can boost my productivity instead of a cup from
              <span className="text-gold font-normal"> Sanctuary</span> coffee.
            </p>
            <p className="text-white mt-4 font-light leading-loose">
              Roman Picasso
            </p>
            <p className="text-white opacity-70 font-light">Coffee Lovers</p>
          </div>
        </div>
      </div>
    </>
  );
}
