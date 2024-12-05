"use client";

import Image from "next/image";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

export default function Tags() {
  useGSAP(() => {
    const tags = document.querySelectorAll(".tag");

    tags.forEach((tag, index) => {
      gsap.to(tag, {
        y: "15px",
        duration: 3,
        repeat: -1,
        delay: index * 0.5,
        repeatDelay: 0,
        ease: "power1.inOut",
        force3D: true,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div className="relative max-w-[320px] hidden md:block">
      <Image
        src="/svg/tags round.svg"
        alt="arrondi"
        width={320}
        height={266}
        className=""
      />
      <div className="w-32 h-10 bg-clrdarkpurple rounded-full flex items-center justify-center text-white absolute -left-8 top-16 rotate-12 tag">
        <p className="font-fontTitle text-2xl">Positive</p>
      </div>
      <div className="w-32 h-10 bg-clryellow rounded-full flex items-center justify-center absolute -right-10 top-12 -rotate-12 tag">
        <p className="font-fontTitle text-2xl">Collaborative</p>
      </div>
      <div className="w-32 h-10 bg-clrlightpurple rounded-full flex items-center justify-center absolute right-8 bottom-6 tag">
        <p className="font-fontTitle text-2xl">Adaptabilité</p>
      </div>
    </div>
  );
}
