import Chronology from "./chronology";
import Stacks from "./stacks";
import Image from 'next/image';

export default function Profil() {
    return (
      <div className="">
        <div className="relative py-[15vh] inline-block">
          <h3 className="font-fontTitle text-4xl sm:text-5xl" id="profil">À propos de moi</h3>
          <Image
              src="/svg/yellowline.svg"
              alt="tourbillons"
              width={100}
              height={23}
              className="absolute -right-8 -translate-y-2"
            />
        </div>
        <Stacks/>
        <a href="https://drive.google.com/file/d/1zOnxW9qfDGMKeLblTGXNQ_pl1QSBS4Px/view" target="_blank" rel="noopener noreferrer">
        <button className='mx-auto my-[15vh] p-2.5 bg-[var(--clr-yellow)] rounded-lg text-3xl font-light flex items-center justify-center shadow'>Voir mon CV</button>
        </a>
        <Chronology/>
        
      </div>
    );
  }