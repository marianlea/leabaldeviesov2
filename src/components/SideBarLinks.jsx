import { Link } from "react-router-dom";

const linkHeight = ["h-full", "h-3/4", "h-1/2", "h-1/4"];

const linkMargins = ["mt-0", "mt-20", "mt-40", "mt-60"];

// export default function SideBarLinks({ sideBarLinks, colours, customMargin }) {
//   return (
//     <section className="h-full">
//       {sideBarLinks.map((sideBarLink, idx) => (
//         <div
//           key={idx}
//           className={`absolute rounded-tl-lg ${colours[idx]} ${customMargin[idx]} ${linkHeight[idx]} ${linkMargins[idx]}`}
//         >
//           <Link key={idx} to={sideBarLink.path}>
//             <div className="-rotate-90">{sideBarLink.text}</div>
//           </Link>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default function SideBarLinks({ sideBarLinks, colours, customMargin }) {
//   return (
//     <section className="h-full">
//       <div className="bg-ceramic-50">
//         <div className="bg-cobalt-100">
//           <div className="bg-cobalt-50">
//             <div className="bg-eggyolk-100"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function SideBarLinks({ sideBarLinks, colours, customMargin }) {
  return (
    <section className="h-full">
      <div className="bg-ceramic-50"></div>
      <div className="bg-cobalt-100"></div>
      <div className="bg-cobalt-50"></div>
      <div className="bg-eggyolk-100"></div>
    </section>
  );
}
