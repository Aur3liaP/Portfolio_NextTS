"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

export default function Title() {
  useGSAP(() => {
    gsap.fromTo(
      ".arrow",
      { scale: 0.8, delay: 2 },
      {
        scale: 1,
        duration: 2,
        ease: "elastic.out(1.5, 0.2)",
      },
    );
  });

  return (
    <div className="flex justify-around items-center gap-8">
      <div className="flex flex-col items-center relative">
        <Image
          src="/profil.jpg"
          alt="photo de profil"
          width={150}
          height={150}
          className="rounded-full sm:w-[12.5rem] sm:h-[12.5rem] md:w-[18.75rem] md:h-[18.75rem]"
        />
        <Image
          src="/svg/arrow.svg"
          alt="flèche"
          width={77}
          height={69}
          className="arrow sm:w-[5.75rem] sm:h-20 md:w-28 md:h-[6.25rem] lg:w-32 lg:h-[7.56rem] absolute bottom-[-7.56rem] lg:right-2"
        />
      </div>
      <div className="text-center flex flex-col min-w-3/6">
        <h1 className="text-2xl md:text-6xl lg:text-8xl ">Aurélia PIC</h1>
        <div className=" ">
          <h2 className="text-xl md:text-4xl lg:text-7xl tracking-widest font-fontTitle">
            Développeuse
          </h2>
          <div className="relative inline-block">
            <h2 className="text-xl md:text-4xl lg:text-7xl tracking-widest font-fontTitle">
              Web
            </h2>
            <Image
              src="/svg/whool.svg"
              alt="spirale"
              width={42}
              height={24}
              className="absolute -translate-y-[90%] z-[-1] md:w-[7.5rem] md:h-16 lg:w-[10.5rem] lg:h-[5.56rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
