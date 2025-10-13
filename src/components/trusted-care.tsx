
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages = [
  { id: 1, src: "/assets/images/people/_1.webp", alt: "Doctor reviewing notes", hint: "doctor computer" },
  { id: 2, src: "/assets/images/people/_2.webp", alt: "Microscopic view of cells", hint: "science microscope" },
  { id: 3, src: "/assets/images/people/_3.webp", alt: "Modern medical facility", hint: "modern clinic" },
  { id: 4, src: "/assets/images/people/_4.webp", alt: "Doctor reviewing notes", hint: "doctor computer" },
  { id: 5, src: "/assets/images/people/_5.webp", alt: "Microscopic view of cells", hint: "science microscope" },
  { id: 6, src: "/assets/images/people/_6.webp", alt: "Modern medical facility", hint: "modern clinic" },
  { id: 7, src: "/assets/images/people/_7.webp", alt: "Doctor reviewing notes", hint: "doctor computer" },
  // { id: 8, src: "/assets/images/people/_8.webp", alt: "Microscopic view of cells", hint: "science microscope" },
  { id: 9, src: "/assets/images/people/_9.webp", alt: "Modern medical facility", hint: "modern clinic" },
  // { id: 10, src: "/assets/images/people/_10.webp", alt: "Modern medical facility", hint: "modern clinic" },
];

export function TrustedCare({ dictionary }: { dictionary: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const stats = [
    { value: dictionary.since, label: dictionary.stats.pioneering },
    { value: "50,000+", label: dictionary.stats.patients },
    { value: "8", label: dictionary.stats.doctor },
    { value: "17", label: dictionary.stats.nurses },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Carousel */}
          <div className="w-full max-w-lg mx-auto">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                loop: true,
              }}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        className="object-cover object-[25%_75%]"
                        fill
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[4rem] font-headline font-bold text-primary">
              {dictionary.title}
            </h2>
            <p className="mt-4 text-lg text-foreground">
              {dictionary.subtitle}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                  <p className="mt-2 text-[12px] text-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
