import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Linkedin } from "lucide-react";

import { ThemeToggle } from "@/components/portfolio/buttons/ThemeToggle";
import MenuButton from "@/components/portfolio/buttons/MenuButton";
import Navigation from "@/components/portfolio/buttons/Navigation";

export default function Sidebar() {
   const socialLinks = [
      { href: "#", icon: <Linkedin size={19} />, label: "Linkedin" },
      { href: "#", icon: <Github size={19} />, label: "Github" },
      { href: "#", icon: <Facebook size={19} />, label: "Facebook" },
   ];

   return (
      <div className="flex gap-4">
         <div className="space-y-2">
            <MenuButton />
            <ThemeToggle />
            <Navigation />
         </div>

         {/* Profile */}
         <div className="bg-[#fefefe] dark:text-[#fefefe] dark:bg-[#181818] p-10 rounded-tl-3xl rounded-b-3xl">
            <Image
               src="/portfolio/profile_pic.jpg"
               alt="Profile Image"
               priority
               width={500}
               height={500}
               className="rounded-tl-3xl rounded-b-3xl"
            />
            <div className="text-center text-nowrap mt-9">
               <p className="uppercase font-extralight text-md text-lime-600">
                  Senior Technician
               </p>
               <h2 className="text-3xl font-semibold mt-2">Andrew Ryan</h2>
               <div className="flex gap-4 justify-center rounded-full">
                  {socialLinks.map(({ href, icon, label }, index) => (
                     <Link
                        key={index}
                        href={href}
                        aria-label={label}
                        className="flex items-center justify-center text-center mt-4 w-12 h-12 border border-gray-200 dark:border-zinc-800 rounded-2xl hover:text-lime-500"
                     >
                        {icon}
                     </Link>
                  ))}
               </div>
               <div className="border-t pt-8">
                  <Link href="#">Download CV</Link>
                  <Link href="#">Contact Me</Link>
               </div>
            </div>
         </div>
      </div>
   );
}
