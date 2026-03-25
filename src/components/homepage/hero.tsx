"use client";

import { FaWhatsapp } from "react-icons/fa";
import { dowa, getMessage } from "@/lib/utils";
import Link from "next/link";
import { HeroMobile } from "../ui/hero-mobile";
import { HeroDesktop } from "../ui/hero-desktop";

export const Hero = ({ lang, dictionary }: { lang: any; dictionary: any }) => {
  const message = getMessage("bookNad", lang);
  const konektorCta = "https://chat.revivindonesia.com/wa-click";
  return (
    <>
      <HeroMobile />

      <section className="px-4 py-10 mt-0 sm:mt-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="border px-2 py-1 text-sm rounded-md">
                  {dictionary.badgeSameDay}
                </div>
                <div className="border px-2 py-1 border-primary_color text-sm text-primary_color rounded-md">
                  {dictionary.badgeSpecialist}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-800">
                {dictionary.title}
              </h1>
              <p className="text-gray-500 text-lg">{dictionary.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                <button
                  onClick={() => {
                    dowa(message, konektorCta);
                  }}
                  className="w-full px-6 py-2 cta_btn flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="size-5 text-white" />
                  <p className="text-white">{dictionary.ctaBookNow}</p>
                </button>
                <Link
                  href="#our-products"
                  className="w-full bg-white px-6 py-2 rounded-lg border text-center text-black"
                >
                  {dictionary.ctaDetails}
                </Link>
              </div>
              <p className="text-black">{dictionary.availability}</p>
              <Link
                href={`/${lang}/nad-doctors`}
                className="text-primary_color"
              >
                {dictionary.ourTeam}
              </Link>
            </div>

            <HeroDesktop />
          </div>
        </div>
      </section>
    </>
  );
};
