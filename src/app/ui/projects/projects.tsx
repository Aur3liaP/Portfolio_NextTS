import ProjectCarousel from "./projetCarousel";
import Image from 'next/image';

export default function Projects() {
    return (
      <div className="">
        <div className="flex items-center gap-[5%]">
            <h3 className="font-fontTitle text-4xl sm:text-6xl py-[15vh]" id="projets">Mes projets</h3>
            <Image
              src="/svg/whools.svg"
              alt="tourbillons"
              width={65}
              height={65}
              className=""
            />
        </div>
        <ProjectCarousel/>
      </div>
    );
  }