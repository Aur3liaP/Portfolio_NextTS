"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useAnimation from "../../hooks/useAnimation";

import Chronology from "./chronology";
import Stacks from "./stacks";
import Image from "next/image";

export default function Profil() {
  const profilRef = useRef(null);
  const { appear } = useAnimation();
  useGSAP(() => {
    appear(profilRef.current);
  }, []);

  return (
    <div ref={profilRef}>
      <div className="relative py-[15vh] inline-block">
        <h3 className="font-fontTitle text-4xl sm:text-6xl" id="profil">
          À propos de moi
        </h3>
        <Image
          src="/svg/yellowline.svg"
          alt="tourbillons"
          width={100}
          height={23}
          className="absolute -right-8 -translate-y-2"
        />
      </div>
      <Stacks />
      <a
        href="https://drive.google.com/file/d/1ariDGBi0tQqLquNjQ8m9t1dLPFGPspIP/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="mx-auto my-[15vh] p-2.5 bg-clryellow rounded-lg text-3xl font-light flex items-center justify-center shadow hover:scale-105 duration-300">
          Voir mon CV
        </button>
      </a>
      <Chronology />
    </div>
  );
}
