import React from "react";

export default function Footer() {
  return (
    <div className="h-28 bg-green-dark flex justify-between items-center px-48">
      <div className="flex items-center">
        <p className="text-gold text-xl mr-3">Jakarta</p>
        <img src="./ic-love.svg" alt="" />
      </div>
      <p className="text-4xl text-gold font-serif font-semibold">sanctuary</p>
      <p className="text-gold text-xl">©2021</p>
    </div>
  );
}
