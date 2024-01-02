import CohortContainer from "@/components/CohortContainer";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 py-6 lg:px-8">
        <h1 className="font-semibold text-lg">Open Cohorts</h1>

        <CohortContainer />
      </div>
    </div>
  );
}
