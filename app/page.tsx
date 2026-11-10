import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import EngineeringCapabilities from "@/components/sections/EngineeringCapabilities";
import EngineeringMap from "@/components/engineering/EngineeringMap";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsShowcase />
      <EngineeringCapabilities />
      <EngineeringMap />
      <Experience />
      <Contact />
    </main>
  );
}
