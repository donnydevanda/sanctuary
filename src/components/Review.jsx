import React from "react";

export default function Review() {
  return (
    <>
      <div className="container bg-green-dark h-0 mx-auto 2xl:mt-20 2xl:h-96" />
      <div className="bg-gold container flex flex-col justify-center items-center mx-auto -mt-12 md:flex-row md:mt-80 2xl:-mt-96 2xl:bg-transparent">
        <div className="basis-1/2 h-full 2xl:-mt-24">
          <img
            src="./img-review.jpg"
            alt=""
            className="object-cover h-full drop-shadow-2xl mx-auto 2xl:w-3/4"
          />
          <img
            src="./circle-review.svg"
            alt=""
            className="invisible h-0 -ml-36 w-3/4 2xl:visible 2xl:h-full 2xl:-mt-96"
          />
        </div>
        <div className="basis-1/2 bg-green-dark 2xl:border-l-8 2xl:border-gold 2xl:-mt-72">
          <div className="py-10 mx-auto 2xl:py-0 2xl:my-12 2xl:ml-8">
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
