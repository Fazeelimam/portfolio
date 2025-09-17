import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/2.jpg";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Hafiz Md. Fazeel
            </motion.h1>

            <motion.span
              variants={container}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Engineering Student & Full-Stack Developer
            </motion.span>

            <motion.p
              variants={container}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-16 mt-12">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="Profile"
              className="w-[300px] h-auto border border-gray-400 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
