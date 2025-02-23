import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    position: "CTO, TechCorp",
    quote: "An exceptional developer! Delivered high-quality work on time and exceeded our expectations."
  },
  {
    name: "Jane Smith",
    position: "Product Manager, StartupX",
    quote: "Professional, efficient, and innovative. A pleasure to work with!"
  },
  {
    name: "Mike Johnson",
    position: "CEO, DevSolutions",
    quote: "Outstanding skills and dedication. Transformed our project with great attention to detail."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-900 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <FaQuoteLeft className="text-blue-400 text-3xl mb-2" />
            <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
            <h3 className="text-lg font-semibold text-blue-400 mt-4">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm">{testimonial.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}