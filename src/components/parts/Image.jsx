import React from "react";

export default function Image({ url, name }) {
  return (
    <div className="relative md:mx-8">
      <a href="/">
        <img
          src={url}
          alt=""
          className="drop-shadow-2xl lg:drop-shadow-2xl hover:shadow-2xl hover:shadow-yellow-800/40"
        />
        <div
          class="text-white font-serif opacity-0 hover:opacity-100 hover:bg-green-900/40 
        duration-300 absolute inset-0 flex justify-between items-end p-4 text-2xl xl:p-10 md:text-lg lg:text-2xl"
        >
          {name}
          <a href="/">
            <img src="./ic-right.svg" alt="" />
          </a>
        </div>
      </a>
    </div>
  );
}
