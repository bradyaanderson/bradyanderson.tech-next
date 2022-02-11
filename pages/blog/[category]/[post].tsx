import React from "react";
import moment from "moment";
import PostHeadNavigator from "../../../components/blog/navigation/PostHeadNavigator";
import blogMap from "../../../utils/blogMap";
import styles from "../../../styles/blog/blog.module.scss";
import { blogCategoryToColorMap } from "../../../constants/constants";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  categoryBasename: string;
  postBasename: string;
}

/** Blog post page. */
const BlogPost = ({ categoryBasename, postBasename }: Props) => {
  const categoryData = blogMap.routes[categoryBasename];
  if (!categoryData) return null;
  const postData = categoryData.routes[postBasename];
  if (!postData) return null;
  const { title: categoryTitle } = categoryData;
  const { title, date, Component } = postData;

  return (
    <>
      <Head>
        <title>
          {title} - {categoryTitle} - Blog
        </title>
      </Head>
      <div className={styles.blogContent}>
        <PostHeadNavigator
          currentCategoryTitle={categoryTitle}
          currentPostTitle={title}
          categoryBasename={categoryBasename}
        />
        <h1
          className={styles.blogTitle}
          style={{ color: blogCategoryToColorMap[categoryBasename] }}
        >
          {title}
        </h1>
        <span className={styles.blogDate}>
          {moment(date).format("MM/DD/YYYY")}
        </span>
        <Component />
      </div>
    </>
  );
};

type path = { params: { category: string; post: string } };
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: path[] = [];

  const categoryRoutes = blogMap.routes;
  Object.keys(categoryRoutes).forEach((categoryRoute) => {
    const postRoutes = categoryRoutes[categoryRoute].routes;
    Object.keys(postRoutes).forEach((postRoute) => {
      paths.push({ params: { category: categoryRoute, post: postRoute } });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { post: postBasename, category: categoryBasename } =
    context.params || {};
  return {
    props: { categoryBasename, postBasename },
  };
};

export default BlogPost;
