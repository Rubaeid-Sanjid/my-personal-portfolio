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
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="text-neutral-content font-semibold text-center text-4xl mb-5"
      >
        Skills
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap gap-6 justify-center items-center mt-10"
      >
        {/* <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-2 rounded-2xl"
        >
          
        </motion.div> */}

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <FaHtml5 className="text-[#dd4b25] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>HTML</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <FaCss3Alt className="text-[#214ce5] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>CSS</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <RiTailwindCssFill className="text-[#38bdf8] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>Tailwind CSS</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <RiJavascriptFill className="text-[#efd81d] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>JavaScript</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <FaReact className="text-[#58c4dc] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>React JS</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <RiFirebaseFill className="text-[#f7c52b] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>Firebase</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <FaNode className="text-[#589352] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>Node.js</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <SiExpress className="text-neutral-content text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>Express.js</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="group h-24 w-24 [perspective:1000px] border-2 rounded-2xl"
        >
          <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full flex justify-center items-center">
              <SiMongodb className="text-[#00e661] text-3xl lg:text-5xl" />
            </div>

            {/* Back Side */}
            <div className="absolute h-full w-full flex justify-center items-center rounded-2xl text-slate-200 bg-gray-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3>MongoDB</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
