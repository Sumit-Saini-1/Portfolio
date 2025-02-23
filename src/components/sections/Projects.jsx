import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform built with Next.js, Tailwind CSS, and MongoDB.",
    image: "/ecommerce.jpg",
    liveUrl: "",
    repoUrl: "https://github.com/Sumit-Saini-1/E-commerce-using-React-and-Node"
  },
  {
    title: "Ticket Management System",
    description: "A ticketing system for tracking and managing issues, built with React and Firebase.",
    image: "/ticket-system.jpg",
    liveUrl: "",
    repoUrl: "https://github.com/Sumit-Saini-1/Ticket-management-system"
  },
  {
    title: "Automation Operations Tool",
    description: "An automation tool for scheduling and generating reports using APScheduler and Flask.",
    image: "/automation-tool.jpg",
    liveUrl: "",
    repoUrl: "https://github.com/Sumit-Saini-1/Group-Messaging-app"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-800 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project?.image} alt={project?.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-400">{project?.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project?.description}</p>
              <div className="flex justify-center gap-4 mt-4">
                {project?.liveUrl && <a href={project?.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaExternalLinkAlt className="text-2xl" />
                </a>}
                {project?.repoUrl && <a href={project?.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <FaGithub className="text-2xl" />
                </a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
