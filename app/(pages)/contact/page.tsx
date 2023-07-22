
import React from 'react'

export default function Contact() {
  return (
    <div className="bg-brand-secondary py-10 min-h-[70vh]">
      <div className="container md:w-[50%] mx-auto">
        <h1 className="text-4xl mb-6 font-poppins font-normal text-center md:font-medium">
          Get In Touch
        </h1>
        <p className="my-4">
          Thank you for visiting the basics page! If you have any questions or
          comments, we would love to hear from you.
        </p>

        <ul className="list-disc ms-8 my-6">
          <li>
            <b>Email:</b>{" "}
            <a
              href="mailto:mail.sachinshrmaa+cohort@gmail.com"
              className="text-brand-primary"
            >
              Write us a mail.
            </a>
          </li>
        </ul>
        <p className="my-4">
          We strive to respond to all inquiries within one business day.{" "}
        </p>
        <p>Thank you for choosing. We look forward to serving you!</p>
      </div>
    </div>
  );
}
