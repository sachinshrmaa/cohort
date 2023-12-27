import CohortContainer from "@/components/CohortContainer";
import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1>Open Cohorts</h1>

      <CohortContainer />
    </div>
  );
}
