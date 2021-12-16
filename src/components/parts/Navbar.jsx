import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container flex justify-between items-center md:px-40">
        <img src="./logo.svg" alt="" className="mx-auto py-6 md:h-30" />
        <ul className="hidden md:flex md:space-x-12">
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
