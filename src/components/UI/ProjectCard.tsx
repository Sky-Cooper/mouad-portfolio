import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, PlayCircle, Info } from "lucide-react";

type Props = {
  title: string;
  images: string[];
  description: string;
  tech: string[];
  role: string;
  links: { demo?: string; github?: string; live?: string };
};

const ProjectCard: React.FC<Props> = ({
  title,
  images,
  description,
  tech,
  role,
  links,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      6000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[current];
  const isMobileView = currentImage?.toLowerCase().includes("mobile");

  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative p-6 overflow-hidden transition-all duration-500 border shadow-lg border-orange-500/30 rounded-2xl bg-black/30 backdrop-blur-md hover:border-orange-400/60 hover:shadow-orange-400/20"
    >
      {images.length > 0 && (
        <div className="relative flex items-center justify-center h-56 mb-4 overflow-hidden rounded-xl bg-black/40">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8 }}
              className={`transition-transform object-contain duration-700 ${
                isMobileView ? "h-52 w-auto" : "h-56 w-full object-cover"
              }`}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          {isMobileView && (
            <div className="absolute inset-0 border-[8px] border-black rounded-[2rem] shadow-inner pointer-events-none" />
          )}
        </div>
      )}

      <h3 className="text-2xl font-bold text-orange-300">{title}</h3>
      <p className="mb-2 text-sm italic text-gray-400">{role}</p>

      <p className="mb-3 text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-medium border rounded-full text-orange-300/90 border-orange-500/30 bg-orange-500/10"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-3 text-orange-400">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 transition hover:text-orange-300" />
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer">
            <PlayCircle className="w-5 h-5 transition hover:text-orange-300" />
          </a>
        )}
        {links.live && (
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 transition hover:text-orange-300" />
          </a>
        )}
        <button>
          <Info className="w-5 h-5 transition hover:text-orange-300" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
