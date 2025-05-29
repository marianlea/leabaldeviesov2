import { NavLink, useLocation } from "react-router-dom";

const bgColours = [
  "bg-mainGray",
  "bg-ceramic-50",
  "bg-cobalt-50",
  "bg-cobalt-100",
  "bg-eggyolk-100",
];

export default function SideBar({ tabs }) {
  const currentPath = useLocation().pathname;

  // Cases
  const cases = {
    // case 1
    // 1 whole div - ceramic 50
    1: (tabName) => (
      <div className="w-full h-full bg-ceramic-50 flex items-center justify-center rounded-r-2xl xl:rounded-r-4xl tracking-widest">
        <div className="-rotate-90 text-cobalt-50 italic font-bold">
          {tabName}
        </div>
      </div>
    ),
    // case 2
    // 1 whole div - cobalt 50
    2: (tabName) => (
      <div className="w-full h-full bg-cobalt-50 flex items-center justify-center tracking-widest rounded-tl-2xl xl:rounded-tl-4xl">
        <div className="-rotate-90">{tabName}</div>
      </div>
    ),
    // case 3
    // 1/12 div - cobalt 50
    // 11/12 div - cobalt 100
    3: (tabName) => (
      <>
        <div className="h-full w-1/12 bg-cobalt-50"></div>
        <div className="h-full w-11/12 bg-cobalt-100 rounded-tl-2xl xl:rounded-tl-4xl flex justify-center items-center tracking-widest">
          <div className="-rotate-90">{tabName}</div>
        </div>
      </>
    ),
    // case 4
    // 1/12 div - cobalt 50
    // 1/12 div - cobalt 100
    // 10/12 div - eggyolk 100
    4: (tabName) => (
      <>
        <div className="h-full w-1/12 bg-cobalt-50"></div>
        <div className="h-full w-1/12 bg-cobalt-100"></div>
        <div className="h-full w-10/12 bg-eggyolk-100 rounded-tl-2xl xl:rounded-tl-4xl flex justify-center items-center tracking-widest">
          <div className="-rotate-90">{tabName}</div>
        </div>
      </>
    ),
  };

  const caseSetter = (currentPath) => {
    switch (currentPath) {
      // If currentPath === home-tab
      case "/home":
        // render 1, case 2, case 3, case 4
        return [
          cases[1]("home"),
          cases[2]("about"),
          cases[3]("projects"),
          cases[4]("contact"),
        ];
      // If currentPath === about-tab
      case "/about":
        // render case 2, case 1, case 3, case 4
        return [
          cases[2]("home"),
          cases[1]("about"),
          cases[3]("projects"),
          cases[4]("contact"),
        ];
      // If currentPath === projects-tab
      case "/projects":
        // render case 2, case 3, case 1, case 4
        return [
          cases[2]("home"),
          cases[3]("about"),
          cases[1]("projects"),
          cases[4]("contact"),
        ];
      // If currentPath === contact-tab
      case "/contact":
        // render case 2, case 3, case 4, case 1
        return [
          cases[2]("home"),
          cases[3]("about"),
          cases[4]("projects"),
          cases[1]("contact"),
        ];
      default:
        return [
          cases[1]("home"),
          cases[2]("about"),
          cases[3]("projects"),
          cases[4]("contact"),
        ];
    }
  };

  const bgColourSetter = (currentPath) => {
    switch (currentPath) {
      case "/home":
        return [bgColours[0], bgColours[1], bgColours[2], bgColours[3]];
      case "/about":
        return [bgColours[1], bgColours[0], bgColours[3], bgColours[3]];
      case "/projects":
        return [bgColours[1], bgColours[2], bgColours[0], bgColours[3]];
      case "/contact":
        return [bgColours[1], bgColours[2], bgColours[3], bgColours[0]];
      default:
        return [bgColours[0], bgColours[1], bgColours[2], bgColours[3]];
    }
  };

  return (
    <aside className="h-full w-[15%] lg:w-[10%] xl:w-[8%] flex flex-col fixed right-0 top-0 text-ceramic-50 text-sm lg:text-2xl lg:tracking-widest">
      {tabs.map((tab, idx) => (
        <NavLink
          key={idx}
          className={`${
            tab.title
          }-tab flex-1 flex  justify-center items-center  ${
            bgColourSetter(currentPath)[idx]
          }`}
          to={tab.path}
        >
          {caseSetter(currentPath)[idx]}
        </NavLink>
      ))}
    </aside>
  );
}
