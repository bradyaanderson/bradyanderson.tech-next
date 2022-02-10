import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import CategoryHeadNavigator from "../../../components/blog/navigation/CategoryHeadNavigator";
import PostNavigationContainer from "../../../components/blog/navigation/PostNavigationContainer";
import blogMap from "../../../utils/blogMap";
import { getRecentCategoryPostDetails } from "../../../utils/navigationUtils";
import {
  blogCategoryToColorMap,
  CategoryBasename,
} from "../../../constants/constants";
import styles from "../../../styles/blog/blog.module.scss";

/** Blog category page. */
const BlogCategory: NextPage = () => {
  const router = useRouter();
  const { query, asPath: pathname } = router;
  const { category: categoryBasename }: { category: CategoryBasename } = query;
  const categoryData = blogMap.routes[categoryBasename];
  if (!categoryData) return null;
  const { title, routes, Component } = categoryData;

  return (
    <div className={styles.blogContent}>
      <CategoryHeadNavigator currentCategoryTitle={title} />
      <h1
        className={styles.blogTitle}
        style={{ color: blogCategoryToColorMap[categoryBasename] }}
      >
        {title}
      </h1>
      <Component />
      <PostNavigationContainer
        postDetailsList={getRecentCategoryPostDetails(pathname, routes)}
      />
    </div>
  );
};

export default BlogCategory;
