// src/components/Blog.jsx
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.section
      id="blog"
      className="py-20 px-4 bg-white text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold">From Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <motion.div
            className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">How to Stay Consistent with Your Workouts</h3>
            <p className="text-gray-600">
              Consistency is more important than intensity. Learn simple tips to build a sustainable workout routine and stay committed even when motivation fades.
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
          </motion.div>

          {/* Blog Post 2 */}
          <motion.div
            className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">Top 5 Bodyweight Exercises for Beginners</h3>
            <p className="text-gray-600">
              No gym? No problem. These beginner-friendly bodyweight exercises can be done anywhere and are perfect for building strength, flexibility, and confidence.
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
          </motion.div>

          {/* Blog Post 3 */}
          <motion.div
            className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">Pre and Post Workout Nutrition Guide</h3>
            <p className="text-gray-600">
              What you eat before and after a workout plays a huge role in your results. Discover what to fuel up with for energy and how to recover right.
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
