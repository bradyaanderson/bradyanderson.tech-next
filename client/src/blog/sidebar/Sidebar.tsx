import Category from "./Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";
import React, { useState } from "react";

/** Blog sidebar. Used for navigating blog. */
function Sidebar() {
  const startSidebarOpen = window.innerWidth > 640;
  const [open, setOpen] = useState(startSidebarOpen);
  function handleRollupClick() {
    setOpen(!open);
    console.log("Button clicked");
  }

  const sidebarClasses = classNames({
    sidebar: true,
    "sidebar-close": !open,
  });

  const sidebarNavigationClasses = classNames({
    "sidebar-navigation": true,
    "sidebar-close": !open,
  });

  return (
    <div className={sidebarClasses}>
      <div className="sidebar-rollup">
        <button className="sidebar-rollup-icon" onClick={handleRollupClick}>
          <FontAwesomeIcon className="about-icon" icon={faBars} />
        </button>
      </div>
      <div className={sidebarNavigationClasses}>
        <Category
          name="bradyanderson.tech"
          path="/bradyanderson.tech"
          subCategories={{
            Test: "/test",
          }}
        />
        {/*<Category name="Macintosh" path="/macintosh" subCategories={{}} />*/}
        {/*<Category name="Buzz GB" path="/buzz-gb" subCategories={{}} />*/}
      </div>
    </div>
  );
}

export default Sidebar;
