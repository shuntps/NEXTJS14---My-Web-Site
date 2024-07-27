import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";

const ClientActions = ({ row }: any) => {
   const data = row.origial;

   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button variant="outline">Edit User</Button>
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle>Edit User</SheetTitle>
               <SheetDescription>
                  Make changes to your user profile here. Click save when you're
                  done.
               </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
               <form action="">
                  <div>
                     <div className="flex flex-col">
                        <FormInput
                           type="text"
                           name="name"
                           label="Name"
                           defaultValue={data?.name}
                        />
                     </div>
                  </div>
               </form>
            </div>
            <SheetFooter>
               <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
               </SheetClose>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   );
};

export default ClientActions;
