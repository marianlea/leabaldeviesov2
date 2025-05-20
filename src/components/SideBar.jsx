import SideBarLinks from "./SideBarLinks";

function SideBar({ sideBarLinks, colours, customMargin }) {
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

export default SideBar;
