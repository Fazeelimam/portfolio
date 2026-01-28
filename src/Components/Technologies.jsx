import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiLaravel,
  SiDotnet,
  SiAngular,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiCplusplus,
  SiPython,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { DiVisualstudio, DiDatabase } from "react-icons/di";
import { FaAndroid } from "react-icons/fa";
import { motion } from "framer-motion";

// 🎯 Combined slide-in + bounce animation
const IconVariant = (duration) => ({
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: [10, -10],
    transition: {
      x: { duration: 0.6 },
      opacity: { duration: 0.6 },
      y: {
        delay: 0.6,
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
});

// 🧠 Skills grouped by category
const techSections = [
  {
    title: "Frontend Technologies",
    skills: [
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiAngular, name: "Angular", color: "#DD0031" },
      { icon: SiReact, name: "React JS", color: "#61DAFB" },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
      { icon: SiDotnet, name: "ASP.NET / .NET", color: "#512BD4" },
      { icon: SiExpress, name: "Express JS", color: "#000000" },
      { icon: SiNodedotjs, name: "Node JS", color: "#339933" },
      { icon: SiPhp, name: "PHP Core", color: "#777BB4" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiCplusplus, name: "C++", color: "#00599C" },
      { icon: DiVisualstudio, name: "C# / Visual Studio", color: "#5C2D91" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { icon: FaAndroid, name: "Android Dev", color: "#3DDC84" },
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: SiDart, name: "Dart", color: "#0175C2" },
    ],
  },
  {
    title: "Database & Office Tools",
    skills: [
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: DiDatabase, name: "MS SQL (Generic)", color: "#CC2927" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Technologies & Skills
      </motion.h1>

      {techSections.map((section, secIndex) => (
        <div key={secIndex} className="mb-12">
          <h3 className="mb-6 text-center text-2xl text-cyan-400 font-semibold">
            {section.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {section.skills.map((tech, index) => (
              <motion.div
                key={index}
                variants={IconVariant(2 + (index % 3) * 0.3)} // slight variation in bounce
                initial="initial"
                animate="animate"
                className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 hover:scale-110 transition-transform w-24"
              >
                <tech.icon className="text-5xl" style={{ color: tech.color }} />
                <span className="mt-2 text-center text-sm text-white">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
