"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
// import { Logo } from "./logo";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import SwitcherLang from "./ui/switcher-lang";
import { BtnContact } from "./ui/btn-contact";
import { ChevronDown } from "lucide-react";
import { Logo } from "./logo";

type Locale = "en" | "id";

export const Navbar = () => {
  const params = useParams<{ lang: Locale }>();
  const lang = params.lang;

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [openCoverage, setOpenCoverage] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      {/* Main Navbar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
        <span>
          <Logo />
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={`/${lang}/`} className="hover:text-primary_color">
            {lang != "en" ? "Beranda" : "Home"}
          </Link>
          <Link
            href={`/${lang}/nad-doctors`}
            className="hover:text-primary_color"
          >
            {lang != "en" ? "Tim Medis" : "Medical Team"}
          </Link>

          {/* <Link href={`/${lang}/clinics`} className="hover:text-primary_color">
            {lang != "en" ? "Klinik Kami" : "Clinics"}
          </Link> */}

          <div className="relative group">
            <div className="cursor-pointer transition-colors flex items-center gap-2 hover:text-primary_color">
              {lang != "en" ? "Jangkauan Area" : "Coverage Area"}
              <ChevronDown className="size-5" />
            </div>

            <div className="absolute left-0 top-full hidden group-hover:block">
              <div className="bg-white rounded-md min-w-[200px] mt-2">
                <Link
                  href={`/${lang}/nad-canggu`}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-t-md"
                >
                  NAD Canggu
                </Link>
                <Link
                  href={`/${lang}/nad-seminyak`}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-b-md"
                >
                  NAD Seminyak
                </Link>
                <Link
                  href={`/${lang}/nad-ubud`}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-b-md"
                >
                  NAD Ubud
                </Link>
              </div>
            </div>
          </div>
          {/* <Link href={`/${lang}/blog`} className="hover:text-primary_color">
            {lang != "en" ? "Artikel" : "Blog"}
          </Link> */}
        </div>

        {/* Toggle Language */}
        <div className="hidden md:flex items-center gap-10">
          <SwitcherLang />
          <BtnContact lang={lang} />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <RiMenu4Fill className="size-5 text-primary_color" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <span className="absolute top-5 left-5">
          <Logo />
        </span>
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="size-5" />
        </button>

        <div className="flex flex-col gap-4 text-center items-center">
          <Link href={`/${lang}/`} onClick={() => setIsOpen(false)}>
            {lang != "en" ? "Beranda" : "Home"}
          </Link>
          <Link href={`/${lang}/nad-doctors`} onClick={() => setIsOpen(false)}>
            {lang != "en" ? "Tim Medis" : "Medical Team"}
          </Link>
          {/* <Link href={`/${lang}/clinics`} onClick={() => setIsOpen(false)}>
            {lang != "en" ? "Klinik Kami" : "Clinics"}
          </Link> */}

          <button
            type="button"
            onClick={() => setOpenCoverage(!openCoverage)}
            className={`flex items-center justify-between px-4 py-2 transition-colors ${
              [
                `/${lang}/nad-canggu`,
                `/${lang}/nad-seminyak`,
                `/${lang}/nad-ubud`,
              ].some((path) => pathname.startsWith(path))
                ? "text-primary_color"
                : "text-black hover:text-primary_color"
            }`}
          >
            {lang != "en" ? "Jangkauan Area" : "Coverage Area"}
            <span
              className={`ml-2 transition-transform ${
                openCoverage ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>
          {openCoverage && (
            <div className="flex flex-col gap-2">
              <Link
                href={`/${lang}/nad-canggu`}
                className="hover:text-primary_color"
                onClick={() => setIsOpen(false)}
              >
                NAD Canggu
              </Link>
              <Link
                href={`/${lang}/nad-seminyak`}
                className="hover:text-primary_color"
                onClick={() => setIsOpen(false)}
              >
                NAD Seminyak
              </Link>
              <Link
                href={`/${lang}/nad-ubud`}
                className="hover:text-primary_color"
                onClick={() => setIsOpen(false)}
              >
                NAD Ubud
              </Link>
            </div>
          )}
          {/* <Link href={`/${lang}/blog`} onClick={() => setIsOpen(false)}>
            {lang != "en" ? "Artikel" : "Blog"}
          </Link> */}

          <SwitcherLang />
          <BtnContact lang={lang} />
        </div>
      </div>
    </nav>
  );
};
