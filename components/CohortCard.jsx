import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CohortCard({
  title,
  description,
  thumbnail,
  price,
  slug,
}) {
  return (
    <div className="border rounded-md">
      <Image
        height={200}
        width={600}
        src={thumbnail}
        className="rounded-t-md"
      />
      <div className="p-3">
        <h1 className="text-3xl font-semibold mb-4 text-slate-800">{title}</h1>
        <p className="text-slate-700 mb-5">{description}</p>
        <div className="flex justify-between">
          <Link
            href={slug}
            className="bg-blue-700 text-white px-6 py-1 rounded"
          >
            Enroll
          </Link>
          <p className="font-bold">Price: {price}</p>
        </div>
      </div>
    </div>
  );
}
