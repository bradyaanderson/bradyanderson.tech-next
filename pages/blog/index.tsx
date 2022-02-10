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

/** Index for blog. */
const BlogIndex: NextPage = () => {
  const { routes } = blogMap;
  return (
    <div className={styles.blogContent}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <Paragraph>
        I think it's about time I start a blog, or at least attempt one. Knowing
        me, I'll probably write a few posts and then get carried away with
        something else. But I might as well give it a shot. This blog will
        mostly be about computers but in the broad sense (programming, vintage
        hardware, gaming, etc.).
      </Paragraph>
      <Paragraph>
        I'm not sure if anyone else besides me will find much interest in this
        blog, but that's alright. This is mostly a way to journal what I've been
        working or something new I learned. I want to be able to look back and
        remember some of the things I've done. If you have somehow found this
        blog though, I hope you enjoy!
      </Paragraph>
      <Paragraph>-Brady</Paragraph>
      <CategoryNavigationContainer
        categoryNameToPath={getCategoryToLink(routes)}
      />
      <PostNavigationContainer postDetailsList={getRecentPostDetails(routes)} />
    </div>
  );
};

export default BlogIndex;
