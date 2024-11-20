import Contact from "./ui/contact/contact";
import Hero from "./ui/hero/Hero";
import Navbar from "./ui/navbar/Navbar";
import Profil from "./ui/profil/profil";
import Projects from "./ui/projects/projects";
import ScrollToTopButton from "./ui/ScrollToTopButton";

export default function Home() {
  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>
      <main className="mt-[12vh] w-[90%] max-w-[1440px] mx-auto ">
        <ScrollToTopButton/>
        <Hero />
        <Profil/>
        <Projects/>
        <Contact/>
      </main>
      <footer className="mt-[10vh] flex justify-center items-center h-14 top-0 w-full shadow-sm bg-white">
        <p className="tracking-wider">© PIC Aurélia - 2024 - ❤️</p>
      </footer>
    </div>
  );
}
