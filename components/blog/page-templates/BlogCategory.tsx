import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PostNavigationContainer from "../navigation/PostNavigationContainer";
import { getRecentCategoryPostDetails } from "../../../utils/navigationUtils";
import CategoryHeadNavigator from "../navigation/CategoryHeadNavigator";
import * as path from "path";
import { BlogCategoryProps } from "../../../types/Sitemap";
import { scrollToTop } from "../../../utils/generalUtils";

/** Blog category template. */
const BlogCategory: React.FunctionComponent<BlogCategoryProps> = ({
  title,
  routes,
  children,
}) => {
  const router = useRouter();
  const { pathname } = router;
  const baseName = path.basename(pathname);

  useEffect(scrollToTop, []);

  return (
    <>
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
