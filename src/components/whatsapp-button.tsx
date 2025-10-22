"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { dowa } from "@/lib/utils";
import { useEffect, useState } from "react";

export function WhatsappButton() {
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!scrolled) {
      return null;
    }

  return (
    <Button
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-50"
      size="icon"
      onClick={() => dowa("I’d love to know more about NAD+ and its benefits.")}
    >
      <Image
        className="h-8 w-8 text-white"
        src="/assets/images/wa-icon.png"
        alt="wa icon"
        width={20}
        height={20}
      />
    </Button>
  );
}
