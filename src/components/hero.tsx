"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dowa } from "@/lib/utils";
import Image from "next/image";

export function Hero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      <video
        src="https://d1wqnyfrrx5uw1.cloudfront.net/reviv-staging/REVIV_Website_Video_1_0db8eb8c18.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      ></video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          {dictionary.title}
        </h1>
        <h3 className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          {dictionary.subtitle}
        </h3>
        <Button asChild size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold">
          <Link href="#" target="_blank" onClick={()=>dowa("I’d love to know more about NAD+ and its benefits.")}>
            <Image
              className="mr-2 h-5 w-5"
              src="/assets/images/wa-icon.png"
              alt="wa icon"
              width={20}
              height={20}
            />
            {dictionary.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
