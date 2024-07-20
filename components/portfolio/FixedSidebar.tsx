import { ThemeToggle } from "@/components/portfolio/buttons/ThemeToggle";
import MenuButton from "@/components/portfolio/buttons/MenuButton";
import Navigation from "@/components/portfolio/Navigation";

export default function FixedSidebar() {
   return (
      <div className="fixed px-2">
         <div className="space-y-2">
            {/* Menu */}
            <MenuButton />
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Navigation */}
            <Navigation />
         </div>
      </div>
   );
}
