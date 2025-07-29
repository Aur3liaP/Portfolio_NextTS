export interface Stack {
  name: string;
  src: string;
}

export const frontStacks: Stack[] = [
  // { name: "HTML 5", src: "/stacks/logo-html5-svgrepo-com.svg" },
  // { name: "CSS 3", src: "/stacks/logo-css3-svgrepo-com.svg" },
  { name: "Tailwind", src: "/stacks/tailwind-css-svgrepo-com.svg" },
  { name: "JavaScript", src: "/stacks/logo-javascript-svgrepo-com.svg" },
  { name: "React.js", src: "/stacks/react-logo-programming-2-svgrepo-com.svg" },
  { name: "Next.js", src: "/stacks/nextlogo.svg" },
  { name: "Angular", src: "/stacks/angular-.svg" },
  { name: "Bootstrap", src: "/stacks/bootstrap.svg" },
];

export const backStacks: Stack[] = [
  { name: "Node.js", src: "/stacks/node-js-svgrepo-com (1).svg" },
  { name: "Express.js", src: "/stacks/express-svgrepo-com.svg" },
  { name: "MySQL", src: "/stacks/mysql-2.svg" },
  { name: "Java", src: "/stacks/java.svg" },
  { name: "Spring Boot", src: "/stacks/spring.svg" },
  { name: "UML", src: "/stacks/UML.svg" },
];

export const otherStacks: Stack[] = [
  { name: "Figma", src: "/stacks/logo-figma-svgrepo-com.svg" },
  { name: "Trello", src: "/stacks/trello-svgrepo-com.svg" },
  { name: "Unity", src: "/stacks/unity-plain.svg" },
  { name: "Docker", src: "/stacks/docker.svg" },
  { name: "Pack Office", src: "/stacks/microsoft-svgrepo-com.svg" },
  // { name: "Mailchimp", src: "/stacks/mailchimp-svgrepo-com.svg" },
  { name: "WordPress", src: "/stacks/logo-wordpress-svgrepo-com.svg" },
];

export const upcomingStacks: Stack[] = [
  { name: "PHP", src: "/stacks/php-svgrepo-com.svg" },
];
