import { useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import mendls from "../assets/images/mendls.png";
import pipeline from "../assets/images/pipeline.png";
import stitches from "../assets/images/stitches.png";
import tictac from "../assets/images/tic-tac-toe.png";
import ProjectCard from "../components/ProjectCard";

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
    images: [mendls, pipeline, stitches, tictac],
  },
  {
    name: "pipeline",
    githubLink: "https://github.com/yangzhie/pipeline",
    liveSite: "https://github.com/yangzhie/pipeline",
    description:
      "Pipeline was created by a small group of four, pipeline is a single page application using REST JSON API to call petrol stations and their locations utilising Google Maps API, the app also features nearest servos based on user location as well as current time and date.",
    techUsed: ["javascript", "node", "express", "css", "html"],
    images: [pipeline, mendls, stitches, tictac],
  },
  {
    name: "stitches",
    githubLink: "https://github.com/marianlea/stitches",
    liveSite: "https://stitches-z160.onrender.com/",
    description:
      "Stitches is a multipage CRUD app, where people can sign up, log in and out using BCrypt for password-hashing and built in web forms to collect data from users who can post and reply to posts, follow other users and view their posts in their feed when logged in, session cookies were also implemented for better user experience when navigating through the app as well as security.",
    techUsed: ["postgres", "javascript", "node", "express", "css", "html"],
    images: [stitches, mendls, pipeline, tictac],
  },
  {
    name: "tic-tac-toe",
    githubLink: "https://github.com/marianlea/tic-tac-toe",
    liveSite: "https://marianlea.github.io/tic-tac-toe/",
    description:
      "This Ghibli Theme tic-tac-toe game has a responsive interface that allows players to enter their name, choose their avatars that also serves as their token in the board, it keeps track of scores by reducing one heart from the player who lost in the round, the first player who runs out of hearts loses and the other player is declared the winner.",
    techUsed: ["javascript", "node", "express", "css", "html"],
    images: [tictac, mendls, pipeline, stitches],
  },
];

export default function Projects() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

  const handleUpBtn = () => {
    setCurrentProjectIdx((currentProjectIdx) =>
      currentProjectIdx === projects.length - 1 ? 0 : currentProjectIdx - 1
    );
  };

  const handleDownBtn = () => {
    setCurrentProjectIdx((currentProjectIdx) =>
      currentProjectIdx === projects.length - 1 ? 0 : currentProjectIdx + 1
    );
  };

  return (
    <div className="projects font-description h-full w-full flex flex-col items-center justify-center px-3 md:px-4 lg:px-10 xl:px-20">
      <div
        className="w-full flex flex-col items-center justify-center transition-transform ease-out duration-500"
        style={{ transform: `translateY(-${currentProjectIdx * 100}vh)` }}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <div className="left-2 bottom-2 fixed flex flex-col border-mainGray border rounded-2xl opacity-50">
        <button
          disabled={currentProjectIdx === 0}
          className={`${
            currentProjectIdx === 0 ? "opacity-10" : "opacity-100"
          }`}
          onClick={handleUpBtn}
        >
          <ChevronUp size={30} />
        </button>
        <button
          className={`${
            currentProjectIdx === projects.length - 1
              ? "opacity-10"
              : "opacity-100"
          }`}
          disabled={currentProjectIdx === projects.length - 1}
          onClick={handleDownBtn}
        >
          <ChevronDown size={30} className="" />
        </button>
      </div>
    </div>
  );
}
