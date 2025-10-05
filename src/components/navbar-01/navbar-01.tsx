import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar1 = () => {
  return (
    <div className="bg-gray-900 px-4">
      <nav className="h-16 bg-gray-900 border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-2 sm:px-4 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Contact Me
            </Button>
            <Button className="hidden sm:hidden">
              Get Started</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
