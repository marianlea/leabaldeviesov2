// import { Link } from "react-router-dom";

// const linkHeight = ["h-full", "h-3/4", "h-1/2", "h-1/4"];

// function SideBarLinks({ sideBarLinks, colours, customMargin }) {
//   return (
//     <section className="flex flex-col h-full">
//       {sideBarLinks.map((sideBarLink, idx) => (
//         <Link
//           key={idx}
//           to={sideBarLink.path}
//           className={`flex-1 items-center justify-center flex rounded-tl-lg ${colours[idx]} ${customMargin[idx]} ${linkHeight[idx]}`}
//         >
//           <div className="-rotate-90">{sideBarLink.text}</div>
//         </Link>
//       ))}
//     </section>
//   );
// }

// export default SideBarLinks;

import { Link } from "react-router-dom";

const linkHeight = ["h-full", "h-3/4", "h-1/2", "h-1/4"];

const linkMargins = ["mt-0", "mt-20", "mt-40", "mt-60"];

export default function SideBarLinks({ sideBarLinks, colours, customMargin }) {
  return (
    <section className="h-full">
      {sideBarLinks.map((sideBarLink, idx) => (
        <div
          key={idx}
          className={`absolute rounded-tl-lg ${colours[idx]} ${customMargin[idx]} ${linkHeight[idx]} ${linkMargins[idx]}`}
        >
          <Link key={idx} to={sideBarLink.path}>
            <div className="-rotate-90">{sideBarLink.text}</div>
          </Link>
        </div>
      ))}
    </section>
  );
}
