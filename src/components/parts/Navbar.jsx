import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center 2xl:px-20">
        <img
          src="./logo.svg"
          alt=""
          className="mx-auto py-6 2xl:mx-0 2xl:h-30"
        />
        <ul className="hidden 2xl:flex 2xl:space-x-12">
          <li>
            <a
              href="/"
              className="text-green-800 text-lg hover:underline hover:decoration-gold hover:decoration-solid hover:decoration-2 hover:underline-offset-4"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-green-800 text-lg hover:underline hover:decoration-gold hover:decoration-solid hover:decoration-2 hover:underline-offset-4"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-green-800 text-lg hover:underline hover:decoration-gold hover:decoration-solid hover:decoration-2 hover:underline-offset-4"
            >
              Promotion
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-green-800 text-lg hover:underline hover:decoration-gold hover:decoration-solid hover:decoration-2 hover:underline-offset-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
