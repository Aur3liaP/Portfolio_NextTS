import Image from "next/image";

type ContactCapsuleProps = {
  type: "mail" | "tel";
};

export default function ContactCapsule({ type }: ContactCapsuleProps) {
  return (
    <div className="h-20 w-72 ring-4 ring-clrlightpurple rounded-full flex items-center justify-between">
      <div className="h-20 w-20 rounded-full bg-clrdarkpurple flex justify-center items-center">
        <Image
          src={type === "mail" ? "/svg/mail.svg" : "/svg/telephone.svg"}
          alt=""
          width={35}
          height={35}
          className=""
        />
      </div>
      <div className="w-[70%] flex justify-center">
        {type === "mail" ? (
          <a href="mailto:pic.aurelia@gmail.com">
            <p className="pr-2 underline underline-offset-4 decoration-0">
              pic.aurelia@gmail.com
            </p>
          </a>
        ) : (
          <a href="tel:+33648002444">
            <p className="self-center">06 48 00 24 44</p>
          </a>
        )}
      </div>
    </div>
  );
}
