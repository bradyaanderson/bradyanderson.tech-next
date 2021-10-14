import React, { useEffect } from "react";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";

interface Props {
  /** Title to display on category. */
  title: string;
}

/** Blog category template. */
const BlogCategory: React.FunctionComponent<Props> = ({ title, children }) => {
  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-category">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogCategory;
