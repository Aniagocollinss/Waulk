import { motion } from 'framer-motion'; 
import back from '../assets/back.jpg';

const HeroSection = () => {
  return (
    <section className="w-full relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${back})`,  // <-- fixed here with backticks
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-60 md:opacity-60"></div>

      {/* Fade-in Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="relative z-10 flex items-center justify-center h-full px-4"
      >
        <div className="text-center text-white max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Step into a <span className="text-gray-300 font-extrabold">Healthier</span> You
          </h1>
          <p className="text-lg md:text-xl text-gray-300 italic">
            Track your walks, stay motivated and enjoy every step of your fitness journey...
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#get-started"
              className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-900"
            >
              Start Walking Today
            </a>
            <a
              href="#learn-more"
              className="border border-white hover:bg-white hover:text-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-900"
            >
              Explore Progress
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
