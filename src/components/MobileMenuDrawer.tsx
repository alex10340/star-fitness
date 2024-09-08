"use client";

import { useState } from "react";
import { Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileMenuDrawerProps {
  className?: string;
}

export default function MobileMenuDrawer({ className }: MobileMenuDrawerProps) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Classes", href: "/classes" },
    { label: "Memberships", href: "/#membership" },
  ];

  return (
    <div className={cn("sm:hidden", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetTitle></SheetTitle>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex items-center space-x-2 mr-auto">
            <Star className="text-primary" />
            <p className="font-bold text-lg">Star Fitness</p>
          </div>
          <nav className="py-12 px-3 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
        <SheetDescription></SheetDescription>
      </Sheet>
    </div>
  );
}
