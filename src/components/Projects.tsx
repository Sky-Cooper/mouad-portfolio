import { motion } from "framer-motion";
import ProjectCard from "./UI/ProjectCard";
import { projects } from "../data/ProjectData";

function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 mx-auto max-w-7xl sm:px-8 lg:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 text-4xl font-extrabold text-center text-orange-400 md:text-5xl"
      >
        Latest Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
