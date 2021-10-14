import { BlogCategoryProps } from "../../../../types/Sitemap";
import Paragraph from "../../blog-components/Paragraph";
import BlogCategory from "../../blog-components/page-templates/BlogCategory";

/** Index for Retro Computing blog category */
function RetroComputingCategory({ title }: BlogCategoryProps) {
  return (
    <BlogCategory title={title}>
      <Paragraph>
        I love all computers, but to me, there is something special about retro
        computing. I was born in 1998, so it's not nostalgia that drives my love
        for these older machines, but rather an interest to know how technology
        has progressed over time.
      </Paragraph>
      <Paragraph>
        In the summer of 2021, I found a Macintosh SE/30 computer at an antique
        store and had started documenting some of the restoration process on my
        Instagram story. Quite a few of my friends had messaged me saying they
        were enjoying the content. I'm hoping to do the same this section of the
        blog will allow me to document some of my adventures in retro computing
        in a more permanent way.
      </Paragraph>
    </BlogCategory>
  );
}

export default RetroComputingCategory;
