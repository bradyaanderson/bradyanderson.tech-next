import BlogPost from "../../../blog-components/page-templates/BlogPost";
import { BlogPostProps } from "../../../../../types/Sitemap";
import Paragraph from "../../../blog-components/Paragraph";

function BlogNavigationUpdates(props: BlogPostProps) {
  return (
    <BlogPost {...props}>
      <Paragraph>
        When I launched this blog, I created a sidebar to allow for quick
        navigation between posts. This worked pretty well, but it had a few
        drawbacks. First, it wasn't the most mobile-friendly. Now I had taken
        the time to make sure it functioned correctly on mobile, but the text
        was small and you could easily click on the wrong link. Also, it didn't
        sort posts chronologically, which isn't very helpful if you're visiting
        a blog to see what's new. Finally, I had no plan for how to continue to
        maintain the sidebar as I added more and more posts to this blog.
      </Paragraph>
      {/*Picture of old sidebar*/}
      <Paragraph>
        Because of this, I've decided to remove the sidebar and update how to
        navigate around the blog. First is the new categories navigation section
        which can be seen on the Blog Home. This section allows you to easily
        navigate between different categories in the blog.
      </Paragraph>
      {/* Picture of category navigator */}
      <Paragraph>
        Just below the category navigation section, is a new list of recent
        posts. At the top of this list, you'll find the latest posts. Each post
        is color-coded according to which category it falls under. If you
        navigate to any blog category, you will also see a list of recent posts
        for that category.
      </Paragraph>
      {/*  Picture of recent posts */}
      <Paragraph>
        Of course, I needed a way to get back to the blog home or category after
        you've navigated to a post, so you'll also see a new navigation header
        at the top of every category or post. Clicking on "Blog Home" or the
        category name will navigate you back up to these pages.
      </Paragraph>
      {/*  Header navigation */}
      <Paragraph>
        Finally, I've updated the color scheme of this site. Instead of the
        blue-gray background from before, I've chosen to go with a plain-gray
        background. To make up for this removal of color however, I've added
        touches of colors in various other places. Links, titles, and various
        other things will now show a splash of color instead of being plain
        white or black like before. I'm still finalizing which the colors scheme
        of this website so there may be some more updates in the near future.
      </Paragraph>
    </BlogPost>
  );
}

export default BlogNavigationUpdates;
