import React from "react";
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

  return (
    <section className="px-6 py-20 mx-auto max-w-7xl sm:px-8 lg:px-12">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Crafting Experiences Across{" "}
          <span className="text-orange-400">Tech & Design</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          As a Software Engineer at the intersection of creativity and
          technology, I bring ideas to life through code, design, and strategy —
          mastering both the technical and aesthetic sides of development.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-start p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-orange-400 hover:shadow-[0_0_30px_-10px_rgba(251,146,60,0.5)] transition-all duration-300"
          >
            <div className="mb-4 transition-transform duration-300 transform group-hover:scale-110">
              {skill.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              {skill.title}
            </h3>
            <p className="leading-relaxed text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Body;
