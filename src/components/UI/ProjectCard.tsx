import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
} from "lucide-react";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop");
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Determine device type based on project context
  useEffect(() => {
    const isMobileProject =
      title.toLowerCase().includes("mobile") ||
      role.toLowerCase().includes("mobile") ||
      images.some((img) => img.toLowerCase().includes("mobile"));

    setDeviceType(isMobileProject ? "mobile" : "desktop");
  }, [title, role, images]);

  // Auto-play slideshow
  useEffect(() => {
    if (images.length <= 1 || isHovering) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [images.length, isHovering]);

  // Calculate and set consistent content height
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  }, [description, tech, title, role]);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (index: number) => setCurrentImageIndex(index);

  const currentImage = images[currentImageIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative h-full group" // Added h-full here
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-xl group-hover:opacity-100" />

      {/* Main Card Container - Fixed height */}
      <div className="relative flex flex-col h-full p-4 overflow-hidden transition-all duration-500 border shadow-2xl sm:p-6 border-orange-500/30 rounded-3xl bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl shadow-orange-500/10 group-hover:shadow-orange-500/20">
        {/* Device Mockup Section - Fixed height */}
        <div className="relative flex-shrink-0 mb-4">
          {" "}
          {/* Changed to mb-4 and flex-shrink-0 */}
          <div
            className={`relative mx-auto transition-all duration-500 ${
              deviceType === "mobile" ? "w-40 h-64" : "w-64 h-40" // Made both same visual area
            }`}
          >
            {/* Desktop Mockup */}
            {deviceType === "desktop" && (
              <div className="relative w-full h-full">
                {/* Monitor Top Bar */}
                <div className="absolute w-3/4 h-4 transform -translate-x-1/2 bg-gray-800 border-t border-gray-600 rounded-t-lg -top-4 left-1/2 border-x">
                  <div className="flex items-center justify-center h-full space-x-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Monitor Screen */}
                <div className="relative w-full h-full overflow-hidden bg-black border-4 border-gray-800 rounded-lg shadow-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      alt={title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="object-cover w-full h-full"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                </div>

                {/* Monitor Base */}
                <div className="absolute w-12 h-3 transform -translate-x-1/2 bg-gray-700 rounded-b-lg -bottom-3 left-1/2"></div>
                <div className="absolute w-20 h-1.5 transform -translate-x-1/2 bg-gray-600 rounded-full -bottom-5 left-1/2"></div>
              </div>
            )}

            {/* Mobile Mockup */}
            {deviceType === "mobile" && (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gray-800 rounded-[2rem] shadow-xl border-[4px] border-gray-900">
                  {/* Notch */}
                  <div className="absolute top-0 z-20 w-16 h-4 transform -translate-x-1/2 bg-gray-900 rounded-b-lg left-1/2"></div>

                  {/* Screen */}
                  <div className="absolute inset-1 bg-black rounded-[1.5rem] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={currentImage}
                        alt={title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="object-cover w-full h-full"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute w-16 h-1 transform -translate-x-1/2 bg-gray-600 rounded-full bottom-1 left-1/2"></div>

                  {/* Side Buttons */}
                  <div className="absolute w-1 h-8 bg-gray-900 rounded-l -left-0.5 top-16"></div>
                  <div className="absolute w-1 h-8 bg-gray-900 rounded-l -left-0.5 top-28"></div>
                  <div className="absolute w-1 h-12 bg-gray-900 rounded-r -right-0.5 top-24"></div>
                </div>
              </div>
            )}

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute flex items-center justify-center w-6 h-6 text-orange-400 transition-all duration-300 transform -translate-y-1/2 border rounded-full opacity-0 left-1 top-1/2 bg-black/80 border-orange-500/30 group-hover:opacity-100 hover:bg-orange-500 hover:text-white"
                >
                  <ChevronLeft size={12} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute flex items-center justify-center w-6 h-6 text-orange-400 transition-all duration-300 transform -translate-y-1/2 border rounded-full opacity-0 right-1 top-1/2 bg-black/80 border-orange-500/30 group-hover:opacity-100 hover:bg-orange-500 hover:text-white"
                >
                  <ChevronRight size={12} />
                </button>
              </>
            )}

            {/* Device Type Badge */}
            <div className="absolute flex items-center gap-1 px-2 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full shadow-lg -top-2 -right-2">
              {deviceType === "mobile" ? (
                <Smartphone size={10} />
              ) : (
                <Monitor size={10} />
              )}
              <span className="text-xs">
                {deviceType === "mobile" ? "Mobile" : "Desktop"}
              </span>
            </div>
          </div>
          {/* Image Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center mt-2 space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-orange-500 w-4"
                      : "bg-gray-600 hover:bg-orange-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section - Flexible but consistent height */}
        <div
          ref={contentRef}
          className="flex flex-col flex-grow space-y-3" // Changed to flex-grow and space-y-3
          style={{ minHeight: "200px" }} // Ensure minimum height
        >
          {/* Title and Role */}
          <div className="flex-shrink-0">
            {" "}
            {/* Prevent title from growing */}
            <h3 className="mb-1 text-lg font-bold text-orange-300 transition-colors group-hover:text-orange-200 line-clamp-1">
              {" "}
              {/* Added line-clamp-1 */}
              {title}
            </h3>
            <p className="text-xs font-medium text-orange-400/80 line-clamp-1">
              {" "}
              {/* Added line-clamp-1 */}
              {role}
            </p>
          </div>

          {/* Description - Fixed height with scroll */}
          <div className="flex-grow min-h-[60px]">
            {" "}
            {/* Fixed min height */}
            <p className="overflow-hidden text-sm leading-relaxed text-gray-300 transition-all duration-300 line-clamp-3 group-hover:line-clamp-none">
              {description}
            </p>
          </div>

          {/* Tech Stack - Fixed max height */}
          <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-hidden">
            {" "}
            {/* Fixed max height */}
            {tech.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-2 py-1 text-xs font-medium text-orange-300 transition-all duration-300 border rounded-full cursor-default bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons - Fixed height */}
          <div className="flex items-center justify-between flex-shrink-0 pt-3 border-t border-orange-500/20">
            {" "}
            {/* Added flex-shrink-0 */}
            <div className="flex items-center gap-2">
              {links.github && (
                <motion.a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 text-orange-400 transition-all duration-300 border rounded-lg bg-black/50 border-orange-500/30 hover:bg-orange-500 hover:text-white"
                >
                  <Github size={14} />
                </motion.a>
              )}
              {links.demo && (
                <motion.a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 text-orange-400 transition-all duration-300 border rounded-lg bg-black/50 border-orange-500/30 hover:bg-orange-500 hover:text-white"
                >
                  <PlayCircle size={14} />
                </motion.a>
              )}
              {links.live && (
                <motion.a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 text-orange-400 transition-all duration-300 border rounded-lg bg-black/50 border-orange-500/30 hover:bg-orange-500 hover:text-white"
                >
                  <ExternalLink size={14} />
                </motion.a>
              )}
            </div>
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="text-xs text-gray-400">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 transition-all duration-500 border-2 border-transparent opacity-0 pointer-events-none rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
