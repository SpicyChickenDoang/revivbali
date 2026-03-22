"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { carouselImages } from "@/lib/constant";
import { FaHandHoldingMedical, FaUserCheck, FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiRemedy } from "react-icons/gi";

export const TrustSignal = ({ dictionary }: { dictionary: any }) => {
  const trusts = [
    {
      Icon: FaHandHoldingMedical,
      title: dictionary.since,
      desc: dictionary.stats.pioneering,
    },
    {
      Icon: FaUserDoctor,
      title: "5",
      desc: dictionary.stats.doctor,
    },
    {
      Icon: GiRemedy,
      title: "Bali",
      desc: dictionary.stats.nurses,
    },
    {
      Icon: FaUserCheck,
      title: "50,000+",
      desc: dictionary.stats.patients,
    },
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center">
            <Swiper
              loop
              modules={[Autoplay]}
              spaceBetween={20}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
              }}
              className="rounded-3xl"
            >
              {carouselImages.map((car, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={car.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="review patients"
                    className="w-full h-64 sm:h-96 object-cover rounded-3xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-semibold text-zinc-800">
              {dictionary.title}
            </h3>
            <p className="text-gray-500 text-lg">{dictionary.subtitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trusts.map((trt, index) => (
                <div key={index} className="flex flex-col gap-2 items-center">
                  <trt.Icon className="size-16 text-primary_color" />
                  <p className="text-xl font-bold text-primary_color">
                    {trt.title}
                  </p>
                  <p className="text-center capitalize">{trt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
