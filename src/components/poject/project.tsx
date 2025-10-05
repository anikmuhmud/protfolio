import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      img: "public/w-3.jpeg",
      title: "Gaming Website",
      desc: "A personal portfolio website built with React and TailwindCSS.",
      link: "#",
      border: "border-purple-950",
    },
    {
      img: "public/w-6.jpg",
      title: "Food Blog",
      desc: "A task management app with CRUD features using React + TypeScript.",
      link: "#",
      border: "border-amber-300",
    },
    {
      img: "public/w-7.jpg",
      title: "Book Shop Website",
      desc: "Responsive admin panel with charts and analytics features.",
      link: "#",
      border: "border-gray-600",
    },
    {
      img: "public/w-4.png",
      title: "Portfolio Website",
      desc: "A personal portfolio website built with React and TailwindCSS.",
      link: "#",
      border: "border-amber-50",
    },
  ];

  return (
    <div>
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold border-2 border-y-amber-300 text-white mb-10 py-3 px-6 rounded-2xl inline-block text-center sm:text-left"
          >
            My Projects
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-cyan-400/40 transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className={`p-5 ${project.border} border-2 rounded-2xl`}>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
