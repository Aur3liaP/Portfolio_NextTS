"use client";

import { useState, useEffect } from "react";
import Menu from "./Menu";
import { navLinks } from "@/app/ui/navbar/NavLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 h-16 flex justify-between items-center p-2 fixed top-0 w-full shadow-sm transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <p className="text-5xl font-fontTitle">AP</p>
      <Menu />
      <div className="md:flex space-x-16 pr-2 text-[var(--clr-dark-purple)] hidden">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-[var(--clr-yellow)] transition-colors duration-300 text-lg"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
