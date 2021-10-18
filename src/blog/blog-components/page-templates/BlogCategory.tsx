import React, { useEffect } from "react";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";
import { BlogCategoryProps } from "../../../../types/Sitemap";
import { useLocation } from "react-router-dom";
import PostNavigationContainer from "../navigation/PostNavigationContainer";
import { getRecentCategoryPostDetails } from "../../utils/navigationUtils";
import CategoryHeadNavigator from "../navigation/CategoryHeadNavigator";
import * as path from "path";

/** Blog category template. */
const BlogCategory: React.FunctionComponent<BlogCategoryProps> = ({
  title,
  routes,
  children,
}) => {
  const { pathname } = useLocation();
  const baseName = path.basename(pathname);

  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-category">
        <CategoryHeadNavigator currentCategoryTitle={title} />
        <h1 className={`blog-title ${baseName}-accent-text`}>{title}</h1>
        <div className="blog-children">{children}</div>
        <PostNavigationContainer
          postDetailsList={getRecentCategoryPostDetails(pathname, routes)}
        />
      </div>
    </>
  );
};

export default BlogCategory;
