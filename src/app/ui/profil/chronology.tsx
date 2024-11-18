import Image from 'next/image';
import ChronologyZoom from "./chronologyZoom";

export default function Chronology() {
    return (
    <div className='relative'>
      <div className="overflow-x-auto overscroll-auto">
        <div className="flex gap-[25%] ">
            <ChronologyZoom text={"Certification\n12/2024 🤞"}/>
            <ChronologyZoom text={"👵\n1ère de réception\n2013-2024"} />
            <ChronologyZoom text={"🤵🏻‍♀️\nBAC Hôtellerie Restauration\n2011"} />
        </div>
        <div className="h-[2px] min-w-[600px] md:min-w-[900px] bg-[var(--clr-dark-purple)] my-8"></div>
        <div className="ml-[20%] flex gap-[30%]">
            <ChronologyZoom text={"✨🚀\nFormation Développeur Web\n2024"} />
            <ChronologyZoom text={"✈️\nBTS Ventes et productions touristiques\n2013"} />
        </div>
      </div>
        <Image
                src="/arrowScroll.svg"
                alt="flèche defilement"
                width={60}
                height={60}
                className="absolute -bottom-5 right-0 block xl:hidden"
              />
    </div>
    );
  }