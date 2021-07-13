import BlogPost from "./BlogPost";
import { blogLandingText0 } from "./text/landingText";
import React from "react";

/** Index for blog. */
function BlogIndex() {
  return (
    <BlogPost title="Welcome">
      <pre>{blogLandingText0}</pre>
    </BlogPost>
  );
}

export default BlogIndex;
