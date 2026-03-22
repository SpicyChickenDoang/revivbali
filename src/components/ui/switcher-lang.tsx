"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";
import { ChevronDown } from "lucide-react";
import { FaGlobeAsia } from "react-icons/fa";

const flags: Record<Locale, string> = {
  en: "🇬🇧",
  id: "🇮🇩",
};

export default function SwitcherLang() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    const currentLocale = i18n.locales.find((loc) => segments[1] === loc);

    if (currentLocale) {
      segments[1] = locale;
      return segments.join("/");
    }

    if (segments[1] === "") {
      return `/${locale}`;
    }

    return `/${locale}${pathName}`;
  };

  const getCurrentLocale = (): Locale => {
    if (!pathName) return i18n.defaultLocale;

    const segments = pathName.split("/");
    const locale = segments[1];

    if (i18n.locales.includes(locale as Locale)) {
      return locale as Locale;
    }

    return i18n.defaultLocale;
  };

  const currentLocale = getCurrentLocale();

  const otherLocales = i18n.locales.filter(
    (locale) => locale !== currentLocale,
  );

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <FaGlobeAsia className="size-5 text-primary_color" />
        <p className="text-black">{currentLocale.toUpperCase()}</p>
        <ChevronDown className="size-5 text-black" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 rounded-2xl bg-white">
          {otherLocales.map((locale) => (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-2xl w-20 border"
              onClick={() => setOpen(false)}
            >
              <span>{flags[locale]}</span>
              <span className="text-black">{locale.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
