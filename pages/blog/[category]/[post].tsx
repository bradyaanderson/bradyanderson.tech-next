import React from "react";
import moment from "moment";
import { BlogPostTemplateProps } from "../../../types/Sitemap";
import PostHeadNavigator from "../../../components/blog/navigation/PostHeadNavigator";
import {useRouter} from "next/router";
import blogMap from "../../../utils/blogMap";

/** Blog post template. */
const BlogPost: React.FunctionComponent<BlogPostTemplateProps> = () => {
  const router = useRouter();
  const { query } = router;
  const { category, post } = query;
  const categoryData = blogMap.routes[category];
  const postData = categoryData.routes[post];
  if (postData == null) return null;
  const { title: categoryTitle } = categoryData;
  const {title, date, Component} = postData;

  return (
    <div className={"blog-content"}>
      <div className="blog-post">
        <PostHeadNavigator
          currentCategoryTitle={categoryTitle}
          currentPostTitle={title}
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
