import React from "react";
import { BlogIndexProps } from "../../types/Sitemap";
import Paragraph from "./blog-components/Paragraph";
import BlogIndexTemplate from "./blog-components/page-templates/BlogIndex";

/** Index for blog. */
function BlogIndex({ title }: BlogIndexProps) {
  return (
    <BlogIndexTemplate title={title}>
      <Paragraph>
        I think it's about time I start a blog, or at least attempt one. Knowing
        me, I'll probably write a few posts and then get carried away with
        something else. But I might as well give it a shot. This blog will
        mostly be about computers but in the broad sense. Programming, vintage
        hardware, and game consoles all fall under the term 'computer'.
      </Paragraph>
      <Paragraph>
        Computers are the rabbit-hole I fell into a decade ago when I searched,
        "How to program a computer?" into Google a decade ago for the first
        time. They continue to fascinate me despite using them every day for
        years. The more I learn, the more I realize how little I actually know.
      </Paragraph>
      <Paragraph>
        I'm not sure if anyone else besides me will find much interest in this
        blog, but that's alright. This is mostly a way to journal what I've been
        working or something new I learned. I want to be able to look back and
        remember some of the things I've done. If you're here, I'm guessing you
        know me (the Google search algorithm won't feel the need to recommend
        this website), so feel free to shoot me a message if you'd like to talk
        about anything you see.
      </Paragraph>
      <Paragraph>Enjoy!</Paragraph>
      <Paragraph>-Brady</Paragraph>
    </BlogIndexTemplate>
  );
}

export default BlogIndex;
