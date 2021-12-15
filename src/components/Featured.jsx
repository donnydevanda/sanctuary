import React from "react";
import Image from "./parts/Image";

export default function Featured() {
  return (
    <div className="container mx-auto -mt-8">
      <img src="./square-featured.svg" alt="" className="w-1/2" />
      <h1 className="text-5xl text-green-800 font-bold font-serif px-12 -mt-80">
        Featured Drinks
      </h1>
      <p className="text-green-800 px-12 mt-7">
        They always ask us about this.
      </p>
      <div className="flex mt-8 z-10">
        <div className="basis-1/4">
          <Image url="./img-drink-1.jpg" name="Kopi" />
        </div>
        <div className="basis-1/4">
          <Image url="./img-drink-2.jpg" name="Kopi" />
        </div>
        <div className="basis-1/4">
          <Image url="./img-drink-3.jpg" name="Kopi" />
        </div>
        <div className="basis-1/4">
          <Image url="./img-drink-4.jpg" name="Kopi" />
        </div>
      </div>
      <div className="flex justify-end -mt-48 mr-48 z-0">
        <img src="./circle-featured.svg" alt="" />
      </div>
    </div>
  );
}
