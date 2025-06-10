import { useState } from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import mendls from "../assets/images/mendls.png";
import mendlsShop from "../assets/images/mendls_shop.png";
import mendlsBasket from "../assets/images/mendls_basket.png";
import mendlsInfo from "../assets/images/mendls_info.png";
import mendlsPayment from "../assets/images/mendls_payment.png";
import mendlsThankyou from "../assets/images/mendls_thankyou.png";
import pipeline from "../assets/images/pipeline.png";
import piplelineDark from "../assets/images/pipeline_darkmode.png";
import stitches from "../assets/images/stitches.png";
import stitchesHome from "../assets/images/stitches_home.png";
import stitchesProfile from "../assets/images/stitches_profile.png";
import stitchesWrite from "../assets/images/stitches_write.png";
import stitchesReply from "../assets/images/stitches_reply.png";
import tictac from "../assets/images/tic-tac-toe.png";
import tictacTurn from "../assets/images/tictac_turn.png";
import tictacRound from "../assets/images/tictac_round.png";
import tictacDraw from "../assets/images/tictac_draw.png";
import tictacRestart from "../assets/images/tictac_turn.png";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "mendl's",
    ref: 4,
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
    images: [
      mendls,
      mendlsShop,
      mendlsBasket,
      mendlsInfo,
      mendlsPayment,
      mendlsThankyou,
    ],
  },
  {
    name: "pipeline",
    ref: 3,
    githubLink: "https://github.com/yangzhie/pipeline",
    liveSite: "",
    description:
      "Pipeline was created by a small group of four, pipeline is a single page application using REST JSON API to call petrol stations and their locations utilising Google Maps API, the app also features nearest servos based on user location as well as current time and date.",
    techUsed: ["javascript", "node", "express", "css", "html"],
    images: [pipeline, piplelineDark],
  },
  {
    name: "stitches",
    ref: 2,
    githubLink: "https://github.com/marianlea/stitches",
    liveSite: "",
    description:
      "Stitches is a multipage CRUD app, where people can sign up, log in and out using BCrypt for password-hashing and built in web forms to collect data from users who can post and reply to posts, follow other users and view their posts in their feed when logged in, session cookies were also implemented for better user experience when navigating through the app as well as security.",
    techUsed: ["postgres", "javascript", "node", "express", "css", "html"],
    images: [
      stitches,
      stitchesHome,
      stitchesProfile,
      stitchesWrite,
      stitchesReply,
    ],
  },
  {
    name: "tic-tac-toe",
    ref: 1,
    githubLink: "https://github.com/marianlea/tic-tac-toe",
    liveSite: "https://marianlea.github.io/tic-tac-toe/",
    description:
      "This Ghibli Theme tic-tac-toe game has a responsive interface that allows players to enter their name, choose their avatars that also serves as their token in the board, it keeps track of scores by reducing one heart from the player who lost in the round, the first player who runs out of hearts loses and the other player is declared the winner.",
    techUsed: ["javascript", "node", "express", "css", "html"],
    images: [tictac, tictacTurn, tictacRound, tictacDraw, tictacRestart],
  },
];

export default function Projects() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

  // const handleUpBtn = () => {
  //   setCurrentProjectIdx((currentProjectIdx) =>
  //     currentProjectIdx === projects.length - 1 ? 0 : currentProjectIdx - 1
  //   );
  // };

  // const handleDownBtn = () => {
  //   setCurrentProjectIdx((currentProjectIdx) =>
  //     currentProjectIdx === projects.length - 1 ? 0 : currentProjectIdx + 1
  //   );
  // };

  return (
    <div className="projects font-description h-full w-full flex flex-col items-center justify-center px-3 md:px-4 lg:px-10 xl:px-20">
      <div
        className="w-full flex flex-col items-center justify-center transition-transform ease-out duration-500"
        style={{ transform: `translateY(-${currentProjectIdx * 100}vh)` }}
      >
        {projects.map((project, idx) => (
          <>
            <ProjectCard
              key={idx}
              project={project}
              totalProj={projects.length}
            />
          </>
        ))}
      </div>
      <div className="left-2 lg:left-4 2xl:left-80 bottom-2 lg:bottom-4 fixed flex flex-col 2xl:justify-center 2xl:h-screen">
        {/* <button
          disabled={currentProjectIdx === 0}
          className={`${
            currentProjectIdx === 0 ? "opacity-10" : "opacity-30"
          } rounded-full bg-outlineGray p-1 mb-2 lg:p-4`}
          onClick={handleUpBtn}
        >
          <ChevronUp size={30} />
        </button>
        <button
          className={`${
            currentProjectIdx === projects.length - 1
              ? "opacity-10"
              : "opacity-30"
          } rounded-full bg-outlineGray p-1 lg:p-4`}
          disabled={currentProjectIdx === projects.length - 1}
          onClick={handleDownBtn}
        >
          <ChevronDown size={30} className="" />
        </button> */}
      </div>
    </div>
  );
}
