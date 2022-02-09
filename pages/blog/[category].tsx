import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as path from "path";
import {getRecentCategoryPostDetails} from "../../utils/navigationUtils";
import {NextPage} from "next";
import CategoryHeadNavigator from "../../components/blog/navigation/CategoryHeadNavigator";
import PostNavigationContainer from "../../components/blog/navigation/PostNavigationContainer";
import blogMap from "../../utils/blogMap";

/** Blog category template. */
const BlogCategory: NextPage = () => {
  const router = useRouter();
  const { query, asPath: pathname } = router;
  const {category} = query;
  const categoryData = blogMap.routes[category];
  if (categoryData == null) return null;
  const {title, routes, Component} = categoryData;

  return (
      <div className={"blog-content"}>
        <div className="blog-category">
          <CategoryHeadNavigator currentCategoryTitle={title} />
          <h1 className={`blog-title ${category}-accent-text`}>{title}</h1>
          <div className="blog-children"><Component /></div>
          <PostNavigationContainer
              postDetailsList={getRecentCategoryPostDetails(pathname, routes)}
          />
        </div>
      </div>
  );
};

export default BlogCategory;
