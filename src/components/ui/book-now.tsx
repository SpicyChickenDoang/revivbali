"use client";

import { dowa, getMessage } from "@/lib/utils";
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
  const message = getMessage("bookNad", lang);
  const konektorCta = "https://chat.revivindonesia.com/wa-click";
  return (
    <button
      onClick={() => {
        dowa(message, konektorCta);
      }}
      className={`${customClass} px-6 py-2 cta_btn flex items-center justify-center gap-2`}
    >
      <FaWhatsapp className="size-5 text-white" />
      <p className="text-white">{dictionary}</p>
    </button>
  );
};
