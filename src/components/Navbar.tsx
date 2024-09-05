import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md backdrop-brightness-50">
      <div className="relative flex items-center h-fit p-6 max-w-[1200px] mx-auto">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <Image src={"/icon.png"} width={40} height={40} alt="icon" />
          <p className="font-bold text-xl">Star Fitness</p>
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
