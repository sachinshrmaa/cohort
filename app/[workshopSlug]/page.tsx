import workshops from "@/data/workshops";
import Link from "next/link";
import React from "react";

export default function WorkshopPage({ params }) {
  const { workshopSlug } = params;
  const workshop = workshops.filter((cohort) => cohort.slug === workshopSlug);

  return (
    <div className="container py-8">
      <Link href="/" className="text-blue-900">
        {" "}
        &larr; back to home
      </Link>
      {workshop.map((cohort) => (
        <div className="my-8" key={cohort.id}>
          <h1 className="text-4xl font-bold ">{cohort.name}</h1>
          <p className="my-6 text-lg">{cohort.description}</p>
        </div>
      ))}
    </div>
  );
}
