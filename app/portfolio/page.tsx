import BgVideo from "@/components/portfolio/BgVideo";
import FixedSidebar from "@/components/portfolio/FixedSidebar";

export default function Home() {
   return (
      <div className="">
         <BgVideo />
         <div className="container mt-9 px-0">
            <div className="grid grid-cols-12 ">
               <div className="grid col-span-4">
                  <FixedSidebar />
               </div>
               <div className="grid col-span-8">
                  <h2>Website Content</h2>
               </div>
            </div>
         </div>
      </div>
   );
}
