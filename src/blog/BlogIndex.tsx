import BlogPost from "./blog-components/BlogPost";
import React from "react";
import { BlogPostProps } from "../../types/Sitemap";
import BlogParagraph from "./blog-components/BlogParagraph";

/** Index for blog. */
function BlogIndex({ title }: BlogPostProps) {
  return (
    <BlogPost title={title}>
      <BlogParagraph>
        I think it's about time I start a blog, or at least attempt one. Knowing
        me, I'll probably write a few posts and then get carried away with
        something else. But I might as well give it a shot. This blog will
        mostly be about computers but in the broad sense. Programming, vintage
        hardware, and game consoles all fall under the term 'computer'.
      </BlogParagraph>
      <BlogParagraph>
        Computers are the rabbit-hole I fell into a decade ago when I searched,
        "How to program a computer?" into Google a decade ago for the first
        time. They continue to fascinate me despite using them every day for
        years. The more I learn, the more I realize how little I actually know.
      </BlogParagraph>
      <BlogParagraph>
        I'm not sure if anyone else besides me will find much interest in this
        blog, but that's alright. This is mostly a way to journal what I've been
        working or something new I learned. I want to be able to look back and
        remember some of the things I've done. If you're here, I'm guessing you
        know me (the Google search algorithm won't feel the need to recommend
        this website), so feel free to shoot me a message if you'd like to talk
        about anything you see.
      </BlogParagraph>
      <BlogParagraph>Enjoy!</BlogParagraph>
      <BlogParagraph>-Brady</BlogParagraph>
    </BlogPost>
  );
}

export default BlogIndex;
