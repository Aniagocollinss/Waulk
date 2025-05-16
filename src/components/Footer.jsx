// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white pt-10 pb-10 px-6 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Back to Top Button */}
      <a
        href="#"
        className="absolute -top-5 right-6 bg-gray-300 text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-400 transition"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </a>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand/Logo */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Waulk</h3>
          <p className="text-gray-400">Track your fitness journey, stay inspired, and move smarter every day.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#membership" className="hover:text-white transition">Membership</a></li>
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition" aria-label="X (Twitter)"><FaXTwitter /></a>
            <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300 transition" aria-label="WhatsApp"><FaWhatsapp /></a> 
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()}  https://aniagocollinss.github.io/Waulk/ All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
