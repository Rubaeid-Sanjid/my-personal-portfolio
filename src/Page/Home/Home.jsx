import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
    </div>
  );
};

export default Home;
