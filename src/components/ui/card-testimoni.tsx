import Image from "next/image";
import { FaStar } from "react-icons/fa";

type CardTestimoniProps = {
  photos: string;
  country: string;
  image: string;
  comment: string;
  name: string;
};

export const CardTestimoni = ({
  photos,
  country,
  image,
  comment,
  name,
}: CardTestimoniProps) => {
  return (
    <div className="bg-white flex flex-col gap-4 p-4 rounded-lg relative">
      {/* <div className="relative">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={photos}
          alt="patient testimonial"
          className="rounded-3xl w-full h-60 object-cover"
        />
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={country}
          alt="patient country"
          className="absolute top-4 left-4 size-8"
        />
      </div> */}
      <p>{comment}</p>
      <div className="flex items-center gap-4">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={image}
          alt="patient profile"
          className="rounded-full size-16"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500">{name}</p>
          <div className="flex gap-1">
            <FaStar className="size-5 text-yellow-400" />
            <FaStar className="size-5 text-yellow-400" />
            <FaStar className="size-5 text-yellow-400" />
            <FaStar className="size-5 text-yellow-400" />
            <FaStar className="size-5 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimoni;
