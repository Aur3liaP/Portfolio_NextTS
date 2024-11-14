'use client';

import { useState } from 'react';
import {navLinks} from '@/app/ui/Navbar/NavLinks'

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () =>  {
        setIsOpen(!isOpen);
      };

    return (
    <div className="md:hidden relative">
            <button onClick={toggleMenu}
                    className=" shadow-md bg-[var(--clr-light-purple)] bg-opacity-30 border-2 border-[var(--clr-dark-purple)]  rounded-full font-bold w-12 h-12 flex justify-center items-center text-center">+</button>
        <div className="">
        {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className={`cursor-pointer absolute left-0 transform transition-all duration-300 ease-in-out shadow-md bg-[var(--clr-light-purple)] bg-opacity-30 border-2 border-[var(--clr-dark-purple)] rounded-full text-xs w-12 h-12 flex justify-center items-center text-center`}
                        style={{
                            top: `${(index + 1) * 60}px`,
                            transitionDelay: `${index * 0.1}s`,
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                            zIndex: isOpen ? 1 : -1,
                        }}
                    >
                        {link.name}
                    </a>
        ))}
      </div>
    </div>
    );
  }
  