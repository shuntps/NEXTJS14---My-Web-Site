"use client";

import Link from "next/link";
import {
   Blocks,
   Dumbbell,
   LayoutPanelTop,
   NotebookPen,
   NotebookText,
   Send,
   UserRoundPen,
} from "lucide-react";

import {
   Tooltip,
   TooltipContent,
   TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navigation() {
   const navItems = [
      { href: "#", icon: <UserRoundPen size={19} />, label: "About" },
      { href: "#", icon: <Dumbbell size={19} />, label: "Skills" },
      { href: "#", icon: <Blocks size={19} />, label: "Services" },
      { href: "#", icon: <LayoutPanelTop size={19} />, label: "Projects" },
      { href: "#", icon: <NotebookText size={19} />, label: "Resume" },
      { href: "#", icon: <NotebookPen size={19} />, label: "Articles" },
      { href: "#", icon: <Send size={19} />, label: "Contact" },
   ];

   return (
      <div className="flex flex-col gap-2 bg-[#fefefe] dark:bg-[#181818] items-center justify-center w-16 py-3 rounded-[33px]">
         {navItems.map(({ href, icon, label }, index) => (
            <Tooltip key={index}>
               <TooltipTrigger asChild>
                  <Link
                     href={href}
                     aria-label={label}
                     className="dark:bg-[#1E1E1E] bg-[#fafafa] rounded-full w-12 h-12 p-4 hover:text-lime-600 duration-300"
                  >
                     {icon}
                  </Link>
               </TooltipTrigger>
               <TooltipContent
                  side="right"
                  className="rounded-full text-xs font-semibold uppercase shadow-md px-2 py-1 bg-lime-500 text-white dark:text-[#181818]"
               >
                  {label}
               </TooltipContent>
            </Tooltip>
         ))}
      </div>
   );
}
