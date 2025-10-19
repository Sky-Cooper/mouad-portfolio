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

    const mailto = `mailto:mouadhoumada@gmail.com?subject=Portfolio Contact from ${
      formData.name
    }&body=${encodeURIComponent(
      formData.message + "\n\nSender email: " + formData.email
    )}`;
    window.location.href = mailto;
    setTimeout(() => setStatus("sent"), 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    sending: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    sent: {
      scale: 1,
      backgroundColor: "#10B981",
    },
  };

  return (
    <section
      id="contact"
      className="relative max-w-5xl px-6 py-24 mx-auto sm:px-8 lg:px-12"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 text-center"
      >
        <motion.h2
          className="mb-4 text-4xl font-extrabold text-orange-400 md:text-5xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Build Something Together
        </motion.h2>
        <motion.p
          className="text-xl text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ready to bring your next big idea to life? Let's connect!
        </motion.p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative p-8 border border-orange-500/20 rounded-3xl bg-black/40 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(251,146,60,0.4)] hover:shadow-[0_0_60px_-5px_rgba(251,146,60,0.6)] space-y-6 group"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl blur-3xl -z-10"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Name Input */}
        <motion.div
          className="relative"
          variants={itemVariants as any}
          whileFocus={{ scale: 1.02 }}
        >
          <User className="absolute w-5 h-5 text-orange-400 top-3 left-3" />
          <motion.input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            onChange={handleChange}
            whileFocus={{
              borderColor: "rgba(251,146,60,0.8)",
              boxShadow: "0 0 0 3px rgba(251,146,60,0.1)",
            }}
            className="w-full py-3 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 bg-transparent border border-orange-500/30 rounded-xl focus:outline-none"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          className="relative"
          variants={itemVariants as any}
          whileFocus={{ scale: 1.02 }}
        >
          <Mail className="absolute w-5 h-5 text-orange-400 top-3 left-3" />
          <motion.input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            onChange={handleChange}
            whileFocus={{
              borderColor: "rgba(251,146,60,0.8)",
              boxShadow: "0 0 0 3px rgba(251,146,60,0.1)",
            }}
            className="w-full py-3 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 bg-transparent border border-orange-500/30 rounded-xl focus:outline-none"
          />
        </motion.div>

        {/* Message Input */}
        <motion.div
          className="relative"
          variants={itemVariants as any}
          whileFocus={{ scale: 1.02 }}
        >
          <MessageSquare className="absolute w-5 h-5 text-orange-400 top-3 left-3" />
          <motion.textarea
            name="message"
            required
            placeholder="Your Message..."
            rows={5}
            onChange={handleChange}
            whileFocus={{
              borderColor: "rgba(251,146,60,0.8)",
              boxShadow: "0 0 0 3px rgba(251,146,60,0.1)",
            }}
            className="w-full py-3 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 bg-transparent border resize-none border-orange-500/30 rounded-xl focus:outline-none"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          variants={buttonVariants as any} // only one `variants` prop
          animate={status}
          whileHover={status === "idle" ? { scale: 1.05 } : {}}
          whileTap={{ scale: 0.97 }}
          disabled={status === "sending"}
          className="relative flex items-center justify-center w-full px-6 py-3 mt-4 overflow-hidden font-semibold text-black transition-all duration-300 bg-orange-400 rounded-xl hover:bg-orange-500 disabled:opacity-70"
        >
          {/* Button Shine Effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.8 }}
          />

          {status === "sending" ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
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

      {/* Floating Background Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-24 h-24 rounded-full bg-orange-500/20 blur-3xl top-10 left-20 -z-10"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute rounded-full w-28 h-28 bg-orange-400/10 blur-3xl bottom-10 right-24 -z-10"
      />
    </section>
  );
}

export default ContactForm;
