// src/components/Header.jsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion'; // ← Import Framer Motion
import logo from '../assets/logo.png';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="absolute top-0 left-0 w-full z-20 bg-transparent px-6 py-4"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo with animated circles */}
        <div className="relative w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
          <div className="bg-gray-100 h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full absolute top-0 left-0 z-0 animate-pulse"></div>
          <div className="bg-gray-500 h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full absolute top-0 left-[1.25rem] sm:left-[1rem] md:left-[1.25rem] lg:left-[1.5rem] z-10 animate-pulse"></div>
          <div className="bg-gray-900 h-7 w-7 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full absolute top-0 left-[2.5rem] sm:left-[2rem] md:left-[2.5rem] lg:left-[3rem] z-20 animate-pulse"></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#features" className="hover:text-gray-400">Browse</a>
          <a href="#membership" className="hover:text-gray-400">Membership</a>
          <a href="#contact" className="hover:text-gray-400">About us</a>
          <a href="#contact" className="hover:text-gray-400">Blog</a>
          <a href="#sign-in" className="border border-white hover:bg-white hover:text-gray-700 text-white font-semibold rounded-lg px-6 py-2 duration-900">Sign in</a>
          <a href="#log-in" className="bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-lg px-6 py-2 duration-900">Log in</a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white transition duration-900" onClick={toggleMenu}>
          {mobileOpen ? <X size={40} /> : <Menu size={40} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gray-900 bg-opacity-80 text-white px-15 py-8 space-y-8 top-full right-0 transition text-center font-bold absolute opacity-90"
        >
          <a href="#home" className="block hover:text-gray-400">Home</a>
          <a href="#features" className="block hover:text-gray-400">Browse</a>
          <a href="#get-started" className="block hover:text-gray-400">Membership</a>
          <a href="#contact" className="block hover:text-gray-400">About us</a>
          <a href="#contact" className="block hover:text-gray-400">Blog</a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
