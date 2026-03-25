"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export const HeroMobile = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.muted = true;
      video.playsInline = true;
      video.load();
      video.play().catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(playVideo);
    } else {
      // Fallback for Safari which doesn't support requestIdleCallback
      setTimeout(playVideo, 1000);
    }
  }, []);

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden mt-[4.5rem] sm:hidden">
      {!videoLoaded && (
        <Image
          src="/assets/images/mobile-poster.webp"
          alt="NAD+ Therapy Bali"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        preload="metadata" // Safari needs this
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-[90vh] object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/assets/video/nad-mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};
