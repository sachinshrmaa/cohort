import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="container h-16 flex justify-between items-center">
        <Link
          href="/"
          className="font-sans text-2xl font-bold hover:text-blue-600"
        >
          the basics
        </Link>
        <div>
          <Link className="mx-2 hover:text-blue-600" href="/">
            About
          </Link>
          <Link className="mx-2 hover:text-blue-600" href="/">
            Contact
          </Link>
          <Link
            className="mx-2 bg-brand-accent px-10 py-2 rounded-md hover:bg-yellow-600 text-black"
            href="/"
          >
            Enroll
          </Link>
        </div>
      </div>
    </nav>
  );
}
