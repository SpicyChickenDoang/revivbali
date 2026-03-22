"use client";

import Image from "next/image";
import { Treatment } from "@/lib/treatments";
import { dowa, formatPrice } from "@/lib/utils";
import { useParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { CardProduct } from "../ui/card-product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type CustomProps = {
  gradient: string;
  border: string;
  image: string;
  color: string;
  nameProduct: string;
  expect: string;
  descProduct: string;
  priceProduct: number;
  message: string;
  allTreatments: Treatment[];
  dictionary: any;
};

export const TreatmentDetail = ({
  gradient,
  border,
  image,
  color,
  nameProduct,
  expect,
  descProduct,
  priceProduct,
  message,
  allTreatments,
  dictionary,
}: CustomProps) => {
  const params = useParams();
  const currentSlug = params.slug as string;
  const currentLang = params.lang as string;

  const moreTreatments = allTreatments.filter((p) => p.slug != currentSlug);

  return (
    <>
      <section className="py-10 px-4 mt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div
              className={`bg-gradient-to-t ${gradient} to-white p-3 rounded-xl border ${border}`}
            >
              <div className="relative">
                <Image
                  src={image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="test"
                  className="w-full h-72 sm:h-[450px] object-contain"
                  priority
                />
                <IoFlash
                  className={`size-10 sm:size-14 absolute right-10 top-10 ${color}`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl">
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary_color">
                {nameProduct}
              </h1>
              <p className="text-lg text-gray-500">{descProduct}</p>
              <div className="bg-white border rounded-lg p-2 flex flex-col gap-2">
                <p className="text-gray-500 font-medium">
                  {dictionary.expects}
                </p>
                <p className="text-black">{expect}</p>
              </div>

              <div className="flex items-center justify-between gap-6">
                <p className="text-black">{dictionary.price}</p>
                <p className="text-2xl sm:text-3xl font-semibold text-primary_color">
                  {formatPrice(priceProduct)}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dowa(message);
                }}
                className="py-3 px-6 cta_btn flex items-center gap-2 justify-center"
              >
                <FaWhatsapp className="size-5 text-white" />
                <p className="text-white">{dictionary.bookNow}</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="flex flex-col gap-6">
          {/* More Products */}
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.moreTreatments}
          </h3>
          <div className="flex items-center">
            <Swiper
              loop
              modules={[Autoplay]}
              spaceBetween={20}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="rounded-lg"
            >
              {moreTreatments.map((more) => (
                <SwiperSlide key={more.id}>
                  <CardProduct
                    gradient={more.gradient}
                    border={more.border}
                    image={more.image}
                    color={more.color}
                    nameProduct={more.name}
                    descProduct={more.shortDescription}
                    expects={more.expects}
                    priceProduct={more.price}
                    slug={`${currentLang}/treatments/${more.slug}`}
                    message={more.message}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
