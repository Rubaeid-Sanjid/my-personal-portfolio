import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Experience from "../../Components/Experience/Experience";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Education from "../../Components/Education/Education";
import Certificates from "../../Components/Certificates/Certificates";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="space-y-4">
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Home;

