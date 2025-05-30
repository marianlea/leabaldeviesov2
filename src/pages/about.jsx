// import webPortrait from "../assets/images/web_portrait.jpg";
import mobilePortrait from "../assets/images/mobile_portrait.jpg";

export default function About() {
  return (
    <div className="about h-full w-full md:w-full py-10 px-8 md:pt-2 md:py-0 md:px-16 flex flex-col justify-center items-center text-xs text-justify font-description text-mainGray leading-relaxed tracking-wider md:text-sm lg:text-xl">
      <article className="xl:w-7/12 xl:py-20">
        <p className="mb-8">
          I first discovered HTML and CSS during a college entrepreneurship
          course, and I was amazed by how a few lines of code could bring part
          of my vision to life. Although JavaScript felt out of reach at the
          time, the experience sparked my interest in coding. As a creative
          person, the ability to build something from a blank canvas was both
          exciting and fulfilling. This initial exposure planted the seed that
          would later grow into a passion for software engineering.
        </p>
        <div className="w-full flex justify-center items-center mb-3">
          <hr className="w-10/12 text-hrLine"></hr>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={mobilePortrait} className="lg:w-9/10 xl:w-6/12"></img>
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <hr className="w-10/12 text-hrLine"></hr>
        </div>
        <p className="mt-8">
          Before transitioning into tech, I worked as a pastry chef and early
          childhood educator—roles that honed my creativity, attention to
          detail, and ability to follow structured processes. These careers also
          strengthened my problem-solving skills and helped me grow in areas I
          initially struggled with, such as leadership. Managing a kitchen for
          nearly six years taught me to lead with empathy while staying focused
          on goals. Becoming a software engineer now allows me to apply all
          these experiences, especially as I continue to build on them through
          an intensive, full-time software engineering program that equipped me
          with technical skills and best practices.
        </p>
      </article>
    </div>
  );
}
