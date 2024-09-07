import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClipboardPen } from "lucide-react";
import Gallery from "@/components/Gallery";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto p-6 sm:py-12">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
        <div className="order-2 sm:order-1 flex flex-col justify-center max-w-lg sm:py-12">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
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
            <Button
              className="w-full px-6 bg-gradient-to-b from-rose-500 to-rose-600"
              size={"lg"}
            >
              <ClipboardPen className="mr-2 " />
              Sign Up
            </Button>
          </Link>
        </div>

        <div className="relative min-h-[200px] rounded-lg border order-1 sm:order-2">
          <Image
            src={"/hero2.jpg"}
            fill
            alt="hero image"
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <h2 className="my-12 text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        This is&nbsp;
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
          us.
        </span>
      </h2>
      <Gallery />

      <hr className="my-12" />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-12">
        <div className="order-2 sm:order-1 py-12">
          <h2 className="mt-12  scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            We have over
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
              &nbsp;200 locations&nbsp;
            </span>
            worldwide.
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
        </div>
        <div className="order-1 sm:order-2 relative min-h-[200px] overflow-hidden border rounded-lg sm:row-span-2">
          <Image
            src={"/location.jpg"}
            fill
            alt="Gallery image"
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-12">
        <div className="relative min-h-[200px] overflow-hidden border rounded-lg sm:row-span-2">
          <Image
            src={"/welcome.jpg"}
            fill
            alt="Gallery image"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="py-12">
          <h2 className="mt-12 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Everybody is
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
              &nbsp;welcome.&nbsp;
            </span>
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
        </div>
      </div>
      <hr className="my-12" />

      <h2
        id="membership"
        className="text-center scroll-m-28 text-4xl font-extrabold tracking-tight lg:text-5xl "
      >
        Choose your
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
          &nbsp;Membership.
        </span>
      </h2>
      <p className="md:px-6 text-center mx-auto text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
        We offer two memberships, pick the one that's right for you! Both get
        you access to all of our gyms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 md:p-6 max-w-[900px] mx-auto">
        <Card className="border-rose-800 border-2">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <p>Full Membership</p>
              <Badge>Best value!</Badge>
            </CardTitle>
            <CardDescription>Access to our gyms at any time</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Starting at</p>
            <p>
              <span className="text-primary text-3xl font-bold">$32.99</span>
              /mo*
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm underline cursor-pointer">Learn More</p>
            <Link href="/join" className="pl-2">
              <Button className="px-6 bg-gradient-to-b from-rose-500 to-rose-600">
                Sign Up
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Weekend Membership</CardTitle>
            <CardDescription>Weekend access to our gyms</CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <p>Starting at</p>
            <p>
              <span className="text-primary text-3xl font-bold">$8.99</span>/mo*
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm underline cursor-pointer">Learn More</p>
            <Link href="/join" className="pl-2">
              <Button className="px-6 bg-gradient-to-b from-rose-500 to-rose-600">
                Sign Up
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <p className="sm:col-span-2 mx-auto text-muted-foreground leading-5 text-sm">
          *Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus aliquam eaque nisi libero vitae? Impedit corporis vero
          vel, provident, laborum, quo pariatur a distinctio autem harum quis
          placeat omnis repellat voluptatum assumenda maxime sunt earum ea
          nihil? Provident, dolor laboriosam.
        </p>
      </div>

      <div className="h-[1000px]"></div>
    </div>
  );
}
