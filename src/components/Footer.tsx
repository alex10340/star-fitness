import Link from "next/link";
import { Star } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="lg:hidden text-center max-w-screen-xl border-t">
        <div className="flex flex-col gap-4 p-6 mx-auto">
          <Link href="/" className="flex items-center space-x-2 mx-auto">
            <Star className="text-primary" />
            <p className="font-bold text-lg">Star Fitness</p>
          </Link>
          <ul className="pb-2 leading-loose text-muted-foreground">
            <li>Star Fitness, LLC</li>
            <li>info@startfitness.com</li>
          </ul>
          <p className="border-b pb-2 text-lg">Links</p>
          <nav className="flex flex-col space-y-4 font-medium">
            <Link href="/" className=" hover:text-primary">
              Home
            </Link>
            <Link href="/classes" className=" hover:text-primary">
              Classes
            </Link>
            <Link href="/#membership" className=" hover:text-primary">
              Membership
            </Link>
          </nav>
          <p className="border-b pb-2 text-lg pt-4">Company</p>
          <nav className="flex flex-col space-y-4 font-medium">
            <Link href="/" className=" hover:text-primary">
              About Us
            </Link>
            <Link href="/" className=" hover:text-primary">
              Contact
            </Link>
            <Link href="/" className=" hover:text-primary">
              Franchising
            </Link>
          </nav>
          <p className="border-b pb-2 text-lg pt-4">Legal</p>
          <nav className="flex flex-col space-y-4 font-medium">
            <Link href="/" className=" hover:text-primary">
              Terms of Use
            </Link>
            <Link href="/" className=" hover:text-primary">
              Privary policy
            </Link>
            <Link href="/" className=" hover:text-primary">
              Cookie policy
            </Link>
          </nav>
        </div>
        <p className="border-t p-6 text-sm text-muted-foreground">
          &copy; Star Fitness LLC 2024
        </p>
      </footer>
      <footer className="hidden lg:block border-t">
        <div className="grid grid-cols-4 gap-8 p-6 py-12 max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2 mr-auto">
              <Star className="text-primary" />
              <p className="font-bold text-lg">Star Fitness</p>
            </Link>
            <ul className="pb-2 leading-loose text-muted-foreground">
              <li>&copy; Star Fitness, LLC</li>
              <li>info@startfitness.com</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-lg">Links</p>
            <nav className="flex flex-col space-y-4 text-sm text-muted-foreground [&>*]:w-fit">
              <Link href="/" className=" hover:text-primary">
                Home
              </Link>
              <Link href="/classes" className=" hover:text-primary">
                Classes
              </Link>
              <Link href="/#membership" className=" hover:text-primary">
                Membership
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-lg">Company</p>
            <nav className="flex flex-col space-y-4 text-sm text-muted-foreground [&>*]:w-fit">
              <Link href="/" className=" hover:text-primary">
                About Us
              </Link>
              <Link href="/" className=" hover:text-primary">
                Contact
              </Link>
              <Link href="/" className=" hover:text-primary">
                Franchising
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-lg">Legal</p>
            <nav className="flex flex-col space-y-4 text-sm text-muted-foreground [&>*]:w-fit ">
              <Link href="/" className=" hover:text-primary">
                Terms of Use
              </Link>
              <Link href="/" className=" hover:text-primary">
                Privacy policy
              </Link>
              <Link href="/" className=" hover:text-primary">
                Cookie policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
