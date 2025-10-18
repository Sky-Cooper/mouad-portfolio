import pfpPortfolio from "../assets/pfpportfolio.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center justify-between gap-12 px-6 py-20 mx-auto max-w-7xl sm:px-8 lg:px-12 md:flex-row"
    >
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-3 font-semibold tracking-wide text-orange-500 uppercase">
          Hello!
        </p>

        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          I’m{" "}
          <span className="text-orange-500">
            Mouad <span className="text-white">Houmada</span>
          </span>
        </h1>

        <h2 className="mb-6 text-xl font-semibold text-orange-400 sm:text-2xl">
          Software Engineer · Full-Stack & Mobile Developer
        </h2>

        <p id="about" className="mb-8 leading-relaxed text-gray-300">
          I’m a final-year Software Engineering student at{" "}
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
          blending functionality with great user experience. I’m also exploring
          the <span className="font-semibold text-white">DevOps</span> world to
          deepen my understanding of deployment, automation, and system
          reliability.
          <br />
          <br />
          Currently, I’m the{" "}
          <span className="font-medium text-orange-400">
            co-founder of Qreeblik Medical
          </span>{" "}
          — a growing healthcare platform designed to simplify and digitize
          medical interactions in Morocco. I love solving problems that connect
          technology with real-world impact.
        </p>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 font-semibold text-white transition bg-orange-500 rounded-full hover:bg-orange-600"
          >
            Let’s talk
          </a>

          <div className="flex justify-center gap-5 text-2xl text-orange-500 sm:justify-start">
            <a
              href="https://www.linkedin.com/in/mouad-houmada-4ba1882b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="transition hover:text-orange-400"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Sky-Cooper"
              className="transition hover:text-orange-400"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/qreeb_lik/"
              className="transition hover:text-orange-400"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute bg-orange-600 rounded-full w-72 h-72 sm:w-96 sm:h-96 blur-3xl opacity-60 animate-pulse"></div>

        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-orange-500 shadow-[0_0_60px_10px_rgba(255,100,0,0.4)]">
          <img
            src={pfpPortfolio}
            alt="Mouad Portrait"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
