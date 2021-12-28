import React from "react";

export default function Image({ url, name }) {
  return (
    <div className="relative md:mx-8">
      <a href="/">
        <img
          src={url}
          alt=""
          className="drop-shadow-2xl 2xl:drop-shadow-2xl hover:shadow-2xl hover:shadow-yellow-800/40"
        />
        <div
          className="text-white font-serif opacity-0 hover:opacity-100 hover:bg-green-900/40 
        duration-300 absolute inset-0 flex justify-between items-end p-4 text-2xl xl:p-10 md:text-lg 2xl:text-2xl"
        >
          {name}
          <img src="./ic-right.svg" alt="" />
        </div>
      </a>
    </div>
  );
}
