import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-800 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 mb-6">
          Feel free to reach out for collaborations, job opportunities, or just to connect!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <motion.a
            href="mailto:03sumitsaini@gmail.com"
            className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaEnvelope className="text-blue-400 text-xl" />
            <span className="text-gray-300">03sumitsaini@gmail.com</span>
          </motion.a>
          {/* <motion.a
            href="tel:+1234567890"
            className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaPhone className="text-blue-400 text-xl" />
            <span className="text-gray-300">+123 456 7890</span>
          </motion.a> */}
          <motion.a
            href="https://www.linkedin.com/in/sumit-saini-771313244"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaLinkedin className="text-blue-400 text-xl" />
            <span className="text-gray-300">linkedin.com/in/sumit-saini-771313244</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
