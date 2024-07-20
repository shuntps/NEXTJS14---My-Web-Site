import React from "react";
import Link from "next/link";
import {
   Briefcase,
   Contact,
   Dumbbell,
   Hammer,
   Newspaper,
   University,
   UserRoundPen,
} from "lucide-react";

export default function Navigation() {
   const navItems = [
      { href: "#", icon: <UserRoundPen size={19} />, label: "About" },
      { href: "#", icon: <Dumbbell size={19} />, label: "Skills" },
      { href: "#", icon: <Hammer size={19} />, label: "Services" },
      { href: "#", icon: <Briefcase size={19} />, label: "Projects" },
      { href: "#", icon: <University size={19} />, label: "Resume" },
      { href: "#", icon: <Newspaper size={19} />, label: "Articles" },
      { href: "#", icon: <Contact size={19} />, label: "Contact" },
   ];

   return (
      <div className="flex flex-col items-center justify-center gap-8 bg-[#fefefe] py-7 rounded-[30px] text-[#141414] duration-300 dark:bg-[#141414] dark:text-[#fefefe]">
         {navItems.map(({ href, icon, label }, index) => (
            <div key={index} className="relative group flex items-center">
               <Link
                  href={href}
                  aria-label={label}
                  className="hover:text-lime-600 dark:hover:text-lime-600"
               >
                  {icon}
               </Link>
               <span className="absolute left-full ml-2 px-2 py-1 whitespace-nowrap bg-lime-600 text-xs uppercase font-semibold text-slate-50 dark:text-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
               </span>
            </div>
         ))}
      </div>
   );
}
