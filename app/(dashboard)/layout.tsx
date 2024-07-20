import { ReactNode } from "react";

export default function Dashboardlayout({ children }: { children: ReactNode }) {
   return (
      <div>
         <h1>Dashboard Layout</h1>
         {children}
      </div>
   );
}
