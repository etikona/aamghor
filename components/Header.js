"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between px-4 md:px-6 py-3 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      } bg-yellow-500 text-white relative`}
    >
      {/* Logo (Left) */}
      <Link
        href="/"
        className="flex items-center hover:scale-105 transition-transform duration-200 z-10"
      >
        <Image
          src={logo}
          alt="AAMGHOR Logo"
          width={200}
          height={200}
          className="w-12 md:w-16 h-auto object-contain"
          priority
        />
      </Link>

      {/* Center Text */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg md:text-2xl font-bold">
        AAMGHOR.COM
      </div>

      {/* Desktop Navigation (Right) */}
      <ul className="hidden md:flex items-center space-x-6 text-sm font-medium z-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
                pathname === link.href
                  ? "text-white after:w-full after:bg-white"
                  : "text-white/80 hover:text-white after:w-0 after:bg-white hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu (Right) */}
      <div className="md:hidden z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 hover:bg-yellow-600 text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-yellow-600 text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  src={logo}
                  alt="AAMGHOR Logo"
                  width={80}
                  height={40}
                  className="w-32 h-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-1.5 px-4 text-base font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:bg-white/10 text-2xl font-bold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
