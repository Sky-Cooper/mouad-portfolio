import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "⚙️ Backend & APIs",
    techs: [
      "Django",
      "Spring Boot",
      "Express.js",
      "Flask",
      "FastAPI",
      "RESTful API",
      "GraphQL",
      "Celery",
      "Beat Scheduler",
    ],
  },
  {
    title: "💻 Frontend & Mobile",
    techs: [
      "React",
      "React Native",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "🧠 DevOps & Databases",
    techs: [
      "Redis",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "🎨 UI/UX & Branding",
    techs: [
      "Figma",
      "UI/UX Design",
      "Branding",
      "Prototyping",
      "Visual Systems",
    ],
  },
  {
    title: "🧩 Languages",
    techs: ["Python", "Java", "JavaScript", "TypeScript"],
  },
];

function Techs() {
  return (
    <section
      id="skills"
      className="relative px-6 py-24 mx-auto max-w-7xl sm:px-8 lg:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12 text-4xl font-extrabold text-center text-orange-400 md:text-5xl"
      >
        My Tech Universe
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, rotateX: 5, rotateY: -3 }}
            className="relative p-6 overflow-hidden transition-all duration-500 border shadow-lg border-orange-500/30 rounded-2xl bg-black/30 backdrop-blur-md hover:border-orange-400/60 hover:shadow-orange-400/20"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />

            <h3 className="mb-4 text-xl font-semibold text-orange-300">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-3 py-1 text-sm font-medium text-white transition-all duration-300 border rounded-full bg-orange-500/10 border-orange-400/30 hover:bg-orange-500/20 hover:border-orange-400/60"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-50 -z-10 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent blur-3xl" />
    </section>
  );
}

export default Techs;
