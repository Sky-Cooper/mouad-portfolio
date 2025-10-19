import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Settings,
  Rocket,
} from "lucide-react";

function Body() {
  const skills = [
    {
      icon: <Server size={36} className="text-orange-400" />,
      title: "Backend Engineering",
      desc: "Building secure, scalable systems with Django, PostgreSQL, and modern API architectures.",
    },
    {
      icon: <Code size={36} className="text-orange-400" />,
      title: "Frontend Development",
      desc: "Creating fast, responsive web interfaces with React, Redux, TypeScript, and Tailwind CSS.",
    },
    {
      icon: <Smartphone size={36} className="text-orange-400" />,
      title: "Mobile Development",
      desc: "Developing cross-platform mobile apps using React Native with clean UI and smooth performance.",
    },
    {
      icon: <Palette size={36} className="text-orange-400" />,
      title: "UI/UX & Branding",
      desc: "Designing intuitive user experiences and unique digital identities that tell a story.",
    },
    {
      icon: <Settings size={36} className="text-orange-400" />,
      title: "DevOps & Cloud",
      desc: "Automating deployment, CI/CD pipelines, and cloud integration for reliability and speed.",
    },
    {
      icon: <Rocket size={36} className="text-orange-400" />,
      title: "Innovation & Leadership",
      desc: "Co-founder of Qreeblik Medical — driving tech that connects healthcare and innovation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="px-6 py-20 mx-auto max-w-7xl sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-16 text-center"
      >
        <motion.h2
          className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Crafting Experiences Across{" "}
          <span className="text-orange-400">Tech & Design</span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          As a Software Engineer at the intersection of creativity and
          technology, I bring ideas to life through code, design, and strategy —
          mastering both the technical and aesthetic sides of development.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants as any}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateZ: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="group relative flex flex-col items-start p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-orange-400 hover:shadow-[0_0_30px_-10px_rgba(251,146,60,0.5)] transition-all duration-300"
          >
            {/* Animated Icon */}
            <motion.div
              className="mb-4 transition-transform duration-300"
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              {skill.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              className="mb-2 text-xl font-semibold text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
            >
              {skill.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="leading-relaxed text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.7 }}
              viewport={{ once: true }}
            >
              {skill.desc}
            </motion.p>

            {/* Hover Border Effect */}
            <motion.div
              className="absolute inset-0 transition-all duration-500 border-2 border-transparent opacity-0 pointer-events-none rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 group-hover:opacity-100"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Body;
