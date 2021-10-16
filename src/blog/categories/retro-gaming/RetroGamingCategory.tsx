import { BlogCategoryProps } from "../../../../types/Sitemap";
import Paragraph from "../../blog-components/Paragraph";
import BlogCategory from "../../blog-components/page-templates/BlogCategory";

/** Index for Retro Gaming blog section */
function RetroGamingCategory(props: BlogCategoryProps) {
  return (
    <BlogCategory {...props}>
      <Paragraph>
        Retro game consoles are retro computers, but I've decided to break posts
        about gaming into their own category. Retro gaming fascinates me for the
        same reason that retro computers do: I want to not only know the history
        but experience these devices.
      </Paragraph>
      <Paragraph>
        Unlike retro personal computers, game consoles tend to be cheaper to
        collect, which is ideal for me. However, some of the prices of consoles
        are starting to worry me. I remember picking up an original Game Boy for
        only $10 just a few years ago. Today, it seems like I would be lucky to
        get one for less than $50.
      </Paragraph>
      <Paragraph>
        I guess I'm lucky that I started collecting game consoles just before
        they started getting too expensive. I just need to make sure I maintain
        these systems as they get older. I'm also hoping to learn about what
        it's like to develop games for these consoles. This is what this section
        of the blog will be dedicated to.
      </Paragraph>
    </BlogCategory>
  );
}

export default RetroGamingCategory;
