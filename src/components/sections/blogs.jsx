import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Optimizing Next.js for Performance",
    excerpt: "Learn how to optimize Next.js applications for better speed and performance.",
    slug: "optimizing-nextjs-performance"
  },
  {
    title: "Understanding Server Components in React",
    excerpt: "A deep dive into server components and their impact on modern web development.",
    slug: "understanding-server-components"
  },
  {
    title: "Integrating MongoDB with Next.js",
    excerpt: "Step-by-step guide on setting up MongoDB in your Next.js project.",
    slug: "integrating-mongodb-nextjs"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 px-6 bg-gray-800 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog & Articles
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">{post.title}</h3>
            <p className="text-gray-300 mt-2">{post.excerpt}</p>
            <Link to={`/blog/${post?.slug}`}>
              <Link className="text-blue-400 hover:underline mt-3 inline-block">Read More →</Link>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}