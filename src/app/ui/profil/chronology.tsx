"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useAnimation from "../../hooks/useAnimation";

import Image from "next/image";
import ChronologyZoom from "./chronologyZoom";

export default function Chronology() {
  const chronoRef = useRef(null);
  const { appear } = useAnimation();
  useGSAP(() => {
    appear(chronoRef.current);
  }, []);

  return (
    <div className="relative" ref={chronoRef}>
      <div className="overflow-x-auto overscroll-auto">
        <div className="flex gap-[20%] justify-start xl:justify-center">
          <ChronologyZoom text={"Certification\n12/2024 🤞"} />
          <ChronologyZoom text={"👵\n1ère de réception\n2013-2024"} />
          <ChronologyZoom text={"🤵🏻‍♀️\nBAC Hôtellerie Restauration\n2011"} />
        </div>
        <div className="h-[2px] min-w-[37.5rem] md:min-w-[50rem] bg-clrdarkpurple my-8"/>
        <div className="flex pl-1/5 xl:pl-0 gap-[25%] justify-start xl:justify-center">
          <ChronologyZoom text={"✨🚀\nFormation Développeur Web\n2024"} />
          <ChronologyZoom
            text={"✈️\nBTS Ventes et productions touristiques\n2013"}
          />
        </div>
      </div>
      <Image
        src="/svg/arrowScroll.svg"
        alt="flèche defilement"
        width={60}
        height={60}
        className="absolute -bottom-5 right-0 block lg:hidden"
      />
    </div>
  );
}
