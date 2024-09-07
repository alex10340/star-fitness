import { Button } from "./ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
      <div className="relative flex items-center h-fit px-6 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <Star />
          <p className="font-bold text-lg">Star Fitness</p>
        </Link>

        <div className="hidden sm:block">
          <div className="space-x-2">
            <Link href="/">
              <Button variant={"ghost"}>Classes</Button>
            </Link>

            <Link href="/">
              <Button variant={"ghost"}>Memberships</Button>
            </Link>
          </div>
        </div>

        <Link href="/join" className="pl-2">
          <Button className="px-6">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
