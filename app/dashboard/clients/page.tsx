import { auth } from "@/auth";
import ClientsData from "@/components/dashboard/client/ClientsData";
import { db } from "@/lib/db";

const ClientsPage = async () => {
   const session = await auth();
   const users = await db.user.findMany({
      where: { NOT: { email: session?.user?.email! } },
   });

   return <ClientsData data={users} />;
};

export default ClientsPage;
