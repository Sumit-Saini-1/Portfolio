import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Software Developer",
    company: "BetterCommerce",
    duration: "2024 - Present",
    description: "Working on building scalable frontend solutions using Next.js, React, and Tailwind CSS. Implementing automation tools and UI enhancements for e-commerce platforms."
  },
  {
    role: "Full Stack Developer Intern",
    company: "CodeQuotient",
    duration: "2023 - 2024",
    description: "Developed multiple full-stack projects, including an e-commerce platform, a group chat application, and a ticket management system."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-900 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4">
              <FaBriefcase className="text-blue-400 text-2xl" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
            </div>
            <p className="text-blue-300 mt-1">{exp.company} | {exp.duration}</p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
