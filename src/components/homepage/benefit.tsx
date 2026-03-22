import React from "react";
import { FaStudiovinari } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";

export const Benefit = ({ dictionary }: { dictionary: any }) => {
  const benefits = [
    {
      Icon: MdOutlineHealthAndSafety,
      title: dictionary.pointOne,
      desc: dictionary.descOne,
    },
    {
      Icon: RiMentalHealthLine,
      title: dictionary.pointFour,
      desc: dictionary.descFour,
    },
    {
      Icon: MdEnergySavingsLeaf,
      title: dictionary.pointThree,
      desc: dictionary.descThree,
    },
    {
      Icon: FaStudiovinari,
      title: dictionary.pointFour,
      desc: dictionary.descFour,
    },
  ];
  return (
    <section id="benefit" className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((ben, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 bg-white p-4 rounded-3xl group"
              >
                <div className="p-6 rounded-full bg_gradient">
                  <ben.Icon className="size-8 sm:size-12 text-white" />
                </div>
                <h4 className="text-xl font-medium text-primary_color text-center">
                  {ben.title}
                </h4>
                <p className="text-lg text-gray-500 text-center">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
