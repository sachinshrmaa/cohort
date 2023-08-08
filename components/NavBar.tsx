import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full border">
      <div className="container h-16 flex justify-between items-center text-dark">
        <Link
          href="/"
          className="font-albert text-2xl font-bold logo hover:text-green-600"
        >
          the basics
        </Link>
        <div>
          <Link className="mx-2 hover:text-green-600" href="/about">
            About
          </Link>
          <Link className="mx-2 hover:text-green-600" href="/contact">
            Contact
          </Link>
          <Link
            className="mx-2 btn py-2"
            href="/mastering-modern-fullstack-web-development"
          >
            Enroll
          </Link>
        </div>
      </div>
    </nav>
  );
}
