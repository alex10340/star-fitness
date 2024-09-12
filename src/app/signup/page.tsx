"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

type Membership = "full" | "weekend" | null;

export default function Signup() {
  const [membership, setMembership] = useState<Membership>(null);

  useEffect(() => {
    console.log(membership);
  }, [membership]);

  return (
    <div className="max-w-screen-xl mx-auto p-6 py-12">
      <h1
        id="membership"
        className="text-center scroll-m-28 text-4xl font-extrabold tracking-tight lg:text-5xl "
      >
        Sign
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
          &nbsp;Up.
        </span>
      </h1>

      <p className="text-center text-muted-foreground leading-7 mt-6">
        We offer two memberships, pick the one that&apos;s right for you! Both
        get you access to all of our gyms.
      </p>

      <div className="flex justify-center flex-wrap md:gap-8">
        <div className="grid grid-cols-1 gap-8 my-12 md:max-w-[45%]">
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
              <Button
                onClick={() => setMembership("full")}
                className={`${
                  membership === "full" && " border-primary"
                } ml-2 w-28 transition-all duration-200`}
                variant={"outline"}
              >
                {membership === "full" ? "Selected!" : "Select"}
              </Button>
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
                <span className="text-primary text-3xl font-bold">$8.99</span>
                /mo*
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm underline cursor-pointer">Learn More</p>
              <Button
                onClick={() => setMembership("weekend")}
                className={`${
                  membership === "weekend" && " border-primary"
                } ml-2 w-28 transition-all duration-200`}
                variant={"outline"}
              >
                {membership === "weekend" ? "Selected!" : "Select"}
              </Button>
            </CardFooter>
          </Card>
          <p className="mx-auto text-muted-foreground leading-5 text-sm">
            *Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus aliquam eaque nisi libero vitae? Impedit corporis
            vero vel, provident, laborum, quo pariatur a distinctio autem harum
            quis placeat omnis repellat voluptatum assumenda maxime sunt earum
            ea nihil? Provident, dolor laboriosam.
          </p>
        </div>
        <div className="grid gap-8 mb-12 md:my-12 md:w-[45%]">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Enter your contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main Street" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Your city" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="postalcode">Postal code</Label>
                    <Input id="postalcode" placeholder="Your postal code" />
                  </div>
                </div>
              </form>
            </CardContent>
            {/* <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </CardFooter> */}
          </Card>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Enter your payment information</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid grid-cols-2 w-full items-center gap-4">
                  <div className="flex flex-col col-span-2 space-y-1.5">
                    <Label htmlFor="card">Card number</Label>
                    <Input id="card" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="expiry">Expiry date</Label>
                    <Input id="expiry" placeholder="Expiry date" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <Button className="ml-2 px-6 bg-gradient-to-b from-rose-500 to-rose-600">
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
