import React from "react";

export const metadata = {
  title: "FAQ — The Basics Class by Sachin",
  description: "the basics class by sachin sharma",
};

export default function Faq() {
  return (
    <div className="bg-brand-secondary py-10 min-h-[70vh]">
      <div className="container md:w-[50%] mx-auto">
        <h1 className="text-4xl mb-6 font-poppins font-normal text-center md:font-medium">
          Frequently Asked Questions
        </h1>
        <p className="my-4">
          Welcome to the basics class, where we're passionate about helping you
          learn and grow. Our classes are designed to provide you with practical
          skills and hands-on experience, so you can achieve your goals and
          succeed in your career.
        </p>
      </div>
    </div>
  );
}
