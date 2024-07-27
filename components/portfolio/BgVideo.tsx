"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

export default function BgVideo() {
   const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <>
         <video
            className={cn(
               "fixed inset-0 w-full h-full object-cover transition-opacity duration-300 z-[-1]",
               theme === "dark" ? "opacity-0" : "opacity-100"
            )}
            autoPlay
            muted
            loop
            playsInline
         >
            <source src="/videos/bg-video-light.mp4" type="video/mp4" />
         </video>
         <video
            className={cn(
               "fixed inset-0 w-full h-full object-cover transition-opacity duration-300 z-[-1]",
               theme === "light" ? "opacity-0" : "opacity-100"
            )}
            autoPlay
            muted
            loop
            playsInline
         >
            <source src="/videos/bg-video-dark.mp4" type="video/mp4" />
         </video>
      </>
   );
}
