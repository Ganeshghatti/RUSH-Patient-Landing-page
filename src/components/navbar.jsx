"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items
  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Health Records", href: "#health-records", id: "health-records" },
    { name: "Benefits", href: "#benefits", id: "benefits" },
    { name: "Contact", href: "#cta", id: "cta" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <div className="relative  w-28 cursor-pointer overflow-hidden flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  className="object-contain"
                  priority
                  width={80}
                  height={80}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </div>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#F5F8FF] rounded-full px-10 py-4">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-[#0069FD] font-medium transition-colors cursor-pointer"
                      onClick={(e) => scrollToSection(item.id, e)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Right buttons */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={"https://app.rushdr.com/patient/register"}>
              <Button
                size="lg"
                variant={"outline"}
                className="cursor-pointer hover:bg-[#0069FD] border-2 text-[#0069FD] border-[#0069FD] bg-white h-11 hover:text-white"
              >
                Register
              </Button>
            </Link>
          </motion.div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#F5F8FF] rounded-lg p-6 mb-4 shadow-inner">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-[#0069FD] font-medium transition-colors"
                      onClick={(e) => {
                        setIsOpen(false);
                        scrollToSection(item.id, e);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <Button
                className="w-full bg-[#0069FD] hover:bg-blue-600 text-white"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Button>
              <Button
                variant="outline"
                className="w-full border-2 border-[#0069FD] text-[#0069FD] hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
