import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiMui,
  SiPostgresql,
  SiStripe,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
import Carousel from "../components/Carousel";

const techIcons = {
  react: FaReact,
  mui: SiMui,
  stripe: SiStripe,
  postgres: SiPostgresql,
  javascript: SiJavascript,
  node: FaNodeJs,
  express: SiExpress,
  css: FaCss3Alt,
  html: FaHtml5,
};

export default function ProjectCard({ project }) {
  const [currentProjectImgIdx, setCurrentProjectImgIdx] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectImgIdx((idx) => idx === project.images.length - 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const handlePreviousButton = () => {
    setCurrentProjectImgIdx((currentProjectImgIdx) =>
      currentProjectImgIdx === 0
        ? project.images.length - 1
        : currentProjectImgIdx - 1
    );
  };

  const handleNextButton = () => {
    setCurrentProjectImgIdx((currentProjectImgIdx) =>
      currentProjectImgIdx === project.images.length - 1
        ? 0
        : currentProjectImgIdx + 1
    );
  };
  return (
    <article className="project-card w-full h-screen flex flex-col items-center justify-center xl:w-6/12 ">
      <Carousel
        project={project}
        currentProjectImgIdx={currentProjectImgIdx}
        onClickPreviousButton={handlePreviousButton}
        onClickNextButton={handleNextButton}
      />
      <section className="description-container mt-5 text-xs text-mainGray leading-relaxed tracking-wider text-justify md:text-base lg:text-lg 2xl:text-xl">
        <p>{project.description}</p>
      </section>

      <section className="tech-stack-container mt-6 w-10/12 flex gap-2 md:gap-5 justify-center items-center">
        {project.techUsed.map((tech) => {
          const Icon = techIcons[tech];
          return Icon ? (
            <div
              className=""
              key={tech}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Icon
                key={tech}
                className="w-6 h-6 md:w-12 md:h-12 xl:w-10 xl:h-10 text-cobalt-50 hover:text-eggyolk-100
        transition-colors"
                title={tech}
              />
              {hoveredTech === tech && (
                <div className="flex flex-col justify-center items-center">
                  <span className="absolute text-xs mt-8 bg-cobalt-50 py-1 px-3 rounded-2xl text-ceramic-50">
                    {tech}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <span key={tech}>{tech}</span>
          );
        })}
      </section>
      <footer className="flex flex-col items-center justify-center mt-12 w-full text-xs md:text-base lg:text-lg 2xl:text-xl">
        <button
          className="w-full mb-3 border-1 border-outlineGray text-mainGray  p-2 rounded-2xl hover:text-cobalt-50
  hover:border-cobalt-50"
          onClick={() => window.open(project.liveSite, "_blank")}
        >
          Live Site
        </button>
        <button
          className="w-full border-1 border-outlineGray text-mainGray p-2 rounded-2xl hover:text-cobalt-50
  hover:border-cobalt-50"
          onClick={() => window.open(project.githubLink, "_blank")}
        >
          Github
        </button>
      </footer>
    </article>
  );
}
