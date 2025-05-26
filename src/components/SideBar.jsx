import { useState } from "react";
import { NavLink } from "react-router-dom";

const colours = [
  "bg-ceramic-50",
  "bg-cobalt-50",
  "bg-cobalt-100",
  "bg-eggyolk-100",
];
export default function SideBar() {
  const [activeTab, setActiveTab] = useState("home-tab");
  return (
    <aside className="h-full flex flex-col fixed right-0 top-0 text-ceramic-50 ">
      <NavLink
        to="/"
        className="home-tab tracking-widest home-button bg-ceramic-50 flex-1 flex justify-center items-center text-cobalt-50"
      >
        <div className="-rotate-90 ">home</div>
      </NavLink>
      <NavLink
        to="/about"
        className="about-tab flex-1 flex justify-center items-center rounded-tl-2xl tracking-widest"
      >
        <div className="h-full w-1/12 bg-ceramic-50"></div>
        <div className="h-full w-11/12 flex justify-center items-center bg-cobalt-100 rounded-tl-2xl">
          <div className="-rotate-90">about</div>
        </div>
      </NavLink>
      <NavLink
        to="/projects"
        className="projects-tab bg-cobalt-100  h-full w-full flex-1 flex flex-row tracking-widest"
      >
        <div className="h-full w-1/12 bg-ceramic-50"></div>
        <div className="h-full w-1/12 bg-cobalt-100 flex justify-center items-center"></div>
        <div className="bg-cobalt-50 w-10/12 flex items-center justify-center rounded-tl-2xl">
          <div className="-rotate-90">projects</div>
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        className="about-tab bg-cobalt-50 h-full w-full flex-1 flex flex-row tracking-widest"
      >
        <div className="h-full w-1/12 bg-ceramic-50"></div>
        <div className="h-full w-1/12 bg-cobalt-100"></div>
        <div className="h-full w-1/12 bg-cobalt-50"></div>
        <div className="bg-eggyolk-100 w-9/12 flex items-center justify-center rounded-tl-2xl">
          <div className="-rotate-90">contact</div>
        </div>
      </NavLink>
    </aside>
  );
}
