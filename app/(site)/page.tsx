import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials";

export default function Home() {
  return (
    <div className="container">
      <div className="flex items-center py-8 justify-around">
        <div>
          <h1 className="text-6xl font-semibold mb-6 font-sans">
            Learn. Build. Repeat.
          </h1>
          <p className="w-[500px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
            nihil animi? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iste saepe nihil animi?
          </p>
          <Link
            className=" bg-yellow-400 px-10 py-2 rounded-md hover:bg-yellow-200 "
            href="/"
          >
            Explore Courses
          </Link>
        </div>
        <div className="p-8">
          <Image
            src="/hero_img.png"
            alt="India map"
            width={420}
            height={420}
            priority
          />
        </div>
      </div>

      <div className="py-8">
        <h1 className="my-2 text-4xl text-center">Wall of love...</h1>
        <p className="text-center mb-8 text-md">What other people has to say about the basics class</p>

        <div className="flex">
          {testimonials.map((test, index) => (
            <TestimonialCard
              key={index}
              name={test.name}
              message={test.message}
              organization={test.organization}
              keywords={test.keywords}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
