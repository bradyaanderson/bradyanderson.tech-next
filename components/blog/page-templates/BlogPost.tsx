import React, { useEffect } from "react";
import moment from "moment";
import PostHeadNavigator from "../navigation/PostHeadNavigator";
import { BlogPostTemplateProps } from "../../../types/Sitemap";
import { scrollToTop } from "../../../utils/generalUtils";

/** Blog post template. */
const BlogPost: React.FunctionComponent<BlogPostTemplateProps> = ({
  title,
  categoryTitle,
  categoryBaseName,
  date,
  children,
}) => {
  useEffect(scrollToTop, []);

  return (
    <>
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
