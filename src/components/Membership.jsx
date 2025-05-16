// src/components/Membership.jsx
import { motion } from 'framer-motion';

const Membership = () => {
  return (
    <section id="membership" className="py-16 bg-gray-100 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Become a Member</h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Join thousands who are already transforming their lives. Choose a plan that works for you!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 className="text-xl font-bold mb-2">Free Plan</h3>
            <p className="text-gray-600 mb-4">Basic features to get you started.</p>
            <button className="w-full bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-gray-300 mb-4">Limited access to all features and analytics.</p>
            <button className="w-full bg-white text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">Join Now</button>
          </div>

          {/* Exclusive Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h3 className="text-xl font-bold mb-2">Exclusive</h3>
            <p className="text-gray-600 mb-4">Full access to all features and analytics.</p>
            <button className="w-full bg-gray-900 text-white px-1 py-2 rounded hover:bg-gray-700 transition">Join Now</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Membership;
