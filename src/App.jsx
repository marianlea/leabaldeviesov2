import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import SideBar from "./components/SideBar";

const sideBarLinks = [
  { path: "/", text: "home", element: <Home /> },
  { path: "/about", text: "about", element: <About /> },
  { path: "/projects", text: "projects", element: <Projects /> },
  { path: "/contact", text: "contact", element: <Contact /> },
];

const colours = [
  "bg-ceramic-50",
  "bg-cobalt-50",
  "bg-cobalt-100",
  "bg-eggyolk-100",
];

const customMargin = ["ml-[0rem]", "ml-[0.2rem]", "ml-[0.4rem]", "ml-[0.6rem]"];

function App() {
  return (
    <BrowserRouter>
      <div className="layout-setter-container min-h-screen bg-ceramic-50 grid grid-cols-[85%_15%]">
        <main className="py-20 px-6 relative">
          <section className="font-main text-gray-300 text-5xl"></section>
          <Routes>
            {sideBarLinks.map((sideBarLink, idx) => (
              <Route
                key={idx}
                path={sideBarLink.path}
                element={sideBarLink.element}
              ></Route>
            ))}
          </Routes>
        </main>
        {/* <SideBar
          sideBarLinks={sideBarLinks}
          colours={colours}
          customMargin={customMargin}
          className="h-full overflow-hidden"
        /> */}
        <aside className="h-full w-full flex flex-col">
          <div className="home-button bg-ceramic-50 flex-1 flex justify-center items-center">
            <div className="-rotate-90">home</div>
          </div>
          <div className="about-button bg-cobalt-100 flex-1 flex justify-center items-center rounded-tl-2xl">
            <div className="-rotate-90">about</div>
          </div>
          <div className="projects-button bg-cobalt-100  h-full w-full flex-1 flex flex-row">
            <div className="h-full w-1/12 bg-cobalt-100 flex justify-center items-center"></div>
            <div className="bg-cobalt-50 w-11/12 flex items-center justify-center rounded-tl-2xl">
              <div className="-rotate-90">projects</div>
            </div>
          </div>
          <div className="about-button bg-cobalt-50 h-full w-full flex-1 flex flex-row">
            <div className="h-full w-1/12 bg-cobalt-100"></div>
            <div className="h-full w-1/12 bg-cobalt-50"></div>
            <div className="bg-eggyolk-100 w-10/12 flex items-center justify-center rounded-tl-2xl">
              <div className="-rotate-90">about</div>
            </div>
          </div>
        </aside>
      </div>
    </BrowserRouter>
  );
}

export default App;
