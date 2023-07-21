import { FC } from "react";
import { TestimonialData } from "../types/testimonial";

const TestimonialCard: FC<TestimonialData> = ({
  name,
  organization,
  message,
  keywords,
}) => {
  return (
    <div className="bg-slate-200 p-4 rounded-md m-2 flex space-x-2 hover:bg-slate-100 ">
      <span className="text-6xl font-extrabold font-serif ">&quot;</span>
      <div className="align-end">
        <h1 className="text-2xl font-semibold">{keywords}</h1>
        <p className="my-2">{message}</p>
        <p className="text-md">
          {name} —
          <span className="mx-2 text-sm text-slate-600">{organization}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
