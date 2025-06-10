import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sun, Moon } from "react-feather";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import SideBar from "./components/SideBar";

const sideBarLinks = [
  {
    path: "/",
    title: "home",
    element: <Home />,
  },
  {
    path: "/about",
    title: "about",
    element: <About />,
  },
  {
    path: "/projects",
    title: "projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    title: "contact",
    element: <Contact />,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const darkModePreference = localStorage.getItem("darkModeOn") === "true";
    return darkModePreference || false;
  });

  useEffect(() => {
    localStorage.setItem("darkModeOn", darkMode ? "true" : "false");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className="app-element">
        <div className="btn-theme-container absolute z-50">
          <button
            onClick={toggleDarkMode}
            className="theme-btn text-mainGray m-[0.5rem]"
            aria-label={darkMode ? "dark monde on" : "dark mode off"}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
        <div
          className="layout-setter-container min-h-screen bg-ceramic-50 grid grid-cols-[85%_15%] lg:grid-cols-[90%_10%]
        xl:grid-cols_[92%_8%] gap-0 transition-colors duration-300"
        >
          <main className="w-full h-full">
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
          <SideBar className="h-full w-full" tabs={sideBarLinks} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
