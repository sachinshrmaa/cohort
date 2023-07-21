import workshops from "@/data/workshops";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotFound from "../not-found";

export default function WorkshopPage({ params }) {
  const { workshopSlug } = params;
  const workshop = workshops.filter((cohort) => cohort.slug === workshopSlug);

  // If no matching workshop found, return 404 page not found
  if (workshop.length === 0) {
    return <NotFound />;
  }

  return (
    <main className="py-12">
      <div className="container">
        <Link href="/" className="text-blue-900">
          &larr; back to home
        </Link>
        {workshop.map((cohort) => (
          <div className="grid grid-cols-1 md:grid-cols-6 mt-4 md:mt-6 md:gap-4">
            <div className="md:hidden md:col-span-3 mt-4 mb-8">
              <Image
                src={cohort.thumbnail}
                alt={cohort.name}
                width={200}
                height={350}
                className="rounded-md w-full mb-10"
              />

              <Link className="text-center" href="/">
                <p className="bg-brand-accent py-2 rounded-md hover:bg-yellow-600 font-semibold w-full">
                  Enroll Now &nbsp; ₹{cohort.price}.0
                </p>
              </Link>
            </div>
            <div className="md:col-span-4">
              <h1 className="text-2xl font-semibold mb-6 leading-8 md:leading-[50px] md:text-4xl">
                {cohort.name}
              </h1>
              <p className="text-md md:text-lg">{cohort.description}</p>
            </div>
            <div className="hidden md:block md:col-span-2">
              <Image
                src={cohort.thumbnail}
                alt={cohort.name}
                width={200}
                height={350}
                className="rounded-md w-full mb-6"
              />

              <Link className="text-center" href="/">
                <p className="bg-brand-accent py-2 rounded-md hover:bg-yellow-600 font-semibold w-full">
                  Enroll Now &nbsp; ₹{cohort.price}.0
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
