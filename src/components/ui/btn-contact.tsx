"use client";

import { dowa } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

export const BtnContact = ({ lang = "" }: { lang: string }) => {
  const message =
    lang != "id"
      ? "I would like to book a NAD+ infusion."
      : "Aku ingin memesan NAD+ infusion.";
  const konektorCta = "https://chat.revivindonesia.com/wa-click";
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dowa(message, konektorCta);
      }}
      className="px-6 py-2 cta_btn flex items-center gap-2"
    >
      <FaWhatsapp className="size-5 text-white" />
      <p className="text-sm sm:text-base text-white">
        {lang != "en" ? "Hubungi Kami" : "Contact Us"}
      </p>
    </button>
  );
};
