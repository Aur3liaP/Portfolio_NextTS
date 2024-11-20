import ContactForm from "./contactForm";
import ContactInfos from "./contactInfos";
import Image from 'next/image';

export default function Contact() {
    return (
      <div className="">
        <h3 className="font-fontTitle text-4xl sm:text-5xl py-[15vh] " id="contact">Contactez-moi</h3>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
            <ContactInfos/>
            <Image
              src="/svg/Sun.svg"
              alt="soleil"
              width={75}
              height={75}
              className=""
            />
            <ContactForm/>
        </div>
      </div>
    );
  }