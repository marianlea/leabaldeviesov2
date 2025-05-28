import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <div
        className="layout-setter-container min-h-screen bg-ceramic-50 grid grid-cols-[85%_15%] lg:grid-cols-[90%_10%]
      xl:grid-cols_[92%_8%] gap-0"
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
    </BrowserRouter>
  );
}

export default App;
