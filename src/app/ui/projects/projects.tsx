import ProjectCarousel from "./projetCaroussel";

export default function Projects() {
    return (
      <div className="pt-[10vh]">
        <h3 className="font-fontTitle text-4xl sm:text-5xl pb-[10vh]" id="projets">Mes projets</h3>
        <ProjectCarousel/>
 
      </div>
    );
  }