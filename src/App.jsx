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
        <main className="py-20 px-6">
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
        <SideBar
          sideBarLinks={sideBarLinks}
          colours={colours}
          customMargin={customMargin}
          className="h-full overflow-hidden"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
