import React, { useEffect } from "react";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";
import { BlogCategoryProps } from "../../../../types/Sitemap";
import { useLocation } from "react-router-dom";
import PostNavigationContainer from "../navigation/PostNavigationContainer";
import { getRecentCategoryPostDetails } from "../../utils/navigationUtils";
import CategoryHeadNavigator from "../navigation/CategoryHeadNavigator";

/** Blog category template. */
const BlogCategory: React.FunctionComponent<BlogCategoryProps> = ({
  title,
  routes,
  children,
}) => {
  const { pathname } = useLocation();

  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-category">
        <CategoryHeadNavigator currentCategoryTitle={title} />
        <h1 className="blog-title">{title}</h1>
        <div className="blog-children">{children}</div>
        <PostNavigationContainer
          postDetailsList={getRecentCategoryPostDetails(pathname, routes)}
        />
      </div>
    </>
  );
};

export default BlogCategory;
