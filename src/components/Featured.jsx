import React from "react";
import Image from "./parts/Image";

export default function Featured() {
  return (
    <div className="container mx-auto mt-12 md:-mt-8">
      <div className="w-3/4 mx-auto md:w-full">
        <img
          src="./square-featured.svg"
          alt=""
          className="invisible md:visible md:w-1/2"
        />
        <h1 className="text-5xl text-green-800 font-bold font-serif -mt-24 md:-mt-80 md:px-12">
          Featured Drinks
        </h1>
        <p className="text-green-800 mt-4 md:px-12 md:mt-7">
          They always ask us about this.
        </p>
      </div>
      <div className="flex flex-col mt-4 md:flex-row md:mt-8">
        <div className="basis-1/4 mt-4 md:mt-0">
          <Image url="./img-drink-1.jpg" name="Kopi A" />
        </div>
        <div className="basis-1/4 mt-4 md:mt-0">
          <Image url="./img-drink-2.jpg" name="Kopi B" />
        </div>
        <div className="basis-1/4 mt-4 md:mt-0">
          <Image url="./img-drink-3.jpg" name="Kopi C" />
        </div>
        <div className="basis-1/4 mt-4 md:mt-0">
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
