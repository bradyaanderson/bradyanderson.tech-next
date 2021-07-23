import React from "react";

interface Props {
  /** Title to display on post. */
  title: string;
  /** Optional date to display on post */
  date?: string;
}

/** Blog post skeleton. */
const BlogPost: React.FunctionComponent<Props> = ({
  title,
  date,
  children,
}) => {
  return (
    <>
      <div className="blog-content">
        <h1 className="blog-title">{title}</h1>
        {date ? <span className="blog-date">{date}</span> : null}
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogPost;
