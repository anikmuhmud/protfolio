"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS / Tailwind",
  "Jv-Script",
  "React",
  "Node.js",
  "Mg-DB",
  "Git & GitHub",
  "Figma",
];

function SkillSection() {
  return (
    <section className="w-full px-4 py-16" id="skills">
      {/* Border box */}
      <div
        className="
        border-4 border-amber-400 
        rounded-3xl max-w-6xl mx-auto 
        sm:-rotate-2 sm:rounded-3xl
        "
      >
        <div className="p-6 text-center sm:rotate-2">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-4xl sm:text-5xl font-bold mb-8 
            border-2 border-y-amber-300 text-white py-3 px-10 rounded-2xl inline-block  hover:shadow-cyan-400"
          >
            Skills
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-gray-900 text-lg sm:text-xl md:text-2xl font-semibold text-white 
                border-2 border-amber-400 p-5 rounded-xl 
                shadow-md hover:shadow-cyan-400/60 hover:-translate-y-3 
                transition-transform duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
