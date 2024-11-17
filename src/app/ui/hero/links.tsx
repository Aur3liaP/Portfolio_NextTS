import Image from 'next/image';
import Tags from './tags';
export const bioLinks = [
    { name: "Aur3liaP", src: "/github (1).svg", href: "https://github.com/Aur3liaP", width:34, height:34},
    { name: "Aurélia PIC", src: "/Linkedin.svg", href: "https://www.linkedin.com/in/aurélia-pic/", width:35, height:35},
    { name: "Mon CV", src: "/CV.svg", href: "https://drive.google.com/file/d/1zOnxW9qfDGMKeLblTGXNQ_pl1QSBS4Px/view", width:35, height:35},
  ];


export default function Links() {
    return (
      <div className='flex justify-between md:flex-col w-full'>
        {bioLinks.map((link, index) => (
          <div key={index} className='flex justify-start items-center gap-4 md:gap-16 mb-[2vh] md:mr-0'>
            <Image
                src={link.src}
                alt={link.name}
                width={link.width}
                height={link.height}
                className=""
             />
            <a
            href={link.href}
            className="underline "
          >
            {link.name}
          </a>
          </div>
        ))}
        
      </div>
    );
  }
  