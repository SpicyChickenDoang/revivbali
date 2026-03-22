"use client";

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export const Faq = ({ dictionary }: { dictionary: any }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    {
      q: dictionary.question_1,
      a: dictionary.answer_1,
    },
    {
      q: dictionary.question_2,
      a: dictionary.answer_2,
    },
    {
      q: dictionary.question_3,
      a: dictionary.answer_3,
    },
    {
      q: dictionary.question_4,
      a: dictionary.answer_4,
    },
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          <div className="flex flex-col gap-6 sm:col-span-2">
            <p className="text-primary_color uppercase font-medium text-center sm:text-start">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center sm:text-start">
              {dictionary.title}
            </h2>
            <p className="text-gray-500 text-lg">{dictionary.description}</p>
          </div>
          <div className="flex flex-col gap-6 sm:col-span-3">
            <div className="flex flex-col gap-0">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 border-b transition-colors duration-300 ${
                    openIndex === i ? "bg-transparent" : "bg-transparent"
                  }`}
                >
                  <div className="flex justify-between gap-2 items-center">
                    <h3 className="text-lg text-gray-500 text-left">
                      {item.q}
                    </h3>
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="bg_gradient rounded-full p-1"
                    >
                      <IoMdArrowDropdown
                        className={`size-5 text-white transition-transform duration-300 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-44 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-black text-left">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
