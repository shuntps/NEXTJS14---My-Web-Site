import Link from "next/link";

import { ThemeToggle } from "@/components/portfolio/buttons/ThemeToggle";

export default function Home() {
   return (
      <div className="flex flex-col items-center justify-center">
         <h1 className="flex items-center p-4">Home</h1>
         <ThemeToggle />
         <div className="flex flex-col items-center gap-3 mt-3">
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/dashboard">Dashboard</Link>
         </div>
      </div>
   );
}
