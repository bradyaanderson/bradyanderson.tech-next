import React from "react";
import { useRouter } from "next/router";
import CategoryHeadNavigator from "../../../components/blog/navigation/CategoryHeadNavigator";
import PostNavigationContainer from "../../../components/blog/navigation/PostNavigationContainer";
import blogMap from "../../../utils/blogMap";
import { getRecentCategoryPostDetails } from "../../../utils/navigationUtils";
import {
  blogCategoryToColorMap,
  CategoryBasename,
} from "../../../constants/constants";
import styles from "../../../styles/blog/blog.module.scss";
import Head from "next/head";

interface Props {
  categoryBasename: string;
}

export async function getStaticPaths() {
  const paths = Object.values(CategoryBasename).map((basename) => ({
    params: {category: basename}
  }))
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const categoryBasename = context.params.category;
  return {
    props: {categoryBasename}
  }
}

/** Blog category page. */
const BlogCategory = ({categoryBasename}: Props) => {
  const router = useRouter();
  const { asPath: pathname } = router;
  const categoryData = blogMap.routes[categoryBasename];
  if (!categoryData) return null;
  const { title, routes, Component } = categoryData;

  return (
    <>
      <Head>
        <title>{title} - Blog</title>
      </Head>
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
    </>
  );
};

export default BlogCategory;
