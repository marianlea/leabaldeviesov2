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

function App() {
  return (
    <BrowserRouter>
      <div className="layout-setter-container min-h-screen bg-ceramic-50 grid grid-cols-[85%_15%]">
        <section className="py-20 px-6">
          <Routes>
            {/* <SideBar sideBarLinks={sideBarLinks} /> */}
            {sideBarLinks.map((sideBarLink, idx) => (
              <Route
                key={idx}
                path={sideBarLink.path}
                element={sideBarLink.element}
              ></Route>
            ))}
          </Routes>
        </section>
        <section>
          <SideBar sideBarLinks={sideBarLinks} className="flex flex-col" />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
