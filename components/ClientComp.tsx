import { db } from "@/lib/db";
import ClientInventory from "@/components/dashboard/client/ClientInventory";

const ClientComp = async ({ user }: any) => {
   const clients = await db.user.findMany({
      where: {
         NOT: {
            id: user?.id,
         },
         isAdmin: false,
      },
   });

   const response = {
      ...user,
      Inventory: user?.Inventory?.map((inven: any) => {
         return { ...inven, clients };
      }),
   };
   return <ClientInventory user={response} />;
};

export default ClientComp;
