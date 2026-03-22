"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CustomProps = {
  bannerImage: string;
  datePost: string;
  titleArticle: string;
  introArticle: string;
  slug: string;
};

export const CardBlog = ({
  bannerImage,
  datePost,
  titleArticle,
  introArticle,
  slug,
}: CustomProps) => {
  const heroImage = PlaceHolderImages.find((img) => img.id === bannerImage);
  return (
    <div className="bg-white flex flex-col gap-2 rounded-lg">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[250px] rounded-t-lg object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          alt={titleArticle}
        />
      )}

      <div className="flex flex-col gap-4 p-4">
        <p className="text-black">{datePost}</p>
        <h3 className="text-gray-500 text-lg line-clamp-1">{titleArticle}</h3>
        <p className="text-black line-clamp-2">{introArticle}</p>
        <Link
          href={`${slug}`}
          className="text-lg font-medium text-primary_color"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
