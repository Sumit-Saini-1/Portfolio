import AboutMe from "../components/sections/aboutMe";
import Blog from "../components/sections/blogs";
import Contact from "../components/sections/contact";
import Experience from "../components/sections/experience";
import LandingSection from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/skills";
import Testimonials from "../components/sections/testimonial";


export default function HomePage() {
  return (
    <>
      <LandingSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      {/* <Blog /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
