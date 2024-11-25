import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useAnimation from "../../hooks/useAnimation";

import ContactCapsule from "./contactCapsule";

export default function ContactInfos() {
  const capsuleRef = useRef(null);
  const { slideInLeft } = useAnimation();
  useGSAP(() => {
    slideInLeft(capsuleRef.current);
  }, []);

  return (
    <div className="flex flex-col gap-8" ref={capsuleRef}>
      <ContactCapsule type="mail" />
      <ContactCapsule type="tel" />
    </div>
  );
}
