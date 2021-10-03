import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  /** Title to display on post. */
  title: string;
  /** Optional date to display on post */
  date?: string;
}

/** blog post skeleton. */
const BlogPost: React.FunctionComponent<Props> = ({
  title,
  date,
  children,
}) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="blog-post">
        <h1 className="blog-title">{title}</h1>
        {date ? <span className="blog-date">{date}</span> : null}
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogPost;
