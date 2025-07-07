// import webPortrait from "../assets/images/web_portrait.jpg";
import mobilePortrait from "../assets/images/mobile_portrait.jpg";

export default function About() {
  return (
    <div className="about h-full w-full md:w-full py-10 px-8 md:pt-2 md:py-0 md:px-16 flex flex-col justify-center items-center text-xs text-justify font-description text-mainGray leading-relaxed tracking-wider md:text-sm lg:text-xl">
      <article className="xl:w-7/12 xl:py-20">
        <p className="mb-2">
          I’ve found my north star! — creating tech that feels warm, intuitive,
          and truly helpful. After completing my business degree in culinary
          arts, I spent seven years as a pastry chef, from big hotel chains to
          production kitchens, then became a childcare educator, touching over
          100 little humans’ lives.
        </p>
        <p className="mb-8">
          I’m fuelled by curiosity, creativity, and the courage to try. I bring
          precision and attention to detail (can you believe I used to make over
          300 macarons a day by hand?) and a knack for turning complex ideas
          into experiences that feel simple and joyful.
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
        <p className="mt-8 mb-2">
          Today, I work mainly with JavaScript, React, and Node.js, and I’m
          learning TypeScript to deepen my foundations as I look for my first
          developer role building tech that makes life more possible for the
          humans on the other side of the screen.
        </p>
        <p>
          If my story or passions resonate with you—whether for collaboration or
          a chat—I’d love to connect.
        </p>
      </article>
    </div>
  );
}
