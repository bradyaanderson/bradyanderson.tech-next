import React from "react";
import moment from "moment";
import { BlogPostTemplateProps } from "../../../types/Sitemap";
import PostHeadNavigator from "../../../components/blog/navigation/PostHeadNavigator";
import {useRouter} from "next/router";
import blogMap from "../../../utils/blogMap";

/** Blog post template. */
const BlogPost: React.FunctionComponent<BlogPostTemplateProps> = () => {
  const { query } = useRouter();
  const { category, post } = query;
  const categoryBasename = Array.isArray(category) ? category[0] : category;
  const postBaseName = Array.isArray(post) ? post[0] : post;
  const categoryData = blogMap.routes[categoryBasename];
  if (categoryData == null) return null;
  const postData = categoryData.routes[postBaseName];
  if (postData == null) return null;
  const { title: categoryTitle } = categoryData;
  const {title, date, Component} = postData;

  return (
    <div className={"blog-content"}>
      <div className="blog-post">
        <PostHeadNavigator
          currentCategoryTitle={categoryTitle}
          currentPostTitle={title}
          category={categoryBasename}
        />
        <h1 className={`blog-title ${category}-accent-text`}>
          {title}
        </h1>
        <span className="blog-date">{moment(date).format("MM/DD/YYYY")}</span>
        <div className="blog-children"><Component /></div>
      </div>
    </div>
  );
};

export default BlogPost;
