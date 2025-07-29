import Image from "next/image";

export const bioLinks = [
  {
    name: "Aur3liaP",
    src: "/svg/github (1).svg",
    href: "https://github.com/Aur3liaP",
    width: 34,
    height: 34,
  },
  {
    name: "Aurélia PIC",
    src: "/svg/Linkedin.svg",
    href: "https://www.linkedin.com/in/aurélia-pic/",
    width: 35,
    height: 35,
  },
  {
    name: "Mon CV",
    src: "/svg/CV.svg",
    href: "https://drive.google.com/file/d/1ariDGBi0tQqLquNjQ8m9t1dLPFGPspIP/view",
    width: 35,
    height: 35,
  },
];

export default function Links() {
  return (
    <div className="flex justify-between flex-col w-full">
      {bioLinks.map((link, index) => (
        <div
          key={index}
          className="flex justify-start items-center gap-4 md:gap-16 mb-[2vh] md:mr-0"
        >
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
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
}
