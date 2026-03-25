"use client";

import { useRef, useEffect, useState } from "react";

export const HeroDesktop = () => {
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
      setTimeout(playVideo, 1000);
    }
  }, []);

  return (
    <div className="w-full h-96 md:h-[450px] bg-gray-100 rounded-lg hidden sm:flex items-center justify-center overflow-hidden">
      {!videoLoaded && (
        <div className="bg-gray-50 w-full h-full rounded-lg"></div>
      )}

      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        onCanPlay={() => setVideoLoaded(true)}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/assets/video/nad-desktop.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
