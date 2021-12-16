import React from "react";
import Image from "./parts/Image";

export default function Featured() {
  return (
    <div className="container mx-auto mt-12 lg:-mt-8">
      <div className="w-4/5 mx-auto lg:w-full">
        <img
          src="./square-featured.svg"
          alt=""
          className="invisible lg:visible lg:w-1/2"
        />
        <h1 className="text-5xl text-green-800 font-bold font-serif -mt-24 md:-mt-80 lg:-mt-96 lg:px-12">
          Featured Drinks
        </h1>
        <p className="text-green-800 my-4 lg:px-12 lg:mt-7">
          They always ask us about this.
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:mt-8">
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-1.jpg" name="Kopi A" />
        </div>
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-2.jpg" name="Kopi B" />
        </div>
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-3.jpg" name="Kopi C" />
        </div>
        <div className="basis-1/4 mx-auto">
          <Image url="./img-drink-4.jpg" name="Kopi D" />
        </div>
      </div>
      <div className="flex justify-end -mt-64">
        <img
          src="./circle-featured.svg"
          alt=""
          className="invisible md:visible md:w-1/2 md:px-48"
        />
      </div>
    </div>
  );
}
