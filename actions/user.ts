"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { signIn } from "@/auth";
import { db } from "@/lib/db";

export const loginSignup = async (formData: FormData, isLogin: boolean) => {
   const name = formData.get("name") as string;
   const email = formData.get("email") as string;
   const password = formData.get("password") as string;

   const user = await db.user.findUnique({
      where: { email },
      select: { isAdmin: true },
   });

   const res = await signIn("credentials", {
      name,
      email,
      password,
      isLogin,
      redirect: true,
      callbackUrl: "/",
   })
      .then(() => {
         redirect("/");
      })
      .catch((err) => {
         if (err?.toString() == "Error: NEXT_REDIRECT") {
            user?.isAdmin ? redirect("/dashboard") : redirect("/");
         } else return { error: err?.type };
      });

   if (!isLogin && res?.error) {
      return { error: "Credentials already exists" };
   } else {
      return { error: "Wrong credentials" };
   }
};

// Update user
export const updateUser = async (
   id: string,
   userId: string,
   isAdmin: boolean
) => {
   let inventory;
   try {
      inventory = await db.inventory.update({
         where: { id },
         data: { userId },
      });

      if (!inventory) return { error: "Failed to transfer" };
   } catch (error) {
      return { error: "Failed to transfer" };
   }

   revalidatePath(`${isAdmin ? "/dashboard" : "/"}`);
   return inventory;
};
