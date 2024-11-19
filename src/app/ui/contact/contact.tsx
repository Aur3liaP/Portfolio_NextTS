import ContactForm from "./contactForm";
import ContactInfos from "./contactInfos";

export default function Contact() {
    return (
      <div className="">
        <h3 className="font-fontTitle text-4xl sm:text-5xl py-[10vh] " id="contact">Contactez-moi</h3>
        <div className="flex justify-around">
            <ContactInfos/>
            <ContactForm/>
        </div>
      </div>
    );
  }