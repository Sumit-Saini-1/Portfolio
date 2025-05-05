import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="relative w-48 h-48 md:w-80 md:h-64 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          // animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="images/sumit.jpg" alt="Sumit Saini" className="w-full md:h-full min-w-full md:min-h-full" />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
            I&apos;m a <span className="text-blue-400">MERN Stack Developer</span> with hands-on experience in modern web technologies like <span className="text-blue-400">Next.js, React, and Tailwind CSS</span>.
            I enjoy crafting seamless user interfaces and building scalable backend services using <span className="text-blue-400">MongoDB, Express, React, and Node.js</span>.
          </p>
          <p className="text-gray-300 mb-4">
            I recently worked at <span className="text-blue-400">BetterCommerce</span> as a frontend developer, where I contributed to scalable and responsive e-commerce interfaces. Prior to that, I completed an internship at CodeQuotient, where I developed full-stack applications including an e-commerce site, a group chat app, and a ticket management system.
          </p>
          <p className="text-gray-300">
            I&apos;m passionate about clean UI design, performance optimization, and continuous learning. Let&apos;s build impactful digital experiences together! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
