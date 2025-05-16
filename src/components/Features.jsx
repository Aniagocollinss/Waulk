// src/components/Features.jsx
import { motion } from 'framer-motion';

const features = [
  { title: "Track Your Steps", description: "Monitor daily steps with precision and ease." },
  { title: "Stay Motivated", description: "Unlock badges and compete with friends." },
  { title: "Health Insights", description: "Analyze trends and improve your lifestyle." },
];

const Features = () => {
  return (
    <section id="features" className="py-15 px-4 bg-gray-300 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition duration-800"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl text-gray-100 font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-100 italic">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
