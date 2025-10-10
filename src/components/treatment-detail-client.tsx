
"use client";

import { type Treatment } from '@/lib/treatments';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { Badge } from '@/components/ui/badge';
import TreatmentCard from '@/components/treatment-card';
import { Locale } from '@/i18n-config';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Autoplay from "embla-carousel-autoplay";
import React, { useState } from 'react';
import { cn, formatPrice, dowa } from '@/lib/utils';
import Orb from './orb/Orb';

interface TreatmentDetailClientPageProps {
  treatment: Treatment;
  allTreatments: Treatment[];
  dictionary: any;
  lang: Locale;
}

export default function TreatmentDetailClientPage({ treatment, allTreatments, dictionary, lang }: TreatmentDetailClientPageProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const buttonToBorder: { [key: string]: string } = {
    'nad-reboot-100': 'border-blue-500',
    'nad-restore-200': 'border-purple-500',
    'nad-revive-250': 'border-orange-500',
    'nad-regenerate-500': 'border-red-500',
    'nad-elite-750': 'border-green-500',
  };

  const softBorder: { [key: string]: string } = {
    'nad-reboot-100': 'border-blue-200',
    'nad-restore-200': 'border-purple-200',
    'nad-revive-250': 'border-orange-200',
    'nad-regenerate-500': 'border-red-200',
    'nad-elite-750': 'border-green-200',
  };

  const [selectedVolume, setSelectedVolume] = useState('100');

  const { treatmentDetailPage } = dictionary;
  const image = PlaceHolderImages.find((img) => img.id === treatment.imageId);
  const hue = treatment.hue
  const border = buttonToBorder[treatment.slug] || 'border-input';
  const sborder = softBorder[treatment.slug] || 'border-input';

  return (
    <div className="">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 justify-center items-center flex flex-col">
            <div className="relative aspect-square w-full md:w-2/3 lg:w-[50%]">
              {/* Orb as background - full size */}
              <div className="absolute -inset-12 flex items-center justify-center z-0">
                <Orb
                  hoverIntensity={0.5}
                  rotateOnHover={false}
                  hue={hue}
                  forceHoverState={false}
                />
              </div>

              {/* Image on top - smaller than container */}
              {image && (
                <div className="relative z-10 w-[100%] h-[100%] mx-auto my-auto justify-center">
                  <Image
                    src={image.imageUrl}
                    alt={treatment.name}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className={cn("top-20 rounded-lg p-6 shadow-sm border", sborder)}>
              <h2 className="text-4xl font-bold font-headline text-primary">{treatment.name}</h2>
              <p className="mt-4 text-lg text-foreground">{treatment.longDescription}</p>

              <div className={cn("mt-6 border-t pt-6", sborder)}>
                <RadioGroup
                  defaultValue="100"
                  className="grid grid-cols-3 gap-2 mb-6"
                  onValueChange={setSelectedVolume}
                  value={selectedVolume}
                >
                  {['100', '300', '500'].map(volume => (
                    <div key={volume}>
                      <RadioGroupItem value={volume} id={`r-${volume}`} className="sr-only" />
                      <Label
                        htmlFor={`r-${volume}`}
                        className={cn(
                          "flex items-center justify-center rounded-md border-2 border-muted p-3 text-md font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                          selectedVolume === volume ? "bg-accent text-accent-foreground" : ""
                        )}
                      >
                        {volume}ml
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-lg">{treatmentDetailPage.price}</span>
                  <p className="text-3xl font-bold font-headline text-primary">
                    {formatPrice(treatment.price)}
                  </p>
                </div>
                <Button asChild size="lg" className="w-full mt-6 bg-accent hover:bg-accent/90 text-lg">
                  <Link
                    href="#"
                    onClick={() => dowa(treatment.message + " the " + selectedVolume + "ml")}
                  >
                    {treatmentDetailPage.bookButton}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Treatments Carousel */}
      {allTreatments.length > 0 && (
        <div className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-center">{treatmentDetailPage.related}</h2>
            <div className="mt-12">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="-ml-4">
                  {allTreatments.map((related) => (
                    <CarouselItem key={related.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 h-full">
                        <TreatmentCard treatment={related} lang={lang} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" /> */}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}