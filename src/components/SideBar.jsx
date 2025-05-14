import SideBarLinks from "./SideBarLinks";

function SideBar({ sideBarLinks }) {
  return (
    <sidebar className="sidebar">
      <SideBarLinks
        sideBarLinks={sideBarLinks}
        className="sideBarLinks"
      ></SideBarLinks>
    </sidebar>
  );
}

export default SideBar;
