import { FC } from "react";
import { TestimonialData } from "../types/testimonial";

const TestimonialCard: FC<TestimonialData> = ({
  name,
  organization,
  message,
  keywords,
}) => {
  return (
    <div className="bg-white p-4 rounded-md hover:bg-slate-100 drop-shadow-sm ">
      <div className="align-end">
        <h1 className="text-md lg:text-xl font-normal font-poppins text-slate-900">
          {keywords}
        </h1>
        <p className="text-sm lg:text-md my-4 text-slate-600">{message}</p>
        <p className="text-sm lg:text-md text-slate-900">
          {name} —
          <span className="mx-2 text-sm text-slate-800">{organization}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
