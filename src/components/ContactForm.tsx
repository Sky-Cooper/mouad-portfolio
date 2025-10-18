// src/components/ContactForm.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // 🔹 Option 1: EmailJS or backend API integration
    // For now, just open the default email client as fallback
    const mailto = `mailto:mouadhoumada@gmail.com?subject=Portfolio Contact from ${
      formData.name
    }&body=${encodeURIComponent(
      formData.message + "\n\nSender email: " + formData.email
    )}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <section
      id="contact"
      className="relative max-w-5xl px-6 py-24 mx-auto sm:px-8 lg:px-12"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12 text-4xl font-extrabold text-center text-orange-400 md:text-5xl"
      >
        Let’s Build Something Together
      </motion.h2>

      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative p-8 border border-orange-500/20 rounded-3xl bg-black/40 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(251,146,60,0.4)] hover:shadow-[0_0_60px_-5px_rgba(251,146,60,0.6)] space-y-6"
      >
        {/* Floating orange gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl blur-3xl -z-10"></div>

        {/* Name */}
        <div className="relative">
          <User className="absolute w-5 h-5 text-orange-400 top-3 left-3" />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full py-3 pl-10 pr-4 text-white placeholder-gray-400 bg-transparent border border-orange-500/30 rounded-xl focus:outline-none focus:border-orange-400"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="absolute w-5 h-5 text-orange-400 top-3 left-3" />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full py-3 pl-10 pr-4 text-white placeholder-gray-400 bg-transparent border border-orange-500/30 rounded-xl focus:outline-none focus:border-orange-400"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare className="absolute w-5 h-5 text-orange-400 top-3 left-3" />
          <textarea
            name="message"
            required
            placeholder="Your Message..."
            rows={5}
            onChange={handleChange}
            className="w-full py-3 pl-10 pr-4 text-white placeholder-gray-400 bg-transparent border resize-none border-orange-500/30 rounded-xl focus:outline-none focus:border-orange-400"
          />
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "sending"}
          className="relative flex items-center justify-center w-full px-6 py-3 mt-4 font-semibold text-black transition-all duration-300 bg-orange-400 rounded-xl hover:bg-orange-500 disabled:opacity-70"
        >
          {status === "sending" ? (
            "Sending..."
          ) : status === "sent" ? (
            "Message Sent!"
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>

      {/* Decorative floating orbs */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute w-24 h-24 rounded-full bg-orange-500/20 blur-3xl top-10 left-20"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute rounded-full w-28 h-28 bg-orange-400/10 blur-3xl bottom-10 right-24"
      ></motion.div>
    </section>
  );
}

export default ContactForm;
