import React from "react";

export default function Review() {
  return (
    <>
      <div className="container bg-green-dark h-0 mx-auto lg:mt-20 lg:h-96" />
      <div className="bg-gold container flex flex-col justify-center items-center mx-auto -mt-12 md:flex-row md:mt-80 lg:-mt-96 lg:bg-transparent">
        <div className="basis-1/2 h-full lg:-mt-24">
          <img
            src="./img-review.jpg"
            alt=""
            className="object-cover h-full drop-shadow-2xl mx-auto lg:w-3/4"
          />
          <img
            src="./circle-review.svg"
            alt=""
            className="invisible h-0 -ml-36 w-3/4 lg:visible lg:h-full lg:-mt-96"
          />
        </div>
        <div className="basis-1/2 bg-green-dark lg:border-l-8 lg:border-gold lg:-mt-72">
          <div className="py-10 mx-auto lg:py-0 lg:my-12 lg:ml-8">
            <h2 className="text-5xl px-5 text-white font-serif font-semibold">
              What they think?
            </h2>
            <p className="text-white px-5 w-3/4 mt-8 font-light leading-loose">
              I really love the place, the vibes, and everything here. There is
              no things that can boost my productivity instead of a cup from
              <span className="text-gold font-normal"> Sanctuary</span> coffee.
            </p>
            <p className="text-white px-5 mt-4 font-light leading-loose">
              Roman Picasso
            </p>
            <p className="text-white px-5 opacity-70 font-light">
              Coffee Lovers
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
