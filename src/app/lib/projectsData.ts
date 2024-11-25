export interface ProjectLink {
  githubHref: string;
  deployHref: string;
}

export interface ProjectCapture {
  src: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  projectName: string;
  description: string;
  skills: string[];
  links: ProjectLink[];
  capture: ProjectCapture;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Projet de Groupe",
    subtitle: "Wild Code School",
    projectName: "LES AVENTURES DE SIR GALLUS",
    description: "Création d'un jeu narratif et interactif en HTML, CSS et JS.",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/sir-gallus",
        deployHref: "none",
      },
    ],
    capture: {
      src: "/projects/SirGallus.png",
    },
  },
  {
    id: 2,
    title: "Hackathon",
    subtitle: "Wild Code School",
    projectName: "LA CANTINA DE JABBA",
    description:
      "Découverte de React et de l’utilisation d’une API. Site de rencontre sur le thème de StarWars.",
    skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "API"],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/galactic-love",
        deployHref: "https://la-cantina-de-jabba.netlify.app/",
      },
    ],
    capture: {
      src: "/projects/Cantina.png",
    },
  },
  {
    id: 3,
    title: "Projet de Groupe",
    subtitle: "Wild Code School",
    projectName: "L'UNIVERS DE BLIBLI",
    description:
      "Création d'un site esthétique et reposant sur l’univers des Studios Ghibli, alliant une bibliothèque et un espace immersif 3D menant à divers parallax et mini-jeux .",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "API",
      "NODE.JS",
      "EXPRESS",
      "SPLINE",
    ],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/L-univers-de-Blibli",
        deployHref: "https://univers-de-blibli.netlify.app/",
      },
    ],
    capture: {
      src: "/projects/Blibli.png",
    },
  },
  {
    id: 4,
    title: "Hackathon",
    subtitle: "Wild Code School",
    projectName: "CYBERMART",
    description:
      "Retour dans les années 90 avec la création d’un site de e-commerce à l'aide des technologies actuelles. ",
    skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "API", "NODE.JS", "EXPRESS"],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/Hackathon2",
        deployHref: "https://cyber-mart.netlify.app/",
      },
    ],
    capture: {
      src: "/projects/CyberMART.png",
    },
  },
  {
    id: 5,
    title: "Hackathon",
    subtitle: "Wild Code School",
    projectName: "Renardor's Revenge",
    description:
      "Création d’un jeu 2D de type Tower Defense sur 4 niveaux. Découverte complète de UNITY et du langage C#.",
    skills: ["UNITY", "C#"],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/Renardors-Revenge",
        deployHref: "none",
      },
    ],
    capture: {
      src: "/projects/Renardor's Revenge.png",
    },
  },
  {
    id: 6,
    title: "Projet Solo",
    subtitle: "Wild Code School",
    projectName: "POKEDEX TEAM ROCKET",
    description:
      "Challenge personnel - Découverte de React Native et TypeScript au travers d'un projet full stack.",
    skills: [
      "REACT NATIVE",
      "EXPO",
      "TYPESCRIPT",
      "NODE.JS",
      "EXPRESS",
      "SQLITE",
    ],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/PokedexCRUD-ReactNative",
        deployHref: "none",
      },
    ],
    capture: {
      src: "/projects/Pokedex.png",
    },
  },
  {
    id: 7,
    title: "Projet de groupe",
    subtitle: "Wild Code School",
    projectName: "Chemin MONTESSORI",
    description:
      "Création d'un site esthétique pour un client désirant vendre des ateliers et gérer un blog sur le thème de l’éducation MONTESSORI (utilisateur+Admin).",
    skills: ["REACT", "API", "NODE.JS", "EXPRESS", "JWT", "MULTER", "MYSQL"],
    links: [
      {
        githubHref: "https://github.com/Aur3liaP/Chemin-Montessori",
        deployHref: "none",
      },
    ],
    capture: {
      src: "/projects/Montessori.png",
    },
  },
];
