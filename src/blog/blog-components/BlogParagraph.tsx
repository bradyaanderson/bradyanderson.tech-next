import React from "react";

interface Props {}

const BlogParagraph: React.FunctionComponent<Props> = ({ children }) => {
  return <p>{children}</p>;
};

export default BlogParagraph;
