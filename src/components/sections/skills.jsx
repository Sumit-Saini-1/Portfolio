import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Databases", icon: FaDatabase },
  { name: "Git", icon: FaGitAlt },
  { name: "Java", icon: FaJava }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-900 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tech Stack
      </motion.h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <skill.icon className="text-4xl text-blue-400" />
            <p className="text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
