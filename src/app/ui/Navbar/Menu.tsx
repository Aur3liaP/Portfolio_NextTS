"use client";

import { useState } from "react";
import { navLinks } from "@/app/lib/NavbarLinks";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative">
      <button
      type="button"
        onClick={toggleMenu}
        className=" shadow-md bg-clrlightpurple border-2 border-clrdarkpurple  rounded-full font-bold w-14 h-14 flex justify-center items-center text-center"
      >
        +
      </button>
      <div className="">
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={link.href}
            className="cursor-pointer absolute left-0 transform transition-all duration-300 ease-in-out shadow-md bg-clrlightpurple border-2 border-clrdarkpurple rounded-full text-xs w-14 h-14 flex justify-center items-center text-center"
            style={{
              top: `${(index + 1) * 65}px`,
              transitionDelay: `${index * 0.1}s`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-20px)",
              zIndex: isOpen ? 2 : -1,
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
