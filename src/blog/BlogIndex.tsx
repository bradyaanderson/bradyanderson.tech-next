import React from "react";
import Paragraph from "./blog-components/Paragraph";
import BlogIndexTemplate from "./blog-components/page-templates/BlogIndex";
import { BlogIndexProps } from "../../types/Sitemap";
import CategoryNavigationContainer from "./blog-components/navigation/CategoryNavigationContainer";
import {
  getCategoryToLink,
  getRecentPostDetails,
} from "./utils/navigationUtils";
import RecentPostsContainer from "./blog-components/navigation/RecentPostsContainer";

/** Index for blog. */
function BlogIndex({ routes }: BlogIndexProps) {
  getRecentPostDetails(routes);
  return (
    <BlogIndexTemplate title="Welcome">
      <Paragraph>
        I think it's about time I start a blog, or at least attempt one. Knowing
        me, I'll probably write a few posts and then get carried away with
        something else. But I might as well give it a shot. This blog will
        mostly be about computers but in the broad sense (programming, vintage
        hardware, gaming, etc.).
      </Paragraph>
      <Paragraph>
        I'm not sure if anyone else besides me will find much interest in this
        blog, but that's alright. This is mostly a way to journal what I've been
        working or something new I learned. I want to be able to look back and
        remember some of the things I've done. If you have somehow found this
        blog though, I hope you enjoy!
      </Paragraph>
      <Paragraph>-Brady</Paragraph>
      <CategoryNavigationContainer
        categoryNameToPath={getCategoryToLink(routes)}
      />
      <RecentPostsContainer postTitleToLink={{}} />
    </BlogIndexTemplate>
  );
}

export default BlogIndex;
