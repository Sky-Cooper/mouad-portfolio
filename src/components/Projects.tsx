import { motion } from "framer-motion";
import ProjectCard from "./UI/ProjectCard";
import { projects } from "../data/ProjectData";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative px-6 py-24 mx-auto overflow-hidden max-w-7xl sm:px-8 lg:px-12"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-orange-500/5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/3 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-extrabold text-orange-400 md:text-5xl">
          Featured Projects
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-400">
          Showcasing my journey in building digital experiences that blend
          innovation with impact
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute w-4 h-4 bg-orange-400 rounded-full top-20 right-20 animate-pulse opacity-60"></div>
      <div className="absolute w-3 h-3 bg-orange-300 rounded-full bottom-40 left-10 animate-bounce opacity-40"></div>
      <div className="absolute w-2 h-2 bg-orange-200 rounded-full top-1/2 right-1/4 animate-float opacity-30"></div>
    </section>
  );
}

export default Projects;
