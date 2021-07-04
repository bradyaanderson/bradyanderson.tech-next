import React from "react";
import Sidebar from "./sidebar/Sidebar";

const BlogPage: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="blog-content">{children}</div>
    </>
  );
};

export default BlogPage;
