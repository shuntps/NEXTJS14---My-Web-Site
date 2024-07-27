import DashboardData from "@/components/dashboard/DashboardData";
import { db } from "@/lib/db";

const Dashboard = async () => {
   const [inventoryData, clients] = await db.$transaction([
      db.inventory.findMany(),
      db.user.findMany(),
   ]);

   const response = inventoryData?.map((inv) => {
      return { ...inv, clients };
   });
   return <DashboardData data={response} />;
};

export default Dashboard;
