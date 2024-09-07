import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClipboardPen } from "lucide-react";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 sm:py-12">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
        <div className="order-2 sm:order-1 flex flex-col justify-center max-w-lg">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to a new level of
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
              &nbsp;fitness.
            </span>
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Link href="/join" className="mt-6">
            <Button className="w-full px-6" size={"lg"}>
              <ClipboardPen className="mr-2" />
              Sign Up
            </Button>
          </Link>
        </div>

        <div className="relative aspect-[16/9] rounded-lg border order-1 sm:order-2">
          <Image
            src={"/hero2.jpg"}
            fill
            alt="hero image"
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <h2 className="my-12 text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        This is us.
      </h2>
      <Gallery />
      <hr className="my-12" />
      <h2 className="my-12 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        We have over 200 locations worldwide.
      </h2>
    </div>
  );
}
