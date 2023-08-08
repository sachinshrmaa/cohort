import workshops from "@/data/workshops";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotFound from "@/app/not-found";
import { Metadata } from "next";
import WaitlistModal from "@/components/WaitlistModal";

type Props = {
  params: { workshopSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { workshopSlug } = params;

  // fetch data
  const workshop = workshops.filter((cohort) => cohort.slug === workshopSlug);

  return {
    title: `${workshop.map((cohort) => cohort.name)}`,
    description: `${workshop.map((cohort) => cohort.description)}`,
  };
}

export default function WorkshopPage({ params }) {
  // read route params
  const { workshopSlug } = params;

  // fetch data
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

              <Link className="text-center" href="/">
                <p className="btn py-2 w-full">
                  Enroll Now &nbsp; ₹{cohort.price}.0
                </p>
              </Link>
            </div>
            <div className="md:col-span-4 md:w-[92%]">
              <h1 className="text-2xl font-semibold font-poppins mb-6 leading-8 md:leading-[50px] md:text-4xl">
                {cohort.name}
              </h1>
              <p className="text-md md:text-lg">{cohort.description}</p>
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
                <WaitlistModal/>
              )}

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
