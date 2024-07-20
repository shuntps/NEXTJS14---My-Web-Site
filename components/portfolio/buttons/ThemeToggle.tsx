"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = React.useState(false);

   React.useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <button
         className="flex items-center justify-center gap-2 bg-[#fefefe] w-16 h-16 p-4 rounded-[28px] text-[#141414] hover:text-lime-600 duration-300 dark:bg-[#141414] dark:text-[#fefefe] dark:hover:text-lime-600"
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
         {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
      </button>
   );
}
