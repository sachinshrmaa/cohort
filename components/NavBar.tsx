import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full bg-slate-100">
      <div className="container h-14 flex justify-between items-center">
        <Link href="/" className="font-sans text-2xl text-blue-900 font-bold">
          the basics
        </Link>
        <div>
          <Link
            className="mx-2 hover:text-blue-900"
            href="/"
          >
            About
          </Link>
          <Link
            className="mx-2 hover:text-blue-900"
            href="/"
          >
            Contact
          </Link>
          <Link
            className="mx-2 bg-yellow-400 px-10 py-2 rounded-md hover:bg-yellow-200 "
            href="/"
          >
            Enroll
          </Link>
        </div>
      </div>
    </nav>
  );
}
