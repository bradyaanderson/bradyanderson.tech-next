import BlogPost from "./BlogPost";
import { blogLandingText } from "./text/blogIndexText";
import React from "react";

/** Index for blog. */
function BlogIndex() {
  return (
    <BlogPost title="Welcome">
      <pre>{blogLandingText}</pre>
    </BlogPost>
  );
}

export default BlogIndex;
