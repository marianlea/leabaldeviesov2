import SideBarLinks from "./SideBarLinks";
export default function SideBar({ sideBarLinks, colours, customMargin }) {
  return (
    <aside className="sidebar">
      <SideBarLinks
        sideBarLinks={sideBarLinks}
        colours={colours}
        customMargin={customMargin}
        className="sideBarLinks"
      ></SideBarLinks>
    </aside>
  );
}
