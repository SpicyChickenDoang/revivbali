import Image from "next/image";
import React from "react";
import { TbCertificate } from "react-icons/tb";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { Ri24HoursLine } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

export const WhyChooseUs = ({ dictionary }: { dictionary: any }) => {
  const whys = [
    {
      Icon: Ri24HoursLine,
      title: dictionary.pointOne,
    },
    {
      Icon: TbCertificate,
      title: dictionary.pointOne,
    },
    {
      Icon: AiOutlineSafety,
      title: dictionary.pointOne,
    },
    {
      Icon: FaHouseMedicalCircleCheck,
      title: dictionary.pointOne,
    },
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-semibold text-zinc-800">
              {dictionary.title}
            </h3>
            <div className="grid grid-cols-2 items-center gap-4">
              {whys.map((why, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center sm:justify-start flex-wrap"
                >
                  <div className="p-4 bg-white rounded-full w-fit">
                    <why.Icon className="text-primary_color size-10" />
                  </div>
                  <p className="text-lg text-gray-500 text-center sm:text-start">
                    {why.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/assets/images/why-choose-us.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="why choose reviv indonesia"
            className="w-full h-96 rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
