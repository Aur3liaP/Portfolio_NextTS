import Chronology from "./chronology";
import Stacks from "./stacks";

export default function Profil() {
    return (
      <div className="">
        <h3 className="font-fontTitle py-[10vh] text-4xl sm:text-5xl" id="profil">À propos de moi</h3>
        <Stacks/>
        <a href="https://drive.google.com/file/d/1zOnxW9qfDGMKeLblTGXNQ_pl1QSBS4Px/view" target="_blank" rel="noopener noreferrer">
        <button className='mx-auto my-[15vh] p-2.5 bg-[var(--clr-yellow)] rounded-lg text-3xl font-light flex items-center justify-center '>Voir mon CV</button>
        </a>
        <Chronology/>
        
      </div>
    );
  }