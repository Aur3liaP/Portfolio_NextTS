import Image from "next/image";
import { Project } from "../../lib/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-2 border-clryellow rounded-md h-[600px] w-72 lg:w-80 flex-shrink-0 flex flex-col justify-between gap-4 py-2 px-4 items-center text-center relative">
      <Image
        src="/svg/stars.svg"
        alt="étoiles"
        width={35}
        height={40}
        className="absolute top-1.5 right-0"
      />

      <h4 className="text-xl font-fontTitle tracking-wider">
        {project.title} <br /> {project.subtitle}
      </h4>

      <h4 className="text-xl font-secondaryFont font-thin tracking-widest">
        {project.projectName}
      </h4>

      <Image
        src={project.capture.src}
        alt={`Capture d'écran du projet ${project.projectName}`}
        width={270}
        height={145}
        className="cursor-pointer h-[145px]"
      />

      <div className="w-full font-light text-sm h-[35%]">
        <p className="h-[50%]">{project.description}</p>

        <ul className="grid grid-cols-2 gap-2 list-disc list-inside justify-items-start mt-4">
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="w-full flex justify-center gap-4">
        <a
          href={
            project.links.find((link) => link.githubHref)?.githubHref || "#"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/svg/github (1).svg"
            alt="Lien vers le GitHub"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </a>

        {project.links.some(
          (link) => link.deployHref && link.deployHref !== "none"
        ) && (
          <a
            href={
              project.links.find(
                (link) => link.deployHref && link.deployHref !== "none"
              )?.deployHref
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/svg/link-light.svg"
              alt="Lien vers le site déployé"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </a>
        )}
      </div>
    </div>
  );
}
