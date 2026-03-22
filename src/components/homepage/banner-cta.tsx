"use client";

import { dowa } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

export const BannerCta = ({
  lang,
  dictionary,
}: {
  lang: any;
  dictionary: any;
}) => {
  const message =
    lang != "id"
      ? "I would like to book a NAD+ infusion."
      : "Aku ingin memesan NAD+ infusion.";
  return (
    <section className="px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary_color/5 rounded-lg px-4 py-6 border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl text-zinc-800 font-semibold">
                {dictionary.readyFeel}
              </p>
              <p className="text-black">{dictionary.mostClients}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dowa(message);
                }}
                className="px-6 py-2 cta_btn flex items-center gap-2 justify-center"
              >
                <FaWhatsapp className="size-5 text-white" />
                <p className="text-white">{dictionary.ctaBookNow}</p>
              </button>
              <p className="text-black text-sm">{dictionary.sameDay}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
