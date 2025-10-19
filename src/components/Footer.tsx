import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative px-6 py-16 mt-20 text-center border-t border-orange-500/20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent animate-pulse"></div>

      <h3 className="mb-3 text-2xl font-semibold text-orange-400">
        Mouad Houmada
      </h3>
      <p className="mb-6 text-neutral-400">
        Crafting Digital Experiences that Matter
      </p>

      <div className="flex justify-center gap-6 mb-6">
        <a
          href="mailto:mouadhoumada@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="transition text-neutral-400 hover:text-orange-400"
        >
          <FaEnvelope size={22} />
        </a>
        <a
          href="https://github.com/Sky-Cooper"
          target="_blank"
          rel="noreferrer"
          className="transition text-neutral-400 hover:text-orange-400"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mouad-houmada-4ba1882b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="transition text-neutral-400 hover:text-orange-400"
        >
          <FaLinkedin size={22} />
        </a>
      </div>

      <p className="text-xs text-neutral-600">
        © {new Date().getFullYear()} Mouad Houmada. All Rights Reserved.
      </p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-orange-500/20 blur-3xl rounded-full opacity-40"></div>
    </footer>
  );
}

export default Footer;
