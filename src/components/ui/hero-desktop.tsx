"use client";

import { useRef, useEffect } from "react";

export const HeroDesktop = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true; // must be set programmatically for Safari
    video.playsInline = true; // must be set programmatically for Safari
    video.play().catch(() => {});
  }, []);

  return (
    <div className="w-full h-96 md:h-[450px] bg-gray-100 rounded-lg hidden sm:flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        className="w-full h-full object-cover rounded-lg"
        preload="metadata"
        webkit-playsinline="true"
      >
        <source src="/assets/video/nad-desktop.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
