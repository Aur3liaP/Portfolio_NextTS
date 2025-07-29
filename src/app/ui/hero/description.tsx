import Image from "next/image";

export default function Description() {
  return (
    <div className="flex justify-end md:justify-center gap-8 ">
      <div className="text-center relative flex flex-col items-center justify-start gap-2 w-3/5 md:w-3/6 mt-[5vh] md:ml-12 lg:max-w-[30%] ">
        <p className="">
          Après plus de 11 ans d&apos;expérience dans le tourisme et la relation
          client, je me réoriente vers le développement web, un domaine qui
          m&apos;a toujours fasciné.
        </p>
        <p>
          Je suis actuellement à l&apos;écoute de nouvelles opportunités en
          Alternance ou en CDI.
        </p>
        <Image
          src="/svg/draw.svg"
          alt="décor gribouilli"
          width={130}
          height={58}
        />
      </div>
    </div>
  );
}
