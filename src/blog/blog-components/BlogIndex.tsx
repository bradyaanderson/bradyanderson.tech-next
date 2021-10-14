import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  /** Title to display on category. */
  title: string;
}

/** blog index skeleton. */
const BlogIndex: React.FunctionComponent<Props> = ({ title, children }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="blog-index">
        <h1 className="blog-title">{title}</h1>
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogIndex;
