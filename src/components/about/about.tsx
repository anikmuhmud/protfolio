
"use client";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className=" max-w-7xl mx-auto w-full mt-5 py-12">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  items-center gap-19 px-10">
        
        
        <motion.div
         initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // 👈 এটা যোগ করো
          className="text-white max-w-xl space-y-6"
        >
          <div className="w-[280px] sm:w-[320px] md:w-[400px] mt-[70px] h-[280px] sm:h-[320px] md:h-[400px] 
            bg-amber-300 rounded-full relative flex justify-center items-center 
            overflow-hidden border-4 border-white 
            shadow-[0_0px_40px_rgba(59,130,246,0.7)]">
            <img
              className="absolute"
              src="/ak-1.jpg"
              alt="img"
              width="100%"
              height="100%"
            />
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-white max-w-xl space-y-6"
        >
          <div className="w-fit border-2 border-amber-300 rounded-3xl flex items-center px-5 py-3 shadow-[0_0px_20px_rgba(55,166,166,0.5)]">
            <h1 className="text-3xl font-bold">
              About <span className="text-cyan-400">Me</span>
            </h1>
          </div>

          <div className="border-2 border-lime-400 p-6 rounded-3xl shadow-[0_0px_20px_rgba(55,196,166,0.7)]">
            <span className="block text-[22px] font-bold">
              Full Stack Developer
            </span>
            <p className="mt-4 text-[16px] leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              provident, iste placeat consequuntur laborum recusandae quisquam
              quos hic ea? Vel necessitatibus aperiam consequatur rem veritatis
              odio facere aspernatur libero amet voluptate voluptates.
            </p>
            <p className="mt-4 text-xl text-cyan-400 font-medium">
              I would like to do something now, that's why I would like to take
              challenge and fulfill that..
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
