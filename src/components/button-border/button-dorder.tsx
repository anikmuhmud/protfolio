
import { motion } from "framer-motion";

const skills = [
  { text: "Web Developer", style: "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100" },
  { text: "Web Designer", style: "border border-emerald-500 text-emerald-700 dark:text-emerald-100" },
  { text: "Frontend Designer", style: "bg-amber-100 text-amber-700 dark:bg-amber-700 dark:text-amber-100" },
  { text: "JavaScript Learner", style: "border border-amber-500 text-amber-700 dark:text-amber-100" },
  { text: "React Enthusiast", style: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100" },
];

function SkillsSection() {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap mt-10 px-4">
      {skills.map((skill, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{
            delay: i * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          className={`inline-flex items-center justify-center rounded-full px-3 py-1 shadow-md ${skill.style}`}
        >
          <p className="whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl p-2">
            {skill.text}
          </p>
        </motion.span>
      ))}
    </div>
  );
}

export default SkillsSection;
