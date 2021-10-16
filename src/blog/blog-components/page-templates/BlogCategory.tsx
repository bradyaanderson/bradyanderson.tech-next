import React, { useEffect } from "react";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";
import { BlogCategoryProps } from "../../../../types/Sitemap";
import { useLocation } from "react-router-dom";
import RecentPostsContainer from "../navigation/RecentPostsContainer";
import { getRecentCategoryPostDetails } from "../../utils/navigationUtils";

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
        <h1 className="blog-title">{title}</h1>
        <div className="blog-children">{children}</div>
        <RecentPostsContainer
          postDetailsList={getRecentCategoryPostDetails(pathname, routes)}
        />
      </div>
    </>
  );
};

export default BlogCategory;
