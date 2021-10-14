import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import moment from "moment";

interface Props {
  /** Title to display on post. */
  title: string;
  /** Optional date to display on post */
  date: moment.Moment;
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
        <span className="blog-date">{moment(date).format("MM/DD/YYYY")}</span>
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogPost;
