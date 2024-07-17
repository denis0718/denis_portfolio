// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import { Footer } from "@/components";

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <PopularClients />
      <Footer />
    </>
  );
}
