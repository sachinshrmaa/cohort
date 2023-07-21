import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials";
import workshops from "@/data/workshops";
import WorkshopCard from "@/components/WorkshopCard";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-100  py-14">
        <div className="container text-center md:text-left">
          <div className="grid md:grid-cols-2 md:space-x-8 md:items-center">
            <div className="md:hidden block">
              <Image
                src="/hero_img.png"
                alt="India map"
                width={420}
                height={420}
                priority
                className="h-[200px] w-[200px]"
              />
            </div>
            <div className="mb-6">
              <h1 className="text-6xl font-bold my-6">
                Learn.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 h-48">
                  Build.
                </span>{" "}
                Repeat.
              </h1>
              <p className="mb-10">
                Our cohorts bring together students from across India to learn
                and grow. Students benefit from peer and mentor support,
                collaboration, and idea sharing.
              </p>

              <Link
                className="bg-brand-accent px-10 py-4 rounded-md hover:bg-yellow-600 "
                href="/"
              >
                Explore Courses
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/hero_img.png"
                alt="India map"
                width={420}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <section className="py-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 mt-6">
              <h1 className="text-4xl mb-4">Get Started</h1>
              <p className="mb-6 text-md">
                The cohort can be accessed remotely via Google meet.
              </p>
              <p className="mb-6 text-md">To get started, you’ll need: </p>
              <ul>
                <li>Internet connection 🌐</li>
                <li>Laptop/phone 💻</li>
                <li>Valid email 📧</li>
              </ul>
            </div>
            <div className="md:col-span-3">
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
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-100  py-8">
        <div className="container py-8">
          <div className="text-center mb-4 mt-8">
            <h1 className="text-4xl mb-4">Wall of Love...</h1>
            <p className="mb-8 text-md">
              What other people has to say about the basics className
            </p>
          </div>

          <div className="columns-1 md:columns-3 lg:columns-4 gap-4">
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
      </section>

    </div>
  );
}
