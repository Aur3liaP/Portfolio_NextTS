import Hero from "./ui/hero/Hero";
import Navbar from "./ui/Navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <header className="">
        <Navbar/>
      </header>

      <main className="mt-[16vh] w-[90%] max-w-[1440px] mx-auto">
        <Hero/>
      </main>
      <footer>

      </footer>
    </div>
  );
}
