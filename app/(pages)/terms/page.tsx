import React from "react";


export const metadata = {
  title: "Terms and Conditions — The Basics Class by Sachin",
  description: "the basics class by sachin sharma",
};


export default function Terms() {
  return (
    <div className="bg-brand-secondary py-10 min-h-[70vh]">
      <div className="container md:w-[50%] mx-auto">
        <h1 className="text-4xl mb-6 font-poppins font-normal text-center md:font-medium">
          Terms and Conditions
        </h1>
        <p className="my-4">
          By using our website and enrolling in our online courses, you agree to
          the following terms and conditions:
        </p>

        <p className="my-4">
          
          <b>Payment: </b> All course fees must be paid in full before access to
          course materials is granted.
        </p>

        <p className="my-4">
          
          <b>Refunds: </b> No refunds will be given for any course after access
          to course materials has been granted.
        </p>

        <p className="my-4">
          
          <b>Copyright: </b> All course materials are the property of
          <b>the basics</b> and are protected by copyright law. These materials
          may not be shared or distributed without written permission.
        </p>

        <p className="my-4">
          
          <b>Responsibility: </b> It is the responsibility of the student to
          ensure that they have the necessary technology and skills to access
          and complete the course. <b>the basics</b> is not responsible for any
          technical difficulties or issues with the student&apos;s personal
          equipment or internet connection.
        </p>

        <p className="my-4">
          
          <b>Liability: </b> <b>the basics</b> will not be held liable for any
          damages or losses that may occur as a result of taking one of our
          online courses.
        </p>

        <p className="my-4">
          
          <b>Termination: </b> <b>the basics</b> reserves the right to terminate
          a student&apos;s access to a course at any time for any reason.
        </p>

        <p className="my-4">
          
          By using our website and enrolling in our online courses, you
          acknowledge that you have read and understand these terms and
          conditions and agree to be bound by them.
        </p>
      </div>
    </div>
  );
}
