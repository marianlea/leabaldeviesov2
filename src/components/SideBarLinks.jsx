import { Link } from "react-router-dom";

function SideBarLinks({ sideBarLinks }) {
  return (
    <section className="flex flex-col h-full">
      {sideBarLinks.map((sideBarLink, idx) => (
        <Link key={idx} to={sideBarLink.path} className="flex-1">
          <div className="-rotate-90">{sideBarLink.text}</div>
        </Link>
      ))}
    </section>
  );
}

export default SideBarLinks;
