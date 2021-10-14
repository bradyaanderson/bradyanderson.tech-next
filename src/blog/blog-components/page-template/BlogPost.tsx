import React, { useEffect } from "react";
import moment from "moment";
import PageHelmut from "./template-components/PageHelmut";
import { scrollToTop } from "./templateUtils";

interface Props {
  /** Title to display on post. */
  title: string;
  /** Optional date to display on post */
  date: moment.Moment;
}

/** Blog post template. */
const BlogPost: React.FunctionComponent<Props> = ({
  title,
  date,
  children,
}) => {
  useEffect(scrollToTop, []);

  return (
    <>
      <PageHelmut title={title} />
      <div className="blog-post">
        <h1 className="blog-title">{title}</h1>
        <span className="blog-date">{moment(date).format("MM/DD/YYYY")}</span>
        <div className="blog-children">{children}</div>
      </div>
    </>
  );
};

export default BlogPost;
