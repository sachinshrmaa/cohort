import { FC } from "react";
import { TestimonialData } from "../types/testimonial";
import Image from "next/image";

const TestimonialCard: FC<TestimonialData> = ({
  name,
  organization,
  message,
  keywords,
}) => {
  return (
    <div className="bg-white p-4 rounded-md inline-block mb-4 w-full space-x-2 hover:bg-slate-50">
      <div className="align-end">
        <h1 className="text-2xl font-semibold text-slate-600">{keywords}</h1>
        <p className="my-4 text-slate-600">{message}</p>
        <p className="text-md text-slate-600">
          {name} —
          <span className="mx-2 text-sm text-slate-600">{organization}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
