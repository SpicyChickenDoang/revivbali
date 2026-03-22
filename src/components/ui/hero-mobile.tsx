"use client";

import { useRef, useEffect } from "react";

export const HeroMobile = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden mt-[4.5rem] sm:hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        poster="/assets/images/mobile-poster.webp"
        className="w-full h-[90vh] object-cover"
        preload="none"
      >
        <source src="/assets/video/nad-mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};
