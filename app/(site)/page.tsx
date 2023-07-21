import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials";
import workshops from "@/data/workshops";
import WorkshopCard from "@/components/WorkshopCard";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 space-x-6 items-center py-8">
        <div>
          <h1 className="text-7xl font-bold mb-6 font-sans">
            Learn.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 h-48">
              Build.
            </span>{" "}
            Repeat.
          </h1>
          <p className="w-[500px] mb-10">
            Our cohorts bring together students from across India to learn and
            grow. Students benefit from peer and mentor support, collaboration,
            and idea sharing.
          </p>

          <Link
            className="bg-brand-accent px-10 py-4 rounded-md hover:bg-yellow-600 "
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

      <div className="grid grid-cols-2 my-6 space-x-10">
        {workshops.map((workshop, index) => (
          <WorkshopCard
            key={index}
            id={workshop.id}
            name={workshop.name}
            description={workshop.description}
            price={workshop.price}
            thumbnail={workshop.thumbnail}
            slug={workshop.slug}
          />
        ))}
      </div>

      <div className="py-8">
        <h1 className="my-2 text-4xl text-center">Wall of love...</h1>
        <p className="text-center mb-8 text-md">
          What other people has to say about the basics class
        </p>

        <div className="grid grid-cols-3 space-x-6">
          {testimonials.map((testimony, index) => (
            <TestimonialCard
              id={testimony.id}
              key={index}
              name={testimony.name}
              message={testimony.message}
              organization={testimony.organization}
              keywords={testimony.keywords}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
