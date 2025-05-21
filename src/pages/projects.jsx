import { useState } from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import {
  SiMui,
  SiPostgresql,
  SiStripe,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

import Carousel from "../components/Carousel";
import mendls from "../assets/images/mendls.png";
import pipeline from "../assets/images/pipeline.png";
import stitches from "../assets/images/stitches.png";
import tictac from "../assets/images/tic-tac-toe.png";

const projects = [
  {
    name: "mendl's",
    githubLink: "https://github.com/marianlea/mendls",
    liveSite: "https://mendls.vercel.app/",
    description:
      "Mendl's a single-page application utilising reactjs and material ui for the client side, expressjs and nodejs for the server and postgresql for the database, the shop features a dynamic shopping basket in sync with the shop menu / pastries section, payment processing using stripe, persisted shopping basket on page refresh utilising localstorage.",
    techUsed: [
      "react",
      "mui",
      "stripe",
      "postgres",
      "javascript",
      "node",
      "express",
      "css",
      "html",
    ],
    image: mendls,
  },
  {
    name: "pipeline",
    githubLink: "https://github.com/yangzhie/pipeline",
    liveSite: "https://github.com/yangzhie/pipeline",
    description:
      "Pipeline was created by a small group of four, pipeline is a single page application using REST JSON API to call petrol stations and their locations utilising Google Maps API, the app also features nearest servos based on user location as well as current time and date.",
    techUsed: ["javascript", "node", "express", "css", "html"],
    image: pipeline,
  },
  {
    name: "stitches",
    githubLink: "https://github.com/marianlea/stitches",
    liveSite: "https://stitches-z160.onrender.com/",
    description:
      "Stitches is a multipage CRUD app, where people can sign up, log in and out using BCrypt for password-hashing and built in web forms to collect data from users who can post and reply to posts, follow other users and view their posts in their feed when logged in, session cookies were also implemented for better user experience when navigating through the app as well as security.",
    techUsed: ["postgres", "javascript", "node", "express", "css", "html"],
    image: stitches,
  },
  {
    name: "tic-tac-toe",
    githubLink: "https://github.com/marianlea/tic-tac-toe",
    liveSite: "https://marianlea.github.io/tic-tac-toe/",
    description:
      "This Ghibli Theme tic-tac-toe game has a responsive interface that allows players to enter their name, choose their avatars that also serves as their token in the board, it keeps track of scores by reducing one heart from the player who lost in the round, the first player who runs out of hearts loses and the other player is declared the winner.",
    techUsed: ["javascript", "node", "express", "css", "html"],
    image: tictac,
  },
];
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

export default function Projects() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

  const handlePreviousButton = () => {
    setCurrentProjectIdx((currentProjectIdx) =>
      currentProjectIdx === 0 ? projects.length - 1 : currentProjectIdx - 1
    );
  };

  const handleNextButton = () => {
    setCurrentProjectIdx((currentProjectIdx) =>
      currentProjectIdx === projects.length - 1 ? 0 : currentProjectIdx + 1
    );
  };

  return (
    <div className="projects font-description">
      <article>
        <Carousel
          projects={projects}
          currentProjectIdx={currentProjectIdx}
          onClickPreviousButton={handlePreviousButton}
          onClickNextButton={handleNextButton}
        />
        <section className="description-container mt-5 text-xs text-mainGray leading-relaxed tracking-wider text-justify">
          <p>{projects[currentProjectIdx].description}</p>
        </section>

        <section className="tech-stack-container mt-6 flex gap-3 justify-center">
          {projects[currentProjectIdx].techUsed.map((tech) => {
            const Icon = techIcons[tech];
            return Icon ? (
              <Icon
                key={tech}
                className="w-8 h-8 text-cobalt-50 hover:text-eggyolk-100
                transition-colors"
                title={tech}
              />
            ) : (
              <span key={tech}>{tech}</span>
            );
          })}
        </section>
      </article>
      <footer className="flex flex-col items-center justify-center mt-6">
        <button
          className="w-full mb-3 border-1 border-outlineGray text-mainGray text-xs p-2 rounded-2xl hover:text-cobalt-50
          hover:border-cobalt-50"
          onClick={() =>
            window.open(projects[currentProjectIdx].liveSite, "_blank")
          }
        >
          Live Site
        </button>
        <button
          className="w-full border-1 border-outlineGray text-mainGray text-xs p-2 rounded-2xl hover:text-cobalt-50
          hover:border-cobalt-50"
          onClick={() =>
            window.open(projects[currentProjectIdx].githubLink, "_blank")
          }
        >
          Github
        </button>
      </footer>
    </div>
  );
}
