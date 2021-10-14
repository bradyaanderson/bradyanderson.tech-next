import React, { useEffect } from "react";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";

interface Props {
  /** Title to display on category. */
  title: string;
}

/** Blog index template. */
const BlogIndex: React.FunctionComponent<Props> = ({ title, children }) => {
  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-index">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogIndex;
