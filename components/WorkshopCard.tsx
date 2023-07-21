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
    <div className="bg-white border rounded-md p-[12px] my-6 mb-10 md:mx-6">
      <div>
        <Image
          src={thumbnail}
          width={1000}
          height={270}
          alt={name}
          className="rounded-md w-full"
        />
      </div>
      <div>
        <h1 className="text-2xl my-4 font-normal font-albert">{name}</h1>
        <p className="mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link className="text-blue-800 hover:text-blue-900" href={slug}>
            Learn more <span>&rarr;</span>
          </Link>
          <Link className="btn py-2" href={slug}>
            Enroll {price === 0 ? "FREE" : `₹ ${price}.0`}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
