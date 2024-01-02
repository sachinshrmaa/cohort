import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border">
      <div className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        <div className="grid grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <h2 className="font-albert logo mb-1">the basics class</h2>
            <p className="text-slate-600">Made with ❤ by Sachin</p>
          </div>
          <div className="mt-6 col-span-3 md:mt-0 md:col-span-1 justify-self-start md:justify-self-end">
            <Link href="/terms" className="text-blue-900 text-sm">
              Terms
            </Link>
            <span className="mx-3">•</span>
            <Link href="/privacy" className="text-blue-900 text-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border">
        <small>&copy;2023 - present The Basics Class </small>
      </div>
    </footer>
  );
}
