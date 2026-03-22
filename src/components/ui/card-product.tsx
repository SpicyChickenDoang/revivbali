"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { dowa, formatPrice } from "@/lib/utils";

type CustomProps = {
  gradient: string;
  border: string;
  image: string;
  color: string;
  nameProduct: string;
  descProduct: string;
  expects: string;
  priceProduct: number;
  slug: string;
  message: string;
  lang: string;
};

export const CardProduct = ({
  gradient,
  border,
  image,
  color,
  nameProduct,
  descProduct,
  expects,
  priceProduct,
  slug = "#",
  message,
  lang,
}: CustomProps) => {
  return (
    <div
      className={`bg-gradient-to-t ${gradient} to-white p-3 rounded-lg border ${border}`}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="relative">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-60 object-contain"
            alt={nameProduct}
          />
          <IoFlash className={`size-10 absolute right-5 top-5 ${color}`} />
        </div>
        <h2 className="text-2xl font-semibold text-primary_color">
          {nameProduct}
        </h2>
        <p className="text-black text-center">{descProduct}</p>
        <div className="bg-white border rounded-md p-2 flex flex-col items-center gap-2">
          <p className="text-gray-500 font-medium">
            {lang != "id" ? "What To Expects" : "Apa Yang Diharapkan"}
          </p>
          <p className="text-sm text-black text-center">{expects}</p>
        </div>
        <p className="text-2xl font-semibold text-primary_color">
          {formatPrice(priceProduct)}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full items-center">
          <Link
            href={`/${slug}`}
            className="w-full bg-white px-6 py-2 rounded-lg border text-center text-black"
          >
            {lang != "id" ? "Details" : "Detail"}
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              dowa(message);
            }}
            className="w-full px-6 py-2 cta_btn flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="size-5 text-white" />
            <p className="text-white">
              {lang != "id" ? "Book Now" : "Pesan Sekarang"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
