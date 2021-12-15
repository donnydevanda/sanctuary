import React from "react";

export default function Review() {
  return (
    <div className="my-20">
      <div className="z-0 container bg-green-dark h-96 mx-auto"></div>
      <div className="container flex justify-center items-center mx-auto -mt-96">
        <div className="basis-1/2 -mt-24">
          <img
            src="./img-review.jpg"
            alt=""
            className="z-50 drop-shadow-2xl mx-auto"
          />
          <img
            src="./circle-review.svg"
            alt=""
            className="-mt-96 -ml-36 w-3/4"
          />
        </div>
        <div className="basis-1/2 -mt-80 border-l-8 border-gold">
          <div className="ml-8">
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
    </div>
  );
}
