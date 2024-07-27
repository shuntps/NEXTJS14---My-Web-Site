import { redirect } from "next/navigation";

import { auth } from "@/auth";
import ClientComp from "@/components/ClientComp";
import Navbar from "@/components/Navbar";
import AuthDesign from "@/components/auth/AuthDesign";
import { db } from "@/lib/db";

export default async function Home() {
   const session = await auth();
   if (session) {
      const user = await db.user.findUnique({
         where: { email: session?.user?.email! },
         include: { Inventory: true },
      });

      console.log(user, "user");

      if (user && !user?.isAdmin) {
         return (
            <>
               <Navbar />
               <ClientComp user={user} />
            </>
         );
      } else if (user && user?.isAdmin) {
         redirect("/dashboard");
      }
   } else {
      return (
         <div className="">
            <Navbar />
            <AuthDesign />
         </div>
      );
   }
}
