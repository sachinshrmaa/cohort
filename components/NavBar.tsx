import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full bg-brand-primary text-brand-seconday">
      <div className="container h-16 flex justify-between items-center">
        <Link
          href="/"
          className="font-sans text-2xl font-bold hover:text-blue-100"
        >
          the basics
        </Link>
        <div>
          <Link className="mx-2 hover:text-blue-100" href="/">
            About
          </Link>
          <Link className="mx-2 hover:text-blue-100" href="/">
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
