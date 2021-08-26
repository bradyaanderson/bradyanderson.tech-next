import React from "react";

interface Props {
  link: string;
}
const BlogLink: React.FunctionComponent<Props> = ({ link, children }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </>
  );
};

export default BlogLink;