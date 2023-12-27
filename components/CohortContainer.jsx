"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import CohortCard from "./CohortCard";
import { Result, Skeleton } from "antd";

export default function CohortContainer() {
  const [loading, setLoading] = useState(true);
  const [cohorts, setCohorts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://658b0c2bba789a9622385d9a.mockapi.io/api/v1/cohorts"
        );
        const loadedCohorts = res.data;
        setCohorts(loadedCohorts);
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
    return <Skeleton active className="my-6" />;
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
    <div className="my-6 grid grid-cols-3 gap-8">
      {cohorts.map((cohort) => (
        <CohortCard
          title={cohort.name}
          description={cohort.description}
          thumbnail={cohort.thumbnail}
          price={cohort.price}
          slug={cohort.id}
        />
      ))}
    </div>
  );
}
