import React, { useEffect } from "react";
import moment from "moment";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";
import PostHeadNavigator from "../navigation/PostHeadNavigator";
import { BlogPostProps } from "../../../../types/Sitemap";

/** Blog post template. */
const BlogPost: React.FunctionComponent<BlogPostProps> = ({
  title,
  categoryTitle,
  categoryBaseName,
  date,
  children,
}) => {
  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-post">
        <PostHeadNavigator
          currentCategoryTitle={categoryTitle}
          currentPostTitle={title}
        />
        <h1 className={`blog-title ${categoryBaseName}-accent-text`}>
          {title}
        </h1>
        <span className="blog-date">{moment(date).format("MM/DD/YYYY")}</span>
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogPost;
