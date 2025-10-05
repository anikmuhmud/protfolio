"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Todo App",
    desc: "A simple todo list built with React & Tailwind.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio built with HTML, CSS, and JS.",
    link: "#",
  },
  {
    title: "E-commerce Site",
    desc: "A shopping cart project using JavaScript & LocalStorage.",
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "A blog app built with Node.js & MongoDB.",
    link: "#",
  },
];

function MyWork() {
  return (
    <section  className="max-w-7xl mx-auto  w-full px-4 py-16 text-center">
     
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl font-bold mb-12 border-2 border-y-amber-300 text-white py-3 px-10 rounded-2xl inline-block shadow-lg hover:shadow-cyan-400/50"
      >
        What I Do..
      </motion.h2>

    
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? 6 : -6 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false }}
            className="relative w-[260px] h-[260px] mx-auto sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px]
             bg-gradient-to-tr from-sky-500 to-indigo-500 border-4 border-white shadow-xl flex items-center justify-center rounded-xl sm:rounded-none"
          >
            <div className="bg-gray-900 p-6 rounded-xl sm:rounded-none shadow-md border-2 border-amber-300 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3 text-sm sm:text-base">
                {project.desc}
              </p>
              <a
                href={project.link}
                className="text-cyan-400 hover:underline text-sm sm:text-[18px]"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default MyWork;
