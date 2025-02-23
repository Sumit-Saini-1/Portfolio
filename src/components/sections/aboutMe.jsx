import { motion } from "framer-motion";
import profile from "../../assets/sumit.jpg"

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div 
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          // animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profile} alt="Sumit Saini" />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
            I&apos;m a passionate <span className="text-blue-400">Frontend Developer</span> specializing in
            modern web technologies like <span className="text-blue-400">Next.js, React, and Tailwind CSS</span>.
            I love building user-friendly, scalable applications that enhance digital experiences.
          </p>
          <p className="text-gray-300">
            Currently working at <span className="text-blue-400">BetterCommerce</span>, I&apos;m always eager to explore
            new technologies and solve challenging problems. Let’s build something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
