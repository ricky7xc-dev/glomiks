import React from "react";
import { contactInfo } from "@/data/companyData";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              PT. Global Mitra Karya Sejati
            </h3>
            <p className="text-gray-300">
              Leading Indonesian energy provider and services company.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            &copy; 2024 PT. Global Mitra Karya Sejati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
