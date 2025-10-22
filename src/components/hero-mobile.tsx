"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dowa } from "@/lib/utils";
import Image from "next/image";
import RotatingText from "./rotate/RotatingText";
import ScrollRevealDiv from "./ScrollRevealDiv";
import { ChevronUp } from 'lucide-react'; // Example icon

export function HeroMobile({ dictionary }: { dictionary: any }) {
  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center text-white" id="hero">
        {/* <video
        src="https://d1wqnyfrrx5uw1.cloudfront.net/reviv-staging/REVIV_Website_Video_1_0db8eb8c18.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
      ></video> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source
            src="/assets/video/nad-desktop.webm"
            type="video/webm"
            media="(min-width: 768px)"
          />
          <source
            src="/assets/video/nad-mobile.webm"
            type="video/webm"
            media="(max-width: 767px)"
          />
        </video>
        <ScrollRevealDiv>
          {/* The content that is hidden/shown */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button asChild size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-6 py-3">
              <Link href="#" target="_blank" onClick={() => dowa("I’d love to know more about NAD+ and its benefits.")}>
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
          </button>
        </ScrollRevealDiv>
        <div className="text-[2rem] lg:text-[4rem] font-headline font-bold absolute bottom-[150px] [text-shadow:4px_4px_12px_rgba(0,0,0,10)] rounded-md">
          <RotatingText
            texts={[
              'Cellular Rejuvenation',
              'Cellular Regeneration',
              'Mitochondrial Boost',
              'Mental Clarity',
              'Lasting Vitality',
              'Radiant Skin',
              'Complete Wellness'
            ]}
            mainClassName="text-white overflow-hidden justify-center"
            staggerFrom="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            staggerDuration={0.025}
            // splitLevelClassName=""
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            rotationInterval={3000}
          />
        </div>

        {/* <Image
        className="absolute w-full h-full min-w-full min-h-full object-cover"
        src="/assets/video/nad1.mp4"
        // src="/assets/images/sunset.webp"
        alt="hero image"
        width={100}
        height={100}
        priority={true}
        unoptimized={false}
      /> */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </section>

      <div className="text-center p-4 max-w-4xl mx-auto my-9" >
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          {dictionary.title}
        </h1>
        <h3 className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          {dictionary.subtitle}
        </h3>
        <Button asChild size="lg" className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-6 py-3">
          <Link href="#" target="_blank" onClick={() => dowa("I’d love to know more about NAD+ and its benefits.")}>
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
    </>

  );
}
