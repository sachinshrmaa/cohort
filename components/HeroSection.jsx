import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-green-200 h-[400px]">
      <div className="max-w-3xl mx-auto px-4 py-20 lg:px-8 text-center">
        <h1 className="text-6xl font-poppins font-semibold font-sans my-6">
          Learn.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-48">
            Build.{" "}
          </span>
          Repeat.
        </h1>
        <p className="mb-10">
          Our cohorts bring together students from across India to learn and
          grow. Students benefit from peer and mentor support, collaboration,
          and idea sharing.
        </p>
      </div>
    </div>
  );
}
