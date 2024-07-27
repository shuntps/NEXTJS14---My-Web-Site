import { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import BgVideo from "@/components/portfolio/BgVideo";

export default function Homelayout({ children }: { children: ReactNode }) {
   return (
      <div className="relative">
         <BgVideo />
         <TooltipProvider>{children}</TooltipProvider>
      </div>
   );
}
