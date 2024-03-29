import Paragraph from "../../../../general/Paragraph";
import Figure from "../../../../general/Figure";

function BlogNavigationUpdates() {
  const baseImagePath =
    "/blog/categories/development/posts/blog-navigation-updates";
  return (
    <div>
      <Paragraph>
        When I launched this blog, I created a sidebar to allow for quick
        navigation between posts. This worked pretty well, but it had a few
        drawbacks. I had taken the time to make sure it functioned correctly on
        mobile, but the text was small and you could easily click on the wrong
        link. It also didn’t sort posts chronologically, which isn’t very
        helpful if you’re visiting a blog to see what’s new. Finally, I had no
        plan for how to continue to maintain the sidebar as I added more and
        more posts to this blog.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/Sidebar.png`}
        caption="The blog with sidebar before navigation updates."
        width={672}
        height={252}
        priority
      />

      <Paragraph>
        Because of this, I’ve removed the sidebar and updated how to navigate
        around the blog. First is the new categories navigation section, which
        you can find on the blog home page. This section allows for easy
        navigation between different categories in the blog.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/CategoryNav.png`}
        caption="The new category navigator."
        width={256}
        height={171}
      />

      <Paragraph>
        Just below the category navigation section is a new list of recent
        posts. At the top of this list, you’ll find the latest posts. Each post
        is color-coded according to which category it falls under. If you
        navigate to any blog category, you will also see a list of recent posts
        for that category.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/RecentNav.png`}
        caption="The new recent posts navigator that can be found on the blog home page."
        width={672}
        height={280}
      />

      <Paragraph>
        Of course, I needed to add a way to get back to the blog home or
        category after you’ve navigated to a post, so you’ll also see a new
        navigation header at the top of every category or post. Clicking on
        “Blog Home” or the category name will navigate you back up to these
        pages.
      </Paragraph>

      <Figure
        path={`${baseImagePath}/HeadNav.png`}
        caption="The new header navigator that can be found on blog categories and posts."
        width={672}
        height={37}
      />

      <Paragraph>
        Last, I’ve updated the color scheme of this site. Instead of the
        blue-gray background from before, I’ve chosen to go with a plain-gray
        background. To make up for this removal of color, however, I’ve added
        touches of colors in various other places. Links, titles, and various
        other things will now show a splash of color instead of being plain
        white or black like before. I’m still finalizing the colors scheme of
        this website so there may be some more updates soon.
      </Paragraph>
    </div>
  );
}

export default BlogNavigationUpdates;
