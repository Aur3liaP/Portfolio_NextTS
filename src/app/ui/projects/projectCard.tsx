
import Image from 'next/image';

export default function ProjectCard() {
    return (
      <div className="border-2 border-clryellow rounded-md h-90 w-72 flex-shrink-0 flex flex-col justify-between gap-4 py-2 px-4 items-center text-center relative">
        <Image
        src="/stars.svg"
        alt="étoiles"
        width={35}
        height={40}
        className="absolute top-1.5 right-0 block lg:hidden"
      />
        <h4 className="text-xl font-fontTitle tracking-wider">Projet de Groupe <br/>Wild Code School</h4>
        
        <h4 className="text-xl font-secondaryFont font-thin racking-widest">LES AVENTURES DE SIR GALLUS</h4>
        
        <div className="w-full font-light text-sm">

          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          
          <ul className='grid grid-cols-2 gap-2 list-disc list-inside justify-items-start mt-4'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>JAVASCRIPT</li>
            <li>JAVASCRIPT</li>
            <li>JAVASCRIPT</li>
          </ul>
        </div>

        <div className='w-full flex justify-center gap-4'>
          <a href='https://github.com/Aur3liaP/sir-gallus'>
            <Image
            src="/github (1).svg"
            alt="lien le Github"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          </a>

          <a href='none'>
            <Image
            src="/link-light.svg"
            alt="lien le Github"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          </a>
      
        </div>
    </div>
    );
  }