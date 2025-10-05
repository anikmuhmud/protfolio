import { motion } from "framer-motion";

function Services() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 text-transparent bg-clip-text mb-12"
          >
            My Services
          </motion.h2>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                desc: "I build responsive and modern websites using React, TailwindCSS, and Next.js.",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "I design clean and user-friendly interfaces with Figma & Adobe XD.",
              },
              {
                icon: "🚀",
                title: "SEO Optimization",
                desc: "I help websites rank higher on Google with SEO strategies.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-xl overflow-hidden
                           hover:border-cyan-400 hover:shadow-cyan-400/50 transition"
              >
                {/* Glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

                <div className="relative z-10">
                  <div className="text-cyan-400 text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
