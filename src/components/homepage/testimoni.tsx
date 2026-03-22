"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { userTesti } from "@/lib/constant";
import CardTestimoni from "../ui/card-testimoni";

export const Testimoni = ({ dictionary }: { dictionary: any }) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <p className="text-primary_color uppercase font-medium text-center">
            {dictionary.label}
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>

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
                480: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
            >
              {userTesti.map((user, idx) => (
                <SwiperSlide key={idx}>
                  <CardTestimoni
                    image={user.image}
                    name={user.name}
                    comment={user.comment}
                    photos={user.photos}
                    country={user.country}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
