"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaStar, FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import {
  IoCloseSharp,
  IoLocationOutline,
  IoPaperPlaneOutline,
  IoStar,
} from "react-icons/io5";
import { Logo } from "./logo";
import { locationsFooter } from "@/lib/constant";
import { useParams } from "next/navigation";

type Locale = "en" | "id";

type OpenState = {
  clinics?: boolean;
  coverageArea?: boolean;
};

export const Footer = () => {
  const params = useParams<{ lang: Locale }>();
  const lang = params.lang;

  const [open, setOpen] = useState<OpenState>({});
  const [active, setActive] = useState<number | null>(null);

  const toggle = (key: keyof OpenState) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <footer className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo */}
            <div className="flex flex-col gap-4">
              {/* <Logo /> */}
              <h3 className="text-primary_color text-2xl font-semibold">
                Reviv Indonesia
              </h3>
              <p className="text-black">
                {lang != "en"
                  ? "Reviv Indonesia menawarkan terapi infus NAD+ profesional untuk mendukung regenerasi sel, meningkatkan energi, dan menjaga kesehatan jangka panjang."
                  : "Reviv Indonesia offers professional NAD+ infusion therapy to support cellular renewal, energy, and long-term wellness."}
              </p>
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-black hover:font-medium hover:text-primary_color"
              >
                {lang != "en" ? "Beranda" : "Home"}
              </Link>

              <Link
                href={`/${lang}/team`}
                className="text-black hover:font-medium hover:text-primary_color"
              >
                {lang != "en" ? "Tim Medis" : "Medical Team"}
              </Link>

              <div className="w-full">
                <div>
                  <button
                    onClick={() => toggle("coverageArea")}
                    className="flex justify-between w-full text-black sm:w-60 text-left hover:font-medium hover:text-primary_color"
                  >
                    {lang != "en" ? "Jangkauan Area" : "Coverage Area"}
                    <span
                      className={`transition-transform ${open.coverageArea ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>

                  {open.coverageArea && (
                    <div className="ml-4 space-y-2 mt-2">
                      <Link
                        href={`/${lang}/nad-canggu`}
                        className="flex justify-between text-left text-black hover:text-primary_color"
                      >
                        NAD Canggu
                      </Link>
                      <Link
                        href={`/${lang}/nad-seminyak`}
                        className="flex justify-between text-left text-black hover:text-primary_color"
                      >
                        NAD Seminyak
                      </Link>
                      <Link
                        href={`/${lang}/nad-ubud`}
                        className="flex justify-between text-left text-black hover:text-primary_color"
                      >
                        NAD Ubud
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* <div className="w-full">
                <button
                  onClick={() => toggle("clinics")}
                  className="flex justify-between w-full text-black sm:w-60 text-left hover:font-medium hover:text-primary_color"
                >
                  {lang != "en" ? "Klinik Kami" : "Clinics"}
                  <span className="transition-transform">▾</span>
                </button>

                {open.clinics && (
                  <div className="ml-2 flex flex-col gap-4 mt-2">
                    {locationsFooter.map((loc, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setActive(active === index ? null : index)
                        }
                        className="w-full text-left"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <SiGooglemaps className="size-5 text-primary_color" />
                            <p className="text-gray-500">{loc.name}</p>
                            <FaStar className="size-4 text-yellow-400" />
                            <p className="text-sm text-black">
                              {loc.rating} ({loc.review} reviews)
                            </p>
                          </div>
                          <p className="text-sm text-black">{loc.address}</p>
                        </div>

                        {active === index && (
                          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                            <div className="bg-white w-full max-w-xs sm:max-w-sm rounded-2xl relative">
                              <div
                                onClick={() => setActive(null)}
                                className="absolute top-3 right-3 z-50 rounded-full p-2 bg-white"
                              >
                                <IoCloseSharp className="size-5 text-black" />
                              </div>

                              <Image
                                width={400}
                                height={250}
                                src={loc.image}
                                alt={loc.name}
                                className="w-full h-[250px] object-cover rounded-t-2xl"
                              />

                              <div className="flex flex-col gap-2 p-3">
                                <div className="flex items-center justify-center gap-2">
                                  <IoLocationOutline className="size-5 text-primary_color" />
                                  <div className="text-gray-500">
                                    {loc.name}
                                  </div>
                                </div>

                                <div className="flex items-center justify-center gap-2">
                                  <IoStar className="size-4 text-yellow-400" />
                                  <div className="text-black text-sm">
                                    {loc.rating} ({loc.review} reviews)
                                  </div>
                                </div>
                                <div className="text-black text-sm text-center">
                                  {loc.address}
                                </div>

                                <a
                                  href={loc.linkMaps}
                                  target="_blank"
                                  className="bg-gradient-to-r from-purple-700/90 to-purple-900 rounded-3xl py-2"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <IoPaperPlaneOutline className="size-5 text-white" />
                                    <p className="text-white text-sm">
                                      Get Direction
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div> */}

              {/* <Link
                href={`/${lang}/blog`}
                className="text-black hover:font-medium hover:text-primary_color"
              >
                {lang != "en" ? "Artikel" : "Blog"}
              </Link> */}
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-2 items-start">
              <p className="text-black">
                {lang != "en" ? "Kontak Kami" : "Contact Us"}
              </p>
              <a href="#" className="flex items-center gap-2">
                <FaWhatsapp className="size-5 text-primary_color" />
                <p className="text-black">+6282395439534</p>
              </a>

              <p className="text-black">
                {lang != "en" ? "Sosial Media" : "Social Media"}
              </p>
              <a
                href="https://www.instagram.com/klinikcepatsehatjakarta"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaInstagram className="size-5 text-primary_color" />
                <p className="text-black">Instagram</p>
              </a>
              <a
                href="https://web.facebook.com/klinikcepatsehat"
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaFacebook className="size-5 text-primary_color" />
                <p className="text-black">Facebook</p>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <p className="text-sm text-center p-2 bg-zinc-100">
        Copyright © 2026 Reviv Indonesia. All Rights Reserved.
      </p>
    </>
  );
};
