// import webPortrait from "../assets/images/web_portrait.jpg";
import mobilePortrait from "../assets/images/mobile_portrait.jpg";

function About() {
  return (
    <div className="about">
      <p className="text-xs text-justify font-description text-mainGray mb-8 leading-relaxed tracking-wider">
        I first discovered HTML and CSS during a college entrepreneurship
        course, and I was amazed by how a few lines of code could bring part of
        my vision to life. Although JavaScript felt out of reach at the time,
        the experience sparked my interest in coding. As a creative person, the
        ability to build something from a blank canvas was both exciting and
        fulfilling. This initial exposure planted the seed that would later grow
        into a passion for software engineering.
      </p>
      <div className="w-full flex justify-center items-center mb-3">
        <hr className="w-10/12 bg-mainGray"></hr>
      </div>
      <img src={mobilePortrait} className=""></img>
      <div className="w-full flex justify-center items-center mt-3">
        <hr className="w-10/12 bg-mainGray"></hr>
      </div>
      <p className="text-xs text-justify font-description mt-8 text-mainGray leading-relaxed tracking-wider">
        Before transitioning into tech, I worked as a pastry chef and early
        childhood educator—roles that honed my creativity, attention to detail,
        and ability to follow structured processes. These careers also
        strengthened my problem-solving skills and helped me grow in areas I
        initially struggled with, such as leadership. Managing a kitchen for
        nearly six years taught me to lead with empathy while staying focused on
        goals. Becoming a software engineer now allows me to apply all these
        experiences, especially as I continue to build on them through an
        intensive, full-time software engineering program that equipped me with
        technical skills and best practices.
      </p>
    </div>
  );
}

export default About;
