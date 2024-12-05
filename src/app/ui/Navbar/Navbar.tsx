"use client";

import { useState, useEffect } from "react";
import Menu from "./Menu";
import { navLinks } from "../../lib/NavbarLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`z-50 h-16 flex justify-between items-center p-2 fixed top-0 w-full shadow-sm transition-all duration-300 ${
        isScrolled ? "bg-white/60 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <button type="button" className="text-5xl font-fontTitle" onClick={handleNavigation}>
        AP
      </button>
      <Menu />
      <div className="md:flex space-x-16 pr-2 text-clrdarkpurple hidden">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="hover:text-clryellow transition-colors duration-300 text-lg"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
