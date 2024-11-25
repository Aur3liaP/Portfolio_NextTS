'use client'
import Image from 'next/image';
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
          }
        );
      });

    return (
      <div className="flex justify-around items-center gap-8">
        <div className='flex flex-col items-center relative'>
            <Image
                src="/profil.jpg"
                alt="photo de profil"
                width={150}
                height={150}
                className='rounded-full sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]'
            />
            <Image
                src="/svg/arrow.svg"
                alt="flèche"
                width={77}
                height={69}
                className='arrow sm:w-[92px] sm:h-[83px] md:w-[110px] md:h-[100px] lg:w-[131px] lg:h-[121px] absolute bottom-[-121px] lg:right-2'
            />
        </div>
            <div className='text-center flex flex-col min-w-[50%]'>
                <h1 className='text-2xl md:text-6xl lg:text-8xl '>
                    Aurélia PIC
                </h1>
                <div className=' '>
                <h2 className='text-xl md:text-4xl lg:text-7xl tracking-widest font-fontTitle'>
                        Développeuse
                    </h2>
                <div className='relative inline-block'>
                    <h2 className='text-xl md:text-4xl lg:text-7xl tracking-widest font-fontTitle'>
                        Web
                    </h2>
                    <Image
                    src="/svg/whool.svg"
                    alt="spirale"
                    width={42}
                    height={24}
                    className="absolute -translate-y-[90%] z-[-1] md:w-[120px] md:h-[64px] lg:w-[168px] lg:h-[89px]"
                    />
                </div>
                </div>
            </div>
      </div>
    );
  }
  