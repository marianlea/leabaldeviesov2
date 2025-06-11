import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home h-full w-full flex flex-col justify-center px-3 lg:px-8 xl:px-50 2xl:px-80 xl:relative">
      <div className="">
        <section className="font-description text-5xl md:text-7xl lg:text-9xl text-mainGray xl:text-7xl 2xl:text-9xl">
          hello, i'm
          <p
            className="font-accent text-10xl text-cobalt-100 text-justify md:text-12xl
          lg:text-12xl
          2xl:text-13xl dark:text-mainGray"
          >
            Lea
          </p>
        </section>
        <section className="w-11/12 xl:w-full">
          <p
            className="font-description text-xs tracking-custom leading-relaxed text-justify text-mainGray 
          md:text-xl
          lg:text-2xl
          xl:text-xl
          2xl:text-2xl
          xl:absolute xl:w-4/12 2xl:w-3/12 xl:right-30 xl:top-50 2xl:right-80 2xl:top-100 2xl:items-end"
          >
            — a software engineer passionate about turning ideas into real,
            impactful solutions. With 8+ years in hospitality and early
            childhood education, I bring empathy, adaptability, and a love of
            learning to everything I build. I work across the stack with React,
            JavaScript, JS Frameworks, PostgreSQL, and REST APIs — combining
            creativity with technical skills to help people through tech
          </p>
        </section>
      </div>
      <section className="mt-12 font-main text-xl italic text-outlineGray md:text-4xl lg:text-6xl">
        <p>
          <NavLink
            to="/projects"
            className="hover:font-hover"
            //  onClick={() => onClickTab("projects-tab")}
          >
            view my projects
          </NavLink>
        </p>
        <p>
          <a
            href="/Lea_Baldevieso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-hover"
          >
            see my resume
          </a>
        </p>
        <p>
          <NavLink to="/contact" className="hover:font-hover">
            send a message
          </NavLink>
        </p>
      </section>
    </div>
  );
}
