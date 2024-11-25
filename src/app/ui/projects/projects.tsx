"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useAnimation from "../../hooks/useAnimation";

import ProjectCarousel from "./projetCarousel";
import Image from "next/image";

export default function Projects() {
  const projetRef = useRef(null);
  const whirlRef = useRef(null);
  const { appear, slideInRight } = useAnimation();

  useGSAP(() => {
    appear(projetRef.current);
    slideInRight(whirlRef.current);
  }, []);

  return (
    <div ref={projetRef}>
      <div className="flex items-center gap-[5%]">
        <h3
          className="font-fontTitle text-4xl sm:text-6xl py-[15vh]"
          id="projets"
        >
          Mes projets
        </h3>
        <Image
          src="/svg/whools.svg"
          alt="tourbillons"
          width={65}
          height={65}
          ref={whirlRef}
        />
      </div>
      <ProjectCarousel />
    </div>
  );
}
