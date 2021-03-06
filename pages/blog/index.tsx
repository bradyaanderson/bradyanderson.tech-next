import React from "react";
import Paragraph from "../../components/general/Paragraph";
import blogMap from "../../utils/blogMap";
import CategoryNavigationContainer from "../../components/blog/navigation/CategoryNavigationContainer";
import {
  getCategoryToLink,
  getRecentPostDetails,
} from "../../utils/navigationUtils";
import PostNavigationContainer from "../../components/blog/navigation/PostNavigationContainer";
import { NextPage } from "next";
import styles from "../../styles/blog/blog.module.scss";
import Head from "next/head";

/** Index for blog. */
const BlogIndex: NextPage = () => {
  const { routes } = blogMap;
  return (
    <>
      <Head>
        <title>Blog - bradyanderson.tech</title>
      </Head>
      <div className={styles.blogContainer}>
        <div className={styles.blogContent}>
          <h1 className={styles.blogTitle}>Blog</h1>
          <Paragraph>
            Welcome to my blog! I use this blog as way to journal what I've been
            working or new things I've learned. I've broken up these posts into
            different categories. You'll also find a list of recent posts.
          </Paragraph>
          <CategoryNavigationContainer
            categoryNameToPath={getCategoryToLink(routes)}
          />
          <PostNavigationContainer
            postDetailsList={getRecentPostDetails(routes)}
          />
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
