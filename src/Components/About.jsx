// import { ABOUT_TEXT } from "../constants"

// const About = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//         <h2 className="my-20 text-center text-4xl">
//             About 
//             <span className="text-neutral-500"> Me</span>
//             </h2>
//             <div className="flex flex-wrap">
//                 <div className="w-full lg:w-1/2 lg:p-8">
//                  <div className="flex items-center justify-center">
//                     {/* <img src="" alt="" /> */}
//                  </div>
//                 <div className="w-full lg:w-1/2">
//                 <div className="flex justify-center lg:justify-start">
//                     <p>
//                         {ABOUT_TEXT}
//                     </p>
//                 </div>
//                 </div>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default About





    // import { ABOUT_TEXT } from "../constants";
    // import aboutpic from "../assets/about.jpg";

    // const About = () => {
    // return (
    //     <div className="border-b border-neutral-900 py-12">
    //     <h2 className="mb-12 text-center text-3xl font-semibold">
    //         About <span className="text-neutral-500">Me</span>
    //     </h2>

    //     {/* ⬅️ Image | ➡️ Text */}
    //     <div className="flex flex-wrap items-center justify-center px-4 lg:px-16">
            
    //         {/* 🖼️ Image - Left */}
    //         <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
    //         <img
    //             src={aboutpic}
    //             alt="About"
    //             className="rounded-xl w-[250px] h-auto object-cover shadow-md"
    //         />
    //         </div>

    //         {/* 📝 Text - Right */}
    //         <div className="w-full lg:w-1/2 px-4">
    //         <p className="text-md text-neutral-300 leading-relaxed text-center lg:text-left max-w-xl mx-auto">
    //             {ABOUT_TEXT}
    //         </p>
    //         </div>
    //     </div>
    //     </div>
    // );
    // };

    // export default About;



  import { ABOUT_TEXT } from "../constants";
import aboutpic from "../assets/about.jpg";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-12">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center px-4 lg:px-16">
        {/* 🖼️ Image - Left */}
        <motion.div
        whileInView={{opacity:1 , x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
         className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <div>
            <img
            src={aboutpic}
            alt="About"
            className="rounded-xl w-[250px] h-auto object-cover shadow-md"
          />  
          </div>
        </motion.div>

        {/* 📝 Text + Button - Right */}
        <motion.div
        whileInView={{opacity:1, x: 0}}
        initial={{opacity:0, x: 100}}
        transition={{duration: 0.5}}
         className="w-full lg:w-1/2 px-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-md text-neutral-300 leading-relaxed max-w-xl mb-4">
            {ABOUT_TEXT}
          </p>

          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-[#1c1b29] text-white border border-neutral-700 rounded-lg shadow hover:bg-[#2a2a40] transition duration-300"
          >
            <FaFilePdf className="text-xl text-red-400" />
            <span>Download My Resume</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
