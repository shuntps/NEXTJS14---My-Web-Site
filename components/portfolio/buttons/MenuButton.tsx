"use client";

import Link from "next/link";

export default function MenuButton() {
   return (
      <Link href="/">
         <button className="flex flex-col w-16 h-[61px] gap-[5px] bg-[#fefefe] p-[18px] mt-4 group justify-center rounded-[30px] dark:bg-[#181818]">
            <span className="block w-5 h-[1.8px] group-hover:w-7 bg-[#181818] group-hover:bg-lime-600 transition-all duration-500 dark:bg-[#fefefe]"></span>
            <span className="block w-7 h-[2px] bg-[#181818] group-hover:bg-lime-600 transition-all duration-500 dark:bg-[#fefefe]"></span>
            <span className="block w-4 h-[1.8px] group-hover:w-7 bg-[#181818] group-hover:bg-lime-600 transition-all duration-500 dark:bg-[#fefefe]"></span>
         </button>
      </Link>
   );
}
