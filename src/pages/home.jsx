import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <section className="font-description text-5xl text-mainGray">
        hello, i'm
        <p className="font-accent text-giant text-cobalt-100 text-justify my-[-0.5rem]">
          Lea
        </p>
      </section>
      <section className="font-description text-xs tracking-custom leading-relaxed text-justify text-mainGray">
        — a junior software engineer with a background in childcare and a love
        for building interactive, human-centered web experiences. After
        completing a 3-month coding bootcamp, I’m now transitioning fully into
        tech and excited to grow as a developer.
      </section>
      <section className="mt-12 font-main text-xl italic text-outlineGray">
        <p>
          <Link to="/projects">view projects</Link>
        </p>
        <p>
          <a
            href="/Lea_Baldevieso.pdf"
            target="_blank"
            rel="nooopener noreferrer"
          ></a>
          see my resume
        </p>
        <p>
          <Link to="/contact">send a message</Link>
        </p>
      </section>
    </div>
  );
}
