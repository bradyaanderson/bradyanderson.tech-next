import React, { useEffect } from "react";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";
import RecentPostsContainer from "../navigation/RecentPostsContainer";
import {
  getCategoryToLink,
  getRecentPostDetails,
} from "../../utils/navigationUtils";
import { BlogIndexProps } from "../../../../types/Sitemap";
import CategoryNavigationContainer from "../navigation/CategoryNavigationContainer";

/** Blog index template. */
const BlogIndex: React.FunctionComponent<BlogIndexProps> = ({
  title,
  routes,
  children,
}) => {
  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-index">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-children">{children}</div>
        <CategoryNavigationContainer
          categoryNameToPath={getCategoryToLink(routes)}
        />
        <RecentPostsContainer postDetailsList={getRecentPostDetails(routes)} />
      </div>
    </>
  );
};

export default BlogIndex;
