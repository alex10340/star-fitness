import { Button } from "./ui/button";
import Link from "next/link";
import { Star } from "lucide-react";
import MobileMenuDrawer from "./MobileMenuDrawer";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
      <div className="relative flex items-center h-fit px-6 py-4 max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <Star className="text-primary" />
          <p className="font-bold text-lg">Star Fitness</p>
        </Link>

        <div className="hidden sm:block">
          <div className="space-x-2">
            <Link href="/" passHref legacyBehavior>
              <Button variant="ghost">Classes</Button>
            </Link>

            <Link href="/#membership" passHref legacyBehavior>
              <Button variant={"ghost"}>Memberships</Button>
            </Link>
          </div>
        </div>

        <Link href="/join" passHref legacyBehavior>
          <Button className="ml-2 px-6 bg-gradient-to-b from-rose-500 to-rose-600">
            Sign Up
          </Button>
        </Link>

        <MobileMenuDrawer className="pl-2" />
      </div>
    </div>
  );
};

export default Navbar;
