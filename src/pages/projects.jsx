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
      "a single-page application utilising reactjs and material ui for the client side, expressjs and nodejs for the server and postgresql for the database, the shop features a dynamic shopping basket in sync with the shop menu / pastries section, payment processing using stripe, persisted shopping basket on page refresh utilising localstorage",
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
      "created by a small group of four, pipeline is a single page application using REST JSON API to call petrol stations and their locations utilising Google Maps API, the app also features nearest servos based on user location as well as current time and date",
    techUsed: ["javascript", "node", "express", "css", "html"],
    image: pipeline,
  },
  {
    name: "stitches",
    githubLink: "https://github.com/marianlea/stitches",
    liveSite: "https://stitches-z160.onrender.com/",
    description:
      "stitches is a multipage CRUD app, where people can sign up, log in and out using BCrypt for password-hashing and built in web forms to collect data from users who can post and reply to posts, follow other users and view their posts in their feed when logged in, session cookies were also implemented for better user experience when navigating through the app as well as security",
    techUsed: ["postgres", "javascript", "node", "express", "css", "html"],
    image: stitches,
  },
  {
    name: "tic-tac-toe",
    githubLink: "https://github.com/marianlea/tic-tac-toe",
    liveSite: "https://marianlea.github.io/tic-tac-toe/",
    description:
      "a Ghibli Theme tic-tac-toe game that has a responsive interface that allows players to input their name, choose their avatars that also serves as their token in the board, it keeps track of scores by reducing one heart from the player who lost in the round, the first player who runs out of hearts loses and the other player is declared as the winner",
    techUsed: ["javascript", "node", "express", "css", "html"],
    image: tictac,
  },
];

function Projects() {
  return (
    <div className="projects">
      <div
        id="default carousel"
        className="relative w-full"
        data-carousel="static"
      >
        {/* carousel wrapper */}
        <div className="carousel-wrapper h-1/4 relative">
          {projects.map((project, idx) => (
            // items
            <div
              className={`carousel-item-${idx} hidden absolute`}
              data-carousel-item
            >
              <img key={idx} src={project.image} className=" block"></img>
            </div>
          ))}
        </div>
        {/* slide indicators */}
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* slider controls */}
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Projects;
