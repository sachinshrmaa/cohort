import { BootcampData } from "@/types/bootcamp";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BootcampCard: FC<BootcampData> = ({
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
          <Link className="text-blue-800 hover:text-blue-900" href={`/${slug}`}>
            Learn more <span>&rarr;</span>
          </Link>

          <span className="mr-4 font-semibold bg-green-100 px-4 py-1 rounded-md">{price === 0 ? "FREE" : `₹ ${price}.0`}</span>
          
        </div>
      </div>
    </div>
  );
};

export default BootcampCard;
