import React from "react";

export default function Image({ url, name }) {
  return (
    <div className="relative mx-8">
      <a href="/">
        <img
          src={url}
          alt=""
          className=" drop-shadow-2xl hover:shadow-2xl hover:shadow-yellow-800/40"
        />
        <div
          class="text-white text-2xl font-serif opacity-0 hover:opacity-100 hover:bg-green-900/40 
        duration-300 absolute inset-0 flex justify-between items-end p-10"
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
