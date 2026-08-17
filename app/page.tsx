import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Industries } from "@/components/Industries";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Industries />
        <Journey />
        <Experience />
        <Expertise />
        <Projects />
        <Achievements />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
