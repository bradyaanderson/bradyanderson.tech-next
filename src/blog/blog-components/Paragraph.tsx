import React from "react";

interface Props {}

/** Paragraph of blog post. Will allow for easier updates in the future. */
const Paragraph: React.FunctionComponent<Props> = ({ children }) => {
  return <span className="blog-paragraph">{children}</span>;
};

export default Paragraph;
