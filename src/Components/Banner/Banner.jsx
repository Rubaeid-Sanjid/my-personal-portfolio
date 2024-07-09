import profileImg from "../../assets/images/Portfolio_Profile.jpg";
import { motion } from "framer-motion";

const delayAnimation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Banner = () => {
  return (
    <div className="hero min-h-screen text-neutral-content mt-12">
      <div className="flex justify-center items-center px-3 lg:px-24 gap-10 lg:gap-6 flex-col-reverse lg:flex-row">
        <div className="flex-1">
          <motion.h1
            variants={delayAnimation(1)}
            initial="hidden"
            animate="visible"
            className="text-4xl lg:text-5xl font-bold"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#7bdaeb] to-[#00BFFF] text-transparent bg-clip-text">
              Rubaeid Sanjid
            </span>
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="py-6"
          >
            I'm a Junior Web Developer. I specialize in creating full-stack web
            applications using Tailwind CSS, JavaScript, React and Node JS. I'm
            always eager to learn and take on new challenges.
          </motion.p>
          <motion.a
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            href="#contact"
            className="btn bg-gradient-to-r from-[#3672b6] to-[#00BFFF] border-none text-white lg:text-lg uppercase"
          >
            Contact Me
          </motion.a>
        </div>
        <div className="flex-1 max-w-sm">
          <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.5, delay: 1.2}}
            src={profileImg}
            className="rounded-lg shadow-lg shadow-neutral-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
