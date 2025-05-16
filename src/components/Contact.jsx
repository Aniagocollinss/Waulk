// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSend = (e) => {
    e.preventDefault(); // Prevent form reload

    const phoneNumber = '+2349045598704'; // Replace with your WhatsApp number
    const text = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url, '_blank'); // Open in new tab
  };

  return (
    <section id="contact" className="py-15 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-gray-300">Have questions? We’d love to hear from you.</p>
        <form onSubmit={handleWhatsAppSend} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-10">
          <input
            className="p-3 rounded bg-white text-black"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="p-3 rounded bg-white text-black"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="md:col-span-2 p-3 rounded bg-white text-black"
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-white text-gray-900 font-bold px-6 py-3 rounded hover:bg-gray-300 transition delay-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
