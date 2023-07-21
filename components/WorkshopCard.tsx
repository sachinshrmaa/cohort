import { WorkshopData } from "@/types/workshop";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const WorkshopCard: FC<WorkshopData> = ({
  id,
  name,
  description,
  price,
  thumbnail,
  slug,
}) => {
  return (
    <div className="bg-white border rounded-md p-[12px] my-6 md:mx-6">
      <small className="bg-yellow-600 text-white p-2 rounded-md">
        Enroll Open
      </small>
      <div className="my-4">
        <Image
          src={thumbnail}
          width={200}
          height={300}
          alt={name}
          className="rounded-md w-full h-[270px]"
        />
      </div>
      <div>
        <h1 className="text-2xl my-4 font-semibold">{name}</h1>
        <p className="mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link className="text-blue-800 hover:text-blue-900" href={slug}>
            Learn more <span>&rarr;</span>
          </Link>
          <Link
            className="bg-brand-accent px-10 py-2 rounded-md hover:bg-yellow-600 font-semibold"
            href={slug}
          >
            Enroll ₹ {price}.0
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
