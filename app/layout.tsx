import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "My App",
   description: "This is my application",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               <Providers>
                  <Toaster />
                  {children}
               </Providers>
            </ThemeProvider>
         </body>
      </html>
   );
}
