import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Certificates from "../../Components/Certificates/Certificates";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Certificates></Certificates>
        <Contact></Contact>
    </div>
  );
};

export default Home;
