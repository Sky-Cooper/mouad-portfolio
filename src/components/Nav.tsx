import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MouadHoumadaCV from "../assets/mouadhoumadaCV.pdf";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(
          navItems[i].link
        ) as HTMLElement | null;
        if (section && section.offsetTop <= scrollPos) {
          setActive(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCVDownload = (e: React.MouseEvent) => {
    e.preventDefault();

    // For mobile devices, we need a different approach
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Method 1: Open in new tab for mobile
      window.open(MouadHoumadaCV, "_blank");

      // Method 2: Create a temporary link and trigger click
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = MouadHoumadaCV;
        link.download = "Mouad_Houmada_CV.pdf";
        link.target = "_blank";

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 100);
    } else {
      // Standard download for desktop
      const link = document.createElement("a");
      link.href = MouadHoumadaCV;
      link.download = "Mouad_Houmada_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleMobileCVDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false); // Close mobile menu

    // For mobile, we'll use a more robust approach
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Create a visible link that user can click
      const downloadLink = document.createElement("a");
      downloadLink.href = MouadHoumadaCV;
      downloadLink.download = "Mouad_Houmada_CV.pdf";
      downloadLink.target = "_blank";
      downloadLink.style.display = "none";

      document.body.appendChild(downloadLink);

      // Try multiple methods for mobile
      try {
        // Method 1: Direct click
        downloadLink.click();

        // Method 2: Open in new window as fallback
        setTimeout(() => {
          window.open(MouadHoumadaCV, "_blank");
        }, 500);
      } catch (error) {
        console.error("Download failed:", error);
        // Final fallback - open in new tab
        window.open(MouadHoumadaCV, "_blank");
      }

      // Clean up
      setTimeout(() => {
        document.body.removeChild(downloadLink);
      }, 1000);
    } else {
      // Standard desktop download
      const link = document.createElement("a");
      link.href = MouadHoumadaCV;
      link.download = "Mouad_Houmada_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-orange-500/20 shadow-[0_0_30px_-10px_rgba(251,146,60,0.2)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse opacity-90"></div>

      <nav className="relative px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <h1 className="text-2xl font-extrabold text-white select-none sm:text-3xl">
              <span className="text-orange-500 transition-colors group-hover:text-orange-400">
                M
              </span>
              ouad Houmada
            </h1>
          </a>

          <div className="items-center hidden gap-8 md:flex">
            {navItems.map(({ name, link }) => (
              <a
                key={name}
                href={link}
                onClick={() => setActive(name)}
                className={`relative text-white/90 hover:text-white font-medium transition-all duration-300 group ${
                  name === active ? "text-orange-400" : ""
                }`}
              >
                {name}
                <span
                  className={`absolute left-0 bottom-[-6px] h-[2px] bg-orange-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left ${
                    name === active ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleCVDownload}
              className="hidden px-4 py-2 text-orange-200 transition-all duration-300 border border-orange-500 rounded-full cursor-pointer md:inline-block bg-orange-500/10 hover:bg-orange-500 hover:text-white"
            >
              Download CV
            </button>

            <button
              className="inline-flex items-center justify-center p-2 text-orange-400 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/90 border-t border-orange-500/10 backdrop-blur-md`}
      >
        <div className="px-6 pt-4 pb-6 space-y-3">
          {navItems.map(({ name, link }) => (
            <a
              key={name}
              href={link}
              onClick={() => {
                setOpen(false);
                setActive(name);
              }}
              className={`block px-3 py-2 rounded-md text-white/90 hover:bg-white/5 transition ${
                name === active ? "text-orange-400 bg-white/5" : ""
              }`}
            >
              {name}
            </a>
          ))}

          <button
            onClick={handleMobileCVDownload}
            className="block w-full px-4 py-2 mt-3 text-center text-orange-200 transition-all border border-orange-500 rounded-full cursor-pointer bg-orange-500/10 hover:bg-orange-500 hover:text-white"
          >
            Download CV
          </button>
        </div>
      </div>
    </motion.header>
  );
}
