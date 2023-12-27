"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Result, Skeleton } from "antd";
import Link from "next/link";
import Image from "next/image";

export default function DetailedCohort({ params }) {
  const [loading, setLoading] = useState(true);
  const [cohort, setCohort] = useState({});
  const [isError, setIsError] = useState(false);

  const slug = params.slug;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://658b0c2bba789a9622385d9a.mockapi.io/api/v1/cohorts/${slug}`
        );
        const loadedCohort = res.data;
        setCohort(loadedCohort);
        setLoading(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-10 my-6">
        <Skeleton active className="col-span-3" />
        <Skeleton.Image active className="col-span-2" />
      </div>
    );
  }

  if (isError) {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Link href="/" className="text-blue-700">
        &larr; back to home
      </Link>
      <div className="grid grid-cols-5 gap-10 my-6">
        <div className="col-span-3">
          <h1 className="text-3xl font-semibold mb-4 text-slate-800">
            {cohort.name}
          </h1>
          <p className="text-slate-700 mb-5">{cohort.description}</p>
        </div>
        <div className="col-span-2">
          <Image
            height={300}
            width={600}
            src={cohort.thumbnail}
            className="rounded-lg mb-8"
          />

          <div className="flex justify-between">
            <Link
              href="#"
              className="bg-blue-700 text-white px-20 py-2 rounded"
            >
              Enroll
            </Link>
            <p className="font-bold">Price: {cohort.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
