"use client";

import { dowa } from "@/lib/utils";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const BookNow = ({
  lang,
  dictionary,
  customClass = "",
}: {
  lang: string;
  dictionary: any;
  customClass?: string;
}) => {
  const message =
    lang != "id"
      ? "I would like to book a NAD+ infusion."
      : "Aku ingin memesan NAD+ infusion.";
  const konektorCta = "https://chat.revivindonesia.com/wa-click";
  return (
    <Link
      href="#"
      onClick={() => dowa(message, konektorCta)}
      className={`${customClass} px-6 py-2 cta_btn flex items-center justify-center gap-2`}
    >
      <FaWhatsapp className="size-5 text-white" />
      <p className="text-white">{dictionary}</p>
    </Link>
  );
};
