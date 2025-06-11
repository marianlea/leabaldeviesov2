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
            — a software engineer driven by the belief that technology should
            make a meaningful difference in people’s lives. Coming from careers
            in both hospitality and early childhood education, I bring a unique
            perspective on empathy, problem-solving, and real-world impact. As a
            career changer, I’m committed to building purposeful, high-quality
            projects that not only grow my skills but also allow me to
            contribute to work that improves dignity, comfort, and opportunity
            for others
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
