import Sidebar from "@/components/portfolio/Sidebar";

export default function Home() {
   return (
      <div>
         <div className="p-9"></div>
         <div className="container grid grid-cols-12 p-0">
            <div className="grid col-span-4">
               <Sidebar />
            </div>
            {/*             <div className="grid col-span-8 bg-red-500">
               <h2>Website Content</h2>
            </div> */}
         </div>
      </div>
   );
}
