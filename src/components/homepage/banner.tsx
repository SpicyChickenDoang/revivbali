"use client";

import { dowa } from "@/lib/utils";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export const Banner = ({ dictionary }: { dictionary: any }) => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <Image
          src="/assets/images/feel-younger.webp"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[450px] object-cover"
          alt="feel younger"
        />
        <div className="absolute top-0 inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-6 max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-semibold text-white text-center">
              {dictionary.title}
            </h1>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <button
                onClick={() => dowa("I would like to book a NAD+ infusion.")}
                className="px-6 py-2 cta_btn hover:scale-105 transition-all flex items-center gap-2 w-fit"
              >
                <FaWhatsapp className="size-5 text-white" />
                <p className="text-sm sm:text-base text-white">
                  {dictionary.cta}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
