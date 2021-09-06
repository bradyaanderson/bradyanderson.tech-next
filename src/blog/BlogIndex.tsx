import BlogPost from "../common/BlogPost";
import { blogLandingText } from "./text/blogIndexText";
import React from "react";
import { BlogPostProps } from "../../types/Sitemap";

/** Index for blog. */
function BlogIndex({ title }: BlogPostProps) {
  return (
    <BlogPost title={title}>
      <pre>{blogLandingText}</pre>
      <pre>-Brady</pre>
    </BlogPost>
  );
}

export default BlogIndex;
