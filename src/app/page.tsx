import Hero from "./ui/hero/Hero";
import Navbar from "./ui/navbar/Navbar";
import Profil from "./ui/profil/profil";

export default function Home() {
  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>

      <main className="mt-[12vh] w-[90%] max-w-[1440px] mx-auto ">
        <Hero />
        <Profil/>
      </main>
      <footer></footer>
    </div>
  );
}
