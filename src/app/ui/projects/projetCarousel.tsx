'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { projectData } from './projectsData';
import ProjectCard from './projectCard';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ProjectCarousel() {
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
  
    const reversedProjects = projectData.slice().reverse();
    const groupSize = 3;
  
    const groupedProjects = [];
    for (let i = 0; i < reversedProjects.length; i += groupSize) {
      groupedProjects.push(reversedProjects.slice(i, i + groupSize));
    }
  
    useGSAP(() => {
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          { x:-100, opacity: 0 },
          { x:0, opacity: 1, duration: 1, ease: 'power2.out' }
        );
      }
    }, [currentGroupIndex]);
  
    const nextGroup = () =>
      setCurrentGroupIndex(
        (prevIndex) => (prevIndex + 1) % groupedProjects.length
      );
    const prevGroup = () =>
      setCurrentGroupIndex(
        (prevIndex) =>
          (prevIndex - 1 + groupedProjects.length) % groupedProjects.length
      );
  
    return (
      <div className="relative w-full flex flex-col items-center">
  
        <div
          ref={carouselRef} 
          className="flex overflow-hidden justify-center w-full gap-4"
        >
          {groupedProjects[currentGroupIndex].map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 flex justify-center w-full lg:w-1/3"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevGroup}
            className="p-2 bg-clrlightpurple rounded-full shadow-md hover:bg-clryellow"
          >
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextGroup}
            className="p-2 bg-clrlightpurple rounded-full shadow-md hover:bg-clryellow"
          >
            ▶
          </button>
        </div>
      </div>
    );
  }