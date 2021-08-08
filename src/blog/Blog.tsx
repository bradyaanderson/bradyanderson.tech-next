import "../assests/stylesheets/blog/Blog.scss";
import Sidebar from "./sidebar/Sidebar";
import React from "react";
import BlogRouter from "./router/BlogRouter";

/** Routing and skeleton for blog. */
function Blog() {
  return (
    <div className="blog-container">
      <Sidebar />
      <div className="blog-content">
        <BlogRouter />
      </div>
    </div>
  );
}

export default Blog;
