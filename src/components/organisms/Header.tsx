"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                src={"/images/glomiks-logo.png"}
                alt="Glomiks Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className={`text-base font-medium ${
                pathname === "/" ? "text-[#e21e26]" : "text-gray-500"
              } hover:text-gray-900`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-base font-medium ${
                pathname.startsWith("/about")
                  ? "text-[#e21e26]"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className={`text-base font-medium ${
                pathname.startsWith("/products")
                  ? "text-[#e21e26]"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium ${
                pathname.startsWith("/contact")
                  ? "text-[#e21e26]"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
