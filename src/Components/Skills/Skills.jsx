import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div id="skills" className="mt-8 lg:mt-24">
      <div className="divider bg-neutral-content h-[1px] lg:w-1/2 w-3/4 mx-auto my-12"></div>
      <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{y: -100, opacity: 0}} transition={{duration: 1.5}} className="text-neutral-content font-semibold text-center text-4xl mb-5">
        Skills
      </motion.h2>
      <motion.div whileInView={{opacity: 1, y: 0}} initial={{y: 100, opacity: 0}} transition={{duration: 1.5}} className="flex flex-wrap gap-6 justify-center items-center mt-10">
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <FaHtml5 className="text-[#dd4b25] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <FaCss3Alt className="text-[#214ce5] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <RiTailwindCssFill className="text-[#38bdf8] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <RiJavascriptFill className="text-[#efd81d] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <FaReact className="text-[#58c4dc] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <RiFirebaseFill className="text-[#f7c52b] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <FaNode className="text-[#589352] text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <SiExpress className="text-neutral-content text-3xl lg:text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          <SiMongodb className="text-[#00e661] text-3xl lg:text-5xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
