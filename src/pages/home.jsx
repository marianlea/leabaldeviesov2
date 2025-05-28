import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home h-full w-full flex flex-col justify-center px-4 md:pl-20 xl:relative">
      <div className="">
        <section className="font-description text-5xl md:text-7xl lg:text-9xl text-mainGray xl:text-9xl">
          hello, i'm
          <p
            className="font-accent text-10xl text-cobalt-100 text-justify md:text-12xl
          lg:text-12xl
          xl:text-13xl"
          >
            Lea
          </p>
        </section>
        <section className="w-11/12 xl:w-full">
          <p
            className="font-description text-xs tracking-custom leading-relaxed text-justify text-mainGray 
          md:text-xl
          lg:text-2xl xl:absolute xl:w-3/12 xl:right-0 xl:top-100 xl:items-end"
          >
            — a junior software engineer with a background in childcare and a
            love for building interactive, human-centered web experiences. After
            completing a 3-month coding bootcamp, I’m now transitioning fully
            into tech and excited to grow as a developer.
          </p>
        </section>
      </div>
      <section className="mt-12 font-main text-xl italic text-outlineGray md:text-4xl lg:text-6xl">
        <p>
          <NavLink
            to="/projects"
            //  onClick={() => onClickTab("projects-tab")}
          >
            view projects
          </NavLink>
        </p>
        <p>
          <a
            href="/Lea_Baldevieso.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            see my resume
          </a>
        </p>
        <p>
          <NavLink to="/contact">send a message</NavLink>
        </p>
      </section>
    </div>
  );
}
