import bootcamps from "@/data/bootcamp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotFound from "@/app/not-found";
import { Metadata } from "next";
import Accordion from "@/components/Accordion";

type Props = {
  params: { bootcampSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { bootcampSlug } = params;

  // fetch data
  const bootcamp = bootcamps.filter((cohort) => cohort.slug === bootcampSlug);

  return {
    title: `${bootcamp.map((cohort) => cohort.name)}`,
    description: `${bootcamp.map((cohort) => cohort.description)}`,
  };
}

export default function BootcampPage({ params }) {
  // read route params
  const { bootcampSlug } = params;

  // fetch data
  const bootcamp = bootcamps.filter((cohort) => cohort.slug === bootcampSlug);

  // If no matching workshop found, return 404 page not found
  if (bootcamp.length === 0) {
    return <NotFound />;
  }

  return (
    <main className="py-12">
      <div className="container">
        <Link href="/" className="text-blue-900">
          &larr; back to home
        </Link>
        {bootcamp.map((cohort) => (
          <div
            key={cohort.id}
            className="grid grid-cols-1 md:grid-cols-6 mt-4 md:mt-6 md:gap-4"
          >
            <div className="md:hidden md:col-span-3 mt-4 mb-8">
              <Image
                src={cohort.thumbnail}
                alt={cohort.name}
                width={1000}
                height={350}
                className="rounded-md w-full mb-10"
                priority
              />

              {cohort.status === "active" ? (
                <Link className="text-center" href="/">
                  <p className="btn py-2 = w-full">
                    Enroll Now &nbsp; ₹{cohort.price}.0
                  </p>
                </Link>
              ) : (
                <Link className="text-center" href="/">
                  <p className="btn py-2 = w-full">Join Waitlist →</p>
                </Link>
              )}
            </div>
            <div className="md:col-span-4 md:w-[92%]">
              <h1 className="text-2xl font-semibold font-poppins mb-6 leading-8 md:leading-[50px] md:text-4xl">
                {cohort.name}
              </h1>
              <p className="text-md mb-4 md:text-md">{cohort.description}</p>

              <p className="text-md mb-4 md:text-md">{cohort.content.body}</p>

              <div>
                <h2 className="text-xl my-6 font-semibold">Content Covered</h2>

                {Object.keys(cohort.content.modules).map((moduleKey) => (
                  <div key={moduleKey}>
                    <Accordion
                      key={moduleKey}
                      name={cohort.content.modules[moduleKey].name}
                      content={cohort.content.modules[moduleKey].content}
                    />
                  </div>
                ))}

                <div className="mt-8">
                  <small>
                    <b>Disclaimer: </b>While we strive to provide the best
                    learning experience possible, please note that the course
                    outline mentioned above is subject to minor adjustments
                    based on factors such as student progress, emerging
                    technologies, and industry trends. Our primary goal is to
                    ensure that you receive the most up-to-date and relevant
                    education in the field of web development. Any modifications
                    to the course outline will be made with the intention of
                    enhancing your learning journey. We appreciate your
                    understanding and flexibility as we work together to provide
                    you with a top-notch educational experience
                  </small>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:col-span-2">
              <Image
                src={cohort.thumbnail}
                alt={cohort.name}
                width={1000}
                height={350}
                className="rounded-md w-full mb-6"
              />

              {cohort.status === "active" ? (
                <Link className="text-center" href="/">
                  <p className="btn py-2 = w-full">
                    Enroll Now &nbsp; ₹{cohort.price}.0
                  </p>
                </Link>
              ) : (
                <Link className="text-center" href="/">
                  <p className="btn py-2 = w-full">Join Waitlist →</p>
                </Link>
              )}

              <div className="mt-8">
                <h2 className="text-xl my-6 font-semibold">Cohort Details</h2>
                <ul className="list-disc ms-6 my-4">
                  <li>
                    <b>Start Date: </b>
                    {cohort.detail.start}
                  </li>
                  <li>
                    <b>End Date: </b>
                    {cohort.detail.end}
                  </li>
                  <li>
                    <b>Cohort Duration: </b>
                    {cohort.detail.duration}
                  </li>
                  <li>
                    <b>Timing: </b>
                    {cohort.detail.timing}
                  </li>
                  <li>
                    <b>Batch Size: </b>
                    {cohort.detail.size}
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-xl my-6 font-semibold">Share this Class</h2>

                <div>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?&u=https://thebasics.sachinsblog.in/${cohort.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="bi bi-facebook text-3xl"></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://thebasics.sachinsblog.in/${cohort.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-6 text-decoration-none"
                  >
                    <i className="bi bi-linkedin text-3xl"></i>{" "}
                  </a>
                  <a
                    href={`https://twitter.com/share?text=${cohort.description} &url=https://thebasics.sachinsblog.in/${cohort.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-6  text-decoration-none"
                  >
                    <i className="bi bi-twitter text-3xl"></i>{" "}
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${cohort.description}https://thebasics.sachinsblog.in/${cohort.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-6  text-decoration-none"
                  >
                    <i className="bi bi-whatsapp text-3xl"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
