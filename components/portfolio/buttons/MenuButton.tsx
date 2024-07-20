import Link from "next/link";

export default function MenuButton() {
   return (
      <Link href="/">
         <button className="group flex flex-col gap-1.5 p-5 bg-[#fefefe] justify-center w-16 h-16 rounded-[28px] dark:bg-[#130e0e]">
            <span className="block w-5 h-0.5 bg-[#141414] transition-all duration-500 group-hover:w-7 group-hover:bg-lime-600 dark:bg-[#fefefe]"></span>
            <span className="block w-7 h-0.5 bg-[#141414] transition-all duration-500 group-hover:bg-lime-600 dark:bg-[#fefefe]"></span>
            <span className="block w-3 h-0.5 bg-[#141414] transition-all duration-500 group-hover:w-7 group-hover:bg-lime-600 dark:bg-[#fefefe]"></span>
         </button>
      </Link>
   );
}
