import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardPen } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="order-2 sm:order-1 flex flex-col justify-center max-w-lg">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Welcome to a new level of
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-rose-700">
                &nbsp;fitness.
              </span>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <Link href="/join" className="mt-6">
              <Button className="w-full px-6" size={"lg"}>
                <ClipboardPen className="mr-2" />
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="order-1 sm:order-2">
            <video autoPlay loop muted playsInline className="rounded-lg">
              <source src="/hero_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          This is us.
        </h2>
      </div>
    </>
  );
}
