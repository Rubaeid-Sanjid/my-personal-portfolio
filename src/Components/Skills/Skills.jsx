import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="divider bg-neutral-content h-[1px] w-1/2 mx-auto"></div>
      <h2 className="text-neutral-content text-center text-4xl mb-5">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center items-center mt-10">
        <div className="p-4 border-2 rounded-2xl">
          <FaHtml5 className="text-[#dd4b25] text-5xl" />
          {/* <h3 className="text-neutral-content">HTML5</h3> */}
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <FaCss3Alt className="text-[#214ce5] text-5xl" />
          {/* <h3 className="text-neutral-content">CSS3</h3> */}
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <RiTailwindCssFill className="text-[#38bdf8] text-5xl" />
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <RiJavascriptFill className="text-[#efd81d] text-5xl" />
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <FaReact className="text-[#58c4dc] text-5xl" />
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <RiFirebaseFill className="text-[#f7c52b] text-5xl" />
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <FaNode className="text-[#589352] text-5xl" />
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <SiExpress className="text-neutral-content text-5xl" />
        </div>
        <div className="p-4 border-2 rounded-2xl">
          <SiMongodb className="text-[#00e661] text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
