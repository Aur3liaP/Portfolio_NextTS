import ContactCapsule from "./contactCapsule";

export default function ContactInfos() {
    return (
      <div className="flex flex-col gap-8">
        <ContactCapsule type="mail"/>
        <ContactCapsule type="tel"/>
      </div>
    );
  }