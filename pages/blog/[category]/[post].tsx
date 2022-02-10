import React from "react";
import moment from "moment";
import { BlogPostTemplateProps } from "../../../types/Sitemap";
import PostHeadNavigator from "../../../components/blog/navigation/PostHeadNavigator";
import { useRouter } from "next/router";
import blogMap from "../../../utils/blogMap";
import styles from "../../../styles/blog/blog.module.scss";
import { blogCategoryToColorMap } from "../../../constants/constants";

/** Blog post page. */
const BlogPost: React.FunctionComponent<BlogPostTemplateProps> = () => {
  const { query } = useRouter();
  const { category, post } = query;
  const categoryBasename = Array.isArray(category) ? category[0] : category;
  const postBasename = Array.isArray(post) ? post[0] : post;
  const categoryData = blogMap.routes[categoryBasename];
  if (!categoryData) return null;
  const postData = categoryData.routes[postBasename];
  if (!postData) return null;
  const { title: categoryTitle } = categoryData;
  const { title, date, Component } = postData;

  return (
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
  );
};

export default BlogPost;
