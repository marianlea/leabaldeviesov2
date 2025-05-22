import SideBarLinks from "./SideBarLinks";
export default function SideBar({ sideBarLinks, colours, customMargin }) {
  return (
    <aside className="sidebar">
      {/* <SideBarLinks
        sideBarLinks={sideBarLinks}
        colours={colours}
        customMargin={customMargin}
        className="sideBarLinks"
      ></SideBarLinks>
       */}

      <div className="bg-ceramic-50">
        <div className="bg-cobalt-100">
          <div className="bg-cobalt-50">
            <div className="bg-eggyolk-100"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
