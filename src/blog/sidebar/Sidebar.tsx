import Category, { SubCategories } from "./Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import "../../assests/stylesheets/blog/sidebar/Sidebar.scss";
import React, { useState } from "react";
import { BlogPostRoutes } from "../../../types/Sitemap";
import blogMap from "../blogMap";

/** blog sidebar. Used for navigating blog. */
function Sidebar() {
  const startSidebarOpen = window.innerWidth > 640;
  const [open, setOpen] = useState(startSidebarOpen);

  const { routes: categoryRoutes } = blogMap;
  const categories = Object.keys(categoryRoutes);

  function handleRollupClick() {
    setOpen(!open);
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

  /**
   * Builds {@link Category} component given category name.
   *
   * @param category The category name to build {@link Category} component for.
   */
  function buildCategoryComponent(category: string) {
    const categoryRoute = categoryRoutes[category];
    const display = categoryRoute.shortTitle || categoryRoute.title;
    return (
      <Category
        display={display}
        subdirectory={category}
        subCategories={buildSubCategories(categoryRoute.routes)}
        key={category}
      />
    );
  }

  /**
   * Builds an object from {@link BlogPostRoutes} to pass as subcategory prop for {@link Category} component.
   *
   * @param postRoutes The post routes to build subcategories object from.
   */
  function buildSubCategories(postRoutes: BlogPostRoutes): SubCategories {
    const subCategories: SubCategories = {};
    Object.keys(postRoutes).forEach((post) => {
      const { title, shortTitle } = postRoutes[post];
      const display = shortTitle || title;
      subCategories[display] = post;
    });
    return subCategories;
  }

  return (
    <div className={sidebarClasses}>
      <div className="sidebar-rollup">
        <button className="sidebar-rollup-icon" onClick={handleRollupClick}>
          <FontAwesomeIcon className="about-icon" icon={faBars} />
        </button>
      </div>
      <div className={sidebarNavigationClasses}>
        <Category display="Welcome" subdirectory="/" subCategories={{}} />
        {categories.map((category) => buildCategoryComponent(category))}
      </div>
    </div>
  );
}

export default Sidebar;
