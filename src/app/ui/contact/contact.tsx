"use client";

import ContactForm from "./contactForm";
import ContactInfos from "./contactInfos";
import Image from "next/image";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useAnimation from "../../hooks/useAnimation";

export default function Contact() {
  const contactRef = useRef(null);
  const { appear } = useAnimation();
  useGSAP(() => {
    appear(contactRef.current);
  }, []);

  useGSAP(() => {
    gsap.to(".whirl", {
      rotate: 360,
      repeat: -1,
      ease: "linear",
      force3D: true,
      duration: 3,
      repeatDelay: 0,
    });
  }, []);

  return (
    <div ref={contactRef}>
      <div className="relative py-[15vh] flex justify-between">
        <h3 className="font-fontTitle text-4xl sm:text-6xl" id="contact">
          Contactez-moi
        </h3>
        <Image
          src="/svg/purpleline.svg"
          alt="ligne violette"
          width={60}
          height={40}
          className="absolute translate-y-8 sm:translate-y-12 translate-x-full sm:w-[100px]"
        />
        <Image
          src="/svg/littlewhirl.svg"
          alt="tourbillon"
          width={70}
          height={70}
          className="whirl"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
        <ContactInfos />
        <Image
          src="/svg/Sun.svg"
          alt="soleil"
          width={75}
          height={75}
        />
        <ContactForm />
      </div>
    </div>
  );
}
