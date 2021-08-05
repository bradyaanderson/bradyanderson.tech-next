import Category from "./Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";
import React, { useState } from "react";

/** blog sidebar. Used for navigating blog. */
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
    "sidebar-invisible": !open,
  });

  return (
    <div className={sidebarClasses}>
      <div className="sidebar-rollup">
        <button className="sidebar-rollup-icon" onClick={handleRollupClick}>
          <FontAwesomeIcon className="about-icon" icon={faBars} />
        </button>
      </div>
      <div className={sidebarNavigationClasses}>
        <Category name="Welcome" path="/" subCategories={{}} />
        <Category
          name="Retro Computing"
          path="/retro-computing"
          subCategories={{
            "Opening up a Macintosh SE/30": "/opening-a-mac-se30",
          }}
        />
        <Category
          name="Retro Gaming"
          path="/retro-gaming"
          subCategories={
            {
              // "Replacing a Game Boy Color Speaker":
              //   "/replacing-game-boy-color-speaker",
            }
          }
        />
        <Category
          name="bradyanderson.tech"
          path="/bradyanderson.tech"
          subCategories={{
            "Getting Started": "/getting-started",
            "Using My Custom Domain": "/custom-hover-domain-for-heroku-app",
            "Moving to AWS": "/moving-to-aws",
            "Setting up Image Storage": "/setting-up-image-storage",
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
