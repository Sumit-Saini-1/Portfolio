import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/button";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from "react-router-dom";


export default function LandingSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I&apos;m <span className="text-blue-400">Sumit Saini</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        MERN Stack Developer | React & Node.js Enthusiast
      </motion.p>
      <div className="flex gap-4">
        <AnchorLink href="#projects">
          <Button variant="primary">View My Work</Button>
        </AnchorLink>
        <AnchorLink href="#contact">
          <Button variant="outline">Contact Me</Button>
        </AnchorLink>
      </div>
      <div className="flex gap-6 mt-6">
        <Link to="https://github.com/Sumit-Saini-1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-blue-400 transition duration-300" />
        </Link>
        <Link to="https://www.linkedin.com/in/sumit-saini-771313244" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-blue-400 transition duration-300" />
        </Link>
      </div>
    </div>
  );
}
