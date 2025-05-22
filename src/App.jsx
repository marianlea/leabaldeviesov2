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
        {/* <aside className="fixed h-full w-[15vw] top-0 right-0 place-items-end">
          <div className="bg-ceramic-50 h-full w-full rounded-tl-lg border-1 border-ceramic-50 content-end place-items-end">
            <div className="-rotate-90 mb-5">home</div>
            <div className="bg-cobalt-50 h-9/12 w-11/12 rounded-tl-lg border-1 border-cobalt-50 content-end place-items-end">
              <div className="-rotate-90 mb-5">about</div>
              <div className="bg-cobalt-100 h-9/12 w-11/12 rounded-tl-lg border-1 border-cobalt-100 content-end place-items-end">
                <div className="-rotate-90 p">projects</div>
                <div className="bg-eggyolk-100 h-1/2 w-11/12 rounded-tl-lg border-1 border-eggyolk-100 content-end place-items-end">
                  <div className="-rotate-90">contact</div>
                </div>
              </div>
            </div>
          </div>
        </aside> */}
        <aside className="fixed h-full w-[15vw] top-0 right-0 place-items-end">
          <div className="bg-ceramic-50 h-full w-[15vw] rounded-tl-lg border-1 border-ceramic-50 bottom-0 right-0 fixed content-start">
            <div className="bg-cobalt-50 h-9/12 w-[14vw] rounded-tl-lg border-1 border-cobalt-50 bottom-0 right-0 fixed place-content-start">
              <div className="bg-cobalt-100 h-6/12 w-[13vw] rounded-tl-lg border-1 border-cobalt-100 bottom-0 right-0 fixed content-start">
                <div className="bg-eggyolk-100 h-3/12 w-[12vw] rounded-tl-lg border-1 border-eggyolk-100 bottom-0 right-0 fixed content-center"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </BrowserRouter>
  );
}

export default App;
