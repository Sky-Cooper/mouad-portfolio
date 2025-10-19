import { useState, useRef, useEffect } from "react";
import pfpPortfolio from "../assets/pfpportfolio.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Calculate transform based on mouse position
  const getTransform = () => {
    const { x, y } = mousePosition;
    const rotateX = y * 10;
    const rotateY = x * -10;
    const translateX = x * 8;
    const translateY = y * 8;

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${
      isHovering ? 1.05 : 1
    })`;
  };

  // Calculate glow position based on mouse
  const getGlowPosition = () => {
    const { x, y } = mousePosition;
    const posX = (x + 1) * 50;
    const posY = (y + 1) * 50;

    return `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,100,0,0.5) 0%, transparent 60%)`;
  };

  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center justify-between gap-12 px-6 py-20 mx-auto max-w-7xl sm:px-8 lg:px-12 md:flex-row"
    >
      {/* Text Content with Staggered Entrance Animation */}
      <div
        ref={textRef}
        className="max-w-xl text-center md:text-left"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <p
          className="mb-3 font-semibold tracking-wide text-orange-500 uppercase"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transition: "all 0.6s ease-out 0.2s",
          }}
        >
          Hello!
        </p>

        <h1
          className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.3s",
          }}
        >
          I'm{" "}
          <span className="text-orange-500">
            Mouad <span className="text-white">Houmada</span>
          </span>
        </h1>

        <h2
          className="mb-6 text-xl font-semibold text-orange-400 sm:text-2xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.7s ease-out 0.4s",
          }}
        >
          Software Engineer · Full-Stack & Mobile Developer
        </h2>

        <p
          id="about"
          className="mb-8 leading-relaxed text-gray-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.7s ease-out 0.5s",
          }}
        >
          I'm a final-year Software Engineering student at{" "}
          <span className="font-medium text-orange-400">EMSI</span>, passionate
          about building modern, scalable digital products. My experience spans{" "}
          <span className="font-semibold text-white">
            full-stack web development
          </span>
          ,
          <span className="font-semibold text-white">
            mobile app engineering
          </span>
          , and
          <span className="font-semibold text-white">UI/UX design</span>,
          blending functionality with great user experience. I'm also exploring
          the <span className="font-semibold text-white">DevOps</span> world to
          deepen my understanding of deployment, automation, and system
          reliability.
          <br />
          <br />
          Currently, I'm the{" "}
          <span className="font-medium text-orange-400">
            co-founder of Qreeblik Medical
          </span>{" "}
          — a growing healthcare platform designed to simplify and digitize
          medical interactions in Morocco. I love solving problems that connect
          technology with real-world impact.
        </p>

        <div
          className="flex flex-col gap-6 sm:flex-row sm:items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.7s ease-out 0.6s",
          }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-semibold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Let's talk
          </a>

          <div className="flex justify-center gap-5 text-2xl text-orange-500 sm:justify-start">
            <a
              href="https://www.linkedin.com/in/mouad-houmada-4ba1882b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="transition-all duration-300 hover:text-orange-400 hover:scale-110 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Sky-Cooper"
              className="transition-all duration-300 hover:text-orange-400 hover:scale-110 hover:-rotate-12"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/qreeb_lik/"
              className="transition-all duration-300 hover:text-orange-400 hover:scale-110 hover:rotate-12"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image with Enhanced Hover Effects */}
      <div
        className="relative flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) rotate(0deg)"
            : "scale(0.8) rotate(-5deg)",
          transition: "all 0.8s ease-out 0.4s",
        }}
      >
        {/* Animated Background Glow */}
        <div
          className="absolute transition-all duration-500 rounded-full w-72 h-72 sm:w-96 sm:h-96 blur-3xl opacity-60"
          style={{
            background: isHovering ? getGlowPosition() : "",
            transform: isHovering ? "scale(1.1)" : "scale(1)",
            animation: isHovering ? "none" : "pulse 3s ease-in-out infinite",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -top-4 -left-4 animate-float"></div>
        <div className="absolute w-4 h-4 delay-1000 bg-orange-300 rounded-full -bottom-6 -right-6 animate-float"></div>
        <div className="absolute w-2 h-2 delay-500 bg-orange-200 rounded-full top-1/2 -right-8 animate-float"></div>

        {/* Profile Image Container */}
        <div
          ref={imageRef}
          className="relative w-64 h-64 overflow-hidden transition-all duration-300 ease-out rounded-full cursor-pointer sm:w-80 sm:h-80 ring-4 ring-orange-500"
          style={{
            transform: getTransform(),
            boxShadow: isHovering
              ? `0 0 80px 15px rgba(255,100,0,0.6),
                 ${mousePosition.x * 15}px ${
                  mousePosition.y * 15
                }px 30px rgba(0,0,0,0.3)`
              : "0 0 60px 10px rgba(255,100,0,0.4)",
          }}
        >
          <img
            src={pfpPortfolio}
            alt="Mouad Portrait"
            className="object-cover w-full h-full transition-all duration-300"
            style={{
              filter: isHovering
                ? "brightness(1.1) contrast(1.05) saturate(1.1)"
                : "none",
              transform: isHovering ? "scale(1.1)" : "scale(1)",
            }}
          />

          {/* Interactive Overlay */}
          <div
            className="absolute inset-0 transition-all duration-300 opacity-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-orange-300/10"
            style={{
              opacity: isHovering ? 1 : 0,
              background: isHovering
                ? `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${
                    (mousePosition.y + 1) * 50
                  }%, rgba(255,100,0,0.2) 0%, transparent 50%)`
                : "",
            }}
          />

          {/* Animated Border */}
          <div
            className="absolute inset-0 border-2 border-transparent rounded-full bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-padding"
            style={{
              opacity: isHovering ? 1 : 0,
              transform: isHovering ? "scale(1.05)" : "scale(1)",
              transition: "all 0.3s ease-out",
            }}
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
          }
        }
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4; 
          }
          50% { 
            opacity: 0.7; 
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Hero;
